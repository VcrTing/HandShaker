import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-c4b37568.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-450fb7b6.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-2e50e9d5.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-249f7251.js";import{t as v,s as x,v as g}from"./credit-2595f94a.js";import{a as k}from"./serv_user_opera-6e89e002.js";import{i as y}from"./judge-0b511643.js";import{b as $}from"./index-10c32915.js";import{d as h,f as e,y as B,o as C,c as N,w as V,b as n,u as a,e as c}from"./index-304baa09.js";import{b as m}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-3dee0c49.js";import"./MBtn.vue_vue_type_script_setup_true_lang-8d836b97.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-522cf414.js";import"./OInput.vue_vue_type_script_setup_true_lang-a3855ee5.js";import"./verify-0eab96e9.js";import"./conn-68b855b8.js";import"./net-tooi-8492b119.js";import"./errors_user-be6d0865.js";import"./mittPina-de01d60d.js";const A={class:"fx-s py ani-softer"},R=c("span",{class:"px-s"},null,-1),j=h({__name:"user_creat",setup(q){const o=e({ioading:!1,msg:"",can:!1,sign:0}),r=e({name:"",email:"",phone_no:"",password:"",isAdmin:!0}),_=B(),i={buiid:()=>{const s={...r};return s.phone_no=s.phone_no+"",v(s)},submit:()=>x(o,()=>o.can?i.buiid():null,async s=>{console.log("構建的數據 =",s);const t=await k(s);y(t)?i.faii(t):i.success()}),success:()=>_.back(),faii:s=>{$(s+"","err"),g(o,s)}};return(s,t)=>{const p=b,f=d,u=l;return C(),N(u,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:V(()=>[n(w,{form:a(r),aii:a(o),class:"py-row"},null,8,["form","aii"]),c("div",A,[n(p,{class:"fx-1",sure:a(o).sign>0},null,8,["sure"]),R,n(f,{class:"fx-1",aii:a(o),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=z=>i.submit())},null,8,["aii"])])]),_:1})}}});typeof m=="function"&&m(j);export{j as default};
