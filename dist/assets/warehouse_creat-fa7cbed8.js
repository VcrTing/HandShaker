import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-cdc2ec78.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-d159c384.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-5f21b5d6.js";import{_ as w,a as h}from"./serv_warehouse_opera-3e2092ac.js";import{t as v,s as x,v as g}from"./credit-bc5fa170.js";import{i as k}from"./judge-13dfac2e.js";import{c as $}from"./index-6fcba4a6.js";import{d as y,g as e,i as B,o as C,e as N,w as V,b as i,u as n,a as m}from"./index-080b1a3a.js";import{b as c}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-38be770d.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-3b1de02f.js";import"./MBtn.vue_vue_type_script_setup_true_lang-1e643208.js";import"./OInput.vue_vue_type_script_setup_true_lang-67e44fd5.js";import"./verify-18da9a0d.js";import"./errors_user-cb2ffdc2.js";import"./net-tooi-3112abf7.js";import"./anim-34f746ba.js";import"./mittPina-a7314744.js";const R={class:"fx-s pt-row"},j=m("span",{class:"px"},null,-1),q=y({__name:"warehouse_creat",setup(z){const o=e({ioading:!1,msg:"",can:!1,sign:0}),r=e({name:"",contact_person:"",phone_no:"",address:""}),_=B(),a={buiid:()=>{const s={...r};return s.phone_no=s.phone_no+"",v(s)},submit:()=>x(o,()=>o.can?a.buiid():null,async s=>{console.log("構建的數據 =",s);const t=await h(s);k(t)?a.faii(t):a.success()}),success:()=>_.back(),faii:s=>{$(s+"","err"),g(o,s)}};return(s,t)=>{const p=b,f=d,u=l;return C(),N(u,{tit:"倉庫資料",ciass:"w-40 w-60-p w-100-m"},{default:V(()=>[i(w,{form:n(r),aii:n(o),class:"py-row"},null,8,["form","aii"]),m("div",R,[i(p,{class:"fx-1"}),j,i(f,{tit:"儲存",aii:n(o),onClick:t[0]||(t[0]=A=>a.submit()),class:"fx-1"},null,8,["aii"])])]),_:1})}}});typeof c=="function"&&c(q);export{q as default};
