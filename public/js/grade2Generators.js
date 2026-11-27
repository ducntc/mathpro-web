// public/js/grade2Generators.js
(function () {
  const t = (vi, en) => (localStorage.getItem('mathpro_lang') === 'en' ? en : vi);

  window.GRADE2_TOPICS = [
    { code:'A', title:t('Đếm & Quy luật số đến 1000','Counting & Patterns up to 1,000'), skills:[{id:'g2-a-1',title:t('Đếm cách 5, 10, 100','Skip-count by 5, 10, 100'),free:true,type:'skip',max:100},{id:'g2-a-2',title:t('Số liền trước, liền sau đến 1000','Before and after numbers to 1,000'),free:false,type:'neighbor',max:999}] },
    { code:'B', title:t('So sánh & Sắp xếp số','Comparing & Ordering Numbers'), skills:[{id:'g2-b-1',title:t('So sánh số có 3 chữ số','Compare 3-digit numbers'),free:true,type:'cmp',max:999},{id:'g2-b-2',title:t('Tìm số lớn nhất / nhỏ nhất','Greatest and least numbers'),free:false,type:'minmax',max:999}] },
    { code:'C', title:t('Số chẵn & Số lẻ','Even & Odd Numbers'), skills:[{id:'g2-c-1',title:t('Nhận biết số chẵn, số lẻ đến 100','Identify even and odd to 100'),free:false,type:'evenodd',max:100},{id:'g2-c-2',title:t('Chẵn và lẻ đến 200','Even and odd to 200'),free:false,type:'evenodd',max:200}] },
    { code:'D', title:t('Cộng nhẩm phạm vi 20','Mental Addition within 20'), skills:[{id:'g2-d-1',title:t('Cộng nhẩm qua 10','Add within 20'),free:false,type:'add',max:20},{id:'g2-d-2',title:t('Tìm số hạng còn thiếu','Find the missing addend'),free:false,type:'miss_add',max:20}] },
    { code:'E', title:t('Trừ nhẩm phạm vi 20','Mental Subtraction within 20'), skills:[{id:'g2-e-1',title:t('Trừ nhẩm qua 10','Subtract within 20'),free:false,type:'sub',max:20},{id:'g2-e-2',title:t('Tìm số bị trừ / số trừ','Complete subtraction sentences'),free:false,type:'miss_sub',max:20}] },
    { code:'F', title:t('Cộng 2 chữ số (Không nhớ)','2-Digit Addition (No Regrouping)'), skills:[{id:'g2-f-1',title:t('Cộng tròn chục','Add multiples of 10'),free:false,type:'add10',max:90},{id:'g2-f-2',title:t('Cộng số có 2 chữ số','Add 2-digit numbers'),free:false,type:'add',max:99}] },
    { code:'G', title:t('Cộng 2 chữ số (Có nhớ)','2-Digit Addition (With Regrouping)'), skills:[{id:'g2-g-1',title:t('Cộng có nhớ phạm vi 100','Add 2-digit numbers with regrouping'),free:true,type:'add',max:99},{id:'g2-g-2',title:t('Toán đố phép cộng có nhớ','Addition word problems'),free:false,type:'word_add',max:99}] },
    { code:'H', title:t('Trừ 2 chữ số (Có nhớ)','2-Digit Subtraction'), skills:[{id:'g2-h-1',title:t('Trừ có nhớ phạm vi 100','Subtract 2-digit numbers'),free:false,type:'sub',max:99},{id:'g2-h-2',title:t('Toán đố phép trừ phạm vi 100','Subtraction word problems'),free:false,type:'word_sub',max:99}] },
    { code:'I', title:t('Cộng số có 3 chữ số','3-Digit Addition'), skills:[{id:'g2-i-1',title:t('Cộng tròn trăm','Add multiples of 100'),free:false,type:'add100',max:900},{id:'g2-i-2',title:t('Cộng số có 3 chữ số','Add 3-digit numbers'),free:false,type:'add',max:999}] },
    { code:'J', title:t('Trừ số có 3 chữ số','3-Digit Subtraction'), skills:[{id:'g2-j-1',title:t('Trừ tròn trăm','Subtract multiples of 100'),free:false,type:'sub100',max:900},{id:'g2-j-2',title:t('Trừ số có 3 chữ số','Subtract 3-digit numbers'),free:false,type:'sub',max:999}] },
    { code:'K', title:t('Cấu tạo số (Trăm, Chục, Đơn vị)','Place Value (Hundreds, Tens, Ones)'), skills:[{id:'g2-k-1',title:t('Phân tích số có 3 chữ số','Place value models up to hundreds'),free:false,type:'place3',max:999},{id:'g2-k-2',title:t('Viết số từ Trăm, Chục, Đơn vị','Convert from expanded form'),free:false,type:'compose3',max:999}] },
    { code:'L', title:t('Phép tính hỗn hợp','Mixed Operations'), skills:[{id:'g2-l-1',title:t('Tính giá trị biểu thức 2 bước','Add and subtract: two-step'),free:false,type:'mixed',max:50},{id:'g2-l-2',title:t('Tìm x cơ bản','Solve for x: addition'),free:false,type:'miss_add',max:50}] },
    { code:'M', title:t('Làm tròn & Ước lượng','Rounding & Estimation'), skills:[{id:'g2-m-1',title:t('Làm tròn đến hàng chục','Round to the nearest ten'),free:false,type:'round10',max:99},{id:'g2-m-2',title:t('Ước lượng đến hàng chục','Estimate to the nearest ten'),free:false,type:'round10',max:99}] },
    { code:'N', title:t('Tiền tệ','Money'), skills:[{id:'g2-n-1',title:t('Cộng trừ mệnh giá tiền','Add money amounts'),free:false,type:'money',max:100},{id:'g2-n-2',title:t('Tính tiền thừa khi mua sắm','Making change'),free:false,type:'money_chg',max:100}] },
    { code:'O', title:t('Thời gian & Lịch','Time & Calendar'), skills:[{id:'g2-o-1',title:t('Xem đồng hồ (15, 30 phút)','Read clocks (15 and 30 minutes)'),free:false,type:'clock',max:12},{id:'g2-o-2',title:t('Đổi ngày, tuần','Days and weeks'),free:false,type:'calendar',max:12}] },
    { code:'P', title:t('Đo độ dài (cm, dm, m)','Length (cm, dm, m)'), skills:[{id:'g2-p-1',title:t('Đổi đơn vị dm sang cm','Convert dm to cm'),free:false,type:'dm_cm',max:20},{id:'g2-p-2',title:t('Đổi đơn vị m sang cm','Convert m to cm'),free:false,type:'m_cm',max:10}] },
    { code:'Q', title:t('Khối lượng & Dung tích','Mass & Capacity'), skills:[{id:'g2-q-1',title:t('Toán đố phép cộng khối lượng/dung tích','Capacity word problems: addition'),free:false,type:'word_add',max:50},{id:'g2-q-2',title:t('Toán đố phép trừ khối lượng/dung tích','Mass word problems: subtraction'),free:false,type:'word_sub',max:50}] },
    { code:'R', title:t('Biểu đồ & Bảng số liệu','Data & Graphs'), skills:[{id:'g2-r-1',title:t('Đọc bảng thống kê','Interpret data charts'),free:false,type:'chart',max:30},{id:'g2-r-2',title:t('Tính hiệu số liệu biểu đồ','Compare chart values'),free:false,type:'chart',max:30}] },
    { code:'S', title:t('Hình học phẳng & Chu vi','Geometry & Perimeter'), skills:[{id:'g2-s-1',title:t('Độ dài đường gấp khúc','Length of broken lines'),free:false,type:'polyline',max:20},{id:'g2-s-2',title:t('Chu vi hình tam giác','Perimeter of a triangle'),free:false,type:'perim',max:20}] },
    { code:'T', title:t('Làm quen Phép nhân (2–5)','Intro to Multiplication (2–5)'), skills:[{id:'g2-t-1',title:t('Bảng nhân 2 và 5','Multiply by 2 and 5'),free:true,type:'mul25',max:10},{id:'g2-t-2',title:t('Bảng nhân 3 và 4','Multiply by 3 and 4'),free:false,type:'mul34',max:10}] },
    { code:'U', title:t('Làm quen Phép chia (2–5)','Intro to Division (2–5)'), skills:[{id:'g2-u-1',title:t('Bảng chia 2 và 5','Divide by 2 and 5'),free:false,type:'div25',max:10},{id:'g2-u-2',title:t('Bảng chia 3 và 4','Divide by 3 and 4'),free:false,type:'div34',max:10}] },
    { code:'V', title:t('Phân số 1/2, 1/3, 1/4, 1/5','Unit Fractions'), skills:[{id:'g2-v-1',title:t('Tìm 1/2 hoặc 1/3 của một số','Find 1/2 or 1/3 of a number'),free:false,type:'frac',max:30},{id:'g2-v-2',title:t('Tìm 1/4 hoặc 1/5 của một số','Find 1/4 or 1/5 of a number'),free:false,type:'frac',max:40}] }
  ];

  window.generateGrade2Question = function (type, max = 100) {
    const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const sh = a => [...a].sort(() => Math.random() - 0.5);
    const opts = (ans, cands) => {
      const s = new Set([String(ans)]);
      cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
      let k = 1; while (s.size < 4) s.add(String(k++));
      return sh([...s]);
    };
    switch (type) {
      case 'skip': { const st=[5,10,100][r(0,2)], a=st*r(1,5), ans=a+st*3; return { q:t(`Điền số tiếp theo: ${a}, ${a+st}, ${a+st*2}, ___`,`Find the next number: ${a}, ${a+st}, ${a+st*2}, ___`), opts:opts(ans,[ans+st,ans-1,ans+1]), ans:String(ans) }; }
      case 'neighbor': { const n=r(101,max-1), nx=r(0,1), ans=nx?n+1:n-1; return { q:t(`Số ${nx?'liền sau':'liền trước'} của ${n} là số nào?`,`What number comes right ${nx?'after':'before'} ${n}?`), opts:opts(ans,[n,ans+1,ans-1]), ans:String(ans) }; }
      case 'cmp': { const a=r(100,max), b=r(100,max); return { q:t(`So sánh: ${a} ___ ${b}`,`Compare: ${a} ___ ${b}`), opts:['<','>','='], ans:a<b?'<':(a>b?'>':'=') }; }
      case 'minmax': { const arr=[...new Set([r(100,400),r(401,700),r(701,999),r(150,850)])], m=r(0,1), ans=m?Math.max(...arr):Math.min(...arr); return { q:t(`Số nào ${m?'LỚN NHẤT':'NHỎ NHẤT'}: ${arr.join(', ')}?`,`Which number is the ${m?'GREATEST':'LEAST'}: ${arr.join(', ')}?`), opts:arr.map(String), ans:String(ans) }; }
      case 'evenodd': { const n=r(10,max), ans=n%2===0?t('Số chẵn','Even'):t('Số lẻ','Odd'); return { q:t(`Số ${n} là số chẵn hay số lẻ?`,`Is ${n} even or odd?`), opts:[t('Số chẵn','Even'),t('Số lẻ','Odd')], ans }; }
      case 'add': case 'add10': case 'add100': {
        const mul=type==='add10'?10:(type==='add100'?100:1), a=r(1,Math.floor(max/(2*mul)))*mul, b=r(1,Math.floor(max/(2*mul)))*mul, ans=a+b;
        return { q:t(`Tính: ${a} + ${b} = ?`,`Add: ${a} + ${b} = ?`), opts:opts(ans,[ans+1,ans-1,ans+10]), ans:String(ans) };
      }
      case 'sub': case 'sub100': {
        const mul=type==='sub100'?100:1, a=r(4,Math.floor(max/mul))*mul, b=r(1,Math.floor(a/mul)-1)*mul, ans=a-b;
        return { q:t(`Tính: ${a} - ${b} = ?`,`Subtract: ${a} - ${b} = ?`), opts:opts(ans,[ans+1,Math.max(0,ans-1),ans+10]), ans:String(ans) };
      }
      case 'miss_add': { const a=r(5,Math.floor(max/2)), tot=r(a+2,max), ans=tot-a; return { q:t(`Tìm x biết: x + ${a} = ${tot}`,`Solve for x: x + ${a} = ${tot}`), opts:opts(ans,[ans+1,ans-1,tot+a]), ans:String(ans) }; }
      case 'miss_sub': { const b=r(2,10), res=r(2,10), ans=b+res; return { q:t(`Tìm x biết: x - ${b} = ${res}`,`Solve for x: x - ${b} = ${res}`), opts:opts(ans,[ans+1,ans-1,Math.max(0,res-b)]), ans:String(ans) }; }
      case 'word_add': { const a=r(12,45), b=r(12,45), ans=a+b; return { q:t(`Thùng thứ nhất có ${a} lít dầu, thùng thứ hai có ${b} lít. Cả hai thùng có bao nhiêu lít?`,`Tank A holds ${a} liters and Tank B holds ${b} liters. How many liters in total?`), opts:opts(ans,[ans+1,ans-1,ans+10]), ans:String(ans) }; }
      case 'word_sub': { const a=r(30,85), b=r(10,a-5), ans=a-b; return { q:t(`Cửa hàng có ${a} kg gạo, đã bán ${b} kg. Còn lại bao nhiêu kg?`,`A store had ${a} kg of rice and sold ${b} kg. How many kg are left?`), opts:opts(ans,[ans+1,ans-1,a+b]), ans:String(ans) }; }
      case 'place3': { const h=r(1,9), te=r(0,9), o=r(0,9), ans=t(`${h} trăm, ${te} chục, ${o} đơn vị`,`${h} hundreds, ${te} tens, ${o} ones`); return { q:t(`Số ${h*100+te*10+o} gồm:`,`${h*100+te*10+o} consists of:`), opts:sh([ans,t(`${te} trăm, ${h} chục, ${o} đơn vị`,`${te} hundreds, ${h} tens, ${o} ones`),t(`${h} trăm, ${o} chục, ${te} đơn vị`,`${h} hundreds, ${o} tens, ${te} ones`)]), ans }; }
      case 'compose3': { const h=r(1,9), te=r(0,9), o=r(0,9), ans=h*100+te*10+o; return { q:t(`Số gồm ${h} trăm, ${te} chục, ${o} đơn vị là:`,`What number has ${h} hundreds, ${te} tens, and ${o} ones?`), opts:opts(ans,[h*100+o*10+te,te*100+h*10+o,ans+10]), ans:String(ans) }; }
      case 'mixed': { const a=r(10,30), b=r(5,20), c=r(1,10), ans=a+b-c; return { q:t(`Tính: ${a} + ${b} - ${c} = ?`,`Calculate: ${a} + ${b} - ${c} = ?`), opts:opts(ans,[ans+1,ans-1,a+b+c]), ans:String(ans) }; }
      case 'round10': { const n=r(11,89), ans=Math.round(n/10)*10; return { q:t(`Làm tròn số ${n} đến hàng chục gần nhất:`,`Round ${n} to the nearest ten:`), opts:opts(ans,[Math.floor(n/10)*10,Math.ceil(n/10)*10,ans+10]), ans:String(ans) }; }
      case 'money': { const a=r(10,50), b=r(10,40), ans=t(`${a+b} nghìn đồng`,`$${a+b}`); return { q:t(`Lan có ${a} nghìn đồng, được tặng thêm ${b} nghìn đồng. Tổng cộng:`,`Anna has $${a} and receives $${b} more. Total:`), opts:sh([ans,t(`${a+b+5} nghìn đồng`,`$${a+b+5}`),t(`${a+b-5} nghìn đồng`,`$${a+b-5}`)]), ans }; }
      case 'money_chg': { const p=r(15,45), ans=t(`${50-p} nghìn đồng`,`$${50-p}`); return { q:t(`Đưa 50 nghìn đồng để mua đồ hết ${p} nghìn đồng. Tiền thừa là:`,`You pay $50 for a $${p} toy. How much change do you receive?`), opts:sh([ans,t(`${50-p+5} nghìn đồng`,`$${50-p+5}`),t(`${50-p-5} nghìn đồng`,`$${50-p-5}`)]), ans }; }
      case 'clock': { const h=r(1,11), m=[15,30][r(0,1)], ans=t(`${h} giờ ${m} phút`,`${h}:${m}`); return { q:t(`Kim ngắn qua số ${h}, kim dài chỉ số ${m===15?3:6} là mấy giờ?`,`Hour hand past ${h}, minute hand on ${m===15?3:6}. What time is it?`), opts:sh([ans,t(`${h} giờ đúng`,`${h}:00`),t(`${h+1} giờ ${m} phút`,`${h+1}:${m}`)]), ans }; }
      case 'calendar': { const w=r(2,5), ans=t(`${w*7} ngày`,`${w*7} days`); return { q:t(`${w} tuần lễ có bao nhiêu ngày?`,`How many days are in ${w} weeks?`), opts:sh([ans,t(`${w*5} ngày`,`${w*5} days`),t(`${w*7+1} ngày`,`${w*7+1} days`),t(`${w*6} ngày`,`${w*6} days`)]), ans }; }
      case 'dm_cm': { const d=r(2,15), ans=`${d*10} cm`; return { q:`${d} dm = ___ cm?`, opts:sh([ans,`${d*100} cm`,`${d+10} cm`]), ans }; }
      case 'm_cm': { const m=r(2,9), ans=`${m*100} cm`; return { q:`${m} m = ___ cm?`, opts:sh([ans,`${m*10} cm`,`${m*1000} cm`]), ans }; }
      case 'chart': { const a=r(12,28), b=r(4,a-2), ans=a-b; return { q:t(`Biểu đồ ghi nhận ${a} bạn thích bơi và ${b} bạn thích vẽ. Chênh lệch là:`,`A chart shows ${a} swimmers and ${b} painters. What is the difference?`), opts:opts(ans,[a+b,ans+1,ans-1]), ans:String(ans) }; }
      case 'polyline': { const a=r(3,10), b=r(3,10), c=r(3,10), ans=`${a+b+c} cm`; return { q:t(`Đường gấp khúc gồm 3 đoạn dài ${a} cm, ${b} cm, ${c} cm có độ dài là:`,`Total length of 3 connected segments of ${a} cm, ${b} cm, and ${c} cm:`), opts:sh([ans,`${a+b+c+2} cm`,`${a+b} cm`]), ans }; }
      case 'perim': { const a=r(4,12), b=r(4,12), c=r(4,12), ans=`${a+b+c} cm`; return { q:t(`Chu vi tam giác có 3 cạnh ${a} cm, ${b} cm, ${c} cm là:`,`Perimeter of a triangle with sides ${a} cm, ${b} cm, ${c} cm:`), opts:sh([ans,`${a+b+c+1} cm`,`${a+b} cm`]), ans }; }
      case 'mul25': { const a=[2,5][r(0,1)], b=r(1,10), ans=a*b; return { q:t(`Tính: ${a} × ${b} = ?`,`Multiply: ${a} × ${b} = ?`), opts:opts(ans,[ans+a,Math.max(1,ans-a),ans+1]), ans:String(ans) }; }
      case 'mul34': { const a=[3,4][r(0,1)], b=r(1,10), ans=a*b; return { q:t(`Tính: ${a} × ${b} = ?`,`Multiply: ${a} × ${b} = ?`), opts:opts(ans,[ans+a,Math.max(1,ans-a),ans+2]), ans:String(ans) }; }
      case 'div25': { const a=[2,5][r(0,1)], b=r(1,10), ans=b; return { q:t(`Tính: ${a*b} : ${a} = ?`,`Divide: ${a*b} ÷ ${a} = ?`), opts:opts(ans,[b+1,Math.max(1,b-1),b+2]), ans:String(ans) }; }
      case 'div34': { const a=[3,4][r(0,1)], b=r(1,10), ans=b; return { q:t(`Tính: ${a*b} : ${a} = ?`,`Divide: ${a*b} ÷ ${a} = ?`), opts:opts(ans,[b+1,Math.max(1,b-1),b+2]), ans:String(ans) }; }
      case 'frac': { const d=[2,3,4,5][r(0,3)], k=r(2,8), ans=k; return { q:t(`1/${d} của ${d*k} là bao nhiêu?`,`What is 1/${d} of ${d*k}?`), opts:opts(ans,[k+1,k+2,d*k]), ans:String(ans) }; }
      default: return { q:'10 + 20 = ?', opts:['20','30','40','50'], ans:'30' };
    }
  };
})();
