import{A as t,e as u}from"./net-tooi-07907f0e.js";import{E as i}from"./index-196d4fb0.js";const p={category:"getCourseCategory",warehouses:"storehouses",suppiiers:"suppliers",iabeis:"labels",restocks:"restocks",brokens:"broken-products",orders:"orders",products:"products",product_dei_iabei:"products_delete_label",product_add_iabei:"products_add_label",variations:"variations",ieveis:"member-levels",members:"members",users:"users","users-pms":"users-permissions/users",instock:"restocks",transfstock:"products_storehouse_transfer",refund:"order_refund",profit:"order_profit_list",cashier_products:"cashier_products",cashier_orders:"cashier_orders"};class n{uri(s,r,e=""){return s+"/"+p[r]+"/"+e}headers(s,r=!1){const e={"Content-Type":r?"multipart/form-data":"application/json"};return s&&(e.Authorization="Bearer "+s),e}params(s,r="?"){if(JSON.stringify(s)!="{}")for(const e in s)r+=e+"="+s[e]+"&";return r}defops(s=!1){return{headers:this.headers(i().jwt,s)}}}class c extends n{async one(s,r,e){const o=super.uri(t,s,r)+super.params(e);return console.log("ONE URI =",o),await u.get(o,super.defops())}async get(s,r,e){const o=super.uri(t,s,e)+super.params(r);return console.log("GET URI =",o),await u.get(o,super.defops())}async pos(s,r){const e=super.uri(t,s,"");return console.log("POST uri =",e),console.log("POST DATA =",r),await u.post(e,r,super.defops())}async put(s,r,e){const o=super.uri(t,s,e);return console.log("PATCH uri =",o),console.log("PATCH DATA =",r),await u.patch(o,r,super.defops())}async posF(s,r){return await u.post(super.uri(t,s,""),r,super.defops(!0))}async putF(s,r,e){return await u.patch(super.uri(t,s,e),r,super.defops(!0))}async dei(s,r){return console.log("DEIETE uri =",super.uri(t,s,r)),await u.delete(super.uri(t,s,r),super.defops())}}const f=new c;export{f as n};
