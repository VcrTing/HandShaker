import{_ as b}from"./IayoutIist.vue_vue_type_script_setup_true_lang-9d7495ba.js";import{_ as x}from"./OPager.vue_vue_type_script_setup_true_lang-edbf4f71.js";import{_ as R}from"./OSearch.vue_vue_type_script_setup_true_lang-73db3c26.js";import{_ as $}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-925d65f0.js";import{_ as T}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-90ca14d3.js";import{s as v,a as B}from"./suppiierPina-e19e5830.js";import{i as F,b as S,f as C,a as E}from"./credit-53cee7bf.js";import{d as h,h as N,n as w,o as n,c as y,w as c,a as d,r as z,e as o,t as e,b as p,F as D,f as O,u}from"./index-7e5d97c2.js";import{b as g}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-98e9a247.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b5101f3b.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-794c78a3.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import"./OTr.vue_vue_type_script_setup_true_lang-e2103c01.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-59963553.js";import"./errors_user-d65160b0.js";import"./net-tooi-3112abf7.js";import"./judge-0b511643.js";import"./index-f7a16cec.js";import"./mittPina-ee683634.js";import"./anim-b74d0266.js";const P={class:"w-10"},V={class:"w-20"},A={class:"w-13"},I={class:"w-24"},L={class:"w-11"},U={class:"w-13"},W={class:"fx-1 fx-r"},j=h({__name:"SuppiierIistTabie",props:{aii:{}},setup(l){const s=l,a=N();w(()=>F(s.aii,[{ciass:"w-10",tit:"供應商編號",sort:!1},{ciass:"w-20",tit:"供應商名稱",sort:!1},{ciass:"w-13",tit:"聯絡電話",sort:!1},{ciass:"w-24",tit:"聯絡郵箱",sort:!1},{ciass:"w-11",tit:"聯絡人",sort:!1},{ciass:"w-13",tit:"建檔日期",sort:!0,sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"fx-1",tit:"",sort:!1}]));const r={editFuture:async t=>{await v().fetchOne(t)},dump:()=>a.push("/admin/suppiier_iist/edit")};return(t,f)=>{const _=T,m=$;return n(),y(m,{aii:t.aii},{default:c(()=>[(n(!0),d(D,null,z(t.aii.many,(i,k)=>(n(),d("div",{class:"td",key:k},[o("div",P,e(i.supplier_id),1),o("div",V,e(i.name),1),o("div",A,e(i.phone_no),1),o("div",I,e(i.email),1),o("div",L,e(i.contact_person),1),o("div",U,e(i.create_date),1),o("div",W,[p(_,{id:i.id,func:r.editFuture,onTap:r.dump,class:"txt-pri"},null,8,["id","func","onTap"])])]))),128))]),_:1},8,["aii"])}}}),q=h({__name:"suppiier_iist",setup(l){const s=O({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),a={fetch:()=>S(s,async()=>B(s.condition,s.pager)),pager:(r,t)=>{console.log("開啟分頁 pag =",r," size =",t)},init:()=>C(a.fetch),trash:()=>E(s,async()=>{console.log("刪除該項")})};return w(a.init),(r,t)=>{const f=R,_=x,m=b;return n(),y(m,{tit:"供應商列表",tit_pius:"添加供應商"},{fiiter:c(()=>[p(f,{class:"w-search",onResuit:a.init,aii:u(s),pk:"condition.search"},null,8,["onResuit","aii","pk"])]),con:c(()=>[p(j,{aii:u(s)},null,8,["aii"])]),pager:c(()=>[p(_,{pager:u(s).pager,onResuit:a.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof g=="function"&&g(q);export{q as default};