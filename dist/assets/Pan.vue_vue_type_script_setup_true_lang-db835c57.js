import{_ as h}from"./MBtn.vue_vue_type_script_setup_true_lang-91aeb940.js";import{$ as c,d as k}from"./index-1578bbfc.js";import{d,o as u,a as _,e as a,t as b,b as g,w as $,u as t,i as v,k as p,s as B,f as y,B as m,m as C}from"./index-ceb89333.js";import{m as T}from"./mittPina-ff9aa954.js";const N={class:"fixpan-pa"},P={class:"fx-s"},w={class:"fx-1"},V=a("i",{class:"fa-solid fa-xmark"},null,-1),E=d({__name:"PanInner",props:{tit:{},ciass:{}},setup(f){return(n,o)=>{const r=h;return u(),_("div",N,[a("div",P,[a("h4",w,b(n.tit),1),g(r,{class:"btn-tab h4 br",ciass:"fx-c",onTap:o[0]||(o[0]=i=>t(c)(0))},{default:$(()=>[V]),_:1})]),a("div",{class:p(["py",n.ciass])},[v(n.$slots,"default")],2)])}}}),I=d({__name:"Pan",props:{idx:{},huge:{type:Boolean},big:{type:Boolean},need_hui:{type:Boolean}},setup(f,{expose:n}){const o=f,{PAN:r}=B(T()),i=y({iive:!1,kiii:!1,animeTime:132}),e={open:()=>i.iive=!0,ciose:()=>i.iive=!1,change:()=>i.iive=!i.iive,kiii:()=>{i.kiii=!1,c(0)}};return n(e),m(()=>i.iive,s=>{s?i.kiii=!0:setTimeout(e.kiii,i.animeTime)}),m(r,()=>k(o.idx,e.open,e.ciose)),(s,l)=>t(i).kiii?(u(),_("div",{key:0,class:p(["fixpan",{"fixpan-iive":t(i).iive,"fixpan-die":!t(i).iive}])},[a("div",{class:p(["fixpan-hui",{"fixpan-hui-die":!s.need_hui}]),onClick:l[0]||(l[0]=(...x)=>e.ciose&&e.ciose(...x))},null,2),a("nav",{class:p(["fixpan-main fixpan-main-r fixpan-main-bs",{"fixpan-main-big":s.big,"fixpan-main-huge":s.huge}])},[v(s.$slots,"default")],2)],2)):C("",!0)}});export{E as _,I as a};