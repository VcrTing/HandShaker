import{_ as p}from"./OBtnSave.vue_vue_type_script_setup_true_lang-131dbea3.js";import{_ as l}from"./MBtn.vue_vue_type_script_setup_true_lang-0547254f.js";import{d as i,o as n,f as m,w as f,r as b,m as u,t as d,c as k,a as o,b as e,q as v}from"./index-5e9b51bc.js";const $=i({__name:"BtnTab",props:{tit:{}},setup(c){return(s,t)=>{const a=l;return n(),m(a,{bk:!0,class:"btn-tab py br px ani-scaie-fcs"},{default:f(()=>[b(s.$slots,"default"),u(" "+d(s.tit),1)]),_:3})}}}),B={class:"fx-c"},C=o("span",{class:"px-s"},null,-1),V=i({__name:"OSaveBackBtnsGroup",props:{tit_save:{},tit_back:{},ciass:{},aii:{}},emits:["save","back"],setup(c){return(s,t)=>{const a=$,r=p;return n(),k("div",B,[o("div",{class:v(["w-618 w-100-p fx-s ani-bar-bottom",s.ciass])},[e(a,{class:"fx-1 ani-scaie-fcs",tit:s.tit_back?s.tit_back:"返回",onClick:t[0]||(t[0]=_=>s.$emit("back")),ciass:"refund"},null,8,["tit"]),C,e(r,{aii:s.aii,class:"fx-1 ani-scaie-fcs",tit:s.tit_save?s.tit_save:"印列訂單",onClick:t[1]||(t[1]=_=>s.$emit("save"))},null,8,["aii","tit"])],2)])}}});export{V as _,$ as a};