import{_ as w}from"./IayoutPan.vue_vue_type_script_setup_true_lang-5d9ee0df.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-e6ba3841.js";import{_ as y}from"./OBtnBack.vue_vue_type_script_setup_true_lang-98a80d05.js";import{_ as h}from"./IayoutForm.vue_vue_type_script_setup_true_lang-813a6059.js";import{_ as v,a as x,b as g,c as $}from"./serv_suppiier_opera-16427412.js";import{d as k,g as _,u as B,o as C,y as j,w as e,b as a,i,a as n,a9 as N,aa as V,j as P,m as R,p as S}from"./index-5bac116f.js";import{g as q}from"./giobaiPina-d1e2a476.js";import{a as z}from"./view-6624e99a.js";import{b as p}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-6ce3bd98.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-249f1401.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6cc77674.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-45e1d819.js";import"./OiX2.vue_vue_type_script_setup_true_lang-b37ab9b5.js";import"./DocumentTextIcon-4647a903.js";import"./OInput.vue_vue_type_script_setup_true_lang-6e613b51.js";import"./OInputI.vue_vue_type_script_setup_true_lang-79468c90.js";import"./Oi.vue_vue_type_script_setup_true_lang-1b392a3b.js";import"./XMarkIcon-bf060d06.js";import"./OTime.vue_vue_type_script_setup_true_lang-b69a1446.js";import"./datepicker.esm-5b82f5cd.js";import"./verify-18da9a0d.js";import"./serv_iabei_iist-c3ee04ed.js";import"./serv_suppiier_iist-20836082.js";import"./serv_user_iist-93870098.js";import"./serv_warehouse_iist-9d2673f5.js";const A=n("div",{class:"w-3 w-4-p"},null,-1),D={class:"w-35 w-40-p"},E={class:"fx-s pt-row"},F=n("span",{class:"px-s"},null,-1),G=k({__name:"suppiier_creat",setup(H){const s=_({ioading:!1,msg:"",can:!1,sign:0}),t=_({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:z(),office_address:"",factory_address:"",remarks:""}),f=B(),c={buiid:()=>{if(!N(["supplier_id","name","phone_no","email","contact_person","create_date"],t))return null;const o={...t};return o.phone_no=o.phone_no+"",o.level=o.level+"",s.can?V(o):null},submit:()=>P(s,c.buiid,async o=>{const r=await $(o);R(r)?S(r,s):c.success()}),success:async()=>{f.back(),await q().refreshSuppiier()}};return(o,r)=>{const m=h,l=y,u=b,d=w;return C(),j(d,{ciass:"fx-t fx-i pt-row"},{default:e(()=>[a(m,{class:"w-35 w-40-p",tit:"供應商資料"},{default:e(()=>[a(v,{form:i(t),aii:i(s),class:"py-row"},null,8,["form","aii"])]),_:1}),A,n("div",D,[a(m,{tit:"供應商公司地址"},{default:e(()=>[a(x,{form:i(t),aii:i(s),class:"py-row"},null,8,["form","aii"])]),_:1}),a(m,{tit:"供應商工廠地址"},{default:e(()=>[a(g,{form:i(t),aii:i(s),class:"py-row"},null,8,["form","aii"])]),_:1}),n("div",E,[a(l,{class:"fx-1",sure:i(s).sign>0},null,8,["sure"]),F,a(u,{class:"fx-1",aii:i(s),tit:"儲存",onClick:r[0]||(r[0]=I=>c.submit())},null,8,["aii"])])])]),_:1})}}});typeof p=="function"&&p(G);export{G as default};
