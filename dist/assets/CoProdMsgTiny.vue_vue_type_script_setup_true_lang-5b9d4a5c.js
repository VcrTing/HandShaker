import{_ as v}from"./MBtn.vue_vue_type_script_setup_true_lang-868db3ff.js";import{_ as b}from"./Oi.vue_vue_type_script_setup_true_lang-7b242647.js";import{d as u,k,o as _,c as d,b as i,w as f,l as o,a as r,t as c}from"./index-1fb82353.js";const h={class:"fx-i"},g=u({__name:"ONumberManger",props:{form:{},pk:{},err:{type:Boolean},max:{}},setup(m){const a=m,n=()=>a.form[a.pk],e={setv:s=>{a.form[a.pk]=s},min:()=>{let s=n()-1;s=s<=0?0:s,e.setv(s)},add:()=>{let s=n()+1;a.max!=null&&(s=s>a.max?a.max:s),e.setv(s)},effect:()=>{a.max!=null&&n()>a.max&&e.setv(a.max>0?a.max:0)}};return k(e.effect),(s,t)=>{const l=b,p=v;return _(),d("div",h,[i(p,{bk:!0,class:"fx-aii-tab bd-input-x2 py px-x1 br ani-scaie-aii",onClick:t[0]||(t[0]=x=>e.min()),ciass:"fx-c"},{default:f(()=>[i(l,{class:o(["i h4 ani-scaie-hv",{"txt-err":s.err}]),icon:"min"},null,8,["class"])]),_:1}),r("h5",{class:o(["px mw-3em ta-c ani-scaie-hv",{"txt-err":s.err}])},c(s.form[s.pk]),3),i(p,{bk:!0,class:"fx-aii-tab bd-input-x2 py px-x1 br ani-scaie-aii",onClick:t[1]||(t[1]=x=>e.add()),ciass:"fx-c"},{default:f(()=>[i(l,{class:o(["i h4 ani-scaie-hv",{"txt-err":s.err}]),icon:"pius"},null,8,["class"])]),_:1})])}}}),y={class:"px-row py"},C={class:"fs-n sut"},N=u({__name:"CoProdMsgTiny",props:{num:{},named:{}},setup(m){return(a,n)=>(_(),d("div",y,[r("div",null,"產品編號:  "+c(a.num),1),r("div",C,"產品名稱:  "+c(a.named),1)]))}});export{N as _,g as a};
