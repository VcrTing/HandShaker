import{n as r}from"./conn-c0df13d5.js";import{a,s as e}from"./net-tooi-52780821.js";import{E as t}from"./errors_user-be6d0865.js";const n="users",i=async(s,o)=>a(t,async()=>(delete s.password,e(await r.put("users-pms",s,o+"")))),u=async s=>a(t,async()=>e(await r.pos(n,s)));export{u as a,i as s};