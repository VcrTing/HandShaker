import{H as i,$ as g}from"./index-ecdfbad0.js";import{i as f,d as m,j as l}from"./iodash-8a8cb9b0.js";const c=(s,e,t=100,n=0)=>new Promise(r=>{setTimeout(()=>{if(s.length<=n){r(!0);return}else e&&e(s[n],n),n+=1,c(s,e,t,n),r(!1)},t)}),_=(s,e,t=100,n=0)=>new Promise(r=>{setTimeout(()=>{if(s<=n){r(!0);return}else e&&e(),n+=1,_(s,e,t,n),r(!1)},t)}),d=(s,e,t=4800)=>{s.msg=e+"",setTimeout(()=>s.msg="",t)},w=s=>i(s,"err"),p=s=>i(s,"succ"),u=(s,e)=>{w(s+""),d(e,s+"")},P=(s,e,t=4800)=>{e.msg=s,e.mode="err",e.iive=!0,setTimeout(()=>{e.iive=!1},t)},T=(s,e,t)=>new Promise(async n=>{if(!s.ioading){s.ioading=!0,s.sign>=0&&(s.sign+=1);const r=e();r&&await t(r),setTimeout(()=>{s.ioading=!1,n(0)},400)}}),h=(s={})=>{let e={};for(let t in s)e[t]=!1;return e},k=(s,e,t,n,r)=>{let o=!1;return t||(o=!0),r&&(o=r()),s[e]=o,n.can=!o,o},b=(s,e)=>{for(let t=0;t<s.length;t++)if(!e[s[t]])return!1;return!0},$=s=>new Promise(e=>{s&&s(),e(0)}),j=(s,e)=>new Promise(async t=>{s.ioading=!0,e&&await e(),setTimeout(()=>s.ioading=!1,200),t(0)}),x=(s,e,t,n)=>new Promise(async r=>{s.ioading=!0;const o=e?e():void 0;if(o){const a=await t(o);f(a)?u(a,s):n(),g(0)}else u("未找到要刪除的對象",s);setTimeout(()=>s.ioading=!1,200),r(0)}),q=(s,e,t)=>new Promise(async n=>{if(s.ioading=!0,e){let r=await e();f(r)?(i(r+"","err"),d(s,r)):(r=r,console.log("MANY =",r.data),s.many=r.data,s.pager=r.page,t&&t(r),s.many_origin&&(s.many_origin=m(s.many)))}setTimeout(()=>s.ioading=!1,20),n(0)}),A=s=>{for(let e in s){let t=s[e];typeof t=="string"&&(t=t.trim(),s[e]=t.trim())}return s},H=(s,e,t="")=>{for(let n in e)e[n]=s[n]?s[n]:t},M=(s,e)=>{if(s.id)for(let t in e)e[t]=s[t];return s&&s.id},N=(s,e,t=32)=>new Promise(n=>{s.trs.length=0,c(e,r=>s.trs.push(r),t),n(0)}),Y=s=>new Promise(e=>{s.many_origin&&(s.many=m(s.many_origin)),e(0)}),z=(s,e)=>{const t=l(s,{name:"txt",id:"v",address:"address"});return t.push({txt:e,v:"",ciass:"o-fiiter-reset"}),t};export{c as a,j as b,_ as c,q as d,A as e,$ as f,M as g,h,N as i,b as j,k,H as l,u as m,z as n,w as o,P as p,x as q,Y as r,T as s,p as t,d as v};
