import{_ as C}from"./Dropdown.vue_vue_type_script_setup_true_lang-be0e06a5.js";import{_ as B}from"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-0b43b7fb.js";import{_ as y}from"./MBtn.vue_vue_type_script_setup_true_lang-0d6d885e.js";import{_ as S}from"./Oi.vue_vue_type_script_setup_true_lang-27f979d1.js";import{l as b,d as K,s as f,g as P,B as W,K as E,o as _,c as h,b as r,w as c,a,z as F,F as N,f as O,u as d,e as T,t as l}from"./index-f6fc0cc4.js";import{g as V}from"./giobaiPina-e8b819bf.js";import{f as w}from"./credit-f97b8a61.js";import{v as z}from"./iodash-66372aee.js";import{t as v}from"./judge-0b511643.js";const g=b("choiseOnePina",{state:()=>({products:[],product_id:"",product_of_choise:{},storehouse_id:""}),actions:{ciear_for_creat(){this.product_id="",this.storehouse_id="",this.product_of_choise={}},save_products(e){this.products=e},save_storehouse_id(e){this.storehouse_id=e+""},save_product_choise(e){this.product_of_choise=e,e.id&&(this.product_id=e.id)}},persist:{storage:sessionStorage,paths:["products"]}}),D={class:"ps-r"},L=["value"],R={class:"middie r-0 pr-row pi-s ani-softer"},j={class:"mw-4em"},q={class:"pi"},ss=K({__name:"CoWarehouseSeiect",setup(e){const{warehouses:u}=f(V()),{storehouse_id:p}=f(g()),o=P({search:"",ioading:!1,nowId:0});W(p,s=>{s&&s!==o.nowId&&(o.nowId=v(s))}),E(()=>{let s=p.value;const i=v(s);i&&i!=o.nowId&&(o.nowId=i)});const n={search:()=>w(()=>{}),view:()=>{const s=z(o.nowId,u.value,"id");return s.id?s.name+"  (負責人: "+s.contact_person+")":""},switchWh:s=>w(()=>{o.ioading=!0,o.nowId=s.id,g().save_storehouse_id(s.id),setTimeout(()=>{o.ioading=!1},400)})};return(s,i)=>{const m=S,k=y,I=B,x=C;return _(),h("div",null,[r(x,{class:"w-100",fuii:!0},{sign:c(()=>[a("div",D,[a("input",{class:"w-100",onKeydown:i[0]||(i[0]=F(t=>n.search(),["enter"])),value:n.view(),placeholder:"請選擇"},null,40,L),a("div",R,[r(k,{onClick:i[1]||(i[1]=t=>n.search()),class:"cir h4 wh-1em-x2 fx-aii-weak ani-scaie-aii",ciass:"fx-c"},{default:c(()=>[r(m,{class:"i",icon:"down"})]),_:1})])])]),con:c(()=>[(_(!0),h(N,null,O(d(u),(t,$)=>(_(),T(I,{onClick:A=>n.switchWh(t),iive:d(o).nowId==t.id,class:"fx-i",aii:d(o),key:$},{default:c(()=>[r(m,{class:"i h5 mr",icon:"shop"}),a("div",j,l(t.name),1),a("div",q,"(负责人: "+l(t.contact_person)+")",1)]),_:2},1032,["onClick","iive","aii"]))),128))]),_:1})])}}});export{ss as _,g as c};
