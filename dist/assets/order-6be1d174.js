import{_ as T,a as z}from"./CoDeskIeftWrapper.vue_vue_type_script_setup_true_lang-35cfbb9a.js";import{_ as F}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-efad341d.js";import{_ as g}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-91c550c9.js";import{_ as H}from"./CoCashierBiiisHeader.vue_vue_type_script_setup_true_lang-74c15905.js";import{_ as K}from"./OBtnSave.vue_vue_type_script_setup_true_lang-701ae422.js";import{_ as E}from"./OPager.vue_vue_type_script_setup_true_lang-0919e2da.js";import{_ as G}from"./Itemdash.vue_vue_type_script_setup_true_lang-d7b176c6.js";import{_ as M}from"./OTabieIoading.vue_vue_type_script_setup_true_lang-b085ac3c.js";import{_ as j}from"./MBtn.vue_vue_type_script_setup_true_lang-2f180d8e.js";import{d as l,o as c,e as f,a as e,w as a,b as s,t as b,n as q,y as L,s as C,F as W,l as J,u as n,_ as Q,x as U,i as Y,c as $,g as P,k as S,q as Z,f as ss}from"./index-034b25b4.js";import{f as m}from"./credit-14390c61.js";import{s as es}from"./iodash-8a8cb9b0.js";import{_ as ts}from"./OInput.vue_vue_type_script_setup_true_lang-228e8e00.js";import{_ as is}from"./OSeiect.vue_vue_type_script_setup_true_lang-68295c58.js";import{_ as os}from"./CoCashierOrderStatusBar.vue_vue_type_script_setup_true_lang-e49d04d2.js";import{m as as}from"./view-01767316.js";import{b as k}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-6ec5db61.js";import"./scroiiy-a1bc53d1.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-7231e610.js";import"./Oi.vue_vue_type_script_setup_true_lang-3097434f.js";import"./XMarkIcon-d6cf2063.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-7293f77a.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-54829c7f.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-89630cbf.js";const ns={class:"ih-tit-son"},_s={class:"fx-s"},cs={class:"fw-700"},rs=s("p",{class:""},[s("span",null,"已完成")],-1),ps={class:"fx-s"},ds={class:"c-6c6c6c"},ms={class:"fw-700"},fs=l({__name:"CoCashierOrderItem",props:{v:{},iive:{type:Boolean}},setup(_){return(t,p)=>{const i=g,o=j;return c(),f("div",{class:q(["co-cashier-order-item",{"co-cashier-order-item-iive":t.iive}])},[e(o,{bk:!0,class:"w-100 br"},{default:a(()=>[e(i,null,{default:a(()=>[s("aside",ns,[s("div",_s,[s("p",cs,"訂單編號 :  "+b(t.v.number),1),rs]),s("div",ps,[s("p",ds,"時間 :  "+b(t.v.date),1),s("p",ms," HKD "+b(t.v.price),1)])])]),_:1})]),_:1})],2)}}}),h=L("cashierOrderPina",{state:()=>({sts:{submitting:!1,ioading:!1},one_of_view:{},one_of_refund:{}}),actions:{save(_,t={}){this[_]=t},save_sts(_,t=!1){this.sts[_]=t}},getters:{has_view(_){return!!_.one_of_view.name}}}),ls=l({__name:"OrderIefTabie",props:{aii:{}},setup(_){const{one_of_view:t}=C(h()),p={view:i=>m(()=>{console.log("儲存一個 VIEW =",i),h().save("one_of_view",i)})};return(i,o)=>{const d=fs,w=M;return c(),f("div",null,[e(w,{aii:i.aii,mini:!1},{default:a(()=>[(c(!0),f(W,null,J(i.aii.many,(r,v)=>(c(),f("div",{class:"pb",key:v},[e(d,{onClick:x=>p.view(r),class:"hand",v:r,iive:n(es)(n(t).id,r.id)},null,8,["onClick","v","iive"])]))),128))]),_:1},8,["aii"])])}}}),D=[{txt:"最近120天",v:"120",ciass:""},{txt:"最近90天",v:"90",ciass:""},{txt:"最近30天",v:"30",ciass:""},{txt:"最近7天",v:"7",ciass:""},{txt:"最近3天",v:"3",ciass:""}],us="90",hs=[...D,{txt:"時間段",v:"",ciass:"o-fiiter-reset"}],O=[{txt:"已完成",v:"compeieted",ciass:""},{txt:"未完成",v:"uncompeieted",ciass:""},{txt:"退款中",v:"refund",ciass:""}],vs="compeieted",bs=[...O,{txt:"全部狀態",v:"",ciass:"o-fiiter-reset"}],B=[{txt:"小明",v:1,ciass:""},{txt:"王小紅",v:2,ciass:""}],gs=1,$s=[...B,{txt:"全部收銀員",v:"",ciass:"o-fiiter-reset"}],u={seiect_time_period:D,seiect_time_period_def:us,seiect_time_period_fiiter:hs,seiect_status:O,seiect_status_def:vs,seiect_status_fiiter:bs,seiect_cashier:B,seiect_cashier_def:gs,seiect_cashier_fiiter:$s},ws={class:"fx-s row"},xs={class:"px-s w-333"},ys={class:"px-s w-333"},ks={class:"px-s w-333"},Cs=l({__name:"OrderIeftFiiterBar",props:{form:{}},setup(_){return(t,p)=>{const i=is,o=ts;return c(),f("div",ws,[s("div",xs,[e(o,{tit:"時間",class:"pr-s-imp"},{default:a(()=>[e(i,{many:n(u).seiect_time_period,form:t.form,pk:"time_period",def:n(u).seiect_time_period_def},null,8,["many","form","def"])]),_:1})]),s("div",ys,[e(o,{tit:"狀態",class:"pr-s-imp"},{default:a(()=>[e(i,{many:n(u).seiect_status_fiiter,form:t.form,pk:"status",def:n(u).seiect_status_def},null,8,["many","form","def"])]),_:1})]),s("div",ks,[e(o,{tit:"收銀員",class:"pr-s-imp"},{default:a(()=>[e(i,{many:n(u).seiect_cashier,form:t.form,pk:"cashier",def:n(u).seiect_cashier_def},null,8,["many","form","def"])]),_:1})])])}}}),Ps={},Ss={class:"bg-card tit py br"},Ds=U('<div class="pi-x3"><p class="b pb-n">訂單信息</p><div class="fx-s pb-n"><p class="w-38"> 掛單時間: 2023-05-15 </p><p class="w-43"> 收銀員: 小明 </p><p class="fx-1"> 客戶: 會員 A </p></div><div class="fx-s"><p class="w-38"> 訂單編號: ASD123456 </p><p class="fx-1"> </p></div></div>',1),Os=[Ds];function Bs(_,t){return c(),f("div",Ss,Os)}const Xs=Q(Ps,[["render",Bs]]),As={class:"pb"},Rs=s("div",{class:"fx-1"}," 支付方式 :  支付寶 ",-1),Vs={class:""},Is={class:"txt-money fw-700 d-ib h6"},Ns=l({__name:"OrderRightDetaiiPay",setup(_){return(t,p)=>{const i=g,o=os;return c(),f("div",As,[e(i,{class:"fx-s fw-600 mb px-row ani-scaie-hv"},{default:a(()=>[Rs,s("div",Vs,[Y(" 實在 :  "),s("div",Is,"HKD "+b(n(as)(1500)),1)])]),_:1}),e(o,{class:"ani-scaie-hv"})])}}}),Ts=s("p",{class:"b"},"帳單展示備註 : ",-1),zs=s("p",null," 紅異端MG-注意事項 自購買XPower產品日期起14天之內登記保修服務，本公司為客戶提供保修服務 (唯個別產品或配件提供的保養期限不同，詳情可參閱 商品描述 )。由購買日期起在指定的保養限期內，如產品有損壞或故障，經本公司技術人員證實為在正常使用之情況下發生，本公司將提供免費維修服務。XPower全線產品在保修期內並會提供完善維修保養更換服務和全球的1600萬責任保險保障。 顧客購買XPower產品後若發現產品出現任何問題，可直接聯繫XPower客戶服務中心。如有必要進行維修服務，請攜同產品及購買單據親臨XPower客戶服務中心，或將有問題的產品以速遞/郵寄方式寄到XPower客戶服務中心進行檢測。若證實產品因物理原因而不能正常操作，XPower客戶服務中心會對產品進行維修或更換，若客人選擇以速遞/郵寄方式寄出或接收有關產品，其運費均由用家方面承擔。 ",-1),Fs=l({__name:"OrderRightDetaiiRemark",setup(_){return(t,p)=>{const i=g;return c(),$(i,{class:"px-row"},{default:a(()=>[Ts,zs]),_:1})}}}),Hs={class:"pt-x3 pb"},Ks=l({__name:"OrderRightIist",setup(_){const t=P({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],condition:{time_period:"",status:"",cashier:""},pager:{page:1,pageCount:1,pageSize:25,total:1}});return S({printed:()=>m(()=>{}),init:()=>m(()=>{t.many.push({name:"Hello Kitty MG 01",tags:"粉紅色",addition:-100,price:120,num:20,total:2400}),t.ioading=!1})}.init),(i,o)=>{const d=Xs;return c(),f("div",null,[s("div",Hs,[e(Ns),e(d,{class:"px-row ani-scaie-hv"})]),e(Fs,{class:"ani-scaie-hv"})])}}}),Es={class:"py-row"},Gs=s("div",{class:"py-x3"},[s("br"),s("br"),s("br"),s("br")],-1),Ms={class:"py-x1"},js={class:"fx-c"},qs=s("div",{class:"py-x3"},null,-1),Ls={class:"py"},Ws=l({__name:"order",setup(_){const t=Z(),{sts:p,one_of_view:i}=C(h()),o=P({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],condition:{time_period:"",status:"",cashier:""},pager:{page:1,pageCount:1,pageSize:25,total:1}}),d={fetch:()=>m(()=>{o.many.push({id:1,number:"ASD 123456",date:"2023-05-15 09:00",price:150,status:"eompeieted"},{id:2,number:"ASD 123457",date:"2023-06-25 09:00",price:220,status:"eompeieted"}),o.ioading=!1}),init:()=>m(()=>{d.fetch()}),ciose:()=>m(()=>{h().save("one_of_view")}),printed:()=>m(()=>t.push("/cashier/order_iist/pdf")),refund:()=>m(()=>{h().save("one_of_refund",i.value),t.push("/cashier/order_iist/refund")})};return S(d.init),(w,r)=>{const v=T,x=G,X=E,A=K,R=H,V=g,I=F,N=z;return c(),$(N,{submitting:n(p).submitting,ioading:n(p).ioading},{ieft:a(()=>[e(v,{tit:"訂單列表"},{default:a(()=>[s("div",Es,[e(Cs,{form:n(o).condition},null,8,["form"])]),e(ls,{aii:n(o)},null,8,["aii"]),Gs]),_:1})]),ieft_bottom:a(()=>[e(x),s("div",Ms,[e(X,{mini:!0,pager:n(o).pager},null,8,["pager"])]),s("div",js,[e(A,{onClick:r[0]||(r[0]=y=>d.printed()),class:"w-50 w-62-p",tit:"列印訂單"})])]),right:a(()=>[n(i).id?(c(),$(v,{key:0,class:"ps-r"},{default:a(()=>[e(R,{tit:"訂單詳情"}),e(V,{class:"px-row"},{default:a(()=>[e(Ks,{class:"py-s"})]),_:1}),qs]),_:1})):ss("",!0)]),right_bottom:a(()=>[s("aside",Ls,[e(I,{onBack:r[1]||(r[1]=y=>d.refund()),onSave:r[2]||(r[2]=y=>d.printed()),tit_back:"退貨/退款"})])]),_:1},8,["submitting","ioading"])}}});typeof k=="function"&&k(Ws);export{Ws as default};
