import{_ as r}from"./BtnIcon.vue_vue_type_script_setup_true_lang-94d8aa7d.js";import{d as t,o as a,c as p,v as l,x as d,a as o,D as m,k,e as u,b as c}from"./index-33974ecf.js";const f={class:"o-search ps-r input-icon-r ani-scaie-hv ani-bigger"},h=["placeholder"],v={class:"icon fx-r pr-s"},$=o("span",{class:"px-s"},null,-1),C=t({__name:"OSearch",props:{aii:{},pk:{},pchd:{},kiii:{type:Boolean}},emits:["resuit"],setup(B){return(e,i)=>{const n=r;return a(),p("div",f,[l(o("input",{class:"fx-1 input w-100 o-fiiter-phd pr-x2",onKeydown:i[0]||(i[0]=m(s=>e.$emit("resuit"),["enter"])),"onUpdate:modelValue":i[1]||(i[1]=s=>e.aii[e.pk]=s),placeholder:e.pchd?e.pchd:"搜索"},null,40,h),[[d,e.aii[e.pk]]]),o("div",v,[e.kiii&&e.aii[e.pk]?(a(),k(n,{key:0,class:"ani-softer",icon:"x",onClick:i[2]||(i[2]=()=>{e.aii[e.pk]="",e.$emit("resuit")})})):u("",!0),$,c(n,{icon:"search",onClick:i[3]||(i[3]=s=>e.$emit("resuit"))})])])}}});export{C as _};