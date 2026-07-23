const INTERVIEW_QUESTIONS = {
  // Key = red flag type identifier
  'analysis_paralysis': {
    name_vi: 'Test kỹ năng xử lý khủng hoảng',
    name_en: 'Crisis Management Test',
    target_vi: 'Phá vỡ lỗ hổng "Đóng băng / Tê liệt phân tích"',
    target_en: 'Breaking the Analysis Paralysis vulnerability',
    questions: [
      {
        question_vi: 'Hãy kể lại một sự cố vận hành hoặc sự cố bất ngờ nhất bạn từng gặp, mà lúc đó Quản lý đi vắng không liên lạc được. Trong 3 phút đầu tiên, bạn ĐÃ LÀM GÌ CỤ THỂ TỪNG BƯỚC?',
        question_en: 'Tell me about the most unexpected operational incident you have faced when your manager was away and unreachable. In the first 3 minutes, exactly WHAT DID YOU DO, STEP BY STEP?',
        evaluation_guide_vi: 'Quan sát: Ứng viên có thể mô tả hành động cụ thể, có trình tự logic hay không. Nếu lúng túng, nói chung chung, hoặc thừa nhận "chờ đợi chỉ đạo" → chịu áp lực kém, rơi vào tê liệt phân tích. Nếu trả lời rành mạch với các bước cụ thể → tư duy hệ thống và phản xạ tốt.',
        evaluation_guide_en: 'Observe: Can the candidate describe specific actions in a logical sequence? If they are flustered, speak in generalities, or admit to "waiting for instructions" → poor under pressure, falls into analysis paralysis. If they answer clearly with specific steps → good systems thinking and reflexes.'
      }
    ],
    industries: {
      dental: {
        question_vi: 'Hãy kể lại một sự cố y khoa bất ngờ nhất em từng gặp khi đang thao tác trên ghế nha, mà lúc đó Bác sĩ trưởng đi vắng không liên lạc được. Trong 3 phút đầu tiên, em ĐÃ LÀM GÌ CỤ THỂ TỪNG BƯỚC?',
        question_en: 'Tell me about the most unexpected medical incident you faced while assisting at the dental chair, when the Lead Doctor was away and unreachable. In the first 3 minutes, exactly WHAT DID YOU DO, STEP BY STEP?'
      },
      fnb: {
        question_vi: 'Kể lại lần nhà hàng đột ngột mất điện/nước hoặc có sự cố ngộ độc vào đúng giờ cao điểm cuối tuần. CHÍNH XÁC lúc đó, bạn đã xử lý luồng khách hàng đang phàn nàn TỪNG BƯỚC như thế nào trước khi quản lý có mặt?',
        question_en: 'Tell me about a time the restaurant suddenly lost power/water or faced a poisoning scare during peak weekend hours. EXACTLY at that moment, how did you handle the complaining customers STEP BY STEP before the manager arrived?'
      },
      hospitality: {
        question_vi: 'Kể lại sự cố overbooking hoặc hỏa hoạn giả khiến khách hoảng loạn giữa đêm. Trong 3 phút đầu tiên, CHÍNH XÁC bạn đã đưa ra chỉ thị gì TỪNG BƯỚC?',
        question_en: 'Tell me about an overbooking incident or a false fire alarm that caused guests to panic in the middle of the night. In the first 3 minutes, EXACTLY what instructions did you give STEP BY STEP?'
      }
    }
  },
  'conflict_avoidance': {
    name_vi: 'Test bản lĩnh đối đầu',
    name_en: 'Confrontation Courage Test',
    target_vi: 'Phá vỡ lỗ hổng "Né tránh xung đột"',
    target_en: 'Breaking the Conflict Avoidance vulnerability',
    questions: [
      {
        question_vi: 'Hãy kể lại một lần bạn phải trực tiếp từ chối hoặc phản đối một yêu cầu vô lý từ một khách hàng VIP hoặc cấp trên trực tiếp. CHÍNH XÁC bạn đã dùng những từ ngữ nào trong khoảnh khắc đó?',
        question_en: 'Tell me about a time you had to directly refuse or oppose an unreasonable request from a VIP client or your direct supervisor. EXACTLY what words did you use in that moment?',
        evaluation_guide_vi: 'Quan sát: Ứng viên né tránh câu hỏi (đưa ra ví dụ hòa hoãn) hay dám đối diện. Nếu họ kể lại sự việc với cách xử lý vòng vo, nhượng bộ vô điều kiện → nguy cơ né tránh xung đột cao. Nếu họ dám đứng lên bảo vệ nguyên tắc một cách chuyên nghiệp → bản lĩnh vững.',
        evaluation_guide_en: 'Observe: Does the candidate avoid the question (giving an appeasement example) or face it? If they recount the event with a roundabout approach or unconditional concession → high risk of conflict avoidance. If they stood up to protect principles professionally → strong character.'
      }
    ],
    industries: {
      dental: {
        question_vi: 'Kể lại một lần khách hàng phàn nàn gay gắt, đòi bồi thường vô lý về một kết quả bọc răng sứ mà nguyên nhân do họ không tuân thủ chỉ định. TỪNG BƯỚC bạn đã đối thoại thế nào để từ chối yêu cầu đó mà không làm mất khách?',
        question_en: 'Tell me about a time a client complained bitterly, demanding unreasonable compensation for a dental crown result caused by their own non-compliance with instructions. STEP BY STEP, how did you converse to refuse the request without losing the client?'
      },
      general: {
        question_vi: 'Hãy kể về một lần phòng ban của bạn bị đổ lỗi oan cho một sai sót của phòng ban khác. CỤ THỂ bạn đã tổ chức cuộc họp đối chất như thế nào để làm rõ ranh giới trách nhiệm?',
        question_en: 'Tell me about a time your department was unjustly blamed for another department\'s mistake. SPECIFICALLY how did you organize a confrontation meeting to clarify the boundaries of responsibility?'
      }
    }
  },
  'silent_burnout': {
    name_vi: 'Test giới hạn chịu đựng',
    name_en: 'Endurance Limit Test',
    target_vi: 'Phát hiện lỗ hổng "Cam chịu im lặng đến mức kiệt sức"',
    target_en: 'Detecting the Silent Burnout vulnerability',
    questions: [
      {
        question_vi: 'Hãy mô tả lại tuần làm việc quá tải, áp lực nhất trong sự nghiệp của bạn tính đến nay. Bạn đã ĐÍCH THÂN LÀM GÌ để báo động cho tổ chức trước khi bản thân gục ngã?',
        question_en: 'Describe the most overloaded, high-pressure workweek in your career so far. What did you PERSONALLY DO to alert the organization before you collapsed?',
        evaluation_guide_vi: 'Quan sát: Nếu ứng viên tự hào vì đã cắn răng làm một mình không ai biết → rủi ro kiệt sức ngầm (Silent Burnout) rất cao. Nếu họ biết cách leo thang vấn đề, đàm phán lại KPI hoặc yêu cầu hỗ trợ nguồn lực → kỹ năng quản lý ranh giới cá nhân tốt.',
        evaluation_guide_en: 'Observe: If the candidate is proud of bearing it alone without anyone knowing → high risk of Silent Burnout. If they knew how to escalate the issue, renegotiate KPIs, or request resource support → good personal boundary management skills.'
      }
    ]
  },
  'sales_weakness': {
    name_vi: 'Test khả năng chốt sale thực chiến',
    name_en: 'Practical Closing Skills Test',
    target_vi: 'Kiểm chứng lỗ hổng "Ngại bán hàng / Sợ bị từ chối"',
    target_en: 'Verifying the Sales Weakness / Fear of Rejection vulnerability',
    questions: [
      {
        question_vi: 'Kể lại lần bạn cố gắng bán một gói dịch vụ/sản phẩm giá trị cao nhưng khách hàng liên tục nói "để suy nghĩ thêm". BẠN ĐÃ NÓI CHÍNH XÁC CÂU GÌ ở giây phút quyết định để khiến họ rút ví?',
        question_en: 'Tell me about a time you tried to sell a high-value service/product but the customer kept saying "let me think about it". EXACTLY WHAT SENTENCE DID YOU SAY in the decisive moment to make them pull out their wallet?',
        evaluation_guide_vi: 'Quan sát: Sự tự tin khi kể lại tình huống. Nếu họ trả lời "em gửi thêm tài liệu rồi chờ" → tư duy thụ động, sợ chốt sale. Nếu họ chia sẻ được một kỹ thuật chốt hạ (call-to-action) rõ ràng và mạnh mẽ → có năng lực bán hàng thực chiến.',
        evaluation_guide_en: 'Observe: Confidence when recounting the situation. If they answer "I sent more materials and waited" → passive mindset, afraid to close. If they can share a clear and strong call-to-action closing technique → practical sales capacity.'
      }
    ],
    industries: {
      dental: {
        question_vi: 'Kể lại lần bạn tư vấn gói Implant toàn hàm nhưng khách hàng chê đắt và định sang nha khoa đối thủ. Ở giây phút đó, CHÍNH XÁC bạn đã dùng lập luận gì TỪNG BƯỚC để giữ họ lại và chốt cọc?',
        question_en: 'Tell me about a time you consulted on a full-arch Implant package but the client found it too expensive and planned to go to a competitor. In that moment, EXACTLY what arguments did you use STEP BY STEP to keep them and secure the deposit?'
      }
    }
  },
  'impulsive_decisions': {
    name_vi: 'Test quản trị rủi ro',
    name_en: 'Risk Management Test',
    target_vi: 'Đánh giá lỗ hổng "Ra quyết định bốc đồng"',
    target_en: 'Evaluating the Impulsive Decisions vulnerability',
    questions: [
      {
        question_vi: 'Kể lại một quyết định vội vàng nhất trong công việc mà bạn từng đưa ra và dẫn đến hậu quả thiệt hại. CHÍNH XÁC lúc đó bạn đã bỏ qua những bước kiểm tra nào, và BẠN ĐÃ ĐÍCH THÂN KHẮC PHỤC nó ra sao?',
        question_en: 'Tell me about the most hasty work decision you ever made that led to damaging consequences. EXACTLY what checking steps did you skip at that time, and HOW DID YOU PERSONALLY FIX it?',
        evaluation_guide_vi: 'Quan sát: Sự trung thực và mức độ tự nhận thức. Người bốc đồng thường đổ lỗi cho hoàn cảnh phải ra quyết định nhanh. Nếu họ nhận trách nhiệm về việc thiếu đánh giá rủi ro và có bài học đắt giá → đã trưởng thành từ sai lầm. Nếu vẫn tự hào vì sự "nhanh nhạy" dù có lỗi → nguy cơ bốc đồng chưa được khắc phục.',
        evaluation_guide_en: 'Observe: Honesty and level of self-awareness. Impulsive people often blame the situation requiring a quick decision. If they take responsibility for the lack of risk assessment and learned a hard lesson → matured from mistakes. If still proud of "agility" despite errors → impulsive risk remains unmitigated.'
      }
    ]
  },
  'superficial_relationships': {
    name_vi: 'Test độ sâu của các mối quan hệ',
    name_en: 'Relationship Depth Test',
    target_vi: 'Phá vỡ lỗ hổng "Quan hệ hời hợt, bề mặt"',
    target_en: 'Breaking the Superficial Relationships vulnerability',
    questions: [
      {
        question_vi: 'Kể lại một lần bạn phải giải quyết một mâu thuẫn ngầm kéo dài nhiều tháng với một đồng nghiệp hoặc đối tác. TỪNG BƯỚC một, bạn đã làm gì để chạm đến cốt lõi vấn đề thay vì chỉ giảng hòa bề mặt?',
        question_en: 'Tell me about a time you had to resolve a hidden conflict lasting for months with a colleague or partner. STEP BY STEP, what did you do to reach the core of the problem instead of just making superficial peace?',
        evaluation_guide_vi: 'Quan sát: Ứng viên I (Influence) thường thích mọi người vui vẻ nhưng né tránh mâu thuẫn sâu. Nếu họ chỉ kể những buổi đi ăn, nhậu để "huề cả làng" → mối quan hệ hời hợt. Nếu họ có các cuộc nói chuyện 1:1, thẳng thắn mổ xẻ tổn thương và cam kết thay đổi → kỹ năng xây dựng quan hệ sâu sắc.',
        evaluation_guide_en: 'Observe: Type I candidates often like everyone to be happy but avoid deep conflicts. If they just recount going out for meals/drinks to "smooth things over" → superficial relationships. If they had 1:1 talks, frankly dissecting the hurts and committing to change → deep relationship-building skills.'
      }
    ]
  },
  'overcontrolling': {
    name_vi: 'Test mức độ ủy quyền',
    name_en: 'Delegation Level Test',
    target_vi: 'Kiểm chứng lỗ hổng "Kiểm soát vi mô (Micromanagement)"',
    target_en: 'Verifying the Overcontrolling (Micromanagement) vulnerability',
    questions: [
      {
        question_vi: 'Mô tả lại một dự án mà bạn ĐÃ GIAO TOÀN QUYỀN quyết định cho nhân viên cấp dưới, và họ đã làm sai ý bạn ở giai đoạn giữa. CHÍNH XÁC bạn đã phản ứng và can thiệp như thế nào tại thời điểm đó?',
        question_en: 'Describe a project where you GAVE FULL decision-making AUTHORITY to a subordinate, and they deviated from your intent in the middle stage. EXACTLY how did you react and intervene at that moment?',
        evaluation_guide_vi: 'Quan sát: Nếu họ lập tức giật lại quyền kiểm soát, tự tay làm nốt dự án → tính kiểm soát vi mô rất cao. Nếu họ tổ chức họp, đặt câu hỏi coaching để nhân viên tự nhận ra sai sót và tiếp tục hoàn thành → năng lực lãnh đạo thực sự.',
        evaluation_guide_en: 'Observe: If they immediately snatched back control and finished the project themselves → very high micromanagement. If they held a meeting, asking coaching questions so the employee could realize the error and complete it → true leadership capacity.'
      }
    ]
  },
  'aggressive_communication': {
    name_vi: 'Test kiểm soát cảm xúc',
    name_en: 'Emotional Control Test',
    target_vi: 'Đánh giá lỗ hổng "Giao tiếp áp đặt, thô bạo"',
    target_en: 'Evaluating the Aggressive Communication vulnerability',
    questions: [
      {
        question_vi: 'Kể lại lần bạn tức giận nhất với sự yếu kém của một nhân viên/đồng nghiệp. Bạn đã nói câu gì nặng nề nhất lúc đó, và SAU SỰ VIỆC, bạn đã có CỤ THỂ những hành động gì để khôi phục lại tinh thần cho họ?',
        question_en: 'Tell me about the time you were most angry with the incompetence of an employee/colleague. What was the harshest thing you said then, and AFTER THE INCIDENT, what SPECIFIC actions did you take to restore their morale?',
        evaluation_guide_vi: 'Quan sát: Chấp nhận rằng ai cũng có lúc cáu giận. Tuy nhiên, nếu họ không có hành động "sửa chữa" (repair) sau đó hoặc cho rằng "mắng để tốt cho họ" → mức độ độc hại cao, thiếu EQ. Nếu họ biết xin lỗi về thái độ nhưng vẫn giữ vững tiêu chuẩn công việc → EQ tốt.',
        evaluation_guide_en: 'Observe: Accept that everyone gets angry sometimes. However, if they took no "repair" actions afterwards or believe "scolding is good for them" → high toxicity, lacks EQ. If they knew how to apologize for the attitude while maintaining work standards → good EQ.'
      }
    ]
  },
  'attention_seeking': {
    name_vi: 'Test năng lực làm nền',
    name_en: 'Background Supporter Test',
    target_vi: 'Phát hiện lỗ hổng "Hội chứng thích gây chú ý"',
    target_en: 'Detecting the Attention Seeking vulnerability',
    questions: [
      {
        question_vi: 'Hãy kể về một thành tựu lớn của nhóm mà trong đó bạn là người đóng góp chính, nhưng tại buổi lễ tuyên dương, một người khác lại được xướng tên nhận toàn bộ sự chú ý. TỪNG BƯỚC một, bạn đã xử lý cảm xúc và hành động thực tế của mình sau đó ra sao?',
        question_en: 'Tell me about a major team achievement where you were the main contributor, but at the recognition ceremony, someone else was called out and received all the attention. STEP BY STEP, how did you handle your emotions and what were your actual actions afterwards?',
        evaluation_guide_vi: 'Quan sát: Nếu họ biểu lộ sự bất mãn gay gắt, đi kể lể hoặc tranh giành lại công trạng bằng mọi giá → nhu cầu được chú ý (Ego) quá lớn, dễ gây chia rẽ. Nếu họ tự hào ngầm, biết cách ghi nhận chéo và tập trung vào kết quả chung → trưởng thành về cảm xúc.',
        evaluation_guide_en: 'Observe: If they show harsh dissatisfaction, gossip, or fight to reclaim credit at all costs → need for attention (Ego) is too large, easily causes division. If they are quietly proud, know how to cross-recognize and focus on the overall result → emotional maturity.'
      }
    ]
  },
  'resistance_to_change': {
    name_vi: 'Test khả năng thích ứng',
    name_en: 'Adaptability Test',
    target_vi: 'Phá vỡ lỗ hổng "Chống cự sự thay đổi"',
    target_en: 'Breaking the Resistance to Change vulnerability',
    questions: [
      {
        question_vi: 'Kể lại lần công ty áp dụng một phần mềm quản lý mới hoặc quy trình mới làm xáo trộn hoàn toàn cách làm việc quen thuộc của bạn. Trong 2 tuần đầu tiên, BẠN ĐÃ LÀM GÌ CỤ THỂ để không bị tụt lại?',
        question_en: 'Tell me about a time the company implemented a new management software or process that completely disrupted your familiar way of working. In the first 2 weeks, exactly WHAT DID YOU DO to avoid falling behind?',
        evaluation_guide_vi: 'Quan sát: Những người nhóm S tiêu cực thường phàn nàn và chần chừ. Nếu câu trả lời xoay quanh việc "cố gắng chịu đựng" hoặc "chờ người khác làm quen rồi học theo" → sức ỳ lớn. Nếu họ chủ động tìm tài liệu, hỏi IT hoặc tạo ra bảng tóm tắt cách dùng mới → khả năng thích ứng tốt.',
        evaluation_guide_en: 'Observe: Negative Type S people often complain and delay. If the answer revolves around "trying to endure" or "waiting for others to get used to it then following" → high inertia. If they actively found documents, asked IT, or created a cheat sheet for the new usage → good adaptability.'
      }
    ]
  },
  'perfectionism_paralysis': {
    name_vi: 'Test đánh đổi sự hoàn hảo',
    name_en: 'Perfection Trade-off Test',
    target_vi: 'Đánh giá lỗ hổng "Chủ nghĩa hoàn hảo gây đình trệ"',
    target_en: 'Evaluating the Perfectionism Paralysis vulnerability',
    questions: [
      {
        question_vi: 'Kể lại một dự án có deadline cực kỳ gấp rút, buộc bạn phải tung ra một sản phẩm/kết quả chỉ đạt 70% tiêu chuẩn chất lượng khắt khe của bạn. CỤ THỂ bạn đã ra quyết định cắt bỏ những phần nào và làm sao để thuyết phục bản thân chấp nhận nó?',
        question_en: 'Tell me about a project with an extremely tight deadline that forced you to release a product/result that only met 70% of your strict quality standards. SPECIFICALLY what did you decide to cut out and how did you convince yourself to accept it?',
        evaluation_guide_vi: 'Quan sát: Nhóm C thường mắc kẹt ở đây. Nếu họ khẳng định "tôi không bao giờ chấp nhận sản phẩm dưới chuẩn" → thiếu linh hoạt thương mại, rủi ro trễ tiến độ cao. Nếu họ biết cách phân loại tính năng cốt lõi (must-have) và tính năng làm đẹp (nice-to-have) để cắt giảm → tư duy thực tế và quản lý thời gian xuất sắc.',
        evaluation_guide_en: 'Observe: Type C often gets stuck here. If they assert "I never accept substandard products" → lacks commercial flexibility, high risk of delayed schedules. If they knew how to categorize core features (must-have) and cosmetic features (nice-to-have) to cut → practical thinking and excellent time management.'
      }
    ]
  },
  'delegation_failure': {
    name_vi: 'Test nỗi sợ mất quyền kiểm soát',
    name_en: 'Fear of Losing Control Test',
    target_vi: 'Phá vỡ lỗ hổng "Thất bại trong ủy quyền (Ôm đồm)"',
    target_en: 'Breaking the Delegation Failure (Overburdening) vulnerability',
    questions: [
      {
        question_vi: 'Kể lại một nhiệm vụ quan trọng nhất mà bạn đã từng CHUYỂN GIAO hoàn toàn cho người khác thực hiện thay mình. BẠN ĐÃ THIẾT LẬP CHÍNH XÁC những cơ chế kiểm tra chéo (checkpoint) nào để ngủ ngon mà không phải can thiệp trực tiếp?',
        question_en: 'Tell me about the most important task you ever completely TRANSFERRED to someone else to execute in your place. EXACTLY what cross-checking mechanisms (checkpoints) did you set up so you could sleep well without directly intervening?',
        evaluation_guide_vi: 'Quan sát: Nếu họ chỉ giao việc bằng miệng và hy vọng kết quả tốt, hoặc không dám giao việc quan trọng → chưa biết cách ủy quyền. Nếu họ trình bày được một hệ thống báo cáo tiến độ, các điểm mốc (milestone) cần duyệt và biên độ sai số cho phép → nhà quản trị có phương pháp.',
        evaluation_guide_en: 'Observe: If they only delegated verbally and hoped for good results, or didn\'t dare delegate important work → doesn\'t know how to delegate. If they can present a progress reporting system, milestones to approve, and allowed error margins → methodical manager.'
      }
    ]
  }
};


