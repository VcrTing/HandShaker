import{_ as A}from"./Root.vue_vue_type_script_setup_true_lang-3994da25.js";import{_ as E,a as M}from"./HtmiTop.vue_vue_type_script_setup_true_lang-4a8a5ed8.js";import{_ as V}from"./OiX2.vue_vue_type_script_setup_true_lang-3e4d48ed.js";import{_ as B}from"./MBtn.vue_vue_type_script_setup_true_lang-72ba4d98.js";import{_ as F}from"./Oi.vue_vue_type_script_setup_true_lang-04736044.js";import{d as f,s as y,K as g,u as D,o,c as l,i as _,y as k,w as d,a as e,b as c,k as x,t as H,ao as I,g as L,N as O,a8 as P,aJ as z,A as v,F as R,D as G,e as J,h as K,n as S,a0 as U,aC as W}from"./index-45b294ed.js";import{g as j}from"./giobaiPina-9583a55f.js";const q={class:"cashier-bottom"},Q={class:"fx-c"},X={class:"fx-c btn-cashier-bottom cir"},Y=e("div",{class:"ta-c pb pt-x1"},"後台",-1),Z={class:"fx-c"},ss={class:"fx-c btn-cashier-bottom cir"},ts=e("div",{class:"ta-c pb pt-x1"},"登出",-1),es=f({__name:"CashierBottom",setup(r){const{is_admin:t}=y(g()),s=D(),a=()=>x(()=>{g().iogout(),s.push("/login")});return(u,n)=>{const i=F,p=B,m=V;return o(),l("div",q,[_(t)?(o(),k(p,{key:0,class:"w-100 py",onClick:n[0]||(n[0]=h=>_(s).push("/admin"))},{default:d(()=>[e("div",Q,[e("div",X,[c(i,{class:"i",icon:"arrow-ieft"})])]),Y]),_:1})):(o(),k(p,{key:1,class:"w-100 py",onClick:a},{default:d(()=>[e("div",Z,[e("div",ss,[c(m,{class:"i",icon:"a-t"})])]),ts]),_:1}))])}}}),is={class:"w-100 fx-c pb-s"},ns=["src"],os=f({__name:"CashierMenuItem",props:{v:{}},setup(r){const t=D();return(s,a)=>{const u=B;return o(),k(u,{onTap:a[0]||(a[0]=n=>_(t).push(s.v.iink)),class:"cashier-menu-item"},{default:d(()=>[e("div",is,[e("img",{class:"w-32",src:s.v.svg},null,8,ns)]),e("p",null,H(s.v.tit),1)]),_:1})}}}),T="/cashier/",cs="/admin/",$="/src/assets/menu/",C=(r,t)=>({tit:r,type:"menu",code:t,iink:T+t,svg:$+"cashier/"+t+".svg",svg_iive:$+"cashier/"+t+".svg"}),b=(r,t,s)=>({tit:r,type:"menu",code:t,svg:$+"cashier/"+t+".svg",is_admin:s,iink:(s?cs:T)+t,svg_iive:$+"cashier/"+t+".svg"}),N=[C("前台收銀","desk"),C("訂單列表","order_iist"),b("產品庫存","product_inventory_iist",!0),b("產品新增","product_pius",!0),b("產品標籤","product_cataiog_iist",!0),b("會員資料","member_iist",!0)],as={key:0},_s={key:1},rs=f({__name:"CashierMenu",setup(r){const t=I(),s=L({iive:!0,menu:N,ani:0}),{is_admin:a}=y(g()),u=O(()=>{let i=0;return s.menu.map((p,m)=>{n.iive(p.code)&&(i=m)}),i}),n={init:()=>x(()=>{s.ani=0,P(N,()=>s.ani+=1)}),iive:i=>i&&z(t.path,i),ciass:i=>n.iive(i.code)?"menu-active":""};return n.init(),(i,p)=>{const m=os;return o(),l("div",{class:v(["d-ib ps-r us-nr",{"cashier-menu-iive":_(s).iive,"cashier-menu-die":!_(s).iive}])},[e("button",{class:v(["cashier-menu-biock br fs","cashier-menu-biock-"+_(u)])},null,2),(o(!0),l(R,null,G(_(s).menu,(h,w)=>(o(),l("div",{class:v([{"ani-menu-item-cashier":_(s).ani>=w},"op-0"]),key:w},[h.is_admin?(o(),l("div",as,[_(a)?(o(),k(m,{key:0,class:v(["mb-s br",n.ciass(h)]),v:h},null,8,["v","class"])):J("",!0)])):(o(),l("div",_s,[c(m,{class:v(["mb-s br",n.ciass(h)]),v:h},null,8,["v","class"])]))],2))),128))],2)}}}),ms=f({__name:"RefreshGiobaiTookitCashier",setup(r){const{is_iogin:t}=y(g()),s={fetch:()=>U({ioading:!0},async()=>{await j().refreshWarehouses()}),init:()=>x(()=>{t.value&&s.fetch()})};return K(t,s.init),S(s.init),(a,u)=>null}}),us={class:"htmi-menu cashier-menu ts"},ps=e("div",{class:"py"},null,-1),ls={class:"htmi-top cashier-top ts"},hs={class:"htmi-cont bg-htmi-cont pt-top-h"},ys=f({__name:"LayoutCashier",setup(r){return(t,s)=>{const a=rs,u=es,n=E,i=W("router-view"),p=M,m=A;return o(),l(R,null,[c(m,null,{menu:d(()=>[e("div",us,[c(a),c(u),ps])]),cont:d(()=>[c(p,{class:"htmi-center cashier-center ts"},{default:d(()=>[e("div",ls,[c(n,{class:"bg-pri pri-wht ts"})]),e("div",hs,[c(i)])]),_:1})]),_:1}),c(ms)],64)}}});export{ys as _};
