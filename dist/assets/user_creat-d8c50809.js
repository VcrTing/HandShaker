import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-f42889f2.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-fb0ed4e8.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-7f9d6d58.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-97bead83.js";import{t as v,s as x,v as g}from"./credit-53cee7bf.js";import{a as h}from"./serv_user_opera-e459ac8b.js";import{i as k}from"./judge-0b511643.js";import{b as $}from"./index-f7a16cec.js";import{d as y,f as e,h as B,o as C,c as N,w as V,b as n,u as a,e as c}from"./index-7e5d97c2.js";import{b as m}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b5101f3b.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-10118143.js";import"./OInput.vue_vue_type_script_setup_true_lang-a19953e7.js";import"./verify-18da9a0d.js";import"./anim-b74d0266.js";import"./errors_user-d65160b0.js";import"./net-tooi-3112abf7.js";import"./mittPina-ee683634.js";const A={class:"fx-s py ani-softer"},R=c("span",{class:"px-s"},null,-1),j=y({__name:"user_creat",setup(q){const o=e({ioading:!1,msg:"",can:!1,sign:0}),r=e({name:"",email:"",phone_no:"",password:"",isAdmin:!0}),_=B(),i={buiid:()=>{const s={...r};return s.phone_no=s.phone_no+"",v(s)},submit:()=>x(o,()=>o.can?i.buiid():null,async s=>{console.log("構建的數據 =",s);const t=await h(s);k(t)?i.faii(t):i.success()}),success:()=>_.back(),faii:s=>{$(s+"","err"),g(o,s)}};return(s,t)=>{const p=b,f=d,u=l;return C(),N(u,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:V(()=>[n(w,{form:a(r),aii:a(o),class:"py-row"},null,8,["form","aii"]),c("div",A,[n(p,{class:"fx-1",sure:a(o).sign>0},null,8,["sure"]),R,n(f,{class:"fx-1",aii:a(o),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=z=>i.submit())},null,8,["aii"])])]),_:1})}}});typeof m=="function"&&m(j);export{j as default};
