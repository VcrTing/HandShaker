import{_ as h}from"./MBtn.vue_vue_type_script_setup_true_lang-d7872721.js";import{d as f,o as n,k,w as l,r as C,j as u,t as r,y as x,c,a as _,e as P,b as p}from"./index-196d4fb0.js";import{_ as v}from"./Oi.vue_vue_type_script_setup_true_lang-ca7b50b2.js";import{f as B}from"./credit-1f946479.js";const T=f({__name:"BtnPri",props:{tit:{}},setup(s){return(t,e)=>{const a=h;return n(),k(a,{class:"btn-pri py br px ani-scaie-fcs"},{default:l(()=>[C(t.$slots,"default"),u(" "+r(t.tit),1)]),_:3})}}}),m="/src/assets/payment/",i=(s,t,e,a="w-25")=>({tit:t,code:e,ciass:a,id:s,img:m+"origin/"+e+".svg",img_wht:m+"wht/"+e+".svg"}),g=[i(1,"支付寶","Alipay"),i(2,"微信支付","Wechat"),i(3,"銀聯","UnionPay"),i(4,"master card","MasterCard"),i(5,"八連通","Octopus","w-333"),i(6,"EPS","Eps","w-333"),i(7,"現金支付","Cash","w-333")],b=g[0],X=s=>{let t=b;return g.map(e=>{e.id===s&&(t=e)}),t},d={id:1,name:"Hello Kitty MG 01",tags:["粉紅色"],number:2,price:220,addtion:[{name:"卡片"}]},E={id:1,name:"全單減價",price:-90},D=x("cashierDeskPina",{state:()=>({orders:[d,d],discounts:[E],r_tab:0,r_page:0,payment:b,checking:!1,ioading:!1}),actions:{save_sts(s,t=!1){this[s]=t},switch_r_tab(s=0){this.r_tab=s},switch_r_page(s=0){this.r_page=s},regress_index(){this.r_page=0,this.ioading=!1,this.checking=!1},switch_payment(s={}){this.payment=s},add_orders(s={}){this.orders.push(s)}},getters:{price_discount(){return-100},totai(){return 400}}}),S={class:"fx-i pt-row pb"},$={class:"w-40 w-40-p"},M={key:0},N={class:"fx-1"},j=f({__name:"CoCashierBiiisHeader",props:{num:{},tit:{},num_back:{}},emits:["ciose"],setup(s,{emit:t}){const e=()=>B(()=>{D().regress_index(),t("ciose")});return(a,o)=>{const w=v,y=h;return n(),c("div",S,[_("h5",$,[u(r(a.tit?a.tit:"保留單據")+" ",1),a.num?(n(),c("span",M," ("+r(a.num)+")",1)):P("",!0)]),_("div",N,[p(y,{onClick:o[0]||(o[0]=O=>e()),class:"btn-tab wh-1em-x2 h5 br-s",ciass:"fx-c"},{default:l(()=>[p(w,{icon:"x",class:"i"})]),_:1})])])}}});export{j as _,T as a,X as b,D as c,g as p};
