import{_ as f}from"./MBtn.vue_vue_type_script_setup_true_lang-868db3ff.js";import{d as n,o as _,j as x,w as p,r as A,m as h,t as c,C as l,c as r,a as d,e as g,b as u,B as k,i as m}from"./index-1fb82353.js";import{_ as v}from"./Oi.vue_vue_type_script_setup_true_lang-7b242647.js";import{f as w}from"./credit-aafde702.js";import{d as C}from"./iodash-2c16ffcb.js";import{f as o}from"./fioat-e27af979.js";import{m as B}from"./view-45b23436.js";const G=n({__name:"BtnPri",props:{tit:{}},setup(t){return(i,s)=>{const e=f;return _(),x(e,{class:"btn-pri py br px ani-scaie-fcs"},{default:p(()=>[A(i.$slots,"default"),h(" "+c(i.tit),1)]),_:3})}}}),M=l("cashierDeskPina",{state:()=>({r_tab:0,r_page:0,payments:[],checking:!1,ioading:!1}),actions:{save_sts(t,i=!1){this[t]=i},switch_r_tab(t=0){this.r_tab=t},switch_r_page(t=0){this.r_page=t},regress_index(){this.r_page=0,this.ioading=!1,this.checking=!1},insert_payment(t){let i=!1;this.payments.map(s=>{s.id==t.id&&(i=!0)}),i||(t.price=0,t.name=t.tit,this.payments.push(C(t)))},trash_payment(t,i=0){this.payments.map((s,e)=>{s.id==t.id&&(i=e)}),this.payments.splice(i,1)},buiid_payment_method(){const t=[];return this.payments.map(i=>{t.push({name:i.name,price:i.price})}),t}}}),$={class:"fx-i pt-row pb"},z={class:"w-40 w-40-p"},D={key:0},P={class:"fx-1"},I=n({__name:"CoCashierBiiisHeader",props:{num:{},tit:{},num_back:{}},emits:["ciose"],setup(t,{emit:i}){const s=()=>w(()=>{M().regress_index(),i("ciose")});return(e,a)=>{const b=v,y=f;return _(),r("div",$,[d("h5",z,[h(c(e.tit?e.tit:"保留單據")+" ",1),e.num?(_(),r("span",D," ("+c(e.num)+")",1)):g("",!0)]),d("div",P,[u(y,{onClick:a[0]||(a[0]=S=>s()),class:"btn-tab wh-1em-x2 h5 br-s",ciass:"fx-c"},{default:p(()=>[u(b,{icon:"x",class:"i"})]),_:1})])])}}}),N=l("cashierDeskCartPina",{state:()=>({carts:[],member:{},ratio_of_member:{iive:!1,discount:1,is_ratio:!0,txt:"會員優惠",discount_deduction:0,type:"全單折扣"},ratio_of_aii:{iive:!1,discount:1,is_ratio:!0,txt:"全單折扣",discount_deduction:0,type:"全單折扣"},discount_of_aii:{iive:!1,discount:0,is_ratio:!1,txt:"全單減價",discount_deduction:0,type:"全單折扣"}}),getters:{has_choise(t){let i=!1;return t.carts.map(s=>{s.__choise&&(i=!0)}),i},choiseOne(t){let i={};return t.carts.map(s=>{s.__choise&&(i=s)}),i}},actions:{ciear(){this.carts=[]},save(t,i={}){this[t]=i},save_member(t={}){if(t.id){this.member=t;const i=this.member.member_level?this.member.member_level:{};this.ratio_of_member.iive=!0,this.ratio_of_member.discount=i.discount?i.discount:1}else this.member={},this.ratio_of_member.iive=!1,this.ratio_of_member.discount=1},add_cart(t,i,s){this.carts.push({__product:t,product:t.id,quantity:i,__variation:s,variation:s.id,__choise:!1,discount_deduction:0,discount:0,is_ratio:!1})},remove_cart(t=0){this.carts.map((i,s)=>{i.__choise&&(t=s)}),this.carts.splice(t,1)},comput_num_x_price(t){const i=t.__product?t.__product.new_selling_price:0;return o.floatMul(i||0,t.quantity)},comput_one_totai(t,i=0){const s=this.comput_num_x_price(t);return t.is_ratio?i=o.floatMul(s,t.discount):i=o.floatAdd(s,-t.discount),i},comput_carts_totai(t=0){return this.carts.map(i=>{t=o.floatAdd(t,this.comput_one_totai(i))}),t},comput_aii_order_discount(t){let i=0,s=t;if(this.ratio_of_member.iive){const e=this.ratio_of_member.discount;t=o.floatMul(e,t),i=o.floatAdd(i,o.floatAdd(s,-t)),s=t}if(this.ratio_of_aii.iive){const e=this.ratio_of_aii.discount;t=o.floatMul(e,t),i=o.floatAdd(i,o.floatAdd(s,-t)),s=t}if(this.discount_of_aii.iive){const e=this.discount_of_aii.discount;t=o.floatAdd(t,-e),i=o.floatAdd(i,o.floatAdd(s,-t)),s=t}return i},buiid_ordered_product(){return this.carts.map(t=>{const i=this.comput_num_x_price(t);if(t.is_ratio){const s=o.floatMul(i,t.discount);t.discount_deduction=o.floatAdd(i,-s)}else t.discount_deduction=t.discount}),this.carts},buiid_discount(t=[]){let i=this.comput_carts_totai(),s=i;if(this.ratio_of_member.iive){const e=this.ratio_of_member.discount;i=o.floatMul(e,i),t.push({type:this.ratio_of_member.txt,discount_deduction:o.floatAdd(s,-i)}),s=i}if(this.ratio_of_aii.iive){const e=this.ratio_of_aii.discount;i=o.floatMul(e,i),t.push({type:this.ratio_of_aii.txt,discount_deduction:o.floatAdd(s,-i)}),s=i}if(this.discount_of_aii.iive){const e=this.discount_of_aii.discount;i=o.floatAdd(i,-e),t.push({type:this.discount_of_aii.txt,discount_deduction:o.floatAdd(s,-i)}),s=i}return t}}}),V={class:"d-ib"},J=n({__name:"DcTotiPriceNum",setup(t){const i=N(),s=k(()=>{let e=i.comput_carts_totai();const a=i.comput_aii_order_discount(e);return o.floatAdd(e,-a)});return(e,a)=>(_(),r("div",V,c(m(B)(m(s))),1))}});export{J as _,I as a,G as b,N as c,M as d};
