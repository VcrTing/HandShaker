import{n as r}from"./conn-88770a94.js";import{s as i}from"./strapi-c10e9858.js";import{a,b as n,c as p}from"./net-tooi-962a533f.js";import{E as t}from"./errors_product-174667b5.js";const o="products",d=async(s,e)=>a(t,async()=>n(await r.get(o,i.buiid_pager(s,e)))),f=async s=>a(t,async()=>p(await r.one(o,s+"")));export{f as a,d as s};
