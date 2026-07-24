/* ============================================ */
/* localStorage Manager                        */
/* ============================================ */

const Storage = {
    KEYS: {
        HISTORY: 'disc_history',
        PIN: 'disc_hr_pin',
        API_KEY: 'disc_api_key',
        THEME: 'disc_theme',
        LANG: 'disc_lang',
        SESSION: 'disc_session' // temp session during test
    },

    DEFAULT_PIN: '262300',

    // ---- History CRUD ----
    getHistory() {
        try {
            const data = localStorage.getItem(this.KEYS.HISTORY);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    },

    saveResult(result) {
        const history = this.getHistory();
        const record = {
            id: this.generateId(),
            timestamp: new Date().toISOString(),
            ...result
        };
        history.unshift(record); // newest first
        localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(history));
        return record;
    },

    getResultById(id) {
        const history = this.getHistory();
        return history.find(r => r.id === id) || null;
    },

    deleteResult(id) {
        const history = this.getHistory();
        const filtered = history.filter(r => r.id !== id);
        localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(filtered));
    },

    clearHistory() {
        localStorage.setItem(this.KEYS.HISTORY, JSON.stringify([]));
    },

    // ---- Export / Import ----
    exportToJSON() {
        const data = {
            exportDate: new Date().toISOString(),
            appName: 'DISC TEST - RẠNG NGỜI LIFE',
            version: '1.0',
            records: this.getHistory()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `DISC_Data_${this.formatDate(new Date())}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    importFromJSON(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (!data.records || !Array.isArray(data.records)) {
                        reject(new Error('Invalid file format'));
                        return;
                    }
                    const existing = this.getHistory();
                    const existingIds = new Set(existing.map(r => r.id));
                    const newRecords = data.records.filter(r => !existingIds.has(r.id));
                    const merged = [...newRecords, ...existing].sort(
                        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
                    );
                    localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(merged));
                    resolve(newRecords.length);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    },

    // ---- PIN Management ----
    getPin() {
        return localStorage.getItem(this.KEYS.PIN) || this.DEFAULT_PIN;
    },

    setPin(newPin) {
        localStorage.setItem(this.KEYS.PIN, newPin);
    },

    verifyPin(input) {
        return input === this.getPin();
    },

    // ---- API Key ----
    getApiKey() {
        return localStorage.getItem(this.KEYS.API_KEY) || '';
    },

    setApiKey(key) {
        localStorage.setItem(this.KEYS.API_KEY, key);
    },

    // ---- Theme ----
    getTheme() {
        return localStorage.getItem(this.KEYS.THEME) || 'light';
    },

    setTheme(theme) {
        localStorage.setItem(this.KEYS.THEME, theme);
    },

    // ---- Language ----
    getLang() {
        return localStorage.getItem(this.KEYS.LANG) || 'vi';
    },

    setLang(lang) {
        localStorage.setItem(this.KEYS.LANG, lang);
    },

    // ---- Session (temp during test) ----
    saveSession(data) {
        sessionStorage.setItem(this.KEYS.SESSION, JSON.stringify(data));
    },

    getSession() {
        try {
            const data = sessionStorage.getItem(this.KEYS.SESSION);
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    },

    clearSession() {
        sessionStorage.removeItem(this.KEYS.SESSION);
    },

    // ---- Utilities ----
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    },

    formatDate(date) {
        const d = new Date(date);
        const pad = n => n.toString().padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    },

    formatDateTime(date) {
        const d = new Date(date);
        const pad = n => n.toString().padStart(2, '0');
        return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }
};
