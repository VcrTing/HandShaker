import{_ as g}from"./IayoutPanThree.vue_vue_type_script_setup_true_lang-3b3179a3.js";import{_ as k}from"./OBtnSave.vue_vue_type_script_setup_true_lang-6cefa92d.js";import{_ as y}from"./OBtnBack.vue_vue_type_script_setup_true_lang-a16ca60f.js";import{_ as h}from"./IayoutForm.vue_vue_type_script_setup_true_lang-88c87c83.js";import{_ as v,a as w,b as x,s as $}from"./serv_suppiier_opera-fd923243.js";import{d as B,g as c,u as C,s as j,n as N,o as P,y as R,w as e,b as o,i as t,a as u,a8 as T,a9 as V,j as S,k as q,m as z,p as A,aa as D}from"./index-5586e4a0.js";import{s as E}from"./suppiierPina-236029fe.js";import{g as F}from"./giobaiPina-b1856ffd.js";import{b as f}from"./route-block-83d24a4e.js";import"./scroiiy-61ff1023.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-2e0769a3.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-200c52e2.js";import"./MBtn.vue_vue_type_script_setup_true_lang-f6bc6810.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-10dd3de0.js";import"./OiX2.vue_vue_type_script_setup_true_lang-18832c6e.js";import"./ChevronRightIcon-34e0f660.js";import"./OInput.vue_vue_type_script_setup_true_lang-6d77e372.js";import"./OInputI.vue_vue_type_script_setup_true_lang-9445eb1d.js";import"./Oi.vue_vue_type_script_setup_true_lang-727c28f2.js";import"./XMarkIcon-82ec217a.js";import"./OTime.vue_vue_type_script_setup_true_lang-0a6bf3dc.js";import"./datepicker.esm-c6ede0db.js";import"./verify-18da9a0d.js";import"./serv_suppiier_iist-3fe74435.js";import"./serv_iabei_iist-25e10fd6.js";import"./serv_user_iist-45c2bb91.js";import"./serv_warehouse_iist-501138c3.js";const G={class:"fx-s pt-row"},H=u("span",{class:"px-s"},null,-1),I=B({__name:"suppiier_edit",setup(J){const s=c({ioading:!1,msg:"",can:!1,sign:0}),a=c({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:"",office_address:"",factory_address:"",remarks:""}),_=C(),{one_of_edit:p}=j(E()),n={buiid:()=>{if(!T(["supplier_id","name","phone_no","email","contact_person","create_date"],a))return null;const i={...a};return i.phone_no=i.phone_no+"",i.level=i.level+"",s.can?V(i):null},submit:()=>S(s,n.buiid,async i=>{const r=await $(i,p.value.id);z(r)?A(r,s):n.success()}),success:async()=>{_.back(),await F().refreshSuppiier()},init:()=>q(()=>{s.sign=0,D(p.value,a)||_.back()})};return N(n.init),(i,r)=>{const m=h,l=y,d=k,b=g;return P(),R(b,null,{ieft:e(()=>[o(m,{tit:"編輯供應商資料"},{default:e(()=>[o(v,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1})]),right:e(()=>[o(m,{tit:"供應商公司地址"},{default:e(()=>[o(w,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1}),o(m,{tit:"供應商工廠地址"},{default:e(()=>[o(x,{form:t(a),aii:t(s),class:"py-row"},null,8,["form","aii"])]),_:1}),u("div",G,[o(l,{class:"fx-1",sure:t(s).sign>0},null,8,["sure"]),H,o(d,{class:"fx-1",aii:t(s),tit:"儲存",onClick:r[0]||(r[0]=K=>n.submit())},null,8,["aii"])])]),_:1})}}});typeof f=="function"&&f(I);export{I as default};
