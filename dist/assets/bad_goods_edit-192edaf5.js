import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-0c536f16.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-30f4c823.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-893d6610.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-7713205d.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,aa as N,j as R,m as T,p as V,k as j,ab as q}from"./index-5f0df7b6.js";import{b as P}from"./serv_bad_opera-9ad2c67b.js";import{b as a}from"./badPina-bea2f616.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-32276824.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-44ff99fb.js";import"./MBtn.vue_vue_type_script_setup_true_lang-e82bd953.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-876d3e46.js";import"./ModInner.vue_vue_type_script_setup_true_lang-1e22062d.js";import"./OPager.vue_vue_type_script_setup_true_lang-d5005779.js";import"./OiX2.vue_vue_type_script_setup_true_lang-11d86539.js";import"./DocumentTextIcon-27f2d396.js";import"./PlusCircleIcon-e5452aa0.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-20d822ee.js";import"./InboxIcon-2363e6b8.js";import"./OTr.vue_vue_type_script_setup_true_lang-7b6eb346.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-c9141112.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-6837c5d8.js";import"./Oi.vue_vue_type_script_setup_true_lang-48e0b214.js";import"./XMarkIcon-be2b6569.js";import"./choiseOnePina-32cf75fd.js";import"./serv_product_iist-72d79500.js";import"./errors_product-d5275ad5.js";import"./view-19823675.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-fa003bb1.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-a28ab5e3.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-052e4c7c.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-648473e2.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-43f5ffd7.js";import"./giobaiPina-3cb52f62.js";import"./serv_suppiier_iist-fb176b79.js";import"./serv_user_iist-799c6106.js";import"./serv_warehouse_iist-3b16f78d.js";import"./OTime.vue_vue_type_script_setup_true_lang-8c9b595b.js";import"./datepicker.esm-3a96b17c.js";import"./OInput.vue_vue_type_script_setup_true_lang-3f5d5e02.js";import"./OInputI.vue_vue_type_script_setup_true_lang-f8c23b93.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
