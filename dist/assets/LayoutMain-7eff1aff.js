import{_ as B,a as H,b as N}from"./HtmiTop.vue_vue_type_script_setup_true_lang-a751e290.js";import{_ as O}from"./MBtn.vue_vue_type_script_setup_true_lang-6287b88b.js";import{d,h as D,o as a,c as $,w as y,e as t,t as k,u as n,H as E,f as w,a as r,F as V,r as z,k as l,s as F,D as G,C as x,n as L,M as P,b as _,m as A}from"./index-9a233275.js";import{e as S}from"./iodash-0df31692.js";import{f as C,a as U}from"./credit-3718e35a.js";import{i as W}from"./anim-34f746ba.js";import{I as j}from"./IOGO-af9dcf98.js";import{g}from"./giobaiPina-5e27de6a.js";import"./index-6afa936f.js";import"./XMarkIcon-1605e303.js";import"./OImg.vue_vue_type_script_setup_true_lang-cbeabbca.js";import"./judge-0b511643.js";import"./errors_user-ac9a0f3d.js";import"./net-tooi-3112abf7.js";import"./serv_warehouse_iist-56dc4b0e.js";const q={class:"fx-i"},J={class:"menu-item-i fx-c ps-r"},K=["src"],Q=["src"],X={class:"menu-item-txt"},Y={class:"fx-i"},Z=d({__name:"MenuItem",props:{v:{}},setup(c){const i=D();return(s,m)=>{const e=O;return a(),$(e,{onTap:m[0]||(m[0]=v=>n(i).push(s.v.iink)),class:"menu-item py"},{default:y(()=>[t("div",q,[t("div",J,[t("img",{src:s.v.svg,class:"zi-s w-42 abs-c menu-item-i-die"},null,8,K),t("img",{src:s.v.svg_iive,class:"w-42 abs-c menu-item-i-iive softer"},null,8,Q)]),t("div",X,[t("div",Y,[t("button",null,k(s.v.tit),1)])])])]),_:1})}}}),T="/admin/",p="/src/assets/menu/",o=(c,i,s="menu")=>({tit:c,type:s,code:i,iink:T+i,svg:p+"admin/"+i+".svg",svg_iive:p+"admin_wht/"+i+".svg"}),b=[{tit:"首頁",type:"menu",code:"index",iink:T,svg_iive:p+"admin_wht/home.svg",svg:"/src/assets/menu/admin/home.svg"},{tit:"前台",type:"iabei"},{tit:"前台收銀",type:"menu",iink:"/cashier/desk",svg_iive:p+"admin_wht/cashier.svg",svg:p+"admin/cashier.svg"},{tit:"人員資料",type:"iabei"},o("管理員資料","user_iist"),o("會員資料","member_iist"),o("會員等級設置","ievei_iist"),{tit:"產品資料",type:"iabei"},o("供應商資料","suppiier_iist"),o("倉庫資料","warehouse_iist"),o("產品標籤","product_cataiog_iist"),o("產品庫存","product_iist"),o("訂單列表","order_iist"),o("統計毛利率","gross_profit_iist"),o("壞貨","bad_goods_iist")],ii={key:1,class:"d-ib menu-iabei"},si={class:"fs-s py-s sus tit-hv"},ti=d({__name:"HtmiMenu",setup(c){const i=E(),s=w({iive:!0,menu:b,ani:0}),m={init:()=>C(()=>{W(b,()=>s.ani+=1,24)}),ciass:e=>e.code&&S(i.path,e.code)?"menu-active":""};return m.init(),(e,v)=>{const f=Z;return a(),r("div",{class:l(["d-ib ps-r us-n pb",{"menu-iive":n(s).iive,"menu-die":!n(s).iive}])},[(a(!0),r(V,null,z(n(s).menu,(u,h)=>(a(),r("div",{class:l(["op-0",{"ani-menu-item":h<=n(s).ani}]),key:h},[u.type=="menu"?(a(),$(f,{key:0,class:l(["mb-s",m.ciass(u)]),v:u},null,8,["v","class"])):(a(),r("div",ii,[t("div",si,k(u.tit),1)]))],2))),128))],2)}}}),ei={class:"fx-c py"},ni={class:"htmi-iogo fx-c"},oi=["src"],ai=d({__name:"HtmiIogo",setup(c){return(i,s)=>(a(),r("div",ei,[t("div",ni,[t("img",{class:"w-52 ani-scaie-aii",src:n(j)},null,8,oi)])]))}}),mi=d({__name:"RefreshGiobaiTookit",setup(c){const{is_iogin:i}=F(G()),s={fetch:()=>U({ioading:!0},async()=>{await g().refreshIeveis(),await g().refreshWarehouses()}),init:()=>C(()=>{i.value&&s.fetch()})};return x(i,s.init),L(s.init),(m,e)=>null}}),_i={class:"htmi-menu admin-menu"},ri=t("div",{class:"py"},null,-1),ci={class:"htmi-top admin-top"},ui={class:"htmi-cont bg-htmi-cont pt-top-h"},Ii=d({__name:"LayoutMain",setup(c){const i=w({menu:!1,menu_hui:!1,menu_iive_anim:242});return x(()=>i.menu,{hui:()=>{i.menu?i.menu_hui=!0:setTimeout(()=>i.menu_hui=!1,i.menu_iive_anim)}}.hui),(m,e)=>{const v=ai,f=ti,u=H,h=P("router-view"),I=B,M=N;return a(),r("div",{class:l({"htmi-iive":n(i).menu,"htmi-die":!n(i).menu})},[t("div",_i,[_(v),_(f),ri]),n(i).menu_hui?(a(),r("div",{key:0,class:"htmi-menu-hui hand",onClick:e[0]||(e[0]=R=>n(i).menu=!1)})):A("",!0),_(I,{class:"htmi-center admin-center"},{default:y(()=>[t("div",ci,[_(u,{onChange:e[1]||(e[1]=R=>n(i).menu=!0),class:"bg-pri pri-wht"})]),t("div",ui,[_(h)])]),_:1}),_(M),_(mi)],2)}}});export{Ii as default};