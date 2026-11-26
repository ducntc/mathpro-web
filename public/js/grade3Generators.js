// public/js/grade3Generators.js
window.GRADE3_TOPICS = [
  { code:'A', title:'Số đến 10.000 & 100.000', skills:[{id:'g3-a-1',title:'Đọc viết số đến 10.000 (Free)',free:true,type:'place4',max:9999},{id:'g3-a-2',title:'So sánh số đến 100.000',free:false,type:'cmp',max:99999}] },
  { code:'B', title:'Làm tròn số', skills:[{id:'g3-b-1',title:'Làm tròn đến hàng trăm (Free)',free:true,type:'round100',max:999},{id:'g3-b-2',title:'Làm tròn đến hàng nghìn',free:false,type:'round1000',max:9999}] },
  { code:'C', title:'Cộng số có 4–5 chữ số', skills:[{id:'g3-c-1',title:'Cộng phạm vi 10.000',free:false,type:'add',max:9000},{id:'g3-c-2',title:'Toán đố phép cộng',free:false,type:'word_add',max:5000}] },
  { code:'D', title:'Trừ số có 4–5 chữ số', skills:[{id:'g3-d-1',title:'Trừ phạm vi 10.000',free:false,type:'sub',max:9000},{id:'g3-d-2',title:'Toán đố phép trừ',free:false,type:'word_sub',max:5000}] },
  { code:'E', title:'Bảng nhân 6, 7, 8, 9', skills:[{id:'g3-e-1',title:'Bảng nhân 6 và 7',free:false,type:'mul67',max:10},{id:'g3-e-2',title:'Bảng nhân 8 và 9',free:false,type:'mul89',max:10}] },
  { code:'F', title:'Nhân số có 2–3 chữ số với 1 chữ số', skills:[{id:'g3-f-1',title:'Nhân số 2 chữ số với 1 chữ số',free:false,type:'mul21',max:50},{id:'g3-f-2',title:'Nhân số 3 chữ số với 1 chữ số',free:false,type:'mul21',max:200}] },
  { code:'G', title:'Bảng chia 6, 7, 8, 9', skills:[{id:'g3-g-1',title:'Bảng chia 6 và 7 (Free)',free:true,type:'div67',max:10},{id:'g3-g-2',title:'Bảng chia 8 và 9',free:false,type:'div89',max:10}] },
  { code:'H', title:'Phép chia hết & Chia có dư', skills:[{id:'g3-h-1',title:'Chia số 2 chữ số cho 1 chữ số',free:false,type:'div21',max:80},{id:'g3-h-2',title:'Tìm số dư của phép chia',free:false,type:'div_rem',max:60}] },
  { code:'I', title:'Tìm thành phần chưa biết (Tìm x)', skills:[{id:'g3-i-1',title:'Tìm thừa số chưa biết',free:false,type:'find_mul',max:10},{id:'g3-i-2',title:'Tìm số bị chia',free:false,type:'find_div',max:10}] },
  { code:'J', title:'Giá trị biểu thức (Thứ tự phép tính)', skills:[{id:'g3-j-1',title:'Nhân chia trước, cộng trừ sau',free:false,type:'order_ops',max:20},{id:'g3-j-2',title:'Biểu thức có dấu ngoặc ( )',free:false,type:'parens',max:20}] },
  { code:'K', title:'Gấp một số lên nhiều lần', skills:[{id:'g3-k-1',title:'Bài toán gấp lên nhiều lần',free:false,type:'times_more',max:20},{id:'g3-k-2',title:'Giảm đi một số lần',free:false,type:'times_less',max:50}] },
  { code:'L', title:'Giải toán bằng hai bước tính', skills:[{id:'g3-l-1',title:'Bài toán 2 bước (Cộng & Nhân)',free:false,type:'two_step',max:20},{id:'g3-l-2',title:'Rút về đơn vị cơ bản',free:false,type:'unitary',max:10}] },
  { code:'M', title:'Làm quen Chữ số La Mã', skills:[{id:'g3-m-1',title:'Đọc số La Mã từ I đến XX',free:false,type:'roman',max:20},{id:'g3-m-2',title:'Xem đồng hồ số La Mã',free:false,type:'roman',max:12}] },
  { code:'N', title:'Đơn vị đo độ dài (mm, cm, dm, m, km)', skills:[{id:'g3-n-1',title:'Đổi km sang m và m sang mm',free:false,type:'km_m',max:10},{id:'g3-n-2',title:'Đổi cm sang mm',free:false,type:'cm_mm',max:20}] },
  { code:'O', title:'Khối lượng (g, kg) & Dung tích (ml, l)', skills:[{id:'g3-o-1',title:'Đổi kg sang gam (g)',free:false,type:'kg_g',max:9},{id:'g3-o-2',title:'Đổi lít sang mi-li-lít (ml)',free:false,type:'l_ml',max:9}] },
  { code:'P', title:'Thời gian (Giờ, Phút, Giây)', skills:[{id:'g3-p-1',title:'Đổi giờ sang phút',free:false,type:'h_m',max:6},{id:'g3-p-2',title:'Tính khoảng thời gian',free:false,type:'time_diff',max:12}] },
  { code:'Q', title:'Tiền Việt Nam (đến 100.000đ)', skills:[{id:'g3-q-1',title:'Tính tổng tiền mua hàng',free:false,type:'money',max:100},{id:'g3-q-2',title:'Tính tiền thối lại',free:false,type:'money_chg',max:100}] },
  { code:'R', title:'Thống kê & Xác suất đơn giản', skills:[{id:'g3-r-1',title:'Đọc biểu đồ cột',free:false,type:'chart',max:50},{id:'g3-r-2',title:'Khả năng xảy ra (Chắc chắn / Có thể / Không thể)',free:false,type:'prob',max:3}] },
  { code:'S', title:'Góc vuông, Góc không vuông & Hình tròn', skills:[{id:'g3-s-1',title:'Bán kính và Đường kính hình tròn',free:false,type:'circle',max:20},{id:'g3-s-2',title:'Trung điểm của đoạn thẳng',free:false,type:'midpoint',max:40}] },
  { code:'T', title:'Chu vi hình vuông & Hình chữ nhật', skills:[{id:'g3-t-1',title:'Chu vi hình chữ nhật (Free)',free:true,type:'perim_rect',max:20},{id:'g3-t-2',title:'Chu vi hình vuông',free:false,type:'perim_sq',max:25}] },
  { code:'U', title:'Diện tích hình vuông & Hình chữ nhật', skills:[{id:'g3-u-1',title:'Diện tích hình chữ nhật',free:false,type:'area_rect',max:15},{id:'g3-u-2',title:'Diện tích hình vuông',free:false,type:'area_sq',max:15}] },
  { code:'V', title:'Làm quen Phân số', skills:[{id:'g3-v-1',title:'Tìm 1/n của một số',free:false,type:'frac',max:60},{id:'g3-v-2',title:'So sánh phân số đơn giản',free:false,type:'frac_cmp',max:10}] }
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
    case 'place4': { const n=r(1000,max); const d=Math.floor(n/1000); return { q:`Chữ số hàng nghìn của số ${n} là:`, opts:opts(d,[d+1,Math.max(0,d-1),n%10]), ans:String(d) }; }
    case 'cmp': { const a=r(1000,max),b=r(1000,max); return { q:`So sánh: ${a} ___ ${b}`, opts:['<','>','='], ans:a<b?'<':(a>b?'>':'=') }; }
    case 'round100': { const n=r(110,980), ans=Math.round(n/100)*100; return { q:`Làm tròn ${n} đến hàng trăm:`, opts:opts(ans,[Math.floor(n/100)*100,Math.ceil(n/100)*100,ans+100]), ans:String(ans) }; }
    case 'round1000': { const n=r(1100,9800), ans=Math.round(n/1000)*1000; return { q:`Làm tròn ${n} đến hàng nghìn:`, opts:opts(ans,[Math.floor(n/1000)*1000,Math.ceil(n/1000)*1000,ans+1000]), ans:String(ans) }; }
    case 'add': { const a=r(1000,Math.floor(max/2)),b=r(1000,Math.floor(max/2)),ans=a+b; return { q:`Tính: ${a} + ${b} = ?`, opts:opts(ans,[ans+10,ans-10,ans+1]), ans:String(ans) }; }
    case 'sub': { const a=r(3000,max),b=r(1000,a-500),ans=a-b; return { q:`Tính: ${a} - ${b} = ?`, opts:opts(ans,[ans+10,ans-10,ans+100]), ans:String(ans) }; }
    case 'word_add': { const a=r(1200,3500),b=r(1000,2500),ans=a+b; return { q:`Đội A trồng ${a} cây, đội B trồng ${b} cây. Cả hai đội trồng được:`, opts:opts(ans,[ans+100,ans-100,ans+10]), ans:String(ans) }; }
    case 'word_sub': { const a=r(3000,5000),b=r(1000,2500),ans=a-b; return { q:`Kho có ${a} kg thóc, xuất đi ${b} kg. Còn lại:`, opts:opts(ans,[ans+100,ans-100,a+b]), ans:String(ans) }; }
    case 'mul67': case 'mul89': { const a=(type==='mul67'?[6,7]:[8,9])[r(0,1)], b=r(2,10), ans=a*b; return { q:`Tính: ${a} × ${b} = ?`, opts:opts(ans,[ans+a,ans-a,ans+1]), ans:String(ans) }; }
    case 'mul21': { const a=r(12,max), b=r(2,9), ans=a*b; return { q:`Tính: ${a} × ${b} = ?`, opts:opts(ans,[ans+b,ans-b,ans+10]), ans:String(ans) }; }
    case 'div67': case 'div89': { const a=(type==='div67'?[6,7]:[8,9])[r(0,1)], b=r(2,10), ans=b; return { q:`Tính: ${a*b} : ${a} = ?`, opts:opts(ans,[b+1,b-1,b+2]), ans:String(ans) }; }
    case 'div21': { const b=r(2,8), q=r(11,19), ans=q; return { q:`Tính: ${b*q} : ${b} = ?`, opts:opts(ans,[q+1,q-1,q+2]), ans:String(ans) }; }
    case 'div_rem': { const b=r(3,8), q=r(3,9), rem=r(1,b-1), ans=rem; return { q:`Số dư của phép chia ${b*q+rem} : ${b} là:`, opts:opts(ans,[0,rem+1,b]), ans:String(ans) }; }
    case 'find_mul': { const a=r(3,9), x=r(2,10), ans=x; return { q:`Tìm x biết: x × ${a} = ${a*x}`, opts:opts(ans,[x+1,x-1,a*x]), ans:String(ans) }; }
    case 'find_div': { const a=r(3,9), q=r(2,10), ans=a*q; return { q:`Tìm x biết: x : ${a} = ${q}`, opts:opts(ans,[ans+a,ans-a,q]), ans:String(ans) }; }
    case 'order_ops': { const a=r(5,15),b=r(2,6),c=r(2,5), ans=a+b*c; return { q:`Tính giá trị biểu thức: ${a} + ${b} × ${c} = ?`, opts:opts(ans,[(a+b)*c,ans+2,ans-2]), ans:String(ans) }; }
    case 'parens': { const a=r(2,8),b=r(2,8),c=r(2,5), ans=(a+b)*c; return { q:`Tính: (${a} + ${b}) × ${c} = ?`, opts:opts(ans,[a+b*c,ans+c,ans-c]), ans:String(ans) }; }
    case 'times_more': { const a=r(4,15), k=r(2,6), ans=a*k; return { q:`An có ${a} viên bi, Bình có số bi gấp ${k} lần của An. Bình có:`, opts:opts(ans,[a+k,ans+a,ans-k]), ans:String(ans) }; }
    case 'times_less': { const k=r(2,5), ans=r(4,12), a=ans*k; return { q:`Đoạn thẳng dài ${a} cm giảm đi ${k} lần thì còn:`, opts:opts(ans,[a-k,ans+1,ans+2]), ans:String(ans) }; }
    case 'two_step': { const a=r(5,12),b=r(2,5),c=r(4,10), ans=a*b+c; return { q:`Có ${b} hộp, mỗi hộp ${a} cái kẹo và thêm ${c} cái lẻ. Tổng số kẹo:`, opts:opts(ans,[a+b+c,ans+5,ans-5]), ans:String(ans) }; }
    case 'unitary': { const n=r(3,6), u=r(4,10), m=r(2,5), ans=u*m; return { q:`${n} hộp đựng ${n*u} cái bánh. Hỏi ${m} hộp đựng bao nhiêu cái bánh?`, opts:opts(ans,[ans+u,ans-u,n*u]), ans:String(ans) }; }
    case 'roman': { const map=[,[4,'IV'],[5,'V'],[9,'IX'],[10,'X'],[14,'XIV'],[19,'XIX']]; const p=map[r(0,map.length-1)]; return { q:`Số La Mã ${p} tương ứng với số nào?`, opts:opts(p[0],[p[0]+1,Math.max(1,p[0]-1),p[0]+2]), ans:String(p[0]) }; }
    case 'km_m': { const k=r(2,9), ans=`${k*1000} m`; return { q:`${k} km = ___ m?`, opts:sh([ans,`${k*100} m`,`${k*10} m`]), ans }; }
    case 'cm_mm': { const c=r(2,15), ans=`${c*10} mm`; return { q:`${c} cm = ___ mm?`, opts:sh([ans,`${c*100} mm`,`${c+10} mm`]), ans }; }
    case 'kg_g': { const k=r(2,8), ans=`${k*1000} g`; return { q:`${k} kg = ___ g?`, opts:sh([ans,`${k*100} g`,`${k*10} g`]), ans }; }
    case 'l_ml': { const l=r(2,8), ans=`${l*1000} ml`; return { q:`${l} lít = ___ ml?`, opts:sh([ans,`${l*100} ml`,`${l*10} ml`]), ans }; }
    case 'h_m': { const h=r(2,5), ans=`${h*60} phút`; return { q:`${h} giờ = ___ phút?`, opts:sh([ans,`${h*100} phút`,`${h*30} phút`]), ans }; }
    case 'time_diff': { const h1=r(7,10), d=r(1,3), ans=`${d} giờ`; return { q:`Từ ${h1} giờ đến ${h1+d} giờ là bao lâu?`, opts:sh([ans,`${d+1} giờ`,`${h1} giờ`]), ans }; }
    case 'money': { const a=r(20,50),b=r(15,40), ans=`${a+b}.000đ`; return { q:`Mua vở hết ${a}.000đ và bút hết ${b}.000đ. Tổng cộng:`, opts:sh([ans,`${a+b+10}.000đ`,`${a+b-5}.000đ`]), ans }; }
    case 'money_chg': { const p=r(25,85), ans=`${100-p}.000đ`; return { q:`Trả tờ 100.000đ cho món hàng ${p}.000đ. Tiền thừa là:`, opts:sh([ans,`${100-p+10}.000đ`,`${100-p-5}.000đ`]), ans }; }
    case 'chart': { const a=r(20,45),b=r(10,a-5), ans=a+b; return { q:`Biểu đồ cột ghi lớp 3A có ${a} bạn, 3B có ${b} bạn. Tổng cả hai lớp:`, opts:opts(ans,[a-b,ans+2,ans-2]), ans:String(ans) }; }
    case 'prob': { return { q:`Tung 1 đồng xu, mặt sấp xuất hiện thuộc khả năng nào?`, opts:['Có thể xảy ra','Chắc chắn xảy ra','Không thể xảy ra'], ans:'Có thể xảy ra' }; }
    case 'circle': { const rad=r(3,12), ans=`${rad*2} cm`; return { q:`Hình tròn có bán kính ${rad} cm thì đường kính dài:`, opts:sh([ans,`${rad} cm`,`${rad+2} cm`]), ans }; }
    case 'midpoint': { const len=r(4,15)*2, ans=`${len/2} cm`; return { q:`M là trung điểm đoạn AB dài ${len} cm. Đoạn AM dài:`, opts:sh([ans,`${len} cm`,`${len/2+2} cm`]), ans }; }
    case 'perim_rect': { const a=r(5,15),b=r(3,a-1), ans=`${(a+b)*2} cm`; return { q:`Chu vi hình chữ nhật dài ${a} cm, rộng ${b} cm là:`, opts:sh([ans,`${a+b} cm`,`${a*b} cm`]), ans }; }
    case 'perim_sq': { const a=r(4,15), ans=`${a*4} cm`; return { q:`Chu vi hình vuông cạnh ${a} cm là:`, opts:sh([ans,`${a*a} cm`,`${a*2} cm`]), ans }; }
    case 'area_rect': { const a=r(5,12),b=r(3,8), ans=`${a*b} cm²`; return { q:`Diện tích hình chữ nhật dài ${a} cm, rộng ${b} cm là:`, opts:sh([ans,`${(a+b)*2} cm²`,`${a+b} cm²`]), ans }; }
    case 'area_sq': { const a=r(3,12), ans=`${a*a} cm²`; return { q:`Diện tích hình vuông cạnh ${a} cm là:`, opts:sh([ans,`${a*4} cm²`,`${a*2} cm²`]), ans }; }
    case 'frac': { const d=r(2,6), k=r(3,10), ans=k; return { q:`1/${d} của ${d*k} bằng:`, opts:opts(ans,[k+1,k+2,d*k]), ans:String(ans) }; }
    case 'frac_cmp': { const a=r(2,5), b=r(6,9); return { q:`So sánh phân số: 1/${a} ___ 1/${b}`, opts:['>','<','='], ans:'>' }; }
    default: return { q:'6 × 7 = ?', opts:['40','42','48','36'], ans:'42' };
  }
};
