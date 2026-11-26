// public/js/grade9Generators.js
window.GRADE9_TOPICS = [
  { code:'A', title:'Phương trình & Bất phương trình bậc nhất', skills:[{id:'g9-a-1',title:'Giải phương trình chứa dấu ngoặc (Free)',free:true,type:'lin_eq',max:8},{id:'g9-a-2',title:'Phương trình chứa giá trị tuyệt đối |x|=a',free:false,type:'abs_eq',max:15}] },
  { code:'B', title:'Hàm số & Đường thẳng (Slope-Intercept)', skills:[{id:'g9-b-1',title:'Viết phương trình y = mx + b (Free)',free:true,type:'line_eq',max:8},{id:'g9-b-2',title:'Đường thẳng vuông góc (m1·m2 = -1)',free:false,type:'perp',max:6}] },
  { code:'C', title:'Hệ phương trình bậc nhất 2 ẩn', skills:[{id:'g9-c-1',title:'Giải hệ bằng phương pháp thế',free:false,type:'sys_eq',max:8},{id:'g9-c-2',title:'Giải bài toán bằng cách lập hệ PT',free:false,type:'sys_word',max:20}] },
  { code:'D', title:'Hệ bất phương trình bậc nhất', skills:[{id:'g9-d-1',title:'Tìm miền nghiệm thỏa mãn',free:false,type:'sys_ineq',max:10},{id:'g9-d-2',title:'Kiểm tra điểm thuộc miền nghiệm',free:false,type:'sys_ineq',max:10}] },
  { code:'E', title:'Lũy thừa & Hàm số mũ (Exponential)', skills:[{id:'g9-e-1',title:'Tính giá trị hàm mũ y = a·b^x',free:false,type:'exp_fn',max:4},{id:'g9-e-2',title:'Bài toán tăng trưởng kép',free:false,type:'exp_fn',max:4}] },
  { code:'F', title:'Cấp số cộng & Cấp số nhân (Sequences)', skills:[{id:'g9-f-1',title:'Tìm số hạng thứ n của cấp số cộng',free:false,type:'arith_seq',max:10},{id:'g9-f-2',title:'Tìm số hạng của cấp số nhân',free:false,type:'geom_seq',max:4}] },
  { code:'G', title:'Đa thức (Cộng, Trừ, Bậc đa thức)', skills:[{id:'g9-g-1',title:'Tìm bậc của đa thức (Free)',free:true,type:'poly_deg',max:6},{id:'g9-g-2',title:'Cộng trừ hai đa thức',free:false,type:'poly_add',max:8}] },
  { code:'H', title:'Nhân đa thức', skills:[{id:'g9-h-1',title:'Nhân hai nhị thức (x + a)(x + b)',free:false,type:'foil',max:8},{id:'g9-h-2',title:'Bình phương nhị thức (ax + b)²',free:false,type:'foil',max:6}] },
  { code:'I', title:'Phân tích đa thức thành nhân tử (Factoring)', skills:[{id:'g9-i-1',title:'Phân tích tam thức x² + bx + c',free:false,type:'fac_quad',max:7},{id:'g9-i-2',title:'Phân tích dùng hằng đẳng thức',free:false,type:'fac_diff',max:12}] },
  { code:'J', title:'Hàm số bậc hai y = ax² (Parabol)', skills:[{id:'g9-j-1',title:'Tìm đỉnh của Parabol y = a(x-h)² + k',free:false,type:'vertex',max:8},{id:'g9-j-2',title:'Bề lõm (hướng lên / xuống) của Parabol',free:false,type:'parab_dir',max:6}] },
  { code:'K', title:'Phương trình bậc hai ax² + bx + c = 0', skills:[{id:'g9-k-1',title:'Giải phương trình tích (x-a)(x-b)=0',free:false,type:'quad_root',max:9},{id:'g9-k-2',title:'Tính biệt thức Delta (Δ = b² - 4ac)',free:false,type:'discrim',max:8}] },
  { code:'L', title:'Công thức nghiệm & Định lý Vi-ét', skills:[{id:'g9-l-1',title:'Tổng hai nghiệm x1 + x2 = -b/a',free:false,type:'vieta_sum',max:10},{id:'g9-l-2',title:'Tích hai nghiệm x1·x2 = c/a',free:false,type:'vieta_prod',max:12}] },
  { code:'M', title:'Biểu thức chứa căn (Radicals)', skills:[{id:'g9-m-1',title:'Đưa thừa số ra ngoài dấu căn √(a²b)',free:false,type:'rad_simp',max:6},{id:'g9-m-2',title:'Cộng trừ căn thức đồng dạng',free:false,type:'rad_add',max:8}] },
  { code:'N', title:'Trục căn thức ở mẫu & PT vô tỉ', skills:[{id:'g9-n-1',title:'Giải phương trình √x = a',free:false,type:'rad_eq',max:10},{id:'g9-n-2',title:'Điều kiện xác định của √(x - a)',free:false,type:'rad_dom',max:12}] },
  { code:'O', title:'Phân thức đại số (Rational Expressions)', skills:[{id:'g9-o-1',title:'Tìm điều kiện xác định của phân thức',free:false,type:'rat_dom',max:10},{id:'g9-o-2',title:'Rút gọn phân thức đại số',free:false,type:'rat_simp',max:8}] },
  { code:'P', title:'Hệ thức lượng trong tam giác vuông', skills:[{id:'g9-p-1',title:'Tính sin, cos, tan góc nhọn',free:false,type:'trig',max:5},{id:'g9-p-2',title:'Hệ thức h² = b’·c’',free:false,type:'metric_tri',max:9}] },
  { code:'Q', title:'Đường tròn & Góc nội tiếp', skills:[{id:'g9-q-1',title:'Liên hệ góc nội tiếp và góc ở tâm',free:false,type:'insc_ang',max:60},{id:'g9-q-2',title:'Tứ giác nội tiếp đường tròn',free:false,type:'cyc_quad',max:110}] },
  { code:'R', title:'Thống kê (Độ lệch chuẩn & Tứ phân vị)', skills:[{id:'g9-r-1',title:'Tìm Tứ phân vị giữa (Q2 = Median)',free:false,type:'median',max:20},{id:'g9-r-2',title:'Khoảng tứ phân vị IQR = Q3 - Q1',free:false,type:'iqr',max:20}] },
  { code:'S', title:'Hồi quy tuyến tính & Tương quan', skills:[{id:'g9-s-1',title:'Hệ số tương quan r (-1 đến 1)',free:false,type:'corr',max:1},{id:'g9-s-2',title:'Dự đoán giá trị từ đường hồi quy',free:false,type:'line_eval',max:10}] },
  { code:'T', title:'Tổ hợp & Hoán vị (Free)', skills:[{id:'g9-t-1',title:'Quy tắc đếm & Giai thừa n! (Free)',free:true,type:'fact',max:5},{id:'g9-t-2',title:'Số hoán vị của n phần tử',free:false,type:'fact',max:5}] },
  { code:'U', title:'Xác suất có điều kiện & Độc lập', skills:[{id:'g9-u-1',title:'Xác suất hai biến cố độc lập',free:false,type:'indep_p',max:6},{id:'g9-u-2',title:'Đọc bảng tần số xác suất',free:false,type:'indep_p',max:6}] },
  { code:'V', title:'Ma trận cơ bản (Matrices)', skills:[{id:'g9-v-1',title:'Cộng hai ma trận 2×2',free:false,type:'mat_add',max:10},{id:'g9-v-2',title:'Nhân ma trận với một số (Scalar)',free:false,type:'mat_scal',max:6}] }
];

window.generateGrade9Question = function (type, max = 10) {
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const sh = a => [...a].sort(() => Math.random() - 0.5);
  const opts = (ans, cands) => {
    const s = new Set([String(ans)]);
    cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
    let k = 1; while (s.size < 4) s.add(String(k++));
    return sh([...s]);
  };
  switch (type) {
    case 'lin_eq': { const a=r(2,5), b=r(1,6), x=r(2,max); return { q:`Giải: ${a}(x - ${b}) = ${a*(x-b)}`, opts:opts(x,[x+1,x-1,b]), ans:String(x) }; }
    case 'abs_eq': { const a=r(2,max); return { q:`Tập nghiệm của |x| = ${a} là:`, opts:sh([`{${a}; -${a}}`,`{${a}}`,`{-${a}}`,'Vô nghiệm']), ans:`{${a}; -${a}}` }; }
    case 'line_eq': { const m=r(2,max), b=r(1,9); return { q:`Đường thẳng có hệ số góc ${m} và đi qua (0; ${b}) là:`, opts:sh([`y = ${m}x + ${b}`,`y = ${b}x + ${m}`,`y = ${m}x - ${b}`]), ans:`y = ${m}x + ${b}` }; }
    case 'perp': { const m=r(2,max); return { q:`Hệ số góc của đường thẳng vuông góc với y = ${m}x + 1 là:`, opts:sh([`-1/${m}`,`1/${m}`,`-${m}`,String(m)]), ans:`-1/${m}` }; }
    case 'sys_eq': { const x=r(2,6), y=r(1,5); return { q:`Giải hệ { 2x + y = ${2*x+y}; x - y = ${x-y} }:`, opts:sh([`(${x}; ${y})`,`(${y}; ${x})`,`(${x+1}; ${y})`]), ans:`(${x}; ${y})` }; }
    case 'sys_word': { const a=r(10,18), b=r(4,a-2); return { q:`Tổng 2 số là ${a+b}, hiệu là ${a-b}. Cặp số đó là:`, opts:sh([`(${a}; ${b})`,`(${a+1}; ${b-1})`,`(${b}; ${a-1})`]), ans:`(${a}; ${b})` }; }
    case 'sys_ineq': { const x=r(3,8), y=r(3,8); return { q:`Điểm nào thỏa mãn cả x > 2 và y > 2?`, opts:sh([`(${x}; ${y})`,`(1; ${y})`,`(${x}; 0)`]), ans:`(${x}; ${y})` }; }
    case 'exp_fn': { const b=r(2,3), x=r(2,max), ans=Math.pow(b,x); return { q:`Cho f(x) = ${b}^x. Giá trị f(${x}) là:`, opts:opts(ans,[b*x,ans+b,ans-1]), ans:String(ans) }; }
    case 'arith_seq': { const u1=r(2,6), d=r(3,7), n=5, ans=u1+4*d; return { q:`Cấp số cộng u1 = ${u1}, công sai d = ${d}. Số hạng thứ 5 (u5) là:`, opts:opts(ans,[u1+5*d,ans+d,ans-d]), ans:String(ans) }; }
    case 'geom_seq': { const u1=r(1,3), q=r(2,3), ans=u1*q*q*q; return { q:`Cấp số nhân u1 = ${u1}, công bội q = ${q}. Số hạng thứ 4 (u4) là:`, opts:opts(ans,[u1*q*q,ans*q,u1+3*q]), ans:String(ans) }; }
    case 'poly_deg': { const d=r(3,max); return { q:`Bậc của đa thức 3x^${d} + 5x² - 7 là:`, opts:opts(d, [d+1, d-1, 2]), ans:String(d) }; }
    case 'poly_add': { const a=r(2,6), b=r(2,6); return { q:`Tính: (${a}x² + 3x) + (${b}x² - x) = ?`, opts:sh([`${a+b}x² + 2x`,`${a+b}x² + 4x`,`${a*b}x² + 2x`]), ans:`${a+b}x² + 2x` }; }
    case 'foil': { const a=r(1,5), b=r(2,6); return { q:`Khai triển (x + ${a})(x + ${b}):`, opts:sh([`x² + ${a+b}x + ${a*b}`,`x² + ${a*b}x + ${a+b}`,`x² + ${a*b}`]), ans:`x² + ${a+b}x + ${a*b}` }; }
    case 'fac_quad': { const a=r(1,5), b=r(2,max); return { q:`Phân tích x² + ${a+b}x + ${a*b} thành nhân tử:`, opts:sh([`(x + ${a})(x + ${b})`,`(x - ${a})(x - ${b})`,`(x + ${a*b})(x + 1)`]), ans:`(x + ${a})(x + ${b})` }; }
    case 'fac_diff': { const a=r(2,max); return { q:`Phân tích x² - ${a*a} thành nhân tử:`, opts:sh([`(x - ${a})(x + ${a})`,`(x - ${a})²`,`(x + ${a})²`]), ans:`(x - ${a})(x + ${a})` }; }
    case 'vertex': { const h=r(1,max), k=r(1,max); return { q:`Đỉnh của Parabol y = (x - ${h})² + ${k} là:`, opts:sh([`(${h}; ${k})`,`(-${h}; ${k})`,`(${h}; -${k})`]), ans:`(${h}; ${k})` }; }
    case 'parab_dir': { const a=-r(1,max); return { q:`Parabol y = ${a}x² có bề lõm hướng về đâu?`, opts:['Hướng xuống dưới (mở xuống)','Hướng lên trên (mở lên)'], ans:'Hướng xuống dưới (mở xuống)' }; }
    case 'quad_root': { const a=r(1,5), b=r(6,max); return { q:`Nghiệm của phương trình (x - ${a})(x - ${b}) = 0 là:`, opts:sh([`x = ${a} hoặc x = ${b}`,`x = -${a} hoặc x = -${b}`,`x = ${a*b}`]), ans:`x = ${a} hoặc x = ${b}` }; }
    case 'discrim': { const b=r(4,max), a=1, c=r(1,3), ans=b*b-4*a*c; return { q:`Biệt thức Δ của x² + ${b}x + ${c} = 0 là:`, opts:opts(ans,[b*b+4*c,b-4*c,ans+2]), ans:String(ans) }; }
    case 'vieta_sum': { const s=r(3,max), p=r(1,5); return { q:`Tổng hai nghiệm x1 + x2 của x² - ${s}x + ${p} = 0 là:`, opts:opts(s,[-s,p,-p]), ans:String(s) }; }
    case 'vieta_prod': { const s=r(3,10), p=r(2,max); return { q:`Tích hai nghiệm x1·x2 của x² - ${s}x + ${p} = 0 là:`, opts:opts(p,[-p,s,-s]), ans:String(p) }; }
    case 'rad_simp': { const a=r(2,max), b=[2,3,5][r(0,2)]; return { q:`Rút gọn √${a*a*b} được:`, opts:sh([`${a}√${b}`,`${b}√${a}`,`${a*a}√${b}`]), ans:`${a}√${b}` }; }
    case 'rad_add': { const a=r(2,6), b=r(2,6); return { q:`Tính: ${a}√2 + ${b}√2 = ?`, opts:sh([`${a+b}√2`,`${a+b}√4`,`${a*b}√2`]), ans:`${a+b}√2` }; }
    case 'rad_eq': { const a=r(2,max), ans=a*a; return { q:`Giải phương trình √x = ${a}:`, opts:opts(ans,[a*2,a,ans+1]), ans:String(ans) }; }
    case 'rad_dom': { const a=r(2,max); return { q:`Điều kiện xác định của √(x - ${a}) là:`, opts:sh([`x ≥ ${a}`,`x > ${a}`,`x ≤ ${a}`]), ans:`x ≥ ${a}` }; }
    case 'rat_dom': { const a=r(2,max); return { q:`Điều kiện xác định của phân thức 5/(x - ${a}) là:`, opts:sh([`x ≠ ${a}`,`x ≠ -${a}`,`x > ${a}`]), ans:`x ≠ ${a}` }; }
    case 'rat_simp': { const a=r(2,max); return { q:`Rút gọn (x² - ${a*a}) / (x + ${a}) (với x ≠ -${a}):`, opts:sh([`x - ${a}`,`x + ${a}`,`x - ${a*a}`]), ans:`x - ${a}` }; }
    case 'trig': { return { q:`Tam giác vuông ABC (vuông tại A) có AB = 3, AC = 4, BC = 5. Giá trị sin(B) là:`, opts:['4/5','3/5','3/4','4/3'], ans:'4/5' }; }
    case 'metric_tri': { const b=4, c=9, ans=6; return { q:`Tam giác vuông có hình chiếu 2 cạnh góc vuông lên cạnh huyền là ${b} và ${c}. Đường cao h là:`, opts:opts(ans, [4, 9, 13]), ans:String(ans) }; }
    case 'insc_ang': { const a=r(25,max), ans=`${a*2}°`; return { q:`Góc nội tiếp bằng ${a}° thì góc ở tâm cùng chắn một cung bằng:`, opts:sh([ans,`${a}°`,`${a/2}°`]), ans }; }
    case 'cyc_quad': { const a=r(60,max), ans=`${180-a}°`; return { q:`Tứ giác ABCD nội tiếp đường tròn có góc A = ${a}°. Góc đối diện C bằng:`, opts:sh([ans,`${360-a}°`,`${a}°`]), ans }; }
    case 'median': { const a=r(2,6), b=r(7,12), c=r(13,20); return { q:`Trung vị (Median) của dãy ${a}, ${b}, ${c} là:`, opts:opts(b,[a,c,b+1]), ans:String(b) }; }
    case 'iqr': { const q1=r(5,10), q3=r(15,25), ans=q3-q1; return { q:`Cho Q1 = ${q1}, Q3 = ${q3}. Khoảng tứ phân vị IQR là:`, opts:opts(ans,[q1+q3,ans+2,ans-1]), ans:String(ans) }; }
    case 'corr': return { q:`Hệ số tương quan r = -0,92 biểu thị mối quan hệ:`, opts:['Tương quan âm rất mạnh','Tương quan dương mạnh','Không tương quan'], ans:'Tương quan âm rất mạnh' };
    case 'line_eval': { const a=r(2,4), b=r(1,5), x=r(2,6), ans=a*x+b; return { q:`Đường hồi quy y = ${a}x + ${b}. Tại x = ${x}, dự đoán y bằng:`, opts:opts(ans,[ans+2,ans-1,a+b]), ans:String(ans) }; }
    case 'fact': { const n=r(3,max), f=n===3?6:(n===4?24:120); return { q:`Tính ${n}! = ?`, opts:opts(f,[n*2,f+n,f-2]), ans:String(f) }; }
    case 'indep_p': return { q:`Tung một con xúc xắc 6 mặt và một đồng xu. Xác suất ra mặt 6 và mặt ngửa là:`, opts:['1/12','1/6','1/8','1/2'], ans:'1/12' };
    case 'mat_add': { const a=r(1,5), b=r(1,5), ans=a+b; return { q:`Cộng 2 ma trận: phần tử hàng 1 cột 1 của A là ${a}, của B là ${b}. Phần tử tương ứng của A + B là:`, opts:opts(ans,[a*b,Math.abs(a-b),ans+1]), ans:String(ans) }; }
    case 'mat_scal': { const k=r(2,5), a=r(2,6), ans=k*a; return { q:`Nhân ma trận với số ${k}: phần tử ${a} sẽ trở thành:`, opts:opts(ans,[k+a,ans+1,ans-1]), ans:String(ans) }; }
    default: return { q:'x² - 9 = 0 có nghiệm dương là:', opts:['2','3','4','9'], ans:'3' };
  }
};
