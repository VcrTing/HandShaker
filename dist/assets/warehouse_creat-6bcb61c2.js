import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-37935b4c.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-3f258e61.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-28524975.js";import{_ as w,a as h}from"./serv_warehouse_opera-78202c70.js";import{d as k,g as r,u as g,o as x,y as v,w as y,b as i,i as e,a as m,a9 as $,aa as B,j as C,m as j,ac as N,ad as V}from"./index-c11058df.js";import{g as P}from"./giobaiPina-fc53bcaf.js";import{b as c}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-bff55fa4.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-40cf9214.js";import"./MBtn.vue_vue_type_script_setup_true_lang-c2fb56bf.js";import"./OInput.vue_vue_type_script_setup_true_lang-8dac29e8.js";import"./verify-18da9a0d.js";import"./serv_suppiier_iist-fdba3c1c.js";import"./serv_user_iist-1ed2ed86.js";import"./serv_warehouse_iist-2f84ce0d.js";const R={class:"fx-s pt-row"},W=m("span",{class:"px"},null,-1),q=k({__name:"warehouse_creat",setup(z){const a=r({ioading:!1,msg:"",can:!1,sign:0}),n=r({name:"",contact_person:"",phone_no:"",facebook:"",remark:"",address:""}),_=g(),t={buiid:()=>{if(!$(["name","contact_person","phone_no","address"],n))return null;const s={...n};return s.phone_no=s.phone_no+"",a.can?B(s):null},submit:()=>C(a,t.buiid,async s=>{const o=await h(s);j(o)?t.faii(o):t.success()}),success:async()=>{_.back(),await P().refreshWarehouses()},faii:s=>{N(s+"","err"),V(a,s)}};return(s,o)=>{const p=b,f=d,u=l;return x(),v(u,{tit:"倉庫資料",ciass:"w-40 w-60-p w-100-m"},{default:y(()=>[i(w,{form:e(n),aii:e(a),class:"py-row"},null,8,["form","aii"]),m("div",R,[i(p,{class:"fx-1"}),W,i(f,{tit:"儲存",aii:e(a),onClick:o[0]||(o[0]=A=>t.submit()),class:"fx-1"},null,8,["aii"])])]),_:1})}}});typeof c=="function"&&c(q);export{q as default};