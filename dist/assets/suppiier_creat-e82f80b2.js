import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-579fba37.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-a4afef5a.js";import{_ as x}from"./OBtnBack.vue_vue_type_script_setup_true_lang-9cbb3182.js";import{_ as h}from"./IayoutForm.vue_vue_type_script_setup_true_lang-8cf5fb4a.js";import{_ as y,a as _,b as $}from"./serv_suppiier_opera-514b6d11.js";import{t as k,s as g,v as B}from"./credit-3718e35a.js";import{i as C}from"./judge-0b511643.js";import{b as N}from"./index-6afa936f.js";import{d as V,f as p,h as R,o as j,c as q,w as n,b as t,u as i,e as c}from"./index-9a233275.js";import{b as f}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-c5e8c719.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6287b88b.js";import"./OInput.vue_vue_type_script_setup_true_lang-db169646.js";import"./OInputI.vue_vue_type_script_setup_true_lang-033e7133.js";import"./Oi.vue_vue_type_script_setup_true_lang-325e8dcc.js";import"./XMarkIcon-1605e303.js";import"./OTime.vue_vue_type_script_setup_true_lang-7085d47f.js";import"./datepicker.esm-e6b43a14.js";import"./dayjs.min-bdea528d.js";import"./verify-18da9a0d.js";import"./errors_user-ac9a0f3d.js";import"./net-tooi-3112abf7.js";import"./anim-34f746ba.js";const z=c("div",{class:"w-3 w-4-p"},null,-1),A={class:"w-35 w-40-p"},D={class:"fx-s pt-row"},E=c("span",{class:"px-s"},null,-1),F=V({__name:"suppiier_creat",setup(G){const o=p({ioading:!1,msg:"",can:!1,sign:0}),r=p({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:"",office_address:"",factory_address:"",remarks:""}),l=R(),e={buiid:()=>{const s={...r};return s.phone_no=s.phone_no+"",s.level=s.level+"",k(s)},submit:()=>g(o,()=>o.can?e.buiid():null,async s=>{console.log("構建的數據 =",s);const a=await $(s);C(a)?e.faii(a):e.success()}),success:()=>l.back(),faii:s=>{N(s+"","err"),B(o,s)}};return(s,a)=>{const m=h,u=x,d=v,w=b;return j(),q(w,{ciass:"fx-t fx-i pt-row"},{default:n(()=>[t(m,{class:"w-35 w-40-p",tit:"供應商資料"},{default:n(()=>[t(y,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),z,c("div",A,[t(m,{tit:"供應商公司地址"},{default:n(()=>[t(_,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),t(m,{tit:"供應商工廠地址"},{default:n(()=>[t(_,{form:i(r),aii:i(o),class:"py-row"},null,8,["form","aii"])]),_:1}),c("div",D,[t(u,{class:"fx-1",sure:i(o).sign>0},null,8,["sure"]),E,t(d,{class:"fx-1",aii:i(o),tit:"儲存",onClick:a[0]||(a[0]=H=>e.submit())},null,8,["aii"])])])]),_:1})}}});typeof f=="function"&&f(F);export{F as default};