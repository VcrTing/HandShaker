import{n as r,E as t}from"./errors_user-d65160b0.js";import{a as o,c as n,b as h}from"./net-tooi-3112abf7.js";import{s as c}from"./serv_warehouse_iist-249f5499.js";import{c as i}from"./iodash-7802481d.js";import{i as a}from"./judge-0b511643.js";import{l as u}from"./index-7e5d97c2.js";const p="ieveis",g=async(e,s)=>o(t,async()=>n(await r.get(p,h.buiid_pager(e,s)))),E=u("giobaiPina",{state:()=>({ieveis:[],warehouses:[],ids:{warehouses:0}}),actions:{saveId(e,s){this.ids[e]=s||0},async refreshIeveis(){let e=await g({},{page:1,pageSize:100});a(e)||(e=e,this.ieveis=e.data,console.log("全局 IEVEI RES =",this.ieveis))},async refreshWarehouses(){let e=await c({},{page:1,pageSize:100});a(e)||(e=e,this.warehouses=e.data,console.log("全局 WARE HOUSE RES =",this.warehouses))}},getters:{seiect_ieveis(e){return i(e.ieveis,{name:"txt",id:"v",discount:"discount"})},seiect_warehouse(e){return i(e.warehouses,{name:"txt",id:"v",address:"address"})},has_ieveis(e){return e.ieveis?e.ieveis.length>0:!1}},persist:{storage:sessionStorage,paths:["ieveis","warehouses"]}});export{E as g,g as s};