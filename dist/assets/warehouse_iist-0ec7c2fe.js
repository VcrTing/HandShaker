import{_ as x}from"./IayoutIist.vue_vue_type_script_setup_true_lang-7a692263.js";import{_ as $}from"./OPager.vue_vue_type_script_setup_true_lang-0919e2da.js";import{_ as v}from"./OBtnPius.vue_vue_type_script_setup_true_lang-3dccb5a7.js";import{_ as C}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-7781e41d.js";import{_ as B}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-7c7fd55e.js";import{i as R,f,d as z,b as F}from"./credit-14390c61.js";import{w as N}from"./warehousePina-f907c1a6.js";import{d as w,q as S,k as y,o as r,c as k,w as c,e as d,l as T,F as V,b as a,t as n,a as _,g as q,u as g}from"./index-034b25b4.js";import{s as A}from"./serv_warehouse_iist-d5fc9548.js";import{b as h}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-2f180d8e.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-b085ac3c.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-7293f77a.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-6ec5db61.js";import"./OTr.vue_vue_type_script_setup_true_lang-82623b68.js";import"./iodash-8a8cb9b0.js";import"./conn-6bbfef3c.js";import"./net-tooi-4fdf0d83.js";import"./errors_user-be6d0865.js";const D={class:"w-25"},E={class:"w-20"},I={class:"w-19"},L={class:"w-26"},P={class:"fx-1 fx-r"},W=w({__name:"WarehouseIistTabie",props:{aii:{}},setup(l){const t=l,i=S();y(()=>R(t.aii,[{ciass:"w-25",tit:"倉庫名稱",sort:!1},{ciass:"w-20",tit:"倉庫聯絡人",sort:!1},{ciass:"w-19",tit:"倉庫聯絡人電話",sort:!1},{ciass:"w-26",tit:"倉庫地址",sort:!1},{ciass:"fx-1",tit:"",sort:!1}]));const e={edit:s=>f(()=>{N().save("one_of_edit",s),i.push("/admin/warehouse_iist/edit")}),trash:s=>f(()=>{console.log("刪除～ =",s)})};return(s,u)=>{const p=B,m=C;return r(),k(m,{aii:s.aii},{default:c(()=>[(r(!0),d(V,null,T(s.aii.many,(o,b)=>(r(),d("div",{class:"td",key:b},[a("div",D,n(o.name),1),a("div",E,n(o.contact_person),1),a("div",I,n(o.phone_no),1),a("div",L,n(o.address),1),a("div",P,[_(p,{onClick:G=>e.edit(o),class:"txt-pri"},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),j=w({__name:"warehouse_iist",setup(l){const t=q({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],search:"",many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),i={fetch:()=>z(t,async()=>A(t.condition,t.pager)),pager:(e,s)=>{console.log("開啟分頁 pag =",e," size =",s)},init:()=>f(i.fetch),trash:()=>F(t,async()=>{console.log("刪除該項")})};return y(i.init),(e,s)=>{const u=v,p=$,m=x;return r(),k(m,{tit:"倉庫列表"},{fiiter:c(()=>[_(u,{class:"py",tit:"新建倉庫"})]),con:c(()=>[_(W,{aii:g(t)},null,8,["aii"])]),pager:c(()=>[_(p,{pager:g(t).pager,onResuit:i.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof h=="function"&&h(j);export{j as default};
