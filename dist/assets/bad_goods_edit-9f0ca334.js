import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-f634672e.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-8bf7b1f8.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-b7f892d5.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-c6a9cb36.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,aa as N,j as R,m as T,p as V,k as j,ab as q}from"./index-4cfd176e.js";import{b as P}from"./serv_bad_opera-1588021c.js";import{b as a}from"./badPina-c57bd96c.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-be4f4b0b.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-25fee3d6.js";import"./MBtn.vue_vue_type_script_setup_true_lang-67a47524.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-c36f66b5.js";import"./ModInner.vue_vue_type_script_setup_true_lang-b2ccd33b.js";import"./OPager.vue_vue_type_script_setup_true_lang-42f21f84.js";import"./OiX2.vue_vue_type_script_setup_true_lang-1071dec2.js";import"./DocumentTextIcon-39d29958.js";import"./PlusCircleIcon-b3af98a4.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-8d9268b0.js";import"./InboxIcon-7a367a61.js";import"./OTr.vue_vue_type_script_setup_true_lang-4958377c.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-84f77c84.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-d17e3e4e.js";import"./Oi.vue_vue_type_script_setup_true_lang-e89faeb3.js";import"./XMarkIcon-6c6dd51a.js";import"./choiseOnePina-3f2f462f.js";import"./serv_product_iist-a4c9841b.js";import"./errors_product-d5275ad5.js";import"./view-14b7197e.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-1b401e01.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-ef17b606.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-3d239409.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-2e0511a7.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-4461ee34.js";import"./giobaiPina-89a9d613.js";import"./serv_suppiier_iist-b1db5e85.js";import"./serv_user_iist-7343f94c.js";import"./serv_warehouse_iist-3ee7efca.js";import"./OTime.vue_vue_type_script_setup_true_lang-68999102.js";import"./datepicker.esm-c5990eef.js";import"./OInput.vue_vue_type_script_setup_true_lang-7781c39a.js";import"./OInputI.vue_vue_type_script_setup_true_lang-eb1d089d.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
