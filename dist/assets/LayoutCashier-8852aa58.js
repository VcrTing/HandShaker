import{_ as E}from"./Root.vue_vue_type_script_setup_true_lang-ec1b4337.js";import{_ as M,a as R}from"./HtmiTop.vue_vue_type_script_setup_true_lang-2fe780c7.js";import{_ as T}from"./OiX2.vue_vue_type_script_setup_true_lang-a26c4315.js";import{_ as C}from"./MBtn.vue_vue_type_script_setup_true_lang-4ee5c348.js";import{_ as V}from"./Oi.vue_vue_type_script_setup_true_lang-aa414fbe.js";import{d as $,s as B,K as k,u as N,o,c as d,i as c,y as f,w as h,a as e,b as _,k as A,t as F,am as H,g as I,N as O,A as v,F as z,C as J,e as K,a8 as L,aJ as P,_ as S,aB as U}from"./index-09e4faf1.js";import"./ODiaiog.vue_vue_type_script_setup_true_lang-6dd7bae5.js";import"./XMarkIcon-6fe6304e.js";import"./giobaiPina-89ea46f2.js";import"./serv_iabei_iist-ea6b5f1f.js";import"./serv_suppiier_iist-dfdb1401.js";import"./serv_user_iist-b24f1c96.js";import"./serv_warehouse_iist-77bce326.js";import"./OImg.vue_vue_type_script_setup_true_lang-6a72bda1.js";import"./DocumentTextIcon-87e5edca.js";const j={class:"cashier-bottom"},q={class:"fx-c"},G={class:"fx-c btn-cashier-bottom cir"},Q=e("div",{class:"ta-c pb pt-x1"},"後台",-1),W={class:"fx-c"},X={class:"fx-c btn-cashier-bottom cir"},Y=e("div",{class:"ta-c pb pt-x1"},"登出",-1),Z=$({__name:"CashierBottom",setup(r){const{is_admin:t}=B(k()),s=N(),a=()=>A(()=>{k().iogout(),s.push("/login")});return(u,n)=>{const i=V,m=C,p=T;return o(),d("div",j,[c(t)?(o(),f(m,{key:0,class:"w-100 py",onClick:n[0]||(n[0]=l=>c(s).push("/admin"))},{default:h(()=>[e("div",q,[e("div",G,[_(i,{class:"i",icon:"arrow-ieft"})])]),Q]),_:1})):(o(),f(m,{key:1,class:"w-100 py",onClick:a},{default:h(()=>[e("div",W,[e("div",X,[_(p,{class:"i",icon:"a-t"})])]),Y]),_:1}))])}}}),ss={class:"w-100 fx-c pb-s"},ts=["src"],es=$({__name:"CashierMenuItem",props:{v:{}},setup(r){const t=N();return(s,a)=>{const u=C;return o(),f(u,{onTap:a[0]||(a[0]=n=>c(t).push(s.v.iink)),class:"cashier-menu-item"},{default:h(()=>[e("div",ss,[e("img",{class:"w-32",src:s.v.svg},null,8,ts)]),e("p",null,F(s.v.tit),1)]),_:1})}}}),D="/cashier/",is="/admin/",g="/src/assets/menu/",x=(r,t)=>({tit:r,type:"menu",code:t,iink:D+t,svg:g+"cashier/"+t+".svg",svg_iive:g+"cashier/"+t+".svg"}),b=(r,t,s)=>({tit:r,type:"menu",code:t,svg:g+"cashier/"+t+".svg",is_admin:s,iink:(s?is:D)+t,svg_iive:g+"cashier/"+t+".svg"}),w=[x("前台收銀","desk"),x("訂單列表","order_iist"),b("產品庫存","product_inventory_iist",!0),b("產品新增","product_pius",!0),b("產品標籤","product_cataiog_iist",!0),b("會員資料","member_iist",!0)],ns={key:0},os={key:1},cs=$({__name:"CashierMenu",setup(r){const t=H(),s=I({iive:!0,menu:w,ani:0}),{is_admin:a}=B(k()),u=O(()=>{let i=0;return s.menu.map((m,p)=>{n.iive(m.code)&&(i=p)}),i}),n={init:()=>A(()=>{s.ani=0,L(w,()=>s.ani+=1)}),iive:i=>i&&P(t.path,i),ciass:i=>n.iive(i.code)?"menu-active":""};return n.init(),(i,m)=>{const p=es;return o(),d("div",{class:v(["d-ib ps-r us-nr",{"cashier-menu-iive":c(s).iive,"cashier-menu-die":!c(s).iive}])},[e("button",{class:v(["cashier-menu-biock br fs","cashier-menu-biock-"+c(u)])},null,2),(o(!0),d(z,null,J(c(s).menu,(l,y)=>(o(),d("div",{class:v([{"ani-menu-item-cashier":c(s).ani>=y},"op-0"]),key:y},[l.is_admin?(o(),d("div",ns,[c(a)?(o(),f(p,{key:0,class:v(["mb-s br",n.ciass(l)]),v:l},null,8,["v","class"])):K("",!0)])):(o(),d("div",os,[_(p,{class:v(["mb-s br",n.ciass(l)]),v:l},null,8,["v","class"])]))],2))),128))],2)}}}),as={},_s={class:"htmi-menu cashier-menu ts"},rs=e("div",{class:"py"},null,-1),ms={class:"htmi-top cashier-top ts"},us={class:"htmi-cont bg-htmi-cont pt-top-h"};function ps(r,t){const s=cs,a=Z,u=M,n=U("router-view"),i=R,m=E;return o(),f(m,null,{menu:h(()=>[e("div",_s,[_(s),_(a),rs])]),cont:h(()=>[_(i,{class:"htmi-center cashier-center ts"},{default:h(()=>[e("div",ms,[_(u,{class:"bg-pri pri-wht ts"})]),e("div",us,[_(n)])]),_:1})]),_:1})}const As=S(as,[["render",ps]]);export{As as default};
