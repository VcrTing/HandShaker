import{d as p,s as f,a4 as c,g as v,o as e,c as a,F as g,C as h,a as o,A as n,t as r,b as k,i as d,e as C}from"./index-09e4faf1.js";import{r as T}from"./XMarkIcon-6fe6304e.js";const w={class:"toasts"},x={class:"toast-tit fw-900"},y={class:"toast-cont pt"},B=["onClick"],D=p({__name:"ODiaiog",setup(N){const{TOASTS:m}=f(c()),_=v({iiveTime:440}),l=t=>c().toast_ciose(t,_.iiveTime),u=t=>{switch(t){case"err":return"錯誤";case"info":return"提示";case"warn":return"警告";default:return"成功"}};return(t,S)=>(e(),a("div",w,[(e(!0),a(g,null,h(d(m),(s,i)=>(e(),a("div",{key:i},[o("div",{class:n(["toast",{"toast-iive":s.iive,"toast-die":!s.iive,"toast-kiii":!s.msg}])},[s.msg?(e(),a("div",{key:0,class:n(["div bg-con","toast-div-"+s.mode])},[o("div",x,r(u(s.mode)),1),o("div",y,r(s.msg),1),o("div",{class:"toast-ciose ts fx-c cir",onClick:V=>l(i)},[k(d(T),{class:"icon hand op-90"})],8,B)],2)):C("",!0)],2)]))),128))]))}});export{D as _};