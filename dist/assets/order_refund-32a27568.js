import{_ as D}from"./scroiiy-41a2c373.js";import{d as w,o as d,c as f,a as s,b as e,w as i,t as r,e as b,r as v,n as T,f as N,g as E,F as I,u as a,h as y,i as M,j as A,v as F,k as H,l as P,s as j,m as k}from"./index-5e9b51bc.js";import{_ as q}from"./OBtn.vue_vue_type_script_setup_true_lang-cfec21a7.js";import{_ as z}from"./OBtnBack.vue_vue_type_script_setup_true_lang-ce370f2a.js";import{_ as g}from"./Itemdash.vue_vue_type_script_setup_true_lang-aa859012.js";import{i as K,m as L,f as O}from"./credit-2841b23d.js";import{v as U,m as Y}from"./view-60076a03.js";import{_ as R}from"./checkbox.vue_vue_type_script_setup_true_lang-66dc1ffd.js";import{_ as G}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-db92d51b.js";import{_ as J}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-8f86e04f.js";import{v as h}from"./vai_order-6b9d4156.js";import{p as Q}from"./pageOrderPina-a359594d.js";import{b as C}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-0547254f.js";import"./judge-13dfac2e.js";import"./dayjs.min-bdea528d.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-9432e9d2.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-4377eb3d.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-3fb6bebc.js";import"./OTr.vue_vue_type_script_setup_true_lang-ba007404.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-e33d59cd.js";import"./net-tooi-52780821.js";import"./conn-c0df13d5.js";import"./errors_user-be6d0865.js";const W={class:"iayout-pan-two bg-con h-iayout ps-r"},X={class:"fx-s fx-t ani-softer"},Z={class:"pi-row pr-s"},ss=s("div",{class:"py-row"},null,-1),os={key:0,class:"pb"},ts=s("div",{class:"py-x3"},null,-1),es=s("div",{class:"w-1"},null,-1),is=s("div",{class:"py-row"},null,-1),rs={key:0,class:"pb"},ns=s("div",{class:"py-x3"},null,-1),as={class:"iayout-pan-two-bottom fx-s fx-b py-row bg-con"},cs={class:"w-32 w-37-p pi-row pr-s"},_s=s("div",{class:"w-1"},null,-1),ds={class:"w-67 w-62-p"},ls=w({__name:"IayoutPanTwo",props:{ciass:{},tit:{}},setup(u){return(o,c)=>{const t=D;return d(),f("div",W,[s("div",X,[e(t,{class:"w-32 w-37-p ps-r iayout-pan-scroii h-iayout-max"},{default:i(()=>[s("div",Z,[ss,o.tit?(d(),f("h3",os,r(o.tit),1)):b("",!0),v(o.$slots,"ieft"),ts])]),_:3}),es,e(t,{class:"w-67 w-62-p h-iayout-max"},{default:i(()=>[s("section",null,[is,o.tit?(d(),f("h3",rs," ")):b("",!0),v(o.$slots,"right"),ns])]),_:3})]),s("div",as,[s("div",cs,[v(o.$slots,"bottom_ieft")]),_s,s("aside",ds,[v(o.$slots,"bottom_right")])]),v(o.$slots,"extra")])}}}),ps={class:"w-100 ta-i"},ms={class:"td fs-s"},fs={class:"w-40 fx-i fs pi-x2"},us={class:"mw-2em pr"},hs={class:"mw-3em pr"},vs={class:"fx-1"},ws={class:"w-16"},$s={class:"w-10"},ys={class:"w-12"},gs={class:"w-10"},xs={class:"w-13 fw-900 ta-r pr"},bs=w({__name:"OrderRefundIistTabie",props:{aii:{}},setup(u){const o=u;return T(()=>K(o.aii,[{ciass:"w-40 h6",tit:"序號/商品名稱"},{ciass:"w-16 h6",tit:"樣式"},{ciass:"w-10 h6",tit:"折扣"},{ciass:"w-12 h6",tit:"單價"},{ciass:"w-10 h6",tit:"數量"},{ciass:"w-13 h6",tit:"應退金額"}])),(c,t)=>{const _=R,l=J,m=G;return d(),N(m,{aii:c.aii,mini:!0,pure:!0},{default:i(()=>[(d(!0),f(I,null,E(c.aii.many,(n,p)=>(d(),f("div",{key:p,class:"py-s"},[e(l,{class:"ani-scaie-aii py-0"},{default:i(()=>[s("div",ps,[s("div",ms,[s("div",fs,[s("div",us,[e(_,{form:c.aii,pk:"choose"},null,8,["form"])]),s("div",hs,r(p+1),1),s("div",vs,r(a(h).order_product(n).name),1)]),s("div",ws,r(a(h).order_product_variation(n).name),1),s("div",$s,"- "+r(n.discount_deduction),1),s("div",ys,r(n.selling_price),1),s("div",gs,r(n.quantity),1),s("div",xs,r(n.total_price),1)])])]),_:2},1024)]))),128))]),_:1},8,["aii"])}}}),ks={class:"w-38 fx-i pb"},Os={class:"pi-x2 pr-x1 h6"},Cs=s("h6",null,"全選",-1),Ts=s("div",{class:"fx-1 pb"}," 退款產品列表 ",-1),Ns=w({__name:"OrderRefundIist",props:{order:{}},setup(u,{expose:o}){const c=u,t=y({chooseAii:!1,chooses:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1},choose:!1,many:[],ioading:!0,msg:"",trs:[],condition:{}}),_={effect:()=>{const l=c.order?c.order:{},m=l.ordered_product?l.ordered_product:[];m.length>0&&(t.many.length=0,m.map(n=>{t.many.push(n)}),t.ioading=!1)},resuit:()=>(console.log("CHOOSE =",t.chooses),t.chooses)};return M(_.effect),o(_),(l,m)=>{const n=R,p=g;return d(),f("div",null,[e(p,{class:"fx-s mb-s"},{default:i(()=>[s("div",ks,[s("div",Os,[e(n,{form:a(t),pk:"choose"},null,8,["form"])]),Cs]),Ts]),_:1}),e(bs,{aii:a(t)},null,8,["aii"])])}}}),Rs=s("div",{class:"fw-700"},"訂單編號",-1),Vs=s("div",{class:"fw-700"},"掛單時間",-1),Bs=s("div",{class:"fw-700"},"訂單狀態",-1),Ss=s("div",{class:"fw-700"},"收銀員",-1),Ds=s("div",{class:"fw-700"},"客戶",-1),Es=s("div",{class:"fw-700"},"支付方式",-1),Is=s("div",{class:"fw-700 pr"},"退款備註",-1),Ms={class:"fx-1"},As=w({__name:"OrderRefundOrderMsg",props:{order:{}},setup(u){return(o,c)=>{const t=g;return d(),f("aside",null,[e(t,{class:"fx-s px mt-s"},{default:i(()=>[Rs,s("div",null,r(o.order.order_id),1)]),_:1}),e(t,{class:"fx-s px mt-s"},{default:i(()=>[Vs,s("div",null,r(a(U)(o.order.order_date)),1)]),_:1}),e(t,{class:"fx-s px mt-s"},{default:i(()=>[Bs,s("div",null,r(a(h).status(o.order)),1)]),_:1}),e(t,{class:"fx-s px mt-s"},{default:i(()=>[Ss,s("div",null,r(a(h).cashier(o.order)),1)]),_:1}),e(t,{class:"fx-s px mt-s"},{default:i(()=>[Ds,s("div",null,r(a(h).member(o.order)),1)]),_:1}),e(t,{class:"fx-s px mt-s"},{default:i(()=>[Es,s("div",null,r(a(h).payment(o.order)),1)]),_:1}),e(t,{class:"fx-s px mt-s"},{default:i(()=>[Is,s("div",Ms,[A(s("input",{placeholder:"請輸入","onUpdate:modelValue":c[0]||(c[0]=_=>o.order.refunded_remarks=_),class:"ta-r w-100"},null,512),[[F,o.order.refunded_remarks]])])]),_:1})])}}}),Fs={class:"txt-money err d-ib"},Hs={class:"fx-s mt"},Ps=w({__name:"order_refund",setup(u){const o=H(),c=P(),{one_of_refund:t,refund_price:_}=j(Q()),l=y({msg:"",many:[{}],pager:{},ioading:!1}),m=y({refunded_remarks:"",storehouse:null,refunded_info:[]}),n={vfy:()=>{m.refunded_remarks=t.value.refunded_remarks;const p=o.value.resuit();console.log("MANY =",p),_.value&&L("",l)},refund:()=>O(()=>{n.vfy()}),refund_aii:()=>O(()=>{n.vfy()})};return T(()=>{t.value.id||c.back()}),(p,$)=>{const x=g,V=z,B=q,S=ls;return d(),N(S,{tit:"退貨 / 退款"},{ieft:i(()=>[e(As,{order:a(t)},null,8,["order"])]),right:i(()=>[e(Ns,{ref_key:"ori",ref:o,order:a(t)},null,8,["order"])]),bottom_ieft:i(()=>[e(x),e(V,{class:"w-100 mt refund"})]),bottom_right:i(()=>[e(x,null,{default:i(()=>[s("h6",null,[k("退款金額:   "),s("p",Fs,"HKD "+r(a(Y)(a(_))),1)])]),_:1}),s("div",Hs,[e(B,{aii:a(l),onClick:$[0]||($[0]=js=>n.refund()),class:"btn-pri fx-1 py refund"},{default:i(()=>[k("退款")]),_:1},8,["aii"])])]),_:1})}}});typeof C=="function"&&C(Ps);export{Ps as default};
