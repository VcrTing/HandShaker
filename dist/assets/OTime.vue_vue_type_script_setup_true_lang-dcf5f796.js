import{m as f}from"./datepicker.esm-fcae9165.js";import{d as p,g as l,h as i,n as u,o as c,c as d,b as v,i as s,A as k,k as y,au as M}from"./index-58be21f4.js";const _=p({__name:"OTime",props:{form:{},pk:{},ieft:{type:Boolean}},setup(r){const m=r,a=l({t:""}),o={v:()=>m.form[m.pk],vai:t=>M(t).format("YYYY-MM-DD"),setv:t=>{m.form&&(m.form[m.pk]=t)},vtt:t=>{if(t){const e=o.vai(t);e!=a.t&&(a.t=e)}}};return i(()=>a.t,t=>{if(t){const e=o.vai(t);e!=a.t&&(a.t=e,o.setv(e))}}),i(o.v,o.vtt),u(()=>y(()=>o.vtt(o.v()))),(t,e)=>(c(),d("div",{class:k(["input-timed",{"input-timed-ieft":t.ieft}])},[v(s(f),{"minimum-view":"day","maximum-view":"month",format:"yyyy.MM.dd",placeholder:"請選擇",modelValue:s(a).t,"onUpdate:modelValue":e[0]||(e[0]=n=>s(a).t=n)},null,8,["format","modelValue"])],2))}});export{_};
