import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-34037c22.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-d1e3a5f4.js";import{_ as x}from"./OBtnBack.vue_vue_type_script_setup_true_lang-9de44f9f.js";import{_ as y}from"./IayoutForm.vue_vue_type_script_setup_true_lang-f3cf8650.js";import{_ as $,a as _,b as g}from"./serv_suppiier_opera-49915a06.js";import{t as h,s as k,v as B}from"./credit-f97b8a61.js";import{i as C}from"./judge-0b511643.js";import{c as N}from"./index-ddf506e4.js";import{d as V,g as p,i as R,o as j,e as q,w as n,b as t,u as i,a as m}from"./index-f6fc0cc4.js";import{b as f}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-bc6edd41.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-66a6e81d.js";import"./MBtn.vue_vue_type_script_setup_true_lang-0d6d885e.js";import"./OInput.vue_vue_type_script_setup_true_lang-81ea3e12.js";import"./OInputI.vue_vue_type_script_setup_true_lang-e04fbbaf.js";import"./Oi.vue_vue_type_script_setup_true_lang-27f979d1.js";import"./XMarkIcon-ec82c7d5.js";import"./OTime.vue_vue_type_script_setup_true_lang-242da513.js";import"./datepicker.esm-590b1acd.js";import"./dayjs.min-bdea528d.js";import"./verify-18da9a0d.js";import"./errors_user-6dfd8f12.js";import"./net-tooi-3112abf7.js";import"./anim-34f746ba.js";import"./mittPina-8a35d841.js";const z=m("div",{class:"w-3 w-4-p"},null,-1),A={class:"w-35 w-40-p"},D={class:"fx-s pt-row"},E=m("span",{class:"px-s"},null,-1),F=V({__name:"suppiier_creat",setup(G){const o=p({ioading:!1,msg:"",can:!1,sign:0}),r=p({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:"",office_address:"",factory_address:"",remarks:""}),l=R(),e={buiid:()=>{const s={...r};return s.phone_no=s.phone_no+"",s.level=s.level+"",h(s)},submit:()=>k(o,()=>o.can?e.buiid():null,async s=>{console.log("構建的數據 =",s);const a=await g(s);C(a)?e.faii(a):e.success()}),success:()=>l.back(),faii:s=>{N(s+"","err"),B(o,s)}};return(s,a)=>{const c=y,u=x,d=v,w=b;return j(),q(w,{ciass:"fx-t fx-i pt-row"},{default:n(()=>[t(c,{class:"w-35 w-40-p",tit:"供應商資料"},{default:n(()=>[t($,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),z,m("div",A,[t(c,{tit:"供應商公司地址"},{default:n(()=>[t(_,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),t(c,{tit:"供應商工廠地址"},{default:n(()=>[t(_,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),m("div",D,[t(u,{class:"fx-1",sure:i(o).sign>0},null,8,["sure"]),E,t(d,{class:"fx-1",aii:i(o),tit:"儲存",onClick:a[0]||(a[0]=H=>e.submit())},null,8,["aii"])])])]),_:1})}}});typeof f=="function"&&f(F);export{F as default};
