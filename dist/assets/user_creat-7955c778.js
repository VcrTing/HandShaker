import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-84914a5c.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-6e760d07.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-a87f70b0.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-fa5b20a1.js";import{j as g,k as h,s as k,m as x}from"./credit-db2ad5c3.js";import{a as y}from"./serv_user_opera-7c499402.js";import{i as v}from"./iodash-8a8cb9b0.js";import{g as $}from"./giobaiPina-c709988c.js";import{d as B,g as m,u as C,o as j,k as N,w as V,b as n,i,a as p}from"./index-33974ecf.js";import{b as e}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-4f655e36.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-11518a24.js";import"./MBtn.vue_vue_type_script_setup_true_lang-cd21dc42.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-c1ceb0e6.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-a1e18048.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-aaa1ffb2.js";import"./Oi.vue_vue_type_script_setup_true_lang-dd35cc56.js";import"./XMarkIcon-d9ea6041.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-94d8aa7d.js";import"./choiseOnePina-ac0b302e.js";import"./OInput.vue_vue_type_script_setup_true_lang-95fad0c5.js";import"./verify-18da9a0d.js";import"./conn-e4aee6c9.js";import"./net-tooi-51cb3d70.js";import"./strapi-c10e9858.js";import"./errors_user-be6d0865.js";import"./serv_iabei_iist-3074c6dd.js";import"./serv_suppiier_iist-1beefbb2.js";import"./serv_user_iist-0498784b.js";import"./serv_warehouse_iist-4334de85.js";const A={class:"fx-s py ani-softer"},P=p("span",{class:"px-s"},null,-1),R=B({__name:"user_creat",setup(U){const s=m({ioading:!1,msg:"",can:!1,sign:0}),r=m({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),c=C(),a={buiid:()=>{if(!g(["name","email","password","storehouse"],r))return null;const o={...r};return o.phone_no=o.phone_no+"",s.can?h(o):null},submit:()=>k(s,a.buiid,async o=>{const t=await y(o);v(t)?x(t,s):a.success()}),success:async()=>{c.back(),await $().refreshUsers()}};return(o,t)=>{const _=b,u=d,f=l;return j(),N(f,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:V(()=>[n(w,{form:i(r),aii:i(s),class:"py-row"},null,8,["form","aii"]),p("div",A,[n(_,{class:"fx-1",sure:i(s).sign>0},null,8,["sure"]),P,n(u,{class:"fx-1",aii:i(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=q=>a.submit())},null,8,["aii"])])]),_:1})}}});typeof e=="function"&&e(R);export{R as default};
