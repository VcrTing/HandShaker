import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-6fe89481.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-2883f20a.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-f465e711.js";import{_ as g}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-29de9c3e.js";import{d as x,s as y,u as h,g as c,n as w,o as $,y as B,w as C,b as e,i as r,a as u,aa as N,j as R,m as T,p as V,k as j,ab as q}from"./index-a2bf0a06.js";import{b as P}from"./serv_bad_opera-2f02e880.js";import{b as a}from"./badPina-2cc32413.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-4f8d8265.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-98e94907.js";import"./MBtn.vue_vue_type_script_setup_true_lang-1989d4d6.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-719d48ed.js";import"./ModInner.vue_vue_type_script_setup_true_lang-70706e19.js";import"./OPager.vue_vue_type_script_setup_true_lang-4ef8a970.js";import"./OiX2.vue_vue_type_script_setup_true_lang-0947712d.js";import"./DocumentTextIcon-37f46d59.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-b8b36d5c.js";import"./OTr.vue_vue_type_script_setup_true_lang-5c955284.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-6d28f56c.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-a4a47880.js";import"./Oi.vue_vue_type_script_setup_true_lang-65b03e90.js";import"./XMarkIcon-e05b1044.js";import"./choiseOnePina-a718b564.js";import"./serv_product_iist-2068c778.js";import"./errors_product-174667b5.js";import"./view-c95e6efb.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-01a3c0b2.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-3029d411.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-32c479c2.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-e8e1ddc6.js";import"./giobaiPina-5b70adbf.js";import"./serv_iabei_iist-319cbf99.js";import"./serv_suppiier_iist-300bbfc1.js";import"./serv_user_iist-536fccb4.js";import"./serv_warehouse_iist-636372d3.js";import"./OTime.vue_vue_type_script_setup_true_lang-7cc870cb.js";import"./datepicker.esm-0190a21c.js";import"./OInput.vue_vue_type_script_setup_true_lang-465c0573.js";import"./OInputI.vue_vue_type_script_setup_true_lang-6da5a800.js";const z={class:"fx-s py"},A=u("span",{class:"px-s"},null,-1),D=x({__name:"bad_goods_edit",setup(E){const{one_of_edit:n}=y(a()),p=h(),o=c({ioading:!1,msg:"",can:!1,sign:0}),m=c({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),s={buiid:()=>o.can?N(m):null,submit:()=>R(o,s.buiid,async t=>{const i=await P(t,n.value.id);T(i)?V(i,o):s.success()}),success:()=>p.back(),init:()=>j(()=>{const t=n.value;q(t,m)?(a().save("product_id",t.product.id),a().save("product_of_choise",t.product),a().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return w(s.init),(t,i)=>{const f=k,d=v,l=b;return $(),B(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:C(()=>[e(g,{form:r(m),aii:r(o),class:"py-row"},null,8,["form","aii"]),u("div",z,[e(f,{class:"fx-1",sure:r(o).sign>0},null,8,["sure"]),A,e(d,{aii:r(o),tit:"儲存",class:"fx-1",onClick:i[0]||(i[0]=F=>s.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
