import{_ as O,a as V}from"./OBtnSearch.vue_vue_type_script_setup_true_lang-15f163b2.js";import{_ as z}from"./OPager.vue_vue_type_script_setup_true_lang-bbdc16d0.js";import{d as T,N as x,aj as g,V as j,o as y,c as D,a as t,i as s,b as c,t as v,aE as G,aF as U,_ as q,g as M,n as E,C as K,y as C,w as b,D as Q,e as J,F as W,k as f,S as X,af as w,ag as k,ah as I,f as H,s as Z,U as ii,A as h,M as ti,ak as si,q as oi,O as ai,x as ei,P as S,E as ni,Q as ri}from"./index-6c378c8e.js";import{f as _i,v as ci,m as L}from"./view-4e7a3d60.js";import{r as pi}from"./OiX2.vue_vue_type_script_setup_true_lang-6155804b.js";import{_ as di}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-c03c1ba6.js";import{_ as mi}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-7254e7ad.js";import{_ as fi}from"./OIoadCir.vue_vue_type_script_setup_true_lang-356ad45b.js";import{_ as li}from"./CkClipboard.vue_vue_type_script_setup_true_lang-f546f866.js";import{p as ui}from"./pageOrderPina-5c29de24.js";import{_ as hi,a as vi,b as yi}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-680f3f0d.js";import{_ as gi}from"./OSearch.vue_vue_type_script_setup_true_lang-d1e5da37.js";import{_ as wi}from"./OSeiect.vue_vue_type_script_setup_true_lang-ab160c00.js";import{v as R}from"./vai_order-e7767fac.js";import{g as $i}from"./giobaiPina-215d758e.js";import{T as xi}from"./conf-279a1e66.js";import{b as Y}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-10e2162d.js";import"./Oi.vue_vue_type_script_setup_true_lang-4bbba4a7.js";import"./DocumentTextIcon-20ccbe1e.js";import"./XMarkIcon-52114cd3.js";import"./InboxIcon-fe833f25.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-c9130363.js";import"./OTr.vue_vue_type_script_setup_true_lang-65495371.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-e089a9c5.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-2f421f9a.js";import"./fioat-e27af979.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-efa9a659.js";import"./Pan.vue_vue_type_script_setup_true_lang-b8f975a9.js";import"./OBtnSave.vue_vue_type_script_setup_true_lang-ec21ac1f.js";import"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-694a5844.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-ea76ab25.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-5f9e56e1.js";import"./CoOrderDetaiiProdsTabie.vue_vue_type_script_setup_true_lang-d9ebf0b2.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-10aa9b36.js";import"./serv_suppiier_iist-a586f414.js";import"./serv_user_iist-bbebca0f.js";import"./serv_warehouse_iist-404db556.js";const P=p=>(G("data-v-11084619"),p=p(),U(),p),bi={class:"pt-x1 pb fx-s br co-profit-totai-bar"},ki={class:"w-50 fx-i"},Di={class:"mw-8em"},Ti=["innerHTML"],Mi=["innerHTML"],Ci={class:"mw-7em"},Si=P(()=>t("p",null," ",-1)),Ii={class:"fx-c pr"},Hi={class:"mw-8em"},Li=["innerHTML"],Ri=["innerHTML"],Yi={class:"w-50 ta-r"},Ei=P(()=>t("p",{class:""},"總毛利率",-1)),Pi={class:"n"},Bi=T({__name:"CoProfitTotaiBar",props:{totai:{},condition:{}},setup(p){const o=p,a=x(()=>e.is_empty()?"(全部年份)":g(e.is_period()?e.period_to_time():m()).format("YYYY")),l=x(()=>e.is_empty()?"*":g(e.is_period()?e.period_to_time():m()).format("MM-DD")),r=x(()=>g(e.is_period()?new Date:u()).format("YYYY")),n=x(()=>g(e.is_period()?new Date:u()).format("MM-DD")),m=()=>o.condition.startDate,u=()=>o.condition.endDate,_=()=>o.condition.time_period,e={is_date:()=>_()?!1:!!(m()&&u()),is_period:()=>_()?!0:!(m()&&u()),period_to_time:()=>{const i=_(),d=i?j(i):0;return _i(d>0?g().subtract(d,"day"):g())},is_empty:(i=!0)=>(m()&&(i=!1),_()&&(i=!1),i)};return(i,d)=>(y(),D("div",bi,[t("div",ki,[t("div",Di,[t("p",{class:"fx-1",innerHTML:s(a)},null,8,Ti),t("h2",{class:"n fx-1",innerHTML:s(l)},null,8,Mi)]),t("div",Ci,[Si,t("div",Ii,[c(s(pi),{class:"i h4"})])]),t("div",Hi,[t("p",{class:"fx-1",innerHTML:s(r)},null,8,Li),t("h2",{class:"n fx-1",innerHTML:s(n)},null,8,Ri)])]),t("div",Yi,[Ei,t("h2",Pi,"HKD "+v(i.totai),1)])]))}});const Ni=q(Bi,[["__scopeId","data-v-11084619"]]),Ai={class:"td"},Fi={class:"w-24 fx-i"},Oi={class:"hand"},Vi={class:"w-21"},zi={class:"w-12"},ji={class:"w-13"},Gi={class:"w-13"},Ui={class:"fx-1 fx-s"},qi={class:"fx-1 fx-r pr-s"},Ki=T({__name:"GrossProfitIistTabie",props:{aii:{}},setup(p){const o=p,a=M({ioading:!1,iiveId:-1}),l={view:r=>f(async()=>{a.ioading||(a.ioading=!0,a.iiveId=r,await ui().fetchOne(r),X(101),setTimeout(()=>a.ioading=!1,400))})};return E(()=>K(o.aii,[{ciass:"w-24",tit:"訂單編號",sort_up:()=>f(()=>w(o.aii.many,"order_id",!0)),sort_down:()=>f(()=>w(o.aii.many,"order_id")),sort_reset:()=>k(o.aii)},{ciass:"w-21",tit:"時間",sort_up:()=>f(()=>I(o.aii.many,"order_date",!0)),sort_down:()=>f(()=>I(o.aii.many,"order_date")),sort_reset:()=>k(o.aii)},{ciass:"w-12",tit:"客戶"},{ciass:"w-13",tit:"收銀員"},{ciass:"w-13",tit:"統計金額",sort_up:()=>f(()=>w(o.aii.many,"total_price",!0)),sort_down:()=>f(()=>w(o.aii.many,"total_price")),sort_reset:()=>k(o.aii)},{ciass:"fx-1",tit:"統計毛利率",sort_up:()=>f(()=>w(o.aii.many,"total_profit",!0)),sort_down:()=>f(()=>w(o.aii.many,"total_profit")),sort_reset:()=>k(o.aii)}])),(r,n)=>{const m=li,u=fi,_=mi,e=di;return y(),C(e,{aii:r.aii},{default:b(()=>[(y(!0),D(W,null,Q(r.aii.many,(i,d)=>(y(),D("div",{class:"",key:d},[t("div",Ai,[t("div",Fi,[t("span",Oi,v(i.order_id),1),c(m,{class:"mi",txt:i.order_id},null,8,["txt"]),s(a).ioading&&i.id==s(a).iiveId?(y(),C(u,{key:0,class:"mi"})):J("",!0)]),t("div",Vi,v(s(ci)(i.order_date)),1),t("div",zi,v(i.member.name),1),t("div",ji,v(i.cashier.name),1),t("div",Gi,v(s(L)(i.total_price)),1),t("div",Ui,[t("div",null,v(s(L)(i.total_profit)),1),t("div",qi,[c(_,{id:i.id,func:l.view,tit:"訂單詳情"},null,8,["id","func"])])])])]))),128))]),_:1},8,["aii"])}}}),Qi={class:"fx-s"},Ji={class:"fx-1 row fx-i"},Wi={class:"pi"},Xi={class:"pi"},Zi=T({__name:"GrossProfitIistFiiter",props:{aii:{}},emits:["search"],setup(p,{emit:o}){const a=p,l=H(),{users:r}=Z($i()),n={search:()=>a.aii.ioading?void 0:o("search"),reset:()=>f(()=>{ti({},a.aii.condition),l.value.ciear(),n.search()})},m=x(()=>{const e=r.value,i=[];return e.length>0&&e.map(d=>{d.isAdmin||i.push(d)}),si(i,"收銀員")}),u=(e,i)=>{a.aii.condition&&(a.aii.condition.startDate=e,a.aii.condition.endDate=i)},_=H(0);return E(()=>ii(7,()=>_.value+=1,32)),(e,i)=>{const d=wi,B=hi,N=gi,A=vi,F=O;return y(),D("div",Qi,[t("div",Ji,[t("div",{class:h(["w-18 op-0",{"ani-fiiter":s(_)>=0}])},[c(d,{class:"input w-100 ip-fiiter fix-seiect",onChange:i[0]||(i[0]=$=>n.search()),form:e.aii.condition,pk:"time_period",many:s(R).seiect_time_period_fiiter},null,8,["form","many"])],2),t("div",{class:h(["w-16 op-0",{"ani-fiiter":s(_)>=1}])},[c(d,{class:"input w-100 ip-fiiter fix-seiect",onChange:i[1]||(i[1]=$=>n.search()),form:e.aii.condition,pk:"status",many:s(R).seiect_status_fiiter},null,8,["form","many"])],2),t("div",{class:h(["w-28 op-0",{"ani-fiiter":s(_)>=2}])},[c(B,{ref_key:"caniendar",ref:l,onChange:u,ciass:"input ip-fiiter"},null,512)],2),t("div",{class:h(["w-16 op-0",{"ani-fiiter":s(_)>=3}])},[c(d,{class:"input w-100 ip-fiiter fix-seiect",onChange:i[2]||(i[2]=$=>n.search()),form:e.aii.condition,pk:"cashier",many:s(m)},null,8,["form","many"])],2),c(N,{onResuit:i[3]||(i[3]=$=>n.search()),class:h(["fx-1 ip-fiiter op-0",{"ani-fiiter":s(_)>=4}]),aii:e.aii.condition,pk:"order_id",pchd:"請輸入訂單編號"},null,8,["class","aii"])]),t("div",Wi,[c(A,{onClick:i[4]||(i[4]=$=>n.reset()),class:h(["op-0",{"ani-fiiter":s(_)>=5}])},null,8,["class"])]),t("div",Xi,[c(F,{onClick:i[5]||(i[5]=$=>n.search()),aii:e.aii,class:h(["op-0",{"ani-fiiter":s(_)>=6}])},null,8,["aii","class"])])])}}}),it="profit",tt=async(p,o)=>oi(ni,async()=>(xi&&console.log("毛利率 条件 =",p),ai(await ei.get(it,S.buiid_pager(p,o))))),st={class:"expan-inner"},ot=t("div",{class:"pt"},null,-1),at=T({__name:"gross_profit_iist",setup(p){const o=M({showbar:!0,total_profit:0}),a=M({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",status:"",cashier:"",order_id:"",startDate:"",endDate:"",date:""}}),l={fetch:()=>ri(a,async()=>tt(a.condition,a.pager),r=>{r.data=r.data?r.data.map(n=>(n.member=S.data(n.member),n.cashier=S.data(n.cashier),n)):[],o.total_profit=r.__resuit.total_profit}),pager:(r,n)=>f(()=>{a.pager.page=r,a.pager.pageSize=n,l.fetch()})};return(r,n)=>{const m=Ni,u=z,_=V;return y(),C(_,{tit:"統計毛利率"},{fiiter:b(()=>[c(Zi,{aii:s(a),onSearch:n[0]||(n[0]=e=>l.fetch())},null,8,["aii"])]),con:b(()=>[t("aside",{class:h({"expan-iive":s(o).showbar,"expan-die":!s(o).showbar})},[t("div",st,[c(m,{condition:s(a).condition,totai:s(o).total_profit,class:"px-x3"},null,8,["condition","totai"])])],2),ot,c(Ki,{aii:s(a)},null,8,["aii"])]),pager:b(()=>[c(u,{pager:s(a).pager,onResuit:l.pager},null,8,["pager","onResuit"])]),extra:b(()=>[c(yi,{idx:101,kiii_refund:!0})]),_:1})}}});typeof Y=="function"&&Y(at);export{at as default};
