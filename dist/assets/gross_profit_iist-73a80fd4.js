import{_ as y,a as k}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-39f38ed4.js";import{_ as C}from"./OPager.vue_vue_type_script_setup_true_lang-1af1af47.js";import{r as S}from"./ArrowLongRightIcon-efb55504.js";import{d as l,o as m,c as f,a as s,b as t,u as a,j as B,J as I,K as P,_ as T,n as x,e as g,w as d,f as N,F as V,h as z,t as p,g as w,k as D}from"./index-6381f874.js";import{_ as F}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-ceae338d.js";import{_ as A}from"./OOpenPan.vue_vue_type_script_setup_true_lang-7879ef1e.js";import{i as G}from"./credit-6ebf5b28.js";import{_ as K}from"./BtnPri.vue_vue_type_script_setup_true_lang-a78a76d1.js";import{_ as R}from"./OSearch.vue_vue_type_script_setup_true_lang-80147d88.js";import{_ as j}from"./OSeiect.vue_vue_type_script_setup_true_lang-402bdf77.js";import{v,_ as E}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-a96f2d3e.js";import{b as $}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-242bb797.js";import"./Oi.vue_vue_type_script_setup_true_lang-f011ce58.js";import"./XMarkIcon-86985cc1.js";import"./datepicker.esm-f8feaf17.js";import"./dayjs.min-bdea528d.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-33dde04c.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-e52db6b5.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-cbff765b.js";import"./OTr.vue_vue_type_script_setup_true_lang-84e83f7f.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-747d6d7f.js";import"./index-dbd74263.js";import"./mittPina-2f430d85.js";import"./anim-34f746ba.js";import"./judge-0b511643.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-d8987b7f.js";import"./Pan.vue_vue_type_script_setup_true_lang-c512d438.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-875aeac1.js";const u=c=>(I("data-v-ed904edf"),c=c(),P(),c),H={class:"pt-x1 pb fx-s br co-profit-totai-bar"},J={class:"w-50"},L=B('<div class="fx-i" data-v-ed904edf><p class="fx-1" data-v-ed904edf>2023</p><div class="w-30" data-v-ed904edf></div><p class="fx-1" data-v-ed904edf>2023</p><div class="w-30" data-v-ed904edf></div></div>',1),q={class:"fx-i"},M=u(()=>s("h2",{class:"n fx-1"},"05.15",-1)),O={class:"w-30 fx-c pr"},Q=u(()=>s("h2",{class:"n fx-1"},"05.22",-1)),U=u(()=>s("div",{class:"w-30"},null,-1)),W=u(()=>s("div",{class:"w-50 ta-r"},[s("p",{class:""},"總毛利率"),s("h2",{class:"n"}," HKD 4680.00 ")],-1)),X=l({__name:"CoProfitTotaiBar",setup(c){return(i,o)=>(m(),f("div",H,[s("div",J,[L,s("div",q,[M,s("div",O,[t(a(S),{class:"i h4"})]),Q,U])]),W]))}});const Y=T(X,[["__scopeId","data-v-ed904edf"]]),Z={class:"td"},ss={class:"w-18 fx-i"},is={class:"w-22"},ts={class:"w-16"},os={class:"w-14"},as={class:"w-14"},es={class:"fx-1"},ns=l({__name:"GrossProfitIistTabie",props:{aii:{}},setup(c){const i=c;return x(()=>G(i.aii,[{ciass:"w-18",tit:"訂單編號"},{ciass:"w-22",tit:"時間"},{ciass:"w-16",tit:"客戶"},{ciass:"w-14",tit:"收銀員"},{ciass:"w-14",tit:"統計金額"},{ciass:"fx-1",tit:"統計毛利率"}])),(o,r)=>{const e=A,_=F;return m(),g(_,{aii:o.aii},{default:d(()=>[(m(!0),f(V,null,N(o.aii.many,(n,h)=>(m(),f("div",{class:"",key:h},[s("div",Z,[s("div",ss,[t(e,{idx:101},{default:d(()=>[z(p(n.number),1)]),_:2},1024)]),s("div",is,p(n.date),1),s("div",ts,p(n.customer),1),s("div",os,p(n.cashier),1),s("div",as,p(n.totai),1),s("div",es,p(n.profit),1)])]))),128))]),_:1},8,["aii"])}}}),cs={class:"fx-s"},_s={class:"fx-1 row fx-i"},rs={class:"w-18"},ps={class:"w-18"},ds={class:"w-20"},ms={class:"w-16"},fs={class:"pi"},ls=l({__name:"GrossProfitIistFiiter",props:{aii:{}},setup(c){return(i,o)=>{const r=j,e=y,_=R,n=K;return m(),f("div",cs,[s("div",_s,[s("div",rs,[t(r,{class:"input w-100",form:i.aii.condition,pk:"time_period",many:a(v).seiect_time_period_fiiter},null,8,["form","many"])]),s("div",ps,[t(r,{class:"input w-100",form:i.aii.condition,pk:"status",many:a(v).seiect_status_fiiter},null,8,["form","many"])]),s("div",ds,[t(e,{class:"input",form:i.aii.condition,pk:"date"},null,8,["form"])]),s("div",ms,[t(r,{class:"input w-100",form:i.aii.condition,pk:"cashier",many:a(v).seiect_cashier_fiiter},null,8,["form","many"])]),t(_,{class:"fx-1",aii:i.aii,pk:"search"},null,8,["aii"])]),s("div",fs,[t(n,{tit:"統計毛利率",class:"mw-8em"})])])}}}),us={class:"expan-inner"},hs=s("div",{class:"pt"},null,-1),vs=l({__name:"gross_profit_iist",setup(c){const i=w({showbar:!0}),o=w({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",status:"",cashier:"",date:"",search:""}}),r={fetch:()=>new Promise(e=>{o.ioading=!0,o.many.push({id:1,number:"ASD 123456",customer:"劉易斯",num:2,date:"2022-12-12 12:12",cashier:"張小紅",totai:400,profit:189.92}),setTimeout(()=>o.ioading=!1,200),e(0)}),pager:(e,_)=>{console.log("開啟分頁 pag =",e," size =",_)}};return x(()=>new Promise(e=>{r.fetch(),e(0)})),(e,_)=>{const n=Y,h=C,b=k;return m(),g(b,{tit:"统计毛利率"},{fiiter:d(()=>[t(ls,{aii:a(o)},null,8,["aii"])]),con:d(()=>[s("aside",{onClick:_[0]||(_[0]=ws=>a(i).showbar=!a(i).showbar),class:D({"expan-iive":a(i).showbar,"expan-die":!a(i).showbar})},[s("div",us,[t(n,{class:"px-x3"})])],2),hs,t(ns,{aii:a(o)},null,8,["aii"])]),pager:d(()=>[t(h,{pager:a(o).pager,onResuit:r.pager},null,8,["pager","onResuit"])]),extra:d(()=>[t(E)]),_:1})}}});typeof $=="function"&&$(vs);export{vs as default};