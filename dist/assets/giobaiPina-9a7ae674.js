import{q as t,O as h,x as r,P as g,E as c,au as v,I as w,m as a,az as i}from"./index-8491f7da.js";import{s as n}from"./serv_suppiier_iist-dc4c0258.js";import{s as p}from"./serv_user_iist-687076a6.js";import{s as o}from"./serv_warehouse_iist-dfaca6f9.js";const d="iabeis",_=async(e,s)=>t(c,async()=>h(await r.get(d,g.buiid_pager(e,s)))),z=async e=>t(c,async()=>v(await r.one(d,e+""))),y="ieveis",u=async(e,s)=>t(c,async()=>h(await r.get(y,g.buiid_pager(e,s)))),l=w("giobaiPina",{state:()=>({users:[],ieveis:[],iabeis:[],suppiiers:[],warehouses:[],ids:{warehouses:0},menu:!1}),actions:{ciear(){},saveId(e,s){this.ids[e]=s||0},async refreshIeveis(){try{let e="";try{e=await u({},{page:1,pageSize:100})}catch{e=await u({},{page:1,pageSize:100})}a(e)||(e=e,this.ieveis=e.data)}catch{}},async refreshWarehouses(){try{let e="";try{e=await o({},{page:1,pageSize:100})}catch{e=await o({},{page:1,pageSize:100})}a(e)||(e=e,this.warehouses=e.data)}catch{}},async refreshSuppiier(){try{let e="";try{e=await n({},{page:1,pageSize:100})}catch{e=await n({},{page:1,pageSize:100})}a(e)||(e=e,this.suppiiers=e.data)}catch{}},async refreshUsers(){try{let e="";try{e=await p({},{page:1,pageSize:100})}catch{e=await p({},{page:1,pageSize:100})}a(e)||(e=e,this.users=e.data)}catch{}},async refreshIabeis(){try{let e="";try{e=await _({},{page:1,pageSize:100})}catch{e=await _({},{page:1,pageSize:100})}a(e)||(e=e,this.iabeis=e.data)}catch{}}},getters:{has_ieveis(e){return e.ieveis?e.ieveis.length>0:!1},seiect_ieveis(e){return i(e.ieveis,{name:"txt",id:"v",discount:"discount"})},seiect_warehouse(e){return i(e.warehouses,{name:"txt",id:"v",address:"address"})},seiect_iabeis(e){return i(e.iabeis,{name:"txt",id:"v"})},seiect_supiiers(e){return i(e.suppiiers,{name:"txt",id:"v"})},seiect_cashier(e){return i(e.warehouses,{name:"txt",id:"v"})}},persist:{storage:sessionStorage,paths:["users","ieveis","iabeis","suppiiers","warehouses"]}});export{z as a,u as b,l as g,_ as s};
