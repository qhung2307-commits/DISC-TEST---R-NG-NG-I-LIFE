/* ============================================ */
/* Report Generator v2                         */
/* Renders 8-part comprehensive DISC report    */
/* ============================================ */

const ReportGenerator = {

    render(resultData) {
        const lang = I18N.currentLang;
        const isVi = lang === 'vi';
        const profile = DISC_PROFILES[resultData.profileId] || DISC_PROFILES[resultData.primary] || {};

        this.renderOverview(resultData, profile, isVi);
        this.renderPart1(resultData, profile, isVi);

        // Run Expert Analysis and render all dependent parts
        this.renderExpertParts(resultData, profile, isVi);

        this.renderConsistency(resultData, isVi);

        // Render chart
        ChartRenderer.renderRadar('chart-report', resultData.percentages);
    },

    // === OVERVIEW ===
    renderOverview(data, profile, isVi) {
        const el = document.getElementById('report-overview-content');
        if (!el) return;

        const archetype = isVi ? (profile.archetype_vi || 'N/A') : (profile.archetype_en || 'N/A');
        const industryNames = {
            dental: isVi ? 'Nha khoa / Y tế' : 'Dental / Healthcare',
            fnb: 'F&B',
            hospitality: isVi ? 'Lưu trú' : 'Hospitality',
            general: isVi ? 'Khác' : 'General'
        };
        const targetNames = {
            candidate: isVi ? 'Ứng viên (Tuyển dụng)' : 'Candidate (Recruitment)',
            employee: isVi ? 'Nhân sự (Nội bộ)' : 'Employee (Internal)'
        };
        const genderNames = { male: isVi ? 'Nam' : 'Male', female: isVi ? 'Nữ' : 'Female' };

        const fields = [
            [isVi ? 'Họ và tên' : 'Full Name', data.name],
            [isVi ? 'Mục đích' : 'Target', targetNames[data.targetType] || (isVi ? 'Ứng viên' : 'Candidate')],
            [isVi ? 'Vị trí' : 'Position', data.position],
            [isVi ? 'Ngành nghề' : 'Industry', industryNames[data.industry] || data.industry],
            [isVi ? 'Phòng ban' : 'Department', data.department || 'N/A'],
        ];
        if (data.gender) fields.push([isVi ? 'Giới tính' : 'Gender', genderNames[data.gender] || data.gender]);
        if (data.experience) fields.push([isVi ? 'Kinh nghiệm' : 'Experience', `${data.experience} ${isVi ? 'năm' : 'years'}`]);
        fields.push(
            [isVi ? 'Nhóm chủ đạo' : 'Primary', `${data.primary} - ${data.secondary}`],
            [isVi ? 'Tỷ lệ' : 'Distribution', isVi ? data.distribution.vi : data.distribution.en],
            [isVi ? 'Hình mẫu' : 'Archetype', archetype],
            [isVi ? 'Ngày' : 'Date', Storage.formatDateTime(data.timestamp || new Date())]
        );
        if (data.evaluator) fields.push([isVi ? 'Người đánh giá' : 'Evaluator', data.evaluator]);

        el.innerHTML = fields.map(([label, value]) =>
            `<span class="overview-label">${label}:</span><span class="overview-value">${value}</span>`
        ).join('');
    },

    // === PART 1: Personality Analysis (unchanged logic) ===
    renderPart1(data, profile, isVi) {
        const el = document.getElementById('report-part1-content');
        if (!el) return;

        if (!profile.personalityAnalysis) {
            el.innerHTML = '<p>Profile data not available.</p>';
            return;
        }

        const pa = profile.personalityAnalysis;
        const groups = ['primary', 'secondary', 'tertiary', 'quaternary'];
        const groupMap = { primary: data.primary, secondary: data.secondary, tertiary: data.tertiary, quaternary: data.quaternary };
        const groupNames = {
            D: isVi ? 'Quyết đoán, Thống lĩnh' : 'Dominance, Leadership',
            I: isVi ? 'Ảnh hưởng, Giao tiếp' : 'Influence, Communication',
            S: isVi ? 'Kiên định, Hỗ trợ, Thấu cảm' : 'Steadiness, Support, Empathy',
            C: isVi ? 'Tuân thủ, Phân tích, Logic' : 'Compliance, Analysis, Logic'
        };

        let html = '';
        groups.forEach(rank => {
            const groupData = pa[rank];
            if (!groupData) return;
            const discGroup = groupData.group || groupMap[rank];
            const level = isVi ? (groupData.level_vi || '') : (groupData.level_en || '');
            const analysis = isVi ? (groupData.analysis_vi || '') : (groupData.analysis_en || '');
            const mostCitations = DISCScoring.getEvidenceCitations(data.answers, discGroup, 'most', isVi ? 'vi' : 'en');
            const evidenceText = mostCitations.length > 0
                ? `${isVi ? 'Minh chứng: Chọn' : 'Evidence: Selected'} ${mostCitations.slice(0, 3).join(', ')}`
                : '';

            html += `
            <div class="trait-block trait-${discGroup.toLowerCase()}">
                <div class="trait-header">
                    <span class="trait-name">${rank === 'primary' ? '1' : rank === 'secondary' ? '2' : rank === 'tertiary' ? '3' : '4'}. ${isVi ? 'Nhóm' : 'Group'} ${discGroup} (${groupNames[discGroup] || ''}) - ${isVi ? 'Mức độ' : 'Level'} ${level.toUpperCase()}</span>
                    <span class="trait-level">${data.percentages[discGroup]}%</span>
                </div>
                ${evidenceText ? `<p class="trait-evidence">${evidenceText}</p>` : ''}
                <div class="trait-analysis">${analysis}</div>
            </div>`;
        });
        el.innerHTML = html;
    },

    // === ALL EXPERT-DRIVEN PARTS (2, 4, 5, 6, 7) ===
    async renderExpertParts(data, profile, isVi) {
        try {
            const analysis = await ExpertAnalyzer.analyze(data);

            this.renderPart2_JobFit(analysis, data, profile, isVi);
            this.renderPart3(data, profile, isVi); // Red flags (unchanged)
            this.renderPart4_Communication(analysis, isVi);
            this.renderPart5_Motivators(analysis, isVi);
            this.renderPart6_Questions(analysis, data, isVi);
            this.renderPart7_Strategy(analysis, data, profile, isVi);
        } catch (err) {
            console.error('Expert analysis error:', err);
        }
    },

    // === PART 2: Job Fit (Rewritten) ===
    renderPart2_JobFit(analysis, data, profile, isVi) {
        const el = document.getElementById('report-part2-content');
        if (!el) return;

        const jf = analysis.jobFit;
        let html = '';

        if (jf) {
            // Grade badge + Score
            html += `
            <div class="jobfit-score-container">
                <div class="jobfit-grade-badge" style="background: ${jf.gradeColor};">
                    <span class="grade-letter">${jf.grade}</span>
                    <span class="grade-score">${jf.score}/100</span>
                </div>
                <div class="jobfit-info">
                    <h3>${jf.position}</h3>
                    ${jf.blendedProfile ? `<p class="blended-profile"><strong>${isVi ? 'Hồ sơ tính cách:' : 'Personality Profile:'}</strong> ${jf.blendedProfile}</p>` : ''}
                    <p>${jf.description}</p>
                    ${jf.personalSummary ? `<p class="personal-summary"><strong>📌 ${isVi ? 'Nhận xét riêng:' : 'Personal Note:'}</strong> ${jf.personalSummary}</p>` : ''}
                </div>
            </div>`;

            // Breakdown bars
            html += `<div class="jobfit-breakdown">
                <h4>${isVi ? 'Phân tích chi tiết từng yếu tố' : 'Detailed Factor Breakdown'}</h4>
                <div class="breakdown-grid">`;

            ['D', 'I', 'S', 'C'].forEach(trait => {
                const bd = jf.breakdown[trait];
                const statusColors = { match: '#27AE60', partial: '#F39C12', low: '#E74C3C', excess: '#9B59B6', ok: '#95A5A6' };
                html += `
                <div class="breakdown-item">
                    <div class="breakdown-header">
                        <span class="breakdown-trait">${trait}</span>
                        <span class="breakdown-status" style="color: ${statusColors[bd.status] || '#666'};">${bd.statusLabel}</span>
                    </div>
                    <div class="breakdown-bars">
                        <div class="breakdown-bar-bg">
                            <div class="breakdown-bar-need" style="width: ${bd.weight}%;" title="${isVi ? 'Yêu cầu' : 'Required'}: ${bd.weight}%"></div>
                            <div class="breakdown-bar-actual" style="width: ${bd.actual}%;" title="${isVi ? 'Thực tế' : 'Actual'}: ${bd.actual}%"></div>
                        </div>
                        <span class="breakdown-numbers">${bd.actual}% / ${bd.weight}%</span>
                    </div>
                </div>`;
            });

            html += `</div>
                <div class="breakdown-legend">
                    <span class="legend-item"><span class="legend-dot" style="background: var(--primary);"></span> ${isVi ? 'Điểm thực tế' : 'Actual Score'}</span>
                    <span class="legend-item"><span class="legend-dot" style="background: rgba(0,0,0,0.15);"></span> ${isVi ? 'Yêu cầu vị trí' : 'Position Requirement'}</span>
                </div>
            </div>`;

            // Requirements
            if (jf.requirements && jf.requirements.length > 0) {
                html += `<div class="jobfit-requirements">
                    <h4>${isVi ? 'Yêu cầu cốt lõi của vị trí' : 'Core Position Requirements'}</h4>
                    <ul>${jf.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
                </div>`;
            }

            // Secondary role matches (multi-role)
            if (jf.secondaryRoles && jf.secondaryRoles.length > 0) {
                html += `<div class="secondary-roles">
                    <h4>🔄 ${isVi ? 'Vị trí phụ được nhận diện trong chức danh' : 'Additional roles detected in title'}</h4>
                    <p style="font-size: 13px; color: var(--text-tertiary); margin-bottom: 12px;">${isVi ? 'Hệ thống phát hiện chức danh này bao gồm nhiều vai trò. Dưới đây là đánh giá cho từng vai trò:' : 'The system detected multiple roles in this title. Below is the assessment for each:'}</p>
                    <div class="secondary-roles-grid">
                        ${jf.secondaryRoles.map(sr => `
                        <div class="secondary-role-card">
                            <div class="sr-grade" style="background: ${sr.gradeColor};">${sr.grade}</div>
                            <div class="sr-info">
                                <div class="sr-name">${sr.key.replace(/_/g, ' ')} <span class="sr-score">${sr.score}/100</span></div>
                                <div class="sr-desc">${sr.description || ''}</div>
                                <div class="sr-ideal">${isVi ? 'Nhóm lý tưởng:' : 'Ideal type:'} ${sr.idealPrimary}-${sr.idealSecondary}</div>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>`;
            }

            // Demographic notes
            if (analysis.demographicNotes && analysis.demographicNotes.length > 0) {
                html += `<div class="demographic-notes">
                    <h4>${isVi ? 'Nhận định theo nhân khẩu học' : 'Demographic Insights'}</h4>
                    ${analysis.demographicNotes.map(n => `<p class="demo-note">📌 ${n}</p>`).join('')}
                </div>`;
            }
        } else {
            // Fallback: no job match found, use original profile-based jobFit
            const jobFit = profile.jobFit;
            if (jobFit) {
                const industryData = jobFit[data.industry] || jobFit.general || {};
                const strengths = isVi ? (industryData.strengths_vi || []) : (industryData.strengths_en || []);
                const culture = isVi ? (industryData.culture_vi || '') : (industryData.culture_en || '');
                if (strengths.length > 0) {
                    html += `<h4>${isVi ? 'Thế mạnh:' : 'Strengths:'}</h4><ul>${strengths.map(s => `<li>${s}</li>`).join('')}</ul>`;
                }
                if (culture) html += `<p>${culture}</p>`;
            } else {
                html += `<p>${isVi ? 'Chưa có dữ liệu benchmark cho vị trí này.' : 'No benchmark data for this position.'}</p>`;
            }
        }

        el.innerHTML = html;
    },

    // === PART 3: Red Flags (unchanged) ===
    renderPart3(data, profile, isVi) {
        const el = document.getElementById('report-part3-content');
        if (!el) return;

        const redFlags = profile.redFlags || [];
        if (redFlags.length === 0) {
            el.innerHTML = `<p>${isVi ? 'Không phát hiện lỗ hổng cảnh báo nghiêm trọng.' : 'No critical red flags detected.'}</p>`;
            return;
        }

        let html = `<p style="margin-bottom: 20px; font-size: 14px; color: var(--text-secondary);">
            ${isVi ? `Nhóm ${data.primary}-${data.secondary} tiềm ẩn ${redFlags.length} rủi ro mà Quản lý cần lưu ý:` : `Group ${data.primary}-${data.secondary} has ${redFlags.length} hidden risks:`}
        </p>`;

        redFlags.forEach((rf, i) => {
            html += `
            <div class="red-flag-card">
                <div class="red-flag-title">${isVi ? 'Lỗ hổng' : 'Vulnerability'} ${i + 1}: ${isVi ? rf.name_vi : rf.name_en}</div>
                <div class="red-flag-desc">${isVi ? rf.description_vi : rf.description_en}</div>
            </div>`;
        });
        el.innerHTML = html;
    },

    // === PART 4: Communication & Teamwork (NEW) ===
    renderPart4_Communication(analysis, isVi) {
        const el = document.getElementById('report-part4-content');
        if (!el) return;
        const c = analysis.communication;

        const labels = {
            style: isVi ? 'Phong cách giao tiếp' : 'Communication Style',
            conflict: isVi ? 'Khi xảy ra xung đột' : 'During Conflict',
            teamwork: isVi ? 'Trong làm việc nhóm' : 'In Teamwork',
            doNot: isVi ? '⛔ Không nên' : '⛔ Do NOT'
        };

        let html = `<div class="comm-grid">`;
        [['style', '🗣️'], ['conflict', '⚡'], ['teamwork', '🤝'], ['doNot', '⛔']].forEach(([key, icon]) => {
            html += `
            <div class="comm-card">
                <div class="comm-card-icon">${icon}</div>
                <div class="comm-card-label">${labels[key]}</div>
                <div class="comm-card-text">${c[key] || 'N/A'}</div>
            </div>`;
        });
        html += `</div>`;

        // Pairing advice
        html += `<div class="pairing-advice-box">
            <h4>${isVi ? '🔗 Gợi ý ghép cặp' : '🔗 Pairing Advice'}</h4>
            <p>${c.pairingAdvice || ''}</p>
            <div class="pairing-tags">
                <span class="tag-good">${isVi ? 'Phối hợp tốt:' : 'Works well with:'} ${c.bestWith.join(', ')}</span>
                ${c.avoidWith.length > 0 ? `<span class="tag-caution">${isVi ? 'Cần cẩn thận:' : 'Be careful with:'} ${c.avoidWith.join(', ')}</span>` : ''}
            </div>
        </div>`;

        el.innerHTML = html;
    },

    // === PART 5: Motivators, Fears & Environment (NEW) ===
    renderPart5_Motivators(analysis, isVi) {
        const el = document.getElementById('report-part5-content');
        if (!el) return;
        const m = analysis.motivators;

        let html = `<div class="motiv-grid">`;

        // Motivators
        html += `<div class="motiv-card motiv-positive">
            <h4>🔥 ${isVi ? 'Động lực (Điều khiến họ hăng say)' : 'Motivators (What drives them)'}</h4>
            <ul>${m.list.map(item => `<li>${item}</li>`).join('')}</ul>
            ${m.hasSecondaryInfluence && m.secondaryMotivators.length > 0 ? `<p style="margin-top: 8px; font-size: 13px; color: var(--text-tertiary);"><em>${isVi ? `Nhóm phụ ${m.secondaryTrait} cũng tạo động lực từ:` : `Secondary ${m.secondaryTrait} also driven by:`} ${m.secondaryMotivators.join(', ')}</em></p>` : ''}
        </div>`;

        // Fears
        html += `<div class="motiv-card motiv-negative">
            <h4>😰 ${isVi ? 'Nỗi sợ (Điều khiến họ tụt mood)' : 'Fears (What demotivates them)'}</h4>
            <ul>${m.fears.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>`;

        html += `</div>`; // close grid

        // Ideal environment
        html += `<div class="motiv-env-card">
            <h4>🏢 ${isVi ? 'Môi trường làm việc lý tưởng' : 'Ideal Work Environment'}</h4>
            <p>${m.idealEnv || 'N/A'}</p>
        </div>`;

        // Burnout sign
        html += `<div class="motiv-burnout-card">
            <h4>⚠️ ${isVi ? 'Dấu hiệu kiệt sức (Burnout)' : 'Burnout Warning Sign'}</h4>
            <p>${m.burnoutSign || 'N/A'}</p>
        </div>`;

        el.innerHTML = html;
    },

    // === PART 6: Questions (Interview or Coaching) ===
    renderPart6_Questions(analysis, data, isVi) {
        const el = document.getElementById('report-part6-content');
        const titleEl = document.getElementById('part6-title');
        const noteEl = document.getElementById('part6-note');
        if (!el) return;

        // Update title based on target type
        if (titleEl) {
            titleEl.textContent = analysis.isEmployee
                ? (isVi ? 'PHẦN 6: CÂU HỎI COACHING 1-1 & QUẢN TRỊ HIỆU SUẤT' : 'PART 6: 1-ON-1 COACHING & PERFORMANCE MANAGEMENT')
                : (isVi ? 'PHẦN 6: CÂU HỎI PHỎNG VẤN KHAI THÁC ĐIỂM YẾU' : 'PART 6: WEAKNESS EXPLOITATION INTERVIEW QUESTIONS');
        }
        if (noteEl) {
            noteEl.textContent = analysis.isEmployee
                ? (isVi ? 'Câu hỏi dùng để coaching nhân sự nhằm tối ưu hiệu suất.' : 'Coaching questions to optimize employee performance.')
                : (isVi ? 'Các câu hỏi nhằm tấn công trực diện vào điểm mù của ứng viên.' : 'Questions targeting candidate blind spots.');
        }

        let html = '';

        // Questions
        analysis.questions.forEach((q, idx) => {
            const typeClass = q.type.includes('coaching') ? 'coaching' : 'interview';
            const typeLabel = q.type.includes('position') 
                ? (isVi ? '🎯 Cá nhân hóa theo vị trí' : '🎯 Position-specific')
                : q.type.includes('warning')
                    ? (isVi ? '⚠️ Cảnh báo vênh' : '⚠️ Mismatch warning')
                    : q.type === 'coaching' 
                        ? (isVi ? '💬 Coaching cơ bản' : '💬 Base coaching')
                        : (isVi ? '🔍 Khai thác điểm mù' : '🔍 Blind spot probe');
            html += `
            <div class="question-card-report ${typeClass}">
                <div class="q-number">${typeClass === 'coaching' ? (isVi ? 'Vấn đề' : 'Topic') : (isVi ? 'Câu' : 'Q')} ${idx + 1}</div>
                <div class="q-source">${typeLabel}</div>
                <div class="q-text">${q.question}</div>
                ${q.purpose ? `<div class="q-purpose"><em>${isVi ? 'Mục đích:' : 'Purpose:'}</em> ${q.purpose}</div>` : ''}
                ${q.source ? `<div class="q-source-detail">${q.source}</div>` : ''}
            </div>`;
        });

        // Mismatch warning
        if (analysis.mismatchWarning) {
            const mw = analysis.mismatchWarning;
            html += `<div class="mismatch-warning">
                <h4>⚠️ ${isVi ? 'Cảnh báo: Vênh vị trí' : 'Warning: Position Mismatch'}</h4>
                ${mw.question ? `<p class="mw-question">${mw.question}</p><p class="mw-purpose"><em>${mw.purpose}</em></p>` : `<p>${mw.message}</p>`}
            </div>`;
        }

        // Deception signs (candidate only)
        if (analysis.deceptionSigns.length > 0) {
            html += `<div class="deception-signs">
                <h4>🔍 ${isVi ? 'Dấu hiệu ứng viên đang tô vẽ / nói dối' : 'Signs of Candidate Embellishment / Deception'}</h4>
                <ul>${analysis.deceptionSigns.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>`;
        }

        el.innerHTML = html;
    },

    // === PART 7: Strategy, Roadmap & Team Pairing ===
    renderPart7_Strategy(analysis, data, profile, isVi) {
        const el = document.getElementById('report-part7-content');
        if (!el) return;

        let html = '';

        // Conclusion (from profile)
        if (profile.conclusion) {
            const rec = isVi ? profile.conclusion.recommendation_vi : profile.conclusion.recommendation_en;
            const summary = isVi ? profile.conclusion.summary_vi : profile.conclusion.summary_en;
            html += `
            <div class="conclusion-card">
                <h3>✅ ${isVi ? 'KẾT LUẬN' : 'CONCLUSION'}: ${rec}</h3>
                <p>${summary}</p>
            </div>`;
        }

        // Management Strategies (from profile)
        const strategies = profile.managementStrategy || [];
        if (strategies.length > 0) {
            html += `<h3 class="strategy-heading">💡 ${isVi ? 'ĐỀ XUẤT CHIẾN LƯỢC:' : 'STRATEGY RECOMMENDATIONS:'}</h3>`;
            strategies.forEach(s => {
                html += `
                <div class="strategy-card">
                    <div class="strategy-title">${isVi ? s.title_vi : s.title_en}</div>
                    <div class="strategy-detail">${isVi ? s.detail_vi : s.detail_en}</div>
                </div>`;
            });
        }

        // Training Roadmap 30-60-90
        const rm = analysis.roadmap;
        if (rm && rm.day30) {
            html += `
            <div class="roadmap-section">
                <h3>📅 ${isVi ? 'LỘ TRÌNH ĐÀO TẠO 30 - 60 - 90 NGÀY' : 'TRAINING ROADMAP 30 - 60 - 90 DAYS'}</h3>
                <div class="roadmap-timeline">
                    <div class="roadmap-step">
                        <div class="roadmap-badge">30</div>
                        <div class="roadmap-content">
                            <h4>${isVi ? 'Ngày 1-30: Hội nhập' : 'Day 1-30: Onboarding'}</h4>
                            <p>${rm.day30}</p>
                        </div>
                    </div>
                    <div class="roadmap-step">
                        <div class="roadmap-badge">60</div>
                        <div class="roadmap-content">
                            <h4>${isVi ? 'Ngày 31-60: Phát triển' : 'Day 31-60: Development'}</h4>
                            <p>${rm.day60}</p>
                        </div>
                    </div>
                    <div class="roadmap-step">
                        <div class="roadmap-badge">90</div>
                        <div class="roadmap-content">
                            <h4>${isVi ? 'Ngày 61-90: Đánh giá' : 'Day 61-90: Evaluation'}</h4>
                            <p>${rm.day90}</p>
                        </div>
                    </div>
                </div>
                ${rm.personalNote ? `<div class="roadmap-personal-note"><p>📌 ${rm.personalNote}</p></div>` : ''}
            </div>`;
        }

        // Team Pairing
        const tp = analysis.teamPairing;
        if (tp && tp.synergy) {
            html += `
            <div class="team-pairing-section">
                <h3>👥 ${isVi ? 'PHỐI HỢP NHÓM' : 'TEAM DYNAMICS'} (${tp.pair})</h3>
                <div class="pairing-grid">
                    <div class="pairing-card pairing-good">
                        <h4>✅ ${isVi ? 'Hiệp lực' : 'Synergy'}</h4>
                        <p>${tp.synergy}</p>
                    </div>
                    <div class="pairing-card pairing-risk">
                        <h4>⚡ ${isVi ? 'Ma sát' : 'Friction'}</h4>
                        <p>${tp.friction}</p>
                    </div>
                </div>
                <div class="pairing-advice-final">
                    <p><strong>💡 ${isVi ? 'Lời khuyên:' : 'Advice:'}</strong> ${tp.advice}</p>
                    ${tp.personalAdvice ? `<p style="margin-top: 8px; font-size: 13px; color: var(--text-tertiary);"><em>📌 ${tp.personalAdvice}</em></p>` : ''}
                </div>
            </div>`;
        }

        el.innerHTML = html;
    },

    // === CONSISTENCY (updated for both target types) ===
    renderConsistency(data, isVi) {
        const el = document.getElementById('report-consistency-content');
        if (!el) return;

        if (!data.consistency) {
            el.innerHTML = `<p style="color: var(--text-tertiary);">${isVi ? 'Không có dữ liệu độ tin cậy cho bản ghi này.' : 'No reliability data available for this record.'}</p>`;
            return;
        }

        const c = data.consistency;
        const desc = (c.description && typeof c.description === 'object')
            ? (isVi ? c.description.vi : c.description.en)
            : (typeof c.description === 'string' ? c.description : 'N/A');
        const contextLabel = data.targetType === 'employee'
            ? (isVi ? 'Nhân sự này' : 'This employee')
            : (isVi ? 'Ứng viên này' : 'This candidate');

        let html = `
        <div class="consistency-meter">
            <div class="consistency-score ${c.level}">${c.score}%</div>
            <div class="consistency-details">
                <div class="consistency-label">${desc}</div>
                <div class="consistency-desc">
                    ${isVi ? 'Số lần thay đổi câu trả lời' : 'Answer changes'}: ${c.totalChanges} |
                    ${isVi ? 'Cặp kiểm tra nhất quán' : 'Consistency pairs'}: ${c.pairsConsistent}/${c.pairsChecked}
                </div>
            </div>
        </div>`;

        if (c.isWarning) {
            html += `<div class="consistency-warning">⚠️ ${contextLabel} ${isVi ? 'có dấu hiệu trả lời không nhất quán. Kết quả cần được xem xét thận trọng.' : 'shows inconsistent answers. Results should be reviewed carefully.'}</div>`;
        }

        el.innerHTML = html;
    },

    // === BASIC RESULT (for test takers) ===
    renderBasicResult(data) {
        const isVi = I18N.currentLang === 'vi';
        const profile = DISC_PROFILES[data.profileId] || DISC_PROFILES[data.primary] || {};

        const nameEl = document.getElementById('result-basic-name');
        if (nameEl) nameEl.textContent = data.name;

        ChartRenderer.renderRadar('chart-basic', data.percentages, { compact: true });

        const summaryEl = document.getElementById('result-basic-summary');
        if (summaryEl) {
            const discColors = { D: '#E74C3C', I: '#F39C12', S: '#27AE60', C: '#2980B9' };
            summaryEl.innerHTML = ['D', 'I', 'S', 'C'].map(key => `
                <div class="disc-score-bar">
                    <div class="bar-value">${data.percentages[key]}%</div>
                    <div class="bar-container">
                        <div class="bar-fill" style="height: ${data.percentages[key]}%; background: ${discColors[key]};" data-target="${data.percentages[key]}"></div>
                    </div>
                    <span class="bar-label" style="color: ${discColors[key]};">${key}</span>
                </div>
            `).join('');

            requestAnimationFrame(() => {
                summaryEl.querySelectorAll('.bar-fill').forEach(bar => {
                    bar.style.height = bar.dataset.target + '%';
                });
            });
        }

        const archetypeEl = document.getElementById('result-basic-archetype');
        if (archetypeEl) {
            const archetype = isVi ? (profile.archetype_vi || '') : (profile.archetype_en || '');
            const groupLabel = isVi ? 'Nhóm tính cách chủ đạo' : 'Primary Personality Group';
            archetypeEl.innerHTML = `<h3>${groupLabel}: ${data.primary}-${data.secondary}</h3><p>${archetype}</p>`;
        }
    }
};
