import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-36a374fb.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-1dd96f5b.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-8e0b7df9.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-d7468b21.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,ac as N,j as R,m as T,p as V,k as j,ad as q}from"./index-c02dffd3.js";import{b as P}from"./serv_bad_opera-fff3044a.js";import{b as a}from"./badPina-18bdce70.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-3d4cbf47.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-f96beb73.js";import"./MBtn.vue_vue_type_script_setup_true_lang-686a7428.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-c2956493.js";import"./ModInner.vue_vue_type_script_setup_true_lang-ec02f4d3.js";import"./OPager.vue_vue_type_script_setup_true_lang-510f0770.js";import"./OiX2.vue_vue_type_script_setup_true_lang-e940ced6.js";import"./DocumentTextIcon-949aeb5b.js";import"./PlusCircleIcon-f4e496c4.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-e1a1f6ff.js";import"./InboxIcon-8a908564.js";import"./OTr.vue_vue_type_script_setup_true_lang-bd0f3b05.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-59af656e.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-cad887a9.js";import"./Oi.vue_vue_type_script_setup_true_lang-c317e4c1.js";import"./XMarkIcon-99b1c700.js";import"./choiseOnePina-9f2e9df0.js";import"./serv_product_iist-912b790e.js";import"./errors_product-d5275ad5.js";import"./view-91223e10.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-e75b8e06.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-8c2e938c.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-f664ad08.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-c3cba7ad.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-14cd32dc.js";import"./giobaiPina-03474086.js";import"./serv_suppiier_iist-0c51d78f.js";import"./serv_user_iist-87626e74.js";import"./serv_warehouse_iist-7383a4ad.js";import"./OTime.vue_vue_type_script_setup_true_lang-5246e0f8.js";import"./datepicker.esm-193264dc.js";import"./OInput.vue_vue_type_script_setup_true_lang-53c6d8bb.js";import"./OInputI.vue_vue_type_script_setup_true_lang-8917e070.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
