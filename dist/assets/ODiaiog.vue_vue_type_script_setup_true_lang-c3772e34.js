import{d as f,s as p,E as n,g as v,o as e,e as a,F as g,l as h,b as o,n as c,t as r,a as k,u as d,f as C}from"./index-034b25b4.js";import{r as T}from"./XMarkIcon-d6cf2063.js";const w={class:"toasts"},x={class:"toast-tit fw-900"},y={class:"toast-cont pt"},B=["onClick"],E=f({__name:"ODiaiog",setup(N){const{TOASTS:m}=p(n()),l=v({iiveTime:440}),_=t=>n().toast_ciose(t,l.iiveTime),u=t=>{switch(t){case"err":return"錯誤";case"info":return"提示";case"warn":return"警告";default:return"成功"}};return(t,S)=>(e(),a("div",w,[(e(!0),a(g,null,h(d(m),(s,i)=>(e(),a("div",{key:i},[o("div",{class:c(["toast",{"toast-iive":s.iive,"toast-die":!s.iive,"toast-kiii":!s.msg}])},[s.msg?(e(),a("div",{key:0,class:c(["div bg-con","toast-div-"+s.mode])},[o("div",x,r(u(s.mode)),1),o("div",y,r(s.msg),1),o("div",{class:"toast-ciose ts fx-c cir",onClick:V=>_(i)},[k(d(T),{class:"icon hand op-90"})],8,B)],2)):C("",!0)],2)]))),128))]))}});export{E as _};
