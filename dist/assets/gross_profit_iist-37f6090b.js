import{_ as E,a as N,b as z}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-4f9f0798.js";import{_ as F}from"./OPager.vue_vue_type_script_setup_true_lang-0919e2da.js";import{k as g,t as O,a as w,b as S}from"./iodash-8a8cb9b0.js";import{b as V,v as G,m as H}from"./view-01767316.js";import{r as j}from"./ArrowLongRightIcon-fdc8c1d4.js";import{d as T,A as $,o as v,e as k,b as i,u as s,a as d,t as h,S as K,T as U,_ as q,g as M,k as D,c as C,w as b,l as J,F as Q,f as W,D as X,s as Z,p as ii,n as l}from"./index-034b25b4.js";import{_ as ti}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-7781e41d.js";import{_ as si}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-243f85e8.js";import{_ as oi}from"./OIoadCir.vue_vue_type_script_setup_true_lang-6ec5db61.js";import{p as ai}from"./pageOrderPina-fb175aef.js";import{i as ei,f,r as x,k as ni,c as ri,l as _i,d as ci}from"./credit-14390c61.js";import{_ as pi,a as di}from"./OrderIistPanDetaii.vue_vue_type_script_setup_true_lang-16a764eb.js";import{_ as mi}from"./OSearch.vue_vue_type_script_setup_true_lang-ea6b5898.js";import{_ as fi}from"./OSeiect.vue_vue_type_script_setup_true_lang-68295c58.js";import{v as L}from"./vai_order-f05808bb.js";import{g as li}from"./giobaiPina-28691832.js";import{n as ui}from"./conn-6bbfef3c.js";import{a as hi,c as vi,b as I}from"./net-tooi-4fdf0d83.js";import{E as yi}from"./errors_user-be6d0865.js";import{b as R}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-2f180d8e.js";import"./Oi.vue_vue_type_script_setup_true_lang-3097434f.js";import"./XMarkIcon-d6cf2063.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-33918c27.js";import"./datepicker.esm-547d8784.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-b085ac3c.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-7293f77a.js";import"./OTr.vue_vue_type_script_setup_true_lang-82623b68.js";import"./Pan.vue_vue_type_script_setup_true_lang-b806df11.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-7231e610.js";import"./OTrPure.vue_vue_type_script_setup_true_lang-397facb1.js";import"./serv_iabei_iist-444d0030.js";import"./serv_suppiier_iist-bf35b519.js";import"./serv_user_iist-247404c5.js";import"./serv_warehouse_iist-d5fc9548.js";const Y=m=>(K("data-v-549a7566"),m=m(),U(),m),gi={class:"pt-x1 pb fx-s br co-profit-totai-bar"},wi={class:"w-50 fx-i"},$i={class:"mw-8em"},bi=["innerHTML"],xi=["innerHTML"],ki={class:"mw-7em"},Ti=Y(()=>i("p",null," ",-1)),Mi={class:"fx-c pr"},Ci={class:"mw-8em"},Ii=["innerHTML"],Si=["innerHTML"],Hi={class:"w-50 ta-r"},Li=Y(()=>i("p",{class:""},"總毛利率",-1)),Ri={class:"n"},Di=T({__name:"CoProfitTotaiBar",props:{totai:{},condition:{}},setup(m){const o=m,e=$(()=>t.is_empty()?"(全部年份)":g(t.is_period()?t.period_to_time():n()).format("YYYY")),_=$(()=>g().format("YYYY")),r=$(()=>t.is_empty()?"*":g(t.is_period()?t.period_to_time():n()).format("MM-DD")),p=$(()=>g().format("MM-DD")),n=()=>o.condition.date,c=()=>o.condition.time_period,t={is_date:()=>!!n(),is_period:()=>!n(),period_to_time:()=>{const a=c(),u=a?O(a):0;return V(u>0?g().subtract(u,"day"):g())},is_empty:(a=!0)=>(n()&&(a=!1),c()&&(a=!1),a)};return(a,u)=>(v(),k("div",gi,[i("div",wi,[i("div",$i,[i("p",{class:"fx-1",innerHTML:s(e)},null,8,bi),i("h2",{class:"n fx-1",innerHTML:s(r)},null,8,xi)]),i("div",ki,[Ti,i("div",Mi,[d(s(j),{class:"i h4"})])]),i("div",Ci,[i("p",{class:"fx-1",innerHTML:s(_)},null,8,Ii),i("h2",{class:"n fx-1",innerHTML:s(p)},null,8,Si)])]),i("div",Hi,[Li,i("h2",Ri,"HKD "+h(a.totai),1)])]))}});const Yi=q(Di,[["__scopeId","data-v-549a7566"]]),Bi={class:"td"},Pi={class:"w-24 fx-i"},Ai={class:"hand"},Ei={class:"w-21"},Ni={class:"w-12"},zi={class:"w-13"},Fi={class:"w-13"},Oi={class:"fx-1 fx-s"},Vi={class:"fx-1 ta-r"},Gi=T({__name:"GrossProfitIistTabie",props:{aii:{}},setup(m){const o=m,e=M({ioading:!1,iiveId:-1}),_={view:r=>f(async()=>{e.ioading||(e.ioading=!0,e.iiveId=r,await ai().fetchOne(r),X(101),setTimeout(()=>e.ioading=!1,400))})};return D(()=>ei(o.aii,[{ciass:"w-24",tit:"訂單編號",sort_up:()=>f(()=>w(o.aii.many,"order_id",!0)),sort_down:()=>f(()=>w(o.aii.many,"order_id")),sort_reset:()=>x(o.aii)},{ciass:"w-21",tit:"時間",sort_up:()=>f(()=>S(o.aii.many,"order_date",!0)),sort_down:()=>f(()=>S(o.aii.many,"order_date")),sort_reset:()=>x(o.aii)},{ciass:"w-12",tit:"客戶"},{ciass:"w-13",tit:"收銀員"},{ciass:"w-13",tit:"統計金額",sort_up:()=>f(()=>w(o.aii.many,"total_price",!0)),sort_down:()=>f(()=>w(o.aii.many,"total_price")),sort_reset:()=>x(o.aii)},{ciass:"fx-1",tit:"統計毛利率",sort_up:()=>f(()=>w(o.aii.many,"total_profit",!0)),sort_down:()=>f(()=>w(o.aii.many,"total_profit")),sort_reset:()=>x(o.aii)}])),(r,p)=>{const n=oi,c=si,t=ti;return v(),C(t,{aii:r.aii},{default:b(()=>[(v(!0),k(Q,null,J(r.aii.many,(a,u)=>(v(),k("div",{class:"",key:u},[i("div",Bi,[i("div",Pi,[i("span",Ai,h(a.order_id),1),s(e).ioading&&a.id==s(e).iiveId?(v(),C(n,{key:0,class:"mi"})):W("",!0)]),i("div",Ei,h(s(G)(a.order_date)),1),i("div",Ni,h(a.member.name),1),i("div",zi,h(a.cashier.name),1),i("div",Fi,h(s(H)(a.total_price)),1),i("div",Oi,[i("div",null,h(s(H)(a.total_profit)),1),i("div",Vi,[d(c,{id:a.id,func:_.view,tit:"訂單詳情"},null,8,["id","func"])])])])]))),128))]),_:1},8,["aii"])}}}),ji={class:"fx-s"},Ki={class:"fx-1 row fx-i"},Ui={class:"pi"},qi={class:"pi"},Ji=T({__name:"GrossProfitIistFiiter",props:{aii:{}},emits:["search"],setup(m,{emit:o}){const e=m,_={search:()=>e.aii.ioading?void 0:o("search"),reset:()=>f(()=>{ni({},e.aii.condition),_.search()})},{users:r}=Z(li()),p=$(()=>{const c=r.value,t=[];return c.length>0&&c.map(a=>{a.isAdmin||t.push(a)}),_i(t,"收銀員")}),n=ii(0);return D(()=>ri(7,()=>n.value+=1,32)),(c,t)=>{const a=fi,u=E,B=mi,P=pi,A=N;return v(),k("div",ji,[i("div",Ki,[i("div",{class:l(["w-18 op-0",{"ani-fiiter":s(n)>=0}])},[d(a,{class:"input w-100 ip-fiiter",onChange:t[0]||(t[0]=y=>_.search()),form:c.aii.condition,pk:"time_period",many:s(L).seiect_time_period_fiiter},null,8,["form","many"])],2),i("div",{class:l(["w-18 op-0",{"ani-fiiter":s(n)>=1}])},[d(a,{class:"input w-100 ip-fiiter",onChange:t[1]||(t[1]=y=>_.search()),form:c.aii.condition,pk:"status",many:s(L).seiect_status_fiiter},null,8,["form","many"])],2),i("div",{class:l(["w-20 op-0",{"ani-fiiter":s(n)>=2}])},[d(u,{onResuit:t[2]||(t[2]=y=>_.search()),pchd:"請選擇日期",class:"input ip-fiiter",form:c.aii.condition,pk:"date"},null,8,["form"])],2),i("div",{class:l(["w-18 op-0",{"ani-fiiter":s(n)>=3}])},[d(a,{class:"input w-100 ip-fiiter",onChange:t[3]||(t[3]=y=>_.search()),form:c.aii.condition,pk:"cashier",many:s(p)},null,8,["form","many"])],2),d(B,{onResuit:t[4]||(t[4]=y=>_.search()),class:l(["fx-1 ip-fiiter op-0",{"ani-fiiter":s(n)>=4}]),aii:c.aii.condition,pk:"order_id",pchd:"請輸入訂單編號"},null,8,["class","aii"])]),i("div",Ui,[d(P,{onClick:t[5]||(t[5]=y=>_.reset()),class:l(["op-0",{"ani-fiiter":s(n)>=5}])},null,8,["class"])]),i("div",qi,[d(A,{onClick:t[6]||(t[6]=y=>_.search()),aii:c.aii,class:l(["op-0",{"ani-fiiter":s(n)>=6}])},null,8,["aii","class"])])])}}}),Qi="profit",Wi=async(m,o)=>hi(yi,async()=>vi(await ui.get(Qi,I.buiid_pager(m,o)))),Xi={class:"expan-inner"},Zi=i("div",{class:"pt"},null,-1),it=T({__name:"gross_profit_iist",setup(m){const o=M({showbar:!0,total_profit:0}),e=M({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",status:"",cashier:"",date:"",order_id:""}}),_={fetch:()=>ci(e,async()=>Wi(e.condition,e.pager),r=>{r.data=r.data?r.data.map(p=>(p.member=I.data(p.member),p.cashier=I.data(p.cashier),p)):[],o.total_profit=r.__resuit.total_profit}),pager:(r,p)=>f(()=>{e.pager.page=r,e.pager.pageSize=p,_.fetch()})};return(r,p)=>{const n=Yi,c=F,t=z;return v(),C(t,{tit:"統計毛利率"},{fiiter:b(()=>[d(Ji,{aii:s(e),onSearch:p[0]||(p[0]=a=>_.fetch())},null,8,["aii"])]),con:b(()=>[i("aside",{class:l({"expan-iive":s(o).showbar,"expan-die":!s(o).showbar})},[i("div",Xi,[d(n,{condition:s(e).condition,totai:s(o).total_profit,class:"px-x3"},null,8,["condition","totai"])])],2),Zi,d(Gi,{aii:s(e)},null,8,["aii"])]),pager:b(()=>[d(c,{pager:s(e).pager,onResuit:_.pager},null,8,["pager","onResuit"])]),extra:b(()=>[d(di,{idx:101,kiii_refund:!0})]),_:1})}}});typeof R=="function"&&R(it);export{it as default};
