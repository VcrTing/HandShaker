import{y as n,K as _}from"./index-196d4fb0.js";import{n as e}from"./conn-b30cd48e.js";import{a,b as c,c as r,d as p}from"./net-tooi-07907f0e.js";import{E as o}from"./errors_user-be6d0865.js";import{i as d}from"./iodash-8a8cb9b0.js";const i="brokens",h=async(t,s)=>a(o,async()=>c(await e.get(i,r.buiid_pager(t,s)))),f=async t=>a(o,async()=>p(await e.one(i,t+""))),l=n("badPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),getters:{},actions:{save(t,s={}){this[t]=s},async fetchOne(t){let s=await f(t);return d(s)?_(s+""):(s=s,s.product=r.data(s.product),this.one_of_edit=s,console.log("坏货一个 =",s)),s}},persist:{storage:sessionStorage,paths:[]}});export{l as b,h as s};
