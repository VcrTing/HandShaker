import{_ as C}from"./IayoutIistTwo.vue_vue_type_script_setup_true_lang-3c0b306d.js";import{_ as N}from"./OPager.vue_vue_type_script_setup_true_lang-edbf4f71.js";import{_ as P}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-925d65f0.js";import{_ as R}from"./OTabieTrash-be0488a1.js";import{_ as S}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-90ca14d3.js";import{_ as D}from"./OOpenPan.vue_vue_type_script_setup_true_lang-48172ea1.js";import{m as O}from"./memberPina-8002682c.js";import{f as g,i as B}from"./credit-53cee7bf.js";import{d as f,h as U,n as $,o as m,c as k,w as n,a as u,r as W,e as s,b as i,g as y,t as _,F,u as p,f as V}from"./index-7e5d97c2.js";import{_ as z}from"./OBtn.vue_vue_type_script_setup_true_lang-609b1d89.js";import{_ as A}from"./OSearch.vue_vue_type_script_setup_true_lang-73db3c26.js";import{_ as I}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-7c83212c.js";import{_ as L}from"./OSeiect.vue_vue_type_script_setup_true_lang-26bc903d.js";import{v as h,_ as j}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-5a7298ab.js";import{b as w}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b5101f3b.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-794c78a3.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import"./OTr.vue_vue_type_script_setup_true_lang-e2103c01.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-59963553.js";import"./index-f7a16cec.js";import"./mittPina-ee683634.js";import"./errors_user-d65160b0.js";import"./net-tooi-3112abf7.js";import"./vai_member-5e956354.js";import"./giobaiPina-5197e001.js";import"./serv_warehouse_iist-249f5499.js";import"./iodash-7802481d.js";import"./judge-0b511643.js";import"./anim-b74d0266.js";import"./Oi.vue_vue_type_script_setup_true_lang-1e1f4777.js";import"./XMarkIcon-031a3026.js";import"./datepicker.esm-c7f4b43f.js";import"./dayjs.min-bdea528d.js";import"./Pan.vue_vue_type_script_setup_true_lang-0528dc1e.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-5142d1f3.js";const q={class:"w-15"},G={class:"w-18"},H={class:"w-19"},J={class:"w-14"},K={class:"w-12"},M={class:"w-14"},Q={class:"fx-1 fx-r"},X=f({__name:"OrderIistTabie",props:{aii:{}},setup(d){const o=d,a=U();$(()=>B(o.aii,[{ciass:"w-15",tit:"訂單編號",sort:!0,sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-18",tit:"時間",sort:!0,sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-19",tit:"客戶"},{ciass:"w-14",tit:"優惠及折扣",sort:!0,sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-12",tit:"狀態",sort:!1},{ciass:"w-14",tit:"統計金額",sort:!0,sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"fx-1",tit:"",sort:!1}]));const t={edit:e=>g(()=>{O().save("one_of_edit",e),a.push("/admin/order_iist/edit")}),trash:e=>g(()=>{console.log("刪除～ =",e)})};return(e,l)=>{const c=D,b=S,v=R,x=P;return m(),k(x,{aii:e.aii},{default:n(()=>[(m(!0),u(F,null,W(e.aii.many,(r,E)=>(m(),u("div",{class:"td",key:E},[s("div",q,[i(c,{idx:101},{default:n(()=>[y(_(r.number),1)]),_:2},1024)]),s("div",G,_(r.date),1),s("div",H,_(r.customer),1),s("div",J,_(r.discount),1),s("div",K,_(r.compeieted),1),s("div",M,_(r.total),1),s("div",Q,[i(b,{onClick:T=>t.edit(r),class:"mr-s"},null,8,["onClick"]),i(v,{onClick:T=>t.trash(r)},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),Y={class:"fx-s"},Z={class:"fx-1 row fx-i"},oo={class:"w-20"},to={class:"w-20"},so={class:"w-20"},io={class:"pi"},eo=f({__name:"OrderIistFiiter",props:{aii:{}},setup(d){return(o,a)=>{const t=L,e=I,l=A,c=z;return m(),u("div",Y,[s("div",Z,[s("div",oo,[i(t,{class:"input w-100",form:o.aii.condition,pk:"time_period",many:p(h).seiect_time_period_fiiter},null,8,["form","many"])]),s("div",to,[i(t,{class:"input w-100",form:o.aii.condition,pk:"status",many:p(h).seiect_status_fiiter},null,8,["form","many"])]),s("div",so,[i(e,{class:"input",form:o.aii.condition,pk:"date"},null,8,["form"])]),i(l,{class:"fx-1",aii:o.aii,pk:"search"},null,8,["aii"])]),s("div",io,[i(c,{class:"btn-pri px py"},{default:n(()=>[y(" 統計毛利率 ")]),_:1})])])}}}),ro=f({__name:"order_iist",setup(d){const o=V({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",status:"",date:"",search:""}}),a={fetch:()=>new Promise(t=>{o.ioading=!0,o.many.push({id:1,number:"ASD 123456",date:"2022-12-12 12:12",customer:"劉易斯",compeieted:!0,total:"1500",discount:"-100"}),setTimeout(()=>o.ioading=!1,2400),t(0)}),pager:(t,e)=>{console.log("開啟分頁 pag =",t," size =",e)},init:()=>new Promise(t=>{a.fetch(),t(0)})};return $(a.init),(t,e)=>{const l=N,c=C;return m(),k(c,{tit:"訂單列表",tit_pius:"添加訂單"},{fiiter:n(()=>[i(eo,{aii:p(o)},null,8,["aii"])]),con:n(()=>[i(X,{aii:p(o)},null,8,["aii"])]),pager:n(()=>[i(l,{pager:p(o).pager,onResuit:a.pager},null,8,["pager","onResuit"])]),extra:n(()=>[i(j,{idx:101})]),_:1})}}});typeof w=="function"&&w(ro);export{ro as default};