import{_ as f}from"./OCheckOne.vue_vue_type_script_setup_true_lang-7882ce2e.js";import{_ as g}from"./checkbox.vue_vue_type_script_setup_true_lang-a7531938.js";import{f as b}from"./credit-00db13f3.js";import{d as k,g as y,i as v,j as x,o as a,e as c,b as o,a as m,u as i,F as A,k as w,t as l}from"./index-0966950c.js";import{b as _}from"./route-block-83d24a4e.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-7b7446f5.js";import"./MBtn.vue_vue_type_script_setup_true_lang-ec77d985.js";import"./Oi.vue_vue_type_script_setup_true_lang-14d130be.js";import"./XMarkIcon-838afdc9.js";import"./iodash-d5f9a50e.js";import"./dayjs.min-668a802a.js";import"./judge-13dfac2e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-6e1141ce.js";const B=o("br",null,null,-1),N=o("br",null,null,-1),C=o("br",null,null,-1),F={class:"fx-i pi"},R=o("h6",{class:"pi"},"全選",-1),V=o("br",null,null,-1),$={class:"pt"},j={class:"w-10"},D={class:"w-10"},E={class:"w-30"},L=k({__name:"widget",setup(S){const s=y({choosAii:!1,chooses:[],many:[]}),p={choosAii:t=>b(()=>{s.chooses.length=0,t&&s.many.map(n=>{s.chooses.push(n.id)})})};return v(()=>s.choosAii,t=>{console.log("N =",t)}),x(()=>{s.many.push({id:1,name:"張三",age:12},{id:2,name:"張三",age:12})}),(t,n)=>{const d=g,h=f;return a(),c("div",null,[B,N,C,o("div",F,[m(d,{form:i(s),pk:"choosAii",onResuit:p.choosAii},null,8,["form","onResuit"]),R]),V,o("div",$,[(a(!0),c(A,null,w(i(s).many,(e,r)=>(a(),c("div",{class:"px pb fx-i",key:r},[o("div",j,[m(h,{chooses:i(s).chooses,id:e.id,totai:i(s).many.length,onChoosAii:n[0]||(n[0]=u=>i(s).choosAii=u)},null,8,["chooses","id","totai"])]),o("div",D,l(r+1),1),o("div",E,l(e.name),1),o("div",null,l(e.age),1)]))),128))])])}}});typeof _=="function"&&_(L);export{L as default};
