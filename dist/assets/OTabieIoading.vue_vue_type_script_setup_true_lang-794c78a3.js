import{_,a as h}from"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import{o as s,a,e as o,d as f,f as p,A as u,u as c,k as t,b as d,m as g,i as k}from"./index-7e5d97c2.js";function v(r,n){return s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"})])}const w={class:"fx-c"},y=o("span",null,"   加載中 ",-1),b={class:"oti-con"},B={key:0,class:"ani-softer"},C={class:"fx-c"},V={class:"d-ib h2 pt-s"},z=o("span",null,"   空數據。 ",-1),L=f({__name:"OTabieIoading",props:{aii:{},mini:{type:Boolean}},setup(r){const n=r,e=p({kiii:!!n.aii.ioading,timed:420});return u(()=>n.aii.ioading,i=>{console.log("ioading 變動 =",i),i?e.kiii=!0:setTimeout(()=>e.kiii=!1,e.timed)}),(i,N)=>{const l=_,m=h;return s(),a("div",{class:t(["o-tabie-ioading ps-r ts-s zi-s",{"mh-oti":!i.mini,"mh-oti-s":i.mini}])},[c(e).kiii?(s(),a("div",{key:0,class:t(["oti-ioading abs-fuii fx-c bg-con",{"oti-ioading-iive":i.aii.ioading,"oti-ioading-die":!i.aii.ioading}])},[o("div",w,[d(l,{styie:"def"}),y,d(m)])],2)):g("",!0),o("div",b,[i.aii.many&&i.aii.many.length>0?(s(),a("div",B,[k(i.$slots,"default")])):(s(),a("div",{key:1,class:t(["ani-softer fx-c",{"mh-oti":!i.mini,"mh-oti-s":i.mini}])},[o("div",C,[o("div",V,[d(c(v),{class:"w-1em"})]),z])],2))])],2)}}});export{L as _,v as r};