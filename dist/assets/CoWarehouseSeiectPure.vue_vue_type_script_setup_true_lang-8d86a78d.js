import{d as p,o as t,c as a,a as u,r as m,B as n,s as f,H as c,a7 as _,t as r,F as v,G as k,i as B}from"./index-1c4854d6.js";import{g as h}from"./giobaiPina-6c5d2147.js";const w=p({__name:"OInpuTd",props:{iive:{type:Boolean},tit:{},err:{type:Boolean},ciass:{}},setup(l){return(s,e)=>(t(),a("div",{class:n(["o-input input o-input-td",{"o-input-iive":s.iive,"input-err":s.err}])},[u("div",{class:n(["fx-1",s.ciass])},[m(s.$slots,"default")],2)],2))}}),g={value:0},y=["value"],D=p({__name:"CoWarehouseSeiectPure",props:{form:{},pk:{},tit_def:{}},setup(l){const{warehouses:s}=f(h());return(e,i)=>c((t(),a("select",{"onUpdate:modelValue":i[0]||(i[0]=o=>e.form[e.pk]=o)},[u("option",g,r(e.tit_def?e.tit_def:"-- 請選 --"),1),(t(!0),a(v,null,k(B(s),(o,d)=>(t(),a("option",{value:o.id,key:d},r(o.name)+"   (負責人: "+r(o.contact_person)+") ",9,y))),128))],512)),[[_,e.form[e.pk]]])}});export{w as _,D as a};
