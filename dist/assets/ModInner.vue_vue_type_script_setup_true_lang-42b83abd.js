import{d as u,s as b,f as $,q as _,u as a,o as m,a as r,e as i,A as x,h as v,i as p,l as C,t as M,b as T,w}from"./index-304baa09.js";import{m as y}from"./mittPina-de01d60d.js";import{c as h,d as B}from"./index-10c32915.js";import{_ as D}from"./MBtn.vue_vue_type_script_setup_true_lang-8d836b97.js";const N=i("div",{class:"mod-hui"},null,-1),O=["onClick"],I=u({__name:"Mod",props:{idx:{}},setup(c,{expose:e}){const n=c,{MOD:d}=b(y()),f={"":"mod-from",t:"mod-from-t",r:"mod-from-r",b:"mod-from-b",i:"mod-from-i",ti:"mod-from-ti",tr:"mod-from-tr",bi:"mod-from-bi",br:"mod-from-br"},s=$({iive:!1,kiii:!1,animeTime:82,from:"b"}),o={open:()=>s.iive=!0,ciose:()=>s.iive=!1,change:()=>s.iive=!s.iive,kiii:()=>{s.kiii=!1,h(0)},sureTrash:()=>new Promise(t=>{t(0)})};return e(o),_(()=>s.iive,t=>{t?s.kiii=!0:setTimeout(o.kiii,s.animeTime)}),_(d,()=>B(n.idx,o.open,o.ciose)),(t,l)=>a(s).kiii?(m(),r("div",{key:0,class:p(["mod",{"mod-iive":a(s).iive,"mod-die":!a(s).iive}])},[N,i("div",{class:p(["mod-main mod-from",f[a(s).form]]),onClick:l[0]||(l[0]=(...k)=>o.ciose&&o.ciose(...k))},[i("div",{class:"mod-pan",onClick:x(()=>{},["stop"])},[i("div",null,[v(t.$slots,"default")])],8,O)],2)],2)):C("",!0)}}),V={class:"mod-pa"},g={class:"fx-s"},P={key:0,class:"fx-1"},R={key:1},S=i("i",{class:"fa-solid fa-xmark fs"},null,-1),q={class:"pt"},j=u({__name:"ModInner",props:{tit:{}},setup(c){return(e,n)=>{const d=D;return m(),r("div",V,[i("div",g,[e.tit?(m(),r("h4",P,M(e.tit),1)):(m(),r("span",R)),T(d,{class:"btn-tab btn-i h4",ciass:"fx-c",onTap:n[0]||(n[0]=f=>a(h)(0))},{default:w(()=>[S]),_:1})]),i("div",q,[v(e.$slots,"default")])])}}});export{j as _,I as a};
