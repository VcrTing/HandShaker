import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-1b7cd743.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-67ae0c87.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-1fe795c0.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-5e1ec4d3.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,ac as N,j as R,m as T,p as V,k as j,ad as q}from"./index-201c0874.js";import{b as P}from"./serv_bad_opera-d93a4421.js";import{b as a}from"./badPina-a62fb6a1.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-69e90988.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0f8501df.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b84ff4f4.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-e9b82eb3.js";import"./ModInner.vue_vue_type_script_setup_true_lang-7153c9ee.js";import"./OPager.vue_vue_type_script_setup_true_lang-bae9dcc0.js";import"./OiX2.vue_vue_type_script_setup_true_lang-5fabdf38.js";import"./DocumentTextIcon-f47521fa.js";import"./PlusCircleIcon-9708bff7.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-f6633356.js";import"./InboxIcon-34893ca9.js";import"./OTr.vue_vue_type_script_setup_true_lang-2656d8f6.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-84f51eba.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-76ac8f23.js";import"./Oi.vue_vue_type_script_setup_true_lang-5e235aff.js";import"./XMarkIcon-3ad9bd72.js";import"./choiseOnePina-7ef60921.js";import"./serv_product_iist-9c92d697.js";import"./errors_product-d5275ad5.js";import"./view-3440597d.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-0cd746f4.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-e1a30191.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-d1075891.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-1f613c21.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-bac35c61.js";import"./giobaiPina-2c5354ac.js";import"./serv_suppiier_iist-5090279b.js";import"./serv_user_iist-fb269d0b.js";import"./serv_warehouse_iist-600b038b.js";import"./OTime.vue_vue_type_script_setup_true_lang-3d6964b5.js";import"./datepicker.esm-bde8c337.js";import"./OInput.vue_vue_type_script_setup_true_lang-afe5a61c.js";import"./OInputI.vue_vue_type_script_setup_true_lang-5ec07afd.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
