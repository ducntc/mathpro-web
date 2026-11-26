// public/js/grade7Generators.js
window.GRADE7_TOPICS = [
  { code:'A', title:'Số nguyên & Quy tắc dấu', skills:[{id:'g7-a-1',title:'Nhân chia số nguyên âm (Free)',free:true,type:'int_mul',max:12},{id:'g7-a-2',title:'Tính giá trị biểu thức số nguyên',free:false,type:'int_expr',max:10}] },
  { code:'B', title:'Số hữu tỉ (Rational Numbers)', skills:[{id:'g7-b-1',title:'Cộng trừ số hữu tỉ (Free)',free:true,type:'rat_add',max:10},{id:'g7-b-2',title:'Nhân chia số hữu tỉ',free:false,type:'rat_mul',max:8}] },
  { code:'C', title:'Số thập phân vô hạn tuần hoàn', skills:[{id:'g7-c-1',title:'Đổi phân số sang thập phân',free:false,type:'frac_dec',max:10},{id:'g7-c-2',title:'So sánh số hữu tỉ',free:false,type:'rat_cmp',max:10}] },
  { code:'D', title:'Tỉ lệ thức & Đại lượng tỉ lệ thuận', skills:[{id:'g7-d-1',title:'Tìm x trong tỉ lệ thức a/b = c/x',free:false,type:'prop',max:10},{id:'g7-d-2',title:'Hệ số tỉ lệ k = y/x',free:false,type:'const_prop',max:12}] },
  { code:'E', title:'Đại lượng tỉ lệ nghịch', skills:[{id:'g7-e-1',title:'Bài toán tỉ lệ nghịch',free:false,type:'inv_prop',max:12},{id:'g7-e-2',title:'Tìm hệ số a = x·y',free:false,type:'inv_prop',max:10}] },
  { code:'F', title:'Tỉ số phần trăm nâng cao', skills:[{id:'g7-f-1',title:'Phần trăm tăng / giảm (Percent Change)',free:false,type:'pct_chg',max:100},{id:'g7-f-2',title:'Sai số phần trăm',free:false,type:'pct_chg',max:100}] },
  { code:'G', title:'Toán tài chính (Lãi suất đơn)', skills:[{id:'g7-g-1',title:'Tính lãi suất đơn I = P·r·t (Free)',free:true,type:'interest',max:10},{id:'g7-g-2',title:'Tính giá gốc trước thuế/giảm giá',free:false,type:'orig_price',max:100}] },
  { code:'H', title:'Biểu thức đại số & Rút gọn', skills:[{id:'g7-h-1',title:'Cộng trừ biểu thức tuyến tính',free:false,type:'lin_add',max:15},{id:'g7-h-2',title:'Đặt nhân tử chung biểu thức',free:false,type:'lin_fac',max:10}] },
  { code:'I', title:'Phương trình 2 bước (Two-step Equations)', skills:[{id:'g7-i-1',title:'Giải phương trình ax + b = c',free:false,type:'eq2',max:10},{id:'g7-i-2',title:'Giải phương trình a(x + b) = c',free:false,type:'eq2_p',max:8}] },
  { code:'J', title:'Bất phương trình 2 bước', skills:[{id:'g7-j-1',title:'Giải bất phương trình ax + b > c',free:false,type:'ineq2',max:10},{id:'g7-j-2',title:'Đổi chiều khi nhân/chia số âm',free:false,type:'ineq_neg',max:10}] },
  { code:'K', title:'Đồ thị tỉ lệ thuận y = kx', skills:[{id:'g7-k-1',title:'Tìm k từ điểm (x, y)',free:false,type:'const_prop',max:10},{id:'g7-k-2',title:'Kiểm tra điểm thuộc đồ thị',free:false,type:'pt_on_line',max:10}] },
  { code:'L', title:'Hình học: Góc kề bù & Đối đỉnh', skills:[{id:'g7-l-1',title:'Tính góc kề bù (tổng 180°)',free:false,type:'supp',max:170},{id:'g7-l-2',title:'Tính góc phụ nhau (tổng 90°)',free:false,type:'comp',max:85}] },
  { code:'M', title:'Tam giác & Tổng 3 góc', skills:[{id:'g7-m-1',title:'Tìm góc thứ 3 của tam giác',free:false,type:'tri_ang',max:180},{id:'g7-m-2',title:'Bất đẳng thức tam giác',free:false,type:'tri_ineq',max:15}] },
  { code:'N', title:'Tam giác bằng nhau (c.c.c, c.g.c, g.c.g)', skills:[{id:'g7-n-1',title:'Nhận biết trường hợp bằng nhau',free:false,type:'cong',max:3},{id:'g7-n-2',title:'Tìm cạnh/góc tương ứng',free:false,type:'tri_ang',max:180}] },
  { code:'O', title:'Đường tròn (Chu vi & Diện tích)', skills:[{id:'g7-o-1',title:'Chu vi hình tròn (C = 2πr)',free:false,type:'circ_c',max:10},{id:'g7-o-2',title:'Diện tích hình tròn (S = πr²)',free:false,type:'circ_s',max:8}] },
  { code:'P', title:'Hình vẽ tỉ lệ (Scale Drawings)', skills:[{id:'g7-p-1',title:'Tính độ dài thực tế theo tỉ lệ xích',free:false,type:'scale',max:20},{id:'g7-p-2',title:'Tính tỉ lệ diện tích khi phóng đại',free:false,type:'scale_area',max:5}] },
  { code:'Q', title:'Thể tích hình lăng trụ đứng', skills:[{id:'g7-q-1',title:'Thể tích lăng trụ tam giác',free:false,type:'prism_v',max:10},{id:'g7-q-2',title:'Diện tích xung quanh lăng trụ',free:false,type:'prism_v',max:10}] },
  { code:'R', title:'Thể tích hình chóp & Hình trụ', skills:[{id:'g7-r-1',title:'Thể tích hình chóp V = 1/3·S·h',free:false,type:'pyr_v',max:10},{id:'g7-r-2',title:'Diện tích xung quanh hình hộp',free:false,type:'prism_v',max:10}] },
  { code:'S', title:'Thống kê & Độ lệch tuyệt đối trung bình (MAD)', skills:[{id:'g7-s-1',title:'So sánh Mean và Median',free:false,type:'mean',max:30},{id:'g7-s-2',title:'Mẫu đại diện ngẫu nhiên',free:false,type:'sample',max:2}] },
  { code:'T', title:'Xác suất thực nghiệm & Lý thuyết', skills:[{id:'g7-t-1',title:'Xác suất lý thuyết (Free)',free:true,type:'prob',max:10},{id:'g7-t-2',title:'Dự đoán số lần xuất hiện',free:false,type:'prob_pred',max:100}] },
  { code:'U', title:'Xác suất biến cố kép (Compound Events)', skills:[{id:'g7-u-1',title:'Tung 2 đồng xu / xúc xắc',free:false,type:'comp_prob',max:6},{id:'g7-u-2',title:'Quy tắc nhân xác suất',free:false,type:'comp_prob',max:6}] },
  { code:'V', title:'Lũy thừa số hữu tỉ (Giới thiệu)', skills:[{id:'g7-v-1',title:'Nhân hai lũy thừa cùng cơ số',free:false,type:'exp_mul',max:6},{id:'g7-v-2',title:'Chia hai lũy thừa cùng cơ số',free:false,type:'exp_div',max:8}] }
];

window.generateGrade7Question = function (type, max = 20) {
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const sh = a => [...a].sort(() => Math.random() - 0.5);
  const opts = (ans, cands) => {
    const s = new Set([String(ans)]);
    cands.forEach(c => { if (s.size < 4) s.add(String(c)); });
    let k = 1; while (s.size < 4) s.add(String(k++));
    return sh([...s]);
  };
  switch (type) {
    case 'int_mul': { const a=-r(2,max), b=-r(2,9), ans=a*b; return { q:`Tính: (${a}) × (${b}) = ?`, opts:opts(ans,[-ans,ans+a,ans-a]), ans:String(ans) }; }
    case 'int_expr': { const a=-r(2,6), b=r(2,8), c=-r(1,5), ans=a*b+c; return { q:`Tính: (${a}) × ${b} + (${c}) = ?`, opts:opts(ans,[-ans,ans+2,ans-2]), ans:String(ans) }; }
    case 'rat_add': { const d=r(3,9), a=-r(1,d-1), b=r(1,d), ans=`${a+b}/${d}`; return { q:`Tính: (${a}/${d}) + (${b}/${d}) = ?`, opts:sh([ans,`${a-b}/${d}`,`${a+b+1}/${d}`]), ans }; }
    case 'rat_mul': { const a=-r(1,3),b=r(4,7),c=r(1,3),d=r(4,7), ans=`${a*c}/${b*d}`; return { q:`Tính: (${a}/${b}) × (${c}/${d}) = ?`, opts:sh([ans,`${-a*c}/${b*d}`,`${a*d}/${b*c}`]), ans }; }
    case 'frac_dec': { const d=[r(0,3)], n=1, ans=(n/d).toString().replace('.',','); return { q:`Phân số 1/${d} viết thành số thập phân là:`, opts:sh([ans,`0,${d}`,`0,0${d}`]), ans }; }
    case 'rat_cmp': { const a=-r(1,4)/2, b=-r(5,9)/2; return { q:`So sánh: ${a} ___ ${b}`, opts:['>','<','='], ans:'>' }; }
    case 'prop': { const a=r(2,5), b=r(3,7), k=r(2,4), ans=b*k; return { q:`Tìm x biết tỉ lệ thức: ${a}/${b} = ${a*k}/x`, opts:opts(ans,[a*k,ans+2,ans-1]), ans:String(ans) }; }
    case 'const_prop': { const k=r(2,9), x=r(2,6), ans=k; return { q:`y tỉ lệ thuận với x. Khi x = ${x} thì y = ${k*x}. Hệ số tỉ lệ k là:`, opts:opts(ans,[k*x,x,k+1]), ans:String(ans) }; }
    case 'inv_prop': { const x1=r(2,6), y1=r(4,10), x2=2, ans=(x1*y1)/x2; return { q:`${x1} công nhân làm xong việc trong ${y1} ngày. ${x2} công nhân làm trong mấy ngày?`, opts:opts(ans,[y1,ans+2,ans-2]), ans:String(ans) }; }
    case 'pct_chg': { const a=100, b=r(110,150), ans=`${b-a}%`; return { q:`Giá tăng từ 100k lên ${b}k. Tỉ lệ tăng là:`, opts:sh([ans,`${b}%`,`${b-a+5}%`]), ans }; }
    case 'interest': { const p=1000, rate=5, t=r(2,4), ans=p*0.05*t; return { q:`Gửi 1000k lãi suất 5%/năm trong ${t} năm. Tiền lãi đơn là:`, opts:opts(ans,[ans+50,50,1000+ans]), ans:String(ans) }; }
    case 'orig_price': { const orig=r(2,8)*50, sale=orig*0.8; return { q:`Sau khi giảm 20%, giá áo còn ${sale}k. Giá gốc là:`, opts:opts(orig,[sale*1.2,orig+20,orig-20]), ans:String(orig) }; }
    case 'lin_add': { const a=r(2,6),b=r(3,8),c=r(1,5),d=r(1,6), ans=`${a+c}x + ${b+d}`; return { q:`Rút gọn: (${a}x + ${b}) + (${c}x + ${d})`, opts:sh([ans,`${a+c}x + ${b}`,`${a*c}x + ${b+d}`]), ans }; }
    case 'lin_fac': { const k=r(2,5), b=r(2,7), ans=`${k}(x + ${b})`; return { q:`Phân tích thành nhân tử: ${k}x + ${k*b}`, opts:sh([ans,`${k}(x + ${k*b})`,`${b}(x + ${k})`]), ans }; }
    case 'eq2': { const a=r(2,6), x=r(2,9), b=r(1,10), c=a*x+b; return { q:`Giải phương trình: ${a}x + ${b} = ${c}`, opts:opts(x,[x+1,x-1,c-b]), ans:String(x) }; }
    case 'eq2_p': { const a=r(2,5), b=r(1,5), x=r(2,7), c=a*(x+b); return { q:`Giải phương trình: ${a}(x + ${b}) = ${c}`, opts:opts(x,[x+b,x+1,x-1]), ans:String(x) }; }
    case 'ineq2': { const a=r(2,5), b=r(1,8), x=r(3,8); return { q:`Nghiệm của ${a}x + ${b} > ${a*x+b} là:`, opts:sh([`x > ${x}`,`x < ${x}`,`x > ${x+1}`]), ans:`x > ${x}` }; }
    case 'ineq_neg': { const a=-r(2,5), x=r(2,6); return { q:`Giải bất phương trình: ${a}x < ${a*x}`, opts:sh([`x > ${x}`,`x < ${x}`,`x < ${-x}`]), ans:`x > ${x}` }; }
    case 'pt_on_line': { const k=r(2,5), x=r(2,6), y=k*x; return { q:`Điểm nào nằm trên đồ thị y = ${k}x?`, opts:sh([`(${x}; ${y})`,`(${x}; ${y+1})`,`(${y}; ${x})`]), ans:`(${x}; ${y})` }; }
    case 'supp': { const a=r(30,140), ans=`${180-a}°`; return { q:`Hai góc kề bù, một góc bằng ${a}°. Góc còn lại là:`, opts:sh([ans,`${90-a}°`,`${180-a+10}°`]), ans }; }
    case 'comp': { const a=r(15,75), ans=`${90-a}°`; return { q:`Hai góc phụ nhau, một góc bằng ${a}°. Góc còn lại là:`, opts:sh([ans,`${180-a}°`,`${90-a+10}°`]), ans }; }
    case 'tri_ang': { const a=r(40,70), b=r(40,70), ans=`${180-a-b}°`; return { q:`Tam giác có 2 góc là ${a}° và ${b}°. Góc thứ ba là:`, opts:sh([ans,`${90-a}°`,`${a+b}°`]), ans }; }
    case 'tri_ineq': { return { q:`Bộ 3 độ dài nào lập thành một tam giác?`, opts:['3 cm, 4 cm, 5 cm','1 cm, 2 cm, 5 cm','2 cm, 3 cm, 6 cm'], ans:'3 cm, 4 cm, 5 cm' }; }
    case 'cong': { return { q:`Nếu 3 cạnh của tam giác này bằng 3 cạnh của tam giác kia, hai tam giác bằng nhau theo trường hợp:`, opts:['c.c.c (Cạnh - Cạnh - Cạnh)','c.g.c','g.c.g'], ans:'c.c.c (Cạnh - Cạnh - Cạnh)' }; }
    case 'circ_c': { const rad=r(2,max), ans=(2*3.14*rad).toFixed(2); return { q:`Chu vi đường tròn bán kính ${rad} cm (π = 3,14):`, opts:sh([ans,(3.14*rad).toFixed(2),(3.14*rad*rad).toFixed(2)]), ans }; }
    case 'circ_s': { const rad=r(2,max), ans=(3.14*rad*rad).toFixed(2); return { q:`Diện tích hình tròn bán kính ${rad} cm (π = 3,14):`, opts:sh([ans,(2*3.14*rad).toFixed(2),(3.14*rad).toFixed(2)]), ans }; }
    case 'scale': { const k=r(2,5)*10, d=r(2,8), ans=`${k*d} m`; return { q:`Trên bản đồ tỉ lệ 1:${k*100}, đoạn thẳng dài ${d} cm ứng với thực tế:`, opts:sh([ans,`${k*d*10} m`,`${d*10} m`]), ans }; }
    case 'scale_area': { const k=r(2,4), ans=`${k*k} lần`; return { q:`Khi tăng cạnh hình vuông lên ${k} lần thì diện tích tăng:`, opts:sh([ans,`${k} lần`,`${k*2} lần`]), ans }; }
    case 'prism_v': { const s=r(10,30), h=r(3,8), ans=`${s*h} cm³`; return { q:`Lăng trụ đứng có diện tích đáy ${s} cm², cao ${h} cm. Thể tích là:`, opts:sh([ans,`${s+h} cm³`,`${s*h/2} cm³`]), ans }; }
    case 'pyr_v': { const s=r(3,10)*3, h=r(2,8), ans=`${(s*h)/3} cm³`; return { q:`Hình chóp có diện tích đáy ${s} cm², cao ${h} cm. Thể tích là:`, opts:sh([ans,`${s*h} cm³`,`${(s*h)/2} cm³`]), ans }; }
    case 'mean': { const a=r(4,10),b=r(10,20),c=3*r(8,15)-a-b, ans=(a+b+c)/3; return { q:`Mean của ${a}, ${b}, ${c} là:`, opts:opts(ans,[ans+1,ans-1,a+b+c]), ans:String(ans) }; }
    case 'sample': { return { q:`Cách chọn mẫu nào ít bị thiên lệch nhất khi khảo sát học sinh toàn trường?`, opts:['Chọn ngẫu nhiên 100 học sinh từ danh sách toàn trường','Chỉ hỏi học sinh lớp 7A','Chỉ hỏi câu lạc bộ bóng đá'], ans:'Chọn ngẫu nhiên 100 học sinh từ danh sách toàn trường' }; }
    case 'prob': { const n=r(2,5); return { q:`Rút 1 lá bài từ 10 lá đánh số 1–10. Xác suất rút được số ≤ ${n} là:`, opts:sh([`${n}/10`,`${10-n}/10`,'1/10']), ans:`${n}/10` }; }
    case 'prob_pred': { const t=r(2,5)*20, ans=t/2; return { q:`Tung đồng xu cân đối ${t} lần. Dự đoán số lần ra mặt ngửa khoảng:`, opts:opts(ans,[t/4,t,ans+10]), ans:String(ans) }; }
    case 'comp_prob': { return { q:`Tung 2 đồng xu cùng lúc. Xác suất cả hai đều ra mặt ngửa là:`, opts:['1/4','1/2','1/3','3/4'], ans:'1/4' }; }
    case 'exp_mul': { const a=r(2,5), m=r(2,4), n=r(2,4); return { q:`Viết gọn dưới dạng 1 lũy thừa: ${a}^${m} × ${a}^${n}`, opts:sh([`${a}^${m+n}`,`${a}^${m*n}`,`${a*2}^${m+n}`]), ans:`${a}^${m+n}` }; }
    case 'exp_div': { const a=r(2,5), m=r(5,8), n=r(2,4); return { q:`Viết gọn: ${a}^${m} : ${a}^${n}`, opts:sh([`${a}^${m-n}`,`${a}^${m+n}`,`${a}^${m*n}`]), ans:`${a}^${m-n}` }; }
    default: return { q:'(-3) × (-4) = ?', opts:['-12','12','7','-7'], ans:'12' };
  }
};
