import{y as i,H as o}from"./index-034b25b4.js";import{a as t}from"./serv_suppiier_iist-bf35b519.js";import{i as r}from"./iodash-8a8cb9b0.js";const f=i("suppiierPina",{state:()=>({one_of_edit:{}}),actions:{save(e,s={}){this[e]=s},async fetchOne(e){const s=await t(e);return r(s)?o(s+""):this.one_of_edit=s,console.log("SUPPIIER RES =",s),s}}});export{f as s};
