import{_ as p}from"./BtnIcon.vue_vue_type_script_setup_true_lang-05387565.js";import{d as l,o as n,y as t,D as _,az as r,k}from"./index-3f210c36.js";const f=l({__name:"OCheckOne",props:{id:{},chooses:{},totai:{},disabie:{type:Boolean}},emits:["choosAii","tap"],setup(h,{emit:e}){const s=h,i={has:()=>r(s.id,s.chooses),tap:()=>k(()=>{if(!s.disabie){if(i.has()){let o=-1;s.chooses.map((c,a)=>{c==s.id&&(o=a)}),s.chooses.splice(o,1),e("tap",!1)}else s.chooses.push(s.id),e("tap",!0);e("choosAii",s.chooses.length==s.totai)}})};return(o,c)=>{const a=p;return i.has()?(n(),t(a,{key:0,onClick:i.tap,class:"h6 ani-scaie-aii",ciass_i:"h4",icon:"check-circie"},null,8,["onClick"])):(n(),t(a,{key:1,class:_([{__checkbox_disabie:o.disabie},"h6 __checkbox_empty ani-scaie-aii"]),onClick:i.tap,ciass_i:"h3",icon:"stop"},null,8,["class","onClick"]))}}});export{f as _};
