import{_ as w}from"./IayoutPan.vue_vue_type_script_setup_true_lang-c921a404.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-61cade88.js";import{_ as h}from"./OBtnBack.vue_vue_type_script_setup_true_lang-5a648a8d.js";import{_ as v}from"./IayoutForm.vue_vue_type_script_setup_true_lang-090f0228.js";import{_ as x,a as y,b as g,c as k}from"./serv_suppiier_opera-f5c67625.js";import{j as $,k as j,s as B,m as C}from"./credit-aafde702.js";import{i as N}from"./iodash-2c16ffcb.js";import{g as V}from"./giobaiPina-2d78b6d8.js";import{d as P,g as p,u as R,o as S,j as q,w as e,b as i,i as t,a as n}from"./index-1fb82353.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-a966f17b.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-281b26d4.js";import"./MBtn.vue_vue_type_script_setup_true_lang-868db3ff.js";import"./OiX2.vue_vue_type_script_setup_true_lang-047b5f92.js";import"./Oi.vue_vue_type_script_setup_true_lang-7b242647.js";import"./XMarkIcon-7255455b.js";import"./ArrowLongRightIcon-72370f9b.js";import"./OInput.vue_vue_type_script_setup_true_lang-849850a7.js";import"./OInputI.vue_vue_type_script_setup_true_lang-35afe509.js";import"./OTime.vue_vue_type_script_setup_true_lang-f256fa48.js";import"./datepicker.esm-63a2e69d.js";import"./dayjs.min-668a802a.js";import"./verify-18da9a0d.js";import"./conn-88770a94.js";import"./net-tooi-962a533f.js";import"./strapi-c10e9858.js";import"./errors_user-be6d0865.js";import"./serv_iabei_iist-1af3be75.js";import"./serv_suppiier_iist-84fbf535.js";import"./serv_user_iist-a9e045ed.js";import"./serv_warehouse_iist-6e9e5965.js";const z=n("div",{class:"w-3 w-4-p"},null,-1),A={class:"w-35 w-40-p"},D={class:"fx-s pt-row"},E=n("span",{class:"px-s"},null,-1),F=P({__name:"suppiier_creat",setup(G){const s=p({ioading:!1,msg:"",can:!1,sign:0}),a=p({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:"",office_address:"",factory_address:"",remarks:""}),f=R(),m={buiid:()=>{if(!$(["supplier_id","name","phone_no","email","contact_person","create_date"],a))return null;const o={...a};return o.phone_no=o.phone_no+"",o.level=o.level+"",s.can?j(o):null},submit:()=>B(s,m.buiid,async o=>{const r=await k(o);N(r)?C(r,s):m.success()}),success:async()=>{f.back(),await V().refreshSuppiier()}};return(o,r)=>{const c=v,l=h,u=b,d=w;return S(),q(d,{ciass:"fx-t fx-i pt-row"},{default:e(()=>[i(c,{class:"w-35 w-40-p",tit:"供應商資料"},{default:e(()=>[i(x,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1}),z,n("div",A,[i(c,{tit:"供應商公司地址"},{default:e(()=>[i(y,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1}),i(c,{tit:"供應商工廠地址"},{default:e(()=>[i(g,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1}),n("div",D,[i(l,{class:"fx-1",sure:t(s).sign>0},null,8,["sure"]),E,i(u,{class:"fx-1",aii:t(s),tit:"儲存",onClick:r[0]||(r[0]=H=>m.submit())},null,8,["aii"])])])]),_:1})}}});typeof _=="function"&&_(F);export{F as default};
