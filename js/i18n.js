/* ============================================ */
/* Internationalization (i18n)                  */
/* Vietnamese / English                        */
/* ============================================ */

const I18N = {
    currentLang: 'vi',

    translations: {
        vi: {
            // Header
            btn_lang: 'Chuyển ngôn ngữ',
            btn_theme: 'Chuyển đổi giao diện',
            // Hero
            hero_title: 'Khám Phá Tính Cách DISC',
            hero_subtitle: 'Công cụ đánh giá hành vi chuyên sâu dành cho quản trị nhân sự',
            disc_d: 'Quyết đoán',
            disc_i: 'Ảnh hưởng',
            disc_s: 'Kiên định',
            disc_c: 'Tuân thủ',
            what_is_disc: 'DISC là gì?',
            disc_explain_text: 'DISC là mô hình đánh giá hành vi được phát triển bởi nhà tâm lý học William Moulton Marston. Mô hình phân loại hành vi con người thành 4 nhóm chính: <strong>D</strong> (Dominance - Quyết đoán), <strong>I</strong> (Influence - Ảnh hưởng), <strong>S</strong> (Steadiness - Kiên định), <strong>C</strong> (Compliance - Tuân thủ). Mỗi người đều sở hữu cả 4 yếu tố nhưng sẽ có 1-2 nhóm trội hơn, tạo nên phong cách hành vi riêng biệt.',
            // Mode selection
            select_mode: 'Chọn vai trò của bạn',
            mode_taker: 'Làm bài đánh giá',
            mode_taker_desc: 'Dành cho ứng viên / nhân viên được yêu cầu thực hiện bài test DISC',
            mode_hr: 'Quản lý & Báo cáo',
            mode_hr_desc: 'Dành cho HR / Ban Giám đốc xem kết quả, báo cáo chi tiết và lịch sử đánh giá',
            // Auth
            hr_auth_title: 'Xác thực quyền truy cập',
            hr_auth_desc: 'Nhập mã PIN quản lý để truy cập báo cáo và lịch sử đánh giá',
            pin_hint: 'Mã PIN mặc định: 123456 (thay đổi trong Cài đặt)',
            btn_login: 'Đăng nhập',
            pin_error: 'Mã PIN không chính xác',
            // Info form
            info_title: 'Thông tin người đánh giá',
            info_subtitle: 'Vui lòng điền đầy đủ thông tin trước khi bắt đầu',
            label_name: 'Họ và tên',
            label_dob: 'Năm sinh',
            label_experience: 'Số năm kinh nghiệm',
            label_target_type: 'Mục đích đánh giá',
            target_candidate: 'Tuyển dụng (Ứng viên)',
            target_employee: 'Nội bộ (Nhân sự đang làm việc)',
            label_gender: 'Giới tính',
            label_industry: 'Ngành nghề',
            label_position: 'Vị trí công việc',
            label_department: 'Phòng ban / Bộ phận',
            label_evaluator: 'Người đánh giá (HR/Quản lý)',
            select_placeholder: '-- Chọn --',
            industry_dental: 'Nha khoa / Y tế',
            industry_fnb: 'F&B (Nhà hàng / Quán cà phê)',
            industry_hospitality: 'Lưu trú (Khách sạn / Homestay)',
            industry_general: 'Khác / Cá nhân',
            btn_start: 'Bắt đầu làm bài',
            // Test
            guide_most: 'Chọn 1 câu GIỐNG bạn nhất',
            guide_least: 'Chọn 1 câu ÍT GIỐNG bạn nhất',
            btn_prev: 'Câu trước',
            btn_next: 'Câu tiếp',
            timer_warning: '⏰ Còn 10 giây!',
            // Results
            result_complete: '🎉 Hoàn thành bài đánh giá!',
            result_basic_desc: 'Dưới đây là tổng quan tính cách DISC của bạn',
            result_basic_note: 'Kết quả chi tiết đã được gửi đến bộ phận Nhân sự. Cảm ơn bạn đã hoàn thành bài đánh giá!',
            btn_back_home: 'Về trang chủ',
            // Report
            report_title: 'BÁO CÁO PHÂN TÍCH NHÂN SỰ CHUYÊN SÂU',
            report_confidential: 'Bảo mật nội bộ - Dành cho Ban Giám đốc / Trưởng phòng Nhân sự / Quản lý',
            report_overview: 'THÔNG TIN TỔNG QUAN',
            report_part1_title: 'PHẦN 1: PHÂN TÍCH CẤU TRÚC TÍNH CÁCH (DỰA TRÊN DỮ LIỆU)',
            report_part2_title: 'PHẦN 2: ĐÁNH GIÁ ĐỘ PHÙ HỢP VỚI VỊ TRÍ (JOB FIT)',
            report_part3_title: 'PHẦN 3: NHẬN DIỆN CÁC LỖ HỔNG CẢNH BÁO (RED FLAGS)',
            report_part4_title: 'PHẦN 4: PHONG CÁCH GIAO TIẾP & LÀM VIỆC NHÓM',
            report_part5_title_new: 'PHẦN 5: ĐỘNG LỰC – NỖI SỢ – MÔI TRƯỜNG LÝ TƯỞNG',
            report_part6_title: 'PHẦN 6: CÂU HỎI PHỎNG VẤN / COACHING',
            report_part7_title: 'PHẦN 7: KẾT LUẬN, CHIẾN LƯỢC & LỘ TRÌNH 30-60-90',
            report_consistency_title: 'ĐỘ TIN CẬY BÀI ĐÁNH GIÁ',
            btn_ai_analyze: 'Phân tích AI',
            btn_export_summary: 'PDF Tóm tắt',
            btn_export_full: 'PDF Chi tiết',
            btn_back_dashboard: 'Về Dashboard',
            // Dashboard
            dashboard_title: '📊 Dashboard Quản lý',
            dashboard_subtitle: 'Lịch sử đánh giá và báo cáo nhân sự',
            btn_new_test: 'Đánh giá mới',
            btn_settings: 'Cài đặt',
            btn_logout: 'Đăng xuất',
            search_placeholder: 'Tìm theo tên...',
            filter_all_disc: 'Tất cả nhóm DISC',
            filter_all_industry: 'Tất cả ngành',
            sort_newest: 'Mới nhất',
            sort_oldest: 'Cũ nhất',
            btn_compare: 'So sánh đã chọn',
            btn_export_data: 'Xuất dữ liệu',
            btn_import_data: 'Nhập dữ liệu',
            col_name: 'Họ tên',
            col_position: 'Vị trí',
            col_disc: 'DISC',
            col_archetype: 'Hình mẫu',
            col_consistency: 'Độ tin cậy',
            col_date: 'Ngày',
            col_actions: 'Thao tác',
            history_empty: 'Chưa có dữ liệu đánh giá nào',
            // Compare
            compare_title: 'So sánh ứng viên',
            compare_position_label: 'Đánh giá phù hợp cho vị trí:',
            // Settings
            settings_title: '⚙️ Cài đặt',
            settings_security: '🔒 Bảo mật',
            settings_change_pin: 'Thay đổi mã PIN',
            btn_save_pin: 'Lưu PIN mới',
            settings_ai: '🤖 Tích hợp AI',
            settings_ai_desc: 'Nhập API key để sử dụng tính năng phân tích AI chuyên sâu (Gemini miễn phí)',
            settings_get_key: 'Lấy API key miễn phí tại Google AI Studio →',
            btn_save_key: 'Lưu API Key',
            settings_data: '💾 Dữ liệu',
            btn_export_all: 'Xuất toàn bộ dữ liệu (JSON)',
            btn_clear_all: 'Xóa toàn bộ dữ liệu',
            // General
            btn_back: 'Quay lại',
            btn_cancel: 'Hủy',
            btn_confirm: 'Xác nhận',
            loading: 'Đang xử lý...',
            // Toast messages
            toast_saved: 'Đã lưu thành công!',
            toast_deleted: 'Đã xóa thành công!',
            toast_imported: 'Đã nhập {count} bản ghi mới!',
            toast_exported: 'Đã xuất dữ liệu thành công!',
            toast_pin_changed: 'Đã thay đổi mã PIN!',
            toast_api_saved: 'Đã lưu API Key!',
            toast_pin_wrong: 'Mã PIN hiện tại không đúng!',
            confirm_delete: 'Bạn có chắc muốn xóa bản ghi này?',
            confirm_clear_all: 'Bạn có chắc muốn xóa TẤT CẢ dữ liệu? Hành động này không thể hoàn tác.',
            ai_no_key: 'Vui lòng cấu hình API Key trong phần Cài đặt trước khi sử dụng tính năng AI.',
            ai_rate_limit: 'Đã vượt giới hạn API. Vui lòng thử lại sau 1 phút.',
            ai_invalid_key: 'API Key không hợp lệ. Vui lòng kiểm tra lại trong Cài đặt.',
            ai_error: 'Lỗi khi gọi AI. Vui lòng thử lại.',
            most_label: 'Giống nhất',
            least_label: 'Ít giống nhất'
        },

        en: {
            btn_lang: 'Switch language',
            btn_theme: 'Toggle theme',
            hero_title: 'Discover Your DISC Personality',
            hero_subtitle: 'Advanced behavioral assessment tool for HR management',
            disc_d: 'Dominance',
            disc_i: 'Influence',
            disc_s: 'Steadiness',
            disc_c: 'Compliance',
            what_is_disc: 'What is DISC?',
            disc_explain_text: 'DISC is a behavioral assessment model developed by psychologist William Moulton Marston. The model categorizes human behavior into 4 main groups: <strong>D</strong> (Dominance), <strong>I</strong> (Influence), <strong>S</strong> (Steadiness), <strong>C</strong> (Compliance). Everyone possesses all 4 factors but will have 1-2 dominant groups that define their unique behavioral style.',
            select_mode: 'Select your role',
            mode_taker: 'Take Assessment',
            mode_taker_desc: 'For candidates / employees required to complete the DISC assessment',
            mode_hr: 'Management & Reports',
            mode_hr_desc: 'For HR / Directors to view results, detailed reports and assessment history',
            hr_auth_title: 'Access Authentication',
            hr_auth_desc: 'Enter management PIN to access reports and assessment history',
            pin_hint: 'Default PIN: 123456 (change in Settings)',
            btn_login: 'Login',
            pin_error: 'Incorrect PIN',
            info_title: 'Assessment Information',
            info_subtitle: 'Please fill in the information before starting',
            label_name: 'Full Name',
            label_dob: 'Date of Birth',
            label_experience: 'Years of Experience',
            label_target_type: 'Assessment Target',
            target_candidate: 'Candidate (Recruitment)',
            target_employee: 'Employee (Internal)',
            label_gender: 'Gender',
            label_industry: 'Industry',
            label_position: 'Job Position',
            label_department: 'Department',
            label_evaluator: 'Evaluator (HR/Manager)',
            select_placeholder: '-- Select --',
            industry_dental: 'Dental / Healthcare',
            industry_fnb: 'F&B (Restaurant / Café)',
            industry_hospitality: 'Hospitality (Hotel / Homestay)',
            industry_general: 'Other / Personal',
            btn_start: 'Start Assessment',
            guide_most: 'Select 1 answer MOST like you',
            guide_least: 'Select 1 answer LEAST like you',
            btn_prev: 'Previous',
            btn_next: 'Next',
            timer_warning: '⏰ 10 seconds left!',
            result_complete: '🎉 Assessment Complete!',
            result_basic_desc: 'Below is your DISC personality overview',
            result_basic_note: 'Detailed results have been sent to the HR department. Thank you for completing the assessment!',
            btn_back_home: 'Back to Home',
            report_title: 'IN-DEPTH HR ANALYSIS REPORT',
            report_confidential: 'Confidential - For Directors / HR Manager / Management Only',
            report_overview: 'OVERVIEW',
            report_part1_title: 'PART 1: PERSONALITY STRUCTURE ANALYSIS (DATA-DRIVEN)',
            report_part2_title: 'PART 2: JOB FIT ASSESSMENT',
            report_part3_title: 'PART 3: RED FLAGS IDENTIFICATION',
            report_part4_title: 'PART 4: COMMUNICATION STYLE & TEAMWORK',
            report_part5_title_new: 'PART 5: MOTIVATORS – FEARS – IDEAL ENVIRONMENT',
            report_part6_title: 'PART 6: INTERVIEW / COACHING QUESTIONS',
            report_part7_title: 'PART 7: CONCLUSION, STRATEGY & 30-60-90 ROADMAP',
            report_consistency_title: 'ASSESSMENT RELIABILITY',
            btn_ai_analyze: 'AI Analysis',
            btn_export_summary: 'Summary PDF',
            btn_export_full: 'Detailed PDF',
            btn_back_dashboard: 'Back to Dashboard',
            dashboard_title: '📊 Management Dashboard',
            dashboard_subtitle: 'Assessment history and HR reports',
            btn_new_test: 'New Assessment',
            btn_settings: 'Settings',
            btn_logout: 'Logout',
            search_placeholder: 'Search by name...',
            filter_all_disc: 'All DISC groups',
            filter_all_industry: 'All industries',
            sort_newest: 'Newest first',
            sort_oldest: 'Oldest first',
            btn_compare: 'Compare selected',
            btn_export_data: 'Export data',
            btn_import_data: 'Import data',
            col_name: 'Name',
            col_position: 'Position',
            col_disc: 'DISC',
            col_archetype: 'Archetype',
            col_consistency: 'Reliability',
            col_date: 'Date',
            col_actions: 'Actions',
            history_empty: 'No assessment data yet',
            compare_title: 'Compare Candidates',
            compare_position_label: 'Evaluate fit for position:',
            settings_title: '⚙️ Settings',
            settings_security: '🔒 Security',
            settings_change_pin: 'Change PIN',
            btn_save_pin: 'Save New PIN',
            settings_ai: '🤖 AI Integration',
            settings_ai_desc: 'Enter API key to use advanced AI analysis (Gemini free tier)',
            settings_get_key: 'Get free API key at Google AI Studio →',
            btn_save_key: 'Save API Key',
            settings_data: '💾 Data',
            btn_export_all: 'Export all data (JSON)',
            btn_clear_all: 'Delete all data',
            btn_back: 'Go back',
            btn_cancel: 'Cancel',
            btn_confirm: 'Confirm',
            loading: 'Processing...',
            toast_saved: 'Saved successfully!',
            toast_deleted: 'Deleted successfully!',
            toast_imported: 'Imported {count} new records!',
            toast_exported: 'Data exported successfully!',
            toast_pin_changed: 'PIN changed successfully!',
            toast_api_saved: 'API Key saved!',
            toast_pin_wrong: 'Current PIN is incorrect!',
            confirm_delete: 'Are you sure you want to delete this record?',
            confirm_clear_all: 'Are you sure you want to delete ALL data? This action cannot be undone.',
            ai_no_key: 'Please configure API Key in Settings before using AI features.',
            ai_rate_limit: 'API rate limit exceeded. Please try again in 1 minute.',
            ai_invalid_key: 'Invalid API Key. Please check in Settings.',
            ai_error: 'AI error. Please try again.',
            most_label: 'Most like me',
            least_label: 'Least like me'
        }
    },

    /**
     * Initialize i18n
     */
    init() {
        this.currentLang = Storage.getLang();
        this.apply();
    },

    /**
     * Toggle language
     */
    toggle() {
        this.currentLang = this.currentLang === 'vi' ? 'en' : 'vi';
        Storage.setLang(this.currentLang);
        this.apply();
        // Update lang label
        const label = document.getElementById('lang-label');
        if (label) label.textContent = this.currentLang === 'vi' ? 'EN' : 'VI';
    },

    /**
     * Get translation
     */
    t(key) {
        return this.translations[this.currentLang]?.[key] || this.translations['vi']?.[key] || key;
    },

    /**
     * Apply translations to DOM
     */
    apply() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);
            if (text) el.innerHTML = text;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const text = this.t(key);
            if (text) el.placeholder = text;
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const text = this.t(key);
            if (text) el.title = text;
        });
        // Update html lang attribute
        document.documentElement.lang = this.currentLang;
    }
};
