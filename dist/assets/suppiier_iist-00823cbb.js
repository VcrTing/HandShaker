import{_ as v}from"./IayoutIist.vue_vue_type_script_setup_true_lang-8bbdd472.js";import{_ as R}from"./OPager.vue_vue_type_script_setup_true_lang-bae9dcc0.js";import{_ as B}from"./OSearch.vue_vue_type_script_setup_true_lang-9b140d26.js";import{_ as F}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-f6633356.js";import{_ as S}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-4d961afe.js";import{s as T}from"./suppiierPina-ed3c251f.js";import{d as b,u as z,n as C,z as A,o as c,y as x,w as _,c as h,A as N,a,t as e,i as p,b as m,F as V,k as n,ah as g,ai as w,aj as y,g as j,Q as D}from"./index-201c0874.js";import{b as E}from"./view-3440597d.js";import{s as I}from"./serv_suppiier_iist-5090279b.js";import{b as k}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-0408c4ec.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b84ff4f4.js";import"./PlusCircleIcon-9708bff7.js";import"./OiX2.vue_vue_type_script_setup_true_lang-5fabdf38.js";import"./DocumentTextIcon-f47521fa.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-bac35c61.js";import"./Oi.vue_vue_type_script_setup_true_lang-5e235aff.js";import"./XMarkIcon-3ad9bd72.js";import"./InboxIcon-34893ca9.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-69e90988.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0f8501df.js";import"./OTr.vue_vue_type_script_setup_true_lang-2656d8f6.js";const L={class:"w-13"},O={class:"w-20"},P={class:"w-13"},Q={class:"w-24"},q={class:"w-11"},G={class:"w-13"},H={class:"fx-1 fx-r"},J=b({__name:"SuppiierIistTabie",props:{aii:{}},setup(f){const i=f,o=z();C(()=>A(i.aii,[{ciass:"w-13",tit:"供應商編號",sort_up:()=>n(()=>g(i.aii.many,"supplier_id",!0)),sort_down:()=>n(()=>g(i.aii.many,"supplier_id")),sort_reset:()=>w(i.aii)},{ciass:"w-20",tit:"供應商名稱"},{ciass:"w-13",tit:"聯絡電話"},{ciass:"w-24",tit:"聯絡郵箱"},{ciass:"w-11",tit:"聯絡人"},{ciass:"w-13",tit:"建檔日期",sort_up:()=>n(()=>y(i.aii.many,"create_date")),sort_down:()=>n(()=>y(i.aii.many,"create_date")),sort_reset:()=>w(i.aii)},{ciass:"fx-1",tit:""}]));const r={editFuture:async t=>{await T().fetchOne(t)},dump:()=>o.push("/admin/suppiier_iist/edit")};return(t,l)=>{const u=S,d=F;return c(),x(d,{aii:t.aii},{default:_(()=>[(c(!0),h(V,null,N(t.aii.many,(s,$)=>(c(),h("div",{class:"td",key:$},[a("div",L,e(s.supplier_id),1),a("div",O,e(s.name),1),a("div",P,e(s.phone_no),1),a("div",Q,e(s.email),1),a("div",q,e(s.contact_person),1),a("div",G,e(p(E)(s.create_date)),1),a("div",H,[m(u,{id:s.id,func:r.editFuture,onTap:r.dump,class:"txt-pri"},null,8,["id","func","onTap"])])]))),128))]),_:1},8,["aii"])}}}),K=b({__name:"suppiier_iist",setup(f){const i=j({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),o={fetch:()=>D(i,async()=>I(i.condition,i.pager)),pager:(r,t)=>n(()=>{i.pager.page=r,i.pager.pageSize=t,o.fetch()})};return(r,t)=>{const l=B,u=R,d=v;return c(),x(d,{tit:"供應商列表",tit_pius:"添加供應商"},{fiiter:_(()=>[m(l,{pchd:"請輸入供應商編號等信息進行搜索",kiii:!0,class:"w-search",onResuit:o.fetch,aii:p(i).condition,pk:"search"},null,8,["onResuit","aii"])]),con:_(()=>[m(J,{aii:p(i)},null,8,["aii"])]),pager:_(()=>[m(u,{pager:p(i).pager,onResuit:o.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof k=="function"&&k(K);export{K as default};