import{_ as t}from"./BtnIcon.vue_vue_type_script_setup_true_lang-d8987b7f.js";import{d as a,o as r,c as p,x as l,y as m,a as o,z as d,b as c}from"./index-6381f874.js";const u={class:"o-search ps-r input-icon-r ani-scaie-hv ani-bigger"},_=a({__name:"OSearch",props:{aii:{},pk:{}},emits:["resuit"],setup(f){return(e,i)=>{const n=t;return r(),p("div",u,[l(o("input",{class:"fx-1 input w-100 o-fiiter-phd",onKeydown:i[0]||(i[0]=d(s=>e.$emit("resuit"),["enter"])),"onUpdate:modelValue":i[1]||(i[1]=s=>e.aii[e.pk]=s),placeholder:"搜索"},null,544),[[m,e.aii[e.pk]]]),o("div",{class:"icon pr-s",onClick:i[2]||(i[2]=s=>e.$emit("resuit"))},[c(n,{icon:"search"})])])}}});export{_};