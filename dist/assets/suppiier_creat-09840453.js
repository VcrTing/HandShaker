import{_ as w}from"./IayoutPan.vue_vue_type_script_setup_true_lang-ffec53fa.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-958e68aa.js";import{_ as y}from"./OBtnBack.vue_vue_type_script_setup_true_lang-d17c1433.js";import{_ as h}from"./IayoutForm.vue_vue_type_script_setup_true_lang-622830d4.js";import{_ as v,a as x,b as g,c as $}from"./serv_suppiier_opera-a15f588e.js";import{d as k,g as _,u as B,o as C,y as j,w as n,b as t,i as a,a as e,a9 as N,aa as V,j as P,m as R,p as S}from"./index-9f6d9a11.js";import{g as q}from"./giobaiPina-b74534ed.js";import{b as z}from"./view-051b25fc.js";import{b as p}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-8eab646c.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-ea342a96.js";import"./MBtn.vue_vue_type_script_setup_true_lang-0282de24.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-afc77d54.js";import"./OiX2.vue_vue_type_script_setup_true_lang-472cf126.js";import"./DocumentTextIcon-02c33e07.js";import"./PlusCircleIcon-4f33172d.js";import"./OInput.vue_vue_type_script_setup_true_lang-8646bca7.js";import"./OInputI.vue_vue_type_script_setup_true_lang-3564f450.js";import"./Oi.vue_vue_type_script_setup_true_lang-7b515ad1.js";import"./XMarkIcon-5cf953f7.js";import"./OTime.vue_vue_type_script_setup_true_lang-fb6b2b91.js";import"./datepicker.esm-0c1068a9.js";import"./verify-18da9a0d.js";import"./serv_suppiier_iist-2b4bb402.js";import"./serv_user_iist-a41f7fe2.js";import"./serv_warehouse_iist-e58f48da.js";const A=e("div",{class:"w-3 w-4-p"},null,-1),D={class:"w-35 w-40-p"},E={class:"fx-s pt-row"},F=e("span",{class:"px-s"},null,-1),G=k({__name:"suppiier_creat",setup(H){const s=_({ioading:!1,msg:"",can:!1,sign:0}),i=_({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:z(),office_address:"",factory_address:"",remarks:""}),f=B(),c={buiid:()=>{if(!N(["supplier_id","name","phone_no","contact_person","create_date"],i))return null;const o={...i};return o.phone_no=o.phone_no+"",o.level=o.level+"",s.can?V(o):null},submit:()=>P(s,c.buiid,async o=>{const r=await $(o);R(r)?S(r,s):c.success()}),success:async()=>{f.back(),await q().refreshSuppiier()}};return(o,r)=>{const m=h,l=y,u=b,d=w;return C(),j(d,{ciass:"fx-t fx-i pt-row"},{default:n(()=>[t(m,{class:"w-35 w-40-p",tit:"供應商資料"},{default:n(()=>[t(v,{form:a(i),aii:a(s),class:"py-row"},null,8,["form","aii"])]),_:1}),A,e("div",D,[t(m,{tit:"供應商公司地址"},{default:n(()=>[t(x,{form:a(i),aii:a(s),class:"py-row"},null,8,["form","aii"])]),_:1}),t(m,{tit:"供應商工廠地址"},{default:n(()=>[t(g,{form:a(i),aii:a(s),class:"py-row"},null,8,["form","aii"])]),_:1}),e("div",E,[t(l,{class:"fx-1",sure:a(s).sign>0},null,8,["sure"]),F,t(u,{class:"fx-1",aii:a(s),tit:"儲存",onClick:r[0]||(r[0]=I=>c.submit())},null,8,["aii"])])])]),_:1})}}});typeof p=="function"&&p(G);export{G as default};