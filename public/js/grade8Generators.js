// public/js/grade8Generators.js
window.GRADE8_TOPICS = [
  { code:'A', title:'Số vô tỉ & Số thực', skills:[{id:'g8-a-1',title:'Phân biệt số hữu tỉ và vô tỉ (Free)',free:true,type:'irrat',max:10},{id:'g8-a-2',title:'Ước lượng căn bậc hai',free:false,type:'sqrt_est',max:50}] },
  { code:'B', title:'Căn bậc hai & Căn bậc ba', skills:[{id:'g8-b-1',title:'Tính căn bậc hai số chính phương (Free)',free:true,type:'sqrt',max:15},{id:'g8-b-2',title:'Tính căn bậc ba',free:false,type:'cbrt',max:6}] },
  { code:'C', title:'Quy tắc Lũy thừa (Số mũ âm & 0)', skills:[{id:'g8-c-1',title:'Lũy thừa với số mũ 0 và âm',free:false,type:'neg_exp',max:5},{id:'g8-c-2',title:'Lũy thừa của lũy thừa (a^m)^n',free:false,type:'pow_pow',max:5}] },
  { code:'D', title:'Ký hiệu khoa học (Scientific Notation)', skills:[{id:'g8-d-1',title:'Đổi sang ký hiệu khoa học',free:false,type:'sci_to',max:9},{id:'g8-d-2',title:'Đổi từ ký hiệu khoa học ra số',free:false,type:'sci_from',max:5}] },
  { code:'E', title:'Phương trình bậc nhất nhiều bước', skills:[{id:'g8-e-1',title:'Giải phương trình có ẩn 2 vế',free:false,type:'eq_both',max:10},{id:'g8-e-2',title:'Phương trình vô nghiệm / vô số nghiệm',free:false,type:'eq_sols',max:5}] },
  { code:'F', title:'Hằng đẳng thức đáng nhớ', skills:[{id:'g8-f-1',title:'Bình phương của một tổng (a+b)²',free:false,type:'id_sq',max:6},{id:'g8-f-2',title:'Hiệu hai bình phương a² - b²',free:false,type:'id_diff',max:12}] },
  { code:'G', title:'Khái niệm Hàm số (Functions)', skills:[{id:'g8-g-1',title:'Tính giá trị hàm số f(x) (Free)',free:true,type:'func_eval',max:10},{id:'g8-g-2',title:'Nhận biết đồ thị hàm số',free:false,type:'func_eval',max:10}] },
  { code:'H', title:'Hệ số góc (Slope) của đường thẳng', skills:[{id:'g8-h-1',title:'Tìm hệ số góc từ y = ax + b',free:false,type:'slope_eq',max:10},{id:'g8-h-2',title:'Tính hệ số góc qua 2 điểm',free:false,type:'slope_pts',max:10}] },
  { code:'I', title:'Đường thẳng y = ax + b', skills:[{id:'g8-i-1',title:'Tìm tung độ gốc (y-intercept)',free:false,type:'y_int',max:10},{id:'g8-i-2',title:'Hai đường thẳng song song / cắt nhau',free:false,type:'par_line',max:10}] },
  { code:'J', title:'Hệ 2 phương trình bậc nhất 2 ẩn', skills:[{id:'g8-j-1',title:'Giải hệ bằng phương pháp cộng đại số',free:false,type:'sys_eq',max:8},{id:'g8-j-2',title:'Kiểm tra nghiệm của hệ phương trình',free:false,type:'sys_eq',max:8}] },
  { code:'K', title:'Phép biến hình: Tịnh tiến & Đối xứng', skills:[{id:'g8-k-1',title:'Tọa độ điểm sau phép tịnh tiến',free:false,type:'trans',max:8},{id:'g8-k-2',title:'Phép đối xứng qua trục Ox, Oy',free:false,type:'reflect',max:8}] },
  { code:'L', title:'Phép quay & Phép vị tự', skills:[{id:'g8-l-1',title:'Tọa độ sau phép vị tự tâm O tỉ số k',free:false,type:'dilate',max:5},{id:'g8-l-2',title:'Hai hình đồng dạng',free:false,type:'dilate',max:4}] },
  { code:'M', title:'Đường thẳng song song & Cát tuyến', skills:[{id:'g8-m-1',title:'Góc so le trong & Đồng vị',free:false,type:'transv',max:160},{id:'g8-m-2',title:'Tổng góc ngoài tam giác',free:false,type:'ext_ang',max:120}] },
  { code:'N', title:'Định lý Pytago (Pythagorean Theorem)', skills:[{id:'g8-n-1',title:'Tính cạnh huyền tam giác vuông',free:false,type:'pyth_c',max:5},{id:'g8-n-2',title:'Tính cạnh góc vuông',free:false,type:'pyth_a',max:5}] },
  { code:'O', title:'Khoảng cách giữa 2 điểm trên mặt phẳng', skills:[{id:'g8-o-1',title:'Khoảng cách dùng Pytago',free:false,type:'pyth_c',max:4},{id:'g8-o-2',title:'Kiểm tra tam giác vuông (Pytago đảo)',free:false,type:'pyth_conv',max:3}] },
  { code:'P', title:'Hình học: Tứ giác & Hình thang cân', skills:[{id:'g8-p-1',title:'Tổng 4 góc trong tứ giác (360°)',free:false,type:'quad_ang',max:100},{id:'g8-p-2',title:'Đường trung bình của tam giác',free:false,type:'midseg',max:20}] },
  { code:'Q', title:'Tam giác đồng dạng (Định lý Talet)', skills:[{id:'g8-q-1',title:'Tìm cạnh theo tỉ số đồng dạng',free:false,type:'sim_tri',max:10},{id:'g8-q-2',title:'Ứng dụng định lý Talet',free:false,type:'sim_tri',max:10}] },
  { code:'R', title:'Thể tích Hình trụ (Cylinders)', skills:[{id:'g8-r-1',title:'Thể tích hình trụ V = πr²h',free:false,type:'vol_cyl',max:8},{id:'g8-r-2',title:'Diện tích xung quanh hình trụ',free:false,type:'vol_cyl',max:6}] },
  { code:'S', title:'Thể tích Hình nón (Cones)', skills:[{id:'g8-s-1',title:'Thể tích hình nón V = 1/3·πr²h',free:false,type:'vol_cone',max:6},{id:'g8-s-2',title:'So sánh thể tích hình nón và trụ',free:false,type:'vol_cone',max:6}] },
  { code:'T', title:'Thể tích Hình cầu (Spheres)', skills:[{id:'g8-t-1',title:'Thể tích hình cầu V = 4/3·πr³ (Free)',free:true,type:'vol_sph',max:6},{id:'g8-t-2',title:'Diện tích mặt cầu',free:false,type:'vol_sph',max:6}] },
  { code:'U', title:'Biểu đồ phân tán (Scatter Plots)', skills:[{id:'g8-u-1',title:'Xu hướng tương quan dương / âm',free:false,type:'scatter',max:3},{id:'g8-u-2',title:'Đường khớp tốt nhất (Line of best fit)',free:false,type:'func_eval',max:10}] },
  { code:'V', title:'Bảng tần số hai chiều (Two-way Tables)', skills:[{id:'g8-v-1',title:'Đọc tổng hàng và tổng cột',free:false,type:'twoway',max:30},{id:'g8-v-2',title:'Tính tần suất tương đối',free:false,type:'twoway',max:20}] }
];

window.generateGrade8Question = function (type, max = 10) {
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const sh = a => [...a].sort(() => Math.random() - 0.5);
  const opts = (ans, cands) => {
    const s = new Set([String(ans)]);
    cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
    let k = 1; while (s.size < 4) s.add(String(k++));
    return sh([...s]);
  };
  switch (type) {
    case 'irrat': return { q:'Số nào sau đây là SỐ VÔ TỈ?', opts:sh(['√2','3/4','0,25','-5']), ans:'√2' };
    case 'sqrt_est': { const n=r(10,24); return { q:`√${n} nằm giữa hai số tự nhiên liên tiếp nào?`, opts:sh(['3 và 4','4 và 5','2 và 3','5 và 6']), ans:n<16?'3 và 4':'4 và 5' }; }
    case 'sqrt': { const k=r(2,max), ans=k; return { q:`Tính √${k*k} = ?`, opts:opts(ans,[k+1,k-1,k*2]), ans:String(ans) }; }
    case 'cbrt': { const k=r(2,max), ans=k; return { q:`Tính căn bậc ba ∛${k*k*k} = ?`, opts:opts(ans,[k+1,k*k,k-1]), ans:String(ans) }; }
    case 'neg_exp': { const b=r(2,max); return { q:`Giá trị của ${b}^0 là:`, opts:['1','0',String(b),'-1'], ans:'1' }; }
    case 'pow_pow': { const b=r(2,5), m=r(2,4), n=r(2,3); return { q:`Viết gọn (${b}^${m})^${n}:`, opts:sh([`${b}^${m*n}`,`${b}^${m+n}`,`${b*n}^${m}`]), ans:`${b}^${m*n}` }; }
    case 'sci_to': { const d=r(2,max), e=r(3,6), ans=`${d} × 10^${e}`; return { q:`Viết ${d}${'0'.repeat(e)} dưới dạng ký hiệu khoa học:`, opts:sh([ans,`${d} × 10^${e-1}`,`${d} × 10^${e+1}`]), ans }; }
    case 'sci_from': { const d=r(2,8), e=r(2,4), ans=d*Math.pow(10,e); return { q:`Giá trị của ${d} × 10^${e} là:`, opts:opts(ans,[ans*10,ans/10,d*e]), ans:String(ans) }; }
    case 'eq_both': { const x=r(2,8), a=r(3,7), c=r(1,a-1), b=r(2,10), d=(a-c)*x+b; return { q:`Giải phương trình: ${a}x + ${b} = ${c}x + ${d}`, opts:opts(x,[x+1,x-1,x+2]), ans:String(x) }; }
    case 'eq_sols': return { q:'Phương trình 2x + 3 = 2x + 5 có bao nhiêu nghiệm?', opts:['Vô nghiệm','1 nghiệm','Vô số nghiệm'], ans:'Vô nghiệm' };
    case 'id_sq': { const a=r(2,max); return { q:`Khai triển hằng đẳng thức (x + ${a})²:`, opts:sh([`x² + ${2*a}x + ${a*a}`,`x² + ${a*a}`,`x² + ${a}x + ${a*a}`]), ans:`x² + ${2*a}x + ${a*a}` }; }
    case 'id_diff': { const a=r(2,max); return { q:`Phân tích x² - ${a*a} thành nhân tử:`, opts:sh([`(x - ${a})(x + ${a})`,`(x - ${a})²`,`(x + ${a})²`]), ans:`(x - ${a})(x + ${a})` }; }
    case 'func_eval': { const a=r(2,5),b=r(1,8),x=r(1,6), ans=a*x+b; return { q:`Cho hàm số f(x) = ${a}x + ${b}. Giá trị f(${x}) là:`, opts:opts(ans,[ans+2,ans-2,a+x+b]), ans:String(ans) }; }
    case 'slope_eq': { const a=r(2,max), b=r(1,9); return { q:`Hệ số góc của đường thẳng y = ${a}x - ${b} là:`, opts:opts(a,[-b,b,a+1]), ans:String(a) }; }
    case 'slope_pts': { const m=r(2,5), x1=1, y1=r(1,5), x2=3, y2=y1+m*2; return { q:`Hệ số góc đường thẳng qua (${x1}; ${y1}) và (${x2}; ${y2}) là:`, opts:opts(m,[m+1,m*2,m-1]), ans:String(m) }; }
    case 'y_int': { const a=r(2,7), b=-r(1,max); return { q:`Tung độ gốc (cắt trục Oy) của y = ${a}x + (${b}) là:`, opts:opts(b,[a,-b,0]), ans:String(b) }; }
    case 'par_line': { const a=r(2,7); return { q:`Đường thẳng nào song song với y = ${a}x + 3?`, opts:sh([`y = ${a}x - 5`,`y = ${a+1}x + 3`,`y = -${a}x + 3`]), ans:`y = ${a}x - 5` }; }
    case 'sys_eq': { const x=r(2,6), y=r(1,5); return { q:`Nghiệm của hệ { x + y = ${x+y}; x - y = ${x-y} } là:`, opts:sh([`(${x}; ${y})`,`(${y}; ${x})`,`(${x+1}; ${y})`]), ans:`(${x}; ${y})` }; }
    case 'trans': { const x=r(1,6), y=r(1,6), dx=r(2,5), dy=r(1,4); return { q:`Tịnh tiến A(${x}; ${y}) sang phải ${dx} đơn vị, lên trên ${dy} đơn vị được:`, opts:sh([`(${x+dx}; ${y+dy})`,`(${x-dx}; ${y+dy})`,`(${x+dx}; ${y-dy})`]), ans:`(${x+dx}; ${y+dy})` }; }
    case 'reflect': { const x=r(2,max), y=r(2,max); return { q:`Điểm đối xứng của (${x}; ${y}) qua trục hoành Ox là:`, opts:sh([`(${x}; ${-y})`,`(${-x}; ${y})`,`(${-x}; ${-y})`]), ans:`(${x}; ${-y})` }; }
    case 'dilate': { const x=r(1,4), y=r(1,4), k=r(2,3); return { q:`Phép vị tự tâm O tỉ số k = ${k} biến điểm (${x}; ${y}) thành:`, opts:sh([`(${x*k}; ${y*k})`,`(${x+k}; ${y+k})`,`(${x}; ${y*k})`]), ans:`(${x*k}; ${y*k})` }; }
    case 'transv': { const a=r(40,130); return { q:`Hai đường thẳng song song bị cắt bởi cát tuyến. Góc đồng vị với góc ${a}° bằng:`, opts:opts(`${a}°`,[`${180-a}°`,`${90-a}°`,'90°']), ans:`${a}°` }; }
    case 'ext_ang': { const a=r(40,70), b=r(40,70), ans=`${a+b}°`; return { q:`Góc ngoài tại đỉnh C của tam giác ABC (biết góc A=${a}°, B=${b}°) là:`, opts:sh([ans,`${180-a-b}°`,`${a}°`]), ans }; }
    case 'pyth_c': { const k=r(1,max), a=3*k, b=4*k, ans=5*k; return { q:`Tam giác vuông có hai cạnh góc vuông ${a} và ${b}. Cạnh huyền là:`, opts:opts(ans,[a+b,ans+1,ans-1]), ans:String(ans) }; }
    case 'pyth_a': { const k=r(1,max), c=5*k, b=4*k, ans=3*k; return { q:`Tam giác vuông có cạnh huyền ${c} và một cạnh ${b}. Cạnh còn lại là:`, opts:opts(ans,[c-b,ans+1,ans+2]), ans:String(ans) }; }
    case 'pyth_conv': return { q:'Bộ ba cạnh nào sau đây tạo thành TAM GIÁC VUÔNG?', opts:sh(['6, 8, 10','3, 4, 6','5, 6, 9','2, 3, 4']), ans:'6, 8, 10' };
    case 'quad_ang': { const a=80,b=90,c=r(70,110), ans=`${360-a-b-c}°`; return { q:`Tứ giác có 3 góc ${a}°, ${b}°, ${c}°. Góc thứ tư là:`, opts:sh([ans,`${180-c}°`,`${360-a-b}°`]), ans }; }
    case 'midseg': { const bc=r(4,max)*2, ans=bc/2; return { q:`Đoạn thẳng nối trung điểm 2 cạnh của tam giác có đáy ${bc} cm dài:`, opts:opts(ans,[bc,bc*2,ans+2]), ans:String(ans) }; }
    case 'sim_tri': { const k=r(2,4), a=r(3,7), ans=a*k; return { q:`Hai tam giác đồng dạng tỉ số k = ${k}. Cạnh tương ứng với cạnh ${a} cm là:`, opts:opts(ans,[a+k,a*2+1,ans+2]), ans:String(ans) }; }
    case 'vol_cyl': { const rad=r(2,5), h=r(3,8), ans=`${rad*rad*h}π`; return { q:`Thể tích hình trụ bán kính r=${rad}, cao h=${h} là:`, opts:sh([ans,`${rad*h}π`,`${2*rad*h}π`]), ans }; }
    case 'vol_cone': { const rad=r(2,5), h=3*r(1,3), ans=`${(rad*rad*h)/3}π`; return { q:`Thể tích hình nón bán kính r=${rad}, cao h=${h} là:`, opts:sh([ans,`${rad*rad*h}π`,`${rad*h}π`]), ans }; }
    case 'vol_sph': { const rad=3, ans='36π'; return { q:'Thể tích hình cầu bán kính r = 3 là:', opts:['36π','27π','12π','108π'], ans }; }
    case 'scatter': return { q:'Khi x tăng và y cũng tăng theo đường thẳng, biểu đồ phân tán có tương quan:', opts:['Tương quan dương','Tương quan âm','Không tương quan'], ans:'Tương quan dương' };
    case 'twoway': { const a=r(10,20), b=r(10,20), ans=a+b; return { q:`Bảng 2 chiều có ${a} nam thích Toán và ${b} nữ thích Toán. Tổng số bạn thích Toán là:`, opts:opts(ans,[Math.abs(a-b),ans+2,ans-1]), ans:String(ans) }; }
    default: return { q:'√49 = ?', opts:['5','6','7','8'], ans:'7' };
  }
};
