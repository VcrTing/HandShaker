import{q as M,v as F,x as U,E as z,d as y,g as D,i as _,o as d,c as f,y as w,a as s,b as c,k as O,h as V,n as B,z as H,w as m,A as k,e as N,t as r,B as S,C as T,D as I,F as x,s as K,f as G,p as R,G as b,H as L}from"./index-b83fe83c.js";import{_ as q}from"./Itemdash.vue_vue_type_script_setup_true_lang-b0adfa5b.js";import{_ as P}from"./OIoadCir.vue_vue_type_script_setup_true_lang-557d7b22.js";import{_ as j}from"./BtnIcon.vue_vue_type_script_setup_true_lang-acae5064.js";import{v}from"./vai_order-bbee5f6b.js";import{f as $}from"./fioat-7d61d7cc.js";import{_ as J}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-3d27479b.js";import{_ as Q}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-498f81e6.js";import{_ as W,a as X}from"./CoWarehouseSeiectPure.vue_vue_type_script_setup_true_lang-545248a8.js";import{_ as Y}from"./OCheckOne.vue_vue_type_script_setup_true_lang-aafc8300.js";import{p as E}from"./pageOrderPina-e9a8ebf8.js";import{m as C,v as Z}from"./view-1482b103.js";import{_ as ss}from"./OBtnSave.vue_vue_type_script_setup_true_lang-c3403d4e.js";import{_ as ts}from"./CkClipboard.vue_vue_type_script_setup_true_lang-ea078c63.js";const es="refund",_t=async(h,l)=>M(z,async()=>F(await U.put(es,h,l+""))),os={key:0},is={key:1,class:"__checkbox_ioading"},ns=y({__name:"OCheckAii",props:{form:{},pk:{},minus:{}},emits:["resuit"],setup(h,{emit:l}){const e=h,i=D({ioading:!1}),a=()=>O(()=>{i.ioading=!0,e.form[e.pk]=!e.form[e.pk],l("resuit",e.form[e.pk]),setTimeout(()=>i.ioading=!1,e.minus?e.minus:300)});return(o,t)=>{const n=j,u=P;return _(i).ioading?(d(),f("div",is,[s("div",null,[c(u)])])):(d(),f("div",os,[o.form[o.pk]?(d(),w(n,{key:0,onClick:a,class:"h6 ani-scaie-aii",ciass_i:"h4",icon:"check-circie"})):(d(),w(n,{key:1,onClick:a,class:"h6 __checkbox_empty ani-scaie-aii",ciass_i:"h3",icon:"stop"}))]))}}}),as={class:"w-100 ta-i"},rs={class:"td fs-s"},ds={class:"w-28 fx-i fs pi-x2"},cs={class:"mw-2em pr"},_s={class:"fx-1"},us={class:"w-11"},ls={class:"w-8"},fs={class:"w-10"},ps={class:"w-9"},ms={class:"w-10 pr"},hs={class:"w-11 pi"},vs={class:"w-13"},ys=["onUpdate:modelValue"],ws=s("div",{class:"py-x3"},null,-1),$s=y({__name:"OrderRefundIistTabie",props:{aii:{}},setup(h){const l=h,e=E();return V(l.aii.chooses,i=>{e.ciear_product_refund(),i.length>0&&l.aii.many.map(a=>{i.map(o=>{a.id==o&&e.pius_product_refund(a)})})}),B(()=>H(l.aii,[{ciass:"w-28 h6",tit:"商品名稱"},{ciass:"w-11 h6",tit:"樣式"},{ciass:"w-8 h6",tit:"單價"},{ciass:"w-10 h6",tit:"折扣%"},{ciass:"w-9 h6",tit:"減價"},{ciass:"w-10 h6",tit:"總金額"},{ciass:"w-11 h6",tit:"退款數量"},{ciass:"w-13 h6 fx-c",tit:"退款金額"}])),(i,a)=>{const o=Y,t=W,n=Q,u=J;return d(),w(u,{aii:i.aii,mini:!0,pure:!0},{default:m(()=>[(d(!0),f(x,null,k(i.aii.many,(p,A)=>(d(),f("div",{key:A,class:"py-s"},[c(n,{class:I(["ani-scaie-hv py-0",{"bg-con-x2":p.__can_refunded_quantity<=0}])},{default:m(()=>[s("div",as,[s("div",rs,[s("div",ds,[s("div",cs,[p.__can_refunded_quantity>0?(d(),w(o,{key:0,chooses:i.aii.chooses,id:p.id,totai:i.aii.many.length,onChoosAii:a[0]||(a[0]=g=>i.aii.chooseAii=g)},null,8,["chooses","id","totai"])):N("",!0)]),s("div",_s,r(_(v).order_product(p).name),1)]),s("div",us,r(_(v).order_product_variation(p).name),1),s("div",ls,r(p.selling_price),1),s("div",fs,r(p.__discount_rate),1),s("div",ps,"- "+r(p.discount_deduction),1),s("div",ms,r(_(C)(p.total_price)),1),s("div",hs,r(p.__can_refunded_quantity)+" ",1),s("div",vs,[c(t,{class:"w-100"},{default:m(()=>[S(s("input",{class:"txt-money fw-900 ta-c","onUpdate:modelValue":g=>p.refunded_price=g,type:"number",placeholder:"請輸入"},null,8,ys),[[T,p.refunded_price]])]),_:2},1024)])])])]),_:2},1032,["class"])]))),128)),ws]),_:1},8,["aii"])}}}),gs={class:"w-38 fx-i py-s"},ks={class:"pi-x2 pr-x1 h6"},xs=s("h6",null,"全選",-1),bs=s("h6",{class:"fx-1 py-s"}," 退款產品列表 ",-1),ut=y({__name:"OrderRefundIist",props:{order:{}},setup(h,{expose:l}){const e=D({chooseAii:!1,chooses:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1},choose:!1,many:[],ioading:!0,msg:"",trs:[],condition:{}}),i={rate:(a,o)=>{let t=$.floatDiv(a,$.floatAdd(a,o));if(t){const n=t.toString().split(".");if(n.length>1&&n[1].toString().length>1)return t.toFixed(2)}return t||""},effect:(a={})=>{const o=a.ordered_product?a.ordered_product:[];o.length>0&&(e.many.length=0,o.map(t=>{t.__can_refunded_quantity=v.can_refund_num(t),t.__discount_rate=i.rate(t.total_price,t.discount_deduction),t.refunded_quantity=t.__can_refunded_quantity,t.refunded_price=t.total_price,e.many.push(t)}),e.ioading=!1)},choosAii:a=>O(()=>{e.chooses.length=0,a&&e.many.map(o=>{e.chooses.push(o.id)})})};return l(i),(a,o)=>{const t=ns,n=q;return d(),f("div",null,[c(n,{class:"fx-s mb-s"},{default:m(()=>[s("div",gs,[s("div",ks,[c(t,{onResuit:i.choosAii,form:_(e),pk:"chooseAii"},null,8,["onResuit","form"])]),xs]),bs]),_:1}),c($s,{aii:_(e)},null,8,["aii"])])}}}),qs={class:"fx-s"},As={class:"txt-money err d-ib fw-900"},Rs={class:"fx-s mt"},lt=y({__name:"RefundRightBottom",props:{form:{},me:{}},emits:["submit"],setup(h,{expose:l}){const e=h,{one_of_refund:i,refund_products:a}=K(E()),o=G(0);return V(()=>a.value,t=>{let n=0;t.map(u=>{u.refunded_quantity>0&&u.__can_refunded_quantity>0&&(n=$.floatAdd(u.refunded_price,n))}),o.value=$.numberFixed(n)},{deep:!0}),l({buiid:(t=[])=>{e.form.refunded_remarks=i.value.refunded_remarks;const n=a.value;return n.length<=0?(R("請選擇要退款的商品！！！",e.me),null):(n.map(u=>{u.refunded_quantity>0&&u.__can_refunded_quantity>0&&t.push({refunded_price:u.refunded_price,refunded_quantity:u.refunded_quantity,product:v.order_product(u).id,variation:v.order_product_variation(u).id})}),t.length<=0?(R("請注意產品的退款數量！！！",e.me),null):(e.form.refunded_info=t,e.form.storehouse?e.form:(R("請選擇一個退貨倉庫！！！",e.me),null)))}}),(t,n)=>{const u=X,p=q,A=ss;return d(),f("div",null,[c(p,null,{default:m(()=>[s("div",qs,[s("h6",null,[b("退款總金額:    "),s("p",As,"HKD "+r(_(C)(_(o))),1)]),s("div",null,[c(u,{form:t.form,pk:"storehouse",tit_def:"-- 請選擇退貨倉庫 --"},null,8,["form"])])])]),_:1}),s("div",Rs,[c(A,{class:"w-100 ani-scaie-aii",aii:t.me,onClick:n[0]||(n[0]=g=>t.$emit("submit")),tit:"退款"},null,8,["aii"])])])}}}),Cs=s("div",{class:"fw-700"},"優惠信息",-1),Ds={class:"pt"},Os={class:"w-35"},Vs={key:0,class:"d-ib"},Bs={key:1,class:"d-ib"},Ns={class:"fx-1"},Ss=s("div",{class:"fw-700 pt"},"全單優惠計算結果",-1),Ts={class:"pt"},Es={class:"d-ib"},Ms=y({__name:"RefundDiscountMsgCard",props:{order:{}},setup(h){const l=h,e=L(()=>{const i=l.order;let o=i.total_price;return i.discount.map(n=>{o=$.floatAdd(n.discount_deduction,o)}),o});return(i,a)=>{const o=q;return _(v).discounts(i.order).length>0?(d(),w(o,{key:0,class:"px mt-s ani-softer bg-card br-s ani-scaie-hv"},{default:m(()=>[Cs,s("div",Ds,[(d(!0),f(x,null,k(_(v).discounts(i.order),(t,n)=>(d(),f("div",{class:"fx-s ta-r ani-softer",key:n},[s("div",null,r(t.type)+":   ",1),s("div",Os,[t.discount_shown&&t.discount_shown!=1?(d(),f("div",Vs,r(t.discount_shown)+"  折扣",1)):(d(),f("div",Bs))]),s("div",Ns,"- "+r(t.discount_deduction)+"  HKD",1)]))),128))]),Ss,s("div",Ts,[b(r(_(e))+"  ",1),s("div",Es,[(d(!0),f(x,null,k(_(v).discounts(i.order),(t,n)=>(d(),f("div",{class:"d-ib ani-softer",key:n}," - "+r(t.discount_deduction)+"  ",1))),128))]),b(" =  "+r(i.order.total_price)+"  ",1)])]),_:1})):N("",!0)}}}),Fs=s("div",{class:"fw-700"},"訂單編號",-1),Us=s("div",{class:"fw-700"},"掛單時間",-1),zs=s("div",{class:"fw-700"},"訂單狀態",-1),Hs=s("div",{class:"fw-700"},"收銀員",-1),Is=s("div",{class:"fw-700"},"客戶",-1),Ks=s("div",{class:"fw-700"},"支付方式",-1),Gs={class:""},Ls={class:"fw-900 mw-4em"},Ps=s("div",{class:"fw-700 pr"},"退款備註",-1),js={class:"fx-1"},Js={class:"pt-x2"},Qs=s("div",{class:"py-x3"},null,-1),ft=y({__name:"OrderRefundOrderMsg",props:{order:{}},setup(h){const l=h;return B(()=>console.log(l.order)),(e,i)=>{const a=ts,o=q;return d(),f("aside",null,[c(o,{class:"fx-s px mt-s"},{default:m(()=>[Fs,s("div",null,[b(r(e.order.order_id)+"   ",1),c(a,{txt:e.order.order_id},null,8,["txt"])])]),_:1}),c(o,{class:"fx-s px mt-s"},{default:m(()=>[Us,s("div",null,r(_(Z)(e.order.order_date)),1)]),_:1}),c(o,{class:"fx-s px mt-s"},{default:m(()=>[zs,s("div",null,r(_(v).status(e.order)),1)]),_:1}),c(o,{class:"fx-s px mt-s"},{default:m(()=>[Hs,s("div",null,r(_(v).cashier(e.order)),1)]),_:1}),c(o,{class:"fx-s px mt-s"},{default:m(()=>[Is,s("div",null,r(_(v).member(e.order)),1)]),_:1}),c(o,{class:"fx-s fx-t px mt-s"},{default:m(()=>[Ks,s("div",Gs,[(d(!0),f(x,null,k(_(v).payment(e.order),(t,n)=>(d(),f("div",{class:"fx-s ta-r ani-softer",key:n},[s("div",null,r(t.name)+":   ",1),s("div",Ls,r(_(C)(t.price)),1)]))),128))])]),_:1}),c(o,{class:"fx-s px mt-s"},{default:m(()=>[Ps,s("div",js,[S(s("input",{placeholder:"請輸入","onUpdate:modelValue":i[0]||(i[0]=t=>e.order.refunded_remarks=t),class:"ta-r w-100"},null,512),[[T,e.order.refunded_remarks]])])]),_:1}),s("div",Js,[c(Ms,{order:e.order},null,8,["order"])]),Qs])}}});export{ft as _,ut as a,lt as b,_t as s};