/* ============================================ */
/* DISC TEST - RẠNG NGỜI LIFE                   */
/* Main Application Controller                 */
/* ============================================ */

const App = {
    // ---- State ----
    state: {
        mode: null, // 'taker' or 'hr'
        currentScreen: 'screen-mode',
        currentQuestion: 0,
        answers: [], // [{questionId, most, least}]
        changeLog: {}, // {questionId: numberOfChanges}
        timerInterval: null,
        timerSeconds: 45,
        isExtraTime: false,
        userInfo: {},
        currentResultId: null, // for viewing existing results
        selectedForCompare: new Set()
    },

    // ---- Position Options ----
    positionsByIndustry: {
        dental: [
            'Bác sĩ Răng Hàm Mặt', 'Phụ tá Nha khoa', 'Điều dưỡng Nha khoa',
            'Lễ tân phòng khám', 'Tư vấn viên Nha khoa', 'Kỹ thuật viên Labo',
            'Quản lý phòng khám', 'Bác sĩ Chỉnh nha', 'Bác sĩ Implant'
        ],
        fnb: [
            'Quản lý nhà hàng', 'Bếp trưởng', 'Phụ bếp', 'Phục vụ',
            'Thu ngân', 'Barista', 'Bartender', 'Nhân viên pha chế',
            'Quản lý khu vực', 'Marketing F&B'
        ],
        hospitality: [
            'Quản lý khách sạn', 'Lễ tân', 'Housekeeping', 'Bellman',
            'Concierge', 'F&B Manager', 'Revenue Manager',
            'Nhân viên đặt phòng', 'Spa Therapist', 'Host/Hostess'
        ],
        general: [
            'Nhân viên văn phòng', 'Quản lý dự án', 'Nhân viên kinh doanh',
            'Marketing', 'Kế toán', 'IT / Lập trình', 'Thiết kế',
            'Trợ lý giám đốc', 'Chăm sóc khách hàng'
        ]
    },

    // ---- Initialize ----
    init() {
        // Apply saved theme
        const theme = Storage.getTheme();
        document.documentElement.setAttribute('data-theme', theme);
        document.getElementById('theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';

        // Init i18n
        I18N.init();
        const langLabel = document.getElementById('lang-label');
        if (langLabel) langLabel.textContent = I18N.currentLang === 'vi' ? 'EN' : 'VI';

        // Init Firebase
        try {
            FirebaseDB.init();
            // Sync any existing localStorage data to Firebase
            FirebaseDB.syncFromLocal();
        } catch (err) {
            console.warn('Firebase init failed, using localStorage only:', err);
        }

        // Bind events
        this.bindEvents();

        // Show initial screen
        this.showScreen('screen-mode');
    },

    // ---- Event Bindings ----
    bindEvents() {
        // Theme toggle
        document.getElementById('btn-theme-toggle').addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            Storage.setTheme(next);
            document.getElementById('theme-icon').textContent = next === 'dark' ? '☀️' : '🌙';
            ChartRenderer.updateTheme();
        });

        // Language toggle
        document.getElementById('btn-lang-toggle').addEventListener('click', () => {
            I18N.toggle();
        });

        // Mode selection
        document.getElementById('btn-mode-taker').addEventListener('click', () => {
            this.state.mode = 'taker';
            this.showScreen('screen-info');
        });

        document.getElementById('btn-mode-hr').addEventListener('click', () => {
            this.state.mode = 'hr';
            this.showScreen('screen-hr-auth');
        });

        // HR Auth
        document.getElementById('btn-hr-login').addEventListener('click', () => this.handleHrLogin());
        document.getElementById('input-hr-pin').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.handleHrLogin();
        });

        // Back buttons
        document.querySelectorAll('.btn-back').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-target');
                if (target) this.showScreen(target);
            });
        });

        // Industry → Position dropdown
        document.getElementById('input-industry').addEventListener('change', (e) => {
            this.updatePositionDropdown(e.target.value);
        });

        // Info form submit
        document.getElementById('info-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleInfoSubmit();
        });

        // Test navigation
        document.getElementById('btn-prev-q').addEventListener('click', () => this.prevQuestion());
        document.getElementById('btn-next-q').addEventListener('click', () => this.nextQuestion());

        // Back to home from basic result
        document.getElementById('btn-back-home').addEventListener('click', () => {
            this.resetState();
            this.showScreen('screen-mode');
        });

        // Dashboard actions
        document.getElementById('btn-new-test')?.addEventListener('click', () => {
            this.state.mode = 'taker';
            this.showScreen('screen-info');
        });

        document.getElementById('btn-settings')?.addEventListener('click', () => {
            this.showScreen('screen-settings');
        });

        document.getElementById('btn-hr-logout')?.addEventListener('click', () => {
            this.showScreen('screen-mode');
        });

        // Report actions — native print PDF
        document.getElementById('btn-export-full')?.addEventListener('click', () => {
            PDFExporter.exportFull();
        });

        // Dashboard filters
        document.getElementById('search-history')?.addEventListener('input', () => this.filterHistory());
        document.getElementById('filter-disc')?.addEventListener('change', () => this.filterHistory());
        document.getElementById('filter-industry')?.addEventListener('change', () => this.filterHistory());
        document.getElementById('filter-sort')?.addEventListener('change', () => this.filterHistory());

        // Select all checkbox
        document.getElementById('select-all-history')?.addEventListener('change', (e) => {
            const checkboxes = document.querySelectorAll('.history-checkbox');
            checkboxes.forEach(cb => {
                cb.checked = e.target.checked;
                const id = cb.dataset.id;
                if (e.target.checked) this.state.selectedForCompare.add(id);
                else this.state.selectedForCompare.delete(id);
            });
            this.updateCompareButton();
        });

        // Compare button
        document.getElementById('btn-compare')?.addEventListener('click', () => this.handleCompare());

        // Export/Import
        document.getElementById('btn-export-history')?.addEventListener('click', () => {
            Storage.exportToJSON();
            this.showToast(I18N.t('toast_exported'), 'success');
        });

        document.getElementById('btn-import-history')?.addEventListener('click', () => {
            document.getElementById('file-import').click();
        });

        document.getElementById('file-import')?.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            try {
                const count = await Storage.importFromJSON(file);
                this.showToast(I18N.t('toast_imported').replace('{count}', count), 'success');
                this.renderHistory();
            } catch (err) {
                this.showToast(err.message, 'error');
            }
            e.target.value = '';
        });

        // Settings
        document.getElementById('btn-change-pin')?.addEventListener('click', () => this.handleChangePin());
        // Removed API Key listener
        document.getElementById('btn-export-all')?.addEventListener('click', () => {
            Storage.exportToJSON();
            this.showToast(I18N.t('toast_exported'), 'success');
        });
        document.getElementById('btn-clear-all')?.addEventListener('click', () => {
            this.showConfirm(
                I18N.t('confirm_clear_all'),
                I18N.t('confirm_clear_all'),
                () => {
                    Storage.clearHistory();
                    this.renderHistory();
                    this.showToast(I18N.t('toast_deleted'), 'success');
                }
            );
        });

        // Swipe support for question card
        this.setupSwipe();

        // Confirm dialog
        document.getElementById('confirm-cancel')?.addEventListener('click', () => {
            document.getElementById('confirm-dialog').classList.add('hidden');
        });
    },

    // ---- Screen Management ----
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
            this.state.currentScreen = screenId;
            window.scrollTo(0, 0);
        }

        // Screen-specific actions
        if (screenId === 'screen-hr-dashboard') {
            this.renderHistory();
        }
    },

    // ---- HR Login ----
    handleHrLogin() {
        const pin = document.getElementById('input-hr-pin').value;
        const errorEl = document.getElementById('hr-auth-error');

        if (Storage.verifyPin(pin)) {
            errorEl.classList.add('hidden');
            document.getElementById('input-hr-pin').value = '';
            this.showScreen('screen-hr-dashboard');
        } else {
            errorEl.classList.remove('hidden');
        }
    },

    // ---- Position Dropdown ----
    updatePositionDropdown(industry) {
        const select = document.getElementById('input-position');
        const customInput = document.getElementById('input-position-custom');
        const positions = this.positionsByIndustry[industry] || [];

        select.innerHTML = `<option value="">${I18N.t('select_placeholder')}</option>`;
        positions.forEach(pos => {
            select.innerHTML += `<option value="${pos}">${pos}</option>`;
        });
        select.innerHTML += `<option value="__custom__">Khác (tự nhập)...</option>`;

        select.addEventListener('change', () => {
            if (select.value === '__custom__') {
                customInput.classList.remove('hidden');
                customInput.required = true;
                customInput.focus();
            } else {
                customInput.classList.add('hidden');
                customInput.required = false;
            }
        });
    },

    // ---- Info Form Submit ----
    handleInfoSubmit() {
        const positionSelect = document.getElementById('input-position');
        const positionCustom = document.getElementById('input-position-custom');

        this.state.userInfo = {
            name: document.getElementById('input-name').value.trim(),
            dob: document.getElementById('input-dob').value,
            experience: document.getElementById('input-experience').value,
            industry: document.getElementById('input-industry').value,
            position: positionSelect.value === '__custom__' ? positionCustom.value.trim() : positionSelect.value,
            department: document.getElementById('input-department').value.trim(),
            evaluator: document.getElementById('input-evaluator').value.trim(),
            targetType: document.getElementById('input-target-type').value,
            gender: document.getElementById('input-gender').value
        };

        // Reset test state
        this.state.currentQuestion = 0;
        this.state.answers = [];
        this.state.changeLog = {};

        // Start test
        this.showScreen('screen-test');
        this.renderQuestion(0);
    },

    // ---- Question Rendering ----
    renderQuestion(index) {
        if (!DISC_QUESTIONS || index >= DISC_QUESTIONS.length) return;

        const q = DISC_QUESTIONS[index];
        const lang = I18N.currentLang;
        const isVi = lang === 'vi';

        // Update progress
        const progress = ((index) / DISC_QUESTIONS.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent = `${index + 1}/${DISC_QUESTIONS.length}`;

        // Question number
        document.getElementById('question-number').textContent = `${isVi ? 'Câu' : 'Q'} ${index + 1}/${DISC_QUESTIONS.length}`;

        // Context badge (hidden from user, just shows generic label)
        const badge = document.getElementById('question-context-badge');
        if (q.type === 'situation') {
            badge.textContent = isVi ? 'Tình huống' : 'Situation';
        } else {
            badge.textContent = isVi ? 'Mô tả' : 'Descriptor';
        }

        // Question text
        document.getElementById('question-text').textContent = isVi ? q.question_vi : q.question_en;

        // Options - SHUFFLE to prevent predictable D-I-S-C order
        const container = document.getElementById('options-container');
        const existingAnswer = this.state.answers.find(a => a.questionId === q.id);

        // Seeded shuffle: same question always gets same shuffled order per session
        // but different from the static a-b-c-d order
        if (!this._shuffleCache) this._shuffleCache = {};
        if (!this._shuffleCache[q.id]) {
            const opts = [...q.options];
            // Fisher-Yates shuffle with question-based seed
            let seed = q.id * 2654435761;
            for (let i = opts.length - 1; i > 0; i--) {
                seed = (seed * 1103515245 + 12345) & 0x7fffffff;
                const j = seed % (i + 1);
                [opts[i], opts[j]] = [opts[j], opts[i]];
            }
            this._shuffleCache[q.id] = opts;
        }
        const shuffledOptions = this._shuffleCache[q.id];

        container.innerHTML = shuffledOptions.map(opt => {
            const isMost = existingAnswer && existingAnswer.most === opt.id;
            const isLeast = existingAnswer && existingAnswer.least === opt.id;
            const itemClass = isMost ? 'selected-most' : isLeast ? 'selected-least' : '';

            return `
            <div class="option-item ${itemClass}" data-option-id="${opt.id}">
                <span class="option-text">${isVi ? opt.text_vi : opt.text_en}</span>
                <div class="option-actions">
                    <button class="option-btn btn-most ${isMost ? 'active' : ''}" 
                            data-option="${opt.id}" data-type="most" 
                            title="${I18N.t('most_label')}">
                        👆
                    </button>
                    <button class="option-btn btn-least ${isLeast ? 'active' : ''}" 
                            data-option="${opt.id}" data-type="least" 
                            title="${I18N.t('least_label')}">
                        👇
                    </button>
                </div>
            </div>`;
        }).join('');

        // Bind option clicks
        container.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleOptionSelect(q.id, btn.dataset.option, btn.dataset.type);
            });
        });

        // Update nav buttons
        document.getElementById('btn-prev-q').disabled = index === 0;
        this.updateNextButton();

        // Reset and start timer
        this.startTimer();
    },

    handleOptionSelect(questionId, optionId, type) {
        let answer = this.state.answers.find(a => a.questionId === questionId);

        if (!answer) {
            answer = { questionId, most: null, least: null };
            this.state.answers.push(answer);
        } else {
            // Track changes
            if (!this.state.changeLog[questionId]) this.state.changeLog[questionId] = 0;
            this.state.changeLog[questionId]++;
        }

        // Can't select same option for both most and least
        if (type === 'most') {
            if (answer.least === optionId) answer.least = null;
            answer.most = answer.most === optionId ? null : optionId;
        } else {
            if (answer.most === optionId) answer.most = null;
            answer.least = answer.least === optionId ? null : optionId;
        }

        // Re-render options with animation
        const q = DISC_QUESTIONS[this.state.currentQuestion];
        this.renderQuestion(this.state.currentQuestion);

        // Add bounce animation
        const selectedItem = document.querySelector(`.option-item[data-option-id="${optionId}"]`);
        if (selectedItem) {
            selectedItem.classList.add('bounce');
            setTimeout(() => selectedItem.classList.remove('bounce'), 300);
        }

        this.updateNextButton();

        // Auto-save session
        Storage.saveSession({
            answers: this.state.answers,
            changeLog: this.state.changeLog,
            currentQuestion: this.state.currentQuestion,
            userInfo: this.state.userInfo
        });
    },

    updateNextButton() {
        const q = DISC_QUESTIONS[this.state.currentQuestion];
        const answer = this.state.answers.find(a => a.questionId === q.id);
        const isComplete = answer && answer.most && answer.least;
        const nextBtn = document.getElementById('btn-next-q');

        nextBtn.disabled = !isComplete;

        if (this.state.currentQuestion === DISC_QUESTIONS.length - 1) {
            nextBtn.querySelector('[data-i18n]').textContent = I18N.currentLang === 'vi' ? 'Nộp bài' : 'Submit';
        } else {
            nextBtn.querySelector('[data-i18n]').textContent = I18N.t('btn_next');
        }
    },

    prevQuestion() {
        if (this.state.currentQuestion > 0) {
            this.state.currentQuestion--;
            const card = document.getElementById('question-card');
            card.classList.add('swipe-right');
            setTimeout(() => {
                this.renderQuestion(this.state.currentQuestion);
                card.classList.remove('swipe-right');
            }, 200);
        }
    },

    nextQuestion() {
        const q = DISC_QUESTIONS[this.state.currentQuestion];
        const answer = this.state.answers.find(a => a.questionId === q.id);

        if (!answer || !answer.most || !answer.least) return;

        if (this.state.currentQuestion < DISC_QUESTIONS.length - 1) {
            this.state.currentQuestion++;
            const card = document.getElementById('question-card');
            card.classList.add('swipe-left');
            setTimeout(() => {
                this.renderQuestion(this.state.currentQuestion);
                card.classList.remove('swipe-left');
            }, 200);
        } else {
            // Submit test
            this.submitTest();
        }
    },

    // ---- Timer ----
    startTimer() {
        this.clearTimer();
        this.state.timerSeconds = 45;
        this.state.isExtraTime = false;

        const ring = document.getElementById('timer-ring-progress');
        const text = document.getElementById('timer-text');
        const circumference = 2 * Math.PI * 26; // r=26

        ring.style.strokeDasharray = circumference;
        ring.classList.remove('warning', 'danger');

        this.state.timerInterval = setInterval(() => {
            this.state.timerSeconds--;
            text.textContent = this.state.timerSeconds;

            const progress = 1 - (this.state.timerSeconds / (this.state.isExtraTime ? 55 : 45));
            ring.style.strokeDashoffset = circumference * progress;

            if (this.state.timerSeconds <= 10 && !this.state.isExtraTime) {
                ring.classList.add('warning');
            }

            if (this.state.timerSeconds <= 0) {
                if (!this.state.isExtraTime) {
                    // Give extra 10 seconds
                    this.state.isExtraTime = true;
                    this.state.timerSeconds = 10;
                    ring.classList.remove('warning');
                    ring.classList.add('danger');
                    this.showToast(I18N.t('timer_warning'), 'warning');
                } else {
                    // Extra time is up - auto advance
                    this.clearTimer();
                    const q = DISC_QUESTIONS[this.state.currentQuestion];
                    const answer = this.state.answers.find(a => a.questionId === q.id);

                    if (answer && answer.most && answer.least) {
                        this.nextQuestion();
                    } else {
                        // Skip unanswered
                        if (this.state.currentQuestion < DISC_QUESTIONS.length - 1) {
                            this.state.currentQuestion++;
                            this.renderQuestion(this.state.currentQuestion);
                        } else {
                            this.submitTest();
                        }
                    }
                }
            }
        }, 1000);
    },

    clearTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
            this.state.timerInterval = null;
        }
    },

    // ---- Submit Test ----
    submitTest() {
        this.clearTimer();

        // Calculate scores
        const scores = DISCScoring.calculate(this.state.answers);

        // Calculate consistency
        const consistency = DISCScoring.calculateConsistency(
            this.state.answers,
            this.state.changeLog,
            typeof CONSISTENCY_PAIRS !== 'undefined' ? CONSISTENCY_PAIRS : []
        );

        // Build result object
        const resultData = {
            ...this.state.userInfo,
            ...scores,
            answers: this.state.answers,
            changeLog: this.state.changeLog,
            consistency,
            timestamp: new Date().toISOString()
        };

        // Save to localStorage
        const saved = Storage.saveResult(resultData);
        this.state.currentResultId = saved.id;
        this.state.currentResultData = saved;

        // Save to Firebase (async, non-blocking)
        try {
            FirebaseDB.save(saved).then(() => {
                console.log('✅ Result saved to cloud');
            });
        } catch (err) {
            console.warn('Firebase save failed:', err);
        }

        // Clear session
        Storage.clearSession();

        // Show appropriate result screen
        if (this.state.mode === 'taker') {
            // Basic view for test takers
            ReportGenerator.renderBasicResult(resultData);
            this.showScreen('screen-result-basic');
            this.launchConfetti();
        } else {
            // Full report for HR
            ReportGenerator.render(resultData);
            this.showScreen('screen-report');
        }
    },

    // ---- View Existing Report ----
    async viewReport(recordId) {
        // Try Firebase first, fallback to localStorage
        let record = null;
        try {
            record = await FirebaseDB.getById(recordId);
        } catch (err) {
            console.warn('Firebase read failed, using localStorage');
        }
        if (!record) record = Storage.getResultById(recordId);

        if (!record) {
            this.showToast('Record not found', 'error');
            return;
        }

        this.state.currentResultId = recordId;
        this.state.currentResultData = record;
        ReportGenerator.render(record);
        this.showScreen('screen-report');
    },

    getCurrentResultData() {
        if (this.state.currentResultData) return this.state.currentResultData;
        if (!this.state.currentResultId) return null;
        return Storage.getResultById(this.state.currentResultId);
    },

    // ---- History ----
    async renderHistory() {
        const tbody = document.getElementById('history-tbody');
        const emptyState = document.getElementById('history-empty');
        const isVi = I18N.currentLang === 'vi';

        // Load from Firebase first, fallback to localStorage
        let history = [];
        try {
            history = await FirebaseDB.getAll();
            if (history.length === 0) history = Storage.getHistory();
        } catch (err) {
            console.warn('Firebase read failed, using localStorage');
            history = Storage.getHistory();
        }

        if (!history.length) {
            if (tbody) tbody.innerHTML = '';
            if (emptyState) emptyState.classList.remove('hidden');
            return;
        }

        if (emptyState) emptyState.classList.add('hidden');

        // Apply filters
        const filtered = this.applyFilters(history);

        if (tbody) {
            tbody.innerHTML = filtered.map(record => {
                const profile = DISC_PROFILES?.[record.profileId] || DISC_PROFILES?.[record.primary] || {};
                const archetype = isVi ? (profile.archetype_vi || '') : (profile.archetype_en || '');
                const consistencyText = record.consistency ? `${record.consistency.score}%` : 'N/A';
                const consistencyClass = record.consistency?.level || 'medium';
                const isSelected = this.state.selectedForCompare.has(record.id);

                return `
                <tr>
                    <td><input type="checkbox" class="history-checkbox" data-id="${record.id}" ${isSelected ? 'checked' : ''}></td>
                    <td><strong>${record.name}</strong></td>
                    <td>${record.position || 'N/A'}</td>
                    <td><span class="disc-badge disc-badge-${record.primary}">${record.primary}-${record.secondary}</span></td>
                    <td style="font-size: 12px; max-width: 200px;">${archetype}</td>
                    <td><span class="consistency-score ${consistencyClass}" style="font-size: 14px;">${consistencyText}</span></td>
                    <td>${Storage.formatDateTime(record.timestamp)}</td>
                    <td>
                        <div class="table-actions">
                            <button onclick="App.viewReport('${record.id}')" title="Xem báo cáo">📊</button>
                            <button class="delete" onclick="App.deleteRecord('${record.id}')" title="Xóa">🗑️</button>
                        </div>
                    </td>
                </tr>`;
            }).join('');

            // Re-bind checkboxes
            tbody.querySelectorAll('.history-checkbox').forEach(cb => {
                cb.addEventListener('change', () => {
                    if (cb.checked) this.state.selectedForCompare.add(cb.dataset.id);
                    else this.state.selectedForCompare.delete(cb.dataset.id);
                    this.updateCompareButton();
                });
            });
        }
    },

    applyFilters(history) {
        const search = document.getElementById('search-history')?.value.toLowerCase().trim() || '';
        const discFilter = document.getElementById('filter-disc')?.value || '';
        const industryFilter = document.getElementById('filter-industry')?.value || '';
        const sort = document.getElementById('filter-sort')?.value || 'newest';

        let filtered = history;

        if (search) {
            filtered = filtered.filter(r => r.name.toLowerCase().includes(search));
        }
        if (discFilter) {
            filtered = filtered.filter(r => r.primary === discFilter);
        }
        if (industryFilter) {
            filtered = filtered.filter(r => r.industry === industryFilter);
        }

        filtered.sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return sort === 'newest' ? dateB - dateA : dateA - dateB;
        });

        return filtered;
    },

    filterHistory() {
        this.renderHistory();
    },

    deleteRecord(id) {
        this.showConfirm(
            I18N.t('confirm_delete'),
            I18N.t('confirm_delete'),
            () => {
                Storage.deleteResult(id);
                // Also delete from Firebase
                try { FirebaseDB.delete(id); } catch (e) {}
                this.state.selectedForCompare.delete(id);
                this.renderHistory();
                this.showToast(I18N.t('toast_deleted'), 'success');
            }
        );
    },

    updateCompareButton() {
        const btn = document.getElementById('btn-compare');
        if (btn) {
            btn.disabled = this.state.selectedForCompare.size < 2;
        }
    },

    // ---- Compare ----
    async handleCompare() {
        const ids = Array.from(this.state.selectedForCompare);
        
        // Fetch records from Firebase first, fallback to localStorage
        const records = [];
        for (const id of ids) {
            let record = null;
            try {
                record = await FirebaseDB.getById(id);
            } catch (err) {
                console.warn('Firebase read failed for compare, using localStorage');
            }
            if (!record) record = Storage.getResultById(id);
            if (record) records.push(record);
            if (records.length >= 3) break;
        }

        if (records.length < 2) {
            this.showToast(I18N.currentLang === 'vi' ? 'Không tìm thấy dữ liệu. Vui lòng thử lại.' : 'Data not found. Please try again.', 'warning');
            return;
        }

        const grid = document.getElementById('compare-grid');
        const recommendation = document.getElementById('compare-recommendation');
        const isVi = I18N.currentLang === 'vi';

        // Render individual cards
        grid.innerHTML = records.map(r => {
            const profile = DISC_PROFILES?.[r.profileId] || DISC_PROFILES?.[r.primary] || {};
            const archetype = isVi ? (profile.archetype_vi || '') : (profile.archetype_en || '');
            const canvasId = `compare-chart-${r.id}`;

            return `
            <div class="compare-card glass-card">
                <div class="card-name">${r.name}</div>
                <div class="disc-badge disc-badge-${r.primary}" style="margin-bottom: 12px;">${r.primary}-${r.secondary}</div>
                <canvas id="${canvasId}" width="200" height="200"></canvas>
                <p style="font-size: 12px; color: var(--text-secondary); margin-top: 8px;">${archetype}</p>
                <p style="font-size: 12px; margin-top: 4px;">D:${r.percentages.D}% I:${r.percentages.I}% S:${r.percentages.S}% C:${r.percentages.C}%</p>
                ${r.consistency ? `<p style="font-size: 11px; color: var(--text-tertiary);">${isVi ? 'Tin cậy' : 'Reliability'}: ${r.consistency.score}%</p>` : ''}
            </div>`;
        }).join('');

        // Render charts
        setTimeout(() => {
            records.forEach(r => {
                ChartRenderer.renderRadar(`compare-chart-${r.id}`, r.percentages, { compact: true });
            });
        }, 100);

        // === TEAM COMPATIBILITY ANALYSIS ===
        if (recommendation && records.length >= 2) {
            const a = records[0];
            const b = records[1];
            recommendation.innerHTML = this.renderTeamCompatibility(a, b, isVi);
        }

        this.showScreen('screen-compare');
    },

    /**
     * Render detailed team compatibility analysis for 2 people
     */
    renderTeamCompatibility(a, b, isVi) {
        // Find pairing data
        const pKey1 = `${a.primary}-${b.primary}`;
        const pKey2 = `${b.primary}-${a.primary}`;
        const pairing = EXPERT_DB.teamPairing[pKey1] || EXPERT_DB.teamPairing[pKey2] || {};

        // Communication styles
        const commA = EXPERT_DB.communicationStyles[a.primary] || {};
        const commB = EXPERT_DB.communicationStyles[b.primary] || {};

        // Motivators
        const mfA = EXPERT_DB.motivatorsAndFears[a.primary] || {};
        const mfB = EXPERT_DB.motivatorsAndFears[b.primary] || {};

        // Calculate compatibility score based on trait complementarity
        let compatScore = 50; // base
        const bestA = (commA.bestWith || []);
        const bestB = (commB.bestWith || []);
        const avoidA = (commA.avoidWith || []);
        const avoidB = (commB.avoidWith || []);

        if (bestA.includes(b.primary)) compatScore += 20;
        if (bestB.includes(a.primary)) compatScore += 20;
        if (avoidA.includes(b.primary)) compatScore -= 15;
        if (avoidB.includes(a.primary)) compatScore -= 15;
        // Same primary = can be clash
        if (a.primary === b.primary) compatScore -= 10;
        // Complementary traits bonus
        if ((a.primary === 'D' && b.primary === 'S') || (a.primary === 'S' && b.primary === 'D')) compatScore += 10;
        if ((a.primary === 'I' && b.primary === 'C') || (a.primary === 'C' && b.primary === 'I')) compatScore += 5;

        compatScore = Math.min(Math.max(compatScore, 10), 100);
        const gradeInfo = ExpertAnalyzer.getGrade(compatScore);

        // Generate specific work tips
        const workTips = this.generateWorkTips(a, b, isVi);

        let html = `
        <h3 style="margin-bottom: 20px;">🤝 ${isVi ? 'PHÂN TÍCH TƯƠNG HỢP CẶP ĐÔI' : 'TEAM COMPATIBILITY ANALYSIS'}</h3>
        <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 20px;">
            ${isVi ? `Phân tích chi tiết cách ${a.name} (${a.primary}-${a.secondary}) và ${b.name} (${b.primary}-${b.secondary}) nên làm việc chung.` 
                   : `Detailed analysis of how ${a.name} (${a.primary}-${a.secondary}) and ${b.name} (${b.primary}-${b.secondary}) should work together.`}
        </p>

        <!-- Compatibility Score -->
        <div class="jobfit-score-container" style="margin-bottom: 24px;">
            <div class="jobfit-grade-badge" style="background: ${gradeInfo.color};">
                <span class="grade-letter">${gradeInfo.grade}</span>
                <span class="grade-score">${compatScore}/100</span>
            </div>
            <div class="jobfit-info">
                <h3>${isVi ? 'Độ tương hợp' : 'Compatibility Score'}</h3>
                <p>${isVi ? `Mức độ phối hợp tự nhiên giữa ${a.name} và ${b.name} khi làm việc chung.` : `Natural collaboration level between ${a.name} and ${b.name}.`}</p>
            </div>
        </div>

        <!-- Synergy & Friction -->
        <div class="pairing-grid" style="margin-bottom: 20px;">
            <div class="pairing-card pairing-good">
                <h4>✅ ${isVi ? 'Hiệp lực (Điểm mạnh khi ghép cặp)' : 'Synergy (Strengths when paired)'}</h4>
                <p>${isVi ? (pairing.synergy_vi || 'Cần quan sát thêm trong thực tế.') : (pairing.synergy_en || 'Needs further real-world observation.')}</p>
            </div>
            <div class="pairing-card pairing-risk">
                <h4>⚡ ${isVi ? 'Ma sát (Rủi ro xung đột)' : 'Friction (Conflict risks)'}</h4>
                <p>${isVi ? (pairing.friction_vi || 'Không có dữ liệu đặc biệt.') : (pairing.friction_en || 'No specific data.')}</p>
            </div>
        </div>

        <!-- Communication Guide -->
        <div style="margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px;">🗣️ ${isVi ? 'HƯỚNG DẪN GIAO TIẾP' : 'COMMUNICATION GUIDE'}</h4>
            <div class="comm-grid">
                <div class="comm-card">
                    <div class="comm-card-label">${a.name} → ${b.name}</div>
                    <div class="comm-card-text">${isVi 
                        ? `${a.name} nên: ${(commB.doNot_vi || '').replace(/Đừng/g, 'Không nên').replace(/đừng/g, 'không nên')}. Thay vào đó, hãy ${b.primary === 'D' ? 'đi thẳng vào vấn đề' : b.primary === 'I' ? 'tạo không khí thoải mái trước' : b.primary === 'S' ? 'nhẹ nhàng và cho thời gian suy nghĩ' : 'chuẩn bị dữ liệu trước khi trao đổi'}.`
                        : `${a.name} should: ${b.primary === 'D' ? 'be direct and concise' : b.primary === 'I' ? 'create a relaxed atmosphere first' : b.primary === 'S' ? 'be gentle and allow thinking time' : 'prepare data before discussing'}.`}</div>
                </div>
                <div class="comm-card">
                    <div class="comm-card-label">${b.name} → ${a.name}</div>
                    <div class="comm-card-text">${isVi 
                        ? `${b.name} nên: ${(commA.doNot_vi || '').replace(/Đừng/g, 'Không nên').replace(/đừng/g, 'không nên')}. Thay vào đó, hãy ${a.primary === 'D' ? 'đi thẳng vào vấn đề' : a.primary === 'I' ? 'tạo không khí thoải mái trước' : a.primary === 'S' ? 'nhẹ nhàng và cho thời gian suy nghĩ' : 'chuẩn bị dữ liệu trước khi trao đổi'}.`
                        : `${b.name} should: ${a.primary === 'D' ? 'be direct and concise' : a.primary === 'I' ? 'create a relaxed atmosphere first' : a.primary === 'S' ? 'be gentle and allow thinking time' : 'prepare data before discussing'}.`}</div>
                </div>
            </div>
        </div>

        <!-- Work Assignment Tips -->
        <div style="margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px;">📋 ${isVi ? 'ĐỀ XUẤT PHÂN CÔNG CÔNG VIỆC' : 'WORK ASSIGNMENT RECOMMENDATIONS'}</h4>
            <div class="motiv-grid">
                <div class="motiv-card motiv-positive">
                    <h4>✅ ${a.name} ${isVi ? 'nên đảm nhận' : 'should handle'}</h4>
                    <ul>${workTips.aShould.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
                <div class="motiv-card motiv-positive">
                    <h4>✅ ${b.name} ${isVi ? 'nên đảm nhận' : 'should handle'}</h4>
                    <ul>${workTips.bShould.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
            </div>
            <div class="motiv-card motiv-negative" style="margin-top: 12px;">
                <h4>⚠️ ${isVi ? 'Tránh giao cho cả hai cùng làm' : 'Avoid assigning both to'}</h4>
                <ul>${workTips.avoid.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
        </div>

        <!-- Manager Advice -->
        <div class="pairing-advice-final" style="margin-bottom: 16px;">
            <p><strong>💡 ${isVi ? 'Lời khuyên cho Quản lý:' : 'Manager Advice:'}</strong> ${isVi ? (pairing.advice_vi || 'Quan sát tương tác thực tế trong 2 tuần đầu và điều chỉnh.') : (pairing.advice_en || 'Observe real interactions in the first 2 weeks and adjust.')}</p>
        </div>

        <!-- Conflict Resolution -->
        <div class="deception-signs" style="background: rgba(52,152,219,0.06); border-color: rgba(52,152,219,0.15);">
            <h4 style="color: #2471A3;">🔧 ${isVi ? 'KHI XẢY RA XUNG ĐỘT' : 'WHEN CONFLICT OCCURS'}</h4>
            <ul>
                <li>${isVi 
                    ? `${a.name} (${a.primary}) khi xung đột sẽ: ${commA.conflict_vi || 'N/A'}` 
                    : `${a.name} (${a.primary}) in conflict will: ${commA.conflict_en || 'N/A'}`}</li>
                <li>${isVi 
                    ? `${b.name} (${b.primary}) khi xung đột sẽ: ${commB.conflict_vi || 'N/A'}` 
                    : `${b.name} (${b.primary}) in conflict will: ${commB.conflict_en || 'N/A'}`}</li>
                <li>${isVi 
                    ? `→ Quản lý nên: ${a.primary === b.primary ? 'Can thiệp sớm vì cả hai có cùng phong cách phản ứng, dễ leo thang.' : 'Để hai bên trình bày riêng, sau đó dàn xếp chung. Tận dụng sự khác biệt tính cách để cân bằng.'}`
                    : `→ Manager should: ${a.primary === b.primary ? 'Intervene early as both have the same reaction style, easy to escalate.' : 'Let each side present separately, then mediate together. Leverage personality differences for balance.'}`}</li>
            </ul>
        </div>`;

        return html;
    },

    /**
     * Generate work assignment tips based on DISC traits
     */
    generateWorkTips(a, b, isVi) {
        const traitTasks = {
            D: {
                should_vi: ['Ra quyết định nhanh, xử lý khủng hoảng', 'Dẫn dắt dự án, đặt mục tiêu', 'Đàm phán, thương lượng'],
                should_en: ['Quick decisions, crisis handling', 'Leading projects, setting targets', 'Negotiation, deal-making']
            },
            I: {
                should_vi: ['Giao tiếp khách hàng, networking', 'Truyền thông nội bộ, tổ chức sự kiện', 'Brainstorm ý tưởng sáng tạo'],
                should_en: ['Customer communication, networking', 'Internal communications, events', 'Creative brainstorming']
            },
            S: {
                should_vi: ['Hỗ trợ đồng nghiệp, chăm sóc khách hàng', 'Duy trì quy trình ổn định', 'Công việc lặp đi lặp lại cần kiên nhẫn'],
                should_en: ['Supporting colleagues, customer care', 'Maintaining stable processes', 'Repetitive tasks requiring patience']
            },
            C: {
                should_vi: ['Kiểm tra chất lượng, phân tích dữ liệu', 'Lập quy trình, viết SOP', 'Báo cáo tài chính, kiểm toán'],
                should_en: ['Quality control, data analysis', 'Creating processes, writing SOPs', 'Financial reporting, auditing']
            }
        };

        const avoidPairs = {
            'D-D': { vi: ['Cùng quản lý 1 nhóm (tranh quyền)', 'Cùng đàm phán 1 hợp đồng (áp đặt nhau)'], en: ['Co-managing one team (power struggle)', 'Negotiating the same deal (steamrolling each other)'] },
            'I-I': { vi: ['Công việc đòi hỏi chi tiết cao (cả hai đều lơ là)', 'Deadline gấp không có người kiểm soát'], en: ['Highly detailed work (both neglect details)', 'Tight deadlines without oversight'] },
            'S-S': { vi: ['Dự án cần đổi mới/sáng tạo (cả hai đều thích ổn định)', 'Tình huống cần ra quyết định nhanh'], en: ['Innovation projects (both prefer stability)', 'Situations requiring fast decisions'] },
            'C-C': { vi: ['Công việc cần hoàn thành nhanh (cả hai đều cầu toàn)', 'Giao tiếp khách hàng (thiếu sự ấm áp)'], en: ['Rush jobs (both perfectionist)', 'Customer-facing roles (lacking warmth)'] },
            'default': { vi: ['Công việc không có phân công rõ ràng (dễ chồng chéo hoặc đùn đẩy)'], en: ['Work without clear assignment (overlap or buck-passing)'] }
        };

        const aKey = a.primary;
        const bKey = b.primary;
        const avoidKey = aKey === bKey ? `${aKey}-${bKey}` : 'default';

        return {
            aShould: isVi ? traitTasks[aKey].should_vi : traitTasks[aKey].should_en,
            bShould: isVi ? traitTasks[bKey].should_vi : traitTasks[bKey].should_en,
            avoid: isVi ? (avoidPairs[avoidKey] || avoidPairs['default']).vi : (avoidPairs[avoidKey] || avoidPairs['default']).en
        };
    },


    // ---- Settings ----
    handleChangePin() {
        const oldPin = document.getElementById('settings-old-pin').value;
        const newPin = document.getElementById('settings-new-pin').value;

        if (!Storage.verifyPin(oldPin)) {
            this.showToast(I18N.t('toast_pin_wrong'), 'error');
            return;
        }

        if (newPin.length < 4) {
            this.showToast('PIN phải có ít nhất 4 ký tự', 'error');
            return;
        }

        Storage.setPin(newPin);
        document.getElementById('settings-old-pin').value = '';
        document.getElementById('settings-new-pin').value = '';
        this.showToast(I18N.t('toast_pin_changed'), 'success');
    },

    // ---- Swipe Support ----
    setupSwipe() {
        const container = document.getElementById('question-container');
        if (!container) return;

        let startX = 0;
        let startY = 0;
        let isDragging = false;

        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = endX - startX;
            const diffY = endY - startY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX < 0) {
                    // Swipe left → next
                    this.nextQuestion();
                } else {
                    // Swipe right → prev
                    this.prevQuestion();
                }
            }
            isDragging = false;
        }, { passive: true });
    },

    // ---- Confetti ----
    launchConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;

        const colors = ['#E74C3C', '#F39C12', '#27AE60', '#2980B9', '#667EEA', '#A78BFA'];

        for (let i = 0; i < 60; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
            piece.style.animationDelay = Math.random() * 0.8 + 's';
            piece.style.width = (Math.random() * 8 + 4) + 'px';
            piece.style.height = (Math.random() * 8 + 4) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            container.appendChild(piece);
        }

        setTimeout(() => {
            container.innerHTML = '';
        }, 4000);
    },

    // ---- Toast Notifications ----
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => toast.remove(), 3000);
    },

    // ---- Confirm Dialog ----
    showConfirm(title, message, onConfirm) {
        const dialog = document.getElementById('confirm-dialog');
        document.getElementById('confirm-title').textContent = title;
        document.getElementById('confirm-message').textContent = message;
        dialog.classList.remove('hidden');

        const okBtn = document.getElementById('confirm-ok');
        const newOkBtn = okBtn.cloneNode(true);
        okBtn.parentNode.replaceChild(newOkBtn, okBtn);

        newOkBtn.addEventListener('click', () => {
            dialog.classList.add('hidden');
            onConfirm();
        });
    },

    // ---- Reset ----
    resetState() {
        this.clearTimer();
        this.state.currentQuestion = 0;
        this.state.answers = [];
        this.state.changeLog = {};
        this.state.userInfo = {};
        this.state.currentResultId = null;
        Storage.clearSession();
    }
};

// ---- Boot ----
document.addEventListener('DOMContentLoaded', () => App.init());
