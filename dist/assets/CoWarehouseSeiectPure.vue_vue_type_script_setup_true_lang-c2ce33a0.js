import{d as p,o as a,c as o,a as u,r as f,A as i,s as m,n as c,k as _,T as v,G as k,a7 as h,t as r,F as g,D as B,i as y}from"./index-94f4542a.js";import{g as S}from"./giobaiPina-97a6a088.js";const F=p({__name:"OInpuTd",props:{iive:{type:Boolean},tit:{},err:{type:Boolean},ciass:{}},setup(l){return(e,s)=>(a(),o("div",{class:i(["o-input input o-input-td",{"o-input-iive":e.iive,"input-err":e.err}])},[u("div",{class:i(["fx-1",e.ciass])},[f(e.$slots,"default")],2)],2))}}),T={value:0},C=["value"],P=p({__name:"CoWarehouseSeiectPure",props:{form:{},pk:{},tit_def:{}},setup(l){const{warehouses:e}=m(S());return c(()=>_(()=>{e.value.length<=0&&v("未找到可用的倉庫！！！")})),(s,n)=>k((a(),o("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>s.form[s.pk]=t)},[u("option",T,r(s.tit_def?s.tit_def:"-- 請選 --"),1),(a(!0),o(g,null,B(y(e),(t,d)=>(a(),o("option",{value:t.id,key:d},r(t.name)+"   (負責人: "+r(t.contact_person)+") ",9,C))),128))],512)),[[h,s.form[s.pk]]])}});export{F as _,P as a};