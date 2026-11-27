// public/js/grade6Generators.js
(function () {
  const t = (vi, en) => (localStorage.getItem('mathpro_lang') === 'en' ? en : vi);

  window.GRADE6_TOPICS = [
    { code:'A', title:t('Số tự nhiên & Thứ tự thực hiện phép tính','Whole Numbers & Order of Operations'), skills:[{id:'g6-a-1',title:t('Quy tắc thứ tự phép tính','Order of operations (PEMDAS)'),free:true,type:'pemdas',max:15},{id:'g6-a-2',title:t('Biểu thức nhiều phép tính','Multi-step numerical expressions'),free:false,type:'pemdas',max:20}] },
    { code:'B', title:t('Lũy thừa','Exponents'), skills:[{id:'g6-b-1',title:t('Tính giá trị lũy thừa','Evaluate exponents'),free:true,type:'exp',max:5},{id:'g6-b-2',title:t('Lũy thừa cơ số 10','Powers of 10'),free:false,type:'exp10',max:6}] },
    { code:'C', title:t('Số nguyên tố & Hợp số','Prime & Composite Numbers'), skills:[{id:'g6-c-1',title:t('Nhận biết số nguyên tố','Prime or composite'),free:false,type:'prime',max:50},{id:'g6-c-2',title:t('Phân tích ra thừa số nguyên tố','Prime factorization'),free:false,type:'prime_f',max:60}] },
    { code:'D', title:t('Ước chung lớn nhất & Bội chung nhỏ nhất','GCF & LCM'), skills:[{id:'g6-d-1',title:t('Tìm ƯCLN của hai số','Greatest common factor (GCF)'),free:false,type:'gcf',max:48},{id:'g6-d-2',title:t('Tìm BCNN của hai số','Least common multiple (LCM)'),free:false,type:'lcm',max:20}] },
    { code:'E', title:t('Số nguyên âm & Dương','Integers'), skills:[{id:'g6-e-1',title:t('So sánh số nguyên','Compare integers'),free:false,type:'int_cmp',max:30},{id:'g6-e-2',title:t('Giá trị tuyệt đối |x|','Absolute value |x|'),free:false,type:'abs',max:50}] },
    { code:'F', title:t('Cộng & Trừ số nguyên','Add & Subtract Integers'), skills:[{id:'g6-f-1',title:t('Cộng hai số nguyên khác dấu','Add integers'),free:false,type:'int_add',max:30},{id:'g6-f-2',title:t('Trừ số nguyên','Subtract integers'),free:false,type:'int_sub',max:30}] },
    { code:'G', title:t('Nhân & Chia phân số','Multiply & Divide Fractions'), skills:[{id:'g6-g-1',title:t('Chia hai phân số','Divide fractions'),free:true,type:'div_frac',max:8},{id:'g6-g-2',title:t('Nhân hai phân số','Multiply fractions'),free:false,type:'mul_frac',max:8}] },
    { code:'H', title:t('Số thập phân nâng cao','Decimal Operations'), skills:[{id:'g6-h-1',title:t('Nhân số thập phân','Multiply decimals'),free:false,type:'dec_mul',max:15},{id:'g6-h-2',title:t('Chia số thập phân','Divide decimals'),free:false,type:'dec_div',max:20}] },
    { code:'I', title:t('Tỉ số','Ratios'), skills:[{id:'g6-i-1',title:t('Rút gọn tỉ số tối giản','Write ratios in simplest form'),free:false,type:'ratio',max:10},{id:'g6-i-2',title:t('Tìm tỉ số tương đương','Identify equivalent ratios'),free:false,type:'eq_ratio',max:10}] },
    { code:'J', title:t('Tỉ lệ đơn vị','Unit Rates'), skills:[{id:'g6-j-1',title:t('Tính tốc độ / đơn giá đơn vị','Unit rates'),free:false,type:'unit_rate',max:12},{id:'g6-j-2',title:t('Bài toán tỉ lệ đơn vị','Unit rate word problems'),free:false,type:'unit_rate',max:15}] },
    { code:'K', title:t('Phần trăm','Percents'), skills:[{id:'g6-k-1',title:t('Đổi số thập phân sang %','Convert decimals to percents'),free:false,type:'to_pct',max:10},{id:'g6-k-2',title:t('Tìm phần trăm của một số','Percents of numbers'),free:false,type:'pct_of',max:200}] },
    { code:'L', title:t('Toán tiêu dùng (Giảm giá, Thuế)','Consumer Math'), skills:[{id:'g6-l-1',title:t('Tính giá sau giảm %','Sale prices'),free:false,type:'sale',max:200},{id:'g6-l-2',title:t('Tính tiền thuế / chiết khấu','Calculate tax and tip'),free:false,type:'pct_of',max:100}] },
    { code:'M', title:t('Đổi đơn vị đo lường','Metric Conversions'), skills:[{id:'g6-m-1',title:t('Đổi đơn vị hệ mét (km, m)','Convert metric units'),free:false,type:'metric',max:20},{id:'g6-m-2',title:t('Thực hành đổi đơn vị đo','Metric unit practice'),free:false,type:'metric',max:10}] },
    { code:'N', title:t('Mặt phẳng tọa độ (4 góc phần tư)','Coordinate Plane'), skills:[{id:'g6-n-1',title:t('Xác định góc phần tư của điểm (x, y)','Quadrants'),free:false,type:'quad',max:10},{id:'g6-n-2',title:t('Khoảng cách giữa 2 điểm cùng trục','Distance between two points'),free:false,type:'coord_dist',max:10}] },
    { code:'O', title:t('Biểu thức đại số','Algebraic Expressions'), skills:[{id:'g6-o-1',title:t('Tính giá trị biểu thức chứa biến','Evaluate variable expressions'),free:false,type:'eval_expr',max:12},{id:'g6-o-2',title:t('Thu gọn đơn thức đồng dạng','Combine like terms'),free:false,type:'like_terms',max:15}] },
    { code:'P', title:t('Tính chất phân phối','Distributive Property'), skills:[{id:'g6-p-1',title:t('Khai triển a(x + b)','Multiply using the distributive property'),free:false,type:'distrib',max:10},{id:'g6-p-2',title:t('Thực hành tính chất phân phối','Distributive property practice'),free:false,type:'distrib',max:10}] },
    { code:'Q', title:t('Phương trình 1 bước','One-Step Equations'), skills:[{id:'g6-q-1',title:t('Giải phương trình x + a = b','Solve one-step addition equations'),free:false,type:'eq1_add',max:40},{id:'g6-q-2',title:t('Giải phương trình a·x = b','Solve one-step multiplication equations'),free:false,type:'eq1_mul',max:12}] },
    { code:'R', title:t('Bất phương trình','Inequalities'), skills:[{id:'g6-r-1',title:t('Kiểm tra nghiệm bất phương trình','Solutions to inequalities'),free:false,type:'ineq',max:20},{id:'g6-r-2',title:t('Tìm giá trị thỏa mãn bất phương trình','Solve one-step inequalities'),free:false,type:'ineq',max:20}] },
    { code:'S', title:t('Diện tích đa giác','Area of Polygons'), skills:[{id:'g6-s-1',title:t('Diện tích tam giác','Area of triangles'),free:false,type:'area_tri',max:20},{id:'g6-s-2',title:t('Diện tích hình thang','Area of trapezoids'),free:false,type:'area_trap',max:15}] },
    { code:'T', title:t('Thể tích & Diện tích toàn phần','Volume & Surface Area'), skills:[{id:'g6-t-1',title:t('Thể tích hình hộp chữ nhật','Volume of rectangular prisms'),free:true,type:'vol_box',max:10},{id:'g6-t-2',title:t('Diện tích toàn phần hình lập phương','Surface area of cubes'),free:false,type:'cube_sa',max:10}] },
    { code:'U', title:t('Thống kê','Statistics'), skills:[{id:'g6-u-1',title:t('Tính Trung bình cộng','Calculate mean'),free:false,type:'mean',max:30},{id:'g6-u-2',title:t('Tìm Khoảng biến thiên','Calculate range'),free:false,type:'range',max:40}] },
    { code:'V', title:t('Xác suất cơ bản','Basic Probability'), skills:[{id:'g6-v-1',title:t('Xác suất của biến cố đơn','Probability of one event'),free:false,type:'prob',max:10},{id:'g6-v-2',title:t('Thực hành tính xác suất','Probability practice'),free:false,type:'prob',max:10}] }
  ];

  window.generateGrade6Question = function (type, max = 50) {
    const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const sh = a => [...a].sort(() => Math.random() - 0.5);
    const opts = (ans, cands) => {
      const s = new Set([String(ans)]);
      cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
      let k = 1; while (s.size < 4) s.add(String(k++));
      return sh([...s]);
    };
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    switch (type) {
      case 'pemdas': { const a=r(2,10), b=r(2,6), c=r(2,5), ans=a+b*c; return { q:t(`Tính: ${a} + ${b} × ${c} = ?`,`Evaluate: ${a} + ${b} × ${c} = ?`), opts:opts(ans,[(a+b)*c,ans+2,ans-2]), ans:String(ans) }; }
      case 'exp': { const b=r(2,max), e=r(2,3), ans=Math.pow(b,e); return { q:t(`Tính giá trị lũy thừa: ${b}^${e} = ?`,`Evaluate: ${b}^${e} = ?`), opts:opts(ans,[b*e,ans+b,ans-1]), ans:String(ans) }; }
      case 'exp10': { const e=r(2,max), ans=Math.pow(10,e); return { q:t(`10^${e} bằng bao nhiêu?`,`What is 10^${e}?`), opts:opts(ans,[10*e,ans*10,ans/10]), ans:String(ans) }; }
      case 'prime': { const p=[2,3,5,7,11,13,17,19,23,29][r(0,9)], c=[4,6,8,9,10,12,14,15][r(0,7)]; return { q:t('Số nào sau đây là SỐ NGUYÊN TỐ?','Which of the following is a PRIME number?'), opts:sh([String(p),String(c),String(c+2),'1']), ans:String(p) }; }
      case 'prime_f': { const p=[2,3,5][r(0,2)], q=[7,11,13][r(0,2)]; return { q:t(`Phân tích ${p*q} ra thừa số nguyên tố:`,`Find the prime factorization of ${p*q}:`), opts:sh([`${p} × ${q}`,`${p} × ${q+1}`,`1 × ${p*q}`]), ans:`${p} × ${q}` }; }
      case 'gcf': { const g=r(2,6), a=g*r(2,5), b=g*r(2,5), ans=gcd(a,b); return { q:t(`ƯCLN của ${a} và ${b} là:`,`What is the GCF of ${a} and ${b}?`), opts:opts(ans,[ans+1,ans+2,Math.max(1,ans-1)]), ans:String(ans) }; }
      case 'lcm': { const a=r(3,8), b=r(4,10), ans=(a*b)/gcd(a,b); return { q:t(`BCNN của ${a} và ${b} là:`,`What is the LCM of ${a} and ${b}?`), opts:opts(ans,[a*b,ans+2,Math.max(a,b)]), ans:String(ans) }; }
      case 'int_cmp': { const a=-r(1,max), b=-r(1,max); return { q:t(`So sánh: ${a} ___ ${b}`,`Compare: ${a} ___ ${b}`), opts:['<','>','='], ans:a<b?'<':(a>b?'>':'=') }; }
      case 'abs': { const a=-r(5,max), ans=Math.abs(a); return { q:t(`Giá trị tuyệt đối |${a}| bằng:`,`Evaluate |${a}|:`), opts:opts(ans,[a,0,ans+1]), ans:String(ans) }; }
      case 'int_add': { const a=-r(5,max), b=r(3,max), ans=a+b; return { q:t(`Tính: (${a}) + ${b} = ?`,`Add: (${a}) + ${b} = ?`), opts:opts(ans,[-ans,ans+2,ans-2]), ans:String(ans) }; }
      case 'int_sub': { const a=r(2,15), b=r(5,20), ans=a-b; return { q:t(`Tính: ${a} - ${b} = ?`,`Subtract: ${a} - ${b} = ?`), opts:opts(ans,[b-a,ans+1,ans-1]), ans:String(ans) }; }
      case 'div_frac': { const a=r(1,3), b=r(4,7), c=r(1,3), d=r(4,7), ans=`${a*d}/${b*c}`; return { q:t(`Tính: ${a}/${b} : ${c}/${d} = ?`,`Divide: ${a}/${b} ÷ ${c}/${d} = ?`), opts:sh([ans,`${a*c}/${b*d}`,`${b*c}/${a*d}`]), ans }; }
      case 'mul_frac': { const a=r(1,3), b=r(4,7), c=r(1,3), d=r(4,7), ans=`${a*c}/${b*d}`; return { q:t(`Tính: ${a}/${b} × ${c}/${d} = ?`,`Multiply: ${a}/${b} × ${c}/${d} = ?`), opts:sh([ans,`${a+c}/${b+d}`,`${a*d}/${b*c}`]), ans }; }
      case 'dec_mul': { const a=r(11,35)/10, b=r(2,5), ans=(a*b).toFixed(1); return { q:t(`Tính: ${a} × ${b} = ?`,`Multiply: ${a} × ${b} = ?`), opts:sh([ans,(a*b+1).toFixed(1),(a*b-0.5).toFixed(1)]), ans }; }
      case 'dec_div': { const a=[3,5,7,9][r(0,3)], ans=(a/2).toFixed(1); return { q:t(`Tính: ${a} : 2 = ?`,`Divide: ${a} ÷ 2 = ?`), opts:sh([ans,(a/2+0.5).toFixed(1),(a/2+1).toFixed(1)]), ans }; }
      case 'ratio': { const k=r(2,5), a=2*k, b=3*k; return { q:t(`Rút gọn tỉ số ${a} : ${b} về tối giản:`,`Simplify the ratio ${a} : ${b}:`), opts:sh(['2 : 3','3 : 2',`${a} : 3`]), ans:'2 : 3' }; }
      case 'eq_ratio': { const a=r(2,5), b=r(3,7), k=r(2,4), ans=`${a*k}:${b*k}`; return { q:t(`Tỉ số nào tương đương với ${a}:${b}?`,`Which ratio is equivalent to ${a}:${b}?`), opts:sh([ans,`${a+1}:${b+1}`,`${a*k}:${b}`]), ans }; }
      case 'unit_rate': { const n=r(3,6), u=r(5,15), ans=u; return { q:t(`Đi ${n*u} km trong ${n} giờ. Vận tốc trung bình (km/giờ) là:`,`${n*u} km in ${n} hours. What is the unit rate (km/h)?`), opts:opts(ans,[ans+2,ans-1,n*u]), ans:String(ans) }; }
      case 'to_pct': { const p=[15,25,45,75,85][r(0,4)], ans=`${p}%`; return { q:t(`Số thập phân ${(p/100).toFixed(2)} bằng bao nhiêu phần trăm?`,`Write ${(p/100).toFixed(2)} as a percent:`), opts:sh([ans,`${p/10}%`,`${100-p}%`]), ans }; }
      case 'pct_of': { const p=[10,20,25,50][r(0,3)], n=r(2,10)*20, ans=(n*p)/100; return { q:t(`Tìm ${p}% của ${n}:`,`What is ${p}% of ${n}?`), opts:opts(ans,[ans+10,ans+5,n-ans]), ans:String(ans) }; }
      case 'sale': { const pr=r(2,10)*50, ans=pr*0.8; return { q:t(`Sản phẩm giá ${pr}k giảm 20%. Giá bán mới là:`,`An item priced at $${pr} is 20% off. Sale price:`), opts:opts(ans,[pr*0.2,ans+10,ans-10]), ans:String(ans) }; }
      case 'metric': { const k=r(2,max), ans=`${k*1000} m`; return { q:`${k} km = ___ m?`, opts:sh([ans,`${k*100} m`,`${k*10} m`]), ans }; }
      case 'quad': { const x=-r(1,9), y=r(1,9), ans=t('Góc phần tư II','Quadrant II'); return { q:t(`Điểm M(${x}; ${y}) nằm ở góc phần tư thứ mấy?`,`Which quadrant is point M(${x}, ${y}) in?`), opts:[ans,t('Góc phần tư I','Quadrant I'),t('Góc phần tư III','Quadrant III'),t('Góc phần tư IV','Quadrant IV')], ans }; }
      case 'coord_dist': { const y1=r(1,5), y2=r(6,12), ans=y2-y1; return { q:t(`Khoảng cách giữa A(3; ${y1}) và B(3; ${y2}) là:`,`Distance between A(3, ${y1}) and B(3, ${y2}):`), opts:opts(ans,[y1+y2,ans+1,ans-1]), ans:String(ans) }; }
      case 'eval_expr': { const x=r(2,8), a=r(2,5), b=r(1,10), ans=a*x+b; return { q:t(`Với x = ${x}, tính giá trị ${a}x + ${b}:`,`Evaluate ${a}x + ${b} for x = ${x}:`), opts:opts(ans,[a+x+b,ans+2,ans-2]), ans:String(ans) }; }
      case 'like_terms': { const a=r(2,8), b=r(2,8), ans=`${a+b}x`; return { q:t(`Thu gọn: ${a}x + ${b}x = ?`,`Combine like terms: ${a}x + ${b}x = ?`), opts:sh([ans,`${a*b}x`,`${a+b}x²`]), ans }; }
      case 'distrib': { const a=r(2,6), b=r(2,8), ans=`${a}x + ${a*b}`; return { q:t(`Khai triển: ${a}(x + ${b}) = ?`,`Expand: ${a}(x + ${b}) = ?`), opts:sh([ans,`${a}x + ${b}`,`${a+b}x`]), ans }; }
      case 'eq1_add': { const a=r(5,20), b=r(25,max), ans=b-a; return { q:t(`Giải phương trình: x + ${a} = ${b}`,`Solve: x + ${a} = ${b}`), opts:opts(ans,[b+a,ans+1,ans-1]), ans:String(ans) }; }
      case 'eq1_mul': { const a=r(2,9), x=r(2,12), ans=x; return { q:t(`Giải phương trình: ${a}x = ${a*x}`,`Solve: ${a}x = ${a*x}`), opts:opts(ans,[x+1,x-1,a*x]), ans:String(ans) }; }
      case 'ineq': { const k=r(5,12); return { q:t(`Giá trị x nào thỏa mãn x > ${k}?`,`Which value of x satisfies x > ${k}?`), opts:opts(k+3,[k,k-1,k-3]), ans:String(k+3) }; }
      case 'area_tri': { const a=r(4,12)*2, h=r(3,10), ans=(a*h)/2; return { q:t(`Diện tích tam giác đáy ${a}, chiều cao ${h} là:`,`Area of a triangle with base ${a} and height ${h}:`), opts:opts(ans,[a*h,a+h,ans+2]), ans:String(ans) }; }
      case 'area_trap': { const a=r(4,10), b=r(6,12), h=r(2,6)*2, ans=((a+b)*h)/2; return { q:t(`Diện tích hình thang đáy ${a}, ${b}, cao ${h} là:`,`Area of a trapezoid with bases ${a}, ${b} and height ${h}:`), opts:opts(ans,[(a+b)*h,a+b+h,ans+4]), ans:String(ans) }; }
      case 'vol_box': { const a=r(2,8), b=r(2,6), c=r(2,5), ans=a*b*c; return { q:t(`Thể tích hình hộp ${a}×${b}×${c} là:`,`Volume of a ${a}×${b}×${c} prism:`), opts:opts(ans,[a+b+c,(a+b)*c,ans+2]), ans:String(ans) }; }
      case 'cube_sa': { const a=r(2,max), ans=6*a*a; return { q:t(`Diện tích toàn phần hình lập phương cạnh ${a} là:`,`Surface area of a cube with side ${a}:`), opts:opts(ans,[4*a*a,a*a*a,a*a]), ans:String(ans) }; }
      case 'mean': { const a=r(4,10), b=r(10,20), c=3*r(8,15)-a-b, ans=(a+b+c)/3; return { q:t(`Trung bình cộng của ${a}, ${b}, ${c} là:`,`What is the mean of ${a}, ${b}, ${c}?`), opts:opts(ans,[ans+1,ans-1,a+b+c]), ans:String(ans) }; }
      case 'range': { const nums=[r(2,8),r(10,18),r(20,35)], ans=nums[2]-nums[0]; return { q:t(`Khoảng biến thiên của dãy ${nums.join(', ')} là:`,`What is the range of ${nums.join(', ')}?`), opts:opts(ans,[nums[1],nums[2],ans+2]), ans:String(ans) }; }
      case 'prob': { const n=r(2,5); return { q:t(`Túi có ${n} bi đỏ và ${10-n} bi xanh. Xác suất lấy được bi đỏ là:`,`A bag has ${n} red and ${10-n} blue marbles. Probability of picking red:`), opts:sh([`${n}/10`,`${10-n}/10`,'1/10']), ans:`${n}/10` }; }
      default: return { q:'2^3 = ?', opts:['6','8','9','12'], ans:'8' };
    }
  };
})();
