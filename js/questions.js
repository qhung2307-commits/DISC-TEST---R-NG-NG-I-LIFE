const DISC_QUESTIONS = [
  {
    id: 1,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Sếp giao cho bạn một dự án lớn với deadline gấp. Điều đầu tiên bạn làm là gì?',
    question_en: 'Your boss assigns you a major project with a tight deadline. What do you do first?',
    options: [
      { id: 'a', text_vi: 'Xác định ngay kết quả cuối cùng cần đạt, rồi phân việc cho từng người.', text_en: 'Define the end result immediately, then delegate tasks to each person.', disc: 'D' },
      { id: 'b', text_vi: 'Gọi điện cho vài đồng nghiệp thân để cùng bàn ý tưởng ban đầu.', text_en: 'Call a few close colleagues to brainstorm initial ideas together.', disc: 'I' },
      { id: 'c', text_vi: 'Ngồi xuống đọc lại brief kỹ, liệt kê từng bước cần thực hiện.', text_en: 'Sit down, re-read the brief carefully, list every step needed.', disc: 'S' },
      { id: 'd', text_vi: 'Tìm hiểu các dự án tương tự trước đây để rút kinh nghiệm và tránh sai sót.', text_en: 'Research similar past projects to learn from their mistakes.', disc: 'C' }
    ]
  },
  {
    id: 2,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn bè mô tả bạn thế nào khi giới thiệu bạn với người mới?',
    question_en: 'How do friends describe you when introducing you to someone new?',
    options: [
      { id: 'a', text_vi: '"Cần gì cứ hỏi bạn này, bạn ấy luôn biết cách xử lý."', text_en: '"If you need anything handled, this is the person."', disc: 'D' },
      { id: 'b', text_vi: '"Ở cạnh bạn này thì không bao giờ chán, lúc nào cũng có chuyện vui."', text_en: '"You will never be bored around this one, always full of stories."', disc: 'I' },
      { id: 'c', text_vi: '"Bạn này tốt lắm, lúc nào cũng sẵn sàng giúp đỡ mọi người."', text_en: '"This one is the best, always ready to help anyone."', disc: 'S' },
      { id: 'd', text_vi: '"Bạn này rất cẩn thận, nhờ gì cũng làm đúng từ A đến Z."', text_en: '"This one is very thorough, handles everything accurately from A to Z."', disc: 'C' }
    ]
  },
  {
    id: 3,
    context: 'work',
    type: 'situation',
    consistencyGroup: 'A',
    question_vi: 'Trong cuộc họp, hai đồng nghiệp bắt đầu tranh cãi gay gắt. Bạn sẽ:',
    question_en: 'In a meeting, two colleagues start arguing intensely. You will:',
    options: [
      { id: 'a', text_vi: 'Nói thẳng: "Dừng lại, mình cần quyết định ngay bây giờ, không có thời gian."', text_en: 'Say directly: "Stop, we need to decide now, there is no time."', disc: 'D' },
      { id: 'b', text_vi: 'Xen vào bằng một câu chuyện nhẹ nhàng để hạ nhiệt, rồi dẫn dắt về vấn đề chính.', text_en: 'Ease in with a light remark to cool things down, then redirect to the main topic.', disc: 'I' },
      { id: 'c', text_vi: 'Để hai bên nói hết, rồi gợi ý một phương án mà cả hai đều chấp nhận được.', text_en: 'Let both sides finish, then suggest a middle-ground solution both can accept.', disc: 'S' },
      { id: 'd', text_vi: 'Yêu cầu cả hai trình bày số liệu và bằng chứng cụ thể thay vì nói cảm tính.', text_en: 'Ask both to present specific data and evidence instead of speaking emotionally.', disc: 'C' }
    ]
  },
  {
    id: 4,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Nhóm bạn đang chọn nhà hàng ăn tối nhưng không ai quyết được. Bạn sẽ:',
    question_en: 'Your friend group is picking a dinner spot but nobody can decide. You will:',
    options: [
      { id: 'a', text_vi: 'Chọn luôn một chỗ và nói: "Đi chỗ này, đừng bàn nữa."', text_en: 'Pick a place and say: "Let\'s go here, stop debating."', disc: 'D' },
      { id: 'b', text_vi: 'Gợi ý chỗ mới mở mà bạn thấy trên mạng, kể sơ về đồ ăn ở đó.', text_en: 'Suggest a newly opened place you saw online, describe the food there.', disc: 'I' },
      { id: 'c', text_vi: 'Hỏi từng người thích ăn gì, rồi tìm chỗ phù hợp với tất cả.', text_en: 'Ask each person what they want to eat, then find a place that suits everyone.', disc: 'S' },
      { id: 'd', text_vi: 'Mở app review, so sánh giá cả, đánh giá và khoảng cách trước khi đề xuất.', text_en: 'Open a review app, compare prices, ratings and distance before suggesting.', disc: 'C' }
    ]
  },
  {
    id: 5,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Khách hàng phàn nàn rất nặng nề và yêu cầu gặp quản lý. Bạn xử lý thế nào?',
    question_en: 'A customer complains harshly and demands to see the manager. How do you handle it?',
    options: [
      { id: 'a', text_vi: 'Tự mình giải quyết luôn, đưa ra phương án bồi thường rõ ràng ngay tại chỗ.', text_en: 'Handle it yourself, offer a clear compensation right on the spot.', disc: 'D' },
      { id: 'b', text_vi: 'Mỉm cười, nói chuyện để khách bình tĩnh lại trước, sau đó mới bàn giải pháp.', text_en: 'Smile, chat to calm the customer first, then discuss solutions.', disc: 'I' },
      { id: 'c', text_vi: 'Lắng nghe hết ý kiến, xin lỗi chân thành rồi hỏi khách muốn được hỗ trợ thế nào.', text_en: 'Listen fully, sincerely apologize, then ask how the customer wants to be helped.', disc: 'S' },
      { id: 'd', text_vi: 'Ghi lại toàn bộ nội dung phàn nàn, kiểm tra lại quy trình để xác định lỗi ở đâu.', text_en: 'Document the entire complaint, review the process to identify where the error occurred.', disc: 'C' }
    ]
  },
  {
    id: 6,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn phát hiện nhà hàng tính sai hóa đơn thừa 200k. Bạn sẽ:',
    question_en: 'You discover the restaurant overcharged your bill by 200k. You will:',
    options: [
      { id: 'a', text_vi: 'Gọi ngay nhân viên, nói thẳng: "Tính sai rồi, kiểm tra lại ngay đi."', text_en: 'Call the staff immediately: "You overcharged me, check it right now."', disc: 'D' },
      { id: 'b', text_vi: 'Vẫy nhân viên lại, nói vui vui: "Hình như có nhầm chút nè, kiểm tra giúp mình nhé."', text_en: 'Wave the staff over, say lightly: "Seems there is a little mix-up, could you check?"', disc: 'I' },
      { id: 'c', text_vi: 'Kiểm tra lại bill lần nữa cho chắc, rồi nhẹ nhàng nhờ nhân viên xem lại.', text_en: 'Double-check the bill yourself, then gently ask the staff to review.', disc: 'S' },
      { id: 'd', text_vi: 'Đối chiếu từng món trong bill với menu, đánh dấu chỗ sai, rồi đưa cho nhân viên.', text_en: 'Cross-check each item on the bill against the menu, mark the errors, then show the staff.', disc: 'C' }
    ]
  },
  {
    id: 7,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Công ty bắt đầu một chương trình mới mà bạn chưa quen. Phản ứng đầu tiên:',
    question_en: 'The company launches a new program you are unfamiliar with. Your first reaction:',
    options: [
      { id: 'a', text_vi: 'Xung phong đi đầu, thử nghiệm trước rồi rút kinh nghiệm sau.', text_en: 'Volunteer to go first, try it out and learn from experience.', disc: 'D' },
      { id: 'b', text_vi: 'Rủ vài đồng nghiệp cùng tìm hiểu, vừa học vừa trao đổi cho vui.', text_en: 'Invite some colleagues to explore together, learning and exchanging as you go.', disc: 'I' },
      { id: 'c', text_vi: 'Chờ xem ai đã làm thành công, hỏi họ hướng dẫn rồi mình mới bắt đầu.', text_en: 'Wait to see who has done it successfully, ask them for guidance, then start.', disc: 'S' },
      { id: 'd', text_vi: 'Đọc kỹ hướng dẫn từ đầu đến cuối, ghi chú lại trước khi bắt tay vào.', text_en: 'Read the instructions thoroughly from start to finish, take notes before starting.', disc: 'C' }
    ]
  },
  {
    id: 8,
    context: 'life',
    type: 'situation',
    consistencyGroup: 'B',
    question_vi: 'Cuối tuần, bạn có 1 ngày rảnh hoàn toàn. Bạn thường sẽ:',
    question_en: 'On the weekend, you have a completely free day. You usually:',
    options: [
      { id: 'a', text_vi: 'Lên danh sách việc cần làm và hoàn thành cho hết trong ngày.', text_en: 'Make a to-do list and get everything done by end of day.', disc: 'D' },
      { id: 'b', text_vi: 'Gọi điện hỏi thăm bạn bè, rủ ai đó đi cafe hoặc ăn uống.', text_en: 'Call friends, invite someone for coffee or a meal.', disc: 'I' },
      { id: 'c', text_vi: 'Ở nhà nghỉ ngơi, xem phim hoặc nấu ăn, tận hưởng sự yên tĩnh.', text_en: 'Stay home, rest, watch a movie or cook, enjoy the quiet.', disc: 'S' },
      { id: 'd', text_vi: 'Lên kế hoạch cho tuần tới, sắp xếp lại đồ đạc hoặc tài liệu.', text_en: 'Plan for next week, organize belongings or documents.', disc: 'C' }
    ]
  },
  {
    id: 9,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Đồng nghiệp nhờ bạn giúp việc nhưng bạn đang rất bận. Bạn sẽ:',
    question_en: 'A colleague asks for help but you are very busy. You will:',
    options: [
      { id: 'a', text_vi: 'Nói thẳng: "Mình đang bận, tự xử lý đi hoặc chờ chiều mình rảnh."', text_en: 'Say directly: "I am busy, handle it yourself or wait until I am free."', disc: 'D' },
      { id: 'b', text_vi: 'Giới thiệu họ với người khác có thể giúp, đồng thời động viên vài câu.', text_en: 'Introduce them to someone else who can help, and offer some encouragement.', disc: 'I' },
      { id: 'c', text_vi: 'Cố gắng sắp xếp để giúp dù bận, vì ngại từ chối.', text_en: 'Try to rearrange things to help despite being busy, because you dislike refusing.', disc: 'S' },
      { id: 'd', text_vi: 'Hỏi rõ vấn đề cụ thể, gửi cho họ tài liệu hoặc link hướng dẫn liên quan.', text_en: 'Ask about the specific problem, send them relevant documentation or guide links.', disc: 'C' }
    ]
  },
  {
    id: 10,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Khi mua một món đồ giá trị lớn (điện thoại, laptop), bạn thường:',
    question_en: 'When buying an expensive item (phone, laptop), you usually:',
    options: [
      { id: 'a', text_vi: 'Biết mình muốn gì, vào cửa hàng, chọn nhanh rồi ra về.', text_en: 'Know what you want, walk in, pick quickly and leave.', disc: 'D' },
      { id: 'b', text_vi: 'Hỏi bạn bè đang dùng gì, nghe họ kể trải nghiệm rồi quyết định.', text_en: 'Ask friends what they use, listen to their experience, then decide.', disc: 'I' },
      { id: 'c', text_vi: 'Suy nghĩ khá lâu, đắn đo nhiều lần trước khi quyết định mua.', text_en: 'Think for a long time, deliberate many times before deciding to buy.', disc: 'S' },
      { id: 'd', text_vi: 'Đọc review chi tiết, so sánh thông số kỹ thuật giữa các sản phẩm.', text_en: 'Read detailed reviews, compare technical specs between products.', disc: 'C' }
    ]
  },
  {
    id: 11,
    context: 'work',
    type: 'situation',
    consistencyGroup: 'A',
    question_vi: 'Sếp phê bình bạn trước mặt đồng nghiệp. Phản ứng bên trong của bạn:',
    question_en: 'Your boss criticizes you in front of colleagues. Your inner reaction:',
    options: [
      { id: 'a', text_vi: 'Bực mình và muốn phản bác lại ngay, vì thấy cách làm đó không công bằng.', text_en: 'Annoyed and wanting to push back immediately, because it feels unfair.', disc: 'D' },
      { id: 'b', text_vi: 'Buồn vì mất mặt trước mọi người, lo lắng không biết họ nghĩ gì.', text_en: 'Sad about losing face in front of everyone, worried about what they think.', disc: 'I' },
      { id: 'c', text_vi: 'Im lặng chịu đựng, cảm thấy tổn thương nhưng không muốn làm lớn chuyện.', text_en: 'Silently endure, feeling hurt but not wanting to escalate.', disc: 'S' },
      { id: 'd', text_vi: 'Phân tích xem lời phê bình đó có đúng không, nếu sai thì chuẩn bị dữ liệu phản hồi riêng.', text_en: 'Analyze whether the criticism is valid, if wrong then prepare data for a private rebuttal.', disc: 'C' }
    ]
  },
  {
    id: 12,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn đang xếp hàng mua cà phê và có người chen ngang. Bạn sẽ:',
    question_en: 'You are queuing for coffee and someone cuts in line. You will:',
    options: [
      { id: 'a', text_vi: 'Nói ngay: "Xin lỗi, tôi đến trước, vui lòng xếp hàng."', text_en: 'Say immediately: "Excuse me, I was here first, please queue."', disc: 'D' },
      { id: 'b', text_vi: 'Nhìn người phía sau, cười nhẹ rồi nói: "Hình như bạn quên nhìn hàng rồi."', text_en: 'Look at the person behind you, smile and say: "Seems like you missed the queue."', disc: 'I' },
      { id: 'c', text_vi: 'Không nói gì, đợi thêm chút cũng không sao, tránh gây mâu thuẫn.', text_en: 'Say nothing, waiting a bit more is fine, avoid causing conflict.', disc: 'S' },
      { id: 'd', text_vi: 'Nhẹ nhàng nhắc: "Hàng bắt đầu từ phía kia", chỉ rõ vị trí cuối hàng.', text_en: 'Gently point out: "The queue starts over there", indicating the end of the line.', disc: 'C' }
    ]
  },
  {
    id: 13,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Team bạn vừa mắc một lỗi lớn ảnh hưởng đến khách hàng. Bạn phản ứng thế nào?',
    question_en: 'Your team just made a major mistake affecting a customer. How do you react?',
    options: [
      { id: 'a', text_vi: 'Lập tức họp khẩn, phân công ai xử lý gì, yêu cầu khắc phục trong 24h.', text_en: 'Immediately call an emergency meeting, assign responsibilities, demand resolution in 24h.', disc: 'D' },
      { id: 'b', text_vi: 'Gọi điện xin lỗi khách hàng trước, dùng mối quan hệ để giữ chân họ.', text_en: 'Call to apologize to the customer first, use relationships to retain them.', disc: 'I' },
      { id: 'c', text_vi: 'Động viên team đừng hoang mang, cùng nhau từng bước khắc phục.', text_en: 'Reassure the team not to panic, work through the fix step by step together.', disc: 'S' },
      { id: 'd', text_vi: 'Truy tìm nguyên nhân gốc rễ trước, viết báo cáo sự cố và đề xuất quy trình chống tái phát.', text_en: 'Find the root cause first, write an incident report and propose prevention procedures.', disc: 'C' }
    ]
  },
  {
    id: 14,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn thân tâm sự đang buồn vì chuyện cá nhân. Bạn thường:',
    question_en: 'Your close friend confides they are upset about a personal matter. You usually:',
    options: [
      { id: 'a', text_vi: 'Đưa ra lời khuyên cụ thể: "Theo mình, bạn nên làm thế này..."', text_en: 'Give specific advice: "In my opinion, you should do this..."', disc: 'D' },
      { id: 'b', text_vi: 'Rủ đi ăn hoặc đi chơi đâu đó để bạn quên bớt phiền muộn.', text_en: 'Invite them to eat or go somewhere to take their mind off things.', disc: 'I' },
      { id: 'c', text_vi: 'Ngồi lắng nghe cho đến khi bạn ấy nói hết, không ngắt lời.', text_en: 'Sit and listen until they finish, without interrupting.', disc: 'S' },
      { id: 'd', text_vi: 'Phân tích tình hình, giúp bạn nhìn nhận vấn đề từ nhiều góc khác.', text_en: 'Analyze the situation, help them see the problem from multiple angles.', disc: 'C' }
    ]
  },
  {
    id: 15,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn được đề bạt làm trưởng nhóm mới. Tuần đầu tiên bạn sẽ ưu tiên:',
    question_en: 'You are promoted to lead a new team. Your first week, you prioritize:',
    options: [
      { id: 'a', text_vi: 'Đặt mục tiêu rõ ràng cho team, ai không theo được thì cần thay đổi.', text_en: 'Set clear goals for the team, those who cannot keep up need to change.', disc: 'D' },
      { id: 'b', text_vi: 'Ăn trưa cùng từng thành viên, tạo mối quan hệ cá nhân trước.', text_en: 'Have lunch with each member individually, build personal connections first.', disc: 'I' },
      { id: 'c', text_vi: 'Quan sát cách team đang vận hành, lắng nghe trước khi thay đổi bất cứ điều gì.', text_en: 'Observe how the team currently operates, listen before changing anything.', disc: 'S' },
      { id: 'd', text_vi: 'Xem lại quy trình, KPI và báo cáo hiệu suất cũ để hiểu thực trạng.', text_en: 'Review processes, KPIs and past performance reports to understand the current state.', disc: 'C' }
    ]
  },
  {
    id: 16,
    context: 'life',
    type: 'situation',
    consistencyGroup: 'B',
    question_vi: 'Nếu phải mô tả bản thân bằng 1 câu, bạn sẽ chọn câu nào?',
    question_en: 'If you had to describe yourself in one sentence, which would you choose?',
    options: [
      { id: 'a', text_vi: '"Mình thích được giao việc khó, vì đó là cách mình biết mình đang tiến lên."', text_en: '"I like being given tough challenges, that is how I know I am moving forward."', disc: 'D' },
      { id: 'b', text_vi: '"Mình làm gì cũng vui hơn khi có người cùng, một mình thì chán."', text_en: '"Everything is more fun with company, doing things alone is boring."', disc: 'I' },
      { id: 'c', text_vi: '"Mình thích cuộc sống có nhịp ổn định, không quá nhiều bất ngờ."', text_en: '"I prefer a steady rhythm in life, not too many surprises."', disc: 'S' },
      { id: 'd', text_vi: '"Mình hay suy nghĩ nhiều trước khi hành động, vì sai rồi sửa rất mệt."', text_en: '"I tend to think a lot before acting, because fixing mistakes is tiring."', disc: 'C' }
    ]
  },
  {
    id: 17,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Trong buổi training, trainer hỏi ai muốn thử demo trước cả nhóm. Bạn:',
    question_en: 'During a training, the trainer asks who wants to demo in front of everyone. You:',
    options: [
      { id: 'a', text_vi: 'Giơ tay đầu tiên, coi đó là cơ hội thể hiện.', text_en: 'Raise your hand first, see it as a chance to stand out.', disc: 'D' },
      { id: 'b', text_vi: 'Xung phong nếu thấy không ai lên, muốn bầu không khí đỡ ngại.', text_en: 'Volunteer if nobody steps up, wanting to break the awkward silence.', disc: 'I' },
      { id: 'c', text_vi: 'Chờ xem ai khác lên trước, nếu cần thì mình sẽ lên sau.', text_en: 'Wait for someone else to go first, if needed you will go later.', disc: 'S' },
      { id: 'd', text_vi: 'Muốn xem người khác demo trước để rút kinh nghiệm cho lượt mình.', text_en: 'Want to watch others demo first to learn from their mistakes.', disc: 'C' }
    ]
  },
  {
    id: 18,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Khi đi du lịch, điều khiến bạn khó chịu nhất là gì?',
    question_en: 'When traveling, what annoys you the most?',
    options: [
      { id: 'a', text_vi: 'Phải chờ đợi quá lâu hoặc phụ thuộc vào người khác quyết định.', text_en: 'Having to wait too long or depending on others to decide.', disc: 'D' },
      { id: 'b', text_vi: 'Đi cùng nhóm mà ai cũng im lặng, không ai nói chuyện.', text_en: 'Traveling with a group where everyone is silent, nobody talks.', disc: 'I' },
      { id: 'c', text_vi: 'Lịch trình thay đổi liên tục, không biết trước mình sẽ đi đâu.', text_en: 'The itinerary keeps changing, not knowing where you will go next.', disc: 'S' },
      { id: 'd', text_vi: 'Đặt phòng sai, tính tiền nhầm, hoặc thông tin tour không đúng thực tế.', text_en: 'Wrong room booking, billing errors, or tour info not matching reality.', disc: 'C' }
    ]
  },
  {
    id: 19,
    context: 'work',
    type: 'situation',
    consistencyGroup: 'C',
    question_vi: 'Bạn nhận ra quy trình công ty đang có bất cập. Bạn sẽ:',
    question_en: 'You realize a company process has flaws. You will:',
    options: [
      { id: 'a', text_vi: 'Đề xuất thay đổi ngay với sếp, sẵn sàng tự tay triển khai luôn.', text_en: 'Propose changes to the boss immediately, ready to implement them yourself.', disc: 'D' },
      { id: 'b', text_vi: 'Bàn với đồng nghiệp trước để gom ý kiến, rồi cùng nhau đề xuất.', text_en: 'Discuss with colleagues first to gather opinions, then propose together.', disc: 'I' },
      { id: 'c', text_vi: 'Ghi nhận nhưng chờ thời điểm phù hợp, không muốn gây xáo trộn.', text_en: 'Note it but wait for the right time, not wanting to cause disruption.', disc: 'S' },
      { id: 'd', text_vi: 'Viết một bản phân tích chi tiết: vấn đề ở đâu, tác động thế nào, cách khắc phục.', text_en: 'Write a detailed analysis: where the problem is, its impact, how to fix it.', disc: 'C' }
    ]
  },
  {
    id: 20,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn đang học một kỹ năng mới (nấu ăn, đàn, thiết kế...). Cách học của bạn:',
    question_en: 'You are learning a new skill (cooking, music, design...). Your learning style:',
    options: [
      { id: 'a', text_vi: 'Bắt tay làm luôn, sai đâu sửa đó, học từ thực hành.', text_en: 'Jump in and do it, fix mistakes as they come, learn by doing.', disc: 'D' },
      { id: 'b', text_vi: 'Tham gia lớp học nhóm hoặc cộng đồng, vừa học vừa trao đổi.', text_en: 'Join a group class or community, learn and exchange at the same time.', disc: 'I' },
      { id: 'c', text_vi: 'Theo một khóa học bài bản, học từ cơ bản đến nâng cao theo trình tự.', text_en: 'Follow a structured course, learn from basics to advanced in order.', disc: 'S' },
      { id: 'd', text_vi: 'Đọc sách, xem tutorial, ghi chú kỹ trước khi thực hành lần đầu.', text_en: 'Read books, watch tutorials, take detailed notes before practicing for the first time.', disc: 'C' }
    ]
  },
  {
    id: 21,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Công ty cắt giảm ngân sách, team bạn phải bỏ bớt 1 dự án. Bạn ưu tiên:',
    question_en: 'The company cuts budget, your team must drop 1 project. You prioritize:',
    options: [
      { id: 'a', text_vi: 'Giữ dự án nào tạo ra doanh thu nhanh nhất, cắt dự án chậm kết quả.', text_en: 'Keep the project that generates revenue fastest, cut the slow one.', disc: 'D' },
      { id: 'b', text_vi: 'Hỏi ý kiến cả team xem dự án nào mọi người tâm huyết nhất.', text_en: 'Ask the whole team which project they are most passionate about.', disc: 'I' },
      { id: 'c', text_vi: 'Giữ dự án ít rủi ro hơn, đảm bảo team không bị áp lực quá lớn.', text_en: 'Keep the lower-risk project, ensure the team is not under too much pressure.', disc: 'S' },
      { id: 'd', text_vi: 'Phân tích ROI của cả hai, so sánh chi phí và lợi ích bằng con số.', text_en: 'Analyze ROI of both, compare costs and benefits with numbers.', disc: 'C' }
    ]
  },
  {
    id: 22,
    context: 'life',
    type: 'situation',
    consistencyGroup: 'C',
    question_vi: 'Bạn và người yêu/gia đình có bất đồng về một quyết định lớn. Bạn thường:',
    question_en: 'You and your partner/family disagree on a big decision. You usually:',
    options: [
      { id: 'a', text_vi: 'Trình bày quan điểm rõ ràng và bảo vệ ý kiến của mình đến cùng.', text_en: 'Present your viewpoint clearly and defend your opinion to the end.', disc: 'D' },
      { id: 'b', text_vi: 'Nói chuyện cởi mở, dùng sự hài hước để giảm căng thẳng.', text_en: 'Talk openly, use humor to ease the tension.', disc: 'I' },
      { id: 'c', text_vi: 'Nhượng bộ một phần để giữ hòa khí, không muốn mối quan hệ bị ảnh hưởng.', text_en: 'Compromise partially to keep the peace, not wanting the relationship affected.', disc: 'S' },
      { id: 'd', text_vi: 'Liệt kê ưu nhược điểm từng phương án, cùng nhau đánh giá từng điểm.', text_en: 'List pros and cons of each option, evaluate each point together.', disc: 'C' }
    ]
  },
  {
    id: 23,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn cần thuyết phục sếp chấp nhận ý tưởng mới. Cách bạn làm:',
    question_en: 'You need to convince your boss to accept a new idea. Your approach:',
    options: [
      { id: 'a', text_vi: 'Trình bày ngắn gọn: đây là ý tưởng, đây là lợi ích, đây là cách triển khai.', text_en: 'Present concisely: here is the idea, the benefit, the implementation plan.', disc: 'D' },
      { id: 'b', text_vi: 'Kể câu chuyện về một case study thành công tương tự để sếp hứng thú.', text_en: 'Tell a story about a similar success case to get the boss excited.', disc: 'I' },
      { id: 'c', text_vi: 'Hỏi ý sếp trước để hiểu mối quan tâm, rồi điều chỉnh đề xuất cho phù hợp.', text_en: 'Ask the boss first to understand concerns, then adjust the proposal accordingly.', disc: 'S' },
      { id: 'd', text_vi: 'Chuẩn bị tài liệu chi tiết, số liệu chứng minh, và dự toán ngân sách.', text_en: 'Prepare detailed documents, supporting data, and budget estimates.', disc: 'C' }
    ]
  },
  {
    id: 24,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Tình huống: Wi-Fi nhà bạn đột ngột mất. Bạn xử lý ra sao?',
    question_en: 'Situation: Your home Wi-Fi suddenly goes out. How do you handle it?',
    options: [
      { id: 'a', text_vi: 'Gọi ngay hotline, yêu cầu kỹ thuật viên đến sửa trong ngày.', text_en: 'Call the hotline immediately, demand a technician come fix it today.', disc: 'D' },
      { id: 'b', text_vi: 'Hỏi hàng xóm xin mật khẩu Wi-Fi tạm, tranh thủ trò chuyện luôn.', text_en: 'Ask the neighbor for temporary Wi-Fi, take the chance to chat too.', disc: 'I' },
      { id: 'c', text_vi: 'Thử tắt mở lại router, chờ 15 phút xem có tự kết nối lại không.', text_en: 'Try restarting the router, wait 15 minutes to see if it reconnects.', disc: 'S' },
      { id: 'd', text_vi: 'Kiểm tra đèn trên router, test từng cổng, google lỗi cụ thể để tự sửa.', text_en: 'Check the router lights, test each port, google the specific error to fix it yourself.', disc: 'C' }
    ]
  },
  {
    id: 25,
    context: 'work',
    type: 'situation',
    consistencyGroup: 'D',
    question_vi: 'Bạn nhận được email từ phòng ban khác phê bình kết quả công việc của team bạn. Bạn:',
    question_en: 'You receive an email from another department criticizing your team\'s work. You:',
    options: [
      { id: 'a', text_vi: 'Reply ngay lập tức, bảo vệ team và yêu cầu họ chỉ ra bằng chứng cụ thể.', text_en: 'Reply immediately, defend the team and demand they provide specific evidence.', disc: 'D' },
      { id: 'b', text_vi: 'Gọi điện trực tiếp cho người gửi để nói chuyện cho rõ, tránh hiểu lầm qua email.', text_en: 'Call the sender directly to talk it through, avoid misunderstanding via email.', disc: 'I' },
      { id: 'c', text_vi: 'Đọc kỹ email, hỏi ý kiến team trước, rồi mới trả lời sau khi bình tĩnh.', text_en: 'Read the email carefully, consult the team first, then reply after calming down.', disc: 'S' },
      { id: 'd', text_vi: 'Kiểm tra lại toàn bộ dữ liệu và quy trình để xem lời phê bình có đúng không.', text_en: 'Review all data and processes to check if the criticism is valid.', disc: 'C' }
    ]
  },
  {
    id: 26,
    context: 'life',
    type: 'situation',
    consistencyGroup: 'D',
    question_vi: 'Nếu được chọn, bạn muốn sống ở nơi nào nhất?',
    question_en: 'If you could choose, where would you most want to live?',
    options: [
      { id: 'a', text_vi: 'Thành phố lớn, nhiều cơ hội, nhịp sống nhanh.', text_en: 'A big city, lots of opportunities, fast-paced life.', disc: 'D' },
      { id: 'b', text_vi: 'Nơi có cộng đồng sôi động, nhiều quán café, sự kiện và lễ hội.', text_en: 'A place with a vibrant community, cafes, events and festivals.', disc: 'I' },
      { id: 'c', text_vi: 'Vùng yên tĩnh, gần thiên nhiên, cuộc sống chậm rãi.', text_en: 'A quiet area, close to nature, slow-paced living.', disc: 'S' },
      { id: 'd', text_vi: 'Nơi an ninh tốt, cơ sở hạ tầng hiện đại, dịch vụ công đáng tin cậy.', text_en: 'A place with good security, modern infrastructure, reliable public services.', disc: 'C' }
    ]
  },
  {
    id: 27,
    context: 'work',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Bạn vừa hoàn thành một công việc quan trọng. Điều bạn muốn nhất lúc này:',
    question_en: 'You just completed an important task. What you want most right now:',
    options: [
      { id: 'a', text_vi: 'Biết kết quả ngay — thành công hay thất bại, đừng để mình chờ đợi.', text_en: 'Know the result immediately — success or failure, don\'t make me wait.', disc: 'D' },
      { id: 'b', text_vi: 'Được sếp hoặc đồng nghiệp công nhận và khen ngợi trước mọi người.', text_en: 'Be recognized and praised by the boss or colleagues in front of everyone.', disc: 'I' },
      { id: 'c', text_vi: 'Nghỉ ngơi một chút, cảm giác nhẹ nhõm vì đã hoàn thành đúng hạn.', text_en: 'Rest a bit, feel relieved that it was completed on time.', disc: 'S' },
      { id: 'd', text_vi: 'Tự review lại một lần nữa trước khi nộp, đảm bảo không có lỗi nào.', text_en: 'Self-review one more time before submitting, ensuring there are no errors.', disc: 'C' }
    ]
  },
  {
    id: 28,
    context: 'life',
    type: 'situation',
    consistencyGroup: null,
    question_vi: 'Cuối năm nhìn lại, điều gì khiến bạn cảm thấy mình đã sống tốt năm nay?',
    question_en: 'Looking back at year end, what makes you feel you lived well this year?',
    options: [
      { id: 'a', text_vi: 'Đạt được mục tiêu lớn mình đã đặt ra từ đầu năm.', text_en: 'Achieved the big goal I set at the beginning of the year.', disc: 'D' },
      { id: 'b', text_vi: 'Có thêm nhiều mối quan hệ mới, trải nghiệm nhiều điều thú vị.', text_en: 'Made many new connections, experienced lots of interesting things.', disc: 'I' },
      { id: 'c', text_vi: 'Gia đình và các mối quan hệ thân thiết đều ổn, không có biến cố.', text_en: 'Family and close relationships are all stable, no major disruptions.', disc: 'S' },
      { id: 'd', text_vi: 'Tài chính ổn, kế hoạch theo đúng dự kiến, mọi thứ trong tầm kiểm soát.', text_en: 'Finances stable, plans on track, everything under control.', disc: 'C' }
    ]
  }
];

// Consistency pair definitions (questions that test the same trait)
const CONSISTENCY_PAIRS = [
  { group: 'A', questions: [3, 11] },
  { group: 'B', questions: [8, 16] },
  { group: 'C', questions: [19, 22] },
  { group: 'D', questions: [25, 26] }
];
