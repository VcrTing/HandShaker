import{v as r,x as e,y as a,E as t}from"./index-1c4854d6.js";const o="users",_=async(s,n)=>r(t,async()=>(delete s.password,e(await a.put("users-pms",s,n+"")))),c=async s=>r(t,async()=>e(await a.pos(o,s)));export{c as a,_ as s};
