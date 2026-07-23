/* ============================================ */
/* DISC Scoring Engine                          */
/* ============================================ */

const DISCScoring = {
    /**
     * Calculate DISC scores from answers
     * @param {Array} answers - Array of { questionId, most, least } objects
     * @returns {Object} Scoring results
     */
    calculate(answers) {
        const scores = { D: 0, I: 0, S: 0, C: 0 };
        const mostScores = { D: 0, I: 0, S: 0, C: 0 };
        const leastScores = { D: 0, I: 0, S: 0, C: 0 };
        const contextScores = {
            work: { D: 0, I: 0, S: 0, C: 0 },
            life: { D: 0, I: 0, S: 0, C: 0 }
        };

        answers.forEach(answer => {
            const question = DISC_QUESTIONS.find(q => q.id === answer.questionId);
            if (!question) return;

            const mostOption = question.options.find(o => o.id === answer.most);
            const leastOption = question.options.find(o => o.id === answer.least);

            if (mostOption) {
                mostScores[mostOption.disc]++;
                scores[mostOption.disc]++;
                contextScores[question.context][mostOption.disc]++;
            }
            if (leastOption) {
                leastScores[leastOption.disc]++;
                scores[leastOption.disc]--;
                contextScores[question.context][leastOption.disc]--;
            }
        });

        // Normalize to percentages (0-100 scale)
        const total = Object.values(scores).reduce((sum, v) => sum + Math.abs(v), 0) || 1;
        const percentages = {};
        const normalizedScores = {};
        
        // Shift scores to positive range first
        const minScore = Math.min(...Object.values(scores));
        const shifted = {};
        for (const key of ['D', 'I', 'S', 'C']) {
            shifted[key] = scores[key] - minScore + 1; // +1 to avoid zero
        }
        
        const shiftedTotal = Object.values(shifted).reduce((sum, v) => sum + v, 0);
        for (const key of ['D', 'I', 'S', 'C']) {
            percentages[key] = Math.round((shifted[key] / shiftedTotal) * 100);
            normalizedScores[key] = shifted[key];
        }

        // Ensure percentages sum to 100
        const pctTotal = Object.values(percentages).reduce((sum, v) => sum + v, 0);
        if (pctTotal !== 100) {
            const maxKey = Object.keys(percentages).reduce((a, b) => percentages[a] > percentages[b] ? a : b);
            percentages[maxKey] += (100 - pctTotal);
        }

        // Determine primary and secondary groups
        const sorted = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
        const primary = sorted[0][0];
        const secondary = sorted[1][0];
        const tertiary = sorted[2][0];
        const quaternary = sorted[3][0];

        // Determine profile ID
        const profileId = primary + secondary;

        // Get level descriptions
        const levels = {};
        for (const [key, pct] of Object.entries(percentages)) {
            if (pct >= 35) levels[key] = { vi: 'Rất cao', en: 'Very High' };
            else if (pct >= 28) levels[key] = { vi: 'Cao', en: 'High' };
            else if (pct >= 22) levels[key] = { vi: 'Trung bình', en: 'Medium' };
            else if (pct >= 15) levels[key] = { vi: 'Thấp', en: 'Low' };
            else levels[key] = { vi: 'Rất thấp', en: 'Very Low' };
        }

        // Build distribution string
        const distributionOrder = sorted.map(([key, pct]) => {
            const levelText = levels[key].vi;
            return `Nhóm ${key} (${levelText})`;
        });
        const distributionVi = distributionOrder.join(' > ');

        return {
            raw: scores,
            most: mostScores,
            least: leastScores,
            percentages,
            normalizedScores,
            primary,
            secondary,
            tertiary,
            quaternary,
            profileId,
            levels,
            distribution: {
                vi: distributionVi,
                en: sorted.map(([key]) => `${key} (${levels[key].en})`).join(' > ')
            },
            contextScores,
            sorted
        };
    },

    /**
     * Calculate consistency score based on answer changes and consistency pairs
     * @param {Array} answers - answered questions
     * @param {Object} changeLog - { questionId: numberOfChanges }
     * @param {Array} consistencyPairs - from CONSISTENCY_PAIRS
     * @returns {Object} Consistency results
     */
    calculateConsistency(answers, changeLog, consistencyPairs) {
        let totalChanges = 0;
        for (const key in changeLog) {
            totalChanges += changeLog[key];
        }

        // Check consistency pairs
        let pairsChecked = 0;
        let pairsConsistent = 0;

        if (consistencyPairs && consistencyPairs.length > 0) {
            consistencyPairs.forEach(pair => {
                const a1 = answers.find(a => a.questionId === pair.q1);
                const a2 = answers.find(a => a.questionId === pair.q2);

                if (a1 && a2) {
                    pairsChecked++;
                    const q1 = DISC_QUESTIONS.find(q => q.id === pair.q1);
                    const q2 = DISC_QUESTIONS.find(q => q.id === pair.q2);

                    if (q1 && q2) {
                        // Check if the MOST choice maps to the same DISC group
                        const most1 = q1.options.find(o => o.id === a1.most);
                        const most2 = q2.options.find(o => o.id === a2.most);

                        if (most1 && most2 && most1.disc === most2.disc) {
                            pairsConsistent++;
                        }
                    }
                }
            });
        }

        // Calculate base consistency from pairs (0-100)
        const pairScore = pairsChecked > 0 ? (pairsConsistent / pairsChecked) * 100 : 100;

        // Penalize for excessive changes (more than 1 change per question average is suspicious)
        const changesPenalty = Math.min(totalChanges * 3, 30); // Max 30% penalty

        // Final score
        const score = Math.max(0, Math.round(pairScore - changesPenalty));

        let level, description_vi, description_en;
        if (score >= 80) {
            level = 'high';
            description_vi = 'Độ tin cậy CAO - Ứng viên trả lời nhất quán, phản ánh tính cách thật.';
            description_en = 'HIGH reliability - Candidate answered consistently, reflecting true personality.';
        } else if (score >= 60) {
            level = 'medium';
            description_vi = 'Độ tin cậy TRUNG BÌNH - Có một số thay đổi câu trả lời, kết quả vẫn đáng tin.';
            description_en = 'MEDIUM reliability - Some answer changes detected, results still reliable.';
        } else {
            level = 'low';
            description_vi = '⚠️ Độ tin cậy THẤP - Ứng viên thay đổi nhiều câu trả lời hoặc không nhất quán. Khuyến nghị phỏng vấn sâu để xác minh.';
            description_en = '⚠️ LOW reliability - Candidate changed many answers or showed inconsistency. Recommend in-depth interview to verify.';
        }

        return {
            score,
            level,
            totalChanges,
            pairsChecked,
            pairsConsistent,
            description: { vi: description_vi, en: description_en },
            isWarning: score < 60
        };
    },

    /**
     * Get evidence citations from answers
     * @param {Array} answers - answered questions  
     * @param {String} discGroup - 'D', 'I', 'S', or 'C'
     * @param {String} type - 'most' or 'least'
     * @param {String} lang - 'vi' or 'en'
     * @returns {Array} Array of citation strings
     */
    getEvidenceCitations(answers, discGroup, type, lang = 'vi') {
        const citations = [];
        const textKey = lang === 'vi' ? 'text_vi' : 'text_en';

        answers.forEach(answer => {
            const question = DISC_QUESTIONS.find(q => q.id === answer.questionId);
            if (!question) return;

            const selectedId = type === 'most' ? answer.most : answer.least;
            const selectedOption = question.options.find(o => o.id === selectedId);

            if (selectedOption && selectedOption.disc === discGroup) {
                citations.push(`"${selectedOption[textKey]}"`);
            }
        });

        return citations;
    }
};
