import{_ as k}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-4266d791.js";import{d as f,o,c as i,t as n,n as m,y as u,w,C as v,F as h,D as y,a as s,i as b,b as g,k as B,V as p,S as $}from"./index-5586e4a0.js";import{pageProductInstockPina as C}from"./pageProductInstockPina-cf2946a4.js";import{v as x}from"./view-16891a7b.js";import{e as N}from"./product_trs-754059ff.js";const P={class:"d-ib hand txt-pri ani-scaie-aii-x2 fs-n ani-softer"},T=f({__name:"OTabieOpera",props:{tit:{}},setup(c){return(_,d)=>(o(),i("div",P,n(_.tit),1))}}),V={class:"w-28 pr-s"},D={key:0},F={key:1},I={class:"w-18"},O={class:"w-18"},S={class:"w-15"},E={class:"fx-1 fx-s"},L={key:0,class:"pi-s fx-1 fx-wp fx-r"},j={key:1},M=f({__name:"ProduNewInstockTabie",props:{aii:{},one_of_edit:{},kiii_option:{type:Boolean}},setup(c){const _=c;m(()=>y(_.aii,N));const d={view:()=>B(()=>{const t=(_.one_of_edit.restocks?_.one_of_edit.restocks:[]).sort((a,r)=>p(a.id)-p(r.id));t.length>0&&(C().save("newinstock_of_view",t[t.length-1]),$(111))})};return(e,t)=>{const a=T,r=k;return o(),u(r,{aii:e.aii,mini:!0},{default:w(()=>[(o(),i(h,null,v([{}],(q,l)=>s("div",{class:"td",key:l},[s("div",V,[e.one_of_edit.new_restock_date?(o(),i("span",D,n(b(x)(e.one_of_edit.new_restock_date)),1)):(o(),i("span",F,"(未有入貨信息)"))]),s("div",I,n(e.one_of_edit.new_restock_price),1),s("div",O,n(e.one_of_edit.new_lowest_price),1),s("div",S,n(e.one_of_edit.new_selling_price),1),s("div",E,[s("div",null,n(e.one_of_edit.total_broken_products),1),e.kiii_option?(o(),i("span",j)):(o(),i("div",L,[g(a,{onClick:t[0]||(t[0]=z=>d.view()),tit:"入貨詳情"})]))])])),64))]),_:1},8,["aii"])}}});export{M as _,T as a};
