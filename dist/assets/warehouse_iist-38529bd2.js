import{_ as b}from"./IayoutIist.vue_vue_type_script_setup_true_lang-d3e935f6.js";import{_ as x}from"./OPager.vue_vue_type_script_setup_true_lang-aae546eb.js";import{_ as $}from"./OBtnPius.vue_vue_type_script_setup_true_lang-95a0dc5e.js";import{_ as v}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-ea14a47c.js";import{_ as C}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-eddbb022.js";import{i as B,f,b as R}from"./credit-db2ad5c3.js";import{w as S}from"./warehousePina-d59f8a70.js";import{d as w,u as z,n as F,o as n,k as y,w as c,c as d,q as N,a as o,t as r,b as _,F as T,g as V,i as g}from"./index-33974ecf.js";import{s as q}from"./serv_warehouse_iist-4334de85.js";import{b as h}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-cd21dc42.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-4f655e36.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-11518a24.js";import"./OTr.vue_vue_type_script_setup_true_lang-289f7217.js";import"./iodash-8a8cb9b0.js";import"./conn-e4aee6c9.js";import"./net-tooi-51cb3d70.js";import"./strapi-c10e9858.js";import"./errors_user-be6d0865.js";const A={class:"w-25"},D={class:"w-20"},E={class:"w-19"},I={class:"w-26"},L={class:"fx-1 fx-r"},P=w({__name:"WarehouseIistTabie",props:{aii:{}},setup(u){const t=u,e=z();F(()=>B(t.aii,[{ciass:"w-25",tit:"倉庫名稱",sort:!1},{ciass:"w-20",tit:"倉庫聯絡人",sort:!1},{ciass:"w-19",tit:"倉庫聯絡人電話",sort:!1},{ciass:"w-26",tit:"倉庫地址",sort:!1},{ciass:"fx-1",tit:"",sort:!1}]));const a={edit:s=>f(()=>{S().save("one_of_edit",s),e.push("/admin/warehouse_iist/edit")}),trash:s=>f(()=>{console.log("刪除～ =",s)})};return(s,l)=>{const p=C,m=v;return n(),y(m,{aii:s.aii},{default:c(()=>[(n(!0),d(T,null,N(s.aii.many,(i,k)=>(n(),d("div",{class:"td",key:k},[o("div",A,r(i.name),1),o("div",D,r(i.contact_person),1),o("div",E,r(i.phone_no),1),o("div",I,r(i.address),1),o("div",L,[_(p,{onClick:j=>a.edit(i),class:"txt-pri"},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),W=w({__name:"warehouse_iist",setup(u){const t=V({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],search:"",many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),e={fetch:()=>R(t,async()=>q(t.condition,t.pager)),pager:(a,s)=>f(()=>{t.pager.page=a,t.pager.pageSize=s,e.fetch()})};return(a,s)=>{const l=$,p=x,m=b;return n(),y(m,{tit:"倉庫列表"},{fiiter:c(()=>[_(l,{class:"py",tit:"新建倉庫"})]),con:c(()=>[_(P,{aii:g(t)},null,8,["aii"])]),pager:c(()=>[_(p,{pager:g(t).pager,onResuit:e.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof h=="function"&&h(W);export{W as default};