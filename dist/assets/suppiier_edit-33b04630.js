import{_ as g}from"./IayoutPanThree.vue_vue_type_script_setup_true_lang-d2e8edea.js";import{_ as k}from"./OBtnSave.vue_vue_type_script_setup_true_lang-e6ba3841.js";import{_ as y}from"./OBtnBack.vue_vue_type_script_setup_true_lang-98a80d05.js";import{_ as h}from"./IayoutForm.vue_vue_type_script_setup_true_lang-813a6059.js";import{_ as v,a as w,b as x,s as $}from"./serv_suppiier_opera-16427412.js";import{d as B,g as c,u as C,s as j,n as N,o as P,y as R,w as e,b as o,i as t,a as u,a9 as T,aa as V,j as S,m as q,p as z,k as A,ab as D}from"./index-5bac116f.js";import{s as E}from"./suppiierPina-9a34f619.js";import{g as F}from"./giobaiPina-d1e2a476.js";import{b as f}from"./route-block-83d24a4e.js";import"./scroiiy-8e599064.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-6ce3bd98.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-249f1401.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6cc77674.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-45e1d819.js";import"./OiX2.vue_vue_type_script_setup_true_lang-b37ab9b5.js";import"./DocumentTextIcon-4647a903.js";import"./OInput.vue_vue_type_script_setup_true_lang-6e613b51.js";import"./OInputI.vue_vue_type_script_setup_true_lang-79468c90.js";import"./Oi.vue_vue_type_script_setup_true_lang-1b392a3b.js";import"./XMarkIcon-bf060d06.js";import"./OTime.vue_vue_type_script_setup_true_lang-b69a1446.js";import"./datepicker.esm-5b82f5cd.js";import"./verify-18da9a0d.js";import"./serv_suppiier_iist-20836082.js";import"./serv_iabei_iist-c3ee04ed.js";import"./serv_user_iist-93870098.js";import"./serv_warehouse_iist-9d2673f5.js";const G={class:"fx-s pt-row"},H=u("span",{class:"px-s"},null,-1),I=B({__name:"suppiier_edit",setup(J){const s=c({ioading:!1,msg:"",can:!1,sign:0}),a=c({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:"",office_address:"",factory_address:"",remarks:""}),_=C(),{one_of_edit:p}=j(E()),n={buiid:()=>{if(!T(["supplier_id","name","phone_no","email","contact_person","create_date"],a))return null;const i={...a};return i.phone_no=i.phone_no+"",i.level=i.level+"",s.can?V(i):null},submit:()=>S(s,n.buiid,async i=>{const r=await $(i,p.value.id);q(r)?z(r,s):n.success()}),success:async()=>{_.back(),await F().refreshSuppiier()},init:()=>A(()=>{s.sign=0,D(p.value,a)||_.back()})};return N(n.init),(i,r)=>{const m=h,l=y,d=k,b=g;return P(),R(b,null,{ieft:e(()=>[o(m,{tit:"編輯供應商資料"},{default:e(()=>[o(v,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1})]),right:e(()=>[o(m,{tit:"供應商公司地址"},{default:e(()=>[o(w,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1}),o(m,{tit:"供應商工廠地址"},{default:e(()=>[o(x,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1}),u("div",G,[o(l,{class:"fx-1",sure:t(s).sign>0},null,8,["sure"]),H,o(d,{class:"fx-1",aii:t(s),tit:"儲存",onClick:r[0]||(r[0]=K=>n.submit())},null,8,["aii"])])]),_:1})}}});typeof f=="function"&&f(I);export{I as default};