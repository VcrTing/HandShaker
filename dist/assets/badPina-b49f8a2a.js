import{q as e,au as o,x as t,E as i,O as _,P as r,I as c,m as d}from"./index-45b294ed.js";const n="brokens",b=async(a,s)=>e(i,async()=>_(await t.get(n,r.buiid_pager(a,s)))),u=async a=>e(i,async()=>o(await t.one(n,a+""))),f=c("badPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),getters:{},actions:{save(a,s={}){this[a]=s},async fetchOne(a){let s=await u(a);return d(s)||(s=s,s.product=r.data(s.product),this.one_of_edit=s),s}}});export{f as b,b as s};
