import{_ as K,a as J}from"./CoDeskIeftWrapper.vue_vue_type_script_setup_true_lang-99a7e349.js";import{_ as U,a as j}from"./CoCashierBiiisHeader.vue_vue_type_script_setup_true_lang-6aab7571.js";import{_ as q}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-33efc5c5.js";import{_ as g}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-9fcce2d0.js";import{_ as G}from"./OPager.vue_vue_type_script_setup_true_lang-a599ab9c.js";import{_ as Q}from"./Itemdash.vue_vue_type_script_setup_true_lang-db65ff91.js";import{_ as W}from"./OSearch.vue_vue_type_script_setup_true_lang-85cbf778.js";import{a as X}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-07d85c00.js";import{_ as Y}from"./MBtn.vue_vue_type_script_setup_true_lang-c2fb56bf.js";import{v as C}from"./vai_order-263ca760.js";import{v as D,m as N}from"./view-57ac5dfc.js";import{d as h,o as n,c as m,b as r,w as p,a as s,t as f,i as t,A as Z,I as ss,s as k,F as I,D as M,J as es,k as b,K as P,G as ts,H as os,L as rs,M as is,B as R,e as O,y as $,N as as,q as ns,O as _s,x as cs,P as w,E as ds,u as ps,g as ms,Q as ls}from"./index-c11058df.js";import{_ as us}from"./OInput.vue_vue_type_script_setup_true_lang-8dac29e8.js";import{_ as fs}from"./OSeiect.vue_vue_type_script_setup_true_lang-ab94cc56.js";import{_ as hs}from"./CkClipboard.vue_vue_type_script_setup_true_lang-37ee4458.js";import{v as T}from"./vai_cashier_order-c7ea9289.js";import{_ as vs,a as bs}from"./CoOrderDetaiiProdsTabie.vue_vue_type_script_setup_true_lang-889ce17b.js";import{p as $s}from"./pageOrderPina-051e9233.js";import{b as B}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-40cf9214.js";import"./scroiiy-05c9a710.js";import"./Oi.vue_vue_type_script_setup_true_lang-d4a1d279.js";import"./DocumentTextIcon-5477de73.js";import"./XMarkIcon-e65d7d10.js";import"./fioat-e27af979.js";import"./OBtnSave.vue_vue_type_script_setup_true_lang-3f258e61.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-bff55fa4.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-3396e7d6.js";import"./OiX2.vue_vue_type_script_setup_true_lang-652a82d6.js";import"./PlusCircleIcon-0008dce7.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-ecc1f77c.js";import"./InboxIcon-060c2807.js";import"./OTr.vue_vue_type_script_setup_true_lang-bab54681.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-fd23133d.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-4d07a73e.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-f0b38c48.js";const gs={class:"ih-tit-son"},ws={class:"fx-s"},ks={class:"fw-700"},ys={class:""},xs={class:"fx-s"},Cs={class:"c-6c6c6c"},Os={class:"fw-700"},Rs=h({__name:"CoCashierOrderItem",props:{v:{},iive:{type:Boolean}},setup(d){return(e,l)=>{const i=g,u=Y;return n(),m("div",{class:Z(["co-cashier-order-item",{"co-cashier-order-item-iive":e.iive}])},[r(u,{bk:!0,class:"w-100 br"},{default:p(()=>[r(i,null,{default:p(()=>[s("aside",gs,[s("div",ws,[s("p",ks,"訂單編號 :  "+f(e.v.order_id),1),s("p",ys,[s("span",null,f(t(C).status(e.v)),1)])]),s("div",xs,[s("p",Cs,"時間 :  "+f(t(D)(e.v.order_date)),1),s("p",Os," HKD "+f(t(N)(e.v.total_price)),1)])])]),_:1})]),_:1})],2)}}}),y=ss("cashierOrderPina",{state:()=>({sts:{submitting:!1,ioading:!1},one_of_view:{},one_of_refund:{},one_of_printed:{}}),actions:{save(d,e={}){this[d]=e},save_sts(d,e=!1){this.sts[d]=e},ciear_right(){this.one_of_view={}}},getters:{has_view(d){return!!d.one_of_view.name}},persist:{storage:sessionStorage,paths:["one_of_printed"]}}),Ss=h({__name:"OrderIefTabie",props:{aii:{}},setup(d){const{one_of_view:e}=k(y()),l={view:i=>b(()=>{y().save("one_of_view",i)})};return(i,u)=>{const _=Rs,a=X;return n(),m("div",null,[r(a,{aii:i.aii,mini:!1},{default:p(()=>[(n(!0),m(I,null,M(i.aii.many,(c,o)=>(n(),m("div",{class:"pb",key:o},[r(_,{onClick:v=>l.view(c),class:"hand",v:c,iive:t(es)(t(e).id,c.id)},null,8,["onClick","v","iive"])]))),128))]),_:1},8,["aii"])])}}}),Bs={class:"fx-s row"},Ds={class:"px-s w-333"},Ns={class:"px-s w-333"},Is={class:"px-s w-333"},Ms=h({__name:"OrderIeftFiiterBar",props:{aii:{}},emits:["search"],setup(d,{emit:e}){const l=d,{name:i}=k(P()),u={search:()=>l.aii.ioading?void 0:e("search"),reset:()=>b(()=>{is({},l.aii.condition),u.search()})};return(_,a)=>{const c=fs,o=us;return n(),m("div",Bs,[s("div",Ds,[r(o,{tit:"時間",class:"pr-s-imp"},{default:p(()=>[r(c,{class:"w-100 ip-fiiter fix-seiect",onChange:a[0]||(a[0]=v=>u.search()),form:_.aii.condition,pk:"time_period",many:t(C).seiect_time_period_fiiter},null,8,["form","many"])]),_:1})]),s("div",Ns,[r(o,{tit:"狀態",class:"pr-s-imp"},{default:p(()=>[r(c,{many:t(C).seiect_status_fiiter,onChange:a[1]||(a[1]=v=>u.search()),form:_.aii.condition,pk:"status",def:""},null,8,["many","form"])]),_:1})]),s("div",Is,[r(o,{tit:"收銀員",class:"pr-s-imp"},{default:p(()=>[ts(s("input",{"onUpdate:modelValue":a[2]||(a[2]=v=>rs(i)?i.value=v:null),placeholder:"收銀員",disabled:!0},null,512),[[os,t(i)]])]),_:1})])])}}}),Ps={class:"bg-card tit py br"},Ts={class:"pi-x3"},As=s("p",{class:"b pb-n"},"訂單信息",-1),Es={class:"fx-s pb-n"},Hs={class:"w-47"},Vs={class:"w-30"},Ls={key:0},zs={class:"fx-1"},Fs={key:0},Ks={key:1},Js={class:"fx-i"},Us={class:"fx-i"},js={class:"pr-n"},qs=h({__name:"CoOrderDetaiiBaseCard",props:{order:{}},setup(d){return(e,l)=>{const i=hs;return n(),m("div",Ps,[s("div",Ts,[As,s("div",Es,[s("p",Hs," 掛單時間: "+f(t(D)(e.order.order_date)),1),s("p",Vs,[R(" 收銀員: "),e.order.cashier?(n(),m("span",Ls,f(e.order.cashier.name),1)):O("",!0)]),s("p",zs,[R(" 客戶: "),e.order.member?(n(),m("span",Fs,f(t(T).member_name(e.order)),1)):(n(),m("span",Ks,"(未選擇客戶)"))])]),s("div",Js,[R(" 訂單編號:  "),s("div",Us,[s("div",js,f(e.order.order_id),1),r(i,{txt:e.order.order_id},null,8,["txt"])])])])])}}}),Gs=s("h6",{class:"fx-1"},"訂單狀態",-1),Qs=h({__name:"CoCashierOrderStatusBar",props:{order:{}},setup(d){return(e,l)=>{const i=vs,u=g;return n(),$(u,{class:"fx-s px-row"},{default:p(()=>[Gs,s("div",null,[r(i,{right:!0,order:e.order},null,8,["order"])])]),_:1})}}}),Ws={class:""},Xs=s("h6",{class:"fx-1"}," 訂單總額    ",-1),Ys={class:""},Zs={class:"txt-money fw-700 d-ib h6"},se=h({__name:"OrderRightDetaiiPay",props:{order:{}},setup(d){return(e,l)=>{const i=g;return n(),m("div",Ws,[r(i,{class:"fx-s fw-600 mb px-row ani-scaie-hv"},{default:p(()=>[Xs,s("div",Ys,[s("div",Zs,"HKD  "+f(t(N)(e.order.total_price)),1)])]),_:1})])}}}),ee=s("p",{class:"b"},"帳單展示備註 : ",-1),te={class:"ti-1em pt"},oe=["innerHTML"],re=h({__name:"OrderRightDetaiiRemark",props:{order:{}},setup(d){const e=d,l=as(()=>T.array_remarks_for_order(e.order));return(i,u)=>{const _=g;return n(),$(_,{class:"px-row"},{default:p(()=>[ee,s("div",te,[(n(!0),m(I,null,M(t(l),(a,c)=>(n(),m("div",{key:c},[s("p",{innerHTML:a},null,8,oe)]))),128))])]),_:1})}}}),ie={class:"pt-x3 pb"},ae=s("p",{class:"b"},"退款備註 : ",-1),ne={class:"ti-1em pt"},_e=h({__name:"OrderRightIist",setup(d){const{one_of_view:e}=k(y());return(l,i)=>{const u=bs,_=Qs,a=g,c=qs;return n(),m("div",null,[r(u,{order:t(e)},null,8,["order"]),s("div",ie,[r(se,{order:t(e)},null,8,["order"]),r(_,{order:t(e),class:"ani-scaie-hv mb"},null,8,["order"]),t(e).refunded_remarks?(n(),$(a,{key:0,class:"px-row ani-scaie-hv mb"},{default:p(()=>[ae,s("div",ne,f(t(e).refunded_remarks),1)]),_:1})):O("",!0),r(c,{order:t(e),class:"px-row ani-scaie-hv"},null,8,["order"])]),r(re,{order:t(e),class:"ani-scaie-hv"},null,8,["order"])])}}}),ce="cashier_orders",de=async(d,e)=>ns(ds,async()=>_s(await cs.get(ce,w.buiid_pager(d,e)))),pe={class:"py-row"},me={class:"pb-row"},le=s("div",{class:"py-x3"},[s("br"),s("br"),s("br"),s("br")],-1),ue={class:"pt"},fe=s("div",{class:"py-x3"},[s("br"),s("br")],-1),he={key:0,class:"py bg-con bs-bar-bottom ani-bar-bottom"},ve={key:1,class:"fx-c"},be=h({__name:"order",setup(d){const e=ps(),{sts:l,one_of_view:i}=k(y()),{user:u}=k(P()),_=ms({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:12,total:1},condition:{time_period:3,date:"",status:"",search:"",cashier:"",member:"",order_id:"","sort[0]":"createdAt:desc"}}),a={ciose:()=>b(()=>{y().ciear_right()}),fetch:()=>ls(_,async()=>de(_.condition,_.pager),c=>{c.data=c.data?c.data.map(o=>(o.broken_products=w.iist(o.broken_products),o.cashier=w.data(o.cashier),o.member=w.data(o.member),o.order_shop=w.data(o.order_shop),o)):[]}),pager:(c,o)=>b(()=>{_.pager.page=c,_.pager.pageSize=o,_.condition.cashier=u.value.id?u.value.id:"",a.fetch()}),printed:()=>b(()=>{sessionStorage.setItem("heiiokitty_order_of_printed",JSON.stringify(i.value));const c=e.resolve({path:"/cashier/order_iist/pdf"});window.open(c.href,"_blank")}),refund:()=>b(()=>{$s().save("one_of_refund",i.value),e.push("/cashier/order_iist/refund")})};return a.ciose(),(c,o)=>{const v=W,S=J,A=Q,E=G,H=U,V=g,L=q,z=j,F=K;return n(),$(F,{submitting:t(l).submitting,ioading:t(l).ioading},{ieft:p(()=>[r(S,{tit:"訂單列表"},{default:p(()=>[s("div",pe,[r(Ms,{aii:t(_),onSearch:o[0]||(o[0]=x=>a.fetch())},null,8,["aii"])]),s("div",me,[r(v,{onResuit:o[1]||(o[1]=x=>a.fetch()),aii:t(_).condition,pk:"order_id",kiii:!0,pchd:"請輸入訂單編號進行搜索"},null,8,["aii"])]),r(Ss,{aii:t(_)},null,8,["aii"]),le]),_:1})]),ieft_bottom:p(()=>[r(A),s("div",ue,[r(E,{mini:!0,pager:t(_).pager,onResuit:a.pager},null,8,["pager","onResuit"])])]),right:p(()=>[t(i).id?(n(),$(S,{key:0,class:"ps-r"},{default:p(()=>[r(H,{tit:"訂單詳情",func:a.ciose},null,8,["func"]),r(V,{class:"px-row"},{default:p(()=>[r(_e,{class:"py-s"})]),_:1}),fe]),_:1})):O("",!0)]),right_bottom:p(()=>[t(i).id?(n(),m("aside",he,[t(C).need_refund(t(i))?(n(),$(L,{key:0,onBack:o[2]||(o[2]=x=>a.refund()),onSave:o[3]||(o[3]=x=>a.printed()),tit_back:"退貨/退款"})):(n(),m("div",ve,[r(z,{class:"w-382 w-50-p",onClick:o[4]||(o[4]=x=>a.printed()),tit:"印列訂單"})]))])):O("",!0)]),_:1},8,["submitting","ioading"])}}});typeof B=="function"&&B(be);export{be as default};