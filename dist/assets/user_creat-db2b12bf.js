import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-cc5e39ac.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-f54c7d24.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-e1479c3e.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-12334a91.js";import{d as g,g as e,u as h,o as x,y,w as k,b as n,i,a as p,a9 as v,T as $,aa as B,j as C,m as j,p as N}from"./index-672a1f88.js";import{a as V}from"./serv_user_opera-fd62eaef.js";import{g as A}from"./giobaiPina-7cff4145.js";import{b as m}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-d1da7c5c.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-e12037e7.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b4a4fbc5.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-eef87c8a.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-1d56ca32.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-114c66bc.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-019616ba.js";import"./Oi.vue_vue_type_script_setup_true_lang-dc5c9087.js";import"./DocumentTextIcon-b6fcc047.js";import"./XMarkIcon-ac125545.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-6e6de79a.js";import"./choiseOnePina-f348325c.js";import"./OInput.vue_vue_type_script_setup_true_lang-57a565f6.js";import"./verify-18da9a0d.js";import"./serv_iabei_iist-b5748f21.js";import"./serv_suppiier_iist-fd54fad2.js";import"./serv_user_iist-87963fe9.js";import"./serv_warehouse_iist-ae7fc9ef.js";const P={class:"fx-s py ani-softer"},R=p("span",{class:"px-s"},null,-1),T=g({__name:"user_creat",setup(U){const s=e({ioading:!1,msg:"",can:!1,sign:0}),a=e({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),c=h(),r={buiid:()=>{if(!v(["name","email","password","storehouse"],a))return a.password.length<6&&$("密碼必須大於6位數！！！"),null;const o={...a};return o.phone_no=o.phone_no+"",s.can?B(o):null},submit:()=>C(s,r.buiid,async o=>{const t=await V(o);j(t)?N(t,s):r.success()}),success:async()=>{c.back(),await A().refreshUsers()}};return(o,t)=>{const _=b,u=d,f=l;return x(),y(f,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:k(()=>[n(w,{form:i(a),aii:i(s),class:"py-row"},null,8,["form","aii"]),p("div",P,[n(_,{class:"fx-1",sure:i(s).sign>0},null,8,["sure"]),R,n(u,{class:"fx-1",aii:i(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=q=>r.submit())},null,8,["aii"])])]),_:1})}}});typeof m=="function"&&m(T);export{T as default};