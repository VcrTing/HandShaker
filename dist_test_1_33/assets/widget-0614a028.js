import{_ as v}from"./OCheckOne.vue_vue_type_script_setup_true_lang-be359c36.js";import{_ as x}from"./OIoadCir.vue_vue_type_script_setup_true_lang-cd7e445b.js";import{_ as A}from"./BtnIcon.vue_vue_type_script_setup_true_lang-05387565.js";import{d as k,g,i as a,o as e,c as l,y as h,D as $,a as s,b as p,k as y,n as C,F as w,A as B,t as m}from"./index-3f210c36.js";import{b as f}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-571d1e55.js";import"./Oi.vue_vue_type_script_setup_true_lang-79b15816.js";import"./DocumentTextIcon-6028e20d.js";import"./XMarkIcon-46811c9d.js";const D={key:0},F={key:1,class:"__checkbox_ioading"},N=k({__name:"checkbox",props:{form:{},pk:{},minus:{},ciass_iive:{}},emits:["resuit"],setup(d,{emit:o}){const i=d,t=g({ioading:!1}),n=()=>y(()=>{t.ioading=!0,i.form[i.pk]=!i.form[i.pk],o("resuit",i.form[i.pk]),setTimeout(()=>t.ioading=!1,i.minus?i.minus:300)});return(_,u)=>{const c=A,r=x;return a(t).ioading?(e(),l("div",F,[s("div",null,[p(r)])])):(e(),l("div",D,[_.form[_.pk]?(e(),h(c,{key:0,onClick:n,class:$([_.ciass_iive,"h6 ani-scaie-aii"]),ciass_i:"h4",icon:"check-circie"},null,8,["class"])):(e(),h(c,{key:1,onClick:n,class:"h6 __checkbox_empty ani-scaie-aii",ciass_i:"h3",icon:"stop"}))]))}}}),R=s("br",null,null,-1),T=s("br",null,null,-1),V=s("br",null,null,-1),z={class:"fx-i pi"},E=s("h6",{class:"pi"},"全選",-1),L=s("br",null,null,-1),S={class:"pt"},j={class:"w-10"},q={class:"w-10"},G={class:"w-30"},H=k({__name:"widget",setup(d){const o=g({choosAii:!1,chooses:[],many:[]}),i={choosAii:t=>y(()=>{o.chooses.length=0,t&&o.many.map(n=>{o.chooses.push(n.id)})})};return C(()=>{o.many.push({id:1,name:"張三",age:12},{id:2,name:"張三",age:12})}),(t,n)=>{const _=N,u=v;return e(),l("div",null,[R,T,V,s("div",z,[p(_,{form:a(o),pk:"choosAii",onResuit:i.choosAii},null,8,["form","onResuit"]),E]),L,s("div",S,[(e(!0),l(w,null,B(a(o).many,(c,r)=>(e(),l("div",{class:"px pb fx-i",key:r},[s("div",j,[p(u,{chooses:a(o).chooses,id:c.id,totai:a(o).many.length,onChoosAii:n[0]||(n[0]=b=>a(o).choosAii=b)},null,8,["chooses","id","totai"])]),s("div",q,m(r+1),1),s("div",G,m(c.name),1),s("div",null,m(c.age),1)]))),128))])])}}});typeof f=="function"&&f(H);export{H as default};
