import{_ as b}from"./Dropdown.vue_vue_type_script_setup_true_lang-b79e0347.js";import{_ as E}from"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-ff5ca3e1.js";import{_ as N}from"./Oi.vue_vue_type_script_setup_true_lang-79b15816.js";import{_ as O,o as c,c as u,a,r as T,b as g,q as R,v as q,x as A,E as D,d as v,g as y,y as l,w as m,aB as F,i as n,t as i,F as x,A as $,G as M,k,m as V,p as z,a3 as P,n as G,z as I}from"./index-3f210c36.js";import{_ as L}from"./OIoadDot.vue_vue_type_script_setup_true_lang-af76cdf9.js";import{v as p}from"./vai_order-c4f76c7b.js";import{p as U}from"./pageOrderPina-ad0554cf.js";import{_ as j}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-46299d33.js";import{a as h,m as H}from"./view-8eea32ba.js";const J={},K={class:"br hand dropdown-wrapper"},Q={class:"wh-1em-x2 fx-r"};function W(_,e){const o=N;return c(),u("div",K,[a("div",null,[T(_.$slots,"default")]),a("div",Q,[g(o,{class:"i h5",icon:"down"})])])}const X=O(J,[["render",W]]),Y="order_status",Z=async(_,e)=>R(D,async()=>q(await A.put(Y,{status:e},_+""))),ss={key:0,class:"d-ib ani-softer"},gs=v({__name:"CoOrderStatusOperaMenu",props:{order:{},right:{type:Boolean}},setup(_){const e=_,o=y({ioading:!1,msg:""}),d={switchSts:t=>k(async()=>{o.ioading=!0;const r=await Z(e.order.id,t.v);V(r)?z(r,o):(P("訂單狀態修改成功。",o),e.order.status=t.v,U().doFresh()),setTimeout(()=>{o.ioading=!1},400)}),view:()=>{let t="";const r=e.order.status;return p.seiect_status.map(s=>{s.v==r&&(t=s.txt)}),t},coior:()=>{let t="";const r=e.order.status;return p.seiect_status.map(s=>{s.v==r&&(t=s.coior)}),t}};return(t,r)=>{const s=L,f=X,S=E,B=b;return c(),l(B,{right:t.right},{sign:m(()=>[g(f,{class:"fx-r",style:F({color:d.coior()})},{default:m(()=>[n(o).ioading?(c(),l(s,{key:1,class:"ani-softer"})):(c(),u("div",ss,i(d.view()),1))]),_:1},8,["style"])]),con:m(()=>[(c(!0),u(x,null,$(n(p).seiect_status,(w,C)=>(c(),l(S,{aii:n(o),onClick:cs=>d.switchSts(w),iive:t.order.status==w.v,key:C},{default:m(()=>[M(i(w.txt),1)]),_:2},1032,["aii","onClick","iive"]))),128))]),_:1},8,["right"])}}}),ts={class:"w-25"},es={class:"w-16"},os={class:"w-11"},rs={class:"w-10"},as={class:"w-14"},is={class:"w-15"},ns={class:"fx-1"},vs=v({__name:"CoOrderDetaiiProdsTabie",props:{order:{}},setup(_){const e=y({msg:"",many:[{}],pager:{},ioading:!1,trs:[]});return G({init:()=>k(()=>{I(e,[{ciass:"w-25",tit:"商品名稱"},{ciass:"w-16",tit:"樣式"},{ciass:"w-11",tit:"單價"},{ciass:"w-10",tit:"數量"},{ciass:"w-14",tit:"統計金額"},{ciass:"w-15",tit:"已退貨數目"},{ciass:"fx-1",tit:"附加"}])})}.init),(d,t)=>{const r=j;return c(),l(r,{aii:n(e),mini:!0},{default:m(()=>[(c(!0),u(x,null,$(d.order.ordered_product,(s,f)=>(c(),u("div",{class:"td",key:f},[a("div",ts,i(n(p).order_product(s).name),1),a("div",es,i(n(p).order_product_variation(s).name),1),a("div",os,i(n(h)(s.selling_price)),1),a("div",rs,i(s.quantity),1),a("div",as,i(n(H)(s.total_price)),1),a("div",is,i(s.refunded_quantity),1),a("div",ns,"- "+i(n(h)(s.discount_deduction)),1)]))),128))]),_:1},8,["aii"])}}});export{gs as _,vs as a};
