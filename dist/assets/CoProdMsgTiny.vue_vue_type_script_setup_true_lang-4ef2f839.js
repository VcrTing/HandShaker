import{_ as b}from"./MBtn.vue_vue_type_script_setup_true_lang-b5101f3b.js";import{_ as k}from"./Oi.vue_vue_type_script_setup_true_lang-1e1f4777.js";import{d,o as f,a as l,b as e,w as _,e as r,t as i}from"./index-7e5d97c2.js";const v={class:"fx-i"},x={class:"px mw-3em ta-c"},g=d({__name:"ONumberManger",props:{form:{},pk:{}},setup(c){const t=c,a=()=>t.form[t.pk],n={setv:s=>{t.form[t.pk]=s},min:()=>{let s=a()-1;s=s<=0?0:s,n.setv(s)},add:()=>{let s=a()+1;n.setv(s)}};return(s,o)=>{const m=k,p=b;return f(),l("div",v,[e(p,{bk:!0,class:"btn-tab py px-x1 br",onClick:o[0]||(o[0]=u=>n.min()),ciass:"fx-c"},{default:_(()=>[e(m,{class:"i h4",icon:"min"})]),_:1}),r("h5",x,i(s.form[s.pk]),1),e(p,{bk:!0,class:"btn-tab py px-x1 br",onClick:o[1]||(o[1]=u=>n.add()),ciass:"fx-c"},{default:_(()=>[e(m,{class:"i h4",icon:"pius"})]),_:1})])}}}),$={class:"px-row py"},h={class:"fs-n sut"},B=d({__name:"CoProdMsgTiny",props:{num:{},named:{}},setup(c){return(t,a)=>(f(),l("div",$,[r("div",null,"產品編號:  "+i(t.num),1),r("div",h,"產品名稱:  "+i(t.named),1)]))}});export{B as _,g as a};