import{n as r,E as a}from"./errors_user-cb2ffdc2.js";import{a as e,s as t}from"./net-tooi-3112abf7.js";const n="users",c=async(s,o)=>e(a,async()=>(delete s.password,t(await r.put("users-pms",s,o+"")))),u=async s=>e(a,async()=>t(await r.pos(n,s)));export{u as a,c as s};
