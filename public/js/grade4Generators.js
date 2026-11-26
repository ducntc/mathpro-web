// public/js/grade4Generators.js
window.GRADE4_TOPICS = [
  { code:'A', title:'Số có nhiều chữ số (Lớp triệu)', skills:[{id:'g4-a-1',title:'Giá trị chữ số theo hàng (Free)',free:true,type:'place_mil',max:9},{id:'g4-a-2',title:'So sánh số có nhiều chữ số',free:false,type:'cmp',max:900000}] },
  { code:'B', title:'Làm tròn & Dãy số quy luật', skills:[{id:'g4-b-1',title:'Làm tròn đến hàng trăm nghìn (Free)',free:true,type:'round100k',max:900000},{id:'g4-b-2',title:'Tìm quy luật dãy số',free:false,type:'seq',max:50}] },
  { code:'C', title:'Cộng & Trừ số lớn', skills:[{id:'g4-c-1',title:'Cộng số có 5–6 chữ số',free:false,type:'add',max:80000},{id:'g4-c-2',title:'Trừ số có 5–6 chữ số',free:false,type:'sub',max:80000}] },
  { code:'D', title:'Tính chất giao hoán & kết hợp', skills:[{id:'g4-d-1',title:'Tính nhanh bằng ghép cặp',free:false,type:'fast_add',max:100},{id:'g4-d-2',title:'Biểu thức chứa chữ (a + b)',free:false,type:'var_expr',max:30}] },
  { code:'E', title:'Nhân với 10, 100, 1000', skills:[{id:'g4-e-1',title:'Nhân nhẩm với 10, 100, 1000',free:false,type:'mul10n',max:90},{id:'g4-e-2',title:'Nhân số tròn chục',free:false,type:'mul20',max:50}] },
  { code:'F', title:'Nhân với số có 2 chữ số', skills:[{id:'g4-f-1',title:'Nhân số 2 chữ số với 2 chữ số',free:false,type:'mul22',max:35},{id:'g4-f-2',title:'Nhân nhẩm với 11',free:false,type:'mul11',max:80}] },
  { code:'G', title:'Chia cho số có 2 chữ số', skills:[{id:'g4-g-1',title:'Chia cho 10, 100, 1000 (Free)',free:true,type:'div10n',max:90},{id:'g4-g-2',title:'Chia cho số có 2 chữ số',free:false,type:'div22',max:30}] },
  { code:'H', title:'Dấu hiệu chia hết (2, 3, 5, 9)', skills:[{id:'g4-h-1',title:'Chia hết cho 2 và 5',free:false,type:'div25_rule',max:999},{id:'g4-h-2',title:'Chia hết cho 3 và 9',free:false,type:'div39_rule',max:999}] },
  { code:'I', title:'Tìm số trung bình cộng', skills:[{id:'g4-i-1',title:'Trung bình cộng của 2–3 số',free:false,type:'avg',max:40},{id:'g4-i-2',title:'Bài toán tìm tổng từ TBC',free:false,type:'avg_sum',max:30}] },
  { code:'J', title:'Tìm 2 số khi biết Tổng và Hiệu', skills:[{id:'g4-j-1',title:'Tìm số lớn (Tổng + Hiệu) : 2',free:false,type:'sum_diff',max:60},{id:'g4-j-2',title:'Tìm số bé (Tổng - Hiệu) : 2',free:false,type:'sum_diff_min',max:60}] },
  { code:'K', title:'Đo lường khối lượng (Yến, Tạ, Tấn)', skills:[{id:'g4-k-1',title:'Đổi Tấn, Tạ, Yến sang kg',free:false,type:'ton_kg',max:15},{id:'g4-k-2',title:'Cộng trừ đơn vị khối lượng',free:false,type:'ton_kg',max:10}] },
  { code:'L', title:'Thời gian (Thế kỷ, Phút, Giây)', skills:[{id:'g4-l-1',title:'Năm thuộc thế kỷ nào?',free:false,type:'century',max:2026},{id:'g4-l-2',title:'Đổi phút sang giây',free:false,type:'min_sec',max:10}] },
  { code:'M', title:'Đơn vị diện tích (dm², m², mm²)', skills:[{id:'g4-m-1',title:'Đổi m² sang dm²',free:false,type:'m2_dm2',max:15},{id:'g4-m-2',title:'Đổi dm² sang cm²',free:false,type:'m2_dm2',max:20}] },
  { code:'N', title:'Góc nhọn, Góc tù, Góc bẹt', skills:[{id:'g4-n-1',title:'Phân loại góc theo số đo độ',free:false,type:'angles',max:180},{id:'g4-n-2',title:'Hai đường thẳng vuông góc / song song',free:false,type:'lines',max:2}] },
  { code:'O', title:'Hình bình hành & Hình thoi', skills:[{id:'g4-o-1',title:'Diện tích hình bình hành',free:false,type:'area_para',max:20},{id:'g4-o-2',title:'Diện tích hình thoi',free:false,type:'area_rhom',max:20}] },
  { code:'P', title:'Khái niệm Phân số & Phân số bằng nhau', skills:[{id:'g4-p-1',title:'Tìm phân số bằng nhau',free:false,type:'eq_frac',max:10},{id:'g4-p-2',title:'Rút gọn phân số tối giản',free:false,type:'simp_frac',max:10}] },
  { code:'Q', title:'So sánh phân số', skills:[{id:'g4-q-1',title:'So sánh cùng mẫu / khác mẫu',free:false,type:'cmp_frac',max:10},{id:'g4-q-2',title:'So sánh phân số với 1',free:false,type:'cmp_one',max:10}] },
  { code:'R', title:'Cộng phân số', skills:[{id:'g4-r-1',title:'Cộng hai phân số cùng mẫu',free:false,type:'add_frac',max:12},{id:'g4-r-2',title:'Cộng phân số khác mẫu',free:false,type:'add_frac',max:12}] },
  { code:'S', title:'Trừ phân số', skills:[{id:'g4-s-1',title:'Trừ hai phân số cùng mẫu',free:false,type:'sub_frac',max:12},{id:'g4-s-2',title:'1 trừ đi một phân số',free:false,type:'one_sub_frac',max:10}] },
  { code:'T', title:'Nhân phân số', skills:[{id:'g4-t-1',title:'Nhân hai phân số (Free)',free:true,type:'mul_frac',max:8},{id:'g4-t-2',title:'Tìm phân số của một số',free:false,type:'frac_of_num',max:50}] },
  { code:'U', title:'Chia phân số', skills:[{id:'g4-u-1',title:'Chia hai phân số (Nhân đảo ngược)',free:false,type:'div_frac',max:8},{id:'g4-u-2',title:'Chia phân số cho số tự nhiên',free:false,type:'div_frac',max:8}] },
  { code:'V', title:'Số thập phân cơ bản (Giới thiệu)', skills:[{id:'g4-v-1',title:'Chuyển phân số thập phân /10',free:false,type:'dec10',max:9},{id:'g4-v-2',title:'Chuyển phân số thập phân /100',free:false,type:'dec100',max:99}] }
];

window.generateGrade4Question = function (type, max = 100) {
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const sh = a => [...a].sort(() => Math.random() - 0.5);
  const opts = (ans, cands) => {
    const s = new Set([String(ans)]);
    cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
    let k = 1; while (s.size < 4) s.add(String(k++));
    return sh([...s]);
  };
  switch (type) {
    case 'place_mil': { const d=r(1,9); return { q:`Trong số ${d}450000, chữ số ${d} ở hàng nào?`, opts:['Hàng triệu','Hàng trăm nghìn','Hàng chục nghìn','Hàng trăm'], ans:'Hàng triệu' }; }
    case 'cmp': { const a=r(100000,max),b=r(100000,max); return { q:`So sánh: ${a} ___ ${b}`, opts:['<','>','='], ans:a<b?'<':(a>b?'>':'=') }; }
    case 'round100k': { const n=r(120000,max), ans=Math.round(n/100000)*100000; return { q:`Làm tròn ${n} đến hàng trăm nghìn:`, opts:opts(ans,[ans+100000,Math.max(100000,ans-100000),Math.floor(n/100000)*100000]), ans:String(ans) }; }
    case 'seq': { const a=r(2,10), d=r(3,9), ans=a+d*3; return { q:`Tìm số tiếp theo: ${a}, ${a+d}, ${a+d*2}, ___`, opts:opts(ans,[ans+1,ans+d,ans-1]), ans:String(ans) }; }
    case 'add': { const a=r(10000,max),b=r(10000,max),ans=a+b; return { q:`Tính: ${a} + ${b} = ?`, opts:opts(ans,[ans+100,ans-100,ans+10]), ans:String(ans) }; }
    case 'sub': { const a=r(30000,max),b=r(10000,a-1000),ans=a-b; return { q:`Tính: ${a} - ${b} = ?`, opts:opts(ans,[ans+100,ans-100,ans+10]), ans:String(ans) }; }
    case 'fast_add': { const a=r(10,40)*2, b=r(15,85), ans=100+b; return { q:`Tính nhanh: ${a} + ${b} + ${100-a} = ?`, opts:opts(ans,[ans+10,ans-10,100]), ans:String(ans) }; }
    case 'var_expr': { const a=r(5,20),b=r(5,20), ans=a*2+b; return { q:`Với a = ${a}, b = ${b}, giá trị của a × 2 + b là:`, opts:opts(ans,[a+b,ans+2,ans-2]), ans:String(ans) }; }
    case 'mul10n': { const a=r(12,max), p = [10, 100, 1000][r(0,2)], ans=a*p; return { q:`Tính nhẩm: ${a} × ${p} = ?`, opts:opts(ans,[a*(p*10),a*(p/10),ans+10]), ans:String(ans) }; }
    case 'mul20': { const a=r(12,max),b=r(2,9)*10, ans=a*b; return { q:`Tính: ${a} × ${b} = ?`, opts:opts(ans,[ans+10,ans-10,ans+100]), ans:String(ans) }; }
    case 'mul22': { const a=r(11,max),b=r(11,29),ans=a*b; return { q:`Tính: ${a} × ${b} = ?`, opts:opts(ans,[ans+10,ans-10,ans+b]), ans:String(ans) }; }
    case 'mul11': { const a=r(12,max),ans=a*11; return { q:`Tính nhẩm: ${a} × 11 = ?`, opts:opts(ans,[ans+10,ans-10,a*10]), ans:String(ans) }; }
    case 'div10n': { const a=r(12,max), p = [10, 100][r(0,1)], ans=a; return { q:`Tính: ${a*p} : ${p} = ?`, opts:opts(ans,[a*10,a+1,Math.max(1,a-1)]), ans:String(ans) }; }
    case 'div22': { const b=r(11,25), q=r(3,12), ans=q; return { q:`Tính: ${b*q} : ${b} = ?`, opts:opts(ans,[q+1,q-1,q+2]), ans:String(ans) }; }
    case 'div25_rule': { const n=r(10,99)*10; return { q:`Số ${n} chia hết cho những số nào sau đây?`, opts:['Cả 2 và 5','Chỉ chia hết cho 2','Chỉ chia hết cho 5'], ans:'Cả 2 và 5' }; }
    case 'div39_rule': { const n=r(12,99)*9; return { q:`Số ${n} có chia hết cho 9 không?`, opts:['Có, vì tổng các chữ số chia hết cho 9','Không chia hết cho 9'], ans:'Có, vì tổng các chữ số chia hết cho 9' }; }
    case 'avg': { const x=r(10,max), y=r(10,max); const even=(x+y)%2===0?y:y+1; const ans=(x+even)/2; return { q:`Trung bình cộng của ${x} và ${even} là:`, opts:opts(ans,[x+even,ans+1,ans-1]), ans:String(ans) }; }
    case 'avg_sum': { const av=r(12,max), n=r(3,5), ans=av*n; return { q:`Trung bình cộng của ${n} số là ${av}. Tổng của ${n} số đó là:`, opts:opts(ans,[av+n,ans+av,ans-av]), ans:String(ans) }; }
    case 'sum_diff': { const a=r(20,50),b=r(5,a-2), ans=a; return { q:`Tổng 2 số là ${a+b}, hiệu 2 số là ${a-b}. Số LỚN là:`, opts:opts(ans,[b,a+1,a-1]), ans:String(ans) }; }
    case 'sum_diff_min': { const a=r(20,50),b=r(5,a-2), ans=b; return { q:`Tổng 2 số là ${a+b}, hiệu 2 số là ${a-b}. Số BÉ là:`, opts:opts(ans,[a,b+1,b-1]), ans:String(ans) }; }
    case 'ton_kg': { const t=r(2,max), ans=`${t*1000} kg`; return { q:`${t} tấn = ___ kg?`, opts:sh([ans,`${t*100} kg`,`${t*10} kg`]), ans }; }
    case 'century': { const y=r(1901,2000); return { q:`Năm ${y} thuộc thế kỷ thứ mấy?`, opts:['Thế kỷ XX (20)','Thế kỷ XIX (19)','Thế kỷ XXI (21)'], ans:'Thế kỷ XX (20)' }; }
    case 'min_sec': { const m=r(2,max), ans=`${m*60} giây`; return { q:`${m} phút = ___ giây?`, opts:sh([ans,`${m*100} giây`,`${m*30} giây`]), ans }; }
    case 'm2_dm2': { const m=r(2,max), ans=`${m*100} dm²`; return { q:`${m} m² = ___ dm²?`, opts:sh([ans,`${m*10} dm²`,`${m*1000} dm²`]), ans }; }
    case 'angles': { const deg=r(100,170); return { q:`Góc có số đo ${deg}° là loại góc gì?`, opts:['Góc tù','Góc nhọn','Góc vuông','Góc bẹt'], ans:'Góc tù' }; }
    case 'lines': { return { q:`Hai cạnh đối diện của hình chữ nhật có đặc điểm gì?`, opts:['Song song và bằng nhau','Cắt nhau tại 1 điểm','Vuông góc nhau'], ans:'Song song và bằng nhau' }; }
    case 'area_para': { const a=r(5,max),h=r(3,12), ans=`${a*h} cm²`; return { q:`Diện tích hình bình hành đáy ${a} cm, chiều cao ${h} cm là:`, opts:sh([ans,`${(a+h)*2} cm²`,`${a*h/2} cm²`]), ans }; }
    case 'area_rhom': { const m=r(3,10)*2, n=r(3,10), ans=`${(m*n)/2} cm²`; return { q:`Diện tích hình thoi có 2 đường chéo ${m} cm và ${n} cm là:`, opts:sh([ans,`${m*n} cm²`,`${m+n} cm²`]), ans }; }
    case 'eq_frac': { const a=r(1,4),b=r(5,9),k=r(2,4), ans=`${a*k}/${b*k}`; return { q:`Phân số nào bằng phân số ${a}/${b}?`, opts:sh([ans,`${a+1}/${b+1}`,`${a*k}/${b}`]), ans }; }
    case 'simp_frac': { const a=r(1,3),b=r(4,7),k=r(2,5), ans=`${a}/${b}`; return { q:`Rút gọn phân số ${a*k}/${b*k} thành phân số tối giản:`, opts:sh([ans,`${a*2}/${b}`,`${a}/${b*2}`]), ans }; }
    case 'cmp_frac': { const a=r(2,5),b=a+1,d=r(7,11); return { q:`So sánh: ${a}/${d} ___ ${b}/${d}`, opts:['<','>','='], ans:'<' }; }
    case 'cmp_one': { const a=r(2,7),b=a+r(1,4); return { q:`So sánh ${a}/${b} với 1:`, opts:['< 1','> 1','= 1'], ans:'< 1' }; }
    case 'add_frac': { const d=r(5,max),a=r(1,3),b=r(1,3), ans=`${a+b}/${d}`; return { q:`Tính: ${a}/${d} + ${b}/${d} = ?`, opts:sh([ans,`${a+b}/${d*2}`,`${a+b+1}/${d}`]), ans }; }
    case 'sub_frac': { const d=r(5,max),a=r(4,6),b=r(1,3), ans=`${a-b}/${d}`; return { q:`Tính: ${a}/${d} - ${b}/${d} = ?`, opts:sh([ans,`${a-b+1}/${d}`,`${a+b}/${d}`]), ans }; }
    case 'one_sub_frac': { const d=r(4,max),a=r(1,d-1), ans=`${d-a}/${d}`; return { q:`Tính: 1 - ${a}/${d} = ?`, opts:sh([ans,`${a}/${d}`,`${d-a+1}/${d}`]), ans }; }
    case 'mul_frac': { const a=r(1,3),b=r(4,7),c=r(1,3),d=r(4,7), ans=`${a*c}/${b*d}`; return { q:`Tính: ${a}/${b} × ${c}/${d} = ?`, opts:sh([ans,`${a+c}/${b+d}`,`${a*d}/${b*c}`]), ans }; }
    case 'frac_of_num': { const d=r(2,5), n=r(2,8)*d, a=r(1,d-1), ans=(n/d)*a; return { q:`Tìm ${a}/${d} của ${n}:`, opts:opts(ans,[ans+2,ans-1,n/d]), ans:String(ans) }; }
    case 'div_frac': { const a=r(1,3),b=r(4,7),c=r(1,3),d=r(4,7), ans=`${a*d}/${b*c}`; return { q:`Tính: ${a}/${b} : ${c}/${d} = ?`, opts:sh([ans,`${a*c}/${b*d}`,`${b*c}/${a*d}`]), ans }; }
    case 'dec10': { const a=r(1,max); return { q:`Phân số ${a}/10 viết dưới dạng số thập phân là:`, opts:sh([`0,${a}`,`0,0${a}`,`${a},0`]), ans:`0,${a}` }; }
    case 'dec100': { const a=r(11,max); return { q:`Phân số ${a}/100 viết dưới dạng số thập phân là:`, opts:sh([`0,${a}`,`0,0${a}`,`${a/10}`]), ans:`0,${a}` }; }
    default: return { q:'25 × 11 = ?', opts:['265','275','285','255'], ans:'275' };
  }
};
