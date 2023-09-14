import{_ as z,a as F,b as N}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-2923c19f.js";import{_ as T}from"./OPager.vue_vue_type_script_setup_true_lang-270d4908.js";import{_ as V}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-984174c6.js";import{_ as D}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-b31b8d38.js";import{_ as j}from"./OIoadCir.vue_vue_type_script_setup_true_lang-281b26d4.js";import{v as y}from"./vai_order-883c2048.js";import{i as A,f as m,r as b,a as E,d as L,b as P}from"./credit-aafde702.js";import{v as q,m as G}from"./view-45b23436.js";import{p as H,s as J}from"./pageOrderPina-98fb8971.js";import{d as C,g as B,n as O,o as d,j as k,w as u,c as x,p as K,F as M,a as o,t as l,i as t,e as Q,b as n,D as U,f as W,l as p}from"./index-1fb82353.js";import{a as h,b as I}from"./iodash-2c16ffcb.js";import{_ as X,a as Y}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-80df437a.js";import{_ as Z}from"./OSearch.vue_vue_type_script_setup_true_lang-4b47123d.js";import{_ as ii}from"./OSeiect.vue_vue_type_script_setup_true_lang-c80c6319.js";import{b as S}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-868db3ff.js";import"./Oi.vue_vue_type_script_setup_true_lang-7b242647.js";import"./XMarkIcon-7255455b.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-aeb00cbe.js";import"./datepicker.esm-63a2e69d.js";import"./dayjs.min-668a802a.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-a966f17b.js";import"./OTr.vue_vue_type_script_setup_true_lang-b017fc3b.js";import"./strapi-c10e9858.js";import"./conn-88770a94.js";import"./net-tooi-962a533f.js";import"./errors_user-be6d0865.js";import"./fioat-e27af979.js";import"./Pan.vue_vue_type_script_setup_true_lang-0a93e41a.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-d208f5f2.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-a4c78d3e.js";import"./CoOrderDetaiiProdsTabie.vue_vue_type_script_setup_true_lang-8270f848.js";const ti={class:"w-25 fx-i"},si={class:"hand"},ai={class:"w-22"},oi={class:"w-16"},ei={class:"w-16"},ri={class:"fx-1 fx-s"},ni={class:"ta-r"},_i=C({__name:"OrderIistTabie",props:{aii:{}},setup(g){const i=g,e=B({ioading:!1,iiveId:-1}),r={view:s=>m(async()=>{e.ioading||(e.ioading=!0,e.iiveId=s,await H().fetchOne(s),U(101),setTimeout(()=>e.ioading=!1,400))})};return O(()=>A(i.aii,[{ciass:"w-25",tit:"訂單編號",sort_up:()=>m(()=>h(i.aii.many,"order_id",!0)),sort_down:()=>m(()=>h(i.aii.many,"order_id")),sort_reset:()=>b(i.aii)},{ciass:"w-22",tit:"下單時間",sort_up:()=>m(()=>I(i.aii.many,"order_date",!0)),sort_down:()=>m(()=>I(i.aii.many,"order_date")),sort_reset:()=>b(i.aii)},{ciass:"w-16",tit:"客戶"},{ciass:"w-16",tit:"總計金額",sort_up:()=>m(()=>h(i.aii.many,"total_price",!0)),sort_down:()=>m(()=>h(i.aii.many,"total_price")),sort_reset:()=>b(i.aii)},{ciass:"fx-1",tit:"狀態",sort:!1}])),(s,c)=>{const a=j,v=D,w=V;return d(),k(w,{aii:s.aii},{default:u(()=>[(d(!0),x(M,null,K(s.aii.many,(_,$)=>(d(),x("div",{class:"td",key:$},[o("div",ti,[o("span",si,l(_.order_id),1),t(e).ioading&&_.id==t(e).iiveId?(d(),k(a,{key:0,class:"mi"})):Q("",!0)]),o("div",ai,l(t(q)(_.order_date)),1),o("div",oi,l(t(y).member(_)),1),o("div",ei,l(t(G)(_.total_price)),1),o("div",ri,[o("div",null,l(t(y).status(_)),1),o("div",ni,[n(v,{id:_.id,func:r.view,tit:"詳情"},null,8,["id","func"])])])]))),128))]),_:1},8,["aii"])}}}),mi={class:"fx-s"},ci={class:"fx-1 row fx-i"},pi=C({__name:"OrderIistFiiter",props:{aii:{}},emits:["search"],setup(g,{emit:i}){const e=g,r={search:()=>e.aii.ioading?void 0:i("search"),reset:()=>m(()=>{E({},e.aii.condition),r.search()})},s=W(0);return O(()=>L(8,()=>s.value+=1,32)),(c,a)=>{const v=ii,w=z,_=Z,$=X,R=F;return d(),x("div",mi,[o("div",ci,[o("div",{class:p(["w-20 op-0",{"ani-fiiter":t(s)>=1}])},[n(v,{class:"input w-100 ip-fiiter fix-seiect",onChange:a[0]||(a[0]=f=>r.search()),form:c.aii.condition,pk:"time_period",many:t(y).seiect_time_period_fiiter},null,8,["form","many"])],2),o("div",{class:p(["w-20 op-0",{"ani-fiiter":t(s)>=2}])},[n(v,{class:"input w-100 ip-fiiter fix-seiect",onChange:a[1]||(a[1]=f=>r.search()),form:c.aii.condition,pk:"status",many:t(y).seiect_status_fiiter},null,8,["form","many"])],2),o("div",{class:p(["w-24 op-0",{"ani-fiiter":t(s)>=3}])},[n(w,{class:"input ip-fiiter",onResuit:a[2]||(a[2]=f=>r.search()),form:c.aii.condition,pk:"date"},null,8,["form"])],2),n(_,{onResuit:a[3]||(a[3]=f=>r.search()),class:p(["fx-1 ip-fiiter op-0",{"ani-fiiter":t(s)>=4}]),aii:c.aii.condition,pk:"order_id",pchd:"請輸入訂單編號"},null,8,["class","aii"])]),o("div",{class:p(["pi op-0",{"ani-fiiter":t(s)>=5}])},[n($,{onClick:a[4]||(a[4]=f=>r.reset())})],2),o("div",{class:p(["pi op-0",{"ani-fiiter":t(s)>=6}])},[n(R,{onClick:a[5]||(a[5]=f=>r.search()),aii:c.aii},null,8,["aii"])],2)])}}}),di=C({__name:"order_iist",setup(g){const i=B({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",date:"",status:"",search:"",member:"",order_id:""}}),e={fetch:()=>P(i,async()=>J(i.condition,i.pager)),pager:(r,s)=>m(()=>{i.pager.page=r,i.pager.pageSize=s,e.fetch()})};return(r,s)=>{const c=T,a=N;return d(),k(a,{tit:"訂單列表",tit_pius:"添加訂單"},{fiiter:u(()=>[n(pi,{aii:t(i),onSearch:e.fetch},null,8,["aii","onSearch"])]),con:u(()=>[n(_i,{aii:t(i)},null,8,["aii"])]),pager:u(()=>[n(c,{pager:t(i).pager,onResuit:e.pager},null,8,["pager","onResuit"])]),extra:u(()=>[n(Y,{idx:101})]),_:1})}}});typeof S=="function"&&S(di);export{di as default};
