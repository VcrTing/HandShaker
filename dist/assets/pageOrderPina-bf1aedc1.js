import{n as a}from"./conn-b30cd48e.js";import{a as i,b as d,c as t,d as c}from"./net-tooi-07907f0e.js";import{E as n}from"./errors_user-be6d0865.js";import{o as p}from"./credit-1f946479.js";import{f as u}from"./fioat-e27af979.js";import{i as f}from"./iodash-8a8cb9b0.js";import{y as m}from"./index-196d4fb0.js";const _="orders",S=async(e,r)=>i(n,async()=>d(await a.get(_,t.buiid_pager(e,r)))),l=async e=>i(n,async()=>c(await a.one(_,e+""))),h=m("pageOrderPina",{state:()=>({one_of_view:{},one_of_refund:{},refund_products:[]}),getters:{refund_price(e){let r=0;return e.refund_products.map(o=>{u.floatAdd(o.refunded_price,r)}),r}},actions:{ciear_product_refund(){this.refund_products.length=0},pius_product_refund(e){this.refund_products.push(e)},trash_product_refund(e){let r=0;this.refund_products.map((s,o)=>{s.id==e.id}),this.refund_products.splice(r,1)},save(e,r={}){this[e]=r},async fetchOne(e,r="one_of_view"){const s=await l(e);f(s)?p("網絡錯誤，訂單獲取失敗!!!"):this.save(r,this._vai_order(s))},_vai_order(e){return e.member=e.member?t.data(e.member):{},e.cashier=e.cashier?t.data(e.cashier):{},e.member_level=e.member_level?t.data(e.member_level):{},console.log("ORDER OF VIEW =",e),e}}}),P=Object.freeze(Object.defineProperty({__proto__:null,pageOrderPina:h},Symbol.toStringTag,{value:"Module"}));export{P as a,h as p,S as s};
