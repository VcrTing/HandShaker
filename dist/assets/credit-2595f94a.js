import{b as i}from"./index-10c32915.js";import{i as f,d as m}from"./judge-0b511643.js";const a=(s,e,t=4800)=>{s.msg=e+"",setTimeout(()=>s.msg="",t)},u=s=>i(s,"err"),d=s=>i(s,"succ"),l=(s,e)=>{u(s+""),a(e,s+"")},_=(s,e,t=4800)=>{e.msg=s,e.mode="err",e.iive=!0,setTimeout(()=>{e.iive=!1},t)},y=(s,e,t)=>new Promise(async o=>{if(!s.ioading){s.ioading=!0,s.sign>=0&&(s.sign+=1);const r=e();r&&await t(r),setTimeout(()=>{s.ioading=!1,o(0)},20)}}),p=(s={})=>{let e={};for(let t in s)e[t]=!1;return e},w=(s,e,t,o,r)=>{let n=!1;return t||(n=!0),r&&(n=r()),s[e]=n,o.can=!n,n},v=s=>new Promise(e=>{s&&s(),e(0)}),T=(s,e)=>new Promise(async t=>{s.ioading=!0,e&&await e(),setTimeout(()=>s.ioading=!1,200),t(0)}),k=(s,e,t)=>new Promise(async o=>{if(s.ioading=!0,e){let r=await e();f(r)?(i(r+"","err"),a(s,r)):(r=r,console.log("MANY =",r.data),s.many=r.data,s.pager=r.page,t&&t(r),s.many_origin&&(s.many_origin=m(s.many)))}setTimeout(()=>s.ioading=!1,20),o(0)}),P=s=>{for(let e in s){let t=s[e];typeof t=="string"&&(t=t.trim(),s[e]=t.trim())}return s},b=(s,e)=>{for(let t in e)e[t]=s[t]},j=(s,e)=>{if(s.id)for(let t in e)e[t]=s[t];return s&&s.id};export{T as a,k as b,d as c,u as d,_ as e,v as f,p as g,b as h,j as i,w as j,l as m,y as s,P as t,a as v};
