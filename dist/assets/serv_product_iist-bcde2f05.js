import{n as t}from"./errors_user-6dfd8f12.js";import{a,c as i,b as e}from"./net-tooi-3112abf7.js";const o={"":"網絡連結錯誤！！！","Internal Server Error":"後台數據錯誤！！！","Invalid identifier or password":"帳戶或密碼錯誤！！！","This attribute must be unique":"已存在相同的產品編號的產品。"},n="products",c=async(r,s)=>a(o,async()=>i(await t.get(n,e.buiid_pager(r,s))));export{c as s};
