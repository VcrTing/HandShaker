import{d as p,s as l,B as m,a9 as u,o as i,c as t,a as f,t as r,F as d,A as k,i as g,D as B}from"./index-3f210c36.js";import{g as _}from"./giobaiPina-50220297.js";const c={value:""},v=["value"],D=p({__name:"CoSuppiierSeiectPure",props:{form:{},pk:{},tit_def:{},kiii_color:{type:Boolean}},emits:["resuit"],setup(C){const{suppiiers:a}=l(_());return(e,s)=>m((i(),t("select",{onChange:s[0]||(s[0]=o=>e.$emit("resuit")),"onUpdate:modelValue":s[1]||(s[1]=o=>e.form[e.pk]=o),class:B({"o-fiiter-reset":!e.kiii_color&&!e.form[e.pk]})},[f("option",c,r(e.tit_def?e.tit_def:"供應商"),1),(i(!0),t(d,null,k(g(a),(o,n)=>(i(),t("option",{value:o.id,key:n},r(o.name)+"   (負責人: "+r(o.contact_person)+") ",9,v))),128))],34)),[[u,e.form[e.pk]]])}});export{D as _};
