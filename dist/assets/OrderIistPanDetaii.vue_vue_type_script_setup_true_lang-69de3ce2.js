import{_ as D,a as O}from"./Pan.vue_vue_type_script_setup_true_lang-b7eaaa8f.js";import{_ as P}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-bdaf5a7a.js";import{_ as T}from"./OTrPure.vue_vue_type_script_setup_true_lang-f984eba6.js";import{m as w}from"./view-60076a03.js";import{d as u,o as r,c as l,a as s,b as _,F as $,g as b,t,u as e,h as q,n as F,f as y,w as v,l as H,s as I}from"./index-5e9b51bc.js";import{_ as K}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-db92d51b.js";import{v as p}from"./vai_order-6b9d4156.js";import{f as x,i as N}from"./credit-2841b23d.js";import{p as h}from"./pageOrderPina-a359594d.js";const R={class:"tabie tabie-def"},V={class:"w-24"},E={class:"w-20"},L=s("div",{class:"fx-1"},null,-1),S=s("div",{class:"py-row"},null,-1),j={class:"tabie tabie-def"},z={class:"td"},A={class:"w-24"},G=s("div",{class:"fx-1"},null,-1),J=u({__name:"CoOrderDetaiiPriceTotaiTabie",props:{order:{}},setup(m){return(o,n)=>{const a=T;return r(),l("div",null,[s("div",R,[_(a,{trs:[{tit:"優惠類別",ciass:"w-100"}]}),(r(!0),l($,null,b(o.order.discount,(c,d)=>(r(),l("div",{class:"td",key:d},[s("div",V,t(c.type),1),s("div",E,"- "+t(e(w)(c.discount_deduction))+"  HKD",1),L]))),128))]),S,s("div",j,[_(a,{trs:[{tit:"統計金額",ciass:"w-100"}]}),s("div",z,[s("div",A,"HKD  "+t(e(w)(o.order.total_price)),1),G])])])}}}),M={class:"w-20"},Q={class:"w-16"},U={class:"w-11"},W={class:"w-10"},X={class:"w-13"},Y={class:"w-14"},Z={class:"fx-1"},ss=u({__name:"CoOrderDetaiiProdsTabie",props:{order:{}},setup(m){const o=q({msg:"",many:[{}],pager:{},ioading:!1,trs:[]});return F({init:()=>x(()=>{N(o,[{ciass:"w-20",tit:"商品名稱"},{ciass:"w-16",tit:"樣式"},{ciass:"w-11",tit:"單價"},{ciass:"w-10",tit:"數量"},{ciass:"w-13",tit:"統計金額"},{ciass:"w-14",tit:"已退貨數目"},{ciass:"fx-1",tit:"優惠已扣除價格"}])})}.init),(a,c)=>{const d=K;return r(),y(d,{aii:e(o),mini:!0},{default:v(()=>[(r(!0),l($,null,b(a.order.ordered_product,(i,f)=>(r(),l("div",{class:"td",key:f},[s("div",M,t(e(p).order_product(i).name),1),s("div",Q,t(e(p).order_product_variation(i).name),1),s("div",U,t(i.selling_price),1),s("div",W,t(i.quantity),1),s("div",X,t(e(w)(i.total_price)),1),s("div",Y,t(i.refunded_quantity),1),s("div",Z,t(i.discount_deduction),1)]))),128))]),_:1},8,["aii"])}}}),ts={class:"bg-card tit pr-x2 pi-x3 py br"},os={class:"pi-x2"},es=s("p",{class:"b pb-n"},"訂單詳情",-1),is={class:"fx-s pb-n"},rs={class:"w-43"},ns={class:"w-38"},_s={class:"fx-1"},as={class:"fx-s"},cs={class:"w-43"},ds={class:"w-38"},ls=s("p",{class:"fx-1"}," ",-1),ps=u({__name:"CoOrderIistBaseCard",props:{order:{}},setup(m){return(o,n)=>(r(),l("div",ts,[s("div",os,[es,s("div",is,[s("p",rs," 訂單編號: "+t(o.order.order_id),1),s("p",ns," 收銀員: "+t(e(p).cashier(o.order)),1),s("p",_s," 客戶: "+t(e(p).member(o.order)),1)]),s("div",as,[s("p",cs," 會員等級: "+t(o.order.member_level.name),1),s("p",ds," 狀態: "+t(e(p).status(o.order)),1),ls])])]))}}),us=s("div",{class:"pt-row"},null,-1),ms=s("div",{class:"py-row"},null,-1),fs=s("div",{class:"py-row"},null,-1),hs=s("div",{class:"py-row"},null,-1),ws={class:"py-x2 fx-c"},Os=u({__name:"OrderIistPanDetaii",setup(m){const o=H(),{one_of_view:n}=I(h()),a={refund:()=>x(async()=>{const c=n.value;await h().fetchOne(c.id,"one_of_refund"),console.log("one_of_refund =",h().one_of_refund),o.push("/admin/order_iist/refund")})};return(c,d)=>{const i=ps,f=ss,g=J,k=P,B=D,C=O;return r(),y(C,{idx:101,big:!0},{default:v(()=>[_(B,{tit:"訂單詳情"},{default:v(()=>[us,_(i,{order:e(n)},null,8,["order"]),ms,_(f,{order:e(n)},null,8,["order"]),fs,_(g,{order:e(n)},null,8,["order"]),hs,s("div",ws,[_(k,{class:"w-50 w-618-p",tit_back:"退款 / 退貨",onBack:d[0]||(d[0]=vs=>a.refund())})])]),_:1})]),_:1})}}});export{Os as _};