import{_ as x,a as R}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-f8567df9.js";import{_ as C}from"./OPager.vue_vue_type_script_setup_true_lang-67557adf.js";import{_ as S}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-6d96d082.js";import{_ as N}from"./OTabieTrash-498507ce.js";import{_ as T}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-4fe9b7f6.js";import{_ as O}from"./OOpenPan.vue_vue_type_script_setup_true_lang-7336be1d.js";import{m as D}from"./memberPina-a8f9c8f3.js";import{i as B,f as k,b as I}from"./credit-1a0a6fdb.js";import{d as h,i as U,n as F,o as r,e as u,w as _,c as g,f as P,F as V,a as s,b as n,h as A,t as l,r as M,u as d,x as W,y as z,g as L}from"./index-9cb55470.js";import{_ as j}from"./OBtnSearch.vue_vue_type_script_setup_true_lang-54fb9343.js";import{_ as q}from"./OSearch.vue_vue_type_script_setup_true_lang-0889aec5.js";import{_ as G}from"./BtnIcon.vue_vue_type_script_setup_true_lang-9d2d61a4.js";import{_ as H}from"./OSeiect.vue_vue_type_script_setup_true_lang-ea6bd40c.js";import{v,_ as J}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-d32f75ab.js";import{n as K,E as Q}from"./errors_user-dfb0f348.js";import{a as X,c as Y,b as Z}from"./net-tooi-3112abf7.js";import{b}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-bf182311.js";import"./Oi.vue_vue_type_script_setup_true_lang-0b3adbe9.js";import"./XMarkIcon-97dc68ff.js";import"./datepicker.esm-3fd71bd3.js";import"./dayjs.min-bdea528d.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-70cb50a8.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-65f05d22.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0d07935b.js";import"./OTr.vue_vue_type_script_setup_true_lang-d34f94e8.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-f8656ef7.js";import"./index-052f0899.js";import"./mittPina-3e5f9057.js";import"./vai_member-8dfd84f8.js";import"./giobaiPina-9cc0a78c.js";import"./serv_warehouse_iist-08b4e3aa.js";import"./iodash-66372aee.js";import"./judge-0b511643.js";import"./anim-34f746ba.js";import"./Pan.vue_vue_type_script_setup_true_lang-186b6578.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-92a7c15e.js";const oo={class:"w-17"},io={class:"w-20"},to={class:"w-21"},so={class:"w-16"},eo={class:"w-14"},no={class:"fx-1 fx-r"},ro=h({__name:"OrderIistTabie",props:{aii:{}},setup(c){const o=c,i=U();F(()=>B(o.aii,[{ciass:"w-17",tit:"訂單編號",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-20",tit:"時間",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-21",tit:"客戶"},{ciass:"w-16",tit:"優惠及折扣",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-14",tit:"狀態",sort:!1},{ciass:"fx-1",tit:"",sort:!1}]));const t={edit:e=>k(()=>{D().save("one_of_edit",e),i.push("/admin/order_iist/edit")}),trash:e=>k(()=>{console.log("刪除～ =",e)})};return(e,f)=>{const m=O,$=T,w=N,p=S;return r(),u(p,{aii:e.aii},{default:_(()=>[(r(!0),g(V,null,P(e.aii.many,(a,y)=>(r(),g("div",{class:"td",key:y},[s("div",oo,[n(m,{idx:101},{default:_(()=>[A(l(a.order_id),1)]),_:2},1024)]),s("div",io,l(a.order_date),1),s("div",to,l(a.member.name),1),s("div",so,l(a.status),1),s("div",eo,l(a.total_price),1),s("div",no,[n($,{onClick:E=>t.edit(a),class:"mr-s"},null,8,["onClick"]),n(w,{onClick:E=>t.trash(a)},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),ao={class:"o-input-i-fat ps-r"},_o={class:"input fx-i pr-x2"},co={class:"middie r-0 pr-x1"},mo=h({__name:"OInputIFat",props:{icon:{},kiii:{type:Boolean}},emits:["trash","tap"],setup(c){return(o,i)=>{const t=G;return r(),g("div",ao,[s("div",_o,[M(o.$slots,"default")]),s("div",co,[o.kiii?(r(),u(t,{key:0,onClick:i[0]||(i[0]=e=>o.$emit("trash")),icon:"x"})):(r(),u(t,{key:1,icon:o.icon},null,8,["icon"]))])])}}}),po={class:"fx-s"},lo={class:"fx-1 row fx-i"},fo={class:"w-18"},uo={class:"w-18"},go={class:"w-18"},ho={class:"pi"},$o=h({__name:"OrderIistFiiter",props:{aii:{}},setup(c){const o={search:()=>{console.log("搜索")}};return(i,t)=>{const e=H,f=x,m=mo,$=q,w=j;return r(),g("div",po,[s("div",lo,[s("div",fo,[n(e,{class:"input w-100",form:i.aii.condition,pk:"time_period",many:d(v).seiect_time_period_fiiter},null,8,["form","many"])]),s("div",uo,[n(e,{class:"input w-100",form:i.aii.condition,pk:"status",many:d(v).seiect_status_fiiter},null,8,["form","many"])]),s("div",go,[n(f,{class:"input",form:i.aii.condition,pk:"date"},null,8,["form"])]),n(m,{class:"w-18",icon:"user",kiii:i.aii.condition.member,onTrash:t[1]||(t[1]=p=>i.aii.condition.member="")},{default:_(()=>[W(s("input",{placeholder:"會員名稱","onUpdate:modelValue":t[0]||(t[0]=p=>i.aii.condition.member=p)},null,512),[[z,i.aii.condition.member]])]),_:1},8,["kiii"]),n($,{class:"fx-1",aii:i.aii,pchd:"訂單編號",pk:"search"},null,8,["aii"])]),s("div",ho,[n(w,{onClick:t[2]||(t[2]=p=>o.search()),aii:i.aii},null,8,["aii"])])])}}}),wo="orders",ko=async(c,o)=>X(Q,async()=>Y(await K.get(wo,Z.buiid_pager(c,o)))),vo=h({__name:"order_iist",setup(c){const o=L({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",date:"",status:"",search:"",member:"",order_id:""}}),i={fetch:()=>I(o,async()=>ko(o.condition,o.pager)),pager:(t,e)=>k(()=>{o.pager.page=t,o.pager.pageSize=e,i.fetch()})};return(t,e)=>{const f=C,m=R;return r(),u(m,{tit:"訂單列表",tit_pius:"添加訂單"},{fiiter:_(()=>[n($o,{aii:d(o)},null,8,["aii"])]),con:_(()=>[n(ro,{aii:d(o)},null,8,["aii"])]),pager:_(()=>[n(f,{pager:d(o).pager,onResuit:i.pager},null,8,["pager","onResuit"])]),extra:_(()=>[n(J,{idx:101})]),_:1})}}});typeof b=="function"&&b(vo);export{vo as default};
