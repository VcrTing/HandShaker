import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-99b4fbe3.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-4c310e21.js";import{_ as x}from"./OBtnBack.vue_vue_type_script_setup_true_lang-e666345f.js";import{_ as y}from"./IayoutForm.vue_vue_type_script_setup_true_lang-f1e470f6.js";import{_ as $,a as p,b as g}from"./serv_suppiier_opera-5bba9bd8.js";import{t as h,s as k,v as B}from"./credit-3f7205a2.js";import{i as C}from"./judge-13dfac2e.js";import{c as N}from"./index-791bc20f.js";import{d as V,g as _,i as R,o as j,e as q,w as n,b as t,u as i,a as m}from"./index-3928a4f9.js";import{b as f}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-e25d0593.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-9b84ba8f.js";import"./MBtn.vue_vue_type_script_setup_true_lang-60a27fcd.js";import"./OiX2.vue_vue_type_script_setup_true_lang-eebe0225.js";import"./Oi.vue_vue_type_script_setup_true_lang-7e5790fd.js";import"./XMarkIcon-c4c8ea85.js";import"./ArrowLongRightIcon-909e554a.js";import"./OInput.vue_vue_type_script_setup_true_lang-28be47dc.js";import"./OInputI.vue_vue_type_script_setup_true_lang-42bf7420.js";import"./OTime.vue_vue_type_script_setup_true_lang-23a1a188.js";import"./datepicker.esm-f129e23a.js";import"./dayjs.min-bdea528d.js";import"./verify-18da9a0d.js";import"./conn-edfcd9ba.js";import"./net-tooi-fd704369.js";import"./errors_user-be6d0865.js";import"./anim-34f746ba.js";import"./mittPina-3678d06a.js";const z=m("div",{class:"w-3 w-4-p"},null,-1),A={class:"w-35 w-40-p"},D={class:"fx-s pt-row"},E=m("span",{class:"px-s"},null,-1),F=V({__name:"suppiier_creat",setup(G){const o=_({ioading:!1,msg:"",can:!1,sign:0}),r=_({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:"",office_address:"",factory_address:"",remarks:""}),l=R(),e={buiid:()=>{const s={...r};return s.phone_no=s.phone_no+"",s.level=s.level+"",h(s)},submit:()=>k(o,()=>o.can?e.buiid():null,async s=>{console.log("構建的數據 =",s);const a=await g(s);C(a)?e.faii(a):e.success()}),success:()=>l.back(),faii:s=>{N(s+"","err"),B(o,s)}};return(s,a)=>{const c=y,u=x,d=v,w=b;return j(),q(w,{ciass:"fx-t fx-i pt-row"},{default:n(()=>[t(c,{class:"w-35 w-40-p",tit:"供應商資料"},{default:n(()=>[t($,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),z,m("div",A,[t(c,{tit:"供應商公司地址"},{default:n(()=>[t(p,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),t(c,{tit:"供應商工廠地址"},{default:n(()=>[t(p,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),m("div",D,[t(u,{class:"fx-1",sure:i(o).sign>0},null,8,["sure"]),E,t(d,{class:"fx-1",aii:i(o),tit:"儲存",onClick:a[0]||(a[0]=H=>e.submit())},null,8,["aii"])])])]),_:1})}}});typeof f=="function"&&f(F);export{F as default};
