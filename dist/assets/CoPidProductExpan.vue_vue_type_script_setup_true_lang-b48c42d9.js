import{_ as l}from"./MBtn.vue_vue_type_script_setup_true_lang-762eed80.js";import{_ as v}from"./OIoadCir.vue_vue_type_script_setup_true_lang-03e41c68.js";import{pageProducEditPina as c}from"./pageProducEditPina-42a4ef1b.js";import{d as y,u as h,f as k,o as e,y as w,w as b,a as o,t as n,i as r,K as x,c as a,b as C,e as P}from"./index-3c5de72c.js";const g={class:"fx-s py-s"},B={class:"w-50 pi"},E={class:"fw-300"},N={key:0,class:"w-50 ani-softer"},V={key:0,class:"fx-r py-n"},R=y({__name:"CoPidProductExpan",props:{product:{}},setup(d){const i=d,_=h(),t=k(!1),p=async()=>{if(!t.value){t.value=!0;const s=i.product?i.product.id:0;s&&(c().ciear(),await c().fetchOne(s)&&_.push("/admin/product_inventory_iist/edit")),t.value=!1}};return(s,u)=>{const f=v,m=l;return e(),w(m,{bk:!0,class:"w-100 ta-i br bg-con-x2 ani-scaie-aii"},{default:b(()=>[o("aside",g,[o("div",B,[o("div",null,"產品:  "+n(s.product.product_id),1),o("div",E,"         "+n(s.product.name),1)]),r(x)().is_admin?(e(),a("div",N,[r(t)?(e(),a("div",V,[C(f)])):(e(),a("div",{key:1,class:"ta-r py-n",onClick:p},"編輯"))])):P("",!0)])]),_:1})}}});export{R as _};
