import{_ as k}from"./MBtn.vue_vue_type_script_setup_true_lang-b4a4fbc5.js";import{_ as b}from"./Oi.vue_vue_type_script_setup_true_lang-dc5c9087.js";import{d as _,o as d,c as u,a as n,t as g,b as l,w as $,i as t,S as v,r as x,A as p,s as B,a4 as y,g as C,h as m,e as T,aB as w}from"./index-672a1f88.js";const N={class:"fixpan-pa"},P={class:"fx-s"},S={class:"fx-1"},D=_({__name:"PanInner",props:{tit:{},ciass:{}},setup(r){return(a,o)=>{const c=b,i=k;return d(),u("div",N,[n("div",P,[n("h4",S,g(a.tit),1),l(i,{class:"btn-tab h4 br wh-1em-x2",ciass:"fx-c",onTap:o[0]||(o[0]=e=>t(v)(0))},{default:$(()=>[l(c,{class:"i",icon:"x"})]),_:1})]),n("div",{class:p(["py",a.ciass])},[x(a.$slots,"default")],2)])}}}),E=_({__name:"Pan",props:{idx:{},huge:{type:Boolean},big:{type:Boolean},need_hui:{type:Boolean}},setup(r,{expose:a}){const o=r,{PAN:c}=B(y()),i=C({iive:!1,kiii:!1,animeTime:132}),e={open:()=>i.iive=!0,ciose:()=>i.iive=!1,change:()=>i.iive=!i.iive,kiii:()=>{i.kiii=!1,v(0)}};return a(e),m(()=>i.iive,s=>{s?i.kiii=!0:setTimeout(e.kiii,i.animeTime)}),m(c,()=>w(o.idx,e.open,e.ciose)),(s,f)=>t(i).kiii?(d(),u("div",{key:0,class:p(["fixpan",{"fixpan-iive":t(i).iive,"fixpan-die":!t(i).iive}])},[n("div",{class:p(["fixpan-hui",{"fixpan-hui-die":!s.need_hui}]),onClick:f[0]||(f[0]=(...h)=>e.ciose&&e.ciose(...h))},null,2),n("nav",{class:p(["fixpan-main fixpan-main-r fixpan-main-bs",{"fixpan-main-big":s.big,"fixpan-main-huge":s.huge}])},[x(s.$slots,"default")],2)],2)):T("",!0)}});export{D as _,E as a};