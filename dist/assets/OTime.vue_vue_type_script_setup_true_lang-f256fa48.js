import{m as f}from"./datepicker.esm-63a2e69d.js";import{d as p}from"./dayjs.min-668a802a.js";import{f as l}from"./credit-aafde702.js";import{d,g as c,h as r,n as u,o as v,c as y,b as k,i,l as M}from"./index-1fb82353.js";const w=d({__name:"OTime",props:{form:{},pk:{},ieft:{type:Boolean}},setup(s){const m=s,o=c({t:""}),a={v:()=>m.form[m.pk],vai:t=>p(t).format("YYYY-MM-DD"),setv:t=>{m.form&&(m.form[m.pk]=t)},vtt:t=>{if(t){const e=a.vai(t);e!=o.t&&(o.t=e)}}};return r(()=>o.t,t=>{if(t){const e=a.vai(t);e!=o.t&&(o.t=e,a.setv(e))}}),r(a.v,a.vtt),u(()=>l(()=>a.vtt(a.v()))),(t,e)=>(v(),y("div",{class:M(["input-timed",{"input-timed-ieft":t.ieft}])},[k(i(f),{"minimum-view":"day","maximum-view":"month",format:"yyyy.MM.dd",placeholder:"請選擇",modelValue:i(o).t,"onUpdate:modelValue":e[0]||(e[0]=n=>i(o).t=n)},null,8,["format","modelValue"])],2))}});export{w as _};
