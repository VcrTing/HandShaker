import{_ as $}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-0df7f2ac.js";import{a as g,b as x,c as B,d as I}from"./product_trs-ae94303e.js";import{i as k,f as V}from"./credit-3f7205a2.js";import{d as l,o as _,c as d,t as e,n as b,e as m,w as u,f as y,F as C,a as s,b as p,u as f,v as N}from"./index-3928a4f9.js";import{_ as F}from"./OTrPure.vue_vue_type_script_setup_true_lang-bdeb524e.js";import{_ as O}from"./OOpenPan.vue_vue_type_script_setup_true_lang-36264b48.js";import{v as P}from"./view-60076a03.js";import{pageProductInstockPina as q}from"./pageProductInstockPina-fd14593a.js";import{b as w}from"./net-tooi-fd704369.js";import{$ as D}from"./index-791bc20f.js";const E={class:"d-ib hand txt-pri ani-scaie-aii-x2 fs-n ani-softer"},T=l({__name:"OTabieOpera",props:{tit:{}},setup(r){return(n,o)=>(_(),d("div",E,e(n.tit),1))}}),L={class:"w-20"},S={class:"w-20"},W={class:"fx-1 fx-s"},j={class:"d-ib pr"},z={class:"fx-r"},hs=l({__name:"CoPidWarehouseTabie",props:{aii:{},one_of_edit:{}},emits:["view","transtock"],setup(r){const n=r;return b(()=>k(n.aii,g)),(o,c)=>{const a=T,t=$;return _(),m(t,{aii:o.aii,mini:!0},{default:u(()=>[(_(!0),d(C,null,y(o.one_of_edit.storehouse_info,(i,h)=>(_(),d("div",{class:"td",key:h},[s("div",L,e(i.storehouse_name),1),s("div",S,e(i.phone_no),1),s("div",W,[s("div",j,e(i.storehouse_address),1),s("div",z,[p(a,{onClick:v=>o.$emit("view",i),tit:"庫存詳情"},null,8,["onClick"]),p(a,{class:"pi-s",onClick:v=>o.$emit("transtock",i),tit:"調貨"},null,8,["onClick"])])])]))),128))]),_:1},8,["aii"])}}}),A=s("div",{class:"py-row"},null,-1),G={class:"tabie tabie-def"},H={class:"td"},J={class:"w-100"},vs=l({__name:"CoPidTotaiTabie",props:{one_of_edit:{}},setup(r){return(n,o)=>{const c=F;return _(),d("div",null,[A,s("div",G,[p(c,{trs:f(x)},null,8,["trs"]),s("div",H,[s("div",J,e(n.one_of_edit.total_broken_products),1)])])])}}}),K={class:"w-28 pr-s"},M={class:"w-18"},Q={class:"w-18"},R={class:"w-15"},U={class:"fx-1 fx-s"},X={class:"pi-s fx-1 fx-wp fx-r"},ws=l({__name:"ProduNewInstockTabie",props:{aii:{},one_of_edit:{}},setup(r){const n=r;return b(()=>k(n.aii,B)),(o,c)=>{const a=T,t=O,i=$;return _(),m(i,{aii:o.aii,mini:!0},{default:u(()=>[(_(),d(C,null,y([{}],(h,v)=>s("div",{class:"td",key:v},[s("div",K,e(f(P)(o.one_of_edit.new_restock_date)),1),s("div",M,e(o.one_of_edit.new_restock_price),1),s("div",Q,e(o.one_of_edit.new_lowest_price),1),s("div",R,e(o.one_of_edit.new_selling_price),1),s("div",U,[s("div",null,e(o.one_of_edit.total_broken_products),1),s("div",X,[p(t,{class:"pi-s",idx:111},{default:u(()=>[p(a,{tit:"入貨詳情"})]),_:1})])])])),64))]),_:1},8,["aii"])}}}),Y={class:"w-28 pr"},Z={class:"w-13"},ss={class:"w-14"},ts={class:"w-12"},is={class:"w-12"},os={class:"fx-1 fx-s"},es={class:"pi-s"},ns=l({__name:"CoPidInstockTabie",props:{many:{},aii:{}},emits:["view"],setup(r){return(n,o)=>{const c=T,a=$;return _(),m(a,{aii:n.aii,mini:!0},{default:u(()=>[(_(!0),d(C,null,y(n.many,(t,i)=>(_(),d("div",{class:"td",key:i},[s("div",Y,e(f(P)(t.restock_date)),1),s("div",Z,e(t.restock_price),1),s("div",ss,e(t.lowest_price),1),s("div",ts,e(t.selling_price),1),s("div",is,e(t.quantity),1),s("div",os,[s("div",null,e(t.supplier.name),1),s("div",es,[p(c,{onClick:h=>n.$emit("view",t),tit:"檢視"},null,8,["onClick"])])])]))),128))]),_:1},8,["aii"])}}}),$s=l({__name:"ProduInstockTabie",props:{aii:{},one_of_edit:{}},setup(r){const n=r,o=N(()=>{const a=n.one_of_edit.restocks;return a?(a.map(t=>{const i=t.supplier?t.supplier:{};return t.supplier=i.data?w.data(i):i,t}),a):[]}),c={view:a=>V(()=>{let t=a.restock_distribute;t=t||[],t.map(i=>(i.variation.data&&(i.variation=w.data(i.variation).id),i.storehouse.data&&(i.storehouse=w.data(i.storehouse).id),i)),q().save("inventory_and_variation_of_view",t),D(112)})};return b(()=>k(n.aii,I)),(a,t)=>{const i=ns;return _(),m(i,{aii:a.aii,many:f(o),onView:c.view},null,8,["aii","many","onView"])}}});export{ws as _,$s as a,vs as b,hs as c,T as d};
