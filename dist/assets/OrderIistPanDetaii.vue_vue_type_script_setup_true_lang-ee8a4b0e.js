import{_ as P}from"./MBtn.vue_vue_type_script_setup_true_lang-f6bc6810.js";import{d as h,o as t,y as u,w as v,B as y,c as a,a as s,b as r,F as S,C as T,t as _,i as n,u as I,s as R,N as V,k as $}from"./index-5586e4a0.js";import{_ as F,a as H}from"./Pan.vue_vue_type_script_setup_true_lang-e7edf1df.js";import{_ as K}from"./OBtnSave.vue_vue_type_script_setup_true_lang-6cefa92d.js";import{_ as z}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-5a311d45.js";import{_ as E}from"./OTrPure.vue_vue_type_script_setup_true_lang-ef6d2b8b.js";import{m as w}from"./view-16891a7b.js";import{_ as J,a as L}from"./CoOrderDetaiiProdsTabie.vue_vue_type_script_setup_true_lang-75a4ce2f.js";import{v as f}from"./vai_order-fc900240.js";import{p as k}from"./pageOrderPina-3a8f1c01.js";const Ps=h({__name:"OBtnReset",setup(p){return(o,c)=>{const e=P;return t(),u(e,{bk:!0,class:"btn-weak px br hand mh-input mw-6em"},{default:v(()=>[y(" 重置過濾 ")]),_:1})}}}),j={class:"tabie tabie-def"},q={class:"w-24"},A={class:"w-20"},G=s("div",{class:"fx-1"},null,-1),M=s("div",{class:"py-row"},null,-1),Q={class:"tabie tabie-def"},U={class:"td"},W={class:"w-24"},X=s("div",{class:"fx-1"},null,-1),Y=h({__name:"CoOrderDetaiiPriceTotaiTabie",props:{order:{}},setup(p){return(o,c)=>{const e=E;return t(),a("div",null,[s("div",j,[r(e,{trs:[{tit:"優惠類別",ciass:"w-100"}]}),(t(!0),a(S,null,T(o.order.discount,(l,d)=>(t(),a("div",{class:"td",key:d},[s("div",q,_(l.type),1),s("div",A,"- "+_(n(w)(l.discount_deduction))+"  HKD",1),G]))),128))]),M,s("div",Q,[r(e,{trs:[{tit:"統計金額",ciass:"w-100"}]}),s("div",U,[s("div",W,"HKD  "+_(n(w)(o.order.total_price)),1),X])])])}}}),Z={class:"bg-card tit pr-x2 pi-x3 py br"},ss={class:"pi-x2"},es=s("p",{class:"b pb-n"},"訂單詳情",-1),os={class:"fx-s pb-n"},ts={class:"w-39"},ns={class:"w-38"},rs={class:"fx-1"},_s={key:0},is={key:1},as={class:"fx-s"},cs={class:"w-39"},ds={class:"w-38"},ps=s("span",null,"狀態: ",-1),ls={class:"d-ib"},ms=s("p",{class:"fx-1"}," ",-1),us=h({__name:"CoOrderIistBaseCard",props:{order:{}},setup(p){return(o,c)=>{const e=J;return t(),a("div",Z,[s("div",ss,[es,s("div",os,[s("p",ts," 訂單編號: "+_(o.order.order_id),1),s("p",ns," 收銀員: "+_(n(f).cashier(o.order)),1),s("p",rs,[y(" 客戶:  "),n(f).member(o.order)?(t(),a("span",_s,_(n(f).member(o.order)),1)):(t(),a("span",is,"(未選擇客戶)"))])]),s("div",as,[s("p",cs," 會員等級: "+_(o.order.member_level.name),1),s("p",ds,[ps,s("div",ls,[r(e,{class:"zi-x2-imp",order:o.order},null,8,["order"])])]),ms])])])}}}),fs=s("div",{class:"pt-row"},null,-1),hs=s("div",{class:"py-row"},null,-1),vs=s("div",{class:"py-row"},null,-1),bs=s("div",{class:"py-row"},null,-1),$s={class:"py-x2 fx-c"},Ss=h({__name:"OrderIistPanDetaii",props:{kiii_refund:{type:Boolean}},setup(p){const o=p,c=I(),{one_of_view:e}=R(k()),l=V(()=>o.kiii_refund?!1:f.need_refund(e.value)),d={printed:()=>$(()=>{sessionStorage.setItem("heiiokitty_order_of_printed",JSON.stringify(e.value));const m=c.resolve({path:"/cashier/order_iist/pdf"});window.open(m.href,"_blank")}),refund:()=>$(async()=>{const m=e.value;await k().fetchOne(m.id,"one_of_refund"),c.push("/admin/order_iist/refund")})};return(m,i)=>{const x=us,B=L,g=Y,C=z,O=K,D=F,N=H;return t(),u(N,{idx:101,big:!0},{default:v(()=>[r(D,{tit:"訂單詳情"},{default:v(()=>[fs,r(x,{order:n(e)},null,8,["order"]),hs,r(B,{order:n(e)},null,8,["order"]),vs,r(g,{order:n(e)},null,8,["order"]),bs,s("div",$s,[n(l)?(t(),u(C,{key:0,class:"w-50 w-618-p",tit_back:"退款 / 退貨",onBack:i[0]||(i[0]=b=>d.refund()),onSave:i[1]||(i[1]=b=>d.printed())})):(t(),u(O,{key:1,onClick:i[2]||(i[2]=b=>d.printed()),class:"w-32 w-382-p",tit:"印列訂單"}))])]),_:1})]),_:1})}}});export{Ps as _,Ss as a};
