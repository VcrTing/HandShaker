import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-37935b4c.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-3f258e61.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-28524975.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-4da8d6b3.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,aa as N,j as R,m as T,p as V,k as j,ab as q}from"./index-c11058df.js";import{b as P}from"./serv_bad_opera-812c5235.js";import{b as a}from"./badPina-e2404a72.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-bff55fa4.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-40cf9214.js";import"./MBtn.vue_vue_type_script_setup_true_lang-c2fb56bf.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-2e378824.js";import"./ModInner.vue_vue_type_script_setup_true_lang-61670ec7.js";import"./OPager.vue_vue_type_script_setup_true_lang-a599ab9c.js";import"./OiX2.vue_vue_type_script_setup_true_lang-652a82d6.js";import"./DocumentTextIcon-5477de73.js";import"./PlusCircleIcon-0008dce7.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-07d85c00.js";import"./InboxIcon-060c2807.js";import"./OTr.vue_vue_type_script_setup_true_lang-bab54681.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-db65ff91.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-32059661.js";import"./Oi.vue_vue_type_script_setup_true_lang-d4a1d279.js";import"./XMarkIcon-e65d7d10.js";import"./choiseOnePina-373e7945.js";import"./serv_product_iist-988f1e7c.js";import"./errors_product-d5275ad5.js";import"./view-57ac5dfc.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-ad66c0b6.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-4d07a73e.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-2247a73d.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-f0b38c48.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-ecc1f77c.js";import"./giobaiPina-fc53bcaf.js";import"./serv_suppiier_iist-fdba3c1c.js";import"./serv_user_iist-1ed2ed86.js";import"./serv_warehouse_iist-2f84ce0d.js";import"./OTime.vue_vue_type_script_setup_true_lang-dec236a1.js";import"./datepicker.esm-edc88a1c.js";import"./OInput.vue_vue_type_script_setup_true_lang-8dac29e8.js";import"./OInputI.vue_vue_type_script_setup_true_lang-69a876a6.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};