import{_ as d}from"./IayoutPan.vue_vue_type_script_setup_true_lang-879e579c.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-b8dc6f34.js";import{_ as w}from"./OBtnBack.vue_vue_type_script_setup_true_lang-5aaa7c4c.js";import{_ as k,s as x}from"./serv_warehouse_opera-b7a67455.js";import{t as g,s as v,f as h,m as $,e as y}from"./credit-977c08c3.js";import{i as B}from"./judge-13dfac2e.js";import{w as C}from"./warehousePina-a0e16592.js";import{d as N,g as m,l as R,s as T,n as V,o as P,c as j,w as q,a as n,u as e,b as f}from"./index-eba50101.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-70d375fa.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-e3e6ca3d.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6b0b8f4f.js";import"./OInput.vue_vue_type_script_setup_true_lang-78db7857.js";import"./verify-18da9a0d.js";import"./conn-bb36a56e.js";import"./net-tooi-1d3bb44e.js";import"./errors_user-be6d0865.js";const z={class:"fx-s pt-row"},A=f("span",{class:"px"},null,-1),D=N({__name:"warehouse_edit",setup(E){const s=m({ioading:!1,msg:"",can:!1,sign:0}),a=m({name:"",contact_person:"",phone_no:"",address:""}),r=R(),{one_of_edit:c}=T(C()),i={buiid:()=>{const o={...a};return g(o)},submit:()=>v(s,()=>s.can?i.buiid():null,async o=>{console.log("構建的數據 =",o);const t=await x(o,c.value.id);B(t)?$(t,s):i.success()}),success:()=>r.back(),init:()=>h(()=>{y(c.value,a)||r.back(),s.sign=0})};return V(i.init),(o,t)=>{const p=w,u=b,l=d;return P(),j(l,{tit:"編輯倉庫資料",ciass:"w-40 w-60-p w-100-m"},{default:q(()=>[n(k,{form:e(a),aii:e(s),class:"py-row"},null,8,["form","aii"]),f("div",z,[n(p,{class:"fx-1"}),A,n(u,{tit:"儲存",aii:e(s),onClick:t[0]||(t[0]=F=>i.submit()),class:"fx-1"},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(D);export{D as default};
