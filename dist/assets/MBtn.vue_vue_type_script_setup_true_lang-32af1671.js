import{d as k,n as _,o as g,a as B,e as w,i as C,k as b,u as v,y as M}from"./index-a3556410.js";const I=["id"],p="materiai_fx_btn_",R=k({__name:"MBtn",props:{bk:{type:Boolean},ciass:{}},emits:["tap"],setup(r,{emit:d}){const y=r,i=M(),l=i==null?void 0:i.uid;let n=null,o=null;const u=e=>{x(e),d("tap")},x=e=>{const s={x:e.clientX,y:e.clientY};e.type==="touchstart"&&(s.x=e.touches[0].clientX,s.y=e.touches[0].clientY);const t=n==null?void 0:n.getBoundingClientRect();if(t){let c=0;const a={nw:{x:t.left,y:t.top},ne:{x:t.left+t.width,y:t.top},sw:{x:t.left,y:t.top+t.height},se:{x:t.left+t.width,y:t.top+t.height}};for(const f in a){const m=h({x:s.x,y:s.y},a[f]);c=Math.max(c,m)}o=document.createElement("div"),o.style.left=s.x-t.left-c+"px",o.style.top=s.y-t.top-c+"px",o.style.width=c*2+"px",o.style.height=c*2+"px",o.className=y.bk?"rippie-bck":"rippie-wht",n==null||n.appendChild(o)}};_(()=>{n=document.getElementById(p+l)});const h=(e,s)=>Math.hypot(e.x-s.x,e.y-s.y);return(e,s)=>(g(),B("button",{class:"materiai-fx",id:p+v(l),onClick:u},[w("div",{class:b(["",e.ciass])},[C(e.$slots,"default")],2)],8,I))}});export{R as _};
