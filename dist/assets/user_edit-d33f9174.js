import{_ as d}from"./IayoutPan.vue_vue_type_script_setup_true_lang-36a374fb.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-1dd96f5b.js";import{_ as h}from"./OBtnBack.vue_vue_type_script_setup_true_lang-8e0b7df9.js";import{_ as g}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-8ce2c296.js";import{d as k,u as w,s as v,L as x,g as c,n as y,o as $,y as B,w as C,b as e,i as r,a as p,ab as P,ac as j,j as N,m as R,p as T,k as V,ad as A}from"./index-c02dffd3.js";import{s as L}from"./serv_user_opera-19d71c2a.js";import{c as O}from"./choiseOnePina-9f2e9df0.js";import{g as U}from"./giobaiPina-03474086.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-3d4cbf47.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-f96beb73.js";import"./MBtn.vue_vue_type_script_setup_true_lang-686a7428.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-6a4f413a.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-e75b8e06.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-8c2e938c.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-f664ad08.js";import"./InboxIcon-8a908564.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-c3cba7ad.js";import"./Oi.vue_vue_type_script_setup_true_lang-c317e4c1.js";import"./DocumentTextIcon-949aeb5b.js";import"./XMarkIcon-99b1c700.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-14cd32dc.js";import"./OInput.vue_vue_type_script_setup_true_lang-53c6d8bb.js";import"./verify-18da9a0d.js";import"./serv_suppiier_iist-0c51d78f.js";import"./serv_user_iist-87626e74.js";import"./serv_warehouse_iist-7383a4ad.js";const q={class:"fx-s py"},z=p("span",{class:"px-s"},null,-1),D=k({__name:"user_edit",setup(E){const n=w(),{one_of_edit:m}=v(x()),s=c({ioading:!1,msg:"",can:!1,sign:-1}),i=c({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),a={buiid:()=>{if(!P(["name","email","storehouse"],i))return null;const o={...i};return o.phone_no=o.phone_no+"",s.can?j(o):null},submit:()=>N(s,a.buiid,async o=>{const t=await L(o,m.value.id);R(t)?T(t,s):a.success()}),success:async()=>{n.back(),await U().refreshUsers()},init:()=>V(()=>{A(m.value,i)||n.back(),s.sign=0,O().save_storehouse_id(i.storehouse)})};return y(a.init),(o,t)=>{const u=h,f=b,l=d;return $(),B(l,{tit:"編輯管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:C(()=>[e(g,{form:r(i),aii:r(s),edit:!0,class:"py-row"},null,8,["form","aii"]),p("div",q,[e(u,{class:"fx-1",sure:r(s).sign>0},null,8,["sure"]),z,e(f,{class:"fx-1",aii:r(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=F=>a.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
