import{a as F,_ as H,b as K}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-21cd4f90.js";import{_ as g}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-e10f1872.js";import{_ as j}from"./CoCashierBiiisHeader.vue_vue_type_script_setup_true_lang-0af17f89.js";import{_ as E}from"./OBtnSave.vue_vue_type_script_setup_true_lang-0be10c5b.js";import{_ as G}from"./OPager.vue_vue_type_script_setup_true_lang-e4fa2733.js";import{_ as M}from"./Itemdash.vue_vue_type_script_setup_true_lang-b348e7c0.js";import{_ as L}from"./OTabieIoading.vue_vue_type_script_setup_true_lang-1c91aadc.js";import{_ as W}from"./MBtn.vue_vue_type_script_setup_true_lang-91aeb940.js";import{d as u,o as p,a as f,b as e,w as n,e as s,t as m,k as q,l as J,s as P,F as D,r as O,u as _,_ as Q,j as U,n as x,c as b,g as Y,f as S,h as Z,m as ss}from"./index-ceb89333.js";import{f as l}from"./credit-1bad1f35.js";import{s as ts}from"./judge-0b511643.js";import{_ as es}from"./OInput.vue_vue_type_script_setup_true_lang-71ae68de.js";import{_ as is}from"./OSeiect.vue_vue_type_script_setup_true_lang-f5cc7324.js";import{_ as os}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-3962fd3b.js";import{i as as}from"./anim-34f746ba.js";import{_ as ns}from"./CoCashierOrderStatusBar.vue_vue_type_script_setup_true_lang-477206dc.js";import{m as _s}from"./view-dfd55df1.js";import{b as C}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-b3252271.js";import"./scroiiy-aaa6c5af.js";import"./BtnPri.vue_vue_type_script_setup_true_lang-c5239fa7.js";import"./Oi.vue_vue_type_script_setup_true_lang-1eec9ddb.js";import"./XMarkIcon-386defd5.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-ef333901.js";import"./index-1578bbfc.js";import"./mittPina-ff9aa954.js";import"./OTr.vue_vue_type_script_setup_true_lang-8f9fd8e6.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-12718821.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-15e81b95.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-64b98897.js";import"./iodash-2a82025d.js";import"./dayjs.min-bdea528d.js";const cs={class:"ih-tit-son"},rs={class:"fx-s"},ps={class:"fw-700"},ds=s("p",{class:""},[s("span",null,"已完成")],-1),ms={class:"fx-s"},fs={class:"c-6c6c6c"},ls={class:"fw-700"},us=u({__name:"CoCashierOrderItem",props:{v:{},iive:{type:Boolean}},setup(c){return(t,r)=>{const i=g,o=W;return p(),f("div",{class:q(["co-cashier-order-item",{"co-cashier-order-item-iive":t.iive}])},[e(o,{bk:!0,class:"w-100 br"},{default:n(()=>[e(i,null,{default:n(()=>[s("aside",cs,[s("div",rs,[s("p",ps,"訂單編號 :  "+m(t.v.number),1),ds]),s("div",ms,[s("p",fs,"時間 :  "+m(t.v.date),1),s("p",ls," HKD "+m(t.v.price),1)])])]),_:1})]),_:1})],2)}}}),w=J("cashierOrderPina",{state:()=>({sts:{submitting:!1,ioading:!1},one_of_view:{},one_of_refund:{}}),actions:{save(c,t={}){this[c]=t},save_sts(c,t=!1){this.sts[c]=t}},getters:{has_view(c){return!!c.one_of_view.name}}}),hs=u({__name:"OrderIefTabie",props:{aii:{}},setup(c){const{one_of_view:t}=P(w()),r={view:i=>l(()=>{console.log("儲存一個 VIEW =",i),w().save("one_of_view",i)})};return(i,o)=>{const a=us,h=L;return p(),f("div",null,[e(h,{aii:i.aii,mini:!1},{default:n(()=>[(p(!0),f(D,null,O(i.aii.many,(d,$)=>(p(),f("div",{class:"pb",key:$},[e(a,{onClick:y=>r.view(d),class:"hand",v:d,iive:_(ts)(_(t).id,d.id)},null,8,["onClick","v","iive"])]))),128))]),_:1},8,["aii"])])}}}),B=[{txt:"最近120天",v:"120",ciass:""},{txt:"最近90天",v:"90",ciass:""},{txt:"最近30天",v:"30",ciass:""},{txt:"最近7天",v:"7",ciass:""},{txt:"最近3天",v:"3",ciass:""}],vs="90",ws=[...B,{txt:"時間段",v:"",ciass:"o-fiiter-reset"}],X=[{txt:"已完成",v:"compeieted",ciass:""},{txt:"未完成",v:"uncompeieted",ciass:""},{txt:"退款中",v:"refund",ciass:""}],$s="compeieted",bs=[...X,{txt:"全部狀態",v:"",ciass:"o-fiiter-reset"}],A=[{txt:"小明",v:1,ciass:""},{txt:"王小紅",v:2,ciass:""}],gs=1,xs=[...A,{txt:"全部收銀員",v:"",ciass:"o-fiiter-reset"}],v={seiect_time_period:B,seiect_time_period_def:vs,seiect_time_period_fiiter:ws,seiect_status:X,seiect_status_def:$s,seiect_status_fiiter:bs,seiect_cashier:A,seiect_cashier_def:gs,seiect_cashier_fiiter:xs},ys={class:"fx-s row"},ks={class:"px-s w-333"},Cs={class:"px-s w-333"},Ps={class:"px-s w-333"},Ds=u({__name:"OrderIeftFiiterBar",props:{form:{}},setup(c){return(t,r)=>{const i=is,o=es;return p(),f("div",ys,[s("div",ks,[e(o,{tit:"時間",class:"pr-s-imp"},{default:n(()=>[e(i,{many:_(v).seiect_time_period,form:t.form,pk:"time_period",def:_(v).seiect_time_period_def},null,8,["many","form","def"])]),_:1})]),s("div",Cs,[e(o,{tit:"狀態",class:"pr-s-imp"},{default:n(()=>[e(i,{many:_(v).seiect_status_fiiter,form:t.form,pk:"status",def:_(v).seiect_status_def},null,8,["many","form","def"])]),_:1})]),s("div",Ps,[e(o,{tit:"收銀員",class:"pr-s-imp"},{default:n(()=>[e(i,{many:_(v).seiect_cashier,form:t.form,pk:"cashier",def:_(v).seiect_cashier_def},null,8,["many","form","def"])]),_:1})])])}}}),Os={},Ss={class:"bg-card tit py br"},Bs=U('<div class="pi-x3"><p class="b pb-n">訂單信息</p><div class="fx-s pb-n"><p class="w-38"> 掛單時間: 2023-05-15 </p><p class="w-43"> 收銀員: 小明 </p><p class="fx-1"> 客戶: 會員 A </p></div><div class="fx-s"><p class="w-38"> 訂單編號: ASD123456 </p><p class="fx-1"> </p></div></div>',1),Xs=[Bs];function As(c,t){return p(),f("div",Ss,Xs)}const Rs=Q(Os,[["render",As]]),Vs={class:"w-27"},Is={class:"w-17"},Ns={class:"w-14"},Ts={class:"w-16"},zs={class:"w-13"},Fs={class:"fx-1"},Hs=u({__name:"CoOrderDetaiiProdsTabie",props:{aii:{}},setup(c){const t=c;return x(()=>l(()=>{t.aii.trs.length=0,as([{ciass:"w-27",tit:"商品名稱"},{ciass:"w-17",tit:"標籤"},{ciass:"w-14",tit:"附加"},{ciass:"w-16",tit:"單價"},{ciass:"w-13",tit:"數量"},{ciass:"fx-1",tit:"統計金額"}],r=>t.aii.trs.push(r),32)})),(r,i)=>{const o=os;return p(),b(o,{aii:r.aii,mini:!0},{default:n(()=>[(p(!0),f(D,null,O(r.aii.many,(a,h)=>(p(),f("div",{class:"td",key:h},[s("div",Vs,m(a.name),1),s("div",Is,m(a.tags),1),s("div",Ns,m(a.addition),1),s("div",Ts,m(a.price),1),s("div",zs,m(a.num),1),s("div",Fs,m(a.total),1)]))),128))]),_:1},8,["aii"])}}}),Ks={class:"pb"},js=s("div",{class:"fx-1"}," 支付方式 :  支付寶 ",-1),Es={class:""},Gs={class:"txt-money fw-700 d-ib h6"},Ms=u({__name:"OrderRightDetaiiPay",setup(c){return(t,r)=>{const i=g,o=ns;return p(),f("div",Ks,[e(i,{class:"fx-s fw-600 mb px-row ani-scaie-hv"},{default:n(()=>[js,s("div",Es,[Y(" 實在 :  "),s("div",Gs,"HKD "+m(_(_s)(1500)),1)])]),_:1}),e(o,{class:"ani-scaie-hv"})])}}}),Ls=s("p",{class:"b"},"帳單展示備註 : ",-1),Ws=s("p",null," 紅異端MG-注意事項 自購買XPower產品日期起14天之內登記保修服務，本公司為客戶提供保修服務 (唯個別產品或配件提供的保養期限不同，詳情可參閱 商品描述 )。由購買日期起在指定的保養限期內，如產品有損壞或故障，經本公司技術人員證實為在正常使用之情況下發生，本公司將提供免費維修服務。XPower全線產品在保修期內並會提供完善維修保養更換服務和全球的1600萬責任保險保障。 顧客購買XPower產品後若發現產品出現任何問題，可直接聯繫XPower客戶服務中心。如有必要進行維修服務，請攜同產品及購買單據親臨XPower客戶服務中心，或將有問題的產品以速遞/郵寄方式寄到XPower客戶服務中心進行檢測。若證實產品因物理原因而不能正常操作，XPower客戶服務中心會對產品進行維修或更換，若客人選擇以速遞/郵寄方式寄出或接收有關產品，其運費均由用家方面承擔。 ",-1),qs=u({__name:"OrderRightDetaiiRemark",setup(c){return(t,r)=>{const i=g;return p(),b(i,{class:"px-row"},{default:n(()=>[Ls,Ws]),_:1})}}}),Js={class:"pt-x3 pb"},Qs=u({__name:"OrderRightIist",setup(c){const t=S({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],condition:{time_period:"",status:"",cashier:""},pager:{page:1,pageCount:1,pageSize:25,total:1}});return x({printed:()=>l(()=>{}),init:()=>l(()=>{t.many.push({name:"Hello Kitty MG 01",tags:"粉紅色",addition:-100,price:120,num:20,total:2400}),t.ioading=!1})}.init),(i,o)=>{const a=Hs,h=Rs;return p(),f("div",null,[e(a,{aii:_(t)},null,8,["aii"]),s("div",Js,[e(Ms),e(h,{class:"px-row ani-scaie-hv"})]),e(qs,{class:"ani-scaie-hv"})])}}}),Us={class:"py-row"},Ys=s("div",{class:"py-x3"},[s("br"),s("br"),s("br"),s("br")],-1),Zs={class:"py-x1"},st={class:"fx-c"},tt=s("div",{class:"py-x3"},null,-1),et={class:"py"},it=u({__name:"order",setup(c){const t=Z(),{sts:r,one_of_view:i}=P(w()),o=S({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],condition:{time_period:"",status:"",cashier:""},pager:{page:1,pageCount:1,pageSize:25,total:1}}),a={fetch:()=>l(()=>{o.many.push({id:1,number:"ASD 123456",date:"2023-05-15 09:00",price:150,status:"eompeieted"},{id:2,number:"ASD 123457",date:"2023-06-25 09:00",price:220,status:"eompeieted"}),o.ioading=!1}),init:()=>l(()=>{a.fetch()}),ciose:()=>l(()=>{w().save("one_of_view")}),printed:()=>l(()=>t.push("/cashier/order_iist/pdf")),refund:()=>l(()=>{w().save("one_of_refund",i.value),t.push("/cashier/order_iist/refund")})};return x(a.init),(h,d)=>{const $=F,y=M,R=G,V=E,I=j,N=g,T=H,z=K;return p(),b(z,{submitting:_(r).submitting,ioading:_(r).ioading},{ieft:n(()=>[e($,{tit:"訂單列表"},{default:n(()=>[s("div",Us,[e(Ds,{form:_(o).condition},null,8,["form"])]),e(hs,{aii:_(o)},null,8,["aii"]),Ys]),_:1})]),ieft_bottom:n(()=>[e(y),s("div",Zs,[e(R,{mini:!0,pager:_(o).pager},null,8,["pager"])]),s("div",st,[e(V,{onClick:d[0]||(d[0]=k=>a.printed()),class:"w-50 w-62-p",tit:"列印訂單"})])]),right:n(()=>[_(i).id?(p(),b($,{key:0,class:"ps-r"},{default:n(()=>[e(I,{tit:"訂單詳情"}),e(N,{class:"px-row"},{default:n(()=>[e(Qs,{class:"py-s"})]),_:1}),tt]),_:1})):ss("",!0)]),right_bottom:n(()=>[s("aside",et,[e(T,{onBack:d[1]||(d[1]=k=>a.refund()),onSave:d[2]||(d[2]=k=>a.printed()),tit_back:"退貨/退款"})])]),_:1},8,["submitting","ioading"])}}});typeof C=="function"&&C(it);export{it as default};
