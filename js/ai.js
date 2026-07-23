/* ============================================ */
/* Expert System Analysis Engine v3             */
/* Personalized, blended, position-aware        */
/* ============================================ */

const ExpertAnalyzer = {

    GRADES: [
        { min: 95, grade: 'S+', color: '#6C3483' },
        { min: 90, grade: 'S',  color: '#7D3C98' },
        { min: 85, grade: 'S-', color: '#8E44AD' },
        { min: 80, grade: 'A+', color: '#1E8449' },
        { min: 75, grade: 'A',  color: '#27AE60' },
        { min: 70, grade: 'A-', color: '#2ECC71' },
        { min: 65, grade: 'B+', color: '#2471A3' },
        { min: 60, grade: 'B',  color: '#2980B9' },
        { min: 55, grade: 'B-', color: '#3498DB' },
        { min: 50, grade: 'C+', color: '#D4AC0D' },
        { min: 45, grade: 'C',  color: '#F39C12' },
        { min: 40, grade: 'C-', color: '#E67E22' },
        { min: 30, grade: 'D',  color: '#E74C3C' },
        { min: 0,  grade: 'F',  color: '#922B21' }
    ],

    TRAIT_NAMES: {
        D: { vi: 'Quyết đoán', en: 'Dominance' },
        I: { vi: 'Ảnh hưởng', en: 'Influence' },
        S: { vi: 'Kiên định', en: 'Steadiness' },
        C: { vi: 'Tuân thủ', en: 'Compliance' }
    },

    async analyze(data) {
        return Promise.resolve(this.generateAnalysis(data));
    },

    getGrade(score) {
        for (const g of this.GRADES) {
            if (score >= g.min) return g;
        }
        return this.GRADES[this.GRADES.length - 1];
    },

    findJobMatch(positionName, industry) {
        if (!positionName) return null;
        const matches = this.findAllJobMatches(positionName, industry);
        return matches.length > 0 ? matches[0] : null;
    },

    /**
     * Find ALL matching jobs from the jobMatrix (multi-role support)
     * E.g. "Bác sĩ quản lý chiến lược" → matches both "Bác sĩ" AND "Quản lý"
     */
    findAllJobMatches(positionName, industry) {
        if (!positionName) return [];
        const normalizedPos = positionName.toLowerCase().trim();
        const matrix = EXPERT_DB.jobMatrix;
        const matches = [];
        const addedKeys = new Set();

        for (const key in matrix) {
            const job = matrix[key];
            if (!job.keywords) continue;
            const matched = job.keywords.some(kw => normalizedPos.includes(kw.toLowerCase()));
            if (matched && !addedKeys.has(key)) {
                // Prioritize same-industry matches
                const priority = job.industry === industry ? 0 : 1;
                matches.push({ job, key, priority });
                addedKeys.add(key);
            }
        }

        // Sort: same industry first
        matches.sort((a, b) => a.priority - b.priority);
        return matches;
    },

    /**
     * Get position context phrase for personalized questions
     */
    getPositionContext(jobKey, industry, isVi) {
        const contexts = EXPERT_DB.positionContexts;
        if (!contexts || !contexts[industry]) return null;

        // Try to match jobKey to a context key
        const industryContexts = contexts[industry];
        for (const ctxKey in industryContexts) {
            if (jobKey && jobKey.includes(ctxKey)) {
                return isVi ? industryContexts[ctxKey].vi : industryContexts[ctxKey].en;
            }
        }
        // Fallback: return first available context
        const firstKey = Object.keys(industryContexts)[0];
        return firstKey ? (isVi ? industryContexts[firstKey].vi : industryContexts[firstKey].en) : null;
    },

    calculateFitScore(percentages, fitWeights) {
        if (!fitWeights) return null;
        const maxExpected = 45;
        let score = 0;
        ['D', 'I', 'S', 'C'].forEach(trait => {
            const weight = fitWeights[trait] || 0;
            const traitPct = percentages[trait] || 0;
            if (weight >= 30) {
                score += weight * Math.min(traitPct / 25, 1.5);
            } else if (weight >= 15) {
                score += weight * Math.min(traitPct / 20, 1.3);
            } else {
                score += weight * (traitPct > 35 ? 0.6 : 1.0);
            }
        });
        return Math.round(Math.min(Math.max(score, 0), 100));
    },

    /**
     * Analyze trait gaps: where the person's traits differ from position requirements
     */
    analyzeTraitGaps(percentages, fitWeights) {
        if (!fitWeights) return [];
        const gaps = [];
        ['D', 'I', 'S', 'C'].forEach(trait => {
            const weight = fitWeights[trait] || 0;
            const actual = percentages[trait] || 0;
            if (weight >= 30 && actual < 20) {
                gaps.push({ trait, type: 'low', severity: 'critical', weight, actual });
            } else if (weight >= 20 && actual < 15) {
                gaps.push({ trait, type: 'low', severity: 'moderate', weight, actual });
            } else if (weight <= 15 && actual >= 35) {
                gaps.push({ trait, type: 'high', severity: 'moderate', weight, actual });
            } else if (weight <= 10 && actual >= 40) {
                gaps.push({ trait, type: 'high', severity: 'critical', weight, actual });
            }
        });
        return gaps.sort((a, b) => (b.severity === 'critical' ? 1 : 0) - (a.severity === 'critical' ? 1 : 0));
    },

    /**
     * Generate blended description using primary + secondary
     */
    getBlendedDescription(primary, secondary, percentages, isVi) {
        const pPct = percentages[primary] || 0;
        const sPct = percentages[secondary] || 0;
        const pName = isVi ? this.TRAIT_NAMES[primary].vi : this.TRAIT_NAMES[primary].en;
        const sName = isVi ? this.TRAIT_NAMES[secondary].vi : this.TRAIT_NAMES[secondary].en;

        // Intensity descriptions based on actual percentages
        let intensity;
        if (pPct >= 40) intensity = isVi ? 'rất cao' : 'very high';
        else if (pPct >= 30) intensity = isVi ? 'cao' : 'high';
        else intensity = isVi ? 'trung bình cao' : 'moderate-high';

        let blend;
        if (sPct >= 28) blend = isVi ? 'mạnh mẽ bổ trợ bởi' : 'strongly supported by';
        else if (sPct >= 20) blend = isVi ? 'kết hợp nhẹ với' : 'lightly blended with';
        else blend = isVi ? 'với ảnh hưởng nhỏ từ' : 'with minor influence from';

        return isVi
            ? `Nhóm ${primary} ${intensity} (${pPct}%) ${blend} ${secondary} - ${sName} (${sPct}%)`
            : `${primary} ${intensity} (${pPct}%) ${blend} ${secondary} - ${sName} (${sPct}%)`;
    },

    /**
     * Generate personalized questions based on trait gaps and position
     */
    generatePersonalizedQuestions(data, jobMatch, isEmployee, isVi) {
        const name = data.name || (isVi ? 'Bạn' : 'You');
        const position = data.position || '';
        const questions = [];

        // First: add base DISC-type questions (original ones)
        const baseQuestions = EXPERT_DB.interviewQuestions[`High_${data.primary}`] || [];

        if (isEmployee) {
            // For employees: coaching questions
            baseQuestions.forEach(q => {
                questions.push({
                    question: isVi ? q.q_vi : q.q_en,
                    purpose: isVi ? q.purpose_vi : q.purpose_en,
                    type: 'coaching',
                    source: isVi ? `Dựa trên điểm yếu bản năng nhóm ${data.primary}` : `Based on natural ${data.primary} weakness`
                });
            });
        } else {
            // For candidates: interview questions
            baseQuestions.forEach(q => {
                questions.push({
                    question: isVi ? q.q_vi : q.q_en,
                    purpose: isVi ? q.purpose_vi : q.purpose_en,
                    type: 'interview',
                    source: isVi ? `Khai thác điểm mù nhóm ${data.primary}` : `Exploiting ${data.primary} blind spots`
                });
            });
        }

        // Second: add position-specific gap questions
        if (jobMatch && EXPERT_DB.traitGapTemplates) {
            const gaps = this.analyzeTraitGaps(data.percentages, jobMatch.job.fitWeights);
            const context = this.getPositionContext(jobMatch.key, data.industry, isVi) || position;

            gaps.forEach(gap => {
                const templateKey = `${gap.trait}_${gap.type}`;
                const templates = EXPERT_DB.traitGapTemplates[templateKey];
                if (!templates) return;

                const questionList = isEmployee
                    ? (templates.coaching_vi || [])
                    : (templates.interview_vi || []);

                // Pick 1-2 questions based on severity
                const count = gap.severity === 'critical' ? 2 : 1;
                questionList.slice(0, count).forEach(template => {
                    const filledQ = template
                        .replace(/\{name\}/g, name)
                        .replace(/\{position\}/g, position)
                        .replace(/\{context\}/g, context);

                    const traitName = isVi ? this.TRAIT_NAMES[gap.trait].vi : this.TRAIT_NAMES[gap.trait].en;
                    questions.push({
                        question: filledQ,
                        purpose: isVi
                            ? `Đánh giá ${gap.type === 'high' ? 'mức dư thừa' : 'thiếu hụt'} ${gap.trait} (${traitName}) cho vị trí ${position}. Yêu cầu: ${gap.weight}%, Thực tế: ${gap.actual}%.`
                            : `Evaluates ${gap.type === 'high' ? 'excess' : 'deficit'} ${gap.trait} (${traitName}) for ${position}. Required: ${gap.weight}%, Actual: ${gap.actual}%.`,
                        type: isEmployee ? 'coaching-position' : 'interview-position',
                        source: isVi
                            ? `Cá nhân hóa theo vị trí ${position} (${gap.trait} ${gap.type === 'high' ? 'dư' : 'thiếu'})`
                            : `Personalized for ${position} (${gap.trait} ${gap.type === 'high' ? 'excess' : 'deficit'})`
                    });
                });
            });
        }

        // Third: add mismatch question if very low fit
        if (jobMatch) {
            const score = this.calculateFitScore(data.percentages, jobMatch.job.fitWeights);
            if (score < 50) {
                const mismatchQ = EXPERT_DB.interviewQuestions.Match_Mismatch[0];
                if (mismatchQ) {
                    questions.push({
                        question: isVi ? mismatchQ.q_vi : mismatchQ.q_en,
                        purpose: isVi ? mismatchQ.purpose_vi : mismatchQ.purpose_en,
                        type: isEmployee ? 'coaching-warning' : 'interview-warning',
                        source: isVi ? '⚠️ Cảnh báo: Vênh vị trí nghiêm trọng' : '⚠️ Warning: Serious position mismatch'
                    });
                }
            }
        }

        return questions;
    },

    // =========================================
    // MAIN ANALYSIS GENERATOR
    // =========================================
    generateAnalysis(data) {
        const isVi = Storage.getLang() === 'vi';
        const profile = DISC_PROFILES[data.profileId] || DISC_PROFILES[data.primary] || {};
        const isEmployee = data.targetType === 'employee';
        const name = data.name || (isVi ? 'Ứng viên' : 'Candidate');

        // Find ALL job matches (multi-role support)
        const allMatches = this.findAllJobMatches(data.position, data.industry);
        const matchResult = allMatches.length > 0 ? allMatches[0] : null;
        const jobMatch = matchResult ? matchResult.job : null;
        const jobKey = matchResult ? matchResult.key : null;

        // === 1. JOB FIT (supports multi-role) ===
        let jobFit = null;
        if (jobMatch) {
            const score = this.calculateFitScore(data.percentages, jobMatch.fitWeights);
            const gradeInfo = this.getGrade(score);
            const gaps = this.analyzeTraitGaps(data.percentages, jobMatch.fitWeights);

            const breakdown = {};
            ['D', 'I', 'S', 'C'].forEach(trait => {
                const weight = jobMatch.fitWeights[trait] || 0;
                const traitPct = data.percentages[trait] || 0;
                let status, statusVi;
                if (weight >= 30) {
                    if (traitPct >= 25) { status = 'match'; statusVi = 'Phù hợp'; }
                    else if (traitPct >= 15) { status = 'partial'; statusVi = 'Chấp nhận được'; }
                    else { status = 'low'; statusVi = 'Thiếu hụt'; }
                } else if (weight <= 10) {
                    if (traitPct >= 35) { status = 'excess'; statusVi = 'Dư thừa'; }
                    else { status = 'ok'; statusVi = 'Ổn'; }
                } else {
                    if (traitPct >= 15) { status = 'match'; statusVi = 'Phù hợp'; }
                    else { status = 'ok'; statusVi = 'Ổn'; }
                }
                breakdown[trait] = {
                    weight, actual: traitPct, status,
                    statusLabel: isVi ? statusVi : status
                };
            });

            // Personalized summary
            let personalSummary = '';
            if (gaps.length === 0) {
                personalSummary = isVi
                    ? `${name} có cấu trúc tính cách tự nhiên phù hợp với yêu cầu cốt lõi của vị trí ${data.position}.`
                    : `${name}'s natural personality structure aligns with the core requirements of the ${data.position} role.`;
            } else {
                const gapDescs = gaps.map(g => {
                    const tn = isVi ? this.TRAIT_NAMES[g.trait].vi : this.TRAIT_NAMES[g.trait].en;
                    return g.type === 'high'
                        ? (isVi ? `${g.trait} (${tn}) quá cao so với yêu cầu` : `${g.trait} (${tn}) too high for the role`)
                        : (isVi ? `${g.trait} (${tn}) thấp hơn mức cần thiết` : `${g.trait} (${tn}) below required level`);
                });
                personalSummary = isVi
                    ? `${name} có ${gaps.length} khoảng cách cần lưu ý: ${gapDescs.join('; ')}. ${isEmployee ? 'Cần coaching tập trung vào các điểm này.' : 'Cần khai thác kỹ trong phỏng vấn.'}`
                    : `${name} has ${gaps.length} gap(s): ${gapDescs.join('; ')}. ${isEmployee ? 'Coaching should focus on these areas.' : 'Interview should probe these gaps.'}`;
            }

            // Secondary role matches
            const secondaryRoles = [];
            if (allMatches.length > 1) {
                allMatches.slice(1, 4).forEach(m => {
                    const s = this.calculateFitScore(data.percentages, m.job.fitWeights);
                    const g = this.getGrade(s);
                    secondaryRoles.push({
                        key: m.key,
                        score: s,
                        grade: g.grade,
                        gradeColor: g.color,
                        description: isVi ? m.job.description_vi : m.job.description_en,
                        idealPrimary: m.job.idealPrimary,
                        idealSecondary: m.job.idealSecondary
                    });
                });
            }

            jobFit = {
                score, grade: gradeInfo.grade, gradeColor: gradeInfo.color,
                position: data.position,
                description: isVi ? jobMatch.description_vi : jobMatch.description_en,
                requirements: isVi ? jobMatch.requirements_vi : jobMatch.requirements_en,
                breakdown, gaps,
                personalSummary,
                blendedProfile: this.getBlendedDescription(data.primary, data.secondary, data.percentages, isVi),
                secondaryRoles
            };
        }

        // === 2. COMMUNICATION (blended primary+secondary) ===
        const commPrimary = EXPERT_DB.communicationStyles[data.primary] || {};
        const commSecondary = EXPERT_DB.communicationStyles[data.secondary] || {};

        const communication = {
            style: isVi
                ? `${name} giao tiếp theo phong cách: ${commPrimary.style_vi || ''} ${data.percentages[data.secondary] >= 25 ? `Khi thoải mái, cũng thể hiện nét ${data.secondary}: ${commSecondary.style_vi || ''}` : ''}`
                : `${name} communicates: ${commPrimary.style_en || ''} ${data.percentages[data.secondary] >= 25 ? `When relaxed, also shows ${data.secondary} traits: ${commSecondary.style_en || ''}` : ''}`,
            conflict: isVi ? commPrimary.conflict_vi : commPrimary.conflict_en,
            teamwork: isVi
                ? `${commPrimary.teamwork_vi || ''} ${data.percentages[data.secondary] >= 25 ? `Nhóm phụ ${data.secondary} giúp ${name} ${(commSecondary.teamwork_vi || '').toLowerCase()}` : ''}`
                : `${commPrimary.teamwork_en || ''} ${data.percentages[data.secondary] >= 25 ? `Secondary ${data.secondary} helps ${name} ${(commSecondary.teamwork_en || '').toLowerCase()}` : ''}`,
            doNot: isVi ? commPrimary.doNot_vi : commPrimary.doNot_en,
            bestWith: commPrimary.bestWith || [],
            avoidWith: commPrimary.avoidWith || [],
            pairingAdvice: isVi ? commPrimary.pairingAdvice_vi : commPrimary.pairingAdvice_en
        };

        // === 3. MOTIVATORS (personalized with name + intensity) ===
        const mfData = EXPERT_DB.motivatorsAndFears[data.primary] || {};
        const mfSecondary = EXPERT_DB.motivatorsAndFears[data.secondary] || {};
        const secondaryInfluence = data.percentages[data.secondary] >= 25;

        const motivators = {
            list: isVi ? (mfData.motivators_vi || []) : (mfData.motivators_en || []),
            fears: isVi ? (mfData.fears_vi || []) : (mfData.fears_en || []),
            idealEnv: isVi ? mfData.idealEnv_vi : mfData.idealEnv_en,
            burnoutSign: isVi
                ? `${name}: ${mfData.burnoutSign_vi || ''}`
                : `${name}: ${mfData.burnoutSign_en || ''}`,
            // Add secondary influence
            secondaryMotivators: secondaryInfluence
                ? (isVi ? (mfSecondary.motivators_vi || []).slice(0, 2) : (mfSecondary.motivators_en || []).slice(0, 2))
                : [],
            secondaryTrait: data.secondary,
            hasSecondaryInfluence: secondaryInfluence
        };

        // === 4. DEMOGRAPHICS (personalized with name) ===
        let demographicNotes = [];
        if (data.experience !== undefined && data.experience !== '') {
            const exp = parseFloat(data.experience);
            if (exp <= 1) {
                demographicNotes.push(isVi
                    ? `${name} (${exp} năm kinh nghiệm): Nhân sự mới. Đặc tính nhóm ${data.primary} bộc lộ nguyên sơ, chưa qua mài giũa. Cần hướng dẫn sát sao và đánh giá lại sau 3 tháng.`
                    : `${name} (${exp} years): Entry level. Raw ${data.primary} traits, needs close mentoring. Re-evaluate after 3 months.`);
            } else if (exp >= 5) {
                demographicNotes.push(isVi
                    ? `${name} (${exp} năm kinh nghiệm): Dày dặn. Có khả năng điều chỉnh hành vi linh hoạt, có thể che giấu điểm yếu bản năng nhóm ${data.primary}. Cần quan sát hành vi thực tế trong 2-4 tuần đầu thay vì tin hoàn toàn vào kết quả test.`
                    : `${name} (${exp} years): Senior. Can adapt and mask ${data.primary} weaknesses. Observe real behavior in the first 2-4 weeks rather than fully trusting test results.`);
            } else {
                demographicNotes.push(isVi
                    ? `${name} (${exp} năm kinh nghiệm): Đang phát triển phong cách làm việc gắn với nhóm ${data.primary}. Đây là giai đoạn tốt để coaching định hướng.`
                    : `${name} (${exp} years): Developing professional style anchored in ${data.primary}. Good stage for directional coaching.`);
            }
        }

        // Gender-DISC (personalized)
        const genderInsights = {
            'female-D': isVi ? `${name} (Nữ, nhóm D): Quyết đoán, mạnh mẽ. Trong văn hoá Việt Nam, có thể vấp phải định kiến "quá cứng". Nên rèn thêm kỹ năng mềm mỏng (I/S) để lãnh đạo thuyết phục hơn.` : `${name} (Female, D): Decisive. May face "too tough" bias. Develop softer I/S communication for more persuasive leadership.`,
            'male-S': isVi ? `${name} (Nam, nhóm S): Kiên nhẫn, trung thành. Có thể bị đánh giá thiếu tham vọng. Phù hợp môi trường ổn định, có quy trình rõ ràng.` : `${name} (Male, S): Patient, loyal. May be seen as lacking ambition. Thrives in structured environments.`,
            'female-I': isVi ? `${name} (Nữ, nhóm I): Lợi thế giao tiếp, kết nối xuất sắc. Cần lưu ý bổ sung kỹ năng quản lý thời gian và chi tiết.` : `${name} (Female, I): Excellent communicator. Needs to supplement with time management and detail skills.`,
            'male-C': isVi ? `${name} (Nam, nhóm C): Logic, lý trí, chi tiết. Phù hợp vai trò chuyên gia, kỹ thuật, phân tích.` : `${name} (Male, C): Logical, detailed. Perfect for expert/technical/analytical roles.`,
            'male-D': isVi ? `${name} (Nam, nhóm D): Phong cách lãnh đạo tự nhiên. Cần kiểm soát xu hướng áp đặt, đặc biệt với đồng nghiệp nữ hoặc nhân sự mới.` : `${name} (Male, D): Natural leader. Must control over-dominance, especially with female colleagues or new staff.`,
            'female-S': isVi ? `${name} (Nữ, nhóm S): Rất phù hợp vai trò chăm sóc, hỗ trợ. Cần được khuyến khích chủ động nói lên ý kiến.` : `${name} (Female, S): Ideal for care/support. Needs encouragement to voice opinions.`,
            'male-I': isVi ? `${name} (Nam, nhóm I): Năng lượng truyền cảm hứng cao. Cần kỷ luật bản thân để hoàn thành công việc đến cùng.` : `${name} (Male, I): High inspirational energy. Needs self-discipline to finish tasks.`,
            'female-C': isVi ? `${name} (Nữ, nhóm C): Chi tiết, chính xác. Có thể gặp khó khi cần giao tiếp nhiều hoặc ra quyết định nhanh.` : `${name} (Female, C): Detailed, accurate. May struggle with heavy communication or fast decisions.`
        };

        if (data.gender && data.primary) {
            const key = `${data.gender}-${data.primary}`;
            if (genderInsights[key]) demographicNotes.push(genderInsights[key]);
        }

        // === 5. QUESTIONS (personalized) ===
        const questions = this.generatePersonalizedQuestions(data, matchResult, isEmployee, isVi);

        // === 6. DECEPTION SIGNS (candidate only, personalized) ===
        let deceptionSigns = [];
        if (!isEmployee) {
            const dsData = EXPERT_DB.deceptionSigns[data.primary] || {};
            deceptionSigns = isVi ? (dsData.signs_vi || []) : (dsData.signs_en || []);
        }

        // === 7. ROADMAP (personalized with name and position context) ===
        const roadmapData = EXPERT_DB.trainingRoadmap[data.primary] || {};
        const posCtx = matchResult ? this.getPositionContext(jobKey, data.industry, isVi) : null;
        const roadmap = {
            day30: isVi ? roadmapData.day30_vi : roadmapData.day30_en,
            day60: isVi ? roadmapData.day60_vi : roadmapData.day60_en,
            day90: isVi ? roadmapData.day90_vi : roadmapData.day90_en,
            personalNote: posCtx
                ? (isVi
                    ? `Lưu ý riêng cho ${name} tại vị trí ${data.position}: Tập trung vào việc ${posCtx} trong suốt giai đoạn thử việc.`
                    : `Note for ${name} at ${data.position}: Focus on ${posCtx} throughout the probation period.`)
                : null
        };

        // === 8. TEAM PAIRING ===
        const pairingKey1 = `${data.primary}-${data.secondary}`;
        const pairingKey2 = `${data.secondary}-${data.primary}`;
        const pairingData = EXPERT_DB.teamPairing[pairingKey1] || EXPERT_DB.teamPairing[pairingKey2] || {};
        const teamPairing = {
            pair: `${data.primary} + ${data.secondary}`,
            synergy: isVi ? pairingData.synergy_vi : pairingData.synergy_en,
            friction: isVi ? pairingData.friction_vi : pairingData.friction_en,
            advice: isVi ? pairingData.advice_vi : pairingData.advice_en,
            bestWith: (EXPERT_DB.communicationStyles[data.primary] || {}).bestWith || [],
            avoidWith: (EXPERT_DB.communicationStyles[data.primary] || {}).avoidWith || [],
            personalAdvice: isVi
                ? `Khi xếp nhóm cho ${name}, ưu tiên ghép với đồng nghiệp nhóm ${((EXPERT_DB.communicationStyles[data.primary] || {}).bestWith || []).join(' hoặc ')} để phát huy tối đa hiệu suất.`
                : `When forming teams for ${name}, prioritize pairing with ${((EXPERT_DB.communicationStyles[data.primary] || {}).bestWith || []).join(' or ')} colleagues for maximum performance.`
        };

        // === 9. MISMATCH WARNING ===
        let mismatchWarning = null;
        if (jobFit && jobFit.score < 50) {
            mismatchWarning = {
                type: isEmployee ? 'employee' : 'candidate',
                message: isEmployee
                    ? (isVi ? `${name} đang có dấu hiệu gồng mình tại vị trí ${data.position}. Cần thảo luận về việc cân bằng áp lực hoặc điều chỉnh JD.` : `${name} shows signs of strain in the ${data.position} role. Discuss workload balance or JD adjustment.`)
                    : (isVi ? `${name} có tính cách tự nhiên "vênh" lớn so với yêu cầu vị trí ${data.position}. Cần đánh giá kỹ khả năng thích nghi.` : `${name}'s natural personality significantly mismatches the ${data.position} requirements. Carefully assess adaptability.`)
            };
        }

        return {
            isEmployee, name,
            jobFit, communication, motivators, demographicNotes,
            questions, deceptionSigns, roadmap, teamPairing, mismatchWarning
        };
    }
};
