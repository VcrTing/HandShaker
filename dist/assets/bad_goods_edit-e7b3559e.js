import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-11b413fb.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-4fb529e9.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-590997c2.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-93bc4005.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,aa as N,j as R,m as T,p as V,k as j,ab as q}from"./index-52859a34.js";import{b as P}from"./serv_bad_opera-5e759cff.js";import{b as a}from"./badPina-22d9e535.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-819bd7b4.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-dbb2dd22.js";import"./MBtn.vue_vue_type_script_setup_true_lang-fb2a8d59.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-ddcbc3ec.js";import"./ModInner.vue_vue_type_script_setup_true_lang-7067d87c.js";import"./OPager.vue_vue_type_script_setup_true_lang-6291a83a.js";import"./OiX2.vue_vue_type_script_setup_true_lang-2021770e.js";import"./DocumentTextIcon-c82872e4.js";import"./PlusCircleIcon-9720f062.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-e40e0185.js";import"./InboxIcon-321c0855.js";import"./OTr.vue_vue_type_script_setup_true_lang-7c13b937.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-b00f3e72.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-64c09755.js";import"./Oi.vue_vue_type_script_setup_true_lang-d20432e0.js";import"./XMarkIcon-a0f0f6cb.js";import"./choiseOnePina-bf55e597.js";import"./serv_product_iist-5ac338e7.js";import"./errors_product-d5275ad5.js";import"./view-028bf5b9.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-80d0a2be.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-0a68d74f.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-9c09c54f.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-25ab3893.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-fff7dfad.js";import"./giobaiPina-4b9548b8.js";import"./serv_suppiier_iist-7b595e13.js";import"./serv_user_iist-306af288.js";import"./serv_warehouse_iist-c9afc5f5.js";import"./OTime.vue_vue_type_script_setup_true_lang-60442ecc.js";import"./datepicker.esm-9eb9df5f.js";import"./OInput.vue_vue_type_script_setup_true_lang-f0925524.js";import"./OInputI.vue_vue_type_script_setup_true_lang-b90ea687.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
