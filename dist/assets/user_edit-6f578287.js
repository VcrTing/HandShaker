import{_ as d}from"./IayoutPan.vue_vue_type_script_setup_true_lang-741794d9.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-8aae21dd.js";import{_ as h}from"./OBtnBack.vue_vue_type_script_setup_true_lang-667d03db.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-ba77dd3f.js";import{d as g,u as k,s as v,K as x,g as c,n as y,o as $,y as B,w as C,b as e,i as r,a as p,a9 as P,aa as j,j as N,k as R,m as T,p as V,ab as A}from"./index-09e4faf1.js";import{s as K}from"./serv_user_opera-42b83bd9.js";import{c as O}from"./choiseOnePina-da95e8f4.js";import{g as U}from"./giobaiPina-89ea46f2.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-f6c4c8a9.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-6be86add.js";import"./MBtn.vue_vue_type_script_setup_true_lang-4ee5c348.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-cb2c62f4.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-9bf1a9bb.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-cd28f1a2.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-299f6008.js";import"./Oi.vue_vue_type_script_setup_true_lang-aa414fbe.js";import"./DocumentTextIcon-87e5edca.js";import"./XMarkIcon-6fe6304e.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-5ee514cc.js";import"./OInput.vue_vue_type_script_setup_true_lang-97b49a34.js";import"./verify-18da9a0d.js";import"./serv_iabei_iist-ea6b5f1f.js";import"./serv_suppiier_iist-dfdb1401.js";import"./serv_user_iist-b24f1c96.js";import"./serv_warehouse_iist-77bce326.js";const q={class:"fx-s py"},z=p("span",{class:"px-s"},null,-1),D=g({__name:"user_edit",setup(E){const n=k(),{one_of_edit:m}=v(x()),s=c({ioading:!1,msg:"",can:!1,sign:-1}),i=c({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),a={buiid:()=>{if(!P(["name","email","password","storehouse"],i))return null;const o={...i};return o.phone_no=o.phone_no+"",s.can?j(o):null},submit:()=>N(s,a.buiid,async o=>{const t=await K(o,m.value.id);T(t)?V(t,s):a.success()}),success:async()=>{n.back(),await U().refreshUsers()},init:()=>R(()=>{A(m.value,i)||n.back(),s.sign=0,O().save_storehouse_id(i.storehouse)})};return y(a.init),(o,t)=>{const u=h,f=b,l=d;return $(),B(l,{tit:"編輯管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:C(()=>[e(w,{form:r(i),aii:r(s),edit:!0,class:"py-row"},null,8,["form","aii"]),p("div",q,[e(u,{class:"fx-1",sure:r(s).sign>0},null,8,["sure"]),z,e(f,{class:"fx-1",aii:r(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=F=>a.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
