import{J as m,m as s,ac as i}from"./index-b83fe83c.js";import{a as r}from"./serv_member_iist-2ac8a2e9.js";const n=m("memberPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),actions:{save(t,e={}){this[t]=e},async fetchOne(t){let e=await r(t);return s(e)?i(e+""):(e=e,e.member_level=e.member_level?e.member_level.id:1,this.one_of_edit=e),e}}});export{n as m};