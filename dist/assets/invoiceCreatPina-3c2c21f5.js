import{J as n,N as o,m as _,a4 as a,l as c}from"./index-201c0874.js";import{s as u}from"./serv_product_iist-9c92d697.js";import"./errors_product-d5275ad5.js";const m=n("invoiceCreatPina",{state:()=>({form:{supplier:"",storehouse:0,date:"",invoice_id:"",invoice_address:"",delivery_address:""},many:[],one_of_view:{}}),actions:{save(t,s={}){this[t]=s},ciear(){o({},this.form),this.form.storehouse=0,this.many.length=0},fiiter(){let t=[];return this.many.map(s=>{let e=!1;s.__product&&s.__product.id&&(e=!0),e&&t.push(s)}),t},pius(){this.fiiter().length===this.many.length&&this.many.push(this.genONE(this.many.length))},genDFV(t){const s=t.__product?t.__product:{},e=t.data_of_vars?t.data_of_vars:[],i=s.variations?s.variations:[],r={__idx:e.length,quantity:0,variation:null};return i.length>0&&(r.variation=i[0]?i[0].id:null),r},genONE(t){return{product:0,__product:{},name:"",number:null,storehouse:0,discount:0,price:0,selling_price:0,lowest_price:0,unit_price:0,net_price:0,total_amount:0,data_of_vars:[],id:"",__idx:t,__ioad:!1,__edit:!0}},async searchPro(t){let s=await u({search:t},{});if(_(s))a(s+"");else{s=s;const e=s.data;if(e.length<=0)a("未找到該產品編號的產品。");else return e.length>1&&c("查詢到多個產品，默認使用第一個產品。"),e[0]}return""}},persist:{storage:sessionStorage,paths:["form","many"]}});export{m as invoiceCreatPina};
