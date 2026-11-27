// public/js/grade1Generators.js
(function () {
  const t = (vi, en) => (localStorage.getItem('mathpro_lang') === 'en' ? en : vi);

  window.GRADE1_TOPICS = [
    { code:'A', title:t('Đếm & Quy luật số','Counting & Number Patterns'), skills:[{id:'g1-a-1',title:t('Đếm đồ vật đến 20','Count objects up to 20'),free:true,type:'count_objects',max:20},{id:'g1-a-2',title:t('Đếm cách 2, 5, 10 đến 100','Skip-count by 2, 5, 10 to 100'),free:false,type:'skip_count',max:100}] },
    { code:'B', title:t('Hiểu về phép cộng','Understanding Addition'), skills:[{id:'g1-b-1',title:t('Cộng bằng hình ảnh trong phạm vi 10','Add with pictures within 10'),free:true,type:'add_visual',max:10},{id:'g1-b-2',title:t('Viết phép cộng tương ứng','Addition sentences within 10'),free:false,type:'add',max:10}] },
    { code:'C', title:t('Kỹ năng cộng cơ bản','Addition Builders'), skills:[{id:'g1-c-1',title:t('Cộng với 0, 1, 2','Add 0, 1, 2'),free:false,type:'add_small',max:12},{id:'g1-c-2',title:t('Cộng tạo thành 10','Make 10'),free:false,type:'make_ten',max:10}] },
    { code:'D', title:t('Chiến lược tính cộng','Addition Strategies'), skills:[{id:'g1-d-1',title:t('Cộng hai số giống nhau','Add doubles'),free:false,type:'doubles',max:10},{id:'g1-d-2',title:t('Cộng 3 số có 1 chữ số','Add three 1-digit numbers'),free:false,type:'add_three',max:18}] },
    { code:'E', title:t('Phép cộng phạm vi 20','Addition within 20'), skills:[{id:'g1-e-1',title:t('Cộng qua 10 trong phạm vi 20','Add across 10 within 20'),free:false,type:'add',max:20},{id:'g1-e-2',title:t('Tìm số còn thiếu trong phép cộng','Complete the addition sentence'),free:false,type:'missing_add',max:20}] },
    { code:'F', title:t('Toán đố phép cộng','Addition Word Problems'), skills:[{id:'g1-f-1',title:t('Bài toán có lời văn (Phạm vi 10)','Addition word problems (within 10)'),free:false,type:'word_add',max:10},{id:'g1-f-2',title:t('Bài toán có lời văn (Phạm vi 20)','Addition word problems (within 20)'),free:false,type:'word_add',max:20}] },
    { code:'G', title:t('Hiểu về phép trừ','Understanding Subtraction'), skills:[{id:'g1-g-1',title:t('Trừ trong phạm vi 10','Subtract within 10'),free:true,type:'sub',max:10},{id:'g1-g-2',title:t('Trừ với 0 và trừ chính nó','Subtract zero and all'),free:false,type:'sub_zero',max:15}] },
    { code:'H', title:t('Kỹ năng trừ cơ bản','Subtraction Builders'), skills:[{id:'g1-h-1',title:t('Trừ đi 1, 2, 3','Subtract 1, 2, 3'),free:false,type:'sub_small',max:15},{id:'g1-h-2',title:t('Tách 10 để trừ','Make a ten to subtract'),free:false,type:'sub',max:18}] },
    { code:'I', title:t('Chiến lược tính trừ','Subtraction Strategies'), skills:[{id:'g1-i-1',title:t('Liên hệ giữa Cộng và Trừ','Fact families: addition & subtraction'),free:false,type:'fact_family',max:15},{id:'g1-i-2',title:t('Tìm số còn thiếu trong phép trừ','Complete the subtraction sentence'),free:false,type:'missing_sub',max:20}] },
    { code:'J', title:t('Phép trừ phạm vi 20','Subtraction within 20'), skills:[{id:'g1-j-1',title:t('Trừ trong phạm vi 20','Subtract within 20'),free:false,type:'sub',max:20},{id:'g1-j-2',title:t('Cân bằng hai vế phép trừ','Subtraction practice to 20'),free:false,type:'sub',max:20}] },
    { code:'K', title:t('Toán đố phép trừ','Subtraction Word Problems'), skills:[{id:'g1-k-1',title:t('Bài toán bớt đi (Phạm vi 10)','Subtraction word problems (within 10)'),free:false,type:'word_sub',max:10},{id:'g1-k-2',title:t('Bài toán bớt đi (Phạm vi 20)','Subtraction word problems (within 20)'),free:false,type:'word_sub',max:20}] },
    { code:'L', title:t('Phép tính hỗn hợp','Mixed Operations'), skills:[{id:'g1-l-1',title:t('Chọn dấu + hoặc - thích hợp','Choose + or - sign'),free:false,type:'pick_sign',max:20},{id:'g1-l-2',title:t('Tính giá trị biểu thức 2 bước','Add and subtract: two-step'),free:false,type:'mixed_two_step',max:20}] },
    { code:'M', title:t('Hàng chục & Hàng đơn vị','Place Value: Tens & Ones'), skills:[{id:'g1-m-1',title:t('Phân tích số thành Chục & Đơn vị','Counting tens and ones'),free:false,type:'place_value',max:99},{id:'g1-m-2',title:t('Ghép Chục & Đơn vị thành số','Write numbers as tens and ones'),free:false,type:'compose_tens',max:99}] },
    { code:'N', title:t('So sánh số','Comparing Numbers'), skills:[{id:'g1-n-1',title:t('So sánh hai số đến 100 (<, >, =)','Compare numbers up to 100'),free:false,type:'compare',max:99},{id:'g1-n-2',title:t('Tìm số lớn nhất / nhỏ nhất','Greatest and least numbers'),free:false,type:'min_max',max:99}] },
    { code:'O', title:t('Số chẵn, Số lẻ & Ước lượng','Even, Odd & Estimation'), skills:[{id:'g1-o-1',title:t('Nhận biết số chẵn, số lẻ','Even or odd numbers'),free:false,type:'even_odd',max:50},{id:'g1-o-2',title:t('Làm tròn đến hàng chục gần nhất','Estimate to the nearest ten'),free:false,type:'round_ten',max:99}] },
    { code:'P', title:t('Đo lường','Measurement'), skills:[{id:'g1-p-1',title:t('Đo độ dài bằng xăng-ti-mét (cm)','Measure length in centimeters'),free:false,type:'measure_cm',max:30},{id:'g1-p-2',title:t('So sánh dài hơn / ngắn hơn','Compare lengths'),free:false,type:'measure_compare',max:50}] },
    { code:'Q', title:t('Thời gian & Đồng hồ','Time & Clocks'), skills:[{id:'g1-q-1',title:t('Xem giờ đúng','Read clocks: exact hours'),free:false,type:'clock_full',max:12},{id:'g1-q-2',title:t('Xem giờ rưỡi','Read clocks: half hours'),free:false,type:'clock_half',max:12}] },
    { code:'R', title:t('Tiền tệ cơ bản','Money'), skills:[{id:'g1-r-1',title:t('Cộng giá trị tiền','Add money amounts'),free:false,type:'money_add',max:20},{id:'g1-r-2',title:t('Tính tiền thừa khi mua hàng','Making change'),free:false,type:'money_change',max:20}] },
    { code:'S', title:t('Dữ liệu & Biểu đồ','Data & Graphs'), skills:[{id:'g1-s-1',title:t('Đọc số liệu từ bảng kiểm đếm','Interpret tally charts'),free:false,type:'tally_read',max:15},{id:'g1-s-2',title:t('So sánh nhiều hơn / ít hơn trên biểu đồ','Interpret bar graphs'),free:false,type:'chart_diff',max:15}] },
    { code:'T', title:t('Hình phẳng 2D','Two-Dimensional Shapes'), skills:[{id:'g1-t-1',title:t('Nhận biết hình tròn, vuông, tam giác','Name the 2D shape'),free:true,type:'shapes_2d',max:4},{id:'g1-t-2',title:t('Đếm số cạnh và đỉnh của hình 2D','Count sides and vertices'),free:false,type:'shapes_sides',max:6}] },
    { code:'U', title:t('Hình khối 3D','Three-Dimensional Shapes'), skills:[{id:'g1-u-1',title:t('Nhận biết khối lập phương, khối cầu, khối trụ','Name the 3D shape'),free:false,type:'shapes_3d',max:4},{id:'g1-u-2',title:t('Đồ vật thực tế dạng khối 3D','Shapes of everyday objects'),free:false,type:'shapes_3d_real',max:4}] },
    { code:'V', title:t('Phân số cơ bản','Basic Fractions'), skills:[{id:'g1-v-1',title:t('Nhận biết một nửa (1/2)','Halves (1/2)'),free:false,type:'fraction_half',max:20},{id:'g1-v-2',title:t('Nhận biết một phần tư (1/4)','Fourths (1/4)'),free:false,type:'fraction_quarter',max:20}] }
  ];

  window.generateGrade1Question = function (type, max = 20) {
    const rand = (min, m) => Math.floor(Math.random() * (m - min + 1)) + min;
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const makeOpts = (ansStr, candidates) => {
      const set = new Set([String(ansStr)]);
      for (const c of candidates) { if (set.size >= 4) break; set.add(String(c)); }
      let fb = 1; while (set.size < 4) set.add(String(fb++));
      return shuffle([...set]);
    };

    switch (type) {
      case 'count_objects': { const c=rand(4,Math.min(max,15)), ic=['🍎','⭐','🚗','🎈','🐥'][rand(0,4)], ans=String(c); return { q:t(`Đếm xem có bao nhiêu hình: ${ic.repeat(c)}`,`How many items are there? ${ic.repeat(c)}`), opts:makeOpts(ans,[c+1,c-1,c+2]), ans }; }
      case 'skip_count': { const st=[2,5,10][rand(0,2)], s=st*rand(1,5), ans=String(s+st*3); return { q:t(`Điền số tiếp theo vào dãy: ${s}, ${s+st}, ${s+st*2}, ___`,`What number comes next? ${s}, ${s+st}, ${s+st*2}, ___`), opts:makeOpts(ans,[s+st*3+1,s+st*2+1,s+st*4]), ans }; }
      case 'add_visual': { const a=rand(1,5), b=rand(1,5), ans=String(a+b); return { q:`🍎`.repeat(a)+` + `+`🍎`.repeat(b)+` = ?`, opts:makeOpts(ans,[a+b+1,a+b-1,a+b+2]), ans }; }
      case 'add': { const a=rand(2,Math.floor(max/2)), b=rand(2,max-a), ans=String(a+b); return { q:t(`Tính: ${a} + ${b} = ?`,`Add: ${a} + ${b} = ?`), opts:makeOpts(ans,[a+b+1,a+b-1,a+b+2]), ans }; }
      case 'add_small': { const a=rand(1,9), b=rand(0,2), ans=String(a+b); return { q:t(`Tính nhẩm: ${a} + ${b} = ?`,`Mental math: ${a} + ${b} = ?`), opts:makeOpts(ans,[a+b+1,Math.max(0,a+b-1),a+b+2]), ans }; }
      case 'make_ten': { const a=rand(1,9), ans=String(10-a); return { q:`${a} + ___ = 10`, opts:makeOpts(ans,[10-a+1,Math.max(0,10-a-1),10]), ans }; }
      case 'doubles': { const a=rand(1,max), ans=String(a+a); return { q:t(`Tính: ${a} + ${a} = ?`,`Add doubles: ${a} + ${a} = ?`), opts:makeOpts(ans,[a+a+2,a+a-1,a+a+1]), ans }; }
      case 'add_three': { const a=rand(1,6), b=rand(1,6), c=rand(1,6), ans=String(a+b+c); return { q:t(`Tính: ${a} + ${b} + ${c} = ?`,`Add: ${a} + ${b} + ${c} = ?`), opts:makeOpts(ans,[a+b+c+1,a+b+c-1,a+b+c+2]), ans }; }
      case 'missing_add': { const a=rand(2,10), tot=rand(a+1,max), ans=String(tot-a); return { q:t(`Tìm số còn thiếu: ${a} + ___ = ${tot}`,`Find the missing number: ${a} + ___ = ${tot}`), opts:makeOpts(ans,[tot-a+1,tot-a-1,tot+a]), ans }; }
      case 'word_add': { const a=rand(2,Math.floor(max/2)), b=rand(2,max-a), ans=String(a+b); return { q:t(`Lan có ${a} cái kẹo, mẹ cho thêm ${b} cái. Hỏi Lan có tất cả bao nhiêu cái kẹo?`,`Emma has ${a} candies and gets ${b} more. How many candies does she have in all?`), opts:makeOpts(ans,[a+b+1,a+b-1,a+b+2]), ans }; }
      case 'sub': { const a=rand(4,max), b=rand(1,a-1), ans=String(a-b); return { q:t(`Tính: ${a} - ${b} = ?`,`Subtract: ${a} - ${b} = ?`), opts:makeOpts(ans,[a-b+1,Math.max(0,a-b-1),a-b+2]), ans }; }
      case 'sub_zero': { const a=rand(2,max), b=rand(0,1)===0?0:a, ans=String(a-b); return { q:t(`Tính nhanh: ${a} - ${b} = ?`,`Mental math: ${a} - ${b} = ?`), opts:makeOpts(ans,[a,b,1]), ans }; }
      case 'sub_small': { const a=rand(4,max), b=rand(1,3), ans=String(a-b); return { q:t(`Tính: ${a} - ${b} = ?`,`Subtract: ${a} - ${b} = ?`), opts:makeOpts(ans,[a-b+1,a-b-1,a-b+2]), ans }; }
      case 'fact_family': { const a=rand(2,8), b=rand(2,7), sum=a+b, ans=String(b); return { q:t(`Biết ${a} + ${b} = ${sum}. Vậy ${sum} - ${a} = ?`,`If ${a} + ${b} = ${sum}, then ${sum} - ${a} = ?`), opts:makeOpts(ans,[a,sum,b+1]), ans }; }
      case 'missing_sub': { const b=rand(1,9), res=rand(1,10), a=b+res, ans=String(b); return { q:t(`Tìm số còn thiếu: ${a} - ___ = ${res}`,`Find the missing number: ${a} - ___ = ${res}`), opts:makeOpts(ans,[b+1,Math.max(0,b-1),res]), ans }; }
      case 'word_sub': { const a=rand(6,max), b=rand(1,a-1), ans=String(a-b); return { q:t(`Trên cành có ${a} con chim, bay đi ${b} con. Hỏi còn lại mấy con chim?`,`There are ${a} birds on a branch. ${b} fly away. How many birds are left?`), opts:makeOpts(ans,[a-b+1,Math.max(0,a-b-1),a+b]), ans }; }
      case 'pick_sign': { const isAdd=rand(0,1)===0, a=rand(3,10), b=rand(1,isAdd?9:a-1), res=isAdd?a+b:a-b, ans=isAdd?'+':'-'; return { q:t(`Chọn dấu đúng: ${a} ___ ${b} = ${res}`,`Choose the correct sign: ${a} ___ ${b} = ${res}`), opts:['+','-'], ans }; }
      case 'mixed_two_step': { const a=rand(4,10), b=rand(1,5), c=rand(1,4), ans=String(a+b-c); return { q:t(`Tính: ${a} + ${b} - ${c} = ?`,`Calculate: ${a} + ${b} - ${c} = ?`), opts:makeOpts(ans,[a+b-c+1,a+b-c-1,a+b+c]), ans }; }
      case 'place_value': { const te=rand(1,9), o=rand(0,9), ans=t(`${te} chục, ${o} đơn vị`,`${te} tens, ${o} ones`); return { q:t(`Số ${te*10+o} gồm mấy chục và mấy đơn vị?`,`What is the place value of ${te*10+o}?`), opts:shuffle([ans,t(`${o} chục, ${te} đơn vị`,`${o} tens, ${te} ones`),t(`${te*10} chục, ${o} đơn vị`,`${te*10} tens, ${o} ones`)]), ans }; }
      case 'compose_tens': { const te=rand(1,9), o=rand(1,9), ans=String(te*10+o); return { q:t(`Số gồm ${te} chục và ${o} đơn vị là số nào?`,`Which number has ${te} tens and ${o} ones?`), opts:makeOpts(ans,[o*10+te,te+o,(te+1)*10+o]), ans }; }
      case 'compare': { const a=rand(10,99), b=rand(10,99), ans=a<b?'<':(a>b?'>':'='); return { q:t(`Chọn dấu thích hợp: ${a} ___ ${b}`,`Compare: ${a} ___ ${b}`), opts:['<','>','='], ans }; }
      case 'min_max': { const u=[...new Set([rand(10,30),rand(31,60),rand(61,95),rand(15,85)])], isM=rand(0,1)===0, ans=String(isM?Math.max(...u):Math.min(...u)); return { q:t(`Số nào ${isM?'LỚN NHẤT':'NHỎ NHẤT'} trong các số: ${u.join(', ')}?`,`Which number is the ${isM?'GREATEST':'LEAST'}: ${u.join(', ')}?`), opts:u.map(String), ans }; }
      case 'even_odd': { const n=rand(2,max), ans=n%2===0?t('Số chẵn','Even'):t('Số lẻ','Odd'); return { q:t(`Số ${n} là số chẵn hay số lẻ?`,`Is ${n} even or odd?`), opts:[t('Số chẵn','Even'),t('Số lẻ','Odd')], ans }; }
      case 'round_ten': { const n=rand(11,89), ans=String(Math.round(n/10)*10); return { q:t(`Số ${n} gần với số tròn chục nào nhất?`,`Round ${n} to the nearest ten:`), opts:makeOpts(ans,[Math.floor(n/10)*10,Math.ceil(n/10)*10,Math.round(n/10)*10+10]), ans }; }
      case 'measure_cm': { const a=rand(3,15), b=rand(2,10), ans=`${a+b} cm`; return { q:t(`Băng giấy dài ${a} cm nối thêm ${b} cm nữa thì dài bao nhiêu?`,`A ribbon of ${a} cm is joined with ${b} cm. What is the total length?`), opts:shuffle([ans,`${a+b+2} cm`,`${Math.abs(a-b)} cm`,`${a+b-1} cm`]), ans }; }
      case 'measure_compare': { const a=rand(10,25), b=rand(5,a-1), ans=`${a-b} cm`; return { q:t(`Bút chì dài ${a} cm, tẩy dài ${b} cm. Bút chì dài hơn tẩy bao nhiêu cm?`,`A pencil is ${a} cm long and an eraser is ${b} cm long. How much longer is the pencil?`), opts:shuffle([ans,`${a+b} cm`,`${a-b+1} cm`,`${a-b+2} cm`]), ans }; }
      case 'clock_full': { const h=rand(1,12), ans=t(`${h} giờ`,`${h}:00`); return { q:t(`Kim ngắn chỉ số ${h}, kim dài chỉ số 12 là mấy giờ?`,`The hour hand points to ${h} and the minute hand points to 12. What time is it?`), opts:makeOpts(ans,[t(`${(h%12)+1} giờ`,`${(h%12)+1}:00`),t(`${((h+2)%12)+1} giờ`,`${((h+2)%12)+1}:00`),t('12 giờ','12:00')]), ans }; }
      case 'clock_half': { const h=rand(1,12), ans=t(`${h} giờ 30 phút`,`${h}:30`); return { q:t(`Kim ngắn qua số ${h} một chút, kim dài chỉ số 6 là mấy giờ?`,`The hour hand is past ${h} and the minute hand points to 6. What time is it?`), opts:shuffle([ans,t(`${h} giờ đúng`,`${h}:00`),t(`${(h%12)+1} giờ 30 phút`,`${(h%12)+1}:30`),t('6 giờ','6:00')]), ans }; }
      case 'money_add': { const a=rand(1,10), b=rand(1,10), u=t('nghìn đồng','$'), ans=t(`${a+b} nghìn đồng`,`$${a+b}`); return { q:t(`Lan có ${a} nghìn đồng, Bình có ${b} nghìn đồng. Cả hai bạn có bao nhiêu?`,`Leo has $${a} and Mia has $${b}. How much money do they have together?`), opts:shuffle([ans,t(`${a+b+1} ${u}`,`$${a+b+1}`),t(`${a+b-1} ${u}`,`$${a+b-1}`),t(`${a+b+2} ${u}`,`$${a+b+2}`)]), ans }; }
      case 'money_change': { const tot=10, p=rand(2,8), ans=t(`${tot-p} nghìn đồng`,`$${tot-p}`); return { q:t(`Có 10 nghìn đồng, mua bút hết ${p} nghìn đồng. Hỏi còn lại bao nhiêu?`,`You have $10 and buy a pen for $${p}. How much change do you get?`), opts:shuffle([ans,t(`${tot-p+1} nghìn đồng`,`$${tot-p+1}`),t(`${tot-p-1} nghìn đồng`,`$${tot-p-1}`),t(`${p} nghìn đồng`,`$${p}`)]), ans }; }
      case 'tally_read': { const n=rand(3,12), ans=String(n); return { q:t(`Trong bảng kiểm đếm có ${n} vạch ghi số bạn thích môn Toán. Hỏi có mấy bạn?`,`A tally chart shows ${n} tally marks for Math. How many students chose Math?`), opts:makeOpts(ans,[n+1,n-1,n+2]), ans }; }
      case 'chart_diff': { const a=rand(6,14), b=rand(2,a-1), ans=String(a-b); return { q:t(`Biểu đồ cho thấy có ${a} quả cam và ${b} quả táo. Cam nhiều hơn táo mấy quả?`,`A chart shows ${a} oranges and ${b} apples. How many more oranges than apples are there?`), opts:makeOpts(ans,[a+b,a-b+1,Math.max(0,a-b-1)]), ans }; }
      case 'shapes_2d': {
        const opts=[t('Hình vuông','Square'),t('Hình tròn','Circle'),t('Hình tam giác','Triangle'),t('Hình chữ nhật','Rectangle')];
        const bank=[
          { q:t('Hình nào có 3 cạnh và 3 góc?','Which shape has 3 sides and 3 corners?'), ans:t('Hình tam giác','Triangle'), opts },
          { q:t('Hình nào không có cạnh thẳng nào?','Which shape has 0 straight sides?'), ans:t('Hình tròn','Circle'), opts },
          { q:t('Hình nào có 4 cạnh bằng nhau?','Which shape has 4 equal sides?'), ans:t('Hình vuông','Square'), opts }
        ];
        return bank[rand(0,bank.length-1)];
      }
      case 'shapes_sides': {
        const bank=[
          { q:t('Hình tam giác có mấy cạnh?','How many sides does a triangle have?'), ans:t('3 cạnh','3 sides'), opts:[t('2 cạnh','2 sides'),t('3 cạnh','3 sides'),t('4 cạnh','4 sides'),t('5 cạnh','5 sides')] },
          { q:t('Hình vuông có mấy đỉnh?','How many vertices (corners) does a square have?'), ans:t('4 đỉnh','4 vertices'), opts:[t('3 đỉnh','3 vertices'),t('4 đỉnh','4 vertices'),t('5 đỉnh','5 vertices'),t('6 đỉnh','6 vertices')] }
        ];
        return bank[rand(0,bank.length-1)];
      }
      case 'shapes_3d': {
        const opts=[t('Khối lập phương','Cube'),t('Khối cầu','Sphere'),t('Khối trụ','Cylinder'),t('Khối nón','Cone')];
        const bank=[
          { q:t('Hình khối nào có 6 mặt đều là hình vuông?','Which 3D shape has 6 square faces?'), ans:t('Khối lập phương','Cube'), opts },
          { q:t('Hình khối nào lăn được mọi hướng?','Which 3D shape can roll in any direction?'), ans:t('Khối cầu','Sphere'), opts }
        ];
        return bank[rand(0,bank.length-1)];
      }
      case 'shapes_3d_real': {
        const opts=[t('Khối lập phương','Cube'),t('Khối cầu','Sphere'),t('Khối trụ','Cylinder')];
        const bank=[
          { q:t('Quả bóng đá có dạng hình khối gì?','What 3D shape is a soccer ball?'), ans:t('Khối cầu','Sphere'), opts },
          { q:t('Viên xúc xắc có dạng hình khối gì?','What 3D shape is a number cube (die)?'), ans:t('Khối lập phương','Cube'), opts },
          { q:t('Lon sữa có dạng hình khối gì?','What 3D shape is a soup can?'), ans:t('Khối trụ','Cylinder'), opts }
        ];
        return bank[rand(0,bank.length-1)];
      }
      case 'fraction_half': { const n=rand(2,8)*2, ans=String(n/2); return { q:t(`Một nửa (1/2) của ${n} cái bánh là mấy cái bánh?`,`What is half (1/2) of ${n} cookies?`), opts:makeOpts(ans,[n/2+1,n/2-1,n]), ans }; }
      case 'fraction_quarter': { const n=rand(1,5)*4, ans=String(n/4); return { q:t(`Một phần tư (1/4) của ${n} quả táo là mấy quả?`,`What is one fourth (1/4) of ${n} apples?`), opts:makeOpts(ans,[n/4+1,n/2,n]), ans }; }
      default: return { q:t('Tính: 5 + 3 = ?','Add: 5 + 3 = ?'), opts:['7','8','9','10'], ans:'8' };
    }
  };
})();
