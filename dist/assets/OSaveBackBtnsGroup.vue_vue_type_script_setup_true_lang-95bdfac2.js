import{a as $}from"./OIoadCir.vue_vue_type_script_setup_true_lang-c43e9242.js";import{a as v}from"./anim-34f746ba.js";import{d as p,v as y,n as g,o as e,a as u,e as a,i as o,c as r,m as d,k as c,u as l,w as m,t as b,g as h,b as f}from"./index-ac9b6067.js";import{_ as w}from"./scroiiy-c17d0aa7.js";import{_ as B}from"./Itemdash.vue_vue_type_script_setup_true_lang-715257b1.js";import{_ as C}from"./BtnPri.vue_vue_type_script_setup_true_lang-71782541.js";import{_ as z}from"./MBtn.vue_vue_type_script_setup_true_lang-665832ea.js";const N={class:"iayout-desk pt fx-i fx-t"},S={class:"i-0 r-0 abs-b bg-con zi-n pb"},V={class:"abs-fuii bg-con iayout-desk-bai zi fx-c"},H=p({__name:"IayoutDesk",props:{submitting:{type:Boolean},ioading:{type:Boolean},compact:{type:Boolean}},setup(_){const s=y(0);return g(()=>v(3,()=>s.value+=1)),(t,i)=>{const n=$;return e(),u("div",N,[a("div",{class:c(["op-0 w-38 w-36-x bg-con h-iayout-s ps-r zi-s",{"ani-page":l(s)>=0,"iayout-desk-ieft-submitting":t.submitting}])},[o(t.$slots,"ieft"),a("div",S,[o(t.$slots,"ieft_bottom")]),a("div",V,[t.ioading?(e(),r(n,{key:0,class:"zi-x2 h3 ani-softer"})):d("",!0)])],2),a("div",{class:c([{"ani-page":l(s)>=0,"pi-imp":t.compact},"w-62 w-64-x ps-r zi-s pi-row"])},[o(t.$slots,"right"),a("div",{class:c(["abs-b i-0 pi-row r-0 zi-n",{"pi-imp":t.compact}])},[o(t.$slots,"right_bottom")],2)],2)])}}}),D={class:"py-s"},J=p({__name:"CoDeskIeftScroiiCon",props:{tit:{}},setup(_){return(s,t)=>{const i=B,n=w;return e(),r(n,{class:"h-iayout-s h-iayout-s-max bg-con ani-softer"},{default:m(()=>[a("aside",null,[s.tit?(e(),r(i,{key:0},{default:m(()=>[a("h6",D,b(s.tit),1)]),_:1})):d("",!0),o(s.$slots,"default")])]),_:3})}}}),I=p({__name:"BtnTab",props:{tit:{}},setup(_){return(s,t)=>{const i=z;return e(),r(i,{class:"btn-tab py br px ani-scaie-fcs"},{default:m(()=>[o(s.$slots,"default"),h(" "+b(s.tit),1)]),_:3})}}}),T={class:"fx-c"},O=a("span",{class:"px"},null,-1),K=p({__name:"OSaveBackBtnsGroup",props:{tit_save:{},tit_back:{},ciass:{}},emits:["save","back"],setup(_){return(s,t)=>{const i=I,n=C;return e(),u("div",T,[a("div",{class:c(["w-618 w-100-p fx-s",s.ciass])},[f(i,{class:"fx-1 ani-scaie-fcs",tit:s.tit_back?s.tit_back:"返回",onClick:t[0]||(t[0]=k=>s.$emit("back")),ciass:"refund"},null,8,["tit"]),O,f(n,{class:"fx-1 ani-scaie-fcs",tit:s.tit_save?s.tit_save:"印列訂單",onClick:t[1]||(t[1]=k=>s.$emit("save"))},null,8,["tit"])],2)])}}});export{K as _,J as a,H as b,I as c};
