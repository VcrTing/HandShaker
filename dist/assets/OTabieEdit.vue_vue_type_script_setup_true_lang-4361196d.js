import{_ as m}from"./OIoadCir.vue_vue_type_script_setup_true_lang-3fb6bebc.js";import{d as p,k as _,u as d,o as t,c as i,m as n,b as u}from"./index-5e9b51bc.js";const l={key:1,class:"d-ib mw-2em fx-c fs-n ani-softer"},b=p({__name:"OTabieEdit",props:{func:{type:Function},id:{}},emits:["tap"],setup(o,{emit:c}){const e=o,a=_(!1),r=()=>new Promise(async s=>{a.value=!0,e.func&&await e.func(e.id),c("tap"),setTimeout(()=>a.value=!1,200),s(0)});return(s,k)=>{const f=m;return d(a)?(t(),i("div",l,[n("  "),u(f,{styie:"pri"}),n("  ")])):(t(),i("div",{key:0,class:"d-ib hand ani-scaie-aii-x2 fs-n ani-softer",onClick:r}," 編輯 "))}}});export{b as _};