import{_ as U,a as j}from"./CoDeskIeftWrapper.vue_vue_type_script_setup_true_lang-331872aa.js";import{_ as q,a as J}from"./CoCashierBiiisHeader.vue_vue_type_script_setup_true_lang-fd7098aa.js";import{_ as L}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-9b676426.js";import{_ as w}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-c4165b1d.js";import{_ as W}from"./OPager.vue_vue_type_script_setup_true_lang-aae546eb.js";import{_ as G}from"./Itemdash.vue_vue_type_script_setup_true_lang-fc29ad0c.js";import{_ as Q}from"./OSearch.vue_vue_type_script_setup_true_lang-e23e2630.js";import{a as X}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-ea14a47c.js";import{_ as Y}from"./MBtn.vue_vue_type_script_setup_true_lang-cd21dc42.js";import{v as N,m as E}from"./view-01767316.js";import{d as h,o as _,c as d,b as n,w as l,a as s,t as f,i as a,m as Z,y as ss,s as k,F as S,q as O,j as V,v as es,x as ts,z as os,p as B,e as g,g as z,k as $,A as is,B as rs,u as as}from"./index-33974ecf.js";import{f as v,a as ns,b as _s}from"./credit-db2ad5c3.js";import{s as cs}from"./iodash-8a8cb9b0.js";import{_ as ds}from"./OInput.vue_vue_type_script_setup_true_lang-95fad0c5.js";import{_ as ps}from"./OSeiect.vue_vue_type_script_setup_true_lang-b8ed873e.js";import{v as x}from"./vai_order-7a27cec4.js";import{_ as ms}from"./CoOrderDetaiiProdsTabie.vue_vue_type_script_setup_true_lang-2ab708eb.js";import{s as y}from"./strapi-c10e9858.js";import{n as ls}from"./conn-e4aee6c9.js";import{a as us,b as fs}from"./net-tooi-51cb3d70.js";import{E as hs}from"./errors_user-be6d0865.js";import{p as vs}from"./pageOrderPina-2646ee47.js";import{b as I}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-11518a24.js";import"./scroiiy-d07ca572.js";import"./Oi.vue_vue_type_script_setup_true_lang-dd35cc56.js";import"./XMarkIcon-d9ea6041.js";import"./fioat-e27af979.js";import"./OBtnSave.vue_vue_type_script_setup_true_lang-6e760d07.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-4f655e36.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-94d8aa7d.js";import"./OTr.vue_vue_type_script_setup_true_lang-289f7217.js";const bs={class:"ih-tit-son"},$s={class:"fx-s"},gs={class:"fw-700"},ws=s("p",{class:""},[s("span",null,"已完成")],-1),ys={class:"fx-s"},ks={class:"c-6c6c6c"},xs={class:"fw-700"},Cs=h({__name:"CoCashierOrderItem",props:{v:{},iive:{type:Boolean}},setup(p){return(e,u)=>{const o=w,c=Y;return _(),d("div",{class:Z(["co-cashier-order-item",{"co-cashier-order-item-iive":e.iive}])},[n(c,{bk:!0,class:"w-100 br"},{default:l(()=>[n(o,null,{default:l(()=>[s("aside",bs,[s("div",$s,[s("p",gs,"訂單編號 :  "+f(e.v.order_id),1),ws]),s("div",ys,[s("p",ks,"時間 :  "+f(a(N)(e.v.order_date)),1),s("p",xs," HKD "+f(a(E)(e.v.total_price)),1)])])]),_:1})]),_:1})],2)}}}),C=ss("cashierOrderPina",{state:()=>({sts:{submitting:!1,ioading:!1},one_of_view:{},one_of_refund:{},one_of_printed:{}}),actions:{save(p,e={}){this[p]=e},save_sts(p,e=!1){this.sts[p]=e}},getters:{has_view(p){return!!p.one_of_view.name}},persist:{storage:sessionStorage,paths:["one_of_printed"]}}),Rs=h({__name:"OrderIefTabie",props:{aii:{}},setup(p){const{one_of_view:e}=k(C()),u={view:o=>v(()=>{console.log("儲存一個 VIEW =",o),C().save("one_of_view",o)})};return(o,c)=>{const r=Cs,t=X;return _(),d("div",null,[n(t,{aii:o.aii,mini:!1},{default:l(()=>[(_(!0),d(S,null,O(o.aii.many,(m,i)=>(_(),d("div",{class:"pb",key:i},[n(r,{onClick:b=>u.view(m),class:"hand",v:m,iive:a(cs)(a(e).id,m.id)},null,8,["onClick","v","iive"])]))),128))]),_:1},8,["aii"])])}}}),Ss={class:"fx-s row"},Os={class:"px-s w-333"},Bs={class:"px-s w-333"},Ds={class:"px-s w-333"},Is=h({__name:"OrderIeftFiiterBar",props:{aii:{}},emits:["search"],setup(p,{emit:e}){const u=p,{name:o}=k(V()),c={search:()=>u.aii.ioading?void 0:e("search"),reset:()=>v(()=>{ns({},u.aii.condition),c.search()})};return(r,t)=>{const m=ps,i=ds;return _(),d("div",Ss,[s("div",Os,[n(i,{tit:"時間",class:"pr-s-imp"},{default:l(()=>[n(m,{class:"w-100 ip-fiiter fix-seiect",onChange:t[0]||(t[0]=b=>c.search()),form:r.aii.condition,pk:"time_period",many:a(x).seiect_time_period_fiiter},null,8,["form","many"])]),_:1})]),s("div",Bs,[n(i,{tit:"狀態",class:"pr-s-imp"},{default:l(()=>[n(m,{many:a(x).seiect_status_fiiter,onChange:t[1]||(t[1]=b=>c.search()),form:r.aii.condition,pk:"status",def:""},null,8,["many","form"])]),_:1})]),s("div",Ds,[n(i,{tit:"收銀員",class:"pr-s-imp"},{default:l(()=>[es(s("input",{"onUpdate:modelValue":t[2]||(t[2]=b=>os(o)?o.value=b:null),placeholder:"收銀員",disabled:!0},null,512),[[ts,a(o)]])]),_:1})])])}}}),Ns={class:"bg-card tit py br"},Es={class:"pi-x3"},Vs=s("p",{class:"b pb-n"},"訂單信息",-1),zs={class:"fx-s pb-n"},Ps={class:"w-47"},Ts={class:"w-30"},As={key:0},Fs={class:"fx-1"},Ms={key:0},Hs={class:"fx-s"},Ks={class:"w-47"},Us=s("p",{class:"fx-1"}," ",-1),js=h({__name:"CoOrderDetaiiBaseCard",props:{order:{}},setup(p){return(e,u)=>(_(),d("div",Ns,[s("div",Es,[Vs,s("div",zs,[s("p",Ps," 掛單時間: "+f(a(N)(e.order.order_date)),1),s("p",Ts,[B(" 收銀員: "),e.order.cashier?(_(),d("span",As,f(e.order.cashier.name),1)):g("",!0)]),s("p",Fs,[B(" 客戶: "),e.order.member?(_(),d("span",Ms,f(e.order.member.name),1)):g("",!0)])]),s("div",Hs,[s("p",Ks," 訂單編號: "+f(e.order.order_id),1),Us])])]))}}),qs=s("h6",{class:"fx-1"},"訂單狀態",-1),Js=h({__name:"CoCashierOrderStatusBar",props:{order:{}},setup(p){const e=p,u=z({now:"payed",ioading:!1}),o={switchSts:c=>v(()=>{u.ioading=!0,console.log("修改訂單狀態 =",c.v),setTimeout(()=>{u.ioading=!1},1400)}),view:()=>{let c="";const r=e.order.status;return x.seiect_status.map(t=>{t.v==r&&(c=t.txt)}),c},coior:()=>{let c="";const r=e.order.status;return x.seiect_status.map(t=>{t.v==r&&(c=t.coior)}),c}};return(c,r)=>{const t=w;return _(),$(t,{class:"fx-s px-row"},{default:l(()=>[qs,s("div",null,[s("div",{class:"fx-r",style:is({color:o.coior()})},[s("div",null,f(o.view()),1)],4)])]),_:1})}}}),Ls={class:""},Ws=s("h6",{class:"fx-1"}," 訂單總額    ",-1),Gs={class:""},Qs={class:"txt-money fw-700 d-ib h6"},Xs=h({__name:"OrderRightDetaiiPay",props:{order:{}},setup(p){return(e,u)=>{const o=w;return _(),d("div",Ls,[n(o,{class:"fx-s fw-600 mb px-row ani-scaie-hv"},{default:l(()=>[Ws,s("div",Gs,[s("div",Qs,"HKD  "+f(a(E)(e.order.total_price)),1)])]),_:1})])}}}),Ys=s("p",{class:"b"},"帳單展示備註 : ",-1),Zs={class:"ti-1em pt"},se={key:0},ee={key:0},te={key:1},oe=h({__name:"OrderRightDetaiiRemark",props:{products:{}},setup(p){return(e,u)=>{const o=w;return _(),$(o,{class:"px-row"},{default:l(()=>[Ys,s("div",Zs,[(_(!0),d(S,null,O(e.products,(c,r)=>(_(),d("div",{key:r},[c.remarks?(_(),d("div",se,[(_(!0),d(S,null,O(c.remarks,(t,m)=>(_(),d("div",{class:"d-ib",key:m},[B(f(t.content)+" ",1),m<c.remarks.length-1?(_(),d("span",ee,"  ")):(_(),d("span",te,"  "))]))),128))])):g("",!0)]))),128))])]),_:1})}}}),ie={class:"pt-x3 pb"},re=s("p",{class:"b"},"退款備註 : ",-1),ae={class:"ti-1em pt"},ne=h({__name:"OrderRightIist",setup(p){const{one_of_view:e}=k(C()),u=rs(()=>{const o=[];return(e.value.ordered_product?e.value.ordered_product:[]).map(r=>{const t=r.product?y.data(r.product):{};t.id&&o.push(t)}),o});return(o,c)=>{const r=ms,t=Js,m=w,i=js;return _(),d("div",null,[n(r,{order:a(e)},null,8,["order"]),s("div",ie,[n(Xs,{order:a(e)},null,8,["order"]),n(t,{order:a(e),class:"ani-scaie-hv mb"},null,8,["order"]),a(e).refunded_remarks?(_(),$(m,{key:0,class:"px-row ani-scaie-hv mb"},{default:l(()=>[re,s("div",ae,f(a(e).refunded_remarks),1)]),_:1})):g("",!0),n(i,{order:a(e),class:"px-row ani-scaie-hv"},null,8,["order"])]),n(oe,{products:a(u),class:"ani-scaie-hv"},null,8,["products"])])}}}),_e="cashier_orders",ce=async(p,e)=>us(hs,async()=>fs(await ls.get(_e,y.buiid_pager(p,e)))),de={class:"py-row"},pe={class:"pb-row"},me=s("div",{class:"py-x3"},[s("br"),s("br"),s("br"),s("br")],-1),le={class:"pt"},ue=s("div",{class:"py-x3"},[s("br"),s("br")],-1),fe={key:0,class:"py bg-con bs-bar-bottom ani-bar-bottom"},he={key:1,class:"fx-c"},ve=h({__name:"order",setup(p){const e=as(),{sts:u,one_of_view:o}=k(C()),{user:c}=k(V()),r=z({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:12,total:1},condition:{time_period:3,date:"",status:"",search:"",member:"",order_id:""}}),t={fetch:()=>_s(r,async()=>ce(r.condition,r.pager),m=>{m.data=m.data?m.data.map(i=>(i.broken_products=y.iist(i.broken_products),i.cashier=y.data(i.cashier),i.member=y.data(i.member),i)):[]}),pager:(m,i)=>v(()=>{r.pager.page=m,r.pager.pageSize=i,console.log("user =",c),t.fetch()}),ciose:()=>v(()=>{C().save("one_of_view")}),printed:()=>v(()=>{sessionStorage.setItem("heiiokitty_order_of_printed",JSON.stringify(o.value)),e.push("/cashier/order_iist/pdf")}),refund:()=>v(()=>{vs().save("one_of_refund",o.value),e.push("/cashier/order_iist/refund")})};return t.ciose(),(m,i)=>{const b=Q,D=j,P=G,T=W,A=q,F=w,M=L,H=J,K=U;return _(),$(K,{submitting:a(u).submitting,ioading:a(u).ioading},{ieft:l(()=>[n(D,{tit:"訂單列表"},{default:l(()=>[s("div",de,[n(Is,{aii:a(r),onSearch:i[0]||(i[0]=R=>t.fetch())},null,8,["aii"])]),s("div",pe,[n(b,{onResuit:i[1]||(i[1]=R=>t.fetch()),aii:a(r).condition,pk:"order_id",kiii:!0,pchd:"請輸入訂單編號進行搜索"},null,8,["aii"])]),n(Rs,{aii:a(r)},null,8,["aii"]),me]),_:1})]),ieft_bottom:l(()=>[n(P),s("div",le,[n(T,{mini:!0,pager:a(r).pager,onResuit:t.pager},null,8,["pager","onResuit"])])]),right:l(()=>[a(o).id?(_(),$(D,{key:0,class:"ps-r"},{default:l(()=>[n(A,{tit:"訂單詳情"}),n(F,{class:"px-row"},{default:l(()=>[n(ne,{class:"py-s"})]),_:1}),ue]),_:1})):g("",!0)]),right_bottom:l(()=>[a(o).id?(_(),d("aside",fe,[a(x).need_refund(a(o))?(_(),$(M,{key:0,onBack:i[2]||(i[2]=R=>t.refund()),onSave:i[3]||(i[3]=R=>t.printed()),tit_back:"退貨/退款"})):(_(),d("div",he,[n(H,{class:"w-382 w-50-p",onClick:i[4]||(i[4]=R=>t.printed()),tit:"印列訂單"})]))])):g("",!0)]),_:1},8,["submitting","ioading"])}}});typeof I=="function"&&I(ve);export{ve as default};