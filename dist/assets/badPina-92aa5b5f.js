import{y as n,L as _}from"./index-33974ecf.js";import{n as e}from"./conn-e4aee6c9.js";import{s as a}from"./strapi-c10e9858.js";import{a as r,c,b as p}from"./net-tooi-51cb3d70.js";import{E as o}from"./errors_user-be6d0865.js";import{i as m}from"./iodash-8a8cb9b0.js";const i="brokens",l=async(t,s)=>r(o,async()=>p(await e.get(i,a.buiid_pager(t,s)))),d=async t=>r(o,async()=>c(await e.one(i,t+""))),v=n("badPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),getters:{},actions:{save(t,s={}){this[t]=s},async fetchOne(t){let s=await d(t);return m(s)?_(s+""):(s=s,s.product=a.data(s.product),this.one_of_edit=s,console.log("坏货一个 =",s)),s}},persist:{storage:sessionStorage,paths:[]}});export{v as b,l as s};