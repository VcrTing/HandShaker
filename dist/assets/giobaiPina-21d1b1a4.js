import{s as r}from"./serv_iabei_iist-f7c5d0cf.js";import{q as o,Q as h,x as _,R as u,E as g,I as d,m as a,aw as i}from"./index-58be21f4.js";import{s as t}from"./serv_suppiier_iist-feef36de.js";import{s as c}from"./serv_user_iist-ed5a175f.js";import{s as p}from"./serv_warehouse_iist-2114e8b4.js";const v="ieveis",n=async(e,s)=>o(g,async()=>h(await _.get(v,u.buiid_pager(e,s)))),b=d("giobaiPina",{state:()=>({users:[],ieveis:[],iabeis:[],suppiiers:[],warehouses:[],ids:{warehouses:0},menu:!1}),actions:{ciear(){},saveId(e,s){this.ids[e]=s||0},async refreshIeveis(){try{let e="";try{e=await n({},{page:1,pageSize:100})}catch{e=await n({},{page:1,pageSize:100})}a(e)||(e=e,this.ieveis=e.data)}catch{}},async refreshWarehouses(){try{let e="";try{e=await p({},{page:1,pageSize:100})}catch{e=await p({},{page:1,pageSize:100})}a(e)||(e=e,this.warehouses=e.data)}catch{}},async refreshSuppiier(){try{let e="";try{e=await t({},{page:1,pageSize:100})}catch{e=await t({},{page:1,pageSize:100})}a(e)||(e=e,this.suppiiers=e.data)}catch{}},async refreshUsers(){try{let e="";try{e=await c({},{page:1,pageSize:100})}catch{e=await c({},{page:1,pageSize:100})}a(e)||(e=e,this.users=e.data)}catch{}},async refreshIabeis(){try{let e="";try{e=await r({},{page:1,pageSize:100})}catch{e=await r({},{page:1,pageSize:100})}a(e)||(e=e,this.iabeis=e.data)}catch{}}},getters:{has_ieveis(e){return e.ieveis?e.ieveis.length>0:!1},seiect_ieveis(e){return i(e.ieveis,{name:"txt",id:"v",discount:"discount"})},seiect_warehouse(e){return i(e.warehouses,{name:"txt",id:"v",address:"address"})},seiect_iabeis(e){return i(e.iabeis,{name:"txt",id:"v"})},seiect_supiiers(e){return i(e.suppiiers,{name:"txt",id:"v"})},seiect_cashier(e){return i(e.warehouses,{name:"txt",id:"v"})}},persist:{storage:sessionStorage,paths:["users","ieveis","iabeis","suppiiers","warehouses"]}});export{b as g,n as s};
