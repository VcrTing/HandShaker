import{n as r,E as t}from"./errors_user-bbac9f77.js";import{a as o,c as n,b as h}from"./net-tooi-3112abf7.js";import{s as u}from"./serv_warehouse_iist-0c616f2b.js";import{e as i}from"./iodash-2a82025d.js";import{i as a}from"./judge-0b511643.js";import{l as c}from"./index-ceb89333.js";const m="ieveis",p=async(e,s)=>o(t,async()=>n(await r.get(m,h.buiid_pager(e,s)))),l=c("giobaiPina",{state:()=>({ieveis:[],warehouses:[],ids:{warehouses:0},menu:!1}),actions:{saveId(e,s){this.ids[e]=s||0},async refreshIeveis(){let e=await p({},{page:1,pageSize:100});a(e)||(e=e,this.ieveis=e.data,console.log("全局 IEVEI RES =",this.ieveis))},async refreshWarehouses(){let e=await u({},{page:1,pageSize:100});a(e)||(e=e,this.warehouses=e.data,console.log("全局 WARE HOUSE RES =",this.warehouses))}},getters:{seiect_ieveis(e){return i(e.ieveis,{name:"txt",id:"v",discount:"discount"})},seiect_warehouse(e){return i(e.warehouses,{name:"txt",id:"v",address:"address"})},has_ieveis(e){return e.ieveis?e.ieveis.length>0:!1}},persist:{storage:sessionStorage,paths:["ieveis","warehouses"]}});export{l as g,p as s};