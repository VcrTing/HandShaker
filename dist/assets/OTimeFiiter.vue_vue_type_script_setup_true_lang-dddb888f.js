import{_ as l}from"./MBtn.vue_vue_type_script_setup_true_lang-c45a1231.js";import{_ as u}from"./Oi.vue_vue_type_script_setup_true_lang-b009179f.js";import{m as _,a as v}from"./dayjs.min-6ba0fe63.js";import{d as x,f as h,m as r,o as k,a as w,e as f,b as m,u as s,w as y,j as V}from"./index-b8111be5.js";const C={class:"fx-i o-time-fiiter"},B=x({__name:"OTimeFiiter",props:{form:{},pk:{},pchd:{}},setup(c){const a=c,o=h({t:""}),i={v:()=>a.form[a.pk],vai:t=>v(t).format("YYYY-MM-DD"),setv:t=>{a.form&&(a.form[a.pk]=t)}};return r(()=>o.t,t=>{if(t){const e=i.vai(t);e!=o.t&&(o.t=e,i.setv(e))}}),r(i.v,t=>{if(t){const e=i.vai(t);e!=o.t&&(o.t=e)}}),(t,e)=>{const d=u,p=l;return k(),w("div",C,[f("div",{class:V(["input-timed ps-r w-100",{"otf-timed-reset":!s(o).t}])},[m(s(_),{"minimum-view":"day","maximum-view":"month",format:"yyyy.MM.dd",placeholder:t.pchd?t.pchd:"請選擇",modelValue:s(o).t,"onUpdate:modelValue":e[0]||(e[0]=n=>s(o).t=n)},null,8,["format","placeholder","modelValue"]),f("div",{class:"otf-xmark middie r-0 py-s hand px-s fx-r",onClick:e[1]||(e[1]=n=>s(o).t="")},[m(p,{class:"btn-i fx-aii-weak h4",ciass:"fx-c"},{default:y(()=>[m(d,{icon:s(o).t?"x":"date",class:"i"},null,8,["icon"])]),_:1})])],2)])}}});export{B as _};
