import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-36a374fb.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-1dd96f5b.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-8e0b7df9.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-8ce2c296.js";import{d as g,g as e,u as h,o as x,y,w as k,b as n,i as a,a as p,ab as v,T as $,ac as B,j as C,m as j,p as N}from"./index-c02dffd3.js";import{a as V}from"./serv_user_opera-19d71c2a.js";import{g as A}from"./giobaiPina-03474086.js";import{b as m}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-3d4cbf47.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-f96beb73.js";import"./MBtn.vue_vue_type_script_setup_true_lang-686a7428.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-6a4f413a.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-e75b8e06.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-8c2e938c.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-f664ad08.js";import"./InboxIcon-8a908564.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-c3cba7ad.js";import"./Oi.vue_vue_type_script_setup_true_lang-c317e4c1.js";import"./DocumentTextIcon-949aeb5b.js";import"./XMarkIcon-99b1c700.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-14cd32dc.js";import"./choiseOnePina-9f2e9df0.js";import"./OInput.vue_vue_type_script_setup_true_lang-53c6d8bb.js";import"./verify-18da9a0d.js";import"./serv_suppiier_iist-0c51d78f.js";import"./serv_user_iist-87626e74.js";import"./serv_warehouse_iist-7383a4ad.js";const P={class:"fx-s py ani-softer"},R=p("span",{class:"px-s"},null,-1),T=g({__name:"user_creat",setup(U){const s=e({ioading:!1,msg:"",can:!1,sign:0}),i=e({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),c=h(),r={buiid:()=>{if(!v(["name","email","password","storehouse"],i))return i.password.length<6&&$("密碼必須大於6位數！！！"),null;const o={...i};return o.phone_no=o.phone_no+"",s.can?B(o):null},submit:()=>C(s,r.buiid,async o=>{const t=await V(o);j(t)?N(t,s):r.success()}),success:async()=>{c.back(),await A().refreshUsers()}};return(o,t)=>{const _=b,u=d,f=l;return x(),y(f,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:k(()=>[n(w,{form:a(i),aii:a(s),class:"py-row"},null,8,["form","aii"]),p("div",P,[n(_,{class:"fx-1",sure:a(s).sign>0},null,8,["sure"]),R,n(u,{class:"fx-1",aii:a(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=q=>r.submit())},null,8,["aii"])])]),_:1})}}});typeof m=="function"&&m(T);export{T as default};
