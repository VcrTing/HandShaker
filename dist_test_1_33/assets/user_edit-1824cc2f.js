import{_ as d}from"./IayoutPan.vue_vue_type_script_setup_true_lang-fd428e63.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-6875b8de.js";import{_ as h}from"./OBtnBack.vue_vue_type_script_setup_true_lang-f635f568.js";import{_ as g}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-c26e39e2.js";import{d as k,u as w,s as v,L as x,g as c,n as y,o as $,y as B,w as C,b as e,i as r,a as p,ab as P,ac as j,j as N,m as R,p as T,k as V,ad as A}from"./index-3f210c36.js";import{s as L}from"./serv_user_opera-1743c850.js";import{c as O}from"./choiseOnePina-af2d5666.js";import{g as U}from"./giobaiPina-50220297.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-af76cdf9.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-cd7e445b.js";import"./MBtn.vue_vue_type_script_setup_true_lang-571d1e55.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-8bdccfe8.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-bf489baf.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-b79e0347.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-8251cf68.js";import"./InboxIcon-acbdb2a0.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-ff5ca3e1.js";import"./Oi.vue_vue_type_script_setup_true_lang-79b15816.js";import"./DocumentTextIcon-6028e20d.js";import"./XMarkIcon-46811c9d.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-05387565.js";import"./OInput.vue_vue_type_script_setup_true_lang-8ac22f88.js";import"./verify-18da9a0d.js";import"./serv_suppiier_iist-9d1ccffd.js";import"./serv_user_iist-508f244f.js";import"./serv_warehouse_iist-40d2e341.js";const q={class:"fx-s py"},z=p("span",{class:"px-s"},null,-1),D=k({__name:"user_edit",setup(E){const n=w(),{one_of_edit:m}=v(x()),s=c({ioading:!1,msg:"",can:!1,sign:-1}),i=c({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),a={buiid:()=>{if(!P(["name","email","storehouse"],i))return null;const o={...i};return o.phone_no=o.phone_no+"",s.can?j(o):null},submit:()=>N(s,a.buiid,async o=>{const t=await L(o,m.value.id);R(t)?T(t,s):a.success()}),success:async()=>{n.back(),await U().refreshUsers()},init:()=>V(()=>{A(m.value,i)||n.back(),s.sign=0,O().save_storehouse_id(i.storehouse)})};return y(a.init),(o,t)=>{const u=h,f=b,l=d;return $(),B(l,{tit:"編輯管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:C(()=>[e(g,{form:r(i),aii:r(s),edit:!0,class:"py-row"},null,8,["form","aii"]),p("div",q,[e(u,{class:"fx-1",sure:r(s).sign>0},null,8,["sure"]),z,e(f,{class:"fx-1",aii:r(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=F=>a.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
