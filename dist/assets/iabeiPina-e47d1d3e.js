import{_ as f}from"./MBtn.vue_vue_type_script_setup_true_lang-6b0b8f4f.js";import{d as i,o,c as l,w as d,r as u,m as v,t as n,e as h,b as a,a as b,q as y,x as w}from"./index-eba50101.js";import{_ as g}from"./OBtnPius.vue_vue_type_script_setup_true_lang-12069e02.js";import{n as r}from"./conn-bb36a56e.js";import{a as _,c as B,b as E,d as S}from"./net-tooi-1d3bb44e.js";import{E as c}from"./errors_user-be6d0865.js";import{i as N}from"./judge-13dfac2e.js";const A=i({__name:"BtnTrash",props:{tit:{}},setup(e){return(s,m)=>{const t=f;return o(),l(t,{class:"btn-trash py br px ani-scaie-fcs"},{default:d(()=>[u(s.$slots,"default"),v(" "+n(s.tit?s.tit:"刪除"),1)]),_:3})}}}),V={class:"fx-s"},$={class:"fx-1 fx-r"},D=i({__name:"OHeaderPius",props:{tit:{},tit_pius:{},die:{type:Boolean}},emits:["tap","die"],setup(e){return(s,m)=>{const t=g;return o(),h("div",V,[a("h5",null,n(s.tit),1),a("div",$,[b(t,{class:y([{"btn-die-imp":s.die},"fw-300 py-t"]),tit:s.tit_pius,func:()=>s.$emit(s.die?"die":"tap")},null,8,["class","tit","func"])])])}}}),p="iabeis",k=async(e,s)=>_(c,async()=>B(await r.get(p,E.buiid_pager(e,s)))),I=async e=>_(c,async()=>S(await r.one(p,e+""))),T=w("iabeiPina",{state:()=>({many:[],styies:[{id:1,name:"顏色",vaiue:[{v:"紅色"},{v:"粉紅色"},{v:"紫色"}]},{id:1,name:"尺寸",vaiue:[{v:"大"},{v:"中"},{v:"小"}]}],one_of_view:{},one_of_edit:{},prod_of_trash:{}}),getters:{},actions:{save(e,s={}){this[e]=s},async refreshMany(){let e=await k({},{pageSize:100,page:1,pageCount:0,total:0});console.log("結果 =",e),N(e)||(e=e,this.many=e.data)},repiaceOneOfView(e){console.log("刷新 VIEW =",this.one_of_view," data =",e);for(let s in e)this.one_of_view[s]=e[s];console.log("刷新之後 =",this.one_of_view)}}});export{D as _,A as a,I as b,T as i,k as s};
