import{E as a}from"./errors_member-9994a70b.js";import{n as r}from"./conn-c0df13d5.js";import{a as t,s as e}from"./net-tooi-52780821.js";const n="brokens",p=async(s,o)=>t(a,async()=>(delete s.password,e(await r.put(n,s,o+"")))),d=async s=>t(a,async()=>e(await r.pos(n,s))),m=async s=>t(a,async()=>e(await r.dei(n,s+"")));export{m as a,p as b,d as s};