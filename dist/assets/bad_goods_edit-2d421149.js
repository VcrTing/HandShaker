import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-7a02ced0.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-8855a42d.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-c3fda284.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-e29a98a8.js";import{d as x,s as h,u as w,g as c,n as y,o as $,z as B,w as C,b as m,i as r,a as u,j as N,m as R,p as T,k as V,ab as j}from"./index-1c4854d6.js";import{b as q}from"./serv_bad_opera-818dc475.js";import{b as a}from"./badPina-8631b4f3.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-da7d1b6c.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-09dac1f9.js";import"./MBtn.vue_vue_type_script_setup_true_lang-7421d565.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-f77d0368.js";import"./ModInner.vue_vue_type_script_setup_true_lang-7b74d979.js";import"./OPager.vue_vue_type_script_setup_true_lang-70bc572c.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-54cc45ed.js";import"./OTr.vue_vue_type_script_setup_true_lang-01fa8e91.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-99078e95.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-971d8f3d.js";import"./Oi.vue_vue_type_script_setup_true_lang-150d8ca2.js";import"./XMarkIcon-c017f066.js";import"./choiseOnePina-9fbd7469.js";import"./serv_product_iist-cc1a5cd7.js";import"./errors_product-174667b5.js";import"./view-c92e9bc2.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-89c54e8a.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-06cd3d45.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-4275b1eb.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-1f32d0e2.js";import"./giobaiPina-6c5d2147.js";import"./serv_iabei_iist-b6673396.js";import"./serv_suppiier_iist-7db89bfd.js";import"./serv_user_iist-bde3c35f.js";import"./serv_warehouse_iist-5aa49886.js";import"./OTime.vue_vue_type_script_setup_true_lang-1a3bcec8.js";import"./datepicker.esm-78fc56ae.js";import"./OInput.vue_vue_type_script_setup_true_lang-ec4fb52b.js";import"./OInputI.vue_vue_type_script_setup_true_lang-be93c43f.js";const z={class:"fx-s py"},P=u("span",{class:"px-s"},null,-1),A=x({__name:"bad_goods_edit",setup(D){const{one_of_edit:n}=h(a()),p=w(),o=c({ioading:!1,msg:"",can:!1,sign:0}),e=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?e:null,submit:()=>N(o,s.buiid,async t=>{const i=await q(t,n.value.id);R(i)?T(i,o):s.success()}),success:()=>p.back(),init:()=>V(()=>{const t=n.value;j(t,e)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return y(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[m(g,{form:r(e),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[m(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),P,m(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=E=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(A);export{A as default};
