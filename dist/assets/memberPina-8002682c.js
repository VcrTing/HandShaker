import{l as o}from"./index-7e5d97c2.js";import{n as r,E as t}from"./errors_user-d65160b0.js";import{a,c as m,b as n,d as _}from"./net-tooi-3112abf7.js";import{v as c}from"./vai_member-5e956354.js";import{i as f}from"./judge-0b511643.js";import{b as p}from"./index-f7a16cec.js";const i="members",E=async(s,e)=>a(t,async()=>m(await r.get(i,n.buiid_pager(s,e)),["member_level"])),b=async s=>a(t,async()=>_(await r.one(i,s+""),c.vfy)),R=o("memberPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),actions:{save(s,e={}){this[s]=e},async fetchOne(s){const e=await b(s);return f(e)?p(e+""):this.one_of_edit=e,e}}});export{R as m,E as s};
