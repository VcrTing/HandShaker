import{_ as v}from"./IayoutIist.vue_vue_type_script_setup_true_lang-75c0dd02.js";import{_ as R}from"./OPager.vue_vue_type_script_setup_true_lang-6291a83a.js";import{_ as B}from"./OSearch.vue_vue_type_script_setup_true_lang-a2e48b0a.js";import{_ as F}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-e40e0185.js";import{_ as S}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-0b4161ce.js";import{s as T}from"./suppiierPina-b01634ff.js";import{d as b,u as z,n as C,z as A,o as c,y as x,w as _,c as h,A as N,a,t as e,i as p,b as m,F as V,k as n,af as g,ag as w,ah as y,g as D,Q as E}from"./index-52859a34.js";import{b as I}from"./view-028bf5b9.js";import{s as L}from"./serv_suppiier_iist-7b595e13.js";import{b as k}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-956b2590.js";import"./MBtn.vue_vue_type_script_setup_true_lang-fb2a8d59.js";import"./PlusCircleIcon-9720f062.js";import"./OiX2.vue_vue_type_script_setup_true_lang-2021770e.js";import"./DocumentTextIcon-c82872e4.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-fff7dfad.js";import"./Oi.vue_vue_type_script_setup_true_lang-d20432e0.js";import"./XMarkIcon-a0f0f6cb.js";import"./InboxIcon-321c0855.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-819bd7b4.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-dbb2dd22.js";import"./OTr.vue_vue_type_script_setup_true_lang-7c13b937.js";const O={class:"w-13"},P={class:"w-20"},Q={class:"w-13"},j={class:"w-24"},q={class:"w-11"},G={class:"w-13"},H={class:"fx-1 fx-r"},J=b({__name:"SuppiierIistTabie",props:{aii:{}},setup(f){const i=f,o=z();C(()=>A(i.aii,[{ciass:"w-13",tit:"供應商編號",sort_up:()=>n(()=>g(i.aii.many,"supplier_id",!0)),sort_down:()=>n(()=>g(i.aii.many,"supplier_id")),sort_reset:()=>w(i.aii)},{ciass:"w-20",tit:"供應商名稱"},{ciass:"w-13",tit:"聯絡電話"},{ciass:"w-24",tit:"聯絡郵箱"},{ciass:"w-11",tit:"聯絡人"},{ciass:"w-13",tit:"建檔日期",sort_up:()=>n(()=>y(i.aii.many,"create_date")),sort_down:()=>n(()=>y(i.aii.many,"create_date")),sort_reset:()=>w(i.aii)},{ciass:"fx-1",tit:""}]));const r={editFuture:async t=>{await T().fetchOne(t)},dump:()=>o.push("/admin/suppiier_iist/edit")};return(t,l)=>{const u=S,d=F;return c(),x(d,{aii:t.aii},{default:_(()=>[(c(!0),h(V,null,N(t.aii.many,(s,$)=>(c(),h("div",{class:"td",key:$},[a("div",O,e(s.supplier_id),1),a("div",P,e(s.name),1),a("div",Q,e(s.phone_no),1),a("div",j,e(s.email),1),a("div",q,e(s.contact_person),1),a("div",G,e(p(I)(s.create_date)),1),a("div",H,[m(u,{id:s.id,func:r.editFuture,onTap:r.dump,class:"txt-pri"},null,8,["id","func","onTap"])])]))),128))]),_:1},8,["aii"])}}}),K=b({__name:"suppiier_iist",setup(f){const i=D({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),o={fetch:()=>E(i,async()=>L(i.condition,i.pager)),pager:(r,t)=>n(()=>{i.pager.page=r,i.pager.pageSize=t,o.fetch()})};return(r,t)=>{const l=B,u=R,d=v;return c(),x(d,{tit:"供應商列表",tit_pius:"添加供應商"},{fiiter:_(()=>[m(l,{pchd:"請輸入供應商編號等信息進行搜索",kiii:!0,class:"w-search",onResuit:o.fetch,aii:p(i).condition,pk:"search"},null,8,["onResuit","aii"])]),con:_(()=>[m(J,{aii:p(i)},null,8,["aii"])]),pager:_(()=>[m(u,{pager:p(i).pager,onResuit:o.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof k=="function"&&k(K);export{K as default};
