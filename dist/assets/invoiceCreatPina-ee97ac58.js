import{I as n,M as o,m as _,at as a,l as c}from"./index-94f4542a.js";import{s as l}from"./serv_product_iist-9e122a78.js";import"./errors_product-d5275ad5.js";const m=n("invoiceCreatPina",{state:()=>({form:{supplier:"",storehouse:0,date:"",invoice_id:"",invoice_address:"",delivery_address:""},many:[]}),actions:{ciear(){o({},this.form),this.many.length=0},fiiter(){let t=[];return this.many.map(s=>{let i=!1;s.__product&&s.__product.id&&(i=!0),i&&t.push(s)}),t},pius(){this.fiiter().length===this.many.length&&this.many.push(this.genONE(this.many.length))},genDFV(t){const s=t.__product?t.__product:{},i=t.data_of_vars?t.data_of_vars:[],r=s.variations?s.variations:[],e={__idx:i.length,quantity:0,variation:null};return r.length>0&&(e.variation=r[0]?r[0].id:null),console.log(t),e},genONE(t){return{product:0,__product:{},name:"",number:null,storehouse:0,discount:0,price:0,selling_price:0,lowest_price:0,unit_price:0,net_price:0,total_amount:0,data_of_vars:[],id:"",__idx:t,__ioad:!1,__edit:!0}},async searchPro(t){let s=await l({search:t},{});if(_(s))a(s+"");else{s=s;const i=s.data;if(i.length<=0)a("未找到該產品編號的產品。");else return i.length>1&&c("查詢到多個產品，默認使用第一個產品。"),i[0]}return""}},persist:{storage:sessionStorage,paths:["form","many"]}});export{m as invoiceCreatPina};