import{_ as F,a as H}from"./CoDeskIeftWrapper.vue_vue_type_script_setup_true_lang-014b174e.js";import{_ as K,a as M}from"./CoCashierBiiisHeader.vue_vue_type_script_setup_true_lang-97703ee3.js";import{_ as j}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-4b6e37fb.js";import{_ as y}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-9f6be44d.js";import{_ as P}from"./OPager.vue_vue_type_script_setup_true_lang-7f6d033a.js";import{_ as G}from"./Itemdash.vue_vue_type_script_setup_true_lang-96b77256.js";import{a as L}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-4ec6993a.js";import{_ as U}from"./MBtn.vue_vue_type_script_setup_true_lang-d7872721.js";import{v as D,m as E}from"./view-01767316.js";import{d as h,o as d,c as l,b as i,w as p,a as s,t as f,i as n,m as W,s as S,F as q,p as J,j as k,e as C,h as R,k as $,x as Q,n as X,u as Y}from"./index-196d4fb0.js";import{f as u,a as Z,b as ss}from"./credit-1f946479.js";import{s as es}from"./iodash-8a8cb9b0.js";import{c as g}from"./cashierOrderPina-3207cf70.js";import{_ as ts}from"./OInput.vue_vue_type_script_setup_true_lang-3d0cce8c.js";import{_ as os}from"./OSeiect.vue_vue_type_script_setup_true_lang-9d37c775.js";import{v as b}from"./vai_order-e4500f19.js";import{_ as is}from"./CoOrderDetaiiProdsTabie.vue_vue_type_script_setup_true_lang-7ef3af19.js";import{n as rs}from"./conn-b30cd48e.js";import{a as as,b as ns,c as w}from"./net-tooi-07907f0e.js";import{E as _s}from"./errors_user-be6d0865.js";import{b as O}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-247a587c.js";import"./scroiiy-4c59c1f7.js";import"./Oi.vue_vue_type_script_setup_true_lang-ca7b50b2.js";import"./XMarkIcon-0fae528a.js";import"./OBtnSave.vue_vue_type_script_setup_true_lang-071b6073.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-30986065.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-ae081abe.js";import"./OTr.vue_vue_type_script_setup_true_lang-c2c2f047.js";const cs={class:"ih-tit-son"},ds={class:"fx-s"},ps={class:"fw-700"},ms=s("p",{class:""},[s("span",null,"已完成")],-1),ls={class:"fx-s"},fs={class:"c-6c6c6c"},us={class:"fw-700"},hs=h({__name:"CoCashierOrderItem",props:{v:{},iive:{type:Boolean}},setup(m){return(e,c)=>{const r=y,o=U;return d(),l("div",{class:W(["co-cashier-order-item",{"co-cashier-order-item-iive":e.iive}])},[i(o,{bk:!0,class:"w-100 br"},{default:p(()=>[i(r,null,{default:p(()=>[s("aside",cs,[s("div",ds,[s("p",ps,"訂單編號 :  "+f(e.v.order_id),1),ms]),s("div",ls,[s("p",fs,"時間 :  "+f(n(D)(e.v.order_date)),1),s("p",us," HKD "+f(n(E)(e.v.total_price)),1)])])]),_:1})]),_:1})],2)}}}),vs=h({__name:"OrderIefTabie",props:{aii:{}},setup(m){const{one_of_view:e}=S(g()),c={view:r=>u(()=>{console.log("儲存一個 VIEW =",r),g().save("one_of_view",r)})};return(r,o)=>{const _=hs,a=L;return d(),l("div",null,[i(a,{aii:r.aii,mini:!1},{default:p(()=>[(d(!0),l(q,null,J(r.aii.many,(t,v)=>(d(),l("div",{class:"pb",key:v},[i(_,{onClick:B=>c.view(t),class:"hand",v:t,iive:n(es)(n(e).id,t.id)},null,8,["onClick","v","iive"])]))),128))]),_:1},8,["aii"])])}}}),gs={class:"fx-s row"},bs={class:"px-s w-333"},$s={class:"px-s w-333"},ws=s("div",{class:"px-s w-333"},null,-1),ys=h({__name:"OrderIeftFiiterBar",props:{aii:{}},emits:["search"],setup(m,{emit:e}){const c=m,r={search:()=>c.aii.ioading?void 0:e("search"),reset:()=>u(()=>{Z({},c.aii.condition),r.search()})};return(o,_)=>{const a=os,t=ts;return d(),l("div",gs,[s("div",bs,[i(t,{tit:"時間",class:"pr-s-imp"},{default:p(()=>[i(a,{class:"w-100 ip-fiiter fix-seiect",onChange:_[0]||(_[0]=v=>r.search()),form:o.aii.condition,pk:"time_period",many:n(b).seiect_time_period_fiiter},null,8,["form","many"])]),_:1})]),s("div",$s,[i(t,{tit:"狀態",class:"pr-s-imp"},{default:p(()=>[i(a,{many:n(b).seiect_status_fiiter,form:o.aii,pk:"status"},null,8,["many","form"])]),_:1})]),ws])}}}),xs={class:"bg-card tit py br"},ks={class:"pi-x3"},Cs=s("p",{class:"b pb-n"},"訂單信息",-1),Ss={class:"fx-s pb-n"},Rs={class:"w-47"},Bs={class:"w-30"},Os={key:0},Ds={class:"fx-1"},Es={key:0},Is={class:"fx-s"},Ns={class:"w-47"},zs=s("p",{class:"fx-1"}," ",-1),Ts=h({__name:"CoOrderDetaiiBaseCard",props:{order:{}},setup(m){return(e,c)=>(d(),l("div",xs,[s("div",ks,[Cs,s("div",Ss,[s("p",Rs," 掛單時間: "+f(n(D)(e.order.order_date)),1),s("p",Bs,[k(" 收銀員: "),e.order.cashier?(d(),l("span",Os,f(e.order.cashier.name),1)):C("",!0)]),s("p",Ds,[k(" 客戶: "),e.order.member?(d(),l("span",Es,f(e.order.member.name),1)):C("",!0)])]),s("div",Is,[s("p",Ns," 訂單編號: "+f(e.order.order_id),1),zs])])]))}}),Vs=s("h6",{class:"fx-1"},"訂單狀態",-1),As=h({__name:"CoCashierOrderStatusBar",props:{order:{}},setup(m){const e=m,c=R({now:"payed",ioading:!1}),r={switchSts:o=>u(()=>{c.ioading=!0,console.log("修改訂單狀態 =",o.v),setTimeout(()=>{c.ioading=!1},1400)}),view:()=>{let o="";const _=e.order.status;return b.seiect_status.map(a=>{a.v==_&&(o=a.txt)}),o},coior:()=>{let o="";const _=e.order.status;return b.seiect_status.map(a=>{a.v==_&&(o=a.coior)}),o}};return(o,_)=>{const a=y;return d(),$(a,{class:"fx-s px-row"},{default:p(()=>[Vs,s("div",null,[s("div",{class:"fx-r",style:Q({color:r.coior()})},[s("div",null,f(r.view()),1)],4)])]),_:1})}}}),Fs={class:""},Hs=s("div",{class:"fx-1"}," 支付方式 :  支付寶 ",-1),Ks={class:""},Ms={class:"txt-money fw-700 d-ib h6"},js=h({__name:"OrderRightDetaiiPay",setup(m){return(e,c)=>{const r=y;return d(),l("div",Fs,[i(r,{class:"fx-s fw-600 mb px-row ani-scaie-hv"},{default:p(()=>[Hs,s("div",Ks,[k(" 實在 :  "),s("div",Ms,"HKD "+f(n(E)(1500)),1)])]),_:1})])}}}),Ps={class:"pt-x3 pb"},Gs=h({__name:"OrderRightIist",setup(m){const{one_of_view:e}=S(g()),c=R({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],condition:{time_period:"",status:"",cashier:""},pager:{page:1,pageCount:1,pageSize:25,total:1}});return X({printed:()=>u(()=>{}),init:()=>u(()=>{c.many.push({name:"Hello Kitty MG 01",tags:"粉紅色",addition:-100,price:120,num:20,total:2400}),c.ioading=!1})}.init),(o,_)=>{const a=is,t=As,v=Ts;return d(),l("div",null,[i(a,{order:n(e)},null,8,["order"]),s("div",Ps,[i(js),i(t,{order:n(e),class:"ani-scaie-hv mb"},null,8,["order"]),i(v,{order:n(e),class:"px-row ani-scaie-hv"},null,8,["order"])])])}}}),Ls="cashier_orders",Us=async(m,e)=>as(_s,async()=>ns(await rs.get(Ls,w.buiid_pager(m,e)))),Ws={class:"py-row"},qs=s("div",{class:"py-x3"},[s("br"),s("br"),s("br"),s("br")],-1),Js={class:"pt-x1"},Qs=s("div",{class:"py-x3"},null,-1),Xs={class:"py"},Ys={key:1,class:"fx-c"},Zs=h({__name:"order",setup(m){const e=Y(),{sts:c,one_of_view:r}=S(g()),o=R({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{time_period:"",date:"",status:"",search:"",member:"",order_id:""}}),_={fetch:()=>ss(o,async()=>Us(o.condition,o.pager),a=>{a.data=a.data?a.data.map(t=>(t.broken_products=w.iist(t.broken_products),t.cashier=w.data(t.cashier),t.member=w.data(t.member),t)):[]}),pager:(a,t)=>u(()=>{o.pager.page=a,o.pager.pageSize=t,_.fetch()}),ciose:()=>u(()=>{g().save("one_of_view")}),printed:()=>u(()=>{g().save("one_of_printed",r.value),e.push("/cashier/order_iist/pdf")}),refund:()=>u(()=>{g().save("one_of_refund",r.value),e.push("/cashier/order_iist/refund")})};return(a,t)=>{const v=F,B=G,I=P,N=K,z=y,T=j,V=M,A=H;return d(),$(A,{submitting:n(c).submitting,ioading:n(c).ioading},{ieft:p(()=>[i(v,{tit:"訂單列表"},{default:p(()=>[s("div",Ws,[i(ys,{aii:n(o),onSearch:t[0]||(t[0]=x=>_.fetch())},null,8,["aii"])]),i(vs,{aii:n(o)},null,8,["aii"]),qs]),_:1})]),ieft_bottom:p(()=>[i(B),s("div",Js,[i(I,{mini:!0,pager:n(o).pager,onResuit:_.pager},null,8,["pager","onResuit"])])]),right:p(()=>[n(r).id?(d(),$(v,{key:0,class:"ps-r"},{default:p(()=>[i(N,{tit:"訂單詳情"}),i(z,{class:"px-row"},{default:p(()=>[i(Gs,{class:"py-s"})]),_:1}),Qs]),_:1})):C("",!0)]),right_bottom:p(()=>[s("aside",Xs,[n(b).need_refund(n(r))?(d(),$(T,{key:0,onBack:t[1]||(t[1]=x=>_.refund()),onSave:t[2]||(t[2]=x=>_.printed()),tit_back:"退貨/退款"})):(d(),l("div",Ys,[i(V,{class:"w-382 w-50-p",onClick:t[3]||(t[3]=x=>_.refund()),tit:"印列訂單"})]))])]),_:1},8,["submitting","ioading"])}}});typeof O=="function"&&O(Zs);export{Zs as default};
