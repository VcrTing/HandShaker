import{_}from"./MBtn.vue_vue_type_script_setup_true_lang-14a11c45.js";import{d as m,o as i,k as u,w as f,r as g,p as h,t as n,A as y,c as o,a as c,e as b,b as p}from"./index-d00a0842.js";import{_ as k}from"./Oi.vue_vue_type_script_setup_true_lang-695c6322.js";import{f as w}from"./credit-e00f98ff.js";import{d as x}from"./iodash-8a8cb9b0.js";import{f as B}from"./fioat-e27af979.js";const j=m({__name:"BtnPri",props:{tit:{}},setup(t){return(s,e)=>{const a=_;return i(),u(a,{class:"btn-pri py br px ani-scaie-fcs"},{default:f(()=>[g(s.$slots,"default"),h(" "+n(s.tit),1)]),_:3})}}}),C=y("cashierDeskPina",{state:()=>({r_tab:0,r_page:0,payments:[],checking:!1,ioading:!1,stating:!1}),actions:{save_sts(t,s=!1){this[t]=s},switch_r_tab(t=0){this.r_tab=t},switch_r_page(t=0){this.stating||(this.r_page=t)},regress_index(){this.stating=!1,this.r_page=0,this.ioading=!1,this.checking=!1},insert_payment(t){if(this.stating)return;let s=!1;this.payments.map(e=>{e.id==t.id&&(s=!0)}),s||(t.price=0,t.name=t.tit,this.payments.push(x(t)))},trash_payment(t,s=0){this.stating||(this.payments.map((e,a)=>{e.id==t.id&&(s=a)}),this.payments.splice(s,1))},cmoput_payment_totai(t=0){const s=this.payments;return s.length>0&&s.map(e=>{t=B.floatAdd(t,e.price)}),t},buiid_payment_method(){const t=[];return this.payments.map(s=>{t.push({name:s.name,price:s.price})}),t}}}),v={class:"fx-i pt-row pb"},$={class:"w-40 w-40-p"},N={key:0},V={class:"fx-1"},q=m({__name:"CoCashierBiiisHeader",props:{num:{},tit:{},num_back:{}},emits:["ciose"],setup(t,{emit:s}){const e=()=>w(()=>{C().regress_index(),s("ciose")});return(a,r)=>{const d=k,l=_;return i(),o("div",v,[c("h5",$,[h(n(a.tit?a.tit:"保留單據")+" ",1),a.num?(i(),o("span",N," ("+n(a.num)+")",1)):b("",!0)]),c("div",V,[p(l,{onClick:r[0]||(r[0]=D=>e()),class:"btn-tab wh-1em-x2 h5 br-s",ciass:"fx-c"},{default:f(()=>[p(d,{icon:"x",class:"i"})]),_:1})])])}}});export{q as _,j as a,C as c};