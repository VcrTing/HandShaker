import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-5d9ee0df.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-e6ba3841.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-98a80d05.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-6766d053.js";import{d as g,g as e,u as h,o as x,y,w as k,b as n,i as a,a as p,a9 as v,T as $,aa as B,j as C,m as j,p as N}from"./index-5bac116f.js";import{a as V}from"./serv_user_opera-3042c08f.js";import{g as A}from"./giobaiPina-d1e2a476.js";import{b as m}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-6ce3bd98.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-249f1401.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6cc77674.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-3a0e5ca1.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-a042ce26.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-81425072.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-a4db2cc7.js";import"./InboxIcon-f92977c9.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-ab504e38.js";import"./Oi.vue_vue_type_script_setup_true_lang-1b392a3b.js";import"./DocumentTextIcon-4647a903.js";import"./XMarkIcon-bf060d06.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-3880b0bf.js";import"./choiseOnePina-9a1f3e8a.js";import"./OInput.vue_vue_type_script_setup_true_lang-6e613b51.js";import"./verify-18da9a0d.js";import"./serv_iabei_iist-c3ee04ed.js";import"./serv_suppiier_iist-20836082.js";import"./serv_user_iist-93870098.js";import"./serv_warehouse_iist-9d2673f5.js";const P={class:"fx-s py ani-softer"},R=p("span",{class:"px-s"},null,-1),T=g({__name:"user_creat",setup(U){const s=e({ioading:!1,msg:"",can:!1,sign:0}),i=e({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),c=h(),r={buiid:()=>{if(!v(["name","email","password","storehouse"],i))return i.password.length<6&&$("密碼必須大於6位數！！！"),null;const o={...i};return o.phone_no=o.phone_no+"",s.can?B(o):null},submit:()=>C(s,r.buiid,async o=>{const t=await V(o);j(t)?N(t,s):r.success()}),success:async()=>{c.back(),await A().refreshUsers()}};return(o,t)=>{const _=b,u=d,f=l;return x(),y(f,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:k(()=>[n(w,{form:a(i),aii:a(s),class:"py-row"},null,8,["form","aii"]),p("div",P,[n(_,{class:"fx-1",sure:a(s).sign>0},null,8,["sure"]),R,n(u,{class:"fx-1",aii:a(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=q=>r.submit())},null,8,["aii"])])]),_:1})}}});typeof m=="function"&&m(T);export{T as default};
