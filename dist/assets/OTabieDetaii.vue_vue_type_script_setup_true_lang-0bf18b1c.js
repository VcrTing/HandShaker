import{_ as p}from"./OIoadCir.vue_vue_type_script_setup_true_lang-247a587c.js";import{f as m}from"./credit-1f946479.js";import{d,f as u,i as _,o as i,c as s,t as l,j as o,b as y}from"./index-196d4fb0.js";const k={key:1,class:"d-ib mw-2em fx-c fs-n ani-softer"},T=d({__name:"OTabieDetaii",props:{func:{type:Function},id:{},tit:{}},emits:["tap"],setup(n,{emit:c}){const t=n,e=u(!1),r=()=>m(async()=>{e.value=!0,t.func&&await t.func(t.id),c("tap"),setTimeout(()=>e.value=!1,200)});return(a,b)=>{const f=p;return _(e)?(i(),s("div",k,[o("  "),y(f,{styie:"pri"}),o("  ")])):(i(),s("div",{key:0,class:"d-ib hand ani-scaie-aii-x2 fs-n ani-softer txt-pri",onClick:r},l(a.tit?a.tit:"详情"),1))}}});export{T as _};
