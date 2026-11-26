// public/js/grade2Generators.js
window.GRADE2_TOPICS = [
  { code:'A', title:'Đếm & Quy luật số đến 1000', skills:[{id:'g2-a-1',title:'Đếm cách 5, 10, 100 (Free)',free:true,type:'skip',max:100},{id:'g2-a-2',title:'Số liền trước, liền sau đến 1000',free:false,type:'neighbor',max:999}] },
  { code:'B', title:'So sánh & Sắp xếp số', skills:[{id:'g2-b-1',title:'So sánh số có 3 chữ số (Free)',free:true,type:'cmp',max:999},{id:'g2-b-2',title:'Tìm số lớn nhất / nhỏ nhất',free:false,type:'minmax',max:999}] },
  { code:'C', title:'Số chẵn & Số lẻ', skills:[{id:'g2-c-1',title:'Nhận biết số chẵn, số lẻ đến 100',free:false,type:'evenodd',max:100},{id:'g2-c-2',title:'Tổng hai số chẵn/lẻ',free:false,type:'evenodd',max:200}] },
  { code:'D', title:'Cộng nhẩm phạm vi 20', skills:[{id:'g2-d-1',title:'Cộng nhẩm qua 10',free:false,type:'add',max:20},{id:'g2-d-2',title:'Tìm số hạng còn thiếu',free:false,type:'miss_add',max:20}] },
  { code:'E', title:'Trừ nhẩm phạm vi 20', skills:[{id:'g2-e-1',title:'Trừ nhẩm qua 10',free:false,type:'sub',max:20},{id:'g2-e-2',title:'Tìm số bị trừ / số trừ',free:false,type:'miss_sub',max:20}] },
  { code:'F', title:'Cộng 2 chữ số (Không nhớ)', skills:[{id:'g2-f-1',title:'Cộng tròn chục',free:false,type:'add10',max:90},{id:'g2-f-2',title:'Cộng số có 2 chữ số',free:false,type:'add',max:99}] },
  { code:'G', title:'Cộng 2 chữ số (Có nhớ)', skills:[{id:'g2-g-1',title:'Cộng có nhớ phạm vi 100 (Free)',free:true,type:'add',max:99},{id:'g2-g-2',title:'Toán đố phép cộng có nhớ',free:false,type:'word_add',max:99}] },
  { code:'H', title:'Trừ 2 chữ số (Có nhớ)', skills:[{id:'g2-h-1',title:'Trừ có nhớ phạm vi 100',free:false,type:'sub',max:99},{id:'g2-h-2',title:'Toán đố phép trừ phạm vi 100',free:false,type:'word_sub',max:99}] },
  { code:'I', title:'Cộng số có 3 chữ số', skills:[{id:'g2-i-1',title:'Cộng tròn trăm',free:false,type:'add100',max:900},{id:'g2-i-2',title:'Cộng số có 3 chữ số',free:false,type:'add',max:999}] },
  { code:'J', title:'Trừ số có 3 chữ số', skills:[{id:'g2-j-1',title:'Trừ tròn trăm',free:false,type:'sub100',max:900},{id:'g2-j-2',title:'Trừ số có 3 chữ số',free:false,type:'sub',max:999}] },
  { code:'K', title:'Cấu tạo số (Trăm, Chục, Đơn vị)', skills:[{id:'g2-k-1',title:'Phân tích số có 3 chữ số',free:false,type:'place3',max:999},{id:'g2-k-2',title:'Viết số từ Trăm, Chục, Đơn vị',free:false,type:'compose3',max:999}] },
  { code:'L', title:'Phép tính hỗn hợp', skills:[{id:'g2-l-1',title:'Tính giá trị biểu thức 2 bước',free:false,type:'mixed',max:50},{id:'g2-l-2',title:'Tìm x cơ bản',free:false,type:'miss_add',max:50}] },
  { code:'M', title:'Làm tròn & Ước lượng', skills:[{id:'g2-m-1',title:'Làm tròn đến hàng chục',free:false,type:'round10',max:99},{id:'g2-m-2',title:'Ước lượng tổng',free:false,type:'round10',max:99}] },
  { code:'N', title:'Tiền Việt Nam', skills:[{id:'g2-n-1',title:'Cộng trừ mệnh giá tiền',free:false,type:'money',max:100},{id:'g2-n-2',title:'Tính tiền thừa khi mua sắm',free:false,type:'money_chg',max:100}] },
  { code:'O', title:'Thời gian & Lịch', skills:[{id:'g2-o-1',title:'Xem đồng hồ (hơn 15, 30 phút)',free:false,type:'clock',max:12},{id:'g2-o-2',title:'Đổi ngày, tuần, tháng',free:false,type:'calendar',max:12}] },
  { code:'P', title:'Đo độ dài (cm, dm, m)', skills:[{id:'g2-p-1',title:'Đổi đơn vị dm sang cm',free:false,type:'dm_cm',max:20},{id:'g2-p-2',title:'Đổi đơn vị m sang cm',free:false,type:'m_cm',max:10}] },
  { code:'Q', title:'Khối lượng (kg) & Dung tích (lít)', skills:[{id:'g2-q-1',title:'Toán đố đơn vị kg',free:false,type:'word_add',max:50},{id:'g2-q-2',title:'Toán đố đơn vị lít',free:false,type:'word_sub',max:50}] },
  { code:'R', title:'Biểu đồ tranh & Bảng số liệu', skills:[{id:'g2-r-1',title:'Đọc bảng thống kê',free:false,type:'chart',max:30},{id:'g2-r-2',title:'Tính hiệu số liệu biểu đồ',free:false,type:'chart',max:30}] },
  { code:'S', title:'Hình học phẳng & Chu vi', skills:[{id:'g2-s-1',title:'Đường gấp khúc',free:false,type:'polyline',max:20},{id:'g2-s-2',title:'Chu vi hình tam giác, tứ giác',free:false,type:'perim',max:20}] },
  { code:'T', title:'Làm quen Phép nhân (2–5)', skills:[{id:'g2-t-1',title:'Bảng nhân 2 và 5 (Free)',free:true,type:'mul25',max:10},{id:'g2-t-2',title:'Bảng nhân 3 và 4',free:false,type:'mul34',max:10}] },
  { code:'U', title:'Làm quen Phép chia (2–5)', skills:[{id:'g2-u-1',title:'Bảng chia 2 và 5',free:false,type:'div25',max:10},{id:'g2-u-2',title:'Bảng chia 3 và 4',free:false,type:'div34',max:10}] },
  { code:'V', title:'Phân số 1/2, 1/3, 1/4, 1/5', skills:[{id:'g2-v-1',title:'Tìm 1/2 hoặc 1/3 của một số',free:false,type:'frac',max:30},{id:'g2-v-2',title:'Tìm 1/4 hoặc 1/5 của một số',free:false,type:'frac',max:40}] }
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
    case 'skip': { const st = [5, 10, 100][r(0,2)], a = st*r(1,5), ans = a+st*3; return { q:`Điền số tiếp theo: ${a}, ${a+st}, ${a+st*2}, ___`, opts:opts(ans,[ans+st,ans-1,ans+1]), ans:String(ans) }; }
    case 'neighbor': { const n = r(101,max-1), isNext = r(0,1); const ans = isNext?n+1:n-1; return { q:`Số ${isNext?'liền sau':'liền trước'} của ${n} là số nào?`, opts:opts(ans,[n,ans+1,ans-1]), ans:String(ans) }; }
    case 'cmp': { const a=r(100,max), b=r(100,max); return { q:`So sánh: ${a} ___ ${b}`, opts:['<','>','='], ans:a<b?'<':(a>b?'>':'=') }; }
    case 'minmax': { const arr=[...new Set([r(100,400),r(401,700),r(701,999),r(150,850)])]; const m=r(0,1); const ans=m?Math.max(...arr):Math.min(...arr); return { q:`Số nào ${m?'LỚN NHẤT':'NHỎ NHẤT'}: ${arr.join(', ')}?`, opts:arr.map(String), ans:String(ans) }; }
    case 'evenodd': { const n=r(10,max); return { q:`Số ${n} là số chẵn hay số lẻ?`, opts:['Số chẵn','Số lẻ'], ans:n%2===0?'Số chẵn':'Số lẻ' }; }
    case 'add': case 'add10': case 'add100': {
      const mul = type==='add10'?10:(type==='add100'?100:1);
      const a=r(1,Math.floor(max/(2*mul)))*mul, b=r(1,Math.floor(max/(2*mul)))*mul, ans=a+b;
      return { q:`Tính: ${a} + ${b} = ?`, opts:opts(ans,[ans+1,ans-1,ans+10]), ans:String(ans) };
    }
    case 'sub': case 'sub100': {
      const mul = type==='sub100'?100:1;
      const a=r(4,Math.floor(max/mul))*mul, b=r(1,Math.floor(a/mul)-1)*mul, ans=a-b;
      return { q:`Tính: ${a} - ${b} = ?`, opts:opts(ans,[ans+1,Math.max(0,ans-1),ans+10]), ans:String(ans) };
    }
    case 'miss_add': { const a=r(5,max/2), tot=r(a+2,max), ans=tot-a; return { q:`Tìm x biết: x + ${a} = ${tot}`, opts:opts(ans,[ans+1,ans-1,tot+a]), ans:String(ans) }; }
    case 'miss_sub': { const b=r(2,10), res=r(2,10), ans=b+res; return { q:`Tìm x biết: x - ${b} = ${res}`, opts:opts(ans,[ans+1,ans-1,res-b]), ans:String(ans) }; }
    case 'word_add': { const a=r(12,45), b=r(12,45), ans=a+b; return { q:`Thùng thứ nhất có ${a} lít dầu, thùng thứ hai có ${b} lít. Cả hai thùng có bao nhiêu lít?`, opts:opts(ans,[ans+1,ans-1,ans+10]), ans:String(ans) }; }
    case 'word_sub': { const a=r(30,85), b=r(10,a-5), ans=a-b; return { q:`Cửa hàng có ${a} kg gạo, đã bán ${b} kg. Còn lại bao nhiêu kg?`, opts:opts(ans,[ans+1,ans-1,a+b]), ans:String(ans) }; }
    case 'place3': { const h=r(1,9),t=r(0,9),o=r(0,9), ans=`${h} trăm, ${t} chục, ${o} đơn vị`; return { q:`Số ${h*100+t*10+o} gồm:`, opts:sh([ans,`${t} trăm, ${h} chục, ${o} đơn vị`,`${h} trăm, ${o} chục, ${t} đơn vị`]), ans }; }
    case 'compose3': { const h=r(1,9),t=r(0,9),o=r(0,9), ans=h*100+t*10+o; return { q:`Số gồm ${h} trăm, ${t} chục, ${o} đơn vị là:`, opts:opts(ans,[h*100+o*10+t,t*100+h*10+o,ans+10]), ans:String(ans) }; }
    case 'mixed': { const a=r(10,30),b=r(5,20),c=r(1,10), ans=a+b-c; return { q:`Tính: ${a} + ${b} - ${c} = ?`, opts:opts(ans,[ans+1,ans-1,a+b+c]), ans:String(ans) }; }
    case 'round10': { const n=r(11,89), ans=Math.round(n/10)*10; return { q:`Làm tròn số ${n} đến hàng chục gần nhất:`, opts:opts(ans,[Math.floor(n/10)*10,Math.ceil(n/10)*10,ans+10]), ans:String(ans) }; }
    case 'money': { const a=r(10,50),b=r(10,40), ans=`${a+b} nghìn đồng`; return { q:`Lan có ${a} nghìn đồng, được tặng thêm ${b} nghìn đồng. Tổng cộng:`, opts:sh([ans,`${a+b+5} nghìn đồng`,`${a+b-5} nghìn đồng`]), ans }; }
    case 'money_chg': { const p=r(15,45), ans=`${50-p} nghìn đồng`; return { q:`Đưa cô bán hàng 50 nghìn đồng để mua đồ hết ${p} nghìn đồng. Tiền thừa là:`, opts:sh([ans,`${50-p+5} nghìn đồng`,`${50-p-5} nghìn đồng`]), ans }; }
    case 'clock': { const h=r(1,11), m=[15,30][r(0,1)], ans=`${h} giờ ${m} phút`; return { q:`Kim ngắn qua số ${h}, kim dài chỉ số ${m===15?3:6} là mấy giờ?`, opts:sh([ans,`${h} giờ đúng`,`${h+1} giờ ${m} phút`]), ans }; }
    case 'calendar': { const w=r(2,5), ans=`${w*7} ngày`; return { q:`${w} tuần lễ có bao nhiêu ngày?`, opts:sh([ans,`${w*5} ngày`,`${w*7+1} ngày`,`${w*6} ngày`]), ans }; }
    case 'dm_cm': { const d=r(2,15), ans=`${d*10} cm`; return { q:`${d} dm = ___ cm?`, opts:sh([ans,`${d*100} cm`,`${d+10} cm`]), ans }; }
    case 'm_cm': { const m=r(2,9), ans=`${m*100} cm`; return { q:`${m} m = ___ cm?`, opts:sh([ans,`${m*10} cm`,`${m*1000} cm`]), ans }; }
    case 'chart': { const a=r(12,28), b=r(4,a-2), ans=a-b; return { q:`Biểu đồ ghi nhận ${a} học sinh thích bơi và ${b} học sinh thích vẽ. Chênh lệch là:`, opts:opts(ans,[a+b,ans+1,ans-1]), ans:String(ans) }; }
    case 'polyline': { const a=r(3,10),b=r(3,10),c=r(3,10), ans=`${a+b+c} cm`; return { q:`Đường gấp khúc gồm 3 đoạn dài ${a} cm, ${b} cm, ${c} cm có độ dài là:`, opts:sh([ans,`${a+b+c+2} cm`,`${a+b} cm`]), ans }; }
    case 'perim': { const a=r(4,12),b=r(4,12),c=r(4,12), ans=`${a+b+c} cm`; return { q:`Chu vi tam giác có 3 cạnh ${a} cm, ${b} cm, ${c} cm là:`, opts:sh([ans,`${a+b+c+1} cm`,`${a+b} cm`]), ans }; }
    case 'mul25': { const a = [2, 5][r(0,1)], b=r(1,10), ans=a*b; return { q:`Tính: ${a} × ${b} = ?`, opts:opts(ans,[ans+a,Math.max(1,ans-a),ans+1]), ans:String(ans) }; }
    case 'mul34': { const a = [3, 4][r(0,1)], b=r(1,10), ans=a*b; return { q:`Tính: ${a} × ${b} = ?`, opts:opts(ans,[ans+a,Math.max(1,ans-a),ans+2]), ans:String(ans) }; }
    case 'div25': { const a = [2, 5][r(0,1)], b=r(1,10), ans=b; return { q:`Tính: ${a*b} : ${a} = ?`, opts:opts(ans,[b+1,Math.max(1,b-1),b+2]), ans:String(ans) }; }
    case 'div34': { const a = [3, 4][r(0,1)], b=r(1,10), ans=b; return { q:`Tính: ${a*b} : ${a} = ?`, opts:opts(ans,[b+1,Math.max(1,b-1),b+2]), ans:String(ans) }; }
    case 'frac': { const d = [2, 3, 4, 5][r(0,3)], k=r(2,8), ans=k; return { q:`1/${d} của ${d*k} là bao nhiêu?`, opts:opts(ans,[k+1,k+2,d*k]), ans:String(ans) }; }
    default: return { q:'10 + 20 = ?', opts:['20','30','40','50'], ans:'30' };
  }
};
