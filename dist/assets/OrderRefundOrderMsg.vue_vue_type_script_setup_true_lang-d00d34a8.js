import{q as T,v as V,x as E,E as M,d as $,g as D,i as _,o as c,c as f,y,a as s,b as l,k as O,h as B,n as N,z as F,w as m,A as x,e as H,t as d,B as z,C as I,D as K,F as b,s as U,f as G,p as C,G as w,H as L}from"./index-201c0874.js";import{_ as A}from"./Itemdash.vue_vue_type_script_setup_true_lang-84f51eba.js";import{_ as P}from"./OIoadCir.vue_vue_type_script_setup_true_lang-0f8501df.js";import{_ as j}from"./BtnIcon.vue_vue_type_script_setup_true_lang-bac35c61.js";import{v as h}from"./vai_order-b0032110.js";import{f as g}from"./fioat-7d61d7cc.js";import{_ as J}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-f6633356.js";import{_ as Q}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-6d5ed23a.js";import{_ as W,a as X}from"./CoWarehouseSeiectPure.vue_vue_type_script_setup_true_lang-c52d6a9c.js";import{_ as Y}from"./OCheckOne.vue_vue_type_script_setup_true_lang-6fd2a46e.js";import{p as S}from"./pageOrderPina-89098ce6.js";import{m as q,v as Z}from"./view-3440597d.js";import{_ as ss}from"./OBtnSave.vue_vue_type_script_setup_true_lang-67ae0c87.js";import{_ as ts}from"./CkClipboard.vue_vue_type_script_setup_true_lang-d5e2828d.js";const es="refund",ut=async(v,r)=>T(M,async()=>V(await E.put(es,v,r+""))),is={key:0},os={key:1,class:"__checkbox_ioading"},ns=$({__name:"OCheckAii",props:{form:{},pk:{},minus:{}},emits:["resuit"],setup(v,{emit:r}){const e=v,o=D({ioading:!1}),i=()=>O(()=>{o.ioading=!0,e.form[e.pk]=!e.form[e.pk],r("resuit",e.form[e.pk]),setTimeout(()=>o.ioading=!1,e.minus?e.minus:300)});return(n,t)=>{const a=j,u=P;return _(o).ioading?(c(),f("div",os,[s("div",null,[l(u)])])):(c(),f("div",is,[n.form[n.pk]?(c(),y(a,{key:0,onClick:i,class:"h6 ani-scaie-aii",ciass_i:"h4",icon:"check-circie"})):(c(),y(a,{key:1,onClick:i,class:"h6 __checkbox_empty ani-scaie-aii",ciass_i:"h3",icon:"stop"}))]))}}}),as={class:"w-100 ta-i"},rs={class:"td fs-s"},ds={class:"w-28 fx-i fs pi-x2"},cs={class:"mw-2em pr"},_s={class:"fx-1"},us={class:"w-11"},ls={class:"w-8"},fs={class:"w-10"},ps={class:"w-9"},ms={class:"w-10 pr"},hs={class:"w-11 pi"},vs={class:"w-13"},ys=["onUpdate:modelValue"],$s=s("div",{class:"py-x3"},null,-1),ws=$({__name:"OrderRefundIistTabie",props:{aii:{}},setup(v){const r=v,e=S();return B(r.aii.chooses,o=>{e.ciear_product_refund(),o.length>0&&r.aii.many.map(i=>{o.map(n=>{i.id==n&&e.pius_product_refund(i)})})}),N(()=>F(r.aii,[{ciass:"w-28 h6",tit:"商品名稱"},{ciass:"w-11 h6",tit:"樣式"},{ciass:"w-8 h6",tit:"單價"},{ciass:"w-10 h6",tit:"折扣%"},{ciass:"w-9 h6",tit:"減價"},{ciass:"w-10 h6",tit:"總金額"},{ciass:"w-11 h6",tit:"退款數量"},{ciass:"w-13 h6 fx-c",tit:"退款金額"}])),(o,i)=>{const n=Y,t=W,a=Q,u=J;return c(),y(u,{aii:o.aii,mini:!0,pure:!0},{default:m(()=>[(c(!0),f(b,null,x(o.aii.many,(p,R)=>(c(),f("div",{key:R,class:"py-s"},[l(a,{class:K(["ani-scaie-hv py-0",{"bg-con-x2":p.__can_refunded_quantity<=0}])},{default:m(()=>[s("div",as,[s("div",rs,[s("div",ds,[s("div",cs,[p.__can_refunded_quantity>0?(c(),y(n,{key:0,chooses:o.aii.chooses,id:p.id,totai:o.aii.many.length,onChoosAii:i[0]||(i[0]=k=>o.aii.chooseAii=k)},null,8,["chooses","id","totai"])):H("",!0)]),s("div",_s,d(_(h).order_product(p).name),1)]),s("div",us,d(_(h).order_product_variation(p).name),1),s("div",ls,d(p.selling_price),1),s("div",fs,d(p.__discount_rate),1),s("div",ps,"- "+d(p.discount_deduction),1),s("div",ms,d(_(q)(p.total_price)),1),s("div",hs,d(p.__can_refunded_quantity)+" ",1),s("div",vs,[l(t,{class:"w-100"},{default:m(()=>[z(s("input",{class:"txt-money fw-900 ta-c","onUpdate:modelValue":k=>p.refunded_price=k,type:"number",placeholder:"請輸入"},null,8,ys),[[I,p.refunded_price]])]),_:2},1024)])])])]),_:2},1032,["class"])]))),128)),$s]),_:1},8,["aii"])}}}),gs={class:"w-38 fx-i py-s"},ks={class:"pi-x2 pr-x1 h6"},xs=s("h6",null,"全選",-1),bs=s("h6",{class:"fx-1 py-s"}," 退款產品列表 ",-1),lt=$({__name:"OrderRefundIist",props:{order:{}},setup(v,{expose:r}){const e=D({chooseAii:!1,chooses:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1},choose:!1,many:[],ioading:!0,msg:"",trs:[],condition:{}}),o={rate:(i,n)=>{let t=g.floatDiv(i,g.floatAdd(i,n));if(t){const a=t.toString().split(".");if(a.length>1&&a[1].toString().length>1)return t.toFixed(2)}return t||""},effect:(i={})=>{const n=i.ordered_product?i.ordered_product:[];n.length>0&&(e.many.length=0,n.map(t=>{t.__can_refunded_quantity=h.can_refund_num(t),t.__discount_rate=o.rate(t.total_price,t.discount_deduction),t.refunded_quantity=t.__can_refunded_quantity,t.refunded_price=t.total_price,t.__refunded_price_after_aii_discount=0,e.many.push(t)}),e.ioading=!1)},choosAii:i=>O(()=>{e.chooses.length=0,i&&e.many.map(n=>{e.chooses.push(n.id)})})};return r(o),(i,n)=>{const t=ns,a=A;return c(),f("div",null,[l(a,{class:"fx-s mb-s"},{default:m(()=>[s("div",gs,[s("div",ks,[l(t,{onResuit:o.choosAii,form:_(e),pk:"chooseAii"},null,8,["onResuit","form"])]),xs]),bs]),_:1}),l(ws,{aii:_(e)},null,8,["aii"])])}}}),qs={class:"fx-s"},As={class:"txt-money err d-ib fw-900"},Rs={class:"fx-s mt"},ft=$({__name:"RefundRightBottom",props:{form:{},me:{}},emits:["submit"],setup(v,{expose:r}){const e=v,{one_of_refund:o,refund_products:i}=U(S()),n=G(0);return B(()=>i.value,t=>{let a=0;t.map(u=>{u.refunded_quantity>0&&u.__can_refunded_quantity>0&&(a=g.floatAdd(u.refunded_price,a))}),n.value=g.numberFixed(a)},{deep:!0}),r({buiid:(t=[])=>{e.form.refunded_remarks=o.value.refunded_remarks;const a=i.value;return a.length<=0?(C("請選擇要退款的商品！！！",e.me),null):(a.map(u=>{u.refunded_quantity>0&&u.__can_refunded_quantity>0&&t.push({refunded_price:u.refunded_price,refunded_quantity:u.refunded_quantity,product:h.order_product(u).id,variation:h.order_product_variation(u).id})}),t.length<=0?(C("請注意產品的退款數量！！！",e.me),null):(e.form.refunded_info=t,e.form.storehouse?e.form:(C("請選擇一個退貨倉庫！！！",e.me),null)))}}),(t,a)=>{const u=X,p=A,R=ss;return c(),f("div",null,[l(p,null,{default:m(()=>[s("div",qs,[s("h6",null,[w("退款總金額:    "),s("p",As,"HKD "+d(_(q)(_(n))),1)]),s("div",null,[l(u,{form:t.form,pk:"storehouse",tit_def:"-- 請選擇退貨倉庫 --"},null,8,["form"])])])]),_:1}),s("div",Rs,[l(R,{class:"w-100 ani-scaie-aii",aii:t.me,onClick:a[0]||(a[0]=k=>t.$emit("submit")),tit:"退款"},null,8,["aii"])])])}}}),Cs=s("div",{class:"fw-700"},"優惠信息",-1),Ds={class:"pt"},Os={class:"w-35"},Bs={key:0,class:"d-ib"},Ns={key:1,class:"d-ib"},Ss={class:"fx-1"},Ts=s("div",{class:"fw-700 pt"},"全單優惠計算結果",-1),Vs={class:"pt"},Es={class:"d-ib"},Ms=$({__name:"RefundDiscountMsgCard",props:{order:{}},setup(v){const r=v,e=L(()=>{const o=r.order;let n=o.total_price;return o.discount.map(a=>{n=g.floatAdd(a.discount_deduction,n)}),n});return(o,i)=>{const n=A;return _(h).discounts(o.order).length>0?(c(),y(n,{key:0,class:"px mt-s ani-softer bg-card br-s ani-scaie-hv"},{default:m(()=>[Cs,s("div",Ds,[(c(!0),f(b,null,x(_(h).discounts(o.order),(t,a)=>(c(),f("div",{class:"fx-s ta-r ani-softer",key:a},[s("div",null,d(t.type)+":   ",1),s("div",Os,[t.discount_shown&&t.discount_shown!=1?(c(),f("div",Bs,d(t.discount_shown)+"  折扣",1)):(c(),f("div",Ns))]),s("div",Ss,"- "+d(t.discount_deduction)+"  HKD",1)]))),128))]),Ts,s("div",Vs,[w(d(_(e))+"  ",1),s("div",Es,[(c(!0),f(b,null,x(_(h).discounts(o.order),(t,a)=>(c(),f("div",{class:"d-ib ani-softer",key:a}," - "+d(t.discount_deduction)+"  ",1))),128))]),w(" =  "+d(o.order.total_price)+"  ",1)])]),_:1})):(c(),y(n,{key:1,class:"px mt-s ani-softer bg-card br-s ani-scaie-hv"},{default:m(()=>[w(" 該訂單未有任何全單優惠 ")]),_:1}))}}}),Fs=s("div",{class:"fw-700"},"訂單編號",-1),Hs=s("div",{class:"fw-700"},"掛單時間",-1),zs=s("div",{class:"fw-700"},"訂單狀態",-1),Is=s("div",{class:"fw-700"},"訂單金額",-1),Ks=s("div",{class:"fw-700"},"收銀員",-1),Us=s("div",{class:"fw-700"},"客戶",-1),Gs={class:"fx-s fx-t px mt-s py"},Ls=s("div",{class:"fw-700"},"支付方式",-1),Ps={class:""},js={class:"ta-r"},Js={class:"fw-b mw-4em"},Qs={class:"pt-x2 pb"},Ws=s("div",{class:"py-x3"},null,-1),pt=$({__name:"OrderRefundOrderMsg",props:{order:{}},setup(v){return N(()=>{}),(r,e)=>{const o=ts,i=A;return c(),f("aside",null,[l(i,{class:"fx-s px mt-s"},{default:m(()=>[Fs,s("div",null,[w(d(r.order.order_id)+"   ",1),l(o,{txt:r.order.order_id},null,8,["txt"])])]),_:1}),l(i,{class:"fx-s px mt-s"},{default:m(()=>[Hs,s("div",null,d(_(Z)(r.order.order_date)),1)]),_:1}),l(i,{class:"fx-s px mt-s"},{default:m(()=>[zs,s("div",null,d(_(h).status(r.order)),1)]),_:1}),l(i,{class:"fx-s px mt-s"},{default:m(()=>[Is,s("div",null,d(_(q)(r.order.total_price))+"  HKD",1)]),_:1}),l(i,{class:"fx-s px mt-s"},{default:m(()=>[Ks,s("div",null,d(_(h).cashier(r.order)),1)]),_:1}),l(i,{class:"fx-s px mt-s"},{default:m(()=>[Us,s("div",null,d(_(h).member(r.order)),1)]),_:1}),s("div",Gs,[Ls,s("div",Ps,[(c(!0),f(b,null,x(_(h).payment(r.order),(n,t)=>(c(),f("div",{class:"fx-r ta-r ani-softer",key:t},[s("div",js,d(n.name)+":   ",1),s("div",Js,d(_(q)(n.price)),1)]))),128))])]),s("div",Qs,[l(Ms,{order:r.order},null,8,["order"])]),Ws])}}});export{pt as _,lt as a,ft as b,ut as s};
