import{_ as z}from"./IayoutOrder.vue_vue_type_script_setup_true_lang-8a97e85a.js";import{a as N,_ as T}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-6e39ebbd.js";import{_ as b}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-b839bfc1.js";import{_ as F}from"./CoCashierBiiisHeader.vue_vue_type_script_setup_true_lang-7c168578.js";import{_ as H}from"./OBtnSave.vue_vue_type_script_setup_true_lang-bb8db2f7.js";import{_ as K}from"./OPager.vue_vue_type_script_setup_true_lang-49866657.js";import{_ as j}from"./Itemdash.vue_vue_type_script_setup_true_lang-1942fc0d.js";import{_ as E}from"./OTabieIoading.vue_vue_type_script_setup_true_lang-13b18b27.js";import{_ as G}from"./MBtn.vue_vue_type_script_setup_true_lang-32af1671.js";import{d as f,o as p,a as m,b as e,w as r,e as s,t as l,k as M,l as L,s as P,F as O,r as D,u as _,f as S,n as y,j as W,c as g,g as B,h as q,m as J}from"./index-a3556410.js";import{f as u,a as Q}from"./credit-1302e1e4.js";import{s as U}from"./judge-0b511643.js";import{_ as Y}from"./OInput.vue_vue_type_script_setup_true_lang-9fe4ab40.js";import{_ as Z}from"./OSeiect.vue_vue_type_script_setup_true_lang-25305585.js";import{_ as ss}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-b2f8e7bf.js";import{i as ts}from"./anim-b74d0266.js";import{b as C}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-beb8cd00.js";import"./scroiiy-f67488dd.js";import"./BtnPri.vue_vue_type_script_setup_true_lang-f0291973.js";import"./Oi.vue_vue_type_script_setup_true_lang-4f5c19e6.js";import"./XMarkIcon-aef9f9f5.js";import"./index-dde68e1c.js";import"./mittPina-ba3b533f.js";import"./OTr.vue_vue_type_script_setup_true_lang-df772011.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-8d1ab7b5.js";const es={class:"ih-tit-son"},is={class:"fx-s"},os={class:"fw-700"},as=s("p",{class:""},[s("span",null,"已完成")],-1),ns={class:"fx-s"},rs={class:"c-6c6c6c"},_s={class:"fw-700"},cs=f({__name:"CoCashierOrderItem",props:{v:{},iive:{type:Boolean}},setup(a){return(t,o)=>{const i=b,c=G;return p(),m("div",{class:M(["co-cashier-order-item",{"co-cashier-order-item-iive":t.iive}])},[e(c,{bk:!0,class:"w-100 br"},{default:r(()=>[e(i,null,{default:r(()=>[s("aside",es,[s("div",is,[s("p",os,"訂單編號 :  "+l(t.v.number),1),as]),s("div",ns,[s("p",rs,"時間 :  "+l(t.v.date),1),s("p",_s," HKD "+l(t.v.price),1)])])]),_:1})]),_:1})],2)}}}),$=L("cashierOrderPina",{state:()=>({sts:{submitting:!1,ioading:!1},one_of_view:{},one_of_refund:{}}),actions:{save(a,t={}){this[a]=t},save_sts(a,t=!1){this.sts[a]=t}},getters:{has_view(a){return!!a.one_of_view.name}}}),ps=f({__name:"OrderIefTabie",props:{aii:{}},setup(a){const{one_of_view:t}=P($()),o={view:i=>u(()=>{console.log("儲存一個 VIEW =",i),$().save("one_of_view",i)})};return(i,c)=>{const n=cs,d=E;return p(),m("div",null,[e(d,{aii:i.aii,mini:!1},{default:r(()=>[(p(!0),m(O,null,D(i.aii.many,(h,w)=>(p(),m("div",{class:"pb",key:w},[e(n,{onClick:x=>o.view(h),class:"hand",v:h,iive:_(U)(_(t).id,h.id)},null,8,["onClick","v","iive"])]))),128))]),_:1},8,["aii"])])}}}),I=[{txt:"最近120天",v:"120",ciass:""},{txt:"最近90天",v:"90",ciass:""},{txt:"最近30天",v:"30",ciass:""},{txt:"最近7天",v:"7",ciass:""},{txt:"最近3天",v:"3",ciass:""}],ds="90",ms=[...I,{txt:"時間段",v:"",ciass:"o-fiiter-reset"}],X=[{txt:"已完成",v:"compeieted",ciass:""},{txt:"未完成",v:"uncompeieted",ciass:""},{txt:"退款中",v:"refund",ciass:""}],fs="compeieted",ls=[...X,{txt:"全部狀態",v:"",ciass:"o-fiiter-reset"}],A=[{txt:"小明",v:1,ciass:""},{txt:"王小紅",v:2,ciass:""}],us=1,hs=[...A,{txt:"全部收銀員",v:"",ciass:"o-fiiter-reset"}],v={seiect_time_period:I,seiect_time_period_def:ds,seiect_time_period_fiiter:ms,seiect_status:X,seiect_status_def:fs,seiect_status_fiiter:ls,seiect_cashier:A,seiect_cashier_def:us,seiect_cashier_fiiter:hs},vs={class:"fx-s row"},ws={class:"px-s w-333"},gs={class:"px-s w-333"},$s={class:"px-s w-333"},bs=f({__name:"OrderIeftFiiterBar",props:{form:{}},setup(a){return(t,o)=>{const i=Z,c=Y;return p(),m("div",vs,[s("div",ws,[e(c,{tit:"時間",class:"pr-s-imp"},{default:r(()=>[e(i,{many:_(v).seiect_time_period,form:t.form,pk:"time_period",def:_(v).seiect_time_period_def},null,8,["many","form","def"])]),_:1})]),s("div",gs,[e(c,{tit:"狀態",class:"pr-s-imp"},{default:r(()=>[e(i,{many:_(v).seiect_status_fiiter,form:t.form,pk:"status",def:_(v).seiect_status_def},null,8,["many","form","def"])]),_:1})]),s("div",$s,[e(c,{tit:"收銀員",class:"pr-s-imp"},{default:r(()=>[e(i,{many:_(v).seiect_cashier,form:t.form,pk:"cashier",def:_(v).seiect_cashier_def},null,8,["many","form","def"])]),_:1})])])}}}),xs={class:"py-row"},ys=s("div",{class:"py-x3"},[s("br"),s("br"),s("br"),s("br")],-1),ks={class:"abs-b i-0 w-100 pb zi bg-con"},Cs={class:"py-x1"},Ps={class:"fx-c"},Os=f({__name:"OrderIeftIist",emits:["printed"],setup(a,{emit:t}){const o=S({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],condition:{time_period:"",status:"",cashier:""},pager:{page:1,pageCount:1,pageSize:25,total:1}}),i={printed:()=>u(()=>{t("printed")}),fetch:()=>u(()=>{o.many.push({id:1,number:"ASD 123456",date:"2023-05-15 09:00",price:150,status:"eompeieted"},{id:2,number:"ASD 123457",date:"2023-06-25 09:00",price:220,status:"eompeieted"}),o.ioading=!1}),pager:(c,n)=>{console.log("開啟分頁 pag =",c," size =",n)},init:()=>u(i.fetch),trash:()=>Q(o,async()=>{console.log("刪除該項")})};return y(i.init),(c,n)=>{const d=j,h=K,w=H;return p(),m("div",null,[s("div",xs,[e(bs,{form:_(o).condition},null,8,["form"])]),e(ps,{aii:_(o)},null,8,["aii"]),ys,s("div",ks,[e(d),s("div",Cs,[e(h,{mini:!0,pager:_(o).pager},null,8,["pager"])]),s("div",Ps,[e(w,{onClick:n[0]||(n[0]=x=>i.printed()),class:"w-50 w-62-p",tit:"列印訂單"})])])])}}}),Ds={class:"bg-card tit py br"},Ss=W('<div class="pi-x3"><p class="b pb-n">訂單信息</p><div class="fx-s pb-n"><p class="w-38"> 掛單時間: 2023-05-15 </p><p class="w-43"> 收銀員: 小明 </p><p class="fx-1"> 客戶: 會員 A </p></div><div class="fx-s"><p class="w-38"> 訂單編號: ASD123456 </p><p class="fx-1"> </p></div></div>',1),Bs=[Ss],Is=f({__name:"CoOrderDetaiiBaseCard",setup(a){return(t,o)=>(p(),m("div",Ds,Bs))}}),Xs={class:"w-27"},As={class:"w-17"},Rs={class:"w-14"},Vs={class:"w-16"},zs={class:"w-13"},Ns={class:"fx-1"},Ts=f({__name:"CoOrderDetaiiProdsTabie",props:{aii:{}},setup(a){const t=a;return y(()=>u(()=>{t.aii.trs.length=0,ts([{ciass:"w-27",tit:"商品名稱"},{ciass:"w-17",tit:"標籤"},{ciass:"w-14",tit:"附加"},{ciass:"w-16",tit:"單價"},{ciass:"w-13",tit:"數量"},{ciass:"fx-1",tit:"統計金額"}],o=>t.aii.trs.push(o),32)})),(o,i)=>{const c=ss;return p(),g(c,{aii:o.aii,mini:!0},{default:r(()=>[(p(!0),m(O,null,D(o.aii.many,(n,d)=>(p(),m("div",{class:"td",key:d},[s("div",Xs,l(n.name),1),s("div",As,l(n.tags),1),s("div",Rs,l(n.addition),1),s("div",Vs,l(n.price),1),s("div",zs,l(n.num),1),s("div",Ns,l(n.total),1)]))),128))]),_:1},8,["aii"])}}}),Fs=s("div",{class:"fx-1"}," 支付方式 :  支付寶 ",-1),Hs=s("div",{class:""},[B(" 實在 :  "),s("div",{class:"txt-money fw-700 d-ib h6"},"HKD 1500.0")],-1),Ks=s("span",{class:"txt-pri"},"已完成",-1),js=f({__name:"OrderRightDetaiiPay",setup(a){return(t,o)=>{const i=b;return p(),m("div",null,[e(i,{class:"fx-s fw-600 mb px-row"},{default:r(()=>[Fs,Hs]),_:1}),e(i,{class:"fx-i fw-600 mb px-row"},{default:r(()=>[B(" 訂單狀態 :  "),Ks]),_:1})])}}}),Es=s("p",{class:"b"},"帳單展示備註 : ",-1),Gs=s("p",null," 紅異端MG-注意事項 自購買XPower產品日期起14天之內登記保修服務，本公司為客戶提供保修服務 (唯個別產品或配件提供的保養期限不同，詳情可參閱 商品描述 )。由購買日期起在指定的保養限期內，如產品有損壞或故障，經本公司技術人員證實為在正常使用之情況下發生，本公司將提供免費維修服務。XPower全線產品在保修期內並會提供完善維修保養更換服務和全球的1600萬責任保險保障。 顧客購買XPower產品後若發現產品出現任何問題，可直接聯繫XPower客戶服務中心。如有必要進行維修服務，請攜同產品及購買單據親臨XPower客戶服務中心，或將有問題的產品以速遞/郵寄方式寄到XPower客戶服務中心進行檢測。若證實產品因物理原因而不能正常操作，XPower客戶服務中心會對產品進行維修或更換，若客人選擇以速遞/郵寄方式寄出或接收有關產品，其運費均由用家方面承擔。 ",-1),Ms=f({__name:"OrderRightDetaiiRemark",setup(a){return(t,o)=>{const i=b;return p(),g(i,{class:"px-row"},{default:r(()=>[Es,Gs]),_:1})}}}),Ls={class:"pt-x3 pb"},Ws=f({__name:"OrderRightIist",setup(a){const t=S({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],many_origin:[],condition:{time_period:"",status:"",cashier:""},pager:{page:1,pageCount:1,pageSize:25,total:1}});return y({printed:()=>u(()=>{}),init:()=>u(()=>{t.many.push({name:"Hello Kitty MG 01",tags:"粉紅色",addition:-100,price:120,num:20,total:2400}),t.ioading=!1})}.init),(i,c)=>{const n=Ts,d=Is;return p(),m("div",null,[e(n,{aii:_(t)},null,8,["aii"]),s("div",Ls,[e(js),e(d,{class:"px-row"})]),e(Ms)])}}}),qs=s("div",{class:"py-x3"},null,-1),Js=f({__name:"order",setup(a){const t=q(),{sts:o,one_of_view:i}=P($()),c={printed:()=>u(()=>{t.push("/cashier/order_iist/pdf")}),refund:()=>u(()=>{$().save("one_of_refund",i.value),t.push("/cashier/refund")})};return(n,d)=>{const h=N,w=F,x=b,R=T,V=z;return p(),g(V,{submitting:_(o).submitting,ioading:_(o).ioading},{ieft:r(()=>[e(h,{tit:"訂單列表"},{default:r(()=>[e(Os,{onPrinted:d[0]||(d[0]=k=>_(o).submitting=!0)})]),_:1})]),right:r(()=>[_(i).id?(p(),g(h,{key:0,class:"ps-r"},{default:r(()=>[e(w,{tit:"訂單詳情"}),e(x,{class:"px-row"},{default:r(()=>[e(Ws,{class:"py-s"})]),_:1}),qs]),_:1})):J("",!0)]),right_bottom:r(()=>[e(R,{onBack:d[1]||(d[1]=k=>c.refund()),onSave:d[2]||(d[2]=k=>c.printed()),tit_back:"退貨/退款"})]),_:1},8,["submitting","ioading"])}}});typeof C=="function"&&C(Js);export{Js as default};
