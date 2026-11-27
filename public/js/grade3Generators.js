// public/js/grade3Generators.js
(function () {
  const t = (vi, en) => (localStorage.getItem('mathpro_lang') === 'en' ? en : vi);

  window.GRADE3_TOPICS = [
    { code:'A', title:t('Số đến 10.000 & 100.000','Numbers up to 100,000'), skills:[{id:'g3-a-1',title:t('Đọc viết số đến 10.000','Place value up to 10,000'),free:true,type:'place4',max:9999},{id:'g3-a-2',title:t('So sánh số đến 100.000','Compare numbers up to 100,000'),free:false,type:'cmp',max:99999}] },
    { code:'B', title:t('Làm tròn số','Rounding Numbers'), skills:[{id:'g3-b-1',title:t('Làm tròn đến hàng trăm','Round to the nearest hundred'),free:true,type:'round100',max:999},{id:'g3-b-2',title:t('Làm tròn đến hàng nghìn','Round to the nearest thousand'),free:false,type:'round1000',max:9999}] },
    { code:'C', title:t('Cộng số có 4–5 chữ số','Multi-Digit Addition'), skills:[{id:'g3-c-1',title:t('Cộng phạm vi 10.000','Add within 10,000'),free:false,type:'add',max:9000},{id:'g3-c-2',title:t('Toán đố phép cộng','Addition word problems'),free:false,type:'word_add',max:5000}] },
    { code:'D', title:t('Trừ số có 4–5 chữ số','Multi-Digit Subtraction'), skills:[{id:'g3-d-1',title:t('Trừ phạm vi 10.000','Subtract within 10,000'),free:false,type:'sub',max:9000},{id:'g3-d-2',title:t('Toán đố phép trừ','Subtraction word problems'),free:false,type:'word_sub',max:5000}] },
    { code:'E', title:t('Bảng nhân 6, 7, 8, 9','Multiplication Tables (6–9)'), skills:[{id:'g3-e-1',title:t('Bảng nhân 6 và 7','Multiply by 6 and 7'),free:false,type:'mul67',max:10},{id:'g3-e-2',title:t('Bảng nhân 8 và 9','Multiply by 8 and 9'),free:false,type:'mul89',max:10}] },
    { code:'F', title:t('Nhân với số có 1 chữ số','Multiply by 1-Digit Numbers'), skills:[{id:'g3-f-1',title:t('Nhân số 2 chữ số với 1 chữ số','Multiply 2-digit by 1-digit'),free:false,type:'mul21',max:50},{id:'g3-f-2',title:t('Nhân số 3 chữ số với 1 chữ số','Multiply 3-digit by 1-digit'),free:false,type:'mul21',max:200}] },
    { code:'G', title:t('Bảng chia 6, 7, 8, 9','Division Tables (6–9)'), skills:[{id:'g3-g-1',title:t('Bảng chia 6 và 7','Divide by 6 and 7'),free:true,type:'div67',max:10},{id:'g3-g-2',title:t('Bảng chia 8 và 9','Divide by 8 and 9'),free:false,type:'div89',max:10}] },
    { code:'H', title:t('Phép chia hết & Chia có dư','Division & Remainders'), skills:[{id:'g3-h-1',title:t('Chia số 2 chữ số cho 1 chữ số','Divide 2-digit by 1-digit'),free:false,type:'div21',max:80},{id:'g3-h-2',title:t('Tìm số dư của phép chia','Find the remainder'),free:false,type:'div_rem',max:60}] },
    { code:'I', title:t('Tìm thành phần chưa biết (Tìm x)','Solve for Unknowns'), skills:[{id:'g3-i-1',title:t('Tìm thừa số chưa biết','Find missing factor'),free:false,type:'find_mul',max:10},{id:'g3-i-2',title:t('Tìm số bị chia','Find the dividend'),free:false,type:'find_div',max:10}] },
    { code:'J', title:t('Giá trị biểu thức','Order of Operations'), skills:[{id:'g3-j-1',title:t('Nhân chia trước, cộng trừ sau','Order of operations: no parentheses'),free:false,type:'order_ops',max:20},{id:'g3-j-2',title:t('Biểu thức có dấu ngoặc ( )','Expressions with parentheses'),free:false,type:'parens',max:20}] },
    { code:'K', title:t('Gấp lên & Giảm đi một số lần','Multiplicative Comparison'), skills:[{id:'g3-k-1',title:t('Bài toán gấp lên nhiều lần','Times as many'),free:false,type:'times_more',max:20},{id:'g3-k-2',title:t('Giảm đi một số lần','Divide to scale down'),free:false,type:'times_less',max:50}] },
    { code:'L', title:t('Giải toán bằng hai bước tính','Two-Step Word Problems'), skills:[{id:'g3-l-1',title:t('Bài toán 2 bước (Cộng & Nhân)','Two-step word problems'),free:false,type:'two_step',max:20},{id:'g3-l-2',title:t('Rút về đơn vị cơ bản','Unitary method problems'),free:false,type:'unitary',max:10}] },
    { code:'M', title:t('Làm quen Chữ số La Mã','Roman Numerals'), skills:[{id:'g3-m-1',title:t('Đọc số La Mã từ I đến XX','Roman numerals I to XX'),free:false,type:'roman',max:20},{id:'g3-m-2',title:t('Số La Mã trên đồng hồ','Roman numerals I to XII'),free:false,type:'roman',max:12}] },
    { code:'N', title:t('Đơn vị đo độ dài','Metric Length Units'), skills:[{id:'g3-n-1',title:t('Đổi km sang m','Convert km to m'),free:false,type:'km_m',max:10},{id:'g3-n-2',title:t('Đổi cm sang mm','Convert cm to mm'),free:false,type:'cm_mm',max:20}] },
    { code:'O', title:t('Khối lượng & Dung tích','Mass & Capacity'), skills:[{id:'g3-o-1',title:t('Đổi kg sang gam (g)','Convert kg to g'),free:false,type:'kg_g',max:9},{id:'g3-o-2',title:t('Đổi lít sang mi-li-lít (ml)','Convert L to mL'),free:false,type:'l_ml',max:9}] },
    { code:'P', title:t('Thời gian (Giờ, Phút)','Time & Elapsed Time'), skills:[{id:'g3-p-1',title:t('Đổi giờ sang phút','Convert hours to minutes'),free:false,type:'h_m',max:6},{id:'g3-p-2',title:t('Tính khoảng thời gian','Elapsed time'),free:false,type:'time_diff',max:12}] },
    { code:'Q', title:t('Tiền tệ','Money Word Problems'), skills:[{id:'g3-q-1',title:t('Tính tổng tiền mua hàng','Total cost'),free:false,type:'money',max:100},{id:'g3-q-2',title:t('Tính tiền thối lại','Making change'),free:false,type:'money_chg',max:100}] },
    { code:'R', title:t('Thống kê & Xác suất','Data & Probability'), skills:[{id:'g3-r-1',title:t('Đọc biểu đồ cột','Read bar graphs'),free:false,type:'chart',max:50},{id:'g3-r-2',title:t('Chắc chắn / Có thể / Không thể','Certain, possible, impossible'),free:false,type:'prob',max:3}] },
    { code:'S', title:t('Hình tròn & Đoạn thẳng','Circles & Segments'), skills:[{id:'g3-s-1',title:t('Bán kính và Đường kính hình tròn','Radius and diameter'),free:false,type:'circle',max:20},{id:'g3-s-2',title:t('Trung điểm của đoạn thẳng','Midpoint of a segment'),free:false,type:'midpoint',max:40}] },
    { code:'T', title:t('Chu vi hình vuông & Hình chữ nhật','Perimeter'), skills:[{id:'g3-t-1',title:t('Chu vi hình chữ nhật','Perimeter of rectangles'),free:true,type:'perim_rect',max:20},{id:'g3-t-2',title:t('Chu vi hình vuông','Perimeter of squares'),free:false,type:'perim_sq',max:25}] },
    { code:'U', title:t('Diện tích hình vuông & Hình chữ nhật','Area'), skills:[{id:'g3-u-1',title:t('Diện tích hình chữ nhật','Area of rectangles'),free:false,type:'area_rect',max:15},{id:'g3-u-2',title:t('Diện tích hình vuông','Area of squares'),free:false,type:'area_sq',max:15}] },
    { code:'V', title:t('Làm quen Phân số','Intro to Fractions'), skills:[{id:'g3-v-1',title:t('Tìm 1/n của một số','Unit fraction of a number'),free:false,type:'frac',max:60},{id:'g3-v-2',title:t('So sánh phân số đơn giản','Compare unit fractions'),free:false,type:'frac_cmp',max:10}] }
  ];

  window.generateGrade3Question = function (type, max = 100) {
    const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const sh = a => [...a].sort(() => Math.random() - 0.5);
    const opts = (ans, cands) => {
      const s = new Set([String(ans)]);
      cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
      let k = 1; while (s.size < 4) s.add(String(k++));
      return sh([...s]);
    };
    switch (type) {
      case 'place4': { const n=r(1000,max), d=Math.floor(n/1000); return { q:t(`Chữ số hàng nghìn của số ${n} là:`,`What is the thousands digit of ${n}?`), opts:opts(d,[d+1,Math.max(0,d-1),n%10]), ans:String(d) }; }
      case 'cmp': { const a=r(1000,max), b=r(1000,max); return { q:t(`So sánh: ${a} ___ ${b}`,`Compare: ${a} ___ ${b}`), opts:['<','>','='], ans:a<b?'<':(a>b?'>':'=') }; }
      case 'round100': { const n=r(110,980), ans=Math.round(n/100)*100; return { q:t(`Làm tròn ${n} đến hàng trăm:`,`Round ${n} to the nearest hundred:`), opts:opts(ans,[Math.floor(n/100)*100,Math.ceil(n/100)*100,ans+100]), ans:String(ans) }; }
      case 'round1000': { const n=r(1100,9800), ans=Math.round(n/1000)*1000; return { q:t(`Làm tròn ${n} đến hàng nghìn:`,`Round ${n} to the nearest thousand:`), opts:opts(ans,[Math.floor(n/1000)*1000,Math.ceil(n/1000)*1000,ans+1000]), ans:String(ans) }; }
      case 'add': { const a=r(1000,Math.floor(max/2)), b=r(1000,Math.floor(max/2)), ans=a+b; return { q:t(`Tính: ${a} + ${b} = ?`,`Add: ${a} + ${b} = ?`), opts:opts(ans,[ans+10,ans-10,ans+1]), ans:String(ans) }; }
      case 'sub': { const a=r(3000,max), b=r(1000,a-500), ans=a-b; return { q:t(`Tính: ${a} - ${b} = ?`,`Subtract: ${a} - ${b} = ?`), opts:opts(ans,[ans+10,ans-10,ans+100]), ans:String(ans) }; }
      case 'word_add': { const a=r(1200,3500), b=r(1000,2500), ans=a+b; return { q:t(`Đội A trồng ${a} cây, đội B trồng ${b} cây. Cả hai đội trồng được:`,`Team A planted ${a} trees and Team B planted ${b} trees. Total trees planted:`), opts:opts(ans,[ans+100,ans-100,ans+10]), ans:String(ans) }; }
      case 'word_sub': { const a=r(3000,5000), b=r(1000,2500), ans=a-b; return { q:t(`Kho có ${a} kg thóc, xuất đi ${b} kg. Còn lại:`,`A warehouse had ${a} kg of grain and shipped ${b} kg. Remaining grain:`), opts:opts(ans,[ans+100,ans-100,a+b]), ans:String(ans) }; }
      case 'mul67': case 'mul89': { const a=(type==='mul67'?[6,7]:[8,9])[r(0,1)], b=r(2,10), ans=a*b; return { q:t(`Tính: ${a} × ${b} = ?`,`Multiply: ${a} × ${b} = ?`), opts:opts(ans,[ans+a,ans-a,ans+1]), ans:String(ans) }; }
      case 'mul21': { const a=r(12,max), b=r(2,9), ans=a*b; return { q:t(`Tính: ${a} × ${b} = ?`,`Multiply: ${a} × ${b} = ?`), opts:opts(ans,[ans+b,ans-b,ans+10]), ans:String(ans) }; }
      case 'div67': case 'div89': { const a=(type==='div67'?[6,7]:[8,9])[r(0,1)], b=r(2,10), ans=b; return { q:t(`Tính: ${a*b} : ${a} = ?`,`Divide: ${a*b} ÷ ${a} = ?`), opts:opts(ans,[b+1,b-1,b+2]), ans:String(ans) }; }
      case 'div21': { const b=r(2,8), q=r(11,19), ans=q; return { q:t(`Tính: ${b*q} : ${b} = ?`,`Divide: ${b*q} ÷ ${b} = ?`), opts:opts(ans,[q+1,q-1,q+2]), ans:String(ans) }; }
      case 'div_rem': { const b=r(3,8), q=r(3,9), rem=r(1,b-1), ans=rem; return { q:t(`Số dư của phép chia ${b*q+rem} : ${b} là:`,`What is the remainder of ${b*q+rem} ÷ ${b}?`), opts:opts(ans,[0,rem+1,b]), ans:String(ans) }; }
      case 'find_mul': { const a=r(3,9), x=r(2,10), ans=x; return { q:t(`Tìm x biết: x × ${a} = ${a*x}`,`Solve for x: x × ${a} = ${a*x}`), opts:opts(ans,[x+1,x-1,a*x]), ans:String(ans) }; }
      case 'find_div': { const a=r(3,9), q=r(2,10), ans=a*q; return { q:t(`Tìm x biết: x : ${a} = ${q}`,`Solve for x: x ÷ ${a} = ${q}`), opts:opts(ans,[ans+a,ans-a,q]), ans:String(ans) }; }
      case 'order_ops': { const a=r(5,15), b=r(2,6), c=r(2,5), ans=a+b*c; return { q:t(`Tính giá trị biểu thức: ${a} + ${b} × ${c} = ?`,`Evaluate: ${a} + ${b} × ${c} = ?`), opts:opts(ans,[(a+b)*c,ans+2,ans-2]), ans:String(ans) }; }
      case 'parens': { const a=r(2,8), b=r(2,8), c=r(2,5), ans=(a+b)*c; return { q:t(`Tính: (${a} + ${b}) × ${c} = ?`,`Evaluate: (${a} + ${b}) × ${c} = ?`), opts:opts(ans,[a+b*c,ans+c,ans-c]), ans:String(ans) }; }
      case 'times_more': { const a=r(4,15), k=r(2,6), ans=a*k; return { q:t(`An có ${a} viên bi, Bình có gấp ${k} lần của An. Bình có:`,`Ben has ${a} marbles. Sam has ${k} times as many. Sam has:`), opts:opts(ans,[a+k,ans+a,Math.max(1,ans-k)]), ans:String(ans) }; }
      case 'times_less': { const k=r(2,5), ans=r(4,12), a=ans*k; return { q:t(`Đoạn thẳng dài ${a} cm giảm đi ${k} lần thì còn:`,`${a} cm divided by ${k} equals:`), opts:opts(ans,[a-k,ans+1,ans+2]), ans:String(ans) }; }
      case 'two_step': { const a=r(5,12), b=r(2,5), c=r(4,10), ans=a*b+c; return { q:t(`Có ${b} hộp, mỗi hộp ${a} cái kẹo và thêm ${c} cái lẻ. Tổng số kẹo:`,`${b} boxes of ${a} candies plus ${c} extra candies equals:`), opts:opts(ans,[a+b+c,ans+5,ans-5]), ans:String(ans) }; }
      case 'unitary': { const n=r(3,6), u=r(4,10), m=r(2,5), ans=u*m; return { q:t(`${n} hộp đựng ${n*u} cái bánh. Hỏi ${m} hộp đựng bao nhiêu cái bánh?`,`${n} boxes hold ${n*u} cakes. How many cakes are in ${m} boxes?`), opts:opts(ans,[ans+u,Math.max(1,ans-u),n*u]), ans:String(ans) }; }
      case 'roman': { const map=[[4,'IV'],[5,'V'],[9,'IX'],[10,'X'],[14,'XIV'],[19,'XIX']], p=map[r(0,map.length-1)]; return { q:t(`Số La Mã ${p[1]} tương ứng với số nào?`,`What number does Roman numeral ${p[1]} represent?`), opts:opts(p[0],[p[0]+1,Math.max(1,p[0]-1),p[0]+2]), ans:String(p[0]) }; }
      case 'km_m': { const k=r(2,9), ans=`${k*1000} m`; return { q:`${k} km = ___ m?`, opts:sh([ans,`${k*100} m`,`${k*10} m`]), ans }; }
      case 'cm_mm': { const c=r(2,15), ans=`${c*10} mm`; return { q:`${c} cm = ___ mm?`, opts:sh([ans,`${c*100} mm`,`${c+10} mm`]), ans }; }
      case 'kg_g': { const k=r(2,8), ans=`${k*1000} g`; return { q:`${k} kg = ___ g?`, opts:sh([ans,`${k*100} g`,`${k*10} g`]), ans }; }
      case 'l_ml': { const l=r(2,8), ans=`${l*1000} ml`; return { q:t(`${l} lít = ___ ml?`,`${l} L = ___ ml?`), opts:sh([ans,`${l*100} ml`,`${l*10} ml`]), ans }; }
      case 'h_m': { const h=r(2,5), ans=t(`${h*60} phút`,`${h*60} min`); return { q:t(`${h} giờ = ___ phút?`,`${h} hours = ___ minutes?`), opts:sh([ans,t(`${h*100} phút`,`${h*100} min`),t(`${h*30} phút`,`${h*30} min`)]), ans }; }
      case 'time_diff': { const h1=r(7,10), d=r(1,3), ans=t(`${d} giờ`,`${d} hours`); return { q:t(`Từ ${h1} giờ đến ${h1+d} giờ là bao lâu?`,`How much time passes from ${h1}:00 to ${h1+d}:00?`), opts:sh([ans,t(`${d+1} giờ`,`${d+1} hours`),t(`${h1} giờ`,`${h1} hours`)]), ans }; }
      case 'money': { const a=r(20,50), b=r(15,40), ans=t(`${a+b}.000đ`,`$${a+b}`); return { q:t(`Mua vở hết ${a}.000đ và bút hết ${b}.000đ. Tổng cộng:`,`A notebook costs $${a} and a pen costs $${b}. Total cost:`), opts:sh([ans,t(`${a+b+10}.000đ`,`$${a+b+10}`),t(`${a+b-5}.000đ`,`$${a+b-5}`)]), ans }; }
      case 'money_chg': { const p=r(25,85), ans=t(`${100-p}.000đ`,`$${100-p}`); return { q:t(`Trả 100.000đ cho món hàng ${p}.000đ. Tiền thừa là:`,`Pay $100 for an item costing $${p}. Change received:`), opts:sh([ans,t(`${100-p+10}.000đ`,`$${100-p+10}`),t(`${100-p-5}.000đ`,`$${100-p-5}`)]), ans }; }
      case 'chart': { const a=r(20,45), b=r(10,a-5), ans=a+b; return { q:t(`Biểu đồ cột ghi lớp 3A có ${a} bạn, 3B có ${b} bạn. Tổng cả hai lớp:`,`Bar graph: Class 3A has ${a} students, 3B has ${b}. Total students:`), opts:opts(ans,[a-b,ans+2,ans-2]), ans:String(ans) }; }
      case 'prob': { const ans=t('Có thể xảy ra','Possible'); return { q:t('Tung 1 đồng xu, mặt sấp xuất hiện thuộc khả năng nào?','Flipping a coin and landing on heads is:'), opts:[ans,t('Chắc chắn xảy ra','Certain'),t('Không thể xảy ra','Impossible')], ans }; }
      case 'circle': { const rad=r(3,12), ans=`${rad*2} cm`; return { q:t(`Hình tròn có bán kính ${rad} cm thì đường kính dài:`,`A circle has radius ${rad} cm. Its diameter is:`), opts:sh([ans,`${rad} cm`,`${rad+2} cm`]), ans }; }
      case 'midpoint': { const len=r(4,15)*2, ans=`${len/2} cm`; return { q:t(`M là trung điểm đoạn AB dài ${len} cm. Đoạn AM dài:`,`M is the midpoint of segment AB (${len} cm). Length of AM:`), opts:sh([ans,`${len} cm`,`${len/2+2} cm`]), ans }; }
      case 'perim_rect': { const a=r(5,15), b=r(3,a-1), ans=`${(a+b)*2} cm`; return { q:t(`Chu vi hình chữ nhật dài ${a} cm, rộng ${b} cm là:`,`Perimeter of a rectangle (${a} cm × ${b} cm):`), opts:sh([ans,`${a+b} cm`,`${a*b} cm`]), ans }; }
      case 'perim_sq': { const a=r(4,15), ans=`${a*4} cm`; return { q:t(`Chu vi hình vuông cạnh ${a} cm là:`,`Perimeter of a square with side ${a} cm:`), opts:sh([ans,`${a*a} cm`,`${a*2} cm`]), ans }; }
      case 'area_rect': { const a=r(5,12), b=r(3,8), ans=`${a*b} cm²`; return { q:t(`Diện tích hình chữ nhật dài ${a} cm, rộng ${b} cm là:`,`Area of a rectangle (${a} cm × ${b} cm):`), opts:sh([ans,`${(a+b)*2} cm²`,`${a+b} cm²`]), ans }; }
      case 'area_sq': { const a=r(3,12), ans=`${a*a} cm²`; return { q:t(`Diện tích hình vuông cạnh ${a} cm là:`,`Area of a square with side ${a} cm:`), opts:sh([ans,`${a*4} cm²`,`${a*2} cm²`]), ans }; }
      case 'frac': { const d=r(2,6), k=r(3,10), ans=k; return { q:t(`1/${d} của ${d*k} bằng:`,`What is 1/${d} of ${d*k}?`), opts:opts(ans,[k+1,k+2,d*k]), ans:String(ans) }; }
      case 'frac_cmp': { const a=r(2,5), b=r(6,9); return { q:t(`So sánh phân số: 1/${a} ___ 1/${b}`,`Compare fractions: 1/${a} ___ 1/${b}`), opts:['>','<','='], ans:'>' }; }
      default: return { q:'6 × 7 = ?', opts:['40','42','48','36'], ans:'42' };
    }
  };
})();
