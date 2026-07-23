const DISC_PROFILES = {
  'D': {
    id: 'D',
    archetype_vi: 'Người Mở đường Quyết đoán',
    archetype_en: 'The Assertive Trailblazer',
    personalityAnalysis: {
      primary: {
        group: 'D',
        level_vi: 'Rất cao',
        level_en: 'Very High',
        analysis_vi: 'Định hướng mục tiêu mạnh mẽ, quyết đoán và thích kiểm soát tình hình. Luôn thúc đẩy tiến độ và đòi hỏi kết quả nhanh chóng.',
        analysis_en: 'Strongly goal-oriented, decisive, and prefers to be in control. Drives progress and demands quick results.'
      },
      secondary: {
        group: 'I',
        level_vi: 'Trung bình',
        level_en: 'Medium',
        analysis_vi: 'Sử dụng ảnh hưởng xã hội ở mức độ vừa phải để đạt được mục tiêu cá nhân.',
        analysis_en: 'Uses social influence moderately to achieve personal goals.'
      },
      tertiary: {
        group: 'C',
        level_vi: 'Thấp',
        level_en: 'Low',
        analysis_vi: 'Thiếu kiên nhẫn với các chi tiết tỉ mỉ hoặc quy trình rườm rà.',
        analysis_en: 'Impatient with meticulous details or cumbersome processes.'
      },
      quaternary: {
        group: 'S',
        level_vi: 'Rất thấp',
        level_en: 'Very Low',
        analysis_vi: 'Phản ứng nhanh với thay đổi, ít quan tâm đến sự ổn định hay cảm xúc của người khác trong quá trình thực thi.',
        analysis_en: 'Reacts quickly to change, cares little about stability or others\' feelings during execution.'
      }
    },
    jobFit: {
      dental: {
        strengths_vi: ['Chốt sale quyết đoán', 'Đẩy nhanh tiến độ điều trị', 'Giải quyết sự cố nha khoa dứt điểm'],
        strengths_en: ['Decisive closing', 'Accelerates treatment progress', 'Resolves dental incidents definitively'],
        culture_vi: 'Phù hợp với môi trường phòng khám áp lực cao, định hướng doanh thu.',
        culture_en: 'Fits high-pressure, revenue-oriented clinic environments.'
      },
      fnb: {
        strengths_vi: ['Điều phối giờ cao điểm mạnh mẽ', 'Giải quyết khiếu nại dứt khoát', 'Tối ưu hóa thời gian phục vụ'],
        strengths_en: ['Strong peak-hour coordination', 'Decisive complaint resolution', 'Optimizes service time'],
        culture_vi: 'Môi trường nhà hàng nhịp độ nhanh, đòi hỏi phản ứng tức thời.',
        culture_en: 'Fast-paced restaurant environments requiring immediate reactions.'
      },
      hospitality: {
        strengths_vi: ['Xử lý khủng hoảng truyền thông/khách hàng', 'Quản lý vận hành cứng rắn', 'Thúc đẩy chỉ số KPI'],
        strengths_en: ['Crisis management', 'Firm operational management', 'Drives KPI metrics'],
        culture_vi: 'Chuỗi khách sạn cạnh tranh cao, cần mở rộng thị phần nhanh.',
        culture_en: 'Highly competitive hotel chains needing rapid market expansion.'
      },
      general: {
        strengths_vi: ['Lãnh đạo đội nhóm', 'Đẩy mạnh doanh số', 'Đưa ra quyết định khó khăn'],
        strengths_en: ['Team leadership', 'Driving sales', 'Making difficult decisions'],
        culture_vi: 'Môi trường khởi nghiệp hoặc giai đoạn cần tăng trưởng đột phá.',
        culture_en: 'Startup environments or phases requiring breakthrough growth.'
      }
    },
    redFlags: [
      {
        name_vi: 'Độc đoán và Thiếu lắng nghe',
        name_en: 'Authoritarian and Poor Listener',
        description_vi: 'Có xu hướng áp đặt ý kiến, bỏ qua phản hồi từ cấp dưới và khách hàng, dẫn đến mâu thuẫn nội bộ.',
        description_en: 'Tends to impose opinions, ignoring feedback from subordinates and clients, leading to internal conflict.'
      },
      {
        name_vi: 'Rủi ro Cháy giai đoạn',
        name_en: 'Burnout / Rushing Risk',
        description_vi: 'Bỏ qua các quy trình kiểm soát chất lượng cốt lõi để đạt được mục tiêu nhanh chóng.',
        description_en: 'Skips core quality control processes to achieve goals quickly.'
      }
    ],
    managementStrategy: [
      {
        title_vi: 'Giao Mục tiêu, Không giao Quy trình',
        title_en: 'Assign Goals, Not Processes',
        detail_vi: 'Xác định rõ ràng KPI và giới hạn quyền lực. Để họ tự do tìm cách thức thực hiện miễn là đạt kết quả và không vi phạm tiêu chuẩn ngành.',
        detail_en: 'Clearly define KPIs and boundaries of authority. Let them find the methods as long as they deliver results without violating industry standards.'
      },
      {
        title_vi: 'Phản biện Dựa trên Dữ liệu',
        title_en: 'Data-Driven Rebuttal',
        detail_vi: 'Khi điều chỉnh hành vi của họ, hãy dùng số liệu (doanh thu giảm, tỷ lệ rời bỏ của khách) thay vì cảm xúc.',
        detail_en: 'When correcting their behavior, use data (revenue drop, customer churn rate) rather than emotions.'
      }
    ],
    conclusion: {
      recommendation_vi: 'PHÙ HỢP CHO VỊ TRÍ QUẢN LÝ / KHAI THÁC THỊ TRƯỜNG',
      recommendation_en: 'RECOMMENDED FOR MANAGEMENT / MARKET DEVELOPMENT',
      summary_vi: 'Nhân sự có năng lực thực thi xuất sắc nhưng cần kiểm soát rủi ro về chất lượng dịch vụ dài hạn.',
      summary_en: 'Personnel with excellent execution capabilities but requires risk control regarding long-term service quality.'
    }
  },
  'I': {
    id: 'I',
    archetype_vi: 'Người Truyền cảm hứng Giao tiếp',
    archetype_en: 'The Communicative Inspirer',
    personalityAnalysis: {
      primary: {
        group: 'I',
        level_vi: 'Rất cao',
        level_en: 'Very High',
        analysis_vi: 'Tập trung vào con người, nhiệt tình, thích giao tiếp và dễ dàng xây dựng mạng lưới quan hệ. Hoạt ngôn và lạc quan.',
        analysis_en: 'People-focused, enthusiastic, communicative, and easily builds networks. Articulate and optimistic.'
      },
      secondary: {
        group: 'D',
        level_vi: 'Trung bình',
        level_en: 'Medium',
        analysis_vi: 'Sẵn sàng dẫn dắt trong các tình huống xã hội nhưng thiếu sự quyết liệt áp đặt.',
        analysis_en: 'Willing to lead in social situations but lacks aggressive imposition.'
      },
      tertiary: {
        group: 'S',
        level_vi: 'Thấp',
        level_en: 'Low',
        analysis_vi: 'Dễ chán nản với các công việc lặp đi lặp lại, thiếu kiên nhẫn với sự im lặng.',
        analysis_en: 'Easily bored with repetitive tasks, impatient with silence.'
      },
      quaternary: {
        group: 'C',
        level_vi: 'Rất thấp',
        level_en: 'Very Low',
        analysis_vi: 'Rất yếu trong việc tuân thủ chi tiết, quy tắc hoặc phân tích dữ liệu chuyên sâu.',
        analysis_en: 'Very weak in adhering to details, rules, or in-depth data analysis.'
      }
    },
    jobFit: {
      dental: {
        strengths_vi: ['Trấn an bệnh nhân xuất sắc', 'Tư vấn dịch vụ thẩm mỹ (răng sứ, niềng)', 'Xây dựng hình ảnh phòng khám'],
        strengths_en: ['Excellent patient reassurance', 'Consulting aesthetic services', 'Building clinic image'],
        culture_vi: 'Môi trường nha khoa thẩm mỹ cao cấp, chú trọng trải nghiệm khách hàng.',
        culture_en: 'High-end aesthetic dental environment, focusing on customer experience.'
      },
      fnb: {
        strengths_vi: ['Tạo không khí sôi động', 'Up-sell đồ uống/món ăn xuất sắc', 'Xử lý khéo léo khách phàn nàn'],
        strengths_en: ['Creates vibrant atmosphere', 'Excellent up-selling', 'Tactful handling of complaining guests'],
        culture_vi: 'Quán bar, nhà hàng fine-dining cần tương tác cao với khách.',
        culture_en: 'Bars, fine-dining restaurants needing high guest interaction.'
      },
      hospitality: {
        strengths_vi: ['Guest Relation (Quan hệ khách hàng) tốt', 'Tổ chức sự kiện', 'Bán chéo dịch vụ khách sạn'],
        strengths_en: ['Good Guest Relations', 'Event organization', 'Cross-selling hotel services'],
        culture_vi: 'Resort nghỉ dưỡng, nơi trải nghiệm và sự niềm nở là cốt lõi.',
        culture_en: 'Resorts where experience and warmth are core.'
      },
      general: {
        strengths_vi: ['Networking', 'Thuyết trình', 'Xây dựng văn hóa nội bộ'],
        strengths_en: ['Networking', 'Presentation', 'Building internal culture'],
        culture_vi: 'Phòng ban Sales, Marketing, Truyền thông nội bộ.',
        culture_en: 'Sales, Marketing, Internal Communications departments.'
      }
    },
    redFlags: [
      {
        name_vi: 'Nói nhiều hơn Làm (Hứa suông)',
        name_en: 'Overpromising / Underdelivering',
        description_vi: 'Hứa hẹn quá mức với khách hàng (ví dụ: hứa lịch hẹn không khả thi) chỉ để làm hài lòng họ ngay lúc đó.',
        description_en: 'Overpromising to clients (e.g., impossible appointment times) just to please them in the moment.'
      },
      {
        name_vi: 'Bỏ sót Chi tiết Cốt lõi',
        name_en: 'Missing Core Details',
        description_vi: 'Sai sót trong việc ghi chép hồ sơ bệnh án, order món ăn hoặc thông tin booking, dẫn đến hậu quả vận hành.',
        description_en: 'Errors in recording medical records, food orders, or booking info, leading to operational consequences.'
      }
    ],
    managementStrategy: [
      {
        title_vi: 'Kiểm soát Bằng Checklist và Phần mềm',
        title_en: 'Control via Checklists and Software',
        detail_vi: 'Bắt buộc sử dụng hệ thống CRM/phần mềm vận hành. Không chấp nhận bàn giao bằng miệng.',
        detail_en: 'Mandate the use of CRM/operational software. Do not accept verbal handovers.'
      },
      {
        title_vi: 'Công nhận Công khai, Nhắc nhở Kín đáo',
        title_en: 'Public Recognition, Private Reprimand',
        detail_vi: 'Họ sống bằng sự công nhận. Khen ngợi họ trước đám đông để tạo động lực, nhưng tuyệt đối chỉ phê bình trong phòng kín.',
        detail_en: 'They thrive on recognition. Praise them publicly for motivation, but absolutely reprimand only in private.'
      }
    ],
    conclusion: {
      recommendation_vi: 'TUYỂN DỤNG CHO VỊ TRÍ TIẾP XÚC KHÁCH HÀNG / SALES',
      recommendation_en: 'HIRE FOR CUSTOMER-FACING / SALES ROLES',
      summary_vi: 'Vũ khí mạnh nhất trong mảng dịch vụ khách hàng, nhưng cần một hệ thống quản trị chặt chẽ đứng sau hỗ trợ.',
      summary_en: 'The strongest weapon in customer service, but requires a strict backend management system to support.'
    }
  },
  'S': {
    id: 'S',
    archetype_vi: 'Người Hỗ trợ Tận tâm',
    archetype_en: 'The Dedicated Supporter',
    personalityAnalysis: {
      primary: {
        group: 'S',
        level_vi: 'Rất cao',
        level_en: 'Very High',
        analysis_vi: 'Kiên nhẫn, điềm tĩnh và trung thành. Chú trọng sự ổn định, hòa bình nội bộ và làm việc theo nhịp độ ổn định.',
        analysis_en: 'Patient, calm, and loyal. Values stability, internal peace, and works at a steady pace.'
      },
      secondary: {
        group: 'C',
        level_vi: 'Trung bình',
        level_en: 'Medium',
        analysis_vi: 'Tuân thủ quy trình ở mức độ khá để đảm bảo không có rủi ro nào xảy ra.',
        analysis_en: 'Adheres to processes fairly well to ensure no risks occur.'
      },
      tertiary: {
        group: 'I',
        level_vi: 'Thấp',
        level_en: 'Low',
        analysis_vi: 'Giao tiếp chân thành nhưng không thích sự ồn ào hay trở thành trung tâm của sự chú ý.',
        analysis_en: 'Communicates sincerely but dislikes noise or being the center of attention.'
      },
      quaternary: {
        group: 'D',
        level_vi: 'Rất thấp',
        level_en: 'Very Low',
        analysis_vi: 'Sợ xung đột, né tránh đối đầu trực diện và không thích đưa ra quyết định rủi ro.',
        analysis_en: 'Fears conflict, avoids direct confrontation, and dislikes making risky decisions.'
      }
    },
    jobFit: {
      dental: {
        strengths_vi: ['Chăm sóc hậu phẫu tuyệt vời', 'Theo dõi lịch hẹn định kỳ kiên nhẫn', 'Hỗ trợ bác sĩ nhịp nhàng'],
        strengths_en: ['Excellent post-op care', 'Patient tracking of routine appointments', 'Smooth assistance to doctors'],
        culture_vi: 'Phù hợp làm điều dưỡng, chăm sóc khách hàng nội bộ trong các phòng khám ổn định.',
        culture_en: 'Fits nursing, internal customer care in stable clinics.'
      },
      fnb: {
        strengths_vi: ['Thái độ phục vụ tận tâm', 'Gắn bó lâu dài', 'Ít gây mâu thuẫn nội bộ'],
        strengths_en: ['Dedicated service attitude', 'Long-term commitment', 'Causes little internal conflict'],
        culture_vi: 'Quán cafe truyền thống, nhà hàng gia đình cần sự ổn định nhân sự.',
        culture_en: 'Traditional cafes, family restaurants needing staff stability.'
      },
      hospitality: {
        strengths_vi: ['Dọn phòng cẩn thận', 'Giải đáp thắc mắc kiên nhẫn', 'Phục vụ ẩm thực buồng phòng'],
        strengths_en: ['Careful housekeeping', 'Patient inquiry resolution', 'Room service delivery'],
        culture_vi: 'Vận hành buồng phòng, tổng đài nội bộ.',
        culture_en: 'Housekeeping operations, internal switchboard.'
      },
      general: {
        strengths_vi: ['Làm việc nhóm', 'Lắng nghe thấu cảm', 'Đảm bảo tính liên tục của công việc'],
        strengths_en: ['Teamwork', 'Empathetic listening', 'Ensuring workflow continuity'],
        culture_vi: 'Các phòng ban hành chính, nhân sự, chăm sóc khách hàng.',
        culture_en: 'Admin, HR, Customer Care departments.'
      }
    },
    redFlags: [
      {
        name_vi: 'Kháng cự Sự thay đổi (Sức ỳ lớn)',
        name_en: 'Resistance to Change (High Inertia)',
        description_vi: 'Rất khó tiếp thu công nghệ mới hoặc quy trình mới, thường có xu hướng phản ứng tiêu cực ngầm khi bị ép thay đổi đột ngột.',
        description_en: 'Very difficult to adopt new tech or processes, tends to have hidden negative reactions when forced to change suddenly.'
      },
      {
        name_vi: 'Không Dám Chốt Sale / Xử lý Xung đột',
        name_en: 'Afraid to Close Sales / Handle Conflict',
        description_vi: 'Vì sợ làm mất lòng khách, họ nhượng bộ quá mức hoặc không dám yêu cầu khách hàng thanh toán/ra quyết định.',
        description_en: 'Fearing offending clients, they concede too much or dare not ask clients to pay/make decisions.'
      }
    ],
    managementStrategy: [
      {
        title_vi: 'Thông báo Sớm và Đồng hành',
        title_en: 'Early Notice and Accompaniment',
        detail_vi: 'Khi có thay đổi về quy trình, hãy báo trước và cho họ thời gian thích nghi. Cần người cầm tay chỉ việc trong giai đoạn đầu.',
        detail_en: 'When processes change, give advance notice and adaptation time. Needs hand-holding in the initial phase.'
      },
      {
        title_vi: 'Tạo Môi trường Tâm lý An toàn',
        title_en: 'Create Psychological Safety',
        detail_vi: 'Khuyến khích họ nói lên ý kiến bằng cách đặt câu hỏi gợi mở trong không gian 1-1. Đừng tạo áp lực ngay lập tức.',
        detail_en: 'Encourage them to voice opinions via open-ended questions in 1-on-1 settings. Do not apply immediate pressure.'
      }
    ],
    conclusion: {
      recommendation_vi: 'TUYỂN DỤNG CHO VỊ TRÍ HỖ TRỢ / VẬN HÀNH ỔN ĐỊNH',
      recommendation_en: 'HIRE FOR SUPPORT / STABLE OPERATIONS ROLES',
      summary_vi: 'Xương sống giữ cho tổ chức ổn định. Không nên ép vào các vị trí tiên phong chịu áp lực doanh số cao.',
      summary_en: 'The backbone keeping the organization stable. Should not be forced into frontline high-pressure sales roles.'
    }
  },
  'C': {
    id: 'C',
    archetype_vi: 'Nhà Phân tích Tuân thủ',
    archetype_en: 'The Compliant Analyst',
    personalityAnalysis: {
      primary: {
        group: 'C',
        level_vi: 'Rất cao',
        level_en: 'Very High',
        analysis_vi: 'Chính xác, logic, định hướng chi tiết và phân tích sâu. Đặt chất lượng và tính chuẩn xác lên hàng đầu.',
        analysis_en: 'Precise, logical, detail-oriented, and analytical. Puts quality and accuracy first.'
      },
      secondary: {
        group: 'S',
        level_vi: 'Trung bình',
        level_en: 'Medium',
        analysis_vi: 'Thích làm việc độc lập trong môi trường ổn định để tập trung vào chuyên môn.',
        analysis_en: 'Prefers working independently in stable environments to focus on expertise.'
      },
      tertiary: {
        group: 'D',
        level_vi: 'Thấp',
        level_en: 'Low',
        analysis_vi: 'Chỉ quyết đoán khi có đủ dữ liệu và bằng chứng vững chắc.',
        analysis_en: 'Only decisive when armed with sufficient data and solid evidence.'
      },
      quaternary: {
        group: 'I',
        level_vi: 'Rất thấp',
        level_en: 'Very Low',
        analysis_vi: 'Giao tiếp khô khan, thiếu tính linh hoạt và ít biểu lộ cảm xúc trong công việc.',
        analysis_en: 'Dry communication, lacks flexibility, and shows little emotion at work.'
      }
    },
    jobFit: {
      dental: {
        strengths_vi: ['Vô trùng tuyệt đối', 'Quản lý vật tư nha khoa chính xác', 'Tuân thủ phác đồ y khoa nghiêm ngặt'],
        strengths_en: ['Absolute sterilization', 'Accurate dental supply management', 'Strict adherence to medical protocols'],
        culture_vi: 'Phòng khám đa khoa, phòng lab nha khoa đòi hỏi độ chính xác kỹ thuật 100%.',
        culture_en: 'Polyclinics, dental labs requiring 100% technical precision.'
      },
      fnb: {
        strengths_vi: ['Kiểm soát cost (chi phí) thực phẩm', 'Duy trì công thức chuẩn', 'Quản lý vệ sinh an toàn thực phẩm'],
        strengths_en: ['Food cost control', 'Maintaining standard recipes', 'Food safety hygiene management'],
        culture_vi: 'Bếp trung tâm, quản lý kho, kiểm toán nhà hàng.',
        culture_en: 'Central kitchens, inventory management, restaurant auditing.'
      },
      hospitality: {
        strengths_vi: ['Kiểm toán đêm (Night Audit)', 'Lập kế hoạch bảo trì kỹ thuật', 'Quản trị hệ thống đặt phòng (PMS)'],
        strengths_en: ['Night Audit', 'Technical maintenance planning', 'PMS management'],
        culture_vi: 'Phòng ban Kế toán, Kỹ thuật, IT trong khách sạn.',
        culture_en: 'Accounting, Engineering, IT departments in hotels.'
      },
      general: {
        strengths_vi: ['Phân tích dữ liệu', 'Kiểm soát chất lượng (QA/QC)', 'Xây dựng quy trình'],
        strengths_en: ['Data analysis', 'QA/QC', 'Process building'],
        culture_vi: 'Môi trường làm việc hệ thống, minh bạch, coi trọng bằng chứng và năng lực.',
        culture_en: 'Systematic, transparent work environments valuing evidence and competence.'
      }
    },
    redFlags: [
      {
        name_vi: 'Tê liệt Phân tích (Analysis Paralysis)',
        name_en: 'Analysis Paralysis',
        description_vi: 'Chậm trễ trong việc ra quyết định vì đòi hỏi quá nhiều dữ liệu và muốn loại trừ 100% rủi ro (điều không thể trong vận hành).',
        description_en: 'Delayed decision-making due to demanding too much data and wanting to eliminate 100% risk (impossible in operations).'
      },
      {
        name_vi: 'Khó Khăn trong Giao tiếp Đồng cảm',
        name_en: 'Difficulty in Empathetic Communication',
        description_vi: 'Bắt bẻ lỗi sai của đồng nghiệp và khách hàng quá cứng nhắc, dẫn đến trải nghiệm dịch vụ lạnh lùng.',
        description_en: 'Nitpicks errors of colleagues and clients too rigidly, leading to a cold service experience.'
      }
    ],
    managementStrategy: [
      {
        title_vi: 'Giao Việc bằng Văn bản và Số liệu',
        title_en: 'Assign Tasks via Text and Data',
        detail_vi: 'Cung cấp mọi hướng dẫn qua email hoặc hệ thống với thông số rõ ràng. Họ không tin vào lời nói suông.',
        detail_en: 'Provide all instructions via email or system with clear parameters. They do not trust empty words.'
      },
      {
        title_vi: 'Đặt Thời hạn (Deadline) Cứng',
        title_en: 'Set Hard Deadlines',
        detail_vi: 'Để tránh việc họ nghiên cứu vô tận, hãy thiết lập mốc thời gian cụ thể mà tại đó phải đưa ra kết quả, dù chưa hoàn hảo 100%.',
        detail_en: 'To prevent endless research, establish specific timelines where results must be delivered, even if not 100% perfect.'
      }
    ],
    conclusion: {
      recommendation_vi: 'TUYỂN DỤNG CHO VỊ TRÍ KIỂM SOÁT / KỸ THUẬT / KẾ TOÁN',
      recommendation_en: 'HIRE FOR CONTROL / TECHNICAL / ACCOUNTING ROLES',
      summary_vi: 'Nhân sự đảm bảo tính chuẩn xác và bảo vệ tổ chức khỏi rủi ro pháp lý/tài chính. Không nên xếp vào vị trí cần ứng biến.',
      summary_en: 'Personnel who ensures accuracy and protects the organization from legal/financial risks. Do not place in improvisational roles.'
    }
  },
  'SC': {
    id: 'SC',
    archetype_vi: 'Chuyên gia Tận tâm & Nguyên tắc',
    archetype_en: 'The Devoted Specialist',
    personalityAnalysis: {
      primary: {
        group: 'S',
        level_vi: 'Rất cao',
        level_en: 'Very High',
        analysis_vi: 'Đề cao sự trung thành, ổn định và hòa bình nội bộ. Là người làm việc theo nhịp độ bền bỉ, kiên nhẫn tháo gỡ từng vấn đề mà không phàn nàn. Cực kỳ tận tâm với tập thể và khách hàng quen.',
        analysis_en: 'Highly values loyalty, stability, and internal peace. Works at a persistent pace, patiently untangling issues without complaint. Extremely dedicated to the team and regular clients.'
      },
      secondary: {
        group: 'C',
        level_vi: 'Cao',
        level_en: 'High',
        analysis_vi: 'Cung cấp nền tảng tư duy logic, tuân thủ nghiêm ngặt các quy định và quy trình y khoa/dịch vụ. Họ kiểm tra chéo công việc kỹ lưỡng trước khi bàn giao.',
        analysis_en: 'Provides a logical thinking foundation, strictly adhering to medical/service rules and protocols. They thoroughly cross-check work before handover.'
      },
      tertiary: {
        group: 'I',
        level_vi: 'Thấp',
        level_en: 'Low',
        analysis_vi: 'Phong cách giao tiếp khiêm tốn, chân thực. Không giỏi bôn ba hay xây dựng mạng lưới quan hệ xã giao hào nhoáng.',
        analysis_en: 'Humble, authentic communication style. Not adept at networking or building flashy social connections.'
      },
      quaternary: {
        group: 'D',
        level_vi: 'Rất thấp',
        level_en: 'Very Low',
        analysis_vi: 'Gần như triệt tiêu tính đối kháng. Rất sợ mâu thuẫn trực diện và áp lực phải đưa ra các quyết định cắt máu đột ngột.',
        analysis_en: 'Almost eliminates antagonism. Greatly fears direct conflict and the pressure to make sudden, drastic decisions.'
      }
    },
    jobFit: {
      dental: {
        strengths_vi: ['Theo dõi phác đồ niềng răng/implant dài hạn một cách tỉ mỉ', 'Quản lý hồ sơ bệnh án không tì vết', 'Xây dựng lòng tin tuyệt đối với bệnh nhân lớn tuổi hoặc nhạy cảm'],
        strengths_en: ['Meticulously tracking long-term ortho/implant protocols', 'Flawless medical record management', 'Building absolute trust with elderly or sensitive patients'],
        culture_vi: 'Phòng khám định hướng chuyên môn sâu, chú trọng y đức và chất lượng điều trị dài hạn.',
        culture_en: 'Specialty-driven clinics focusing on medical ethics and long-term treatment quality.'
      },
      fnb: {
        strengths_vi: ['Duy trì công thức bếp chính xác qua nhiều năm', 'Quản lý kho nguyên liệu ít sai sót', 'Phục vụ tận tâm các bàn khách VIP quen thuộc'],
        strengths_en: ['Maintaining exact kitchen recipes over years', 'Low-error inventory management', 'Dedicated service to regular VIP tables'],
        culture_vi: 'Nhà hàng fine-dining truyền thống, các bếp ăn trung tâm đòi hỏi tính ổn định tuyệt đối.',
        culture_en: 'Traditional fine-dining restaurants, central kitchens demanding absolute stability.'
      },
      hospitality: {
        strengths_vi: ['Vận hành quy trình buồng phòng 5 sao tiêu chuẩn', 'Kiểm toán hệ thống đặt phòng tỉ mỉ', 'Chăm sóc cá nhân hóa cho khách lưu trú dài ngày'],
        strengths_en: ['Operating 5-star housekeeping protocols', 'Meticulous reservation system auditing', 'Personalized care for long-stay guests'],
        culture_vi: 'Resort nghỉ dưỡng cao cấp, hệ thống khách sạn di sản chú trọng tiểu tiết.',
        culture_en: 'Luxury resorts, heritage hotel systems focusing on micro-details.'
      },
      general: {
        strengths_vi: ['QA/QC kiểm soát chất lượng dịch vụ', 'Quản trị hành chính nhân sự', 'Chăm sóc khách hàng hậu mãi'],
        strengths_en: ['Service QA/QC', 'HR Admin management', 'After-sales customer care'],
        culture_vi: 'Môi trường làm việc có SOP rõ ràng, văn hóa ôn hòa, trân trọng chuyên môn thay vì cạnh tranh nội bộ.',
        culture_en: 'Work environments with clear SOPs, mild culture, valuing expertise over internal competition.'
      }
    },
    redFlags: [
      {
        name_vi: 'Lỗ hổng "Đóng băng / Tê liệt phân tích"',
        name_en: 'Analysis Paralysis',
        description_vi: 'Trong tình huống khẩn cấp (ví dụ: khách làm ầm ĩ tại sảnh), sự kết hợp S (sợ mâu thuẫn) và C (chờ dữ liệu/quy trình) khiến nhân sự này hoàn toàn đóng băng, không dám đưa ra quyết định xử lý tức thời.',
        description_en: 'In emergencies (e.g., guest causing a scene), the combination of S (fears conflict) and C (awaits data/rules) causes this staff to freeze, unwilling to make an immediate decision.'
      },
      {
        name_vi: 'Bao che sai phạm vì "Hòa bình ảo"',
        name_en: 'Covering Faults for "Fake Peace"',
        description_vi: 'Phát hiện đồng nghiệp làm sai quy trình (C) nhưng vì sợ sứt mẻ tình cảm (S) nên chọn cách tự sửa lỗi thay đồng nghiệp, dẫn đến rủi ro hệ thống ngầm.',
        description_en: 'Notices a colleague violating procedures (C) but fearing damaged relations (S), chooses to secretly fix the error themselves, leading to hidden systemic risks.'
      },
      {
        name_vi: 'Bom nổ chậm',
        name_en: 'Ticking Time Bomb',
        description_vi: 'Gom góp những bất mãn nhỏ nhặt (do tính chi tiết C) nhưng chịu đựng không nói (do tính nhẫn nhịn S). Khi vượt ngưỡng, họ sẽ nghỉ việc đột ngột mà không báo trước.',
        description_en: 'Accumulates minor resentments (due to detail-oriented C) but endures silently (due to patient S). When the threshold is crossed, they resign abruptly without warning.'
      },
      {
        name_vi: 'Thiếu độ Máu chiến trong Tư vấn',
        name_en: 'Lacks Aggressiveness in Consulting',
        description_vi: 'Tư vấn rất chuyên sâu và trung thực nhưng lại quá yếu trong khâu chốt sale hoặc up-sale. Thường để khách hàng nói "Để anh/chị suy nghĩ thêm" rồi ra về.',
        description_en: 'Consults very deeply and honestly but is extremely weak in closing or up-selling. Often lets clients say "I\'ll think about it" and leave.'
      }
    ],
    managementStrategy: [
      {
        title_vi: 'Giao việc bằng Văn bản (SOPs)',
        title_en: 'Assign via Written SOPs',
        detail_vi: 'Họ cần sự an toàn của C và S. Hãy cung cấp sổ tay vận hành, quy trình xử lý phàn nàn rõ ràng (Bước 1, Bước 2...). Khi có sự cố, họ chỉ cần làm đúng SOP mà không sợ bị đổ lỗi.',
        detail_en: 'They need the safety of C and S. Provide clear operational manuals and complaint handling protocols. During incidents, they just follow the SOP without fear of blame.'
      },
      {
        title_vi: 'Huấn luyện Giả lập (Role-play)',
        title_en: 'Role-play Training',
        detail_vi: 'Không thể ép họ quyết đoán ngay lập tức. Cần tạo môi trường an toàn để diễn tập các kịch bản khó (khách chửi bới, khách từ chối thanh toán) cho đến khi họ phản xạ theo thói quen.',
        detail_en: 'Cannot force them to be decisive instantly. Create a safe environment to role-play difficult scenarios (angry clients, payment refusal) until it becomes a reflex.'
      },
      {
        title_vi: 'Kết cặp với Type D/I',
        title_en: 'Pair with Type D/I',
        detail_vi: 'Trong ca làm việc, hãy xếp họ làm Hậu phương (chuẩn bị hồ sơ, số liệu, hợp đồng) và để một nhân sự nhóm D/I làm Tiền tuyến (chốt sale, xử lý trực diện).',
        detail_en: 'During shifts, assign them as Backend (preparing files, data, contracts) and let a D/I type be the Frontline (closing sales, direct handling).'
      },
      {
        title_vi: 'Review 1-1 Định kỳ',
        title_en: 'Periodic 1-on-1 Reviews',
        detail_vi: 'Khui "bom nổ chậm" bằng các buổi uống cafe riêng tư. Đặt câu hỏi gợi mở: "Quy trình hiện tại có điểm nào bất hợp lý khiến em vất vả không?". Ghi nhận bằng văn bản để họ yên tâm.',
        detail_en: 'Defuse the "time bomb" through private coffee sessions. Ask open questions: "Is there any illogical process making your work hard?". Record it in writing so they feel secure.'
      }
    ],
    conclusion: {
      recommendation_vi: 'ĐÁNH GIÁ RẤT CAO & TIẾN HÀNH TUYỂN DỤNG CHUYÊN MÔN',
      recommendation_en: 'HIGHLY RECOMMENDED FOR TECHNICAL/SPECIALIST ROLES',
      summary_vi: 'Nhóm SC là tài sản vô giá để duy trì chất lượng hệ thống. Hãy bảo vệ họ khỏi áp lực sales trực tiếp và mâu thuẫn chính trị nội bộ. Đầu tư vào họ là đầu tư vào sự uy tín dài hạn của doanh nghiệp.',
      summary_en: 'SC types are invaluable assets for maintaining system quality. Protect them from direct sales pressure and office politics. Investing in them is investing in the long-term reputation of the business.'
    }
  },
  'DI': {
    id: 'DI',
    archetype_vi: 'Người Lãnh đạo Truyền cảm hứng',
    archetype_en: 'The Inspirational Leader',
    personalityAnalysis: {
      primary: { group: 'D', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Định hướng kết quả, quyết đoán và táo bạo.', analysis_en: 'Result-oriented, decisive, and bold.' },
      secondary: { group: 'I', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Sử dụng kỹ năng giao tiếp tốt để thuyết phục và lôi kéo người khác theo mục tiêu của mình.', analysis_en: 'Uses good communication skills to persuade and rally others to their goals.' },
      tertiary: { group: 'S', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Thiếu kiên nhẫn với nhịp độ chậm.', analysis_en: 'Impatient with slow paces.' },
      quaternary: { group: 'C', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Bỏ qua các chi tiết nhỏ lẻ, ghét sự rập khuôn.', analysis_en: 'Ignores minor details, hates conformity.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Mở rộng quy mô phòng khám', 'Chốt các gói dịch vụ lớn', 'Tạo động lực cho đội ngũ'], strengths_en: ['Expanding clinic scale', 'Closing large service packages', 'Motivating the team'], culture_vi: 'Phòng khám cần tăng trưởng nóng.', culture_en: 'Clinics needing rapid growth.' },
      fnb: { strengths_vi: ['Khai trương điểm bán mới', 'Xử lý linh hoạt và quyết đoán', 'Đẩy mạnh marketing'], strengths_en: ['Opening new outlets', 'Flexible and decisive handling', 'Driving marketing'], culture_vi: 'Chuỗi F&B mở rộng liên tục.', culture_en: 'Rapidly expanding F&B chains.' },
      hospitality: { strengths_vi: ['Giám đốc Tiền sảnh', 'Sales & Marketing bứt phá', 'Thương thuyết đối tác'], strengths_en: ['Front Office Director', 'Breakthrough Sales & Marketing', 'Partner negotiation'], culture_vi: 'Môi trường cạnh tranh thương mại cao.', culture_en: 'Highly commercial competitive environments.' },
      general: { strengths_vi: ['Quản lý cấp trung/cao', 'Phát triển kinh doanh', 'Tạo đột phá'], strengths_en: ['Mid/Senior Management', 'Business Development', 'Creating breakthroughs'], culture_vi: 'Môi trường startup, năng động.', culture_en: 'Dynamic, startup environments.' }
    },
    redFlags: [
      { name_vi: 'Tự tin Thái quá', name_en: 'Overconfidence', description_vi: 'Dễ đưa ra cam kết vượt quá năng lực thực tế của hệ thống.', description_en: 'Prone to making commitments beyond the actual capacity of the system.' },
      { name_vi: 'Thiếu Chi tiết Đo lường', name_en: 'Lack of Measurable Details', description_vi: 'Chỉ đạo chung chung dựa trên cảm hứng, thiếu kế hoạch triển khai cụ thể.', description_en: 'Gives general directions based on inspiration, lacking specific implementation plans.' }
    ],
    managementStrategy: [
      { title_vi: 'Cung cấp Trợ lý Chi tiết (Type C)', title_en: 'Provide a Detail-oriented Assistant (Type C)', detail_vi: 'Cần có người dọn dẹp và lên kế hoạch chi tiết cho các ý tưởng vĩ mô của họ.', detail_en: 'Needs someone to clean up and plan details for their macro ideas.' },
      { title_vi: 'Thách thức Bằng KPI Cụ thể', title_en: 'Challenge with Specific KPIs', detail_vi: 'Biến công việc thành một cuộc thi có thưởng phạt rõ ràng.', detail_en: 'Turn work into a competition with clear rewards and penalties.' }
    ],
    conclusion: {
      recommendation_vi: 'RẤT PHÙ HỢP CHO VỊ TRÍ ĐẦU TÀU THƯƠNG MẠI',
      recommendation_en: 'HIGHLY RECOMMENDED FOR COMMERCIAL SPEARHEAD ROLES',
      summary_vi: 'Sự kết hợp hoàn hảo giữa quyền lực và sức hút để thúc đẩy doanh thu.',
      summary_en: 'The perfect combination of power and charisma to drive revenue.'
    }
  },
  'DS': {
    id: 'DS',
    archetype_vi: 'Người Quản lý Kiên định',
    archetype_en: 'The Resolute Manager',
    personalityAnalysis: {
      primary: { group: 'D', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Quyết đoán và mạnh mẽ trong việc đạt mục tiêu.', analysis_en: 'Decisive and forceful in achieving goals.' },
      secondary: { group: 'S', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Có sự nhẫn nại và duy trì sự ổn định hơn các nhóm D khác. Xây dựng nền tảng vững chắc.', analysis_en: 'Has more patience and maintains stability better than other D types. Builds solid foundations.' },
      tertiary: { group: 'C', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Quan tâm đến kết quả hơn là độ chính xác tuyệt đối của quy trình.', analysis_en: 'Cares more about results than absolute process precision.' },
      quaternary: { group: 'I', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Giao tiếp thẳng thắn, thiếu sự mềm mỏng, không chú trọng ngoại giao.', analysis_en: 'Straightforward communication, lacks softness, neglects diplomacy.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Vận hành phòng khám bền vững', 'Kiểm soát tiến độ điều trị chắc chắn', 'Quản lý nhân sự cứng rắn nhưng công bằng'], strengths_en: ['Sustainable clinic operations', 'Firm control of treatment progress', 'Firm but fair HR management'], culture_vi: 'Phòng khám cần siết lại kỷ luật và duy trì hiệu suất.', culture_en: 'Clinics needing to tighten discipline and maintain performance.' },
      fnb: { strengths_vi: ['Quản lý cửa hàng chuẩn mực', 'Kiểm soát hao hụt', 'Điều hành ca làm việc ổn định'], strengths_en: ['Standard store management', 'Loss control', 'Stable shift operations'], culture_vi: 'Mô hình nhượng quyền cần tuân thủ và hiệu quả.', culture_en: 'Franchise models needing compliance and efficiency.' },
      hospitality: { strengths_vi: ['Quản lý các bộ phận back-of-house', 'Đảm bảo tiến độ công việc', 'Xử lý khủng hoảng vận hành'], strengths_en: ['Back-of-house management', 'Ensuring work progress', 'Operational crisis handling'], culture_vi: 'Khách sạn có quy mô nhân sự lớn, cần sự rèn giũa.', culture_en: 'Hotels with large staff needing strict governance.' },
      general: { strengths_vi: ['Giám đốc vận hành (COO)', 'Quản lý dự án', 'Thiết lập kỷ luật'], strengths_en: ['Chief Operating Officer (COO)', 'Project Management', 'Establishing discipline'], culture_vi: 'Tổ chức cần sự thay đổi có trật tự.', culture_en: 'Organizations needing orderly change.' }
    },
    redFlags: [
      { name_vi: 'Quá Cứng nhắc và Độc đoán', name_en: 'Too Rigid and Authoritarian', description_vi: 'Khó tiếp thu ý kiến trái chiều, bướng bỉnh trong cách làm của riêng mình.', description_en: 'Resistant to opposing views, stubborn in their own ways.' },
      { name_vi: 'Giao tiếp Khô khan', name_en: 'Dry Communication', description_vi: 'Có thể làm tổn thương nhân sự hoặc khách hàng vì tính cách nói thẳng không kiêng dè.', description_en: 'May hurt staff or clients due to blunt, unreserved speaking.' }
    ],
    managementStrategy: [
      { title_vi: 'Giao Quyền Lực Rõ Ràng', title_en: 'Assign Clear Authority', detail_vi: 'Cho họ không gian quản lý độc lập với các chỉ số mục tiêu cụ thể.', detail_en: 'Give them independent management space with specific target metrics.' },
      { title_vi: 'Yêu cầu Báo cáo Cảm nhận Đội nhóm', title_en: 'Demand Team Sentiment Reports', detail_vi: 'Ép họ phải chú ý đến tình hình nhân sự bằng các chỉ số về tỷ lệ giữ chân nhân viên.', detail_en: 'Force them to pay attention to HR health via employee retention metrics.' }
    ],
    conclusion: {
      recommendation_vi: 'TỐT CHO VỊ TRÍ QUẢN LÝ VẬN HÀNH NỘI BỘ',
      recommendation_en: 'GOOD FOR INTERNAL OPERATIONS MANAGEMENT ROLES',
      summary_vi: 'Người thực thi xuất sắc với độ lỳ đòn cao, mang lại sự quy củ cho tổ chức.',
      summary_en: 'Excellent executor with high resilience, bringing order to the organization.'
    }
  },
  'DC': {
    id: 'DC',
    archetype_vi: 'Nhà Kiến trúc Chiến lược',
    archetype_en: 'The Strategic Architect',
    personalityAnalysis: {
      primary: { group: 'D', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Tập trung vào mục tiêu và thống trị.', analysis_en: 'Goal-focused and dominating.' },
      secondary: { group: 'C', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Đòi hỏi sự hoàn hảo, logic và tuân thủ các tiêu chuẩn cao nhất.', analysis_en: 'Demands perfection, logic, and adherence to the highest standards.' },
      tertiary: { group: 'I', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Lạnh lùng, ít quan tâm đến việc xây dựng quan hệ hay động viên người khác.', analysis_en: 'Cold, cares little about relationship building or motivating others.' },
      quaternary: { group: 'S', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Sẵn sàng phá vỡ sự ổn định, không có sự kiên nhẫn cho những người chậm chạp.', analysis_en: 'Willing to disrupt stability, no patience for slow people.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Xây dựng tiêu chuẩn y khoa mới', 'Tối ưu hóa quy trình phòng khám', 'Đẩy mạnh các công nghệ nha khoa tiên tiến'], strengths_en: ['Building new medical standards', 'Optimizing clinic processes', 'Pushing advanced dental tech'], culture_vi: 'Hệ thống y tế tư nhân cao cấp, đặt chất lượng lên hàng đầu.', culture_en: 'Premium private healthcare systems prioritizing quality.' },
      fnb: { strengths_vi: ['Thiết kế luồng vận hành (Workflow)', 'Chuẩn hóa công thức và giá thành', 'Kiểm soát chất lượng gắt gao'], strengths_en: ['Workflow design', 'Standardizing recipes and costs', 'Strict QA'], culture_vi: 'Chuỗi F&B đang trong giai đoạn hệ thống hóa.', culture_en: 'F&B chains in the systematization phase.' },
      hospitality: { strengths_vi: ['Giám đốc Chất lượng', 'Quản trị Tài chính/Revenue', 'Tái cấu trúc bộ máy'], strengths_en: ['Quality Director', 'Financial/Revenue Management', 'Organizational Restructuring'], culture_vi: 'Giai đoạn tái định vị hoặc nâng cấp tiêu chuẩn sao khách sạn.', culture_en: 'Phases of repositioning or upgrading hotel star ratings.' },
      general: { strengths_vi: ['Kiểm toán chiến lược', 'Phát triển sản phẩm', 'Tái cấu trúc doanh nghiệp'], strengths_en: ['Strategic auditing', 'Product development', 'Corporate restructuring'], culture_vi: 'Tổ chức cần tính chuyên nghiệp và tiêu chuẩn khắt khe.', culture_en: 'Organizations needing extreme professionalism and strict standards.' }
    },
    redFlags: [
      { name_vi: 'Tiêu chuẩn Bất khả thi', name_en: 'Impossible Standards', description_vi: 'Đòi hỏi sự hoàn hảo ở cả tốc độ (D) và chất lượng (C), gây áp lực cực độ cho cấp dưới.', description_en: 'Demands perfection in both speed (D) and quality (C), causing extreme pressure on subordinates.' },
      { name_vi: 'Lạnh lùng và Thiếu thấu cảm', name_en: 'Cold and Unempathetic', description_vi: 'Chỉ trích gay gắt dựa trên lỗi sai thực tế, dễ làm sụp đổ tinh thần đội ngũ.', description_en: 'Harshly criticizes based on factual errors, easily destroying team morale.' }
    ],
    managementStrategy: [
      { title_vi: 'Giao Bài toán Tái cấu trúc', title_en: 'Assign Restructuring Problems', detail_vi: 'Đưa cho họ những bộ phận đang hoạt động kém hiệu quả để họ "chữa bệnh".', detail_en: 'Give them underperforming departments to "cure".' },
      { title_vi: 'Trang bị Kỹ năng Phản hồi', title_en: 'Equip with Feedback Skills', detail_vi: 'Bắt buộc họ phải tham gia các khóa học về EQ hoặc quy định cách thức truyền đạt phản hồi.', detail_en: 'Mandate EQ courses or regulate how they deliver feedback.' }
    ],
    conclusion: {
      recommendation_vi: 'LỰA CHỌN TỐI ƯU CHO VỊ TRÍ KIẾN TRÚC SƯ TRƯỞNG / TÁI CẤU TRÚC',
      recommendation_en: 'OPTIMAL CHOICE FOR CHIEF ARCHITECT / RESTRUCTURING ROLES',
      summary_vi: 'Khả năng giải quyết vấn đề tuyệt đỉnh nhưng cần được kiểm soát về mặt thái độ để không phá vỡ văn hóa công ty.',
      summary_en: 'Ultimate problem-solving skills but attitude must be controlled to avoid breaking company culture.'
    }
  },
  'ID': {
    id: 'ID',
    archetype_vi: 'Nhà Thuyết phục Quyền lực',
    archetype_en: 'The Powerful Persuader',
    personalityAnalysis: {
      primary: { group: 'I', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Giao tiếp xuất chúng, thích là trung tâm của sự chú ý.', analysis_en: 'Outstanding communication, loves being the center of attention.' },
      secondary: { group: 'D', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Sử dụng sự tự tin và quyết đoán để hỗ trợ cho việc thuyết phục và bán hàng.', analysis_en: 'Uses confidence and decisiveness to support persuasion and sales.' },
      tertiary: { group: 'S', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Không thích sự buồn tẻ, thường xuyên thay đổi môi trường hoặc cách làm.', analysis_en: 'Dislikes dullness, frequently changes environments or methods.' },
      quaternary: { group: 'C', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Bỏ qua hoàn toàn các số liệu và quy trình phức tạp.', analysis_en: 'Completely ignores complex metrics and processes.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Chuyên gia chốt sale (Sales Closer)', 'Tổ chức hội thảo nha khoa', 'Đại sứ thương hiệu'], strengths_en: ['Sales Closer', 'Organizing dental seminars', 'Brand Ambassador'], culture_vi: 'Phòng khám cần đẩy mạnh thương hiệu cá nhân/bác sĩ.', culture_en: 'Clinics needing to push personal/doctor branding.' },
      fnb: { strengths_vi: ['Quản lý Quan hệ Khách hàng VIP', 'Khuấy động sự kiện', 'Xử lý truyền thông'], strengths_en: ['VIP Customer Relations Management', 'Stirring up events', 'Media handling'], culture_vi: 'Mô hình nhà hàng kết hợp giải trí, bar, pub.', culture_en: 'Restaurant models combined with entertainment, bars, pubs.' },
      hospitality: { strengths_vi: ['Giám đốc Sales (DOS)', 'Tổ chức sự kiện (Banquet)', 'Marketing trải nghiệm'], strengths_en: ['Director of Sales (DOS)', 'Banquet organizing', 'Experiential Marketing'], culture_vi: 'Các sự kiện quy mô lớn, resort cần thu hút khách hàng MICE.', culture_en: 'Large-scale events, resorts needing to attract MICE clients.' },
      general: { strengths_vi: ['Trưởng phòng Kinh doanh', 'Phát ngôn viên', 'Đàm phán đối tác chiến lược'], strengths_en: ['Head of Sales', 'Spokesperson', 'Strategic partner negotiation'], culture_vi: 'Môi trường ưu tiên doanh thu và mở rộng quan hệ nhanh chóng.', culture_en: 'Environments prioritizing revenue and rapid relationship expansion.' }
    },
    redFlags: [
      { name_vi: 'Bán Rẻ Quy trình', name_en: 'Selling Out Processes', description_vi: 'Vì muốn chốt đơn nhanh và làm hài lòng khách, sẵn sàng hứa hẹn những điều vi phạm quy chuẩn kỹ thuật hoặc pháp lý.', description_en: 'To close fast and please clients, willingly promises things violating technical or legal standards.' },
      { name_vi: 'Bốc đồng và Thiếu Kỷ luật', name_en: 'Impulsive and Undisciplined', description_vi: 'Hành động theo cảm hứng, thường xuyên trễ giờ hoặc không nộp báo cáo đúng hạn.', description_en: 'Acts on impulse, frequently late or failing to submit reports on time.' }
    ],
    managementStrategy: [
      { title_vi: 'Kèm Cặp bằng Hệ thống Ràng buộc', title_en: 'Monitor via Binding Systems', detail_vi: 'Áp dụng các hệ thống duyệt giá/chiết khấu chặt chẽ trên phần mềm để họ không thể tự ý phá giá.', detail_en: 'Apply strict price/discount approval systems on software so they cannot arbitrarily cut prices.' },
      { title_vi: 'Đánh giá Dựa trên Lợi nhuận', title_en: 'Evaluate Based on Profit', detail_vi: 'Đừng chỉ thưởng trên doanh thu, hãy thưởng trên biên lợi nhuận thực tế thu về để hãm tính bốc đồng của họ.', detail_en: 'Do not just reward on revenue, reward on actual profit margin to curb their impulsiveness.' }
    ],
    conclusion: {
      recommendation_vi: 'TUYỂN DỤNG CHO VỊ TRÍ SĂN MỒI VÀ MỞ RỘNG MẠNG LƯỚI',
      recommendation_en: 'HIRE FOR HUNTER AND NETWORK EXPANSION ROLES',
      summary_vi: 'Ngôi sao sáng trong mảng bán hàng nhưng phải bị quản lý chặt chẽ bởi các chính sách tài chính.',
      summary_en: 'A superstar in sales but must be tightly managed by financial policies.'
    }
  },
  'IS': {
    id: 'IS',
    archetype_vi: 'Người Kết nối Thấu cảm',
    archetype_en: 'The Empathetic Connector',
    personalityAnalysis: {
      primary: { group: 'I', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Sôi nổi, thích giao tiếp và tạo niềm vui cho người khác.', analysis_en: 'Lively, loves communicating and bringing joy to others.' },
      secondary: { group: 'S', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Ấm áp, chân thành, lắng nghe thấu cảm và rất trung thành.', analysis_en: 'Warm, sincere, listens empathetically, and very loyal.' },
      tertiary: { group: 'D', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Né tránh các quyết định cứng rắn, sợ làm tổn thương người khác.', analysis_en: 'Avoids harsh decisions, fears hurting others.' },
      quaternary: { group: 'C', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Cực kỳ kém trong việc ghi nhớ tiểu tiết hoặc phân tích hệ thống.', analysis_en: 'Extremely poor at remembering details or analyzing systems.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Chăm sóc khách hàng VIP', 'Xoa dịu nỗi sợ của bệnh nhi/người lớn tuổi', 'Lễ tân thân thiện'], strengths_en: ['VIP Customer Care', 'Soothing fears of children/elderly', 'Friendly Receptionist'], culture_vi: 'Phòng khám gia đình, định hướng trải nghiệm ấm cúng.', culture_en: 'Family clinics, cozy experience orientation.' },
      fnb: { strengths_vi: ['Nhân viên phục vụ xuất sắc', 'Ghi nhớ sở thích khách quen', 'Tạo không khí gia đình'], strengths_en: ['Excellent waitstaff', 'Remembering regular clients\' preferences', 'Creating family atmosphere'], culture_vi: 'Quán cafe chuyên biệt, nhà hàng phục vụ khách địa phương.', culture_en: 'Specialty cafes, restaurants serving local clients.' },
      hospitality: { strengths_vi: ['Guest Experience Maker', 'Nhân viên Spa thấu cảm', 'Giải quyết phàn nàn bằng cảm xúc'], strengths_en: ['Guest Experience Maker', 'Empathetic Spa Staff', 'Emotional complaint resolution'], culture_vi: 'Boutique hotels, các khu nghỉ dưỡng chữa lành (Wellness).', culture_en: 'Boutique hotels, Wellness resorts.' },
      general: { strengths_vi: ['Đào tạo nội bộ', 'Truyền thông nội bộ', 'Chăm sóc nhân sự'], strengths_en: ['Internal Training', 'Internal Communications', 'HR Care'], culture_vi: 'Môi trường làm việc coi trọng văn hóa gia đình và sự sẻ chia.', culture_en: 'Workplaces valuing family culture and sharing.' }
    },
    redFlags: [
      { name_vi: 'Quá Cảm xúc', name_en: 'Too Emotional', description_vi: 'Dễ bị ảnh hưởng tâm lý bởi những khách hàng tiêu cực hoặc mâu thuẫn trong chỗ làm.', description_en: 'Easily affected psychologically by negative clients or workplace conflicts.' },
      { name_vi: 'Sợ Bán Hàng', name_en: 'Fear of Selling', description_vi: 'Ngại yêu cầu khách hàng chi trả thêm tiền vì sợ làm mất đi mối quan hệ tốt đẹp.', description_en: 'Hesitant to ask clients to pay more for fear of losing the good relationship.' }
    ],
    managementStrategy: [
      { title_vi: 'Xây dựng Kịch bản Xử lý Từ chối', title_en: 'Build Objection Handling Scripts', detail_vi: 'Huấn luyện họ cách nói "Không" hoặc cách chốt sale một cách nhẹ nhàng, tinh tế.', detail_en: 'Train them how to say "No" or how to close sales gently and subtly.' },
      { title_vi: 'Che chở Tâm lý', title_en: 'Psychological Shielding', detail_vi: 'Bảo vệ họ khỏi những khách hàng quá độc hại (Toxic). Chuyển những ca khó cho nhóm D hoặc C xử lý.', detail_en: 'Protect them from overly toxic clients. Transfer hard cases to D or C types.' }
    ],
    conclusion: {
      recommendation_vi: 'RẤT TỐT CHO VỊ TRÍ CHĂM SÓC KHÁCH HÀNG & TRẢI NGHIỆM',
      recommendation_en: 'EXCELLENT FOR CUSTOMER CARE & EXPERIENCE ROLES',
      summary_vi: 'Người mang lại linh hồn và sự ấm áp cho thương hiệu, giúp giữ chân khách hàng lâu dài.',
      summary_en: 'The person who brings soul and warmth to the brand, helping retain clients long-term.'
    }
  },
  'IC': {
    id: 'IC',
    archetype_vi: 'Nhà Đánh giá Sáng tạo',
    archetype_en: 'The Creative Evaluator',
    personalityAnalysis: {
      primary: { group: 'I', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Sáng tạo, giao tiếp tốt, nhiều ý tưởng mới mẻ.', analysis_en: 'Creative, good communicator, full of fresh ideas.' },
      secondary: { group: 'C', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Kiểm soát chất lượng của ý tưởng, suy nghĩ logic trước khi phát ngôn.', analysis_en: 'Controls the quality of ideas, thinks logically before speaking.' },
      tertiary: { group: 'S', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Dễ thay đổi, thiếu sự gắn bó dài lâu với một nhịp độ nhàm chán.', analysis_en: 'Prone to change, lacks long-term commitment to a boring pace.' },
      quaternary: { group: 'D', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Thiếu tính quyết đoán trong hành động, thường chần chừ.', analysis_en: 'Lacks decisiveness in action, often hesitates.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Thiết kế nụ cười (Smile Design) thẩm mỹ', 'Marketing nội dung chuyên môn', 'Tư vấn phác đồ phức tạp một cách dễ hiểu'], strengths_en: ['Aesthetic Smile Design', 'Technical content marketing', 'Explaining complex protocols easily'], culture_vi: 'Phòng khám kết hợp thẩm mỹ và kỹ thuật cao.', culture_en: 'Clinics combining aesthetics and high technology.' },
      fnb: { strengths_vi: ['Sáng tạo menu / Mixology', 'Thiết kế concept nhà hàng', 'Reviewer / Food Critic nội bộ'], strengths_en: ['Menu creation / Mixology', 'Restaurant concept design', 'Internal Food Critic'], culture_vi: 'Mô hình F&B sáng tạo, R&D liên tục.', culture_en: 'Creative F&B models, continuous R&D.' },
      hospitality: { strengths_vi: ['Thiết kế trải nghiệm khách hàng (CX)', 'Marcom Khách sạn', 'Kiểm tra chất lượng dịch vụ chéo (Mystery Shopper)'], strengths_en: ['Customer Experience (CX) Design', 'Hotel Marcom', 'Cross-checking service quality (Mystery Shopper)'], culture_vi: 'Các tập đoàn khách sạn cần đổi mới hình ảnh thương hiệu.', culture_en: 'Hotel groups needing to innovate brand image.' },
      general: { strengths_vi: ['Marketing Analyst', 'Chuyên viên R&D', 'Đào tạo kỹ năng chuyên sâu'], strengths_en: ['Marketing Analyst', 'R&D Specialist', 'In-depth skill training'], culture_vi: 'Môi trường làm việc ưu tiên sự sáng tạo dựa trên dữ liệu thực tế.', culture_en: 'Work environments prioritizing data-driven creativity.' }
    },
    redFlags: [
      { name_vi: 'Nghịch lý Nội tâm (Chủ nghĩa Hoàn hảo vs Sự Bốc đồng)', name_en: 'Internal Paradox (Perfectionism vs Impulsivity)', description_vi: 'Ý tưởng bay bổng (I) nhưng lại soi xét quá chi tiết (C), dẫn đến việc thường xuyên bỏ dở dự án vì cảm thấy chưa đủ hoàn hảo.', description_en: 'Flighty ideas (I) but scrutinizes too deeply (C), leading to frequent project abandonment because it\'s not perfect enough.' },
      { name_vi: 'Tranh luận Thừa thãi', name_en: 'Excessive Debating', description_vi: 'Dùng khả năng ngôn ngữ (I) và logic (C) để cãi lý với khách hàng hoặc quản lý, thay vì tập trung vào giải quyết vấn đề.', description_en: 'Uses verbal skills (I) and logic (C) to argue with clients or managers, instead of solving the problem.' }
    ],
    managementStrategy: [
      { title_vi: 'Quản lý Theo Giai đoạn (Milestones)', title_en: 'Manage via Milestones', detail_vi: 'Phân chia dự án thành các giai đoạn nhỏ để họ buộc phải hoàn thành từng phần thay vì sửa đi sửa lại vô tận.', detail_en: 'Break projects into small phases so they are forced to complete parts instead of endlessly revising.' },
      { title_vi: 'Định hướng Kết quả', title_en: 'Result Orientation', detail_vi: 'Chỉ định một người thuộc nhóm D làm Project Manager để thúc đẩy tiến độ của họ.', detail_en: 'Assign a D-type as Project Manager to push their progress.' }
    ],
    conclusion: {
      recommendation_vi: 'TUYỂN DỤNG CHO VỊ TRÍ MARKETING / SÁNG TẠO / R&D',
      recommendation_en: 'HIRE FOR MARKETING / CREATIVE / R&D ROLES',
      summary_vi: 'Tư duy độc đáo, xuất sắc trong việc tạo ra những sản phẩm/dịch vụ mới, nhưng cần người hỗ trợ triển khai thực tế.',
      summary_en: 'Unique mindset, excellent at creating new products/services, but needs someone to support actual implementation.'
    }
  },
  'SD': {
    id: 'SD',
    archetype_vi: 'Người Quản lý Vững vàng',
    archetype_en: 'The Steadfast Manager',
    personalityAnalysis: {
      primary: { group: 'S', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Điềm tĩnh, nhẫn nại, định hướng ổn định lâu dài.', analysis_en: 'Calm, patient, long-term stability oriented.' },
      secondary: { group: 'D', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Bảo vệ ranh giới vững chắc, có khả năng ra quyết định khi tình huống bắt buộc.', analysis_en: 'Protects firm boundaries, capable of making decisions when situations demand.' },
      tertiary: { group: 'C', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Linh hoạt với các quy trình, không quá cứng nhắc.', analysis_en: 'Flexible with processes, not too rigid.' },
      quaternary: { group: 'I', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Rất ít nói, không thích bộc lộ cảm xúc, giao tiếp thực dụng.', analysis_en: 'Very quiet, dislikes showing emotion, pragmatic communication.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Quản lý chi nhánh ổn định', 'Giải quyết khủng hoảng tĩnh', 'Giám sát vận hành điều trị'], strengths_en: ['Stable branch management', 'Static crisis resolution', 'Treatment operation supervision'], culture_vi: 'Phòng khám truyền thống, quy mô vừa.', culture_en: 'Traditional, medium-sized clinics.' },
      fnb: { strengths_vi: ['Cửa hàng trưởng thâm niên', 'Kiểm soát chi phí vận hành', 'Đào tạo thực tế'], strengths_en: ['Senior Store Manager', 'Operational cost control', 'Practical training'], culture_vi: 'Chuỗi cửa hàng cần duy trì chất lượng bất chấp biến động nhân sự.', culture_en: 'Chain stores needing to maintain quality despite staff turnover.' },
      hospitality: { strengths_vi: ['Trưởng bộ phận Buồng phòng/Bảo vệ', 'Duy trì an ninh trật tự', 'Xử lý các ca khiếu nại khó'], strengths_en: ['Head of Housekeeping/Security', 'Maintaining security and order', 'Handling tough complaint cases'], culture_vi: 'Môi trường làm việc áp lực ngầm cao, cần sự vững chãi.', culture_en: 'Work environments with high hidden pressure, needing steadfastness.' },
      general: { strengths_vi: ['Giám đốc hành chính', 'Quản lý kho bãi', 'Điều phối viên cấp cao'], strengths_en: ['Admin Director', 'Warehouse Management', 'Senior Coordinator'], culture_vi: 'Các tổ chức truyền thống, sản xuất, vận tải.', culture_en: 'Traditional organizations, manufacturing, logistics.' }
    },
    redFlags: [
      { name_vi: 'Bảo thủ Ngầm', name_en: 'Hidden Conservatism', description_vi: 'Ngoài mặt có vẻ đồng ý với những thay đổi mới (S) nhưng bên trong lại kiên quyết chống đối và làm theo cách cũ (D).', description_en: 'Outwardly seems to agree with new changes (S) but inwardly stubbornly opposes and does it the old way (D).' },
      { name_vi: 'Giao tiếp Lạnh lùng và Bướng bỉnh', name_en: 'Cold and Stubborn Communication', description_vi: 'Khi bị dồn vào chân tường, họ trở nên vô cùng bướng bỉnh và từ chối mọi giao tiếp.', description_en: 'When cornered, they become extremely stubborn and refuse all communication.' }
    ],
    managementStrategy: [
      { title_vi: 'Chứng minh Tính Hiệu quả Trước', title_en: 'Prove Efficiency First', detail_vi: 'Để thuyết phục họ thay đổi, hãy cho họ xem kết quả thử nghiệm thực tế (Pilot) thay vì dùng lời nói hoa mỹ.', detail_en: 'To persuade them to change, show them actual pilot results instead of using flowery words.' },
      { title_vi: 'Tôn trọng Ranh giới', title_en: 'Respect Boundaries', detail_vi: 'Đừng micromanage (quản lý vi mô) họ. Giao cho họ một khu vực và để họ tự làm "vua" ở đó.', detail_en: 'Do not micromanage them. Give them an area and let them be "king" there.' }
    ],
    conclusion: {
      recommendation_vi: 'TỐT CHO VỊ TRÍ CHỐT CHẶN VẬN HÀNH TUYẾN SAU',
      recommendation_en: 'GOOD FOR BACKLINE OPERATIONAL ANCHOR ROLES',
      summary_vi: 'Những người bảo vệ đáng tin cậy của tổ chức. Vô cùng bền bỉ và chịu được áp lực cực đoan.',
      summary_en: 'Reliable protectors of the organization. Extremely resilient and can withstand extreme pressure.'
    }
  },
  'SI': {
    id: 'SI',
    archetype_vi: 'Người Đồng đội Thân thiện',
    archetype_en: 'The Friendly Teammate',
    personalityAnalysis: {
      primary: { group: 'S', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Ổn định, kiên nhẫn, thích giúp đỡ.', analysis_en: 'Stable, patient, loves to help.' },
      secondary: { group: 'I', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Ấm áp, thích giao tiếp nhẹ nhàng, hòa đồng với mọi người.', analysis_en: 'Warm, prefers gentle communication, gets along with everyone.' },
      tertiary: { group: 'C', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Ít quan tâm đến sự chính xác tuyệt đối, làm việc theo cảm tính nhiều hơn.', analysis_en: 'Cares little about absolute precision, works more intuitively.' },
      quaternary: { group: 'D', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Sợ hãi quyền lực, né tránh xung đột bằng mọi giá.', analysis_en: 'Terrified of power, avoids conflict at all costs.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Trợ thủ nha khoa tâm lý', 'Chăm sóc khách hàng sau điều trị', 'Điều phối sảnh'], strengths_en: ['Psychological dental assistant', 'Post-treatment customer care', 'Lobby coordination'], culture_vi: 'Môi trường nha khoa nhẹ nhàng, chú trọng tình cảm.', culture_en: 'Gentle dental environments focusing on affection.' },
      fnb: { strengths_vi: ['Nhân viên phục vụ bàn', 'Nhân viên pha chế (Bartender) giao lưu', 'Chăm sóc khách đoàn gia đình'], strengths_en: ['Waitstaff', 'Interactive Bartender', 'Family group care'], culture_vi: 'Môi trường dịch vụ hiếu khách, thân mật.', culture_en: 'Hospitable, intimate service environments.' },
      hospitality: { strengths_vi: ['Lễ tân (Receptionist)', 'Nhân viên Concierge', 'Nhân viên Spa'], strengths_en: ['Receptionist', 'Concierge', 'Spa Staff'], culture_vi: 'Khu nghỉ dưỡng thiên nhiên, chú trọng sự thoải mái.', culture_en: 'Nature resorts, focusing on comfort.' },
      general: { strengths_vi: ['Hỗ trợ hành chính', 'Lễ tân văn phòng', 'Ban công đoàn/Phúc lợi'], strengths_en: ['Admin support', 'Office receptionist', 'Union/Welfare board'], culture_vi: 'Văn hóa công ty như gia đình, ít cạnh tranh.', culture_en: 'Family-like company culture, low competition.' }
    },
    redFlags: [
      { name_vi: 'Cả Nể Quá Mức', name_en: 'Overly Accommodating', description_vi: 'Làm hộ việc của người khác chỉ vì ngại từ chối, dẫn đến quá tải cá nhân và làm sai quy trình.', description_en: 'Does others\' work just out of hesitation to refuse, leading to personal overload and process violations.' },
      { name_vi: 'Thiếu Tập trung Cấu trúc', name_en: 'Lacks Structural Focus', description_vi: 'Thường xuyên quên việc hoặc mắc lỗi nhỏ do vừa làm vừa mải nói chuyện hoặc an ủi người khác.', description_en: 'Frequently forgets tasks or makes minor errors due to multitasking with chatting or comforting others.' }
    ],
    managementStrategy: [
      { title_vi: 'Thiết lập Giới hạn Nhiệm vụ', title_en: 'Set Task Boundaries', detail_vi: 'Yêu cầu họ chỉ tập trung vào mô tả công việc của mình. Nghiêm cấm việc làm thay đồng nghiệp.', detail_en: 'Require them to focus only on their job description. Strictly forbid doing colleagues\' work.' },
      { title_vi: 'Đào tạo Cầm tay Chỉ việc', title_en: 'Hand-holding Training', detail_vi: 'Đừng giao quy trình khô khan. Hãy cử người đi kèm hướng dẫn thực tế với thái độ nhẹ nhàng.', detail_en: 'Don\'t assign dry manuals. Assign someone to shadow and train practically with a gentle attitude.' }
    ],
    conclusion: {
      recommendation_vi: 'LỰA CHỌN AN TOÀN CHO CÁC VỊ TRÍ HỖ TRỢ',
      recommendation_en: 'SAFE CHOICE FOR SUPPORT ROLES',
      summary_vi: 'Chất keo gắn kết tình cảm của tổ chức. Nhân sự trung thành, dễ mến nhưng không phù hợp cho vị trí đòi hỏi quyết đoán hay độ chính xác cao.',
      summary_en: 'The emotional glue of the organization. Loyal, likable staff but unfit for roles demanding decisiveness or high accuracy.'
    }
  },
  'CD': {
    id: 'CD',
    archetype_vi: 'Người Cải tiến Tiêu chuẩn',
    archetype_en: 'The Standard Innovator',
    personalityAnalysis: {
      primary: { group: 'C', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Yêu cầu sự chính xác, phân tích dữ liệu chuyên sâu và tuân thủ.', analysis_en: 'Demands precision, deep data analysis, and compliance.' },
      secondary: { group: 'D', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Dám phá bỏ các quy trình cũ nếu có dữ liệu chứng minh quy trình mới hiệu quả hơn.', analysis_en: 'Dares to break old processes if data proves new ones are more efficient.' },
      tertiary: { group: 'S', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Không có nhu cầu duy trì trạng thái hiện tại, sẵn sàng gây ra xáo trộn.', analysis_en: 'No need to maintain status quo, willing to cause disruption.' },
      quaternary: { group: 'I', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Bỏ qua hoàn toàn cảm xúc, chỉ tập trung vào hiệu suất và sự thật.', analysis_en: 'Completely ignores emotions, focuses solely on efficiency and facts.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Bác sĩ chuyên khoa sâu (Phẫu thuật/Implant)', 'Trưởng phòng Lab nha khoa', 'Xây dựng phác đồ mới'], strengths_en: ['Deep specialist doctor (Surgery/Implant)', 'Head of Dental Lab', 'Building new protocols'], culture_vi: 'Phòng khám kỹ thuật cao, nghiên cứu và học thuật.', culture_en: 'High-tech clinics, research and academia.' },
      fnb: { strengths_vi: ['Kiểm soát viên chi phí (Cost Controller)', 'Quản lý chuỗi cung ứng', 'Phân tích tài chính R&D'], strengths_en: ['Cost Controller', 'Supply Chain Management', 'R&D Financial Analysis'], culture_vi: 'Hệ thống chuỗi lớn, quản trị rủi ro cao.', culture_en: 'Large chain systems, high risk management.' },
      hospitality: { strengths_vi: ['Giám đốc Tài chính (CFO)', 'Quản trị viên Doanh thu (Revenue Manager)', 'Kiểm toán nội bộ'], strengths_en: ['Chief Financial Officer (CFO)', 'Revenue Manager', 'Internal Auditing'], culture_vi: 'Quản trị khách sạn cấp tập đoàn.', culture_en: 'Corporate level hotel management.' },
      general: { strengths_vi: ['Chuyên gia tối ưu hóa hệ thống', 'Quản trị rủi ro', 'Cố vấn chiến lược'], strengths_en: ['System Optimization Specialist', 'Risk Management', 'Strategic Advisor'], culture_vi: 'Tổ chức cần tinh gọn bộ máy và cắt giảm chi phí.', culture_en: 'Organizations needing lean structuring and cost-cutting.' }
    },
    redFlags: [
      { name_vi: 'Tàn nhẫn trong Đánh giá', name_en: 'Ruthless Evaluation', description_vi: 'Chỉ trích sai lầm của người khác một cách không thương tiếc dựa trên số liệu, phá hủy tinh thần đội nhóm.', description_en: 'Pitilessly criticizes others\' mistakes based on data, destroying team morale.' },
      { name_vi: 'Khóa chặt Quy trình (Process Lock-in)', name_en: 'Process Lock-in', description_vi: 'Thiết kế ra những hệ thống quản lý quá phức tạp và khắt khe khiến người bình thường không thể vận hành nổi.', description_en: 'Designs overly complex and strict management systems that normal people cannot operate.' }
    ],
    managementStrategy: [
      { title_vi: 'Giới hạn Quyền lực Nhân sự', title_en: 'Limit HR Authority', detail_vi: 'Để họ nắm quyền về hệ thống/tài chính, nhưng KHÔNG cho họ quyền quản lý con người trực tiếp (giao cho I hoặc S).', detail_en: 'Let them hold system/financial power, but DO NOT give them direct people management power (assign to I or S).' },
      { title_vi: 'Công nhận Sự Thông tuệ', title_en: 'Acknowledge Intellect', detail_vi: 'Tôn trọng chuyên môn của họ. Không bao giờ tranh luận bằng cảm xúc, chỉ dùng số liệu để phản biện.', detail_en: 'Respect their expertise. Never argue with emotions, only use data to debate.' }
    ],
    conclusion: {
      recommendation_vi: 'TỐI ƯU CHO VỊ TRÍ TÀI CHÍNH / HỆ THỐNG / CHUYÊN MÔN SÂU',
      recommendation_en: 'OPTIMAL FOR FINANCE / SYSTEMS / DEEP EXPERTISE ROLES',
      summary_vi: 'Bộ não xuất chúng trong việc tối ưu hóa. Vũ khí bí mật để tăng biên lợi nhuận thông qua quản trị chi phí.',
      summary_en: 'Outstanding brain for optimization. The secret weapon to increase profit margins via cost management.'
    }
  },
  'CI': {
    id: 'CI',
    archetype_vi: 'Nhà Phân tích Tương tác',
    archetype_en: 'The Interactive Analyst',
    personalityAnalysis: {
      primary: { group: 'C', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Trọng tâm vào dữ liệu, sự chính xác và chuẩn mực.', analysis_en: 'Focuses on data, accuracy, and standards.' },
      secondary: { group: 'I', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Sử dụng kỹ năng giao tiếp để trình bày các dữ liệu khô khan một cách hấp dẫn.', analysis_en: 'Uses communication skills to present dry data appealingly.' },
      tertiary: { group: 'S', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Không bám víu vào sự ổn định, sẵn sàng thử nghiệm.', analysis_en: 'Does not cling to stability, willing to experiment.' },
      quaternary: { group: 'D', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Né tránh sự áp đặt quyền lực, thích thuyết phục bằng lý lẽ.', analysis_en: 'Avoids power imposition, prefers persuading with logic.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Tư vấn phác đồ chuyên sâu', 'Đào tạo lâm sàng cho bác sĩ trẻ', 'Phân tích phản hồi khách hàng'], strengths_en: ['In-depth protocol consulting', 'Clinical training for junior doctors', 'Analyzing customer feedback'], culture_vi: 'Phòng khám định hướng chuyên gia, tư vấn kỹ lưỡng.', culture_en: 'Expert-oriented clinics, thorough consulting.' },
      fnb: { strengths_vi: ['Training nghiệp vụ F&B', 'Phân tích xu hướng ẩm thực', 'Xử lý khủng hoảng chất lượng'], strengths_en: ['F&B Professional Training', 'Culinary trend analysis', 'Quality crisis handling'], culture_vi: 'Khách sạn/nhà hàng chú trọng tiêu chuẩn sao.', culture_en: 'Hotels/restaurants focusing on star standards.' },
      hospitality: { strengths_vi: ['Chuyên viên Đào tạo (L&D)', 'Giám sát Chất lượng Dịch vụ', 'Tối ưu hóa Hệ thống PMS'], strengths_en: ['L&D Specialist', 'Service Quality Supervisor', 'PMS Optimization'], culture_vi: 'Môi trường làm việc ưu tiên đào tạo và phát triển chuẩn mực.', culture_en: 'Work environments prioritizing training and standard development.' },
      general: { strengths_vi: ['Phân tích nghiệp vụ (BA)', 'Truyền thông Dữ liệu', 'Đào tạo kỹ năng mềm/cứng'], strengths_en: ['Business Analyst (BA)', 'Data Communication', 'Soft/Hard Skills Training'], culture_vi: 'Môi trường kết hợp giữa hệ thống và yếu tố con người.', culture_en: 'Environments blending systems and human elements.' }
    },
    redFlags: [
      { name_vi: 'Giải thích Dài dòng', name_en: 'Over-explaining', description_vi: 'Khi xảy ra lỗi, họ thường dùng những lời lẽ hoa mỹ và dữ liệu phức tạp để bao biện thay vì nhận lỗi trực tiếp.', description_en: 'When errors occur, they often use flowery words and complex data to make excuses instead of apologizing directly.' },
      { name_vi: 'Mất cân bằng giữa Chi tiết và Tầm nhìn', name_en: 'Detail-Vision Imbalance', description_vi: 'Có thể sa đà vào việc thảo luận những chi tiết nhỏ nhặt mà bỏ quên mục tiêu kinh doanh cuối cùng.', description_en: 'May get bogged down in discussing minor details, neglecting the ultimate business goal.' }
    ],
    managementStrategy: [
      { title_vi: 'Định hướng Bằng Mục tiêu Cụ thể', title_en: 'Direct via Specific Goals', detail_vi: 'Luôn nhắc nhở họ về bức tranh lớn. Cắt ngang một cách lịch sự khi họ bắt đầu giải thích quá dông dài.', detail_en: 'Always remind them of the big picture. Interrupt politely when they start over-explaining.' },
      { title_vi: 'Khai thác Thế mạnh Trình bày', title_en: 'Leverage Presentation Strengths', detail_vi: 'Giao cho họ việc báo cáo trước ban giám đốc hoặc viết tài liệu hướng dẫn (manuals).', detail_en: 'Assign them to report to the board or write instructional manuals.' }
    ],
    conclusion: {
      recommendation_vi: 'PHÙ HỢP VỊ TRÍ ĐÀO TẠO / TƯ VẤN CHUYÊN SÂU',
      recommendation_en: 'SUITED FOR TRAINING / IN-DEPTH CONSULTING ROLES',
      summary_vi: 'Người có khả năng biến những quy trình phức tạp thành ngôn ngữ dễ hiểu, cực tốt cho việc huấn luyện.',
      summary_en: 'Someone who can turn complex processes into understandable language, excellent for training.'
    }
  },
  'CS': {
    id: 'CS',
    archetype_vi: 'Chuyên gia Kỹ thuật Tận tâm',
    archetype_en: 'The Devoted Technical Expert',
    personalityAnalysis: {
      primary: { group: 'C', level_vi: 'Cao', level_en: 'High', analysis_vi: 'Làm việc nguyên tắc, cẩn thận, chuẩn xác.', analysis_en: 'Principled, careful, accurate work style.' },
      secondary: { group: 'S', level_vi: 'Khá', level_en: 'Moderate', analysis_vi: 'Bền bỉ, kiên nhẫn làm các công việc lặp đi lặp lại mà không phàn nàn.', analysis_en: 'Persistent, patiently does repetitive tasks without complaining.' },
      tertiary: { group: 'D', level_vi: 'Thấp', level_en: 'Low', analysis_vi: 'Không có tham vọng lãnh đạo hay kiểm soát người khác.', analysis_en: 'No ambition to lead or control others.' },
      quaternary: { group: 'I', level_vi: 'Rất thấp', level_en: 'Very Low', analysis_vi: 'Sống khép kín, rất ngại giao tiếp xã hội hoặc nói trước đám đông.', analysis_en: 'Introverted, very hesitant to socialize or speak in public.' }
    },
    jobFit: {
      dental: { strengths_vi: ['Kỹ thuật viên phòng Lab', 'Quản lý vật tư tiêu hao', 'Điều dưỡng phòng mổ vô trùng'], strengths_en: ['Lab Technician', 'Consumables Management', 'Sterile OR Nurse'], culture_vi: 'Môi trường làm việc tĩnh, ít tương tác với bệnh nhân.', culture_en: 'Quiet environments, little patient interaction.' },
      fnb: { strengths_vi: ['Kiểm toán chất lượng bếp (QA/QC)', 'Nhân viên kế toán kho', 'Kỹ thuật viên bảo trì'], strengths_en: ['Kitchen QA/QC', 'Inventory Accountant', 'Maintenance Technician'], culture_vi: 'Bộ phận hỗ trợ tuyến sau (Back-of-house).', culture_en: 'Back-of-house support departments.' },
      hospitality: { strengths_vi: ['Kế toán thu mua', 'Nhân viên IT khách sạn', 'Kiểm soát buồng phòng theo checklist'], strengths_en: ['Purchasing Accountant', 'Hotel IT Staff', 'Checklist-based Housekeeping Control'], culture_vi: 'Môi trường vận hành ngầm, đảm bảo cỗ máy hoạt động trơn tru.', culture_en: 'Hidden operation environments, ensuring the machine runs smoothly.' },
      general: { strengths_vi: ['Kế toán/Tài chính', 'Nhập liệu', 'Chuyên viên kỹ thuật/IT'], strengths_en: ['Accounting/Finance', 'Data Entry', 'Technical/IT Specialist'], culture_vi: 'Văn hóa công sở yên tĩnh, tập trung vào chuyên môn.', culture_en: 'Quiet office culture, focusing on expertise.' }
    },
    redFlags: [
      { name_vi: 'Khép kín Quá mức (Silo Mentality)', name_en: 'Overly Isolated (Silo Mentality)', description_vi: 'Từ chối giao tiếp với các phòng ban khác. Chỉ làm đúng phần việc của mình rồi thôi, không cảnh báo rủi ro cho người sau.', description_en: 'Refuses to communicate with other departments. Only does their part, doesn\'t warn the next person of risks.' },
      { name_vi: 'Chống đối Sự Thay đổi Tốc độ cao', name_en: 'Opposing High-Speed Change', description_vi: 'Sẽ rơi vào trạng thái hoảng loạn (panic) hoặc đình công ngầm nếu bị ép triển khai một quy trình mới quá nhanh mà chưa được kiểm chứng.', description_en: 'Will panic or stealthily strike if forced to implement a new unverified process too fast.' }
    ],
    managementStrategy: [
      { title_vi: 'Giao Việc Độc Lập', title_en: 'Assign Independent Work', detail_vi: 'Sắp xếp cho họ một góc làm việc yên tĩnh, cung cấp đầy đủ công cụ và để họ một mình.', detail_en: 'Set them up in a quiet corner, provide all tools, and leave them alone.' },
      { title_vi: 'Giao tiếp Bằng Bằng Chứng', title_en: 'Communicate with Evidence', detail_vi: 'Gửi email thay vì họp mặt. Khi có sự cố, hãy cùng họ rà soát lại checklist thay vì trách mắng.', detail_en: 'Send emails instead of meeting. During incidents, review the checklist with them instead of scolding.' }
    ],
    conclusion: {
      recommendation_vi: 'NHÂN SỰ VÀNG CHO CÁC VỊ TRÍ HỖ TRỢ KỸ THUẬT TUYẾN SAU',
      recommendation_en: 'GOLDEN STAFF FOR BACKEND TECHNICAL SUPPORT ROLES',
      summary_vi: 'Người duy trì độ chính xác tuyệt đối cho hệ thống. Tuyệt đối không đưa họ ra làm dịch vụ khách hàng trực tiếp.',
      summary_en: 'The one who maintains absolute system accuracy. Absolutely do not put them in direct customer service.'
    }
  }
};


