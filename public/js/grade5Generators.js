// public/js/grade5Generators.js
window.GRADE5_TOPICS = [
  { code:'A', title:'Ôn tập Phân số & Hỗn số', skills:[{id:'g5-a-1',title:'Chuyển hỗn số thành phân số (Free)',free:true,type:'mixed_num',max:5},{id:'g5-a-2',title:'Phân số thập phân',free:false,type:'frac_dec',max:10}] },
  { code:'B', title:'Giải toán Tỉ lệ & Rút về đơn vị', skills:[{id:'g5-b-1',title:'Bài toán tỉ lệ thuận (Free)',free:true,type:'ratio',max:10},{id:'g5-b-2',title:'Tìm hai số khi biết Tổng và Tỉ',free:false,type:'sum_ratio',max:60}] },
  { code:'C', title:'Số thập phân & Hàng thập phân', skills:[{id:'g5-c-1',title:'Giá trị chữ số thập phân',free:false,type:'dec_place',max:9},{id:'g5-c-2',title:'So sánh hai số thập phân',free:false,type:'dec_cmp',max:20}] },
  { code:'D', title:'Làm tròn số thập phân', skills:[{id:'g5-d-1',title:'Làm tròn đến hàng đơn vị',free:false,type:'dec_round',max:20},{id:'g5-d-2',title:'Làm tròn đến hàng phần mười',free:false,type:'dec_round',max:20}] },
  { code:'E', title:'Cộng & Trừ số thập phân', skills:[{id:'g5-e-1',title:'Cộng hai số thập phân',free:false,type:'dec_add',max:20},{id:'g5-e-2',title:'Trừ hai số thập phân',free:false,type:'dec_sub',max:20}] },
  { code:'F', title:'Nhân số thập phân', skills:[{id:'g5-f-1',title:'Nhân số thập phân với 10, 100',free:false,type:'dec_mul10',max:20},{id:'g5-f-2',title:'Nhân hai số thập phân',free:false,type:'dec_mul',max:10}] },
  { code:'G', title:'Chia số thập phân', skills:[{id:'g5-g-1',title:'Chia số thập phân cho 10, 100 (Free)',free:true,type:'dec_div10',max:50},{id:'g5-g-2',title:'Chia số tự nhiên cho số tự nhiên ra thập phân',free:false,type:'dec_div',max:20}] },
  { code:'H', title:'Tỉ số phần trăm (%)', skills:[{id:'g5-h-1',title:'Tìm tỉ số phần trăm của hai số',free:false,type:'pct_of',max:50},{id:'g5-h-2',title:'Tìm a% của một số',free:false,type:'pct_val',max:200}] },
  { code:'I', title:'Ứng dụng Phần trăm (Giảm giá, Lãi suất)', skills:[{id:'g5-i-1',title:'Tính giá sau khi giảm %',free:false,type:'discount',max:200},{id:'g5-i-2',title:'Tính tiền lãi tiết kiệm',free:false,type:'pct_val',max:500}] },
  { code:'J', title:'Đơn vị đo diện tích (Héc-ta, km²)', skills:[{id:'g5-j-1',title:'Đổi ha sang m²',free:false,type:'ha_m2',max:10},{id:'g5-j-2',title:'Đổi km² sang ha',free:false,type:'km2_ha',max:15}] },
  { code:'K', title:'Hình tam giác (Diện tích)', skills:[{id:'g5-k-1',title:'Diện tích tam giác (đáy × cao : 2)',free:false,type:'area_tri',max:20},{id:'g5-k-2',title:'Tìm chiều cao tam giác',free:false,type:'tri_h',max:20}] },
  { code:'L', title:'Hình thang (Diện tích)', skills:[{id:'g5-l-1',title:'Diện tích hình thang',free:false,type:'area_trap',max:16},{id:'g5-l-2',title:'Tính trung bình cộng 2 đáy',free:false,type:'area_trap',max:12}] },
  { code:'M', title:'Hình tròn (Chu vi & Diện tích)', skills:[{id:'g5-m-1',title:'Chu vi hình tròn (C = d × 3,14)',free:false,type:'circ_c',max:10},{id:'g5-m-2',title:'Diện tích hình tròn (S = r × r × 3,14)',free:false,type:'circ_s',max:6}] },
  { code:'N', title:'Hình hộp chữ nhật & Hình lập phương', skills:[{id:'g5-n-1',title:'Diện tích xung quanh hình lập phương',free:false,type:'cube_sxq',max:10},{id:'g5-n-2',title:'Diện tích toàn phần hình lập phương',free:false,type:'cube_stp',max:10}] },
  { code:'O', title:'Đơn vị đo Thể tích (cm³, dm³, m³)', skills:[{id:'g5-o-1',title:'Đổi m³ sang dm³ (lít)',free:false,type:'m3_dm3',max:10},{id:'g5-o-2',title:'Đổi dm³ sang cm³',free:false,type:'m3_dm3',max:15}] },
  { code:'P', title:'Thể tích Hình hộp chữ nhật & Lập phương', skills:[{id:'g5-p-1',title:'Thể tích hình hộp chữ nhật (a×b×c)',free:false,type:'vol_box',max:10},{id:'g5-p-2',title:'Thể tích hình lập phương (a×a×a)',free:false,type:'vol_cube',max:8}] },
  { code:'Q', title:'Số đo thời gian (Cộng, Trừ, Nhân, Chia)', skills:[{id:'g5-q-1',title:'Cộng số đo thời gian',free:false,type:'time_add',max:5},{id:'g5-q-2',title:'Đổi giờ thập phân sang phút',free:false,type:'hour_dec',max:4}] },
  { code:'R', title:'Chuyển động đều: Vận tốc (v = s : t)', skills:[{id:'g5-r-1',title:'Tính vận tốc (km/giờ)',free:false,type:'vel',max:60},{id:'g5-r-2',title:'Đổi m/giây sang km/giờ',free:false,type:'ms_kmh',max:20}] },
  { code:'S', title:'Quãng đường (s = v × t)', skills:[{id:'g5-s-1',title:'Tính quãng đường đi được',free:false,type:'dist',max:60},{id:'g5-s-2',title:'Chuyển động ngược chiều gặp nhau',free:false,type:'dist',max:50}] },
  { code:'T', title:'Thời gian chuyển động (t = s : v)', skills:[{id:'g5-t-1',title:'Tính thời gian đi (Free)',free:true,type:'time_travel',max:60},{id:'g5-t-2',title:'Tìm thời điểm đến nơi',free:false,type:'time_travel',max:50}] },
  { code:'U', title:'Biểu đồ hình quạt tròn', skills:[{id:'g5-u-1',title:'Đọc tỉ lệ % trên biểu đồ quạt',free:false,type:'pie',max:100},{id:'g5-u-2',title:'Tính số lượng từ biểu đồ quạt',free:false,type:'pct_val',max:200}] },
  { code:'V', title:'Mặt phẳng tọa độ & Biểu thức', skills:[{id:'g5-v-1',title:'Thứ tự thực hiện phép tính (Số thập phân)',free:false,type:'dec_add',max:20},{id:'g5-v-2',title:'Tọa độ điểm (x, y) trên lưới',free:false,type:'coord',max:10}] }
];

window.generateGrade5Question = function (type, max = 100) {
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const sh = a => [...a].sort(() => Math.random() - 0.5);
  const opts = (ans, cands) => {
    const s = new Set([String(ans)]);
    cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
    let k = 1; while (s.size < 4) s.add(String(k++));
    return sh([...s]);
  };
  switch (type) {
    case 'mixed_num': { const w=r(1,max),a=r(1,3),b=r(4,7), ans=`${w*b+a}/${b}`; return { q:`Chuyển hỗn số ${w} và ${a}/${b} thành phân số:`, opts:sh([ans,`${w+a}/${b}`,`${w*b}/${b}`]), ans }; }
    case 'frac_dec': { const a=r(1,9); return { q:`Phân số ${a}/1000 viết thành số thập phân là:`, opts:sh([`0,00${a}`,`0,0${a}`,`0,${a}`]), ans:`0,00${a}` }; }
    case 'ratio': { const n=r(2,5), u=r(5,12), m=r(3,8), ans=u*m; return { q:`Mua ${n} quyển vở hết ${n*u} nghìn đồng. Mua ${m} quyển hết:`, opts:opts(ans,[ans+u,ans-u,n*u]), ans:String(ans) }; }
    case 'sum_ratio': { const k=r(2,4), part=r(5,15), tot=part*(k+1), ans=part; return { q:`Tổng 2 số là ${tot}, tỉ số của chúng là 1/${k}. Số BÉ là:`, opts:opts(ans,[part*k,part+2,part-1]), ans:String(ans) }; }
    case 'dec_place': { const d=r(1,9); return { q:`Trong số 12,${d}5, chữ số ${d} thuộc hàng nào?`, opts:['Hàng phần mười','Hàng phần trăm','Hàng đơn vị'], ans:'Hàng phần mười' }; }
    case 'dec_cmp': { const a=(r(10,99)/10).toFixed(1), b=(r(10,99)/10).toFixed(1); return { q:`So sánh: ${a} ___ ${b}`, opts:['<','>','='], ans:Number(a)<Number(b)?'<':(Number(a)>Number(b)?'>':'=') }; }
    case 'dec_round': { const n=r(2,15), d=r(6,9), ans=n+1; return { q:`Làm tròn số ${n},${d} đến số tự nhiên gần nhất:`, opts:opts(ans,[n,n+2,n-1]), ans:String(ans) }; }
    case 'dec_add': { const a=r(11,50)/10, b=r(11,50)/10, ans=(a+b).toFixed(1); return { q:`Tính: ${a} + ${b} = ?`, opts:sh([ans,(a+b+1).toFixed(1),(a+b-0.5).toFixed(1)]), ans }; }
    case 'dec_sub': { const a=r(40,90)/10, b=r(10,35)/10, ans=(a-b).toFixed(1); return { q:`Tính: ${a} - ${b} = ?`, opts:sh([ans,(a-b+1).toFixed(1),(a-b+0.2).toFixed(1)]), ans }; }
    case 'dec_mul10': { const a=r(12,95)/10, ans=(a*10).toFixed(0); return { q:`Tính nhẩm: ${a} × 10 = ?`, opts:opts(ans,[a*100,a,Number(ans)+1]), ans:String(ans) }; }
    case 'dec_mul': { const a=r(12,35)/10, b=r(2,5), ans=(a*b).toFixed(1); return { q:`Tính: ${a} × ${b} = ?`, opts:sh([ans,(a*b+1).toFixed(1),(a*b+0.5).toFixed(1)]), ans }; }
    case 'dec_div10': { const a=r(12,95), ans=(a/10).toFixed(1); return { q:`Tính nhẩm: ${a} : 10 = ?`, opts:sh([ans,`0,${a}`,`${a*10}`]), ans }; }
    case 'dec_div': { const a = [3, 5, 7, 9][r(0,3)], ans=(a/2).toFixed(1); return { q:`Tính: ${a} : 2 = ?`, opts:sh([ans,(a/2+0.5).toFixed(1),(a/2+1).toFixed(1)]), ans }; }
    case 'pct_of': { const a=r(1,4)*10, ans=`${a}%`; return { q:`Tỉ số phần trăm của ${a} và 100 là:`, opts:sh([ans,`${a/10}%`,`${100-a}%`]), ans }; }
    case 'pct_val': { const p = [10, 20, 25, 50][r(0,3)], n=r(2,10)*20, ans=(n*p)/100; return { q:`Tìm ${p}% của ${n}:`, opts:opts(ans,[ans+10,ans+5,n-ans]), ans:String(ans) }; }
    case 'discount': { const price=r(2,10)*50, disc=20, ans=price*0.8; return { q:`Áo giá ${price} nghìn đồng, giảm 20%. Giá còn lại là:`, opts:opts(ans,[price*0.2,ans+10,ans-10]), ans:String(ans) }; }
    case 'ha_m2': { const h=r(2,max), ans=`${h*10000} m²`; return { q:`${h} ha = ___ m²?`, opts:sh([ans,`${h*1000} m²`,`${h*100} m²`]), ans }; }
    case 'km2_ha': { const k=r(2,max), ans=`${k*100} ha`; return { q:`${k} km² = ___ ha?`, opts:sh([ans,`${k*1000} ha`,`${k*10} ha`]), ans }; }
    case 'area_tri': { const a=r(4,12)*2, h=r(3,10), ans=`${(a*h)/2} cm²`; return { q:`Diện tích tam giác đáy ${a} cm, cao ${h} cm là:`, opts:sh([ans,`${a*h} cm²`,`${a+h} cm²`]), ans }; }
    case 'tri_h': { const a=r(4,10), h=r(3,10), s=(a*h)/2, ans=`${h} cm`; return { q:`Tam giác có diện tích ${s} cm² và đáy ${a} cm thì chiều cao là:`, opts:sh([ans,`${h*2} cm`,`${h+1} cm`]), ans }; }
    case 'area_trap': { const a=r(4,10),b=r(6,12),h=r(2,6)*2, ans=`${((a+b)*h)/2} cm²`; return { q:`Diện tích hình thang có 2 đáy ${a} cm, ${b} cm và cao ${h} cm là:`, opts:sh([ans,`${(a+b)*h} cm²`,`${a+b+h} cm²`]), ans }; }
    case 'circ_c': { const d=r(2,max), ans=(d*3.14).toFixed(2); return { q:`Chu vi hình tròn đường kính ${d} cm là (lấy π = 3,14):`, opts:sh([ans,(d*2*3.14).toFixed(2),(d*3.14+1).toFixed(2)]), ans }; }
    case 'circ_s': { const rad=r(2,max), ans=(rad*rad*3.14).toFixed(2); return { q:`Diện tích hình tròn bán kính ${rad} cm là (π = 3,14):`, opts:sh([ans,(rad*2*3.14).toFixed(2),(rad*3.14).toFixed(2)]), ans }; }
    case 'cube_sxq': { const a=r(2,max), ans=`${a*a*4} cm²`; return { q:`Diện tích xung quanh hình lập phương cạnh ${a} cm là:`, opts:sh([ans,`${a*a*6} cm²`,`${a*a*a} cm²`]), ans }; }
    case 'cube_stp': { const a=r(2,max), ans=`${a*a*6} cm²`; return { q:`Diện tích toàn phần hình lập phương cạnh ${a} cm là:`, opts:sh([ans,`${a*a*4} cm²`,`${a*a*a} cm²`]), ans }; }
    case 'm3_dm3': { const m=r(2,max), ans=`${m*1000} dm³`; return { q:`${m} m³ = ___ dm³?`, opts:sh([ans,`${m*100} dm³`,`${m*10} dm³`]), ans }; }
    case 'vol_box': { const a=r(3,8),b=r(2,6),c=r(2,5), ans=`${a*b*c} cm³`; return { q:`Thể tích hình hộp chữ nhật kích thước ${a}×${b}×${c} cm là:`, opts:sh([ans,`${(a+b)*c} cm³`,`${a*b+c} cm³`]), ans }; }
    case 'vol_cube': { const a=r(2,max), ans=`${a*a*a} cm³`; return { q:`Thể tích hình lập phương cạnh ${a} cm là:`, opts:sh([ans,`${a*a*6} cm³`,`${a*a} cm³`]), ans }; }
    case 'time_add': { const h1=r(1,3),m1=r(10,30),h2=r(1,2),m2=r(10,25), ans=`${h1+h2} giờ ${m1+m2} phút`; return { q:`${h1} giờ ${m1} phút + ${h2} giờ ${m2} phút = ?`, opts:sh([ans,`${h1+h2+1} giờ ${m1+m2} phút`,`${h1+h2} giờ ${m1} phút`]), ans }; }
    case 'hour_dec': { const h=r(1,max), ans=`${h*60+30} phút`; return { q:`${h},5 giờ = ___ phút?`, opts:sh([ans,`${h*60+50} phút`,`${h*60+5} phút`]), ans }; }
    case 'vel': { const v=r(30,60), t=r(2,4), ans=`${v} km/giờ`; return { q:`Ô tô đi ${v*t} km trong ${t} giờ. Vận tốc là:`, opts:sh([ans,`${v+10} km/giờ`,`${v-5} km/giờ`]), ans }; }
    case 'ms_kmh': { const ms=r(5,20), ans=`${(ms*3.6).toFixed(0)} km/giờ`; return { q:`Vận tốc ${ms} m/giây bằng bao nhiêu km/giờ?`, opts:sh([ans,`${ms*3} km/giờ`,`${ms*6} km/giờ`]), ans }; }
    case 'dist': { const v=r(30,60), t=r(2,4), ans=`${v*t} km`; return { q:`Xe chạy với vận tốc ${v} km/giờ trong ${t} giờ đi được:`, opts:sh([ans,`${v+t} km`,`${v*t+20} km`]), ans }; }
    case 'time_travel': { const v=r(30,50), t=r(2,5), ans=`${t} giờ`; return { q:`Quãng đường ${v*t} km, đi với vận tốc ${v} km/giờ hết bao lâu?`, opts:sh([ans,`${t+1} giờ`,`${t+2} giờ`]), ans }; }
    case 'pie': { const a=r(20,40), b=r(20,40), ans=`${100-a-b}%`; return { q:`Biểu đồ quạt có phần A chiếm ${a}%, phần B chiếm ${b}%. Phần C còn lại chiếm:`, opts:sh([ans,`${a+b}%`,`${100-a}%`]), ans }; }
    case 'coord': { const x=r(1,8), y=r(1,8); return { q:`Điểm A(${x}; ${y}) có hoành độ (x) bằng bao nhiêu?`, opts:opts(x,[y,x+1,0]), ans:String(x) }; }
    default: return { q:'25% của 200 = ?', opts:['25','50','75','100'], ans:'50' };
  }
};
