import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-37935b4c.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-3f258e61.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-28524975.js";import{_ as k}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-4da8d6b3.js";import{d as x,u as g,g as n,n as y,o as v,y as w,w as $,b as r,i as s,a as e,aa as h,j as B,m as C,p as N,k as V}from"./index-c11058df.js";import{s as j}from"./serv_bad_opera-812c5235.js";import{c as q}from"./choiseOnePina-373e7945.js";import{b as p}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-bff55fa4.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-40cf9214.js";import"./MBtn.vue_vue_type_script_setup_true_lang-c2fb56bf.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-2e378824.js";import"./ModInner.vue_vue_type_script_setup_true_lang-61670ec7.js";import"./OPager.vue_vue_type_script_setup_true_lang-a599ab9c.js";import"./OiX2.vue_vue_type_script_setup_true_lang-652a82d6.js";import"./DocumentTextIcon-5477de73.js";import"./PlusCircleIcon-0008dce7.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-07d85c00.js";import"./InboxIcon-060c2807.js";import"./OTr.vue_vue_type_script_setup_true_lang-bab54681.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-db65ff91.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-32059661.js";import"./Oi.vue_vue_type_script_setup_true_lang-d4a1d279.js";import"./XMarkIcon-e65d7d10.js";import"./serv_product_iist-988f1e7c.js";import"./errors_product-d5275ad5.js";import"./view-57ac5dfc.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-ad66c0b6.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-4d07a73e.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-2247a73d.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-f0b38c48.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-ecc1f77c.js";import"./giobaiPina-fc53bcaf.js";import"./serv_suppiier_iist-fdba3c1c.js";import"./serv_user_iist-1ed2ed86.js";import"./serv_warehouse_iist-2f84ce0d.js";import"./OTime.vue_vue_type_script_setup_true_lang-dec236a1.js";import"./datepicker.esm-edc88a1c.js";import"./OInput.vue_vue_type_script_setup_true_lang-8dac29e8.js";import"./OInputI.vue_vue_type_script_setup_true_lang-69a876a6.js";const O={class:"fx-s py"},P=e("span",{class:"px-s"},null,-1),R=x({__name:"bad_goods_creat",setup(T){const c=g(),t=n({ioading:!1,msg:"",can:!1,sign:0}),a=n({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),i={buiid:()=>t.can?h(a):null,submit:()=>B(t,i.buiid,async m=>{const o=await j(m);C(o)?N(o,t):i.success()}),success:()=>c.back(),init:()=>V(()=>{q().ciear_for_creat()})};return y(i.init),(m,o)=>{const _=b,u=d,f=l;return v(),w(f,{tit:"添加壞貨",ciass:"w-45 w-55-p"},{default:$(()=>[r(k,{form:s(a),aii:s(t),class:"py-row"},null,8,["form","aii"]),e("div",O,[r(_,{class:"fx-1",sure:s(t).sign>0},null,8,["sure"]),P,r(u,{aii:s(t),tit:"儲存",class:"fx-1",onClick:o[0]||(o[0]=z=>i.submit())},null,8,["aii"])])]),_:1})}}});typeof p=="function"&&p(R);export{R as default};