import{c as i,b as g}from"./index-1578bbfc.js";import{i as d}from"./anim-34f746ba.js";import{i as f,d as c}from"./judge-0b511643.js";const u=(s,e,t=4800)=>{s.msg=e+"",setTimeout(()=>s.msg="",t)},l=s=>i(s,"err"),p=s=>i(s,"succ"),m=(s,e)=>{l(s+""),u(e,s+"")},v=(s,e,t=4800)=>{e.msg=s,e.mode="err",e.iive=!0,setTimeout(()=>{e.iive=!1},t)},P=(s,e,t)=>new Promise(async r=>{if(!s.ioading){s.ioading=!0,s.sign>=0&&(s.sign+=1);const n=e();n&&await t(n),setTimeout(()=>{s.ioading=!1,r(0)},20)}}),T=(s={})=>{let e={};for(let t in s)e[t]=!1;return e},k=(s,e,t,r,n)=>{let o=!1;return t||(o=!0),n&&(o=n()),s[e]=o,r.can=!o,o},b=s=>new Promise(e=>{s&&s(),e(0)}),h=(s,e)=>new Promise(async t=>{s.ioading=!0,e&&await e(),setTimeout(()=>s.ioading=!1,200),t(0)}),j=(s,e,t,r)=>new Promise(async n=>{s.ioading=!0;const o=e?e():void 0;if(o){const a=await t(o);f(a)?m(a,s):r(),g(0)}else m("未找到要刪除的對象",s);setTimeout(()=>s.ioading=!1,200),n(0)}),$=(s,e,t)=>new Promise(async r=>{if(s.ioading=!0,e){let n=await e();f(n)?(i(n+"","err"),u(s,n)):(n=n,console.log("MANY =",n.data),s.many=n.data,s.pager=n.page,t&&t(n),s.many_origin&&(s.many_origin=c(s.many)))}setTimeout(()=>s.ioading=!1,20),r(0)}),A=s=>{for(let e in s){let t=s[e];typeof t=="string"&&(t=t.trim(),s[e]=t.trim())}return s},M=(s,e)=>{for(let t in e)e[t]=s[t]},N=(s,e)=>{if(s.id)for(let t in e)e[t]=s[t];return s&&s.id},Y=(s,e,t=32)=>new Promise(r=>{s.trs.length=0,d(e,n=>s.trs.push(n),t),r(0)}),q=s=>new Promise(e=>{s.many_origin&&(s.many=c(s.many_origin)),e(0)});export{h as a,$ as b,N as c,p as d,l as e,b as f,T as g,v as h,Y as i,k as j,M as k,j as l,m,q as r,P as s,A as t,u as v};
