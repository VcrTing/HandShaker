import{_ as d}from"./IayoutPan.vue_vue_type_script_setup_true_lang-cc5e39ac.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-f54c7d24.js";import{_ as h}from"./OBtnBack.vue_vue_type_script_setup_true_lang-e1479c3e.js";import{_ as g}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-12334a91.js";import{d as k,u as w,s as v,K as x,g as c,n as y,o as $,y as B,w as C,b as r,i as e,a as p,a9 as P,aa as j,j as N,m as R,p as T,k as V,ab as A}from"./index-672a1f88.js";import{s as K}from"./serv_user_opera-fd62eaef.js";import{c as O}from"./choiseOnePina-f348325c.js";import{g as U}from"./giobaiPina-7cff4145.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-d1da7c5c.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-e12037e7.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b4a4fbc5.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-eef87c8a.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-1d56ca32.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-114c66bc.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-019616ba.js";import"./Oi.vue_vue_type_script_setup_true_lang-dc5c9087.js";import"./DocumentTextIcon-b6fcc047.js";import"./XMarkIcon-ac125545.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-6e6de79a.js";import"./OInput.vue_vue_type_script_setup_true_lang-57a565f6.js";import"./verify-18da9a0d.js";import"./serv_iabei_iist-b5748f21.js";import"./serv_suppiier_iist-fd54fad2.js";import"./serv_user_iist-87963fe9.js";import"./serv_warehouse_iist-ae7fc9ef.js";const q={class:"fx-s py"},z=p("span",{class:"px-s"},null,-1),D=k({__name:"user_edit",setup(E){const n=w(),{one_of_edit:m}=v(x()),s=c({ioading:!1,msg:"",can:!1,sign:-1}),i=c({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),a={buiid:()=>{if(!P(["name","email","storehouse"],i))return null;const o={...i};return o.phone_no=o.phone_no+"",s.can?j(o):null},submit:()=>N(s,a.buiid,async o=>{const t=await K(o,m.value.id);R(t)?T(t,s):a.success()}),success:async()=>{n.back(),await U().refreshUsers()},init:()=>V(()=>{A(m.value,i)||n.back(),s.sign=0,O().save_storehouse_id(i.storehouse)})};return y(a.init),(o,t)=>{const u=h,f=b,l=d;return $(),B(l,{tit:"編輯管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:C(()=>[r(g,{form:e(i),aii:e(s),edit:!0,class:"py-row"},null,8,["form","aii"]),p("div",q,[r(u,{class:"fx-1",sure:e(s).sign>0},null,8,["sure"]),z,r(f,{class:"fx-1",aii:e(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=F=>a.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
