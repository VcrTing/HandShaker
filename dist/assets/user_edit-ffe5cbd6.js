import{_ as d}from"./IayoutPan.vue_vue_type_script_setup_true_lang-528d86ce.js";import{_ as b}from"./OBtnSave.vue_vue_type_script_setup_true_lang-d2e550ff.js";import{_ as h}from"./OBtnBack.vue_vue_type_script_setup_true_lang-4cafdd11.js";import{_ as g}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-fce556ee.js";import{t as k,s as v,f as w,m as x,c as y}from"./credit-6ebf5b28.js";import{s as $}from"./serv_user_opera-b0933b14.js";import{d as C,i as B,s as N,C as P,g as c,n as R,o as T,e as V,w as A,b as n,u as e,a as _}from"./index-6381f874.js";import{i as O}from"./judge-0b511643.js";import{c as j}from"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-2a88c02d.js";import{b as p}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-e52db6b5.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-cbff765b.js";import"./MBtn.vue_vue_type_script_setup_true_lang-242bb797.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-afc46f89.js";import"./OInput.vue_vue_type_script_setup_true_lang-c8e318aa.js";import"./verify-18da9a0d.js";import"./index-dbd74263.js";import"./mittPina-2f430d85.js";import"./anim-34f746ba.js";import"./errors_user-cbfafd4e.js";import"./net-tooi-3112abf7.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-ace8dba7.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-38dd4963.js";import"./Oi.vue_vue_type_script_setup_true_lang-f011ce58.js";import"./XMarkIcon-86985cc1.js";import"./giobaiPina-d107cfca.js";import"./serv_warehouse_iist-d561e4f6.js";import"./iodash-66372aee.js";import"./dayjs.min-bdea528d.js";const q={class:"fx-s py"},z=_("span",{class:"px-s"},null,-1),D=C({__name:"user_edit",setup(E){const a=B(),{one_of_edit:m}=N(P()),s=c({ioading:!1,msg:"",can:!1,sign:-1}),t=c({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),r={buiid:()=>{const o={...t};return o.phone_no=o.phone_no+"",k(o)},submit:()=>v(s,()=>s.can?r.buiid():null,async o=>{console.log("構建的數據 =",o);const i=await $(o,m.value.id);O(i)?x(i,s):r.success()}),success:()=>a.back(),init:()=>w(()=>{y(m.value,t)||a.back(),s.sign=0,j().save_storehouse_id(t.storehouse)})};return R(r.init),(o,i)=>{const u=h,f=b,l=d;return T(),V(l,{tit:"編輯管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:A(()=>[n(g,{form:e(t),aii:e(s),edit:!0,class:"py-row"},null,8,["form","aii"]),_("div",q,[n(u,{class:"fx-1",sure:e(s).sign>0},null,8,["sure"]),z,n(f,{class:"fx-1",aii:e(s),tit:"儲存",tit_ioad:"儲存中",onClick:i[0]||(i[0]=F=>r.submit())},null,8,["aii"])])]),_:1})}}});typeof p=="function"&&p(D);export{D as default};