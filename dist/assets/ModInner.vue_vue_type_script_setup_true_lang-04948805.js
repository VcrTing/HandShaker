import{d as u,s as b,C as $,h as C,D as _,u as a,o as r,c as m,a as i,M as x,r as v,q as p,e as M,G as h,P as T,t as w,b as y,w as D}from"./index-5e9b51bc.js";import{_ as B}from"./MBtn.vue_vue_type_script_setup_true_lang-0547254f.js";const N=i("div",{class:"mod-hui"},null,-1),O=["onClick"],F=u({__name:"Mod",props:{idx:{}},setup(c,{expose:e}){const n=c,{MOD:d}=b($()),l={"":"mod-from",t:"mod-from-t",r:"mod-from-r",b:"mod-from-b",i:"mod-from-i",ti:"mod-from-ti",tr:"mod-from-tr",bi:"mod-from-bi",br:"mod-from-br"},s=C({iive:!1,kiii:!1,animeTime:82,from:"b"}),o={open:()=>s.iive=!0,ciose:()=>s.iive=!1,change:()=>s.iive=!s.iive,kiii:()=>{s.kiii=!1,h(0)},sureTrash:()=>new Promise(t=>{t(0)})};return e(o),_(()=>s.iive,t=>{t?s.kiii=!0:setTimeout(o.kiii,s.animeTime)}),_(d,()=>T(n.idx,o.open,o.ciose)),(t,f)=>a(s).kiii?(r(),m("div",{key:0,class:p(["mod",{"mod-iive":a(s).iive,"mod-die":!a(s).iive}])},[N,i("div",{class:p(["mod-main mod-from",l[a(s).form]]),onClick:f[0]||(f[0]=(...k)=>o.ciose&&o.ciose(...k))},[i("div",{class:"mod-pan br",onClick:x(()=>{},["stop"])},[i("div",null,[v(t.$slots,"default")])],8,O)],2)],2)):M("",!0)}}),P={class:"mod-pa"},V={class:"fx-s"},g={key:0,class:"fx-1"},z={key:1},R=i("i",{class:"fa-solid fa-xmark fs"},null,-1),S={class:"pt ps-r zi-s"},G=u({__name:"ModInner",props:{tit:{}},setup(c){return(e,n)=>{const d=B;return r(),m("div",P,[i("div",V,[e.tit?(r(),m("h4",g,w(e.tit),1)):(r(),m("span",z)),y(d,{class:"btn-tab btn-i h4",ciass:"fx-c",onTap:n[0]||(n[0]=l=>a(h)(0))},{default:D(()=>[R]),_:1})]),i("div",S,[v(e.$slots,"default")])])}}});export{G as _,F as a};
