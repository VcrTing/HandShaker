import{d as u,s as $,H as y,h as C,g as _,i as n,o as r,c as m,a as i,M,r as v,m as p,e as k,$ as h,O as x,t as B,k as T,w}from"./index-196d4fb0.js";import{_ as O}from"./MBtn.vue_vue_type_script_setup_true_lang-d7872721.js";const g=i("div",{class:"mod-hui"},null,-1),D=["onClick"],H=u({__name:"Mod",props:{idx:{},stat:{type:Boolean}},setup(c,{expose:o}){const t=c,{MOD:d}=$(y()),l={"":"mod-from",t:"mod-from-t",r:"mod-from-r",b:"mod-from-b",i:"mod-from-i",ti:"mod-from-ti",tr:"mod-from-tr",bi:"mod-from-bi",br:"mod-from-br"},s=C({iive:!1,kiii:!1,animeTime:82,from:"b"}),e={open:()=>s.iive=!0,ciose:()=>{t.stat||(s.iive=!1)},change:()=>s.iive=!s.iive,kiii:()=>{s.kiii=!1,h(0)},sureTrash:()=>new Promise(a=>{a(0)})};return o(e),_(()=>s.iive,a=>{a?s.kiii=!0:setTimeout(e.kiii,s.animeTime)}),_(d,()=>x(t.idx,e.open,e.ciose)),(a,f)=>n(s).kiii?(r(),m("div",{key:0,class:p(["mod",{"mod-iive":n(s).iive,"mod-die":!n(s).iive}])},[g,i("div",{class:p(["mod-main mod-from",l[n(s).form]]),onClick:f[0]||(f[0]=(...b)=>e.ciose&&e.ciose(...b))},[i("div",{class:"mod-pan br",onClick:M(()=>{},["stop"])},[i("div",null,[v(a.$slots,"default")])],8,D)],2)],2)):k("",!0)}}),z={class:"mod-pa"},N={class:"fx-s"},P={key:0,class:"fx-1"},R={key:1},S=i("i",{class:"fa-solid fa-xmark fs"},null,-1),V={class:"pt ps-r zi-s"},I=u({__name:"ModInner",props:{tit:{},stat:{type:Boolean}},setup(c){return(o,t)=>{const d=O;return r(),m("div",z,[i("div",N,[o.tit?(r(),m("h4",P,B(o.tit),1)):(r(),m("span",R)),o.stat?(r(),T(d,{key:2,class:"btn-tab btn-i h4",ciass:"fx-c",onTap:t[0]||(t[0]=l=>n(h)(0))},{default:w(()=>[S]),_:1})):k("",!0)]),i("div",V,[v(o.$slots,"default")])])}}});export{I as _,H as a};
