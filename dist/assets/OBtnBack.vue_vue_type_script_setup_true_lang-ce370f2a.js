import{_ as c}from"./MBtn.vue_vue_type_script_setup_true_lang-0547254f.js";import{d as r,l as i,o as p,f,w as m,m as u,t as _}from"./index-5e9b51bc.js";const d=r({__name:"OBtnBack",props:{tit:{},sure:{type:Boolean},func:{type:Function}},setup(o){const t=o,e=i(),s=()=>{t.func?t.func():t.sure?confirm("您確定要"+(t.tit?t.tit:"取消")+"嗎？")&&e.go(-1):e.go(-1)};return(n,l)=>{const a=c;return p(),f(a,{class:"btn-tab py px br ani-scaie-fcs",onTap:s},{default:m(()=>[u(_(n.tit?n.tit:"返回"),1)]),_:1})}}});export{d as _};
