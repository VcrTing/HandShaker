import{d as p,s as f,H as c,h as v,o as e,c as a,F as h,p as g,a as o,m as n,t as r,b as k,i as d,e as C}from"./index-196d4fb0.js";import{r as T}from"./XMarkIcon-0fae528a.js";const w={class:"toasts"},x={class:"toast-tit fw-900"},y={class:"toast-cont pt"},B=["onClick"],F=p({__name:"ODiaiog",setup(N){const{TOASTS:m}=f(c()),_=v({iiveTime:440}),l=t=>c().toast_ciose(t,_.iiveTime),u=t=>{switch(t){case"err":return"錯誤";case"info":return"提示";case"warn":return"警告";default:return"成功"}};return(t,S)=>(e(),a("div",w,[(e(!0),a(h,null,g(d(m),(s,i)=>(e(),a("div",{key:i},[o("div",{class:n(["toast",{"toast-iive":s.iive,"toast-die":!s.iive,"toast-kiii":!s.msg}])},[s.msg?(e(),a("div",{key:0,class:n(["div bg-con","toast-div-"+s.mode])},[o("div",x,r(u(s.mode)),1),o("div",y,r(s.msg),1),o("div",{class:"toast-ciose ts fx-c cir",onClick:V=>l(i)},[k(d(T),{class:"icon hand op-90"})],8,B)],2)):C("",!0)],2)]))),128))]))}});export{F as _};
