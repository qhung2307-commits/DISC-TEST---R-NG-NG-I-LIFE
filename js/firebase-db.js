/* ============================================ */
/* Firebase Integration (Firestore)            */
/* ============================================ */

const FirebaseDB = {
    db: null,
    isConnected: false,
    COLLECTION: 'disc_results',

    /**
     * Initialize Firebase
     */
    init() {
        try {
            const firebaseConfig = {
                apiKey: "AIzaSyDQy23whUuCTZHKRw0ufmyEigU6YHs3eeg",
                authDomain: "disc-test---rnl.firebaseapp.com",
                projectId: "disc-test---rnl",
                storageBucket: "disc-test---rnl.firebasestorage.app",
                messagingSenderId: "640345415313",
                appId: "1:640345415313:web:655f18ba684186b8d5a930"
            };

            if (typeof firebase === 'undefined') {
                console.error('❌ Firebase SDK not loaded');
                return;
            }

            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            this.db = firebase.firestore();
            this.isConnected = true;
            console.log('✅ Firebase Firestore initialized');

            // Test connection with a simple read
            this.testConnection();
        } catch (err) {
            console.error('❌ Firebase init error:', err);
            this.isConnected = false;
        }
    },

    /**
     * Test Firestore connection
     */
    async testConnection() {
        try {
            await this.db.collection(this.COLLECTION).limit(1).get();
            this.isConnected = true;
            console.log('✅ Firestore connection verified');
            this.updateStatusUI(true);
        } catch (err) {
            console.error('❌ Firestore connection failed:', err);
            this.isConnected = false;
            this.updateStatusUI(false, err.message);
        }
    },

    /**
     * Update UI status indicator
     */
    updateStatusUI(connected, errorMsg) {
        const indicator = document.getElementById('firebase-status');
        if (indicator) {
            if (connected) {
                indicator.innerHTML = '☁️ <span style="color: var(--success); font-size: 11px;">Cloud: Đã kết nối</span>';
            } else {
                indicator.innerHTML = '⚠️ <span style="color: var(--danger); font-size: 11px;">Cloud: Lỗi kết nối</span>';
                console.error('Firebase error:', errorMsg);
            }
        }
    },

    /**
     * Save a result to Firestore
     */
    async save(record) {
        if (!this.isConnected || !this.db) {
            console.warn('Firebase not connected, skipping save');
            return false;
        }
        try {
            // Clean data - remove nested arrays (Firestore doesn't support them)
            const cleanRecord = JSON.parse(JSON.stringify(record));
            
            // Convert 'sorted' from [['D',35],['I',20],...] to {0:{key:'D',val:35},...}
            if (Array.isArray(cleanRecord.sorted)) {
                cleanRecord.sortedMap = {};
                cleanRecord.sorted.forEach((item, i) => {
                    cleanRecord.sortedMap[i] = { key: item[0], val: item[1] };
                });
                delete cleanRecord.sorted;
            }

            // Remove any other nested arrays recursively
            const flattenNestedArrays = (obj) => {
                if (!obj || typeof obj !== 'object') return obj;
                for (const key in obj) {
                    if (Array.isArray(obj[key])) {
                        // Check if any element is also an array
                        const hasNested = obj[key].some(item => Array.isArray(item));
                        if (hasNested) {
                            // Convert to object map
                            const mapped = {};
                            obj[key].forEach((item, i) => {
                                mapped[i] = item;
                            });
                            obj[key] = mapped;
                        }
                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                        flattenNestedArrays(obj[key]);
                    }
                }
                return obj;
            };
            flattenNestedArrays(cleanRecord);

            await this.db.collection(this.COLLECTION).doc(cleanRecord.id).set(cleanRecord);
            console.log('✅ Saved to Firestore:', cleanRecord.id);
            return true;
        } catch (err) {
            console.error('❌ Firestore save error:', err);
            return false;
        }
    },

    /**
     * Restore record: rebuild sorted from sortedMap
     */
    restoreRecord(data) {
        if (data.sortedMap && !data.sorted) {
            data.sorted = Object.values(data.sortedMap).map(item => [item.key, item.val]);
            delete data.sortedMap;
        }
        // Rebuild sorted from percentages if still missing
        if (!data.sorted && data.percentages) {
            data.sorted = Object.entries(data.percentages).sort((a, b) => b[1] - a[1]);
        }
        return data;
    },

    /**
     * Get all results from Firestore (sorted newest first)
     */
    async getAll() {
        if (!this.isConnected || !this.db) return [];
        try {
            const snapshot = await this.db.collection(this.COLLECTION)
                .orderBy('timestamp', 'desc')
                .get();

            const records = [];
            snapshot.forEach(doc => {
                records.push(this.restoreRecord({ id: doc.id, ...doc.data() }));
            });
            console.log(`✅ Loaded ${records.length} records from Firestore`);
            return records;
        } catch (err) {
            console.error('❌ Firestore getAll error:', err);
            return [];
        }
    },

    /**
     * Get a single result by ID
     */
    async getById(id) {
        if (!this.isConnected || !this.db) return null;
        try {
            const doc = await this.db.collection(this.COLLECTION).doc(id).get();
            if (doc.exists) {
                return this.restoreRecord({ id: doc.id, ...doc.data() });
            }
            return null;
        } catch (err) {
            console.error('❌ Firestore getById error:', err);
            return null;
        }
    },

    /**
     * Delete a result
     */
    async delete(id) {
        if (!this.isConnected || !this.db) return false;
        try {
            await this.db.collection(this.COLLECTION).doc(id).delete();
            console.log('✅ Deleted from Firestore:', id);
            return true;
        } catch (err) {
            console.error('❌ Firestore delete error:', err);
            return false;
        }
    },

    /**
     * Delete all results
     */
    async clearAll() {
        if (!this.isConnected || !this.db) return false;
        try {
            const snapshot = await this.db.collection(this.COLLECTION).get();
            const batch = this.db.batch();
            snapshot.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
            console.log('✅ Cleared all Firestore data');
            return true;
        } catch (err) {
            console.error('❌ Firestore clearAll error:', err);
            return false;
        }
    },

    /**
     * Sync localStorage data to Firestore (one-time migration)
     */
    async syncFromLocal() {
        if (!this.isConnected || !this.db) return 0;
        const localHistory = Storage.getHistory();
        if (localHistory.length === 0) return 0;

        let synced = 0;
        for (const record of localHistory) {
            try {
                const exists = await this.getById(record.id);
                if (!exists) {
                    const cleanRecord = JSON.parse(JSON.stringify(record));
                    await this.save(cleanRecord);
                    synced++;
                }
            } catch (err) {
                console.warn('Sync error for record:', record.id, err);
            }
        }
        if (synced > 0) {
            console.log(`✅ Synced ${synced} local records to Firestore`);
        }
        return synced;
    }
};
