// public/js/grade6Generators.js
window.GRADE6_TOPICS = [
  { code:'A', title:'Số tự nhiên & Thứ tự thực hiện phép tính', skills:[{id:'g6-a-1',title:'Quy tắc PEMDAS (Free)',free:true,type:'pemdas',max:15},{id:'g6-a-2',title:'Biểu thức có dấu ngoặc',free:false,type:'pemdas',max:20}] },
  { code:'B', title:'Lũy thừa (Exponents)', skills:[{id:'g6-b-1',title:'Tính giá trị lũy thừa (Free)',free:true,type:'exp',max:5},{id:'g6-b-2',title:'Lũy thừa cơ số 10',free:false,type:'exp10',max:6}] },
  { code:'C', title:'Số nguyên tố & Hợp số', skills:[{id:'g6-c-1',title:'Nhận biết số nguyên tố',free:false,type:'prime',max:50},{id:'g6-c-2',title:'Phân tích ra thừa số nguyên tố',free:false,type:'prime_f',max:60}] },
  { code:'D', title:'Ước chung lớn nhất (ƯCLN) & BCNN', skills:[{id:'g6-d-1',title:'Tìm ƯCLN (GCF) của hai số',free:false,type:'gcf',max:48},{id:'g6-d-2',title:'Tìm BCNN (LCM) của hai số',free:false,type:'lcm',max:20}] },
  { code:'E', title:'Số nguyên âm & Dương', skills:[{id:'g6-e-1',title:'So sánh số nguyên âm và dương',free:false,type:'int_cmp',max:30},{id:'g6-e-2',title:'Giá trị tuyệt đối (|x|)',free:false,type:'abs',max:50}] },
  { code:'F', title:'Cộng & Trừ số nguyên', skills:[{id:'g6-f-1',title:'Cộng hai số nguyên khác dấu',free:false,type:'int_add',max:30},{id:'g6-f-2',title:'Trừ số nguyên',free:false,type:'int_sub',max:30}] },
  { code:'G', title:'Nhân & Chia phân số', skills:[{id:'g6-g-1',title:'Chia hai phân số (Free)',free:true,type:'div_frac',max:8},{id:'g6-g-2',title:'Nhân hỗn số',free:false,type:'mul_frac',max:8}] },
  { code:'H', title:'Số thập phân nâng cao', skills:[{id:'g6-h-1',title:'Nhân hai số thập phân',free:false,type:'dec_mul',max:15},{id:'g6-h-2',title:'Chia số thập phân',free:false,type:'dec_div',max:20}] },
  { code:'I', title:'Tỉ số (Ratios)', skills:[{id:'g6-i-1',title:'Viết tỉ số tối giản',free:false,type:'ratio',max:10},{id:'g6-i-2',title:'Tìm tỉ số tương đương',free:false,type:'eq_ratio',max:10}] },
  { code:'J', title:'Tỉ lệ đơn vị (Unit Rates)', skills:[{id:'g6-j-1',title:'Tính đơn giá / tốc độ đơn vị',free:false,type:'unit_rate',max:12},{id:'g6-j-2',title:'So sánh giá tốt hơn',free:false,type:'unit_rate',max:15}] },
  { code:'K', title:'Phần trăm (Percents)', skills:[{id:'g6-k-1',title:'Đổi phân số / thập phân sang %',free:false,type:'to_pct',max:10},{id:'g6-k-2',title:'Tìm phần trăm của một số',free:false,type:'pct_of',max:200}] },
  { code:'L', title:'Toán tiêu dùng (Giảm giá, Thuế)', skills:[{id:'g6-l-1',title:'Tính giá sau giảm %',free:false,type:'sale',max:200},{id:'g6-l-2',title:'Tính tiền thuế / tiền boa',free:false,type:'pct_of',max:100}] },
  { code:'M', title:'Đổi đơn vị đo lường', skills:[{id:'g6-m-1',title:'Đổi đơn vị hệ mét (km, m, g, kg)',free:false,type:'metric',max:20},{id:'g6-m-2',title:'Đổi đơn vị thời gian',free:false,type:'metric',max:10}] },
  { code:'N', title:'Mặt phẳng tọa độ (4 góc phần tư)', skills:[{id:'g6-n-1',title:'Xác định góc phần tư của điểm (x,y)',free:false,type:'quad',max:10},{id:'g6-n-2',title:'Khoảng cách giữa 2 điểm cùng trục',free:false,type:'coord_dist',max:10}] },
  { code:'O', title:'Biểu thức đại số (Expressions)', skills:[{id:'g6-o-1',title:'Tính giá trị biểu thức chứa biến',free:false,type:'eval_expr',max:12},{id:'g6-o-2',title:'Thu gọn đơn thức đồng dạng',free:false,type:'like_terms',max:15}] },
  { code:'P', title:'Tính chất phân phối', skills:[{id:'g6-p-1',title:'Khai triển a(x + b)',free:false,type:'distrib',max:10},{id:'g6-p-2',title:'Đặt nhân tử chung',free:false,type:'distrib',max:10}] },
  { code:'Q', title:'Phương trình 1 bước (One-step Equations)', skills:[{id:'g6-q-1',title:'Giải phương trình x + a = b',free:false,type:'eq1_add',max:40},{id:'g6-q-2',title:'Giải phương trình a·x = b',free:false,type:'eq1_mul',max:12}] },
  { code:'R', title:'Bất phương trình (Inequalities)', skills:[{id:'g6-r-1',title:'Kiểm tra nghiệm bất phương trình',free:false,type:'ineq',max:20},{id:'g6-r-2',title:'Viết bất phương trình từ câu chữ',free:false,type:'ineq',max:20}] },
  { code:'S', title:'Diện tích đa giác (Tam giác, Hình thang)', skills:[{id:'g6-s-1',title:'Diện tích tam giác & hình bình hành',free:false,type:'area_tri',max:20},{id:'g6-s-2',title:'Diện tích hình thang',free:false,type:'area_trap',max:15}] },
  { code:'T', title:'Thể tích & Diện tích toàn phần', skills:[{id:'g6-t-1',title:'Thể tích hình hộp chữ nhật (Free)',free:true,type:'vol_box',max:10},{id:'g6-t-2',title:'Diện tích toàn phần hình lập phương',free:false,type:'cube_sa',max:10}] },
  { code:'U', title:'Thống kê (Mean, Median, Mode, Range)', skills:[{id:'g6-u-1',title:'Tính Trung bình cộng (Mean)',free:false,type:'mean',max:30},{id:'g6-u-2',title:'Tìm Trung vị (Median) & Khoảng biến thiên',free:false,type:'range',max:40}] },
  { code:'V', title:'Xác suất cơ bản', skills:[{id:'g6-v-1',title:'Xác suất của một biến cố đơn',free:false,type:'prob',max:10},{id:'g6-v-2',title:'Xác suất biến cố đối',free:false,type:'prob',max:10}] }
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
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  switch (type) {
    case 'pemdas': { const a=r(2,10),b=r(2,6),c=r(2,5),ans=a+b*c; return { q:`Tính: ${a} + ${b} × ${c} = ?`, opts:opts(ans,[(a+b)*c,ans+2,ans-2]), ans:String(ans) }; }
    case 'exp': { const b=r(2,max), e=r(2,3), ans=Math.pow(b,e); return { q:`Tính giá trị lũy thừa: ${b}^${e} = ?`, opts:opts(ans,[b*e,ans+b,ans-1]), ans:String(ans) }; }
    case 'exp10': { const e=r(2,max), ans=Math.pow(10,e); return { q:`10^${e} bằng bao nhiêu?`, opts:opts(ans,[10*e,ans*10,ans/10]), ans:String(ans) }; }
    case 'prime': { const p=[2,3,5,7,11,13,17,19,23,29][r(0,9)], c=[4,6,8,9,10,12,14,15][r(0,7)]; return { q:`Số nào sau đây là SỐ NGUYÊN TỐ?`, opts:sh([String(p),String(c),String(c+2),'1']), ans:String(p) }; }
    case 'prime_f': { const p=[2,3,5][r(0,2)], q=[7,11,13][r(0,2)]; return { q:`Phân tích ${p*q} ra thừa số nguyên tố:`, opts:sh([`${p} × ${q}`,`${p} × ${q+1}`,`1 × ${p*q}`]), ans:`${p} × ${q}` }; }
    case 'gcf': { const g=r(2,6), a=g*r(2,5), b=g*r(2,5), ans=gcd(a,b); return { q:`ƯCLN của ${a} và ${b} là:`, opts:opts(ans, [ans+1, ans+2, Math.max(1, ans-1)]), ans:String(ans) }; }
    case 'lcm': { const a=r(3,8), b=r(4,10), ans=(a*b)/gcd(a,b); return { q:`BCNN của ${a} và ${b} là:`, opts:opts(ans,[a*b,ans+2,Math.max(a,b)]), ans:String(ans) }; }
    case 'int_cmp': { const a=-r(1,max), b=-r(1,max); return { q:`So sánh: ${a} ___ ${b}`, opts:['<','>','='], ans:a<b?'<':(a>b?'>':'=') }; }
    case 'abs': { const a=-r(5,max), ans=Math.abs(a); return { q:`Giá trị tuyệt đối |${a}| bằng:`, opts:opts(ans,[a,0,ans+1]), ans:String(ans) }; }
    case 'int_add': { const a=-r(5,max), b=r(3,max), ans=a+b; return { q:`Tính: (${a}) + ${b} = ?`, opts:opts(ans,[-ans,ans+2,ans-2]), ans:String(ans) }; }
    case 'int_sub': { const a=r(2,15), b=r(5,20), ans=a-b; return { q:`Tính: ${a} - ${b} = ?`, opts:opts(ans,[b-a,ans+1,ans-1]), ans:String(ans) }; }
    case 'div_frac': { const a=r(1,3),b=r(4,7),c=r(1,3),d=r(4,7), ans=`${a*d}/${b*c}`; return { q:`Tính: ${a}/${b} : ${c}/${d} = ?`, opts:sh([ans,`${a*c}/${b*d}`,`${b*c}/${a*d}`]), ans }; }
    case 'mul_frac': { const a=r(1,3),b=r(4,7),c=r(1,3),d=r(4,7), ans=`${a*c}/${b*d}`; return { q:`Tính: ${a}/${b} × ${c}/${d} = ?`, opts:sh([ans,`${a+c}/${b+d}`,`${a*d}/${b*c}`]), ans }; }
    case 'dec_mul': { const a=r(11,35)/10, b=r(2,5), ans=(a*b).toFixed(1); return { q:`Tính: ${a} × ${b} = ?`, opts:sh([ans,(a*b+1).toFixed(1),(a*b-0.5).toFixed(1)]), ans }; }
    case 'dec_div': { const a=[r(0,3)], ans=(a/2).toFixed(1); return { q:`Tính: ${a} : 2 = ?`, opts:sh([ans,(a/2+0.5).toFixed(1),(a/2+1).toFixed(1)]), ans }; }
    case 'ratio': { const k=r(2,5), a=2*k, b=3*k; return { q:`Rút gọn tỉ số ${a} : ${b} về tối giản:`, opts:sh(['2 : 3','3 : 2',`${a} : 3`]), ans:'2 : 3' }; }
    case 'eq_ratio': { const a=r(2,5), b=r(3,7), k=r(2,4), ans=`${a*k}:${b*k}`; return { q:`Tỉ số nào tương đương với ${a}:${b}?`, opts:sh([ans,`${a+1}:${b+1}`,`${a*k}:${b}`]), ans }; }
    case 'unit_rate': { const n=r(3,6), u=r(5,15), ans=u; return { q:`Đi ${n*u} km trong ${n} giờ. Vận tốc trung bình (km/giờ) là:`, opts:opts(ans,[ans+2,ans-1,n*u]), ans:String(ans) }; }
    case 'to_pct': { const p=[r(0,4)], ans=`${p}%`; return { q:`Số thập phân ${(p/100).toFixed(2)} bằng bao nhiêu phần trăm?`, opts:sh([ans,`${p/10}%`,`${100-p}%`]), ans }; }
    case 'pct_of': { const p=[r(0,3)], n=r(2,10)*20, ans=(n*p)/100; return { q:`Tìm ${p}% của ${n}:`, opts:opts(ans,[ans+10,ans+5,n-ans]), ans:String(ans) }; }
    case 'sale': { const pr=r(2,10)*50, ans=pr*0.8; return { q:`Sản phẩm giá ${pr}k giảm 20%. Giá bán mới là:`, opts:opts(ans,[pr*0.2,ans+10,ans-10]), ans:String(ans) }; }
    case 'metric': { const k=r(2,max), ans=`${k*1000} m`; return { q:`${k} km = ___ m?`, opts:sh([ans,`${k*100} m`,`${k*10} m`]), ans }; }
    case 'quad': { const x=-r(1,9), y=r(1,9); return { q:`Điểm M(${x}; ${y}) nằm ở góc phần tư thứ mấy?`, opts:['Góc phần tư II','Góc phần tư I','Góc phần tư III','Góc phần tư IV'], ans:'Góc phần tư II' }; }
    case 'coord_dist': { const y1=r(1,5), y2=r(6,12), ans=y2-y1; return { q:`Khoảng cách giữa A(3; ${y1}) và B(3; ${y2}) là:`, opts:opts(ans,[y1+y2,ans+1,ans-1]), ans:String(ans) }; }
    case 'eval_expr': { const x=r(2,8), a=r(2,5), b=r(1,10), ans=a*x+b; return { q:`Với x = ${x}, tính giá trị ${a}x + ${b}:`, opts:opts(ans,[a+x+b,ans+2,ans-2]), ans:String(ans) }; }
    case 'like_terms': { const a=r(2,8), b=r(2,8), ans=`${a+b}x`; return { q:`Thu gọn: ${a}x + ${b}x = ?`, opts:sh([ans,`${a*b}x`,`${a+b}x²`]), ans }; }
    case 'distrib': { const a=r(2,6), b=r(2,8), ans=`${a}x + ${a*b}`; return { q:`Khai triển: ${a}(x + ${b}) = ?`, opts:sh([ans,`${a}x + ${b}`,`${a+b}x`]), ans }; }
    case 'eq1_add': { const a=r(5,20), b=r(25,max), ans=b-a; return { q:`Giải phương trình: x + ${a} = ${b}`, opts:opts(ans,[b+a,ans+1,ans-1]), ans:String(ans) }; }
    case 'eq1_mul': { const a=r(2,9), x=r(2,12), ans=x; return { q:`Giải phương trình: ${a}x = ${a*x}`, opts:opts(ans,[x+1,x-1,a*x]), ans:String(ans) }; }
    case 'ineq': { const k=r(5,12); return { q:`Giá trị x nào thỏa mãn x > ${k}?`, opts:opts(k+3,[k,k-1,k-3]), ans:String(k+3) }; }
    case 'area_tri': { const a=r(4,12)*2, h=r(3,10), ans=(a*h)/2; return { q:`Diện tích tam giác đáy ${a}, chiều cao ${h} là:`, opts:opts(ans,[a*h,a+h,ans+2]), ans:String(ans) }; }
    case 'area_trap': { const a=r(4,10),b=r(6,12),h=r(2,6)*2, ans=((a+b)*h)/2; return { q:`Diện tích hình thang đáy ${a}, ${b}, cao ${h} là:`, opts:opts(ans,[(a+b)*h,a+b+h,ans+4]), ans:String(ans) }; }
    case 'vol_box': { const a=r(2,8),b=r(2,6),c=r(2,5), ans=a*b*c; return { q:`Thể tích hình hộp ${a}×${b}×${c} là:`, opts:opts(ans,[a+b+c,(a+b)*c,ans+2]), ans:String(ans) }; }
    case 'cube_sa': { const a=r(2,max), ans=6*a*a; return { q:`Diện tích toàn phần hình lập phương cạnh ${a} là:`, opts:opts(ans,[4*a*a,a*a*a,a*a]), ans:String(ans) }; }
    case 'mean': { const a=r(4,10),b=r(10,20),c=3*r(8,15)-a-b, ans=(a+b+c)/3; return { q:`Trung bình cộng (Mean) của ${a}, ${b}, ${c} là:`, opts:opts(ans,[ans+1,ans-1,a+b+c]), ans:String(ans) }; }
    case 'range': { const nums=[r(2,8),r(10,18),r(20,35)], ans=nums-nums[0]; return { q:`Khoảng biến thiên (Range) của dãy ${nums.join(', ')} là:`, opts:opts(ans,[nums,nums,ans+1]), ans:String(ans) }; }
    case 'prob': { const n=r(2,5); return { q:`Túi có ${n} bi đỏ và ${10-n} bi xanh. Xác suất lấy được bi đỏ là:`, opts:sh([`${n}/10`,`${10-n}/10`,`1/10`]), ans:`${n}/10` }; }
    default: return { q:'2^3 = ?', opts:['6','8','9','12'], ans:'8' };
  }
};
