import{I as m,m as s,ac as i}from"./index-09e4faf1.js";import{a as r}from"./serv_member_iist-dca00c2a.js";const n=m("memberPina",{state:()=>({one_of_edit:{},ievei_of_edit:{}}),actions:{save(t,e={}){this[t]=e},async fetchOne(t){let e=await r(t);return s(e)?i(e+""):(e=e,e.member_level=e.member_level?e.member_level.id:1,this.one_of_edit=e),e}}});export{n as m};