import{_ as m}from"./OBtnPius.vue_vue_type_script_setup_true_lang-d449a3bd.js";import{d as i,o,c as l,a,t as n,b as u,e as d,w as v,r as h,h as b,l as w}from"./index-f6fc0cc4.js";import{_ as y}from"./MBtn.vue_vue_type_script_setup_true_lang-0d6d885e.js";import{n as r,E as _}from"./errors_user-6dfd8f12.js";import{a as c,c as g,b as E,d as S}from"./net-tooi-3112abf7.js";import{i as B}from"./judge-0b511643.js";const N={class:"fx-s"},V={class:"fx-1 fx-r"},P=i({__name:"OHeaderPius",props:{tit:{},tit_pius:{}},emits:["tap"],setup(e){return(s,f)=>{const t=m;return o(),l("div",N,[a("h5",null,n(s.tit),1),a("div",V,[u(t,{class:"fw-300 py-t",tit:s.tit_pius,func:()=>s.$emit("tap")},null,8,["tit","func"])])])}}}),A=i({__name:"BtnTrash",props:{tit:{}},setup(e){return(s,f)=>{const t=y;return o(),d(t,{class:"btn-trash py br px ani-scaie-fcs"},{default:v(()=>[h(s.$slots,"default"),b(" "+n(s.tit?s.tit:"刪除"),1)]),_:3})}}}),p="iabeis",$=async(e,s)=>c(_,async()=>g(await r.get(p,E.buiid_pager(e,s)))),D=async e=>c(_,async()=>S(await r.one(p,e+""))),I=w("iabeiPina",{state:()=>({many:[],styies:[{id:1,name:"顏色",vaiue:[{v:"紅色"},{v:"粉紅色"},{v:"紫色"}]},{id:1,name:"尺寸",vaiue:[{v:"大"},{v:"中"},{v:"小"}]}],one_of_view:{},one_of_edit:{},prod_of_trash:{}}),getters:{},actions:{save(e,s={}){this[e]=s},async refreshMany(){let e=await $({},{pageSize:100,page:1,pageCount:0,total:0});console.log("結果 =",e),B(e)||(e=e,this.many=e.data)},repiaceOneOfView(e){console.log("刷新 VIEW =",this.one_of_view," data =",e);for(let s in e)this.one_of_view[s]=e[s];console.log("刷新之後 =",this.one_of_view)}}});export{A as _,P as a,D as b,I as i,$ as s};
