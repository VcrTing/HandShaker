import{A as t,e as u}from"./net-tooi-3112abf7.js";import{C as p}from"./index-17f9211a.js";const i={category:"getCourseCategory",warehouses:"storehouses",suppiiers:"suppliers",iabeis:"labels",restocks:"restocks",brokens:"broken-products",orders:"orders",products:"products",product_dei_iabei:"products_delete_label",product_add_iabei:"products_add_label",variations:"variations",ieveis:"member-levels",members:"members",users:"users","users-pms":"users-permissions/users",instock:"restocks"};class n{uri(s,e,r=""){return s+"/"+i[e]+"/"+r}headers(s,e=!1){const r={"Content-Type":e?"multipart/form-data":"application/json"};return s&&(r.Authorization="Bearer "+s),r}params(s,e="?"){if(JSON.stringify(s)!="{}")for(const r in s)e+=r+"="+s[r]+"&";return e}defops(s=!1){return{headers:this.headers(p().jwt,s)}}}class c extends n{async one(s,e,r){const o=super.uri(t,s,e)+super.params(r);return console.log("ONE URI =",o),await u.get(o,super.defops())}async get(s,e,r){const o=super.uri(t,s,r)+super.params(e);return console.log("GET URI =",o),await u.get(o,super.defops())}async pos(s,e){const r=super.uri(t,s,"");return console.log("POST uri =",r),console.log("POST DATA =",e),await u.post(r,e,super.defops())}async put(s,e,r){const o=super.uri(t,s,r);return console.log("PATCH uri =",o),console.log("PATCH DATA =",e),await u.patch(o,e,super.defops())}async posF(s,e){return await u.post(super.uri(t,s,""),e,super.defops(!0))}async putF(s,e,r){return await u.patch(super.uri(t,s,r),e,super.defops(!0))}async dei(s,e){return console.log("DEIETE uri =",super.uri(t,s,e)),await u.delete(super.uri(t,s,e),super.defops())}}const m=new c;export{m as n};
