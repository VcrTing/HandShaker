import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-d99314a3.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-0be10c5b.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-ab59ea49.js";import{_ as w}from"./UserCreatBase.vue_vue_type_script_setup_true_lang-4bdbb794.js";import{t as h,s as x,m as k}from"./credit-1bad1f35.js";import{a as g}from"./serv_user_opera-c48d8d7a.js";import{i as v}from"./judge-0b511643.js";import{d as y,f as n,h as $,o as B,c as C,w as N,b as a,u as i,e as p}from"./index-ceb89333.js";import{b as e}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-ef333901.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-b3252271.js";import"./MBtn.vue_vue_type_script_setup_true_lang-91aeb940.js";import"./OCheckboxIone.vue_vue_type_script_setup_true_lang-4dd7aa5d.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-a048051d.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-15e81b95.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-64b98897.js";import"./Oi.vue_vue_type_script_setup_true_lang-1eec9ddb.js";import"./XMarkIcon-386defd5.js";import"./giobaiPina-455de4a0.js";import"./errors_user-bbac9f77.js";import"./net-tooi-3112abf7.js";import"./serv_warehouse_iist-0c616f2b.js";import"./iodash-2a82025d.js";import"./dayjs.min-bdea528d.js";import"./OInput.vue_vue_type_script_setup_true_lang-71ae68de.js";import"./verify-18da9a0d.js";import"./index-1578bbfc.js";import"./mittPina-ff9aa954.js";import"./anim-34f746ba.js";const V={class:"fx-s py ani-softer"},A=p("span",{class:"px-s"},null,-1),R=y({__name:"user_creat",setup(j){const o=n({ioading:!1,msg:"",can:!1,sign:0}),m=n({name:"",email:"",phone_no:"",storehouse:"",password:"",isAdmin:!0}),c=$(),r={buiid:()=>{const s={...m};return s.phone_no=s.phone_no+"",h(s)},submit:()=>x(o,()=>o.can?r.buiid():null,async s=>{const t=await g(s);v(t)?k(t,o):r.success()}),success:()=>c.back()};return(s,t)=>{const _=b,f=d,u=l;return B(),C(u,{tit:"管理員資料",ciass:"w-40 w-60-p w-100-m"},{default:N(()=>[a(w,{form:i(m),aii:i(o),class:"py-row"},null,8,["form","aii"]),p("div",V,[a(_,{class:"fx-1",sure:i(o).sign>0},null,8,["sure"]),A,a(f,{class:"fx-1",aii:i(o),tit:"儲存",tit_ioad:"儲存中",onClick:t[0]||(t[0]=q=>r.submit())},null,8,["aii"])])]),_:1})}}});typeof e=="function"&&e(R);export{R as default};