import{q as e,O as o,x as t,P as i,E as r,as as _,I as c,m as d}from"./index-09e4faf1.js";const n="brokens",b=async(a,s)=>e(r,async()=>o(await t.get(n,i.buiid_pager(a,s)))),u=async a=>e(r,async()=>_(await t.one(n,a+""))),f=c("badPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),getters:{},actions:{save(a,s={}){this[a]=s},async fetchOne(a){let s=await u(a);return d(s)||(s=s,s.product=i.data(s.product),this.one_of_edit=s),s}}});export{f as b,b as s};