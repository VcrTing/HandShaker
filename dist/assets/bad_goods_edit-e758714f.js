import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-1a587636.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-23565353.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-276eca50.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-c7b60b7a.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,aa as N,j as R,m as T,p as V,k as j,ab as q}from"./index-d70d8c7f.js";import{b as P}from"./serv_bad_opera-eea33569.js";import{b as a}from"./badPina-24b85479.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-2dd1b368.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-4da0897d.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6b8b253f.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-fe55c903.js";import"./ModInner.vue_vue_type_script_setup_true_lang-74820c1b.js";import"./OPager.vue_vue_type_script_setup_true_lang-6790928c.js";import"./OiX2.vue_vue_type_script_setup_true_lang-eabbb5fd.js";import"./DocumentTextIcon-90c95568.js";import"./PlusCircleIcon-96359f44.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-a0330491.js";import"./InboxIcon-3ce72c36.js";import"./OTr.vue_vue_type_script_setup_true_lang-a26f0019.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-d5cdda53.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-d8c0e65d.js";import"./Oi.vue_vue_type_script_setup_true_lang-40f83607.js";import"./XMarkIcon-bb061af1.js";import"./choiseOnePina-59c2ea43.js";import"./serv_product_iist-1de6728a.js";import"./errors_product-d5275ad5.js";import"./view-3ce4e1d5.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-e2b1aa44.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-a9318c7a.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-ab6c0427.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-55a0f705.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-0184e3ad.js";import"./giobaiPina-fe26a8db.js";import"./serv_suppiier_iist-c0c8a6bd.js";import"./serv_user_iist-b50e689f.js";import"./serv_warehouse_iist-8aae149f.js";import"./OTime.vue_vue_type_script_setup_true_lang-a0e9100e.js";import"./datepicker.esm-cd618bfe.js";import"./OInput.vue_vue_type_script_setup_true_lang-4873cbdf.js";import"./OInputI.vue_vue_type_script_setup_true_lang-22b5b7c8.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
