import{l as m}from"./index-080b1a3a.js";import{n as s,E as t}from"./errors_user-cb2ffdc2.js";import{a,c as o,b as n,d as _}from"./net-tooi-3112abf7.js";import{v as c}from"./vai_member-296c867f.js";import{i as f}from"./judge-13dfac2e.js";import{c as b}from"./index-6fcba4a6.js";const i="members",E=async(r,e)=>a(t,async()=>o(await s.get(i,n.buiid_pager(r,e)),["member_level"])),l=async r=>a(t,async()=>_(await s.one(i,r+""),c.vfy)),R=m("memberPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),actions:{save(r,e={}){this[r]=e},async fetchOne(r){let e=await l(r);return f(e)?b(e+""):(e=e,e.member_level=e.member_level?e.member_level.id:1,this.one_of_edit=e),e}}});export{R as m,E as s};
