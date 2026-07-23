const EXPERT_DB = {
    jobMatrix: {
        // Dental
        dental_reception: {
            industry: 'dental',
            keywords: ['Lễ tân Nha khoa', 'Reception', 'Front Desk'],
            idealPrimary: 'I',
            idealSecondary: 'S',
            fitWeights: {D: 10, I: 35, S: 35, C: 20},
            criticalTraits: ['Friendly', 'Patient', 'Organized'],
            requirements_vi: [
                "Giao tiếp thân thiện, tạo thiện cảm với bệnh nhân ngay từ lần đầu tiếp xúc.",
                "Kiên nhẫn xử lý các thắc mắc và lịch hẹn chồng chéo.",
                "Tuân thủ quy trình hành chính và quản lý hồ sơ cơ bản."
            ],
            requirements_en: [
                "Friendly communication, creating a positive first impression with patients.",
                "Patiently handling inquiries and overlapping appointment schedules.",
                "Adhering to administrative processes and basic records management."
            ],
            description_vi: "Vị trí Lễ tân Nha khoa đòi hỏi sự ấm áp và thân thiện để làm dịu tâm lý lo âu của bệnh nhân, đồng thời duy trì sự ổn định trong công tác hành chính.",
            description_en: "The Dental Receptionist role requires warmth and friendliness to soothe patient anxiety, while maintaining stability in administrative tasks."
        },
        dental_clinical_dentist: {
            industry: 'dental',
            keywords: ['Bác sĩ thực hành lâm sàng', 'Clinical dentist'],
            idealPrimary: 'C',
            idealSecondary: 'S',
            fitWeights: {D: 15, I: 10, S: 30, C: 45},
            criticalTraits: ['Detail-oriented', 'Patient', 'Compliant'],
            requirements_vi: [
                "Tuân thủ nghiêm ngặt các phác đồ điều trị và quy chuẩn y tế.",
                "Tỉ mỉ, chính xác tuyệt đối trong các thao tác lâm sàng.",
                "Kiên nhẫn, điềm tĩnh khi thực hiện các thủ thuật kéo dài."
            ],
            requirements_en: [
                "Strict adherence to treatment protocols and medical standards.",
                "Meticulous and absolutely accurate in clinical maneuvers.",
                "Patient and calm when performing lengthy procedures."
            ],
            description_vi: "Bác sĩ lâm sàng cần sự tập trung cao độ vào chi tiết và quy chuẩn (C) để đảm bảo chất lượng điều trị, kết hợp với sự điềm tĩnh (S) trong quá trình thao tác.",
            description_en: "A clinical dentist needs high focus on details and standards (C) to ensure treatment quality, combined with calmness (S) during procedures."
        },
        dental_general_dentist: {
            industry: 'dental',
            keywords: ['Bác sĩ', 'General dentist', 'Doctor'],
            idealPrimary: 'C',
            idealSecondary: 'D',
            fitWeights: {D: 25, I: 10, S: 20, C: 45},
            criticalTraits: ['Decisive', 'Analytical', 'Professional'],
            requirements_vi: [
                "Ra quyết định điều trị dứt khoát dựa trên phân tích chuyên môn sâu.",
                "Đảm bảo tính chính xác và tuân thủ cao trong y khoa.",
                "Chủ động xử lý các ca bệnh khó và chịu trách nhiệm chuyên môn chính."
            ],
            requirements_en: [
                "Making decisive treatment decisions based on deep professional analysis.",
                "Ensuring high accuracy and medical compliance.",
                "Proactively handling complex cases and taking primary professional responsibility."
            ],
            description_vi: "Vị trí Bác sĩ chính cần sự quyết đoán (D) trong chẩn đoán, kết hợp với tư duy phân tích, đòi hỏi sự chính xác tuyệt đối (C).",
            description_en: "The General Dentist role requires decisiveness (D) in diagnosis, combined with analytical thinking that demands absolute accuracy (C)."
        },
        dental_nurse: {
            industry: 'dental',
            keywords: ['Điều dưỡng Nha khoa', 'Dental nurse'],
            idealPrimary: 'S',
            idealSecondary: 'C',
            fitWeights: {D: 5, I: 15, S: 45, C: 35},
            criticalTraits: ['Supportive', 'Careful', 'Steady'],
            requirements_vi: [
                "Hỗ trợ bác sĩ một cách nhịp nhàng và ổn định.",
                "Chăm sóc bệnh nhân ân cần, giúp họ an tâm trước và sau điều trị.",
                "Tuân thủ nghiêm các quy định vô khuẩn và quản lý dụng cụ."
            ],
            requirements_en: [
                "Supporting the doctor smoothly and consistently.",
                "Caring for patients attentively, providing reassurance before and after treatment.",
                "Strictly adhering to sterilization protocols and instrument management."
            ],
            description_vi: "Điều dưỡng Nha khoa thiên về hỗ trợ và chăm sóc, cần sự ổn định bền bỉ (S) và sự cẩn trọng (C) trong môi trường y tế.",
            description_en: "The Dental Nurse role leans towards support and care, requiring enduring stability (S) and carefulness (C) in a medical environment."
        },
        dental_assistant: {
            industry: 'dental',
            keywords: ['Trợ thủ Nha khoa', 'Dental assistant'],
            idealPrimary: 'S',
            idealSecondary: 'C',
            fitWeights: {D: 5, I: 15, S: 45, C: 35},
            criticalTraits: ['Responsive', 'Meticulous', 'Cooperative'],
            requirements_vi: [
                "Chuẩn bị dụng cụ y tế chính xác theo yêu cầu của từng ca.",
                "Phối hợp ăn ý, thụ động nhưng hiệu quả với bác sĩ điều trị.",
                "Duy trì môi trường làm việc gọn gàng, sạch sẽ theo quy chuẩn."
            ],
            requirements_en: [
                "Preparing medical instruments accurately according to each case's requirements.",
                "Coordinating smoothly, passively yet effectively with the treating doctor.",
                "Maintaining a neat, clean working environment up to standards."
            ],
            description_vi: "Trợ thủ Nha khoa đóng vai trò hậu phương vững chắc, yêu cầu tính tuân thủ cao, khả năng làm việc lặp lại và tính cẩn thận.",
            description_en: "The Dental Assistant plays a solid backup role, requiring high compliance, ability for repetitive tasks, and carefulness."
        },
        dental_supervisor: {
            industry: 'dental',
            keywords: ['Giám sát', 'Tổng hợp', 'Supervisor', 'Coordinator'],
            idealPrimary: 'D',
            idealSecondary: 'C',
            fitWeights: {D: 30, I: 25, S: 15, C: 30},
            criticalTraits: ['Authoritative', 'Systematic', 'Problem-solver'],
            requirements_vi: [
                "Quản lý, điều phối hoạt động chung của phòng khám một cách quyết đoán.",
                "Giám sát việc tuân thủ quy trình y tế và dịch vụ khách hàng.",
                "Giải quyết nhanh chóng các sự cố vận hành phát sinh."
            ],
            requirements_en: [
                "Managing and coordinating the clinic's overall operations decisively.",
                "Supervising compliance with medical and customer service protocols.",
                "Rapidly resolving emerging operational issues."
            ],
            description_vi: "Vị trí Giám sát cần năng lực điều hành mạnh mẽ (D) kết hợp với kỹ năng kiểm soát hệ thống, quy trình chặt chẽ (C).",
            description_en: "The Supervisor role requires strong executive capabilities (D) combined with strict system and process control skills (C)."
        },
        dental_lab_tech: {
            industry: 'dental',
            keywords: ['Kỹ thuật viên Lab', 'Lab technician'],
            idealPrimary: 'C',
            idealSecondary: 'S',
            fitWeights: {D: 5, I: 5, S: 30, C: 60},
            criticalTraits: ['Analytical', 'Precise', 'Solitary'],
            requirements_vi: [
                "Chế tác các mẫu vật liệu nha khoa với độ chính xác và thẩm mỹ tối đa.",
                "Tập trung cao độ khi làm việc độc lập trong thời gian dài.",
                "Kiểm tra chất lượng thành phẩm khắt khe trước khi bàn giao."
            ],
            requirements_en: [
                "Fabricating dental material samples with maximum precision and aesthetics.",
                "Maintaining high concentration while working independently for long periods.",
                "Strictly inspecting the quality of finished products before handover."
            ],
            description_vi: "Kỹ thuật viên Lab là chuyên gia về chi tiết, đòi hỏi sự hoàn hảo và khả năng làm việc độc lập cao (C thuần).",
            description_en: "The Lab Technician is a detail specialist, requiring perfectionism and high independent working ability (pure C)."
        },
        dental_accountant: {
            industry: 'dental',
            keywords: ['Kế toán', 'Accountant'],
            idealPrimary: 'C',
            idealSecondary: 'S',
            fitWeights: {D: 5, I: 5, S: 25, C: 65},
            criticalTraits: ['Accurate', 'Rule-follower', 'Methodical'],
            requirements_vi: [
                "Xử lý số liệu tài chính, hóa đơn chính xác tuyệt đối.",
                "Tuân thủ nghiêm ngặt các quy định về thuế và luật kế toán.",
                "Đảm bảo sự minh bạch và bảo mật thông tin tài chính."
            ],
            requirements_en: [
                "Processing financial data and invoices with absolute accuracy.",
                "Strictly complying with tax regulations and accounting laws.",
                "Ensuring transparency and confidentiality of financial information."
            ],
            description_vi: "Kế toán yêu cầu sự phân tích, tuân thủ nguyên tắc tuyệt đối và khả năng làm việc liên tục với những con số mà không bị sai sót.",
            description_en: "Accounting requires analysis, absolute adherence to principles, and the ability to work continuously with numbers without errors."
        },
        dental_hr: {
            industry: 'dental',
            keywords: ['HR', 'Human resources', 'Nhân sự'],
            idealPrimary: 'I',
            idealSecondary: 'S',
            fitWeights: {D: 15, I: 35, S: 30, C: 20},
            criticalTraits: ['Empathetic', 'Communicative', 'Diplomatic'],
            requirements_vi: [
                "Lắng nghe, thấu hiểu và giải quyết các vấn đề tâm lý của nhân viên.",
                "Kết nối, xây dựng văn hóa doanh nghiệp tích cực.",
                "Duy trì các chính sách nhân sự công bằng, minh bạch."
            ],
            requirements_en: [
                "Listening, understanding, and resolving employees' psychological issues.",
                "Connecting and building a positive corporate culture.",
                "Maintaining fair and transparent HR policies."
            ],
            description_vi: "HR cần kỹ năng tương tác con người xuất sắc (I) và sự thấu cảm (S) để duy trì môi trường làm việc hài hòa.",
            description_en: "HR needs excellent human interaction skills (I) and empathy (S) to maintain a harmonious work environment."
        },
        dental_operations_manager: {
            industry: 'dental',
            keywords: ['Quản lý điều phối', 'Operations manager'],
            idealPrimary: 'D',
            idealSecondary: 'I',
            fitWeights: {D: 35, I: 25, S: 15, C: 25},
            criticalTraits: ['Driven', 'Persuasive', 'Dynamic'],
            requirements_vi: [
                "Điều phối toàn bộ nguồn lực để đạt mục tiêu vận hành và doanh thu.",
                "Thúc đẩy, truyền động lực cho đội ngũ nhân viên.",
                "Giải quyết các nút thắt trong vận hành một cách nhanh chóng và hiệu quả."
            ],
            requirements_en: [
                "Coordinating all resources to achieve operational and revenue goals.",
                "Motivating and inspiring the staff team.",
                "Resolving operational bottlenecks quickly and efficiently."
            ],
            description_vi: "Người Quản lý điều phối cần tính định hướng kết quả cao (D) và khả năng thuyết phục, kết nối các phòng ban (I).",
            description_en: "The Operations Manager requires high result orientation (D) and the ability to persuade and connect departments (I)."
        },
        dental_sales: {
            industry: 'dental',
            keywords: ['Tư vấn', 'Sale', 'Tư vấn viên'],
            idealPrimary: 'I',
            idealSecondary: 'D',
            fitWeights: {D: 30, I: 40, S: 15, C: 15},
            criticalTraits: ['Persuasive', 'Enthusiastic', 'Goal-oriented'],
            requirements_vi: [
                "Thuyết phục khách hàng sử dụng dịch vụ nha khoa bằng kỹ năng giao tiếp xuất sắc.",
                "Chủ động chốt sales và hướng tới mục tiêu doanh số cá nhân.",
                "Duy trì năng lượng tích cực khi đối mặt với sự từ chối."
            ],
            requirements_en: [
                "Persuading clients to use dental services with excellent communication skills.",
                "Proactively closing sales and aiming for personal sales targets.",
                "Maintaining positive energy when facing rejections."
            ],
            description_vi: "Vị trí Sale/Tư vấn đòi hỏi sự hoạt ngôn, sức hút cá nhân (I) kết hợp với tham vọng đạt chỉ tiêu (D).",
            description_en: "The Sales/Consultant role demands articulation, personal magnetism (I) combined with ambition to hit targets (D)."
        },

        // F&B
        fnb_barista: {
            industry: 'fnb',
            keywords: ['Pha chế', 'Barista', 'Bartender'],
            idealPrimary: 'I',
            idealSecondary: 'C',
            fitWeights: {D: 10, I: 35, S: 25, C: 30},
            criticalTraits: ['Creative', 'Sociable', 'Precise'],
            requirements_vi: [
                "Giao tiếp vui vẻ, cởi mở với khách hàng tại quầy.",
                "Đong đếm chính xác định lượng công thức đồ uống.",
                "Duy trì không gian làm việc sạch sẽ và thể hiện phong cách cá nhân."
            ],
            requirements_en: [
                "Communicating cheerfully and openly with customers at the counter.",
                "Accurately measuring drink recipe proportions.",
                "Maintaining a clean workspace and expressing personal style."
            ],
            description_vi: "Pha chế cần sự sáng tạo và tương tác tốt (I), nhưng đồng thời phải tuân thủ nghiêm ngặt công thức (C) để đảm bảo chất lượng đồng đều.",
            description_en: "A Barista needs creativity and good interaction (I), but also strict adherence to recipes (C) to ensure consistent quality."
        },
        fnb_server: {
            industry: 'fnb',
            keywords: ['Phục vụ', 'Server', 'Waiter', 'Waitress'],
            idealPrimary: 'I',
            idealSecondary: 'S',
            fitWeights: {D: 10, I: 40, S: 35, C: 15},
            criticalTraits: ['Outgoing', 'Service-oriented', 'Adaptable'],
            requirements_vi: [
                "Chào đón và phục vụ khách hàng với thái độ nhiệt tình, hiếu khách.",
                "Kiên nhẫn và bình tĩnh xử lý các yêu cầu thay đổi từ khách.",
                "Hỗ trợ đồng nghiệp trong giờ cao điểm."
            ],
            requirements_en: [
                "Welcoming and serving customers with an enthusiastic, hospitable attitude.",
                "Patiently and calmly handling changing requests from guests.",
                "Supporting colleagues during peak hours."
            ],
            description_vi: "Phục vụ là bộ mặt của nhà hàng, đòi hỏi năng lượng giao tiếp dồi dào (I) và thái độ phục vụ tận tâm, bền bỉ (S).",
            description_en: "A Server is the face of the restaurant, requiring abundant communicative energy (I) and a dedicated, persistent service attitude (S)."
        },
        fnb_shift_leader: {
            industry: 'fnb',
            keywords: ['Trưởng ca', 'Shift leader'],
            idealPrimary: 'D',
            idealSecondary: 'I',
            fitWeights: {D: 35, I: 30, S: 15, C: 20},
            criticalTraits: ['Directing', 'Energetic', 'Decisive'],
            requirements_vi: [
                "Điều phối nhân sự trong ca làm việc một cách dứt khoát.",
                "Truyền lửa và duy trì nhịp độ làm việc nhanh chóng cho toàn đội.",
                "Giải quyết tại chỗ các phàn nàn của khách hàng."
            ],
            requirements_en: [
                "Decisively coordinating staff during the shift.",
                "Inspiring and maintaining a fast work pace for the whole team.",
                "Resolving customer complaints on the spot."
            ],
            description_vi: "Trưởng ca phải là người dẫn dắt (D) để xử lý khối lượng công việc lớn, đồng thời khích lệ tinh thần làm việc của nhân viên (I).",
            description_en: "A Shift Leader must be a driver (D) to handle heavy workloads, while boosting staff morale (I)."
        },
        fnb_manager: {
            industry: 'fnb',
            keywords: ['Quản lý', 'Manager'],
            idealPrimary: 'D',
            idealSecondary: 'C',
            fitWeights: {D: 35, I: 20, S: 15, C: 30},
            criticalTraits: ['Strategic', 'Controlling', 'Results-driven'],
            requirements_vi: [
                "Đảm bảo mục tiêu doanh thu và tối ưu hóa chi phí vận hành (Food cost, Labor cost).",
                "Thiết lập và giám sát chặt chẽ các tiêu chuẩn dịch vụ, an toàn vệ sinh.",
                "Ra quyết định nhân sự và xử lý khủng hoảng truyền thông nội bộ/khách hàng."
            ],
            requirements_en: [
                "Ensuring revenue goals and optimizing operational costs (Food cost, Labor cost).",
                "Establishing and strictly monitoring service and hygiene standards.",
                "Making HR decisions and handling internal/customer crisis communications."
            ],
            description_vi: "Quản lý nhà hàng cần sự quyết đoán, nhắm tới kết quả (D) nhưng cũng phải kiểm soát số liệu, chi phí và quy trình cực kỳ chặt chẽ (C).",
            description_en: "A Restaurant Manager needs decisiveness, targeting results (D) but must also extremely strictly control metrics, costs, and processes (C)."
        },

        // Hospitality
        hosp_front_desk: {
            industry: 'hospitality',
            keywords: ['Lễ tân khách sạn', 'Front desk', 'Receptionist'],
            idealPrimary: 'I',
            idealSecondary: 'S',
            fitWeights: {D: 10, I: 35, S: 35, C: 20},
            criticalTraits: ['Welcoming', 'Tactful', 'Patient'],
            requirements_vi: [
                "Cung cấp dịch vụ check-in/check-out với thái độ niềm nở, chuyên nghiệp.",
                "Kiên nhẫn giải đáp thông tin du lịch và hỗ trợ khách lưu trú.",
                "Xử lý khéo léo các tình huống khách phàn nàn nhẹ."
            ],
            requirements_en: [
                "Providing check-in/check-out services with a welcoming, professional attitude.",
                "Patiently answering travel inquiries and assisting staying guests.",
                "Tactfully handling mild customer complaints."
            ],
            description_vi: "Lễ tân là hình ảnh đại diện của khách sạn, ưu tiên kỹ năng kết nối (I) và sự tận tình, ổn định (S).",
            description_en: "The Front Desk is the representative image of the hotel, prioritizing connection skills (I) and dedication, stability (S)."
        },
        hosp_housekeeping: {
            industry: 'hospitality',
            keywords: ['Buồng phòng', 'Housekeeping', 'Maid'],
            idealPrimary: 'S',
            idealSecondary: 'C',
            fitWeights: {D: 5, I: 5, S: 45, C: 45},
            criticalTraits: ['Thorough', 'Reliable', 'Unobtrusive'],
            requirements_vi: [
                "Thực hiện công việc dọn dẹp lặp đi lặp lại với độ tỉ mỉ cao.",
                "Tuân thủ nghiêm ngặt tiêu chuẩn vệ sinh của khách sạn.",
                "Làm việc thầm lặng, không gây ảnh hưởng đến sự riêng tư của khách."
            ],
            requirements_en: [
                "Performing repetitive cleaning tasks with high meticulousness.",
                "Strictly complying with the hotel's hygiene standards.",
                "Working quietly without affecting guests' privacy."
            ],
            description_vi: "Buồng phòng là công việc cần sự cần mẫn, chịu khó (S) và sự cẩn thận, chú ý đến từng chi tiết nhỏ nhất (C).",
            description_en: "Housekeeping is a job requiring diligence, endurance (S) and carefulness, attention to the smallest details (C)."
        },
        hosp_hotel_manager: {
            industry: 'hospitality',
            keywords: ['Quản lý khách sạn', 'Hotel manager', 'General manager'],
            idealPrimary: 'D',
            idealSecondary: 'I',
            fitWeights: {D: 35, I: 25, S: 15, C: 25},
            criticalTraits: ['Authoritative', 'Visionary', 'Influential'],
            requirements_vi: [
                "Điều hành toàn bộ hoạt động khách sạn để đạt chỉ tiêu kinh doanh.",
                "Đại diện hình ảnh khách sạn trong các sự kiện ngoại giao, đối tác.",
                "Đưa ra các quyết định chiến lược và quản lý đội ngũ cấp trung."
            ],
            requirements_en: [
                "Directing all hotel operations to achieve business targets.",
                "Representing the hotel's image in diplomatic events and with partners.",
                "Making strategic decisions and managing middle management."
            ],
            description_vi: "Quản lý khách sạn đòi hỏi tầm nhìn và quyền uy (D), cùng khả năng ngoại giao, xây dựng mạng lưới quan hệ xuất sắc (I).",
            description_en: "A Hotel Manager demands vision and authority (D), along with excellent diplomacy and networking skills (I)."
        },
        hosp_bellman: {
            industry: 'hospitality',
            keywords: ['Bellman', 'Porter', 'Concierge'],
            idealPrimary: 'S',
            idealSecondary: 'I',
            fitWeights: {D: 5, I: 30, S: 45, C: 20},
            criticalTraits: ['Helpful', 'Friendly', 'Accommodating'],
            requirements_vi: [
                "Chủ động hỗ trợ hành lý cho khách với thái độ tận tụy.",
                "Giao tiếp thân thiện, cởi mở trong thời gian ngắn khi tiếp xúc khách.",
                "Sẵn sàng phục vụ và đáp ứng các yêu cầu hỗ trợ vật lý."
            ],
            requirements_en: [
                "Proactively assisting with guests' luggage with a dedicated attitude.",
                "Communicating friendly and openly during brief guest interactions.",
                "Ready to serve and meet physical assistance requests."
            ],
            description_vi: "Bellman thiên về phục vụ tận tâm (S) và kỹ năng giao tiếp tạo thiện cảm chớp nhoáng (I).",
            description_en: "A Bellman leans towards dedicated service (S) and quick rapport-building communication skills (I)."
        },
        hosp_fnb: {
            industry: 'hospitality',
            keywords: ['F&B trong khách sạn', 'Hotel F&B', 'Banquet'],
            idealPrimary: 'I',
            idealSecondary: 'S',
            fitWeights: {D: 15, I: 35, S: 30, C: 20},
            criticalTraits: ['Sociable', 'Team-oriented', 'Responsive'],
            requirements_vi: [
                "Phục vụ tiệc, hội nghị khách sạn với sự chuyên nghiệp, chuẩn mực.",
                "Tương tác khéo léo với đa dạng đối tượng khách VIP.",
                "Phối hợp nhịp nhàng với bếp và các bộ phận khác."
            ],
            requirements_en: [
                "Serving hotel banquets and conferences with standard professionalism.",
                "Interacting tactfully with a diverse range of VIP guests.",
                "Coordinating smoothly with the kitchen and other departments."
            ],
            description_vi: "Khối F&B khách sạn yêu cầu tiêu chuẩn dịch vụ cao, cần sự nhanh nhẹn, hoạt bát (I) và tinh thần đồng đội (S).",
            description_en: "Hotel F&B requires high service standards, needing agility, vivacity (I) and team spirit (S)."
        },
        hosp_night_auditor: {
            industry: 'hospitality',
            keywords: ['Lễ tân đêm', 'Night auditor'],
            idealPrimary: 'C',
            idealSecondary: 'S',
            fitWeights: {D: 10, I: 10, S: 30, C: 50},
            criticalTraits: ['Analytical', 'Independent', 'Vigilant'],
            requirements_vi: [
                "Kiểm tra, chốt số liệu tài chính và giao dịch trong ngày của khách sạn.",
                "Làm việc độc lập, thức khuya với sự tập trung cao.",
                "Xử lý các tình huống an ninh hoặc khẩn cấp trong đêm."
            ],
            requirements_en: [
                "Auditing and closing the hotel's daily financial data and transactions.",
                "Working independently late at night with high concentration.",
                "Handling nighttime security or emergency situations."
            ],
            description_vi: "Lễ tân đêm tập trung vào con số và kiểm toán (C) kết hợp với tính kiên nhẫn khi làm việc vào khung giờ tĩnh lặng (S).",
            description_en: "The Night Auditor focuses on numbers and auditing (C) combined with patience working in quiet hours (S)."
        }
    },

    communicationStyles: {
        D: {
            style_vi: "Trực diện, tập trung vào kết quả, thiếu kiên nhẫn với chi tiết dông dài.",
            style_en: "Direct, result-focused, impatient with details.",
            conflict_vi: "Hay đối đầu, có xu hướng áp đặt và lấn át người khác.",
            conflict_en: "Confrontational, may steamroll others.",
            teamwork_vi: "Muốn làm lãnh đạo, thích giao việc nhưng ít khi theo dõi sát sao chi tiết.",
            teamwork_en: "Wants to lead, delegates but doesn't follow up on details.",
            doNot_vi: "Đừng dông dài, đừng dùng cảm xúc để thuyết phục, đừng mơ hồ về mục tiêu.",
            doNot_en: "Don't ramble, don't use emotional appeals, don't be vague.",
            bestWith: ['S', 'C'],
            avoidWith: ['D'],
            pairingAdvice_vi: "S cung cấp sự hỗ trợ và ổn định, C đảm bảo độ chính xác. Hai người D sẽ dễ cạnh tranh quyền lực.",
            pairingAdvice_en: "S provides stability, C provides accuracy. Two D's will clash for dominance."
        },
        I: {
            style_vi: "Nhiệt tình, đầy cảm hứng, tập trung vào con người và ý tưởng mới.",
            style_en: "Enthusiastic, inspiring, focuses on people and new ideas.",
            conflict_vi: "Sợ bị từ chối, có thể phản ứng bằng thái độ công kích cá nhân nếu cảm thấy bị phớt lờ.",
            conflict_en: "Fears rejection, may react with personal attacks if feeling ignored.",
            teamwork_vi: "Là người truyền cảm hứng, nhưng dễ xao nhãng và bỏ dở công việc giữa chừng.",
            teamwork_en: "Inspires the team, but easily distracted and may leave tasks unfinished.",
            doNot_vi: "Đừng quá lạnh lùng, đừng vùi dập ý tưởng của họ ngay lập tức, đừng trói buộc họ bằng quá nhiều quy tắc.",
            doNot_en: "Don't be too cold, don't immediately shoot down their ideas, don't restrict them with too many rules.",
            bestWith: ['S', 'C'],
            avoidWith: ['C'],
            pairingAdvice_vi: "Kết hợp tốt với S (người lắng nghe). Cần cẩn thận khi làm việc với C vì I quá cảm tính trong khi C quá nguyên tắc, dễ gây ức chế lẫn nhau.",
            pairingAdvice_en: "Pairs well with S (listener). Be careful with C because I is too emotional while C is too logical, causing mutual frustration."
        },
        S: {
            style_vi: "Điềm tĩnh, thân thiện, lắng nghe tốt và né tránh xung đột.",
            style_en: "Calm, friendly, good listener, and conflict-avoidant.",
            conflict_vi: "Thường nhượng bộ, ghim sự bực tức trong lòng thay vì nói thẳng.",
            conflict_en: "Tends to concede, harbors resentment internally instead of speaking up.",
            teamwork_vi: "Đáng tin cậy, làm việc nhóm tốt, sẵn sàng hỗ trợ người khác.",
            teamwork_en: "Reliable, good team player, ready to support others.",
            doNot_vi: "Đừng ép họ ra quyết định quá nhanh, đừng thay đổi kế hoạch đột ngột, đừng hung hăng.",
            doNot_en: "Don't force them to decide too quickly, don't change plans suddenly, don't be aggressive.",
            bestWith: ['D', 'I', 'C'],
            avoidWith: [],
            pairingAdvice_vi: "S là 'chất keo' của mọi nhóm. Tuy nhiên, khi làm việc với D, S cần được bảo vệ để không bị bóc lột sức lao động.",
            pairingAdvice_en: "S is the 'glue' for any team. However, when paired with D, S needs protection from being overworked."
        },
        C: {
            style_vi: "Thận trọng, logic, đặt câu hỏi chi tiết và dựa trên dữ kiện.",
            style_en: "Cautious, logical, asks detailed questions and relies on facts.",
            conflict_vi: "Sẽ dùng bằng chứng để phản bác, trở nên cứng nhắc và cố chấp bảo vệ quan điểm.",
            conflict_en: "Will use evidence to argue, becomes rigid and stubbornly defends point of view.",
            teamwork_vi: "Người kiểm soát chất lượng, nhưng có thể làm chậm tiến độ vì đòi hỏi sự hoàn hảo.",
            teamwork_en: "Quality controller, but may slow down progress due to perfectionism.",
            doNot_vi: "Đừng nói chung chung, đừng trả lời mập mờ, đừng phê bình công việc của họ mà không có bằng chứng.",
            doNot_en: "Don't generalize, don't give vague answers, don't criticize their work without evidence.",
            bestWith: ['D', 'S'],
            avoidWith: ['I'],
            pairingAdvice_vi: "C giúp D cụ thể hóa kế hoạch. C và I dễ xung đột vì I bốc đồng, bỏ qua chi tiết, còn C quá xét nét.",
            pairingAdvice_en: "C helps D materialize plans. C and I often conflict because I is impulsive and ignores details, while C is nitpicky."
        }
    },

    motivatorsAndFears: {
        D: {
            motivators_vi: ["Quyền lực và sự kiểm soát", "Thử thách khó khăn", "Sự thăng tiến nhanh chóng", "Tự do ra quyết định"],
            motivators_en: ["Power and control", "Difficult challenges", "Rapid advancement", "Freedom to make decisions"],
            fears_vi: ["Bị lợi dụng", "Mất quyền kiểm soát", "Thất bại", "Trông có vẻ yếu đuối"],
            fears_en: ["Being taken advantage of", "Losing control", "Failure", "Appearing weak"],
            idealEnv_vi: "Môi trường có nhịp độ nhanh, nhiều tính cạnh tranh, đo lường bằng kết quả rõ ràng.",
            idealEnv_en: "Fast-paced, highly competitive environment, measured by clear results.",
            burnoutSign_vi: "Trở nên độc đoán thái quá, nổi nóng, bực bội với sự chậm chạp của người khác.",
            burnoutSign_en: "Becoming overly dictatorial, losing temper, frustrated by others' slowness."
        },
        I: {
            motivators_vi: ["Sự công nhận cộng đồng", "Môi trường làm việc vui vẻ", "Được tự do ngôn luận", "Hoạt động nhóm sôi nổi"],
            motivators_en: ["Social recognition", "Fun work environment", "Freedom of expression", "Vibrant group activities"],
            fears_vi: ["Bị phớt lờ, tẩy chay", "Sự từ chối", "Mất ảnh hưởng", "Công việc lặp đi lặp lại"],
            fears_en: ["Being ignored or ostracized", "Rejection", "Loss of influence", "Repetitive tasks"],
            idealEnv_vi: "Môi trường cởi mở, không có quá nhiều quy tắc gò bó, được gặp gỡ nhiều người.",
            idealEnv_en: "Open environment, without too many restrictive rules, opportunity to meet many people.",
            burnoutSign_vi: "Mất năng lượng, hứa hẹn nhưng không làm, phàn nàn và nói xấu sau lưng.",
            burnoutSign_en: "Losing energy, promising but not delivering, complaining and gossiping."
        },
        S: {
            motivators_vi: ["Môi trường ổn định", "Sự đánh giá cao chân thành", "Làm việc theo nhóm hòa thuận", "Quy trình rõ ràng"],
            motivators_en: ["Stable environment", "Sincere appreciation", "Harmonious teamwork", "Clear procedures"],
            fears_vi: ["Sự thay đổi đột ngột", "Xung đột, cãi vã", "Làm người khác thất vọng", "Bị thúc ép ra quyết định"],
            fears_en: ["Sudden change", "Conflict and arguments", "Disappointing others", "Being pressured to make decisions"],
            idealEnv_vi: "Môi trường an toàn, có tính dự báo trước, đồng nghiệp thân thiện và hỗ trợ lẫn nhau.",
            idealEnv_en: "Safe, predictable environment, friendly and supportive colleagues.",
            burnoutSign_vi: "Im lặng, thụ động chống đối, bướng bỉnh ngầm, rút lui khỏi các hoạt động.",
            burnoutSign_en: "Silence, passive resistance, hidden stubbornness, withdrawing from activities."
        },
        C: {
            motivators_vi: ["Chất lượng và sự hoàn hảo", "Dữ liệu và logic", "Sự rõ ràng về kỳ vọng", "Môi trường tĩnh lặng"],
            motivators_en: ["Quality and perfection", "Data and logic", "Clear expectations", "Quiet environment"],
            fears_vi: ["Bị chỉ trích về chuyên môn", "Công việc cẩu thả", "Cảm xúc lấn át lý trí", "Thay đổi không có kế hoạch"],
            fears_en: ["Professional criticism", "Sloppy work", "Emotions overpowering logic", "Unplanned changes"],
            idealEnv_vi: "Môi trường chuyên nghiệp, đánh giá dựa trên tiêu chuẩn khách quan, có thời gian để phân tích.",
            idealEnv_en: "Professional environment, evaluated on objective standards, given time to analyze.",
            burnoutSign_vi: "Phê phán gay gắt người khác, 'tê liệt phân tích' (không chốt được vấn đề), trở nên cực đoan về quy tắc.",
            burnoutSign_en: "Harshly criticizing others, 'analysis paralysis', becoming extreme about rules."
        }
    },

    deceptionSigns: {
        D: {
            signs_vi: [
                "Nói quá lên về vai trò lãnh đạo của họ trong các dự án cũ (nhận công của tập thể).",
                "Trở nên cáu kỉnh hoặc hung hăng nhẹ khi bị hỏi sâu về một thất bại.",
                "Cố gắng giành quyền kiểm soát buổi phỏng vấn bằng cách hỏi ngược lại liên tục."
            ],
            signs_en: [
                "Exaggerating their leadership role in past projects (taking team credit).",
                "Becoming irritable or mildly aggressive when probed deeply about a failure.",
                "Trying to take control of the interview by constantly asking questions back."
            ]
        },
        I: {
            signs_vi: [
                "Kể chuyện dài dòng, kịch tính hóa để đánh lạc hướng khỏi các câu hỏi về chi tiết.",
                "Dùng quá nhiều từ ngữ biểu cảm nhưng thiếu các số liệu, dữ kiện cụ thể.",
                "Tỏ ra đồng tình thái quá với người phỏng vấn để tạo thiện cảm giả tạo."
            ],
            signs_en: [
                "Telling long, dramatized stories to distract from detailed questions.",
                "Using too many expressive words but lacking specific numbers and facts.",
                "Being overly agreeable with the interviewer to create fake rapport."
            ]
        },
        S: {
            signs_vi: [
                "Đưa ra các câu trả lời chung chung, quá an toàn, dĩ hòa vi quý để né tránh việc bày tỏ quan điểm.",
                "Che giấu sự bất mãn thực sự ở công ty cũ bằng những lời khen ngợi gượng gạo.",
                "Ngập ngừng rất lâu khi bị đưa vào tình huống giả định đòi hỏi sự quyết đoán."
            ],
            signs_en: [
                "Giving generic, overly safe, people-pleasing answers to avoid expressing opinions.",
                "Hiding real dissatisfaction with former companies through forced praise.",
                "Hesitating for a long time when given hypothetical scenarios requiring decisiveness."
            ]
        },
        C: {
            signs_vi: [
                "Cung cấp quá nhiều chi tiết kỹ thuật không cần thiết để làm rối người phỏng vấn.",
                "Đổ lỗi cho quy trình hoặc người khác bằng các lý lẽ logic khi nói về sai sót cá nhân.",
                "Trở nên cứng nhắc và tự vệ cao độ khi tính chính xác trong CV bị nghi ngờ."
            ],
            signs_en: [
                "Providing too many unnecessary technical details to confuse the interviewer.",
                "Blaming processes or others using logical arguments when discussing personal errors.",
                "Becoming rigid and highly defensive when the accuracy of their CV is questioned."
            ]
        }
    },

    trainingRoadmap: {
        D: {
            day30_vi: "Giao ngay các dự án ngắn hạn có kết quả rõ ràng. Không micromanage (quản lý vi mô). Thiết lập KPI cụ thể.",
            day30_en: "Assign short-term projects with clear results immediately. Do not micromanage. Set specific KPIs.",
            day60_vi: "Đánh giá tiến độ dựa trên số liệu. Mở rộng quyền hạn nếu đạt target. Đưa ra phản hồi thẳng thắn, không vòng vo.",
            day60_en: "Evaluate progress based on metrics. Expand authority if targets are met. Provide blunt, direct feedback.",
            day90_vi: "Trao cho họ một thử thách khó hơn hoặc vai trò dẫn dắt dự án mới để giữ lửa. Yêu cầu họ cam kết hỗ trợ đồng nghiệp.",
            day90_en: "Give them a harder challenge or a new project lead role to maintain drive. Require them to commit to peer support."
        },
        I: {
            day30_vi: "Tổ chức các buổi giới thiệu, giúp họ kết nối với toàn team. Cho họ cơ hội phát biểu ý tưởng. Theo dõi sát sao deadline.",
            day30_en: "Organize introductions, helping them connect with the team. Give them chances to voice ideas. Closely monitor deadlines.",
            day60_vi: "Khen ngợi công khai khi họ làm tốt. Hướng dẫn họ cách quản lý thời gian và sắp xếp công việc chi tiết hơn.",
            day60_en: "Praise them publicly when they do well. Guide them on time management and detailed task organization.",
            day90_vi: "Giao các công việc liên quan đến tương tác (đào tạo, sự kiện). Đánh giá việc họ có hoàn thành đến cùng các công việc được giao hay không.",
            day90_en: "Assign interactive tasks (training, events). Evaluate if they follow through and finish assigned tasks."
        },
        S: {
            day30_vi: "Cung cấp một lộ trình đào tạo chi tiết, từng bước. Chỉ định một 'buddy' (người hướng dẫn) tận tâm. Không tạo áp lực thời gian gấp gáp.",
            day30_en: "Provide a detailed, step-by-step training roadmap. Assign a dedicated 'buddy' (mentor). Avoid intense time pressure.",
            day60_vi: "Thường xuyên hỏi han riêng tư (1-on-1) để họ bày tỏ khó khăn. Đảm bảo môi trường làm việc ổn định, ít biến động.",
            day60_en: "Conduct frequent private 1-on-1 check-ins so they can express difficulties. Ensure a stable, low-change work environment.",
            day90_vi: "Ghi nhận sự đóng góp thầm lặng của họ. Bắt đầu khuyến khích họ tự chủ động đề xuất ý kiến cải tiến công việc.",
            day90_en: "Recognize their silent contributions. Start encouraging them to proactively suggest work improvements."
        },
        C: {
            day30_vi: "Cung cấp đầy đủ tài liệu, quy trình, SOPs. Để họ có không gian tĩnh lặng để nghiên cứu. Trả lời chi tiết các câu hỏi của họ.",
            day30_en: "Provide comprehensive documents, processes, SOPs. Give them quiet space to study. Answer their questions in detail.",
            day60_vi: "Giao các nhiệm vụ yêu cầu phân tích dữ liệu và kiểm tra lỗi. Giúp họ hiểu rằng 'hoàn thành tốt hơn hoàn hảo'.",
            day60_en: "Assign tasks requiring data analysis and error checking. Help them understand 'done is better than perfect'.",
            day90_vi: "Đánh giá chất lượng công việc, khen ngợi tính logic và chính xác của họ. Khuyến khích họ ra quyết định nhanh hơn.",
            day90_en: "Evaluate work quality, praise their logic and accuracy. Encourage them to make faster decisions."
        }
    },

    teamPairing: {
        'D-I': {
            synergy_vi: "D thúc đẩy hành động, I tạo năng lượng và kết nối. Rất tốt để khai phá thị trường mới.",
            synergy_en: "D drives action, I creates energy and connection. Great for exploring new markets.",
            friction_vi: "D thấy I quá dài dòng và thiếu tập trung. I thấy D quá tàn nhẫn và khô khan.",
            friction_en: "D finds I too wordy and unfocused. I finds D too ruthless and dry.",
            advice_vi: "Phân chia rõ vai trò: D lập chiến lược và chốt kết quả, I đảm nhận ngoại giao và truyền thông.",
            advice_en: "Clearly divide roles: D handles strategy and closing, I handles diplomacy and communication."
        },
        'D-S': {
            synergy_vi: "D là người khởi xướng, S là người thực thi kiên nhẫn. Sự bù trừ tuyệt vời giữa tốc độ và sự bền bỉ.",
            synergy_en: "D initiates, S executes patiently. Excellent compensation between speed and endurance.",
            friction_vi: "D ép tiến độ quá nhanh làm S hoảng sợ. S quá chậm chạp khiến D bực tức.",
            friction_en: "D pushes the pace too fast making S panic. S is too slow making D angry.",
            advice_vi: "D cần học cách giao tiếp nhẹ nhàng hơn. S cần báo cáo tiến độ thường xuyên để D yên tâm.",
            advice_en: "D needs to learn softer communication. S needs to report progress frequently to reassure D."
        },
        'D-C': {
            synergy_vi: "D nhắm đến mục tiêu, C đảm bảo chất lượng và rủi ro thấp. Cặp đôi hoàn hảo cho các dự án quan trọng.",
            synergy_en: "D aims for the goal, C ensures quality and low risk. Perfect pair for critical projects.",
            friction_vi: "C phân tích quá lâu làm tuột cơ hội của D. D phớt lờ rủi ro làm C bất an.",
            friction_en: "C analyzes too long, losing D's opportunities. D ignores risks making C anxious.",
            advice_vi: "Thỏa thuận trước 'điểm dừng phân tích'. Khi đến hạn, D được quyền quyết định dựa trên dữ liệu C đã có.",
            advice_en: "Agree on an 'analysis cutoff point' beforehand. At the deadline, D decides based on C's available data."
        },
        'I-S': {
            synergy_vi: "Môi trường làm việc cực kỳ hòa đồng, vui vẻ. Dịch vụ khách hàng xuất sắc.",
            synergy_en: "Extremely harmonious, fun work environment. Excellent customer service.",
            friction_vi: "Thiếu người đưa ra quyết định khó khăn. Dễ sa đà vào quan hệ cá nhân mà quên mục tiêu công việc.",
            friction_en: "Lacks someone to make tough decisions. Easily distracted by personal relations over work goals.",
            advice_vi: "Cần áp dụng KPI và quy trình chặt chẽ để giữ cả hai đi đúng hướng và tập trung vào hiệu suất.",
            advice_en: "Must enforce KPIs and strict processes to keep both on track and focused on performance."
        },
        'I-C': {
            synergy_vi: "I đưa ra ý tưởng sáng tạo, C biến ý tưởng thành quy trình thực tế.",
            synergy_en: "I generates creative ideas, C turns ideas into practical processes.",
            friction_vi: "Xung đột kinh điển: I thấy C quá khắt khe, nhàm chán. C thấy I hời hợt, bốc đồng, cẩu thả.",
            friction_en: "Classic conflict: I finds C too strict and boring. C finds I superficial, impulsive, careless.",
            advice_vi: "Tuyệt đối không để C quản lý vi mô (micromanage) I. Hãy để họ làm việc độc lập và chỉ ghép nối ở bước hoàn thiện.",
            advice_en: "Absolutely do not let C micromanage I. Let them work independently and only integrate at the completion stage."
        },
        'S-C': {
            synergy_vi: "Độ tin cậy và chính xác tuyệt đối. Phù hợp cho các công việc hậu cần, hành chính, tài chính.",
            synergy_en: "Absolute reliability and accuracy. Suitable for logistics, administration, finance.",
            friction_vi: "Quá an toàn, sợ thay đổi. Nhóm làm việc có xu hướng giậm chân tại chỗ, thiếu đột phá.",
            friction_en: "Too safe, fears change. The team tends to stagnate, lacking breakthroughs.",
            advice_vi: "Cần một người lãnh đạo nhóm D hoặc I để kéo họ ra khỏi vùng an toàn và thúc đẩy đổi mới.",
            advice_en: "Needs a D or I team leader to pull them out of their comfort zone and drive innovation."
        }
    },

    interviewQuestions: {
        High_D: [
            {
                q_vi: "Hãy kể về một lần bạn phải thực hiện một dự án đòi hỏi sự tỉ mỉ, chi tiết và lặp đi lặp lại trong thời gian dài. Bạn đã làm thế nào để duy trì sự kiên nhẫn?",
                q_en: "Tell me about a time you had to work on a meticulous, repetitive project for a long period. How did you maintain patience?",
                purpose_vi: "Kiểm tra khả năng làm việc chi tiết và độ kiên nhẫn (Điểm yếu của nhóm D).",
                purpose_en: "Tests detail-orientation and patience (D-type weakness)."
            },
            {
                q_vi: "Hãy kể về một quyết định sai lầm của bạn do đưa ra quá vội vàng. Bạn đã khắc phục hậu quả ra sao và bài học rút ra là gì?",
                q_en: "Describe a wrong decision you made because you rushed. How did you fix the consequences?",
                purpose_vi: "Kiểm tra tính bốc đồng và khả năng nhận sai (Nhóm D thường tự tôn cao, khó nhận sai).",
                purpose_en: "Tests impulsiveness and ability to admit mistakes (D-types have high ego)."
            },
            {
                q_vi: "Mô tả một tình huống bạn phải làm việc dưới quyền một người sếp chậm chạp, hay do dự. Bạn đã xử lý sự bực bội của mình như thế nào?",
                q_en: "Describe a situation where you worked under a slow, indecisive boss. How did you handle the frustration?",
                purpose_vi: "Kiểm tra sự tôn trọng cấp trên và thái độ khi bị kìm hãm tốc độ.",
                purpose_en: "Tests respect for authority and attitude when slowed down."
            }
        ],
        High_I: [
            {
                q_vi: "Hãy kể về một lần sự nhiệt tình của bạn khiến bạn hứa hẹn quá mức với khách hàng/đồng nghiệp nhưng thực tế không làm được. Bạn đã xử lý thế nào?",
                q_en: "Tell about a time your enthusiasm led you to over-promise to a client/colleague but couldn't deliver. How did you handle it?",
                purpose_vi: "Kiểm tra tật 'nói quá', hứa hão và khả năng quản lý cam kết (Điểm mù cực lớn của nhóm I).",
                purpose_en: "Tests over-promising habit and commitment management (major I-type blind spot)."
            },
            {
                q_vi: "Mô tả hệ thống hoặc phương pháp cụ thể bạn dùng để không quên các chi tiết nhỏ nhặt trong công việc hàng ngày.",
                q_en: "Describe the specific system or method you use to not forget small details in daily work.",
                purpose_vi: "Kiểm tra kỹ năng tổ chức và quản lý chi tiết (Nhóm I thường hay quên và vô tổ chức).",
                purpose_en: "Tests organizational skills and detail management (I-types are often forgetful)."
            },
            {
                q_vi: "Bạn làm thế nào khi phải làm việc một mình trong thời gian dài mà không có ai giao tiếp hay công nhận bạn?",
                q_en: "How do you cope when working alone for extended periods with no social interaction or recognition?",
                purpose_vi: "Kiểm tra khả năng làm việc độc lập, không bị phụ thuộc vào sự chú ý.",
                purpose_en: "Tests ability to work independently without attention dependency."
            }
        ],
        High_S: [
            {
                q_vi: "Hãy kể về một lần công ty đột ngột thay đổi quy trình làm việc 180 độ. Bạn cảm thấy thế nào và đã thích nghi ra sao?",
                q_en: "Tell about a time your company suddenly changed work processes 180 degrees. How did you feel and adapt?",
                purpose_vi: "Kiểm tra sự kháng cự với sự thay đổi (Điểm yếu chí mạng của nhóm S).",
                purpose_en: "Tests resistance to change (critical S-type weakness)."
            },
            {
                q_vi: "Mô tả một lần bạn phát hiện đồng nghiệp làm sai nhưng họ rất nóng tính. Bạn đã đối mặt và góp ý cho họ như thế nào?",
                q_en: "Describe a time you found a hot-tempered colleague making a mistake. How did you confront and give them feedback?",
                purpose_vi: "Kiểm tra khả năng đối mặt với xung đột (Nhóm S thường né tránh xung đột, dĩ hòa vi quý thái quá).",
                purpose_en: "Tests conflict confrontation ability (S-types tend to avoid conflict excessively)."
            },
            {
                q_vi: "Bạn đã từng phải đưa ra một quyết định sa thải hoặc từ chối ai đó chưa? Cảm giác của bạn lúc đó thế nào?",
                q_en: "Have you ever had to fire someone or reject a person? How did that feel?",
                purpose_vi: "Kiểm tra sự quyết đoán trong các tình huống nhạy cảm về con người.",
                purpose_en: "Tests decisiveness in sensitive people situations."
            }
        ],
        High_C: [
            {
                q_vi: "Hãy kể về một lần bạn buộc phải nộp báo cáo/sản phẩm khi nó chưa thực sự hoàn hảo vì áp lực thời gian. Bạn đã đấu tranh tâm lý ra sao?",
                q_en: "Tell about a time you had to submit work that wasn't perfect due to time pressure. How did you psychologically cope?",
                purpose_vi: "Kiểm tra chủ nghĩa hoàn hảo thái quá gây chậm tiến độ (Điểm mù của nhóm C).",
                purpose_en: "Tests excessive perfectionism causing delays (C-type blind spot)."
            },
            {
                q_vi: "Khi bạn có đầy đủ dữ liệu chứng minh mình đúng, nhưng sếp vẫn quyết định làm theo cảm tính của họ. Bạn sẽ phản ứng như thế nào?",
                q_en: "When you have full data proving you're right, but your boss decides to go with gut feeling. How do you react?",
                purpose_vi: "Kiểm tra sự cứng nhắc và thái độ ngầm phản kháng khi quy trình không được tôn trọng.",
                purpose_en: "Tests rigidity and passive resistance when processes aren't respected."
            },
            {
                q_vi: "Mô tả một lần bạn bị chỉ trích gay gắt về một sai sót nhỏ trong công việc. Bạn đã phản hồi lại như thế nào?",
                q_en: "Describe a time you were harshly criticized for a small work mistake. How did you respond?",
                purpose_vi: "Kiểm tra khả năng tiếp nhận chỉ trích (Nhóm C rất sợ sai và dễ tự ái khi bị vạch lỗi).",
                purpose_en: "Tests ability to receive criticism (C-types fear mistakes and get defensive when exposed)."
            }
        ],
        Match_Mismatch: [
            {
                q_vi: "Vị trí này đòi hỏi đặc thù trái ngược với tính cách tự nhiên của bạn. Hãy kể một ví dụ thực tế cho thấy bạn có thể 'gồng' mình để hoàn thành loại công việc này trong quá khứ?",
                q_en: "This position requires traits opposite to your natural personality. Give a real example showing you can push yourself to complete this type of work.",
                purpose_vi: "Kiểm tra khả năng thích nghi và kỹ năng sinh tồn trong công việc không đúng sở trường.",
                purpose_en: "Tests adaptability and survival skills in mismatched roles."
            }
        ]
    },

    /**
     * Position context phrases for personalized question generation.
     * Maps industry contexts for dynamic question composition.
     */
    positionContexts: {
        dental: {
            reception: { vi: 'tiếp đón và xoa dịu bệnh nhân tại quầy lễ tân', en: 'receiving and calming patients at the front desk' },
            clinical: { vi: 'thực hiện thủ thuật lâm sàng cho bệnh nhân', en: 'performing clinical procedures on patients' },
            nurse: { vi: 'hỗ trợ bác sĩ và chăm sóc bệnh nhân', en: 'assisting the doctor and caring for patients' },
            manager: { vi: 'điều phối nhân sự và vận hành phòng khám', en: 'coordinating staff and operating the clinic' },
            lab: { vi: 'gia công phục hình trong phòng lab', en: 'fabricating dental prosthetics in the lab' },
            accounting: { vi: 'xử lý sổ sách, hóa đơn và báo cáo tài chính', en: 'handling books, invoices and financial reports' },
            hr: { vi: 'tuyển dụng, đào tạo và quản trị nhân sự nha khoa', en: 'recruiting, training and managing dental HR' },
            sale: { vi: 'tư vấn dịch vụ nha khoa và chốt gói điều trị', en: 'consulting dental services and closing treatment packages' }
        },
        fnb: {
            barista: { vi: 'pha chế đồ uống và phục vụ khách tại quầy', en: 'making drinks and serving customers at the bar' },
            server: { vi: 'phục vụ bàn và xử lý yêu cầu khách hàng', en: 'table service and handling customer requests' },
            shift_leader: { vi: 'quản lý ca làm việc và dẫn dắt nhân viên', en: 'managing work shifts and leading staff' },
            manager: { vi: 'vận hành nhà hàng, kiểm soát doanh thu và chi phí', en: 'operating the restaurant, controlling revenue and costs' }
        },
        hospitality: {
            front_desk: { vi: 'check-in/check-out và hỗ trợ khách lưu trú', en: 'check-in/check-out and assisting staying guests' },
            housekeeping: { vi: 'dọn dẹp và duy trì tiêu chuẩn vệ sinh phòng', en: 'cleaning and maintaining room hygiene standards' },
            manager: { vi: 'quản lý toàn bộ hoạt động khách sạn', en: 'managing all hotel operations' },
            bellman: { vi: 'hỗ trợ hành lý và hướng dẫn khách', en: 'assisting with luggage and guiding guests' },
            night: { vi: 'trực đêm, kiểm toán và xử lý tình huống khẩn cấp', en: 'night duty, auditing and emergency handling' }
        }
    },

    /**
     * Trait gap question templates.
     * When a trait is TOO LOW or TOO HIGH for the position, these templates generate personalized questions.
     * {name} = person's name, {position} = position name, {context} = position context phrase
     */
    traitGapTemplates: {
        // When D is too LOW for a position that needs it
        D_low: {
            interview_vi: [
                "{name}, vị trí {position} đòi hỏi phải ra quyết định nhanh trong bối cảnh {context}. Hãy kể một lần bạn buộc phải quyết định điều gì đó trong vòng vài giây mà không có đủ thông tin.",
                "Khi {context}, nếu có 2 nhân viên xung đột gay gắt ngay trước mặt khách, bạn sẽ can thiệp thế nào?",
                "Bạn đã bao giờ phải từ chối thẳng thắn một yêu cầu vô lý từ khách hàng hoặc đồng nghiệp chưa? Kể lại tình huống đó."
            ],
            coaching_vi: [
                "{name}, trong quá trình {context}, em thấy mình gặp khó khăn nhất khi phải đưa ra quyết định nào?",
                "Khi có tình huống cần xử lý gấp mà không có sếp ở đó, em thường làm gì? Mình muốn giúp em tự tin hơn trong việc này.",
                "Em cảm thấy thế nào khi phải nói 'không' với đồng nghiệp hoặc khách? Mình cùng luyện tập nhé."
            ]
        },
        D_high: {
            interview_vi: [
                "{name}, vị trí {position} cần sự kiên nhẫn và lắng nghe khi {context}. Hãy kể về một lần bạn phải kiềm chế bản năng muốn giải quyết nhanh để lắng nghe ai đó nói hết.",
                "Khi bạn thấy đồng nghiệp làm sai trong lúc {context}, phản ứng đầu tiên của bạn là gì? Bạn có từng bị phản hồi là quá gay gắt không?",
                "Mô tả một tình huống bạn phải chấp nhận làm theo cách của người khác dù bạn nghĩ cách mình tốt hơn."
            ],
            coaching_vi: [
                "{name}, anh/chị nhận thấy em rất quyết đoán - đó là điểm mạnh. Nhưng trong bối cảnh {context}, đôi khi mình cần chậm lại. Em thấy khó nhất ở phần nào?",
                "Có lần nào khách hàng hoặc đồng nghiệp phản hồi rằng em hơi mạnh tay khi {context} không? Mình thảo luận cách xử lý nhẹ nhàng hơn nhé.",
                "Em muốn mình giúp gì để chuyển từ 'ra lệnh' sang 'dẫn dắt' khi làm việc nhóm?"
            ]
        },
        I_low: {
            interview_vi: [
                "{name}, vị trí {position} đòi hỏi giao tiếp ấm áp khi {context}. Hãy kể về lần gần nhất bạn phải bắt chuyện và tạo quan hệ với một người hoàn toàn xa lạ.",
                "Nếu một bệnh nhân/khách hàng tỏ ra lo lắng và cần được trấn an, bạn thường nói gì? Hãy thử diễn tả ngay bây giờ.",
                "Bạn có thoải mái khi phải nói chuyện liên tục với nhiều người trong suốt một ngày làm việc không? Kể về trải nghiệm tương tự."
            ],
            coaching_vi: [
                "{name}, em có lợi thế về sự tập trung. Tuy nhiên, {position} cần em chủ động giao tiếp nhiều hơn khi {context}. Em thấy khó nhất khi nào?",
                "Mình muốn giúp em luyện 3 câu mở đầu để bắt chuyện với khách/bệnh nhân một cách tự nhiên. Em sẵn sàng thử không?",
                "Tuần vừa rồi, có tình huống nào em muốn nói nhưng lại im lặng không? Mình phân tích cùng nhé."
            ]
        },
        I_high: {
            interview_vi: [
                "{name}, vị trí {position} yêu cầu sự chính xác khi {context}. Hãy kể về một lần sự nhiệt tình khiến bạn hứa hẹn quá mức rồi không thực hiện được.",
                "Mô tả hệ thống cụ thể bạn dùng để theo dõi các công việc nhỏ nhặt hàng ngày. Bạn có checklist không?",
                "Khi {context}, bạn có xu hướng nói chuyện vui với khách/đồng nghiệp rồi quên mất công việc đang dở không?"
            ],
            coaching_vi: [
                "{name}, năng lượng của em rất tuyệt cho {position}! Nhưng mình cần em tập kiểm soát thời gian khi {context}. Em nghĩ mình có thể làm gì?",
                "Tuần vừa rồi, em có hứa điều gì với khách/đồng nghiệp mà chưa làm xong không? Mình cùng lập checklist nhé.",
                "Em đang rất giỏi kết nối. Bước tiếp theo là chuyển từ 'nói hay' sang 'làm xong'. Em muốn bắt đầu từ đâu?"
            ]
        },
        S_low: {
            interview_vi: [
                "{name}, vị trí {position} cần sự kiên nhẫn và ổn định khi {context}. Hãy kể về một công việc lặp đi lặp lại mà bạn đã duy trì trong thời gian dài.",
                "Khi phải hỗ trợ một đồng nghiệp/khách hàng rất chậm hiểu, bạn giữ bình tĩnh bằng cách nào?",
                "Bạn đã bao giờ tự nguyện ở lại làm thêm giờ vì đồng nghiệp cần giúp đỡ chưa?"
            ],
            coaching_vi: [
                "{name}, em có xu hướng muốn thay đổi nhanh. Nhưng trong {position}, đội ngũ cần sự ổn định khi {context}. Mình cùng tìm cách cân bằng nhé.",
                "Khi em thấy quy trình cũ không hiệu quả, thay vì thay đổi ngay, em có thể thử quan sát thêm 1 tuần không? Mình sẽ review cùng.",
                "Đồng nghiệp có phản hồi rằng em hơi nôn nóng không? Mình muốn hiểu góc nhìn của em."
            ]
        },
        S_high: {
            interview_vi: [
                "{name}, vị trí {position} đôi khi đòi hỏi sự linh hoạt và quyết đoán khi {context}. Hãy kể về lần gần nhất bạn phải thay đổi kế hoạch 180 độ trong vòng 1 ngày.",
                "Nếu sếp giao cho bạn một dự án hoàn toàn mới mà bạn chưa từng làm, phản ứng đầu tiên của bạn là gì?",
                "Bạn có từng phải góp ý thẳng thắn với sếp hoặc đồng nghiệp dù biết họ sẽ không vui không?"
            ],
            coaching_vi: [
                "{name}, sự ổn định của em rất quý giá cho {position}. Nhưng đôi khi {context} cần em chủ động hơn. Em thấy ngại nhất ở phần nào?",
                "Nếu sắp tới team có thay đổi lớn, em cần mình support gì để cảm thấy an toàn hơn?",
                "Em có ý tưởng cải tiến nào cho công việc không? Mình rất muốn nghe, dù nhỏ cũng được."
            ]
        },
        C_low: {
            interview_vi: [
                "{name}, vị trí {position} đòi hỏi sự chính xác tuyệt đối khi {context}. Hãy kể về lần gần nhất bạn mắc lỗi do thiếu cẩn thận. Bạn đã xử lý thế nào?",
                "Bạn có quy trình kiểm tra lại công việc trước khi nộp không? Mô tả cụ thể quy trình đó.",
                "Khi nhận được một bộ dữ liệu/hồ sơ lộn xộn, bạn sẽ xử lý thế nào?"
            ],
            coaching_vi: [
                "{name}, {position} cần em chú ý chi tiết hơn khi {context}. Tuần vừa rồi có lỗi nào em phát hiện không?",
                "Mình muốn giúp em xây dựng một checklist kiểm tra trước khi hoàn thành công việc. Em nghĩ checklist nên có gì?",
                "Khi {context}, em có thói quen kiểm tra lại lần 2 không? Nếu chưa, mình bắt đầu từ đâu?"
            ]
        },
        C_high: {
            interview_vi: [
                "{name}, vị trí {position} đôi khi cần ra quyết định nhanh mà không có đủ dữ liệu khi {context}. Hãy kể lần bạn phải 'nhắm mắt quyết định' mà không phân tích kỹ.",
                "Khi đồng nghiệp làm cẩu thả và bạn phải 'dọn dẹp' hậu quả, bạn phản ứng thế nào?",
                "Bạn có từng bị deadline đánh bại vì muốn mọi thứ hoàn hảo không? Kể cụ thể."
            ],
            coaching_vi: [
                "{name}, sự tỉ mỉ của em là lợi thế lớn cho {position}. Nhưng đôi khi 'đủ tốt' tốt hơn 'hoàn hảo' khi {context}. Em nghĩ sao?",
                "Mình nhận thấy em thường mất nhiều thời gian ở bước kiểm tra. Mình có thể giúp em rút ngắn được không?",
                "Khi đồng nghiệp làm sai quy trình, em phản ứng thế nào? Mình muốn giúp em góp ý hiệu quả hơn."
            ]
        }
    }
};
