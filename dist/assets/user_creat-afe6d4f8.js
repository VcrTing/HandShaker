import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-ecffcceb.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-6cefa92d.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-a16ca60f.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-d77303e4.js";import{d as g,g as e,u as h,o as x,y,w as k,b as n,i,a as c,a8 as v,a9 as $,j as B,m as C,p as j}from"./index-5586e4a0.js";import{a as N}from"./serv_user_opera-5f2b77bb.js";import{g as V}from"./giobaiPina-b1856ffd.js";import{b as m}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-2e0769a3.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-200c52e2.js";import"./MBtn.vue_vue_type_script_setup_true_lang-f6bc6810.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-bd3c27d2.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-60774a44.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-a0233096.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-072905a0.js";import"./Oi.vue_vue_type_script_setup_true_lang-727c28f2.js";import"./ChevronRightIcon-34e0f660.js";import"./XMarkIcon-82ec217a.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-08b49cd4.js";import"./choiseOnePina-96b2d9c4.js";import"./OInput.vue_vue_type_script_setup_true_lang-6d77e372.js";import"./verify-18da9a0d.js";import"./serv_iabei_iist-25e10fd6.js";import"./serv_suppiier_iist-3fe74435.js";import"./serv_user_iist-45c2bb91.js";import"./serv_warehouse_iist-501138c3.js";const A={class:"fx-s py ani-softer"},P=c("span",{class:"px-s"},null,-1),R=g({__name:"user_creat",setup(U){const s=e({ioading:!1,msg:"",can:!1,sign:0}),a=e({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),p=h(),r={buiid:()=>{if(!v(["name","email","password","storehouse"],a))return null;const o={...a};return o.phone_no=o.phone_no+"",s.can?$(o):null},submit:()=>B(s,r.buiid,async o=>{const t=await N(o);C(t)?j(t,s):r.success()}),success:async()=>{p.back(),await V().refreshUsers()}};return(o,t)=>{const _=b,u=d,f=l;return x(),y(f,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:k(()=>[n(w,{form:i(a),aii:i(s),class:"py-row"},null,8,["form","aii"]),c("div",A,[n(_,{class:"fx-1",sure:i(s).sign>0},null,8,["sure"]),P,n(u,{class:"fx-1",aii:i(s),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=q=>r.submit())},null,8,["aii"])])]),_:1})}}});typeof m=="function"&&m(R);export{R as default};
