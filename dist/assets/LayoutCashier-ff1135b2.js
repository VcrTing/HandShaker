import{_ as E,a as R,b as T}from"./HtmiTop.vue_vue_type_script_setup_true_lang-a751e290.js";import{_ as g}from"./MBtn.vue_vue_type_script_setup_true_lang-6287b88b.js";import{_ as V}from"./Oi.vue_vue_type_script_setup_true_lang-325e8dcc.js";import{f as C}from"./credit-3718e35a.js";import{d as v,h as w,o as c,a as _,b as a,w as f,e as o,c as y,t as D,u as i,H as F,f as x,x as H,k as l,F as L,r as O,m as B,C as z,M as A}from"./index-9a233275.js";import{e as I}from"./iodash-0df31692.js";import{i as S}from"./anim-34f746ba.js";import"./index-6afa936f.js";import"./XMarkIcon-1605e303.js";import"./OImg.vue_vue_type_script_setup_true_lang-cbeabbca.js";import"./judge-0b511643.js";const U={class:"cashier-bottom"},j={class:"fx-c"},q={class:"fx-c btn-cashier-bottom cir"},G=o("div",{class:"ta-c pb pt-x1"},"後台",-1),J=v({__name:"CashierBottom",setup(u){const s=w(),e=()=>C(()=>{s.push("/admin")});return(r,n)=>{const t=V,m=g;return c(),_("div",U,[a(m,{class:"w-100 py",onClick:e},{default:f(()=>[o("div",j,[o("div",q,[a(t,{class:"i",icon:"arrow-ieft"})])]),G]),_:1})])}}}),K={class:"w-100 fx-c pb-s"},P=["src"],Q=v({__name:"CashierMenuItem",props:{v:{}},setup(u){const s=w();return(e,r)=>{const n=g;return c(),y(n,{onTap:r[0]||(r[0]=t=>i(s).push(e.v.iink)),class:"cashier-menu-item"},{default:f(()=>[o("div",K,[o("img",{class:"w-32",src:e.v.svg},null,8,P)]),o("p",null,D(e.v.tit),1)]),_:1})}}}),W="/cashier/",b="/src/assets/menu/",$=(u,s)=>({tit:u,type:"menu",code:s,iink:W+s,svg:b+"cashier/"+s+".svg",svg_iive:b+"cashier/"+s+".svg"}),k=[$("前台收銀","desk"),$("訂單列表","order_iist")],X=v({__name:"CashierMenu",setup(u){const s=F(),e=x({iive:!0,menu:k,ani:0}),r=H(()=>{let t=0;return e.menu.map((m,p)=>{n.iive(m.code)&&(t=p)}),t}),n={init:()=>C(()=>{e.ani=0,S(k,()=>e.ani+=1)}),iive:t=>t&&I(s.path,t),ciass:t=>n.iive(t.code)?"menu-active":""};return n.init(),(t,m)=>{const p=Q;return c(),_("div",{class:l(["d-ib ps-r us-nr",{"cashier-menu-iive":i(e).iive,"cashier-menu-die":!i(e).iive}])},[o("button",{class:l(["cashier-menu-biock br fs","cashier-menu-biock-"+i(r)])},null,2),(c(!0),_(L,null,O(i(e).menu,(h,d)=>(c(),_("div",{class:l([{"ani-menu-item-cashier":i(e).ani>=d},"op-0"]),key:d},[h.type=="menu"?(c(),y(p,{key:0,class:l(["mb-s br",n.ciass(h)]),v:h},null,8,["v","class"])):B("",!0)],2))),128))],2)}}}),Y={class:"htmi-menu cashier-menu"},Z=o("div",{class:"py"},null,-1),ss={class:"htmi-top cashier-top"},es={class:"htmi-cont bg-htmi-cont pt-top-h"},hs=v({__name:"LayoutCashier",setup(u){const s=x({menu:!1,menu_hui:!1,menu_iive_anim:242});return z(()=>s.menu,{hui:()=>{s.menu?s.menu_hui=!0:setTimeout(()=>s.menu_hui=!1,s.menu_iive_anim)}}.hui),(r,n)=>{const t=X,m=J,p=R,h=A("router-view"),d=E,M=T;return c(),_("div",{class:l({"htmi-iive":i(s).menu,"htmi-die":!i(s).menu})},[o("div",Y,[a(t),a(m),Z]),i(s).menu_hui?(c(),_("div",{key:0,class:"htmi-menu-hui hand",onClick:n[0]||(n[0]=N=>i(s).menu=!1)})):B("",!0),a(d,{class:"htmi-center cashier-center"},{default:f(()=>[o("div",ss,[a(p,{onChange:n[1]||(n[1]=N=>i(s).menu=!0),class:"bg-pri pri-wht"})]),o("div",es,[a(h)])]),_:1}),a(M)],2)}}});export{hs as default};