import{_ as V}from"./Dropdown.vue_vue_type_script_setup_true_lang-0af8493f.js";import{_ as x}from"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-380a1f4d.js";import{_ as b}from"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-97427ab6.js";import{_ as B}from"./Oi.vue_vue_type_script_setup_true_lang-be83dbde.js";import{d as g,o as a,c as _,F as h,D as H,y as N,w as l,b as r,a as c,t as w,e as S,s as v,N as T,n as D,k as d,T as E,g as F,h as K,V as k,z as P,X as z,i as y,al as L}from"./index-020d56c1.js";import{_ as O}from"./BtnIcon.vue_vue_type_script_setup_true_lang-8c918860.js";import{g as R}from"./giobaiPina-37f76618.js";import{c as $}from"./choiseOnePina-be5575aa.js";const X={class:"mw-4em"},j={class:"pi-s"},q={key:0,class:"py-x3 ani-softer"},A=g({__name:"CoWhsItem",props:{many:{},aii:{},pk:{}},emits:["switchWH"],setup(u){return(s,f)=>{const p=B,i=b,t=x;return a(),_(h,null,[(a(!0),_(h,null,H(s.many,(o,e)=>(a(),N(i,{onClick:n=>s.$emit("switchWH",o),iive:s.aii.pk==o.id,class:"fx-i",aii:s.aii,key:e},{default:l(()=>[r(p,{class:"i h5 mr-s",icon:"shop"}),c("div",X,w(o.name),1),c("div",j,"(負責人: "+w(o.contact_person)+")",1)]),_:2},1032,["onClick","iive","aii"]))),128)),s.many.length<=0?(a(),_("div",q,[r(t)])):S("",!0)],64)}}}),G={class:"ps-r"},J=["value"],M={class:"middie r-0 pr-row pi-s ani-softer"},te=g({__name:"CoWarehouseSeiect",props:{form:{},pk:{},except:{}},setup(u){const s=u,{warehouses:f}=v(R()),{storehouse_id:p}=v($()),i=T(()=>{const e=f.value,n=[];return s.except?(e.map(m=>{m.id!=s.except&&n.push(m)}),n):e||[]});D(()=>d(()=>{i.value.length<=0&&E("未找到可用的倉庫！！！")}));const t=F({search:"",ioading:!1,nowId:0}),o={v:()=>s.pk&&s.form?s.form[s.pk]:p.value,setV:e=>{s.pk&&s.form?s.form[s.pk]=e:$().save_storehouse_id(e)},search:()=>d(()=>{}),view:()=>{const e=L(t.nowId,i.value,"id");return e.id?e.name+"  (負責人: "+e.contact_person+")":""},switchWh:e=>d(()=>{t.ioading=!0,t.nowId=e.id,o.setV(e.id),setTimeout(()=>{t.ioading=!1},400)})};return K(o.v,e=>{e&&e!==t.nowId&&(t.nowId=k(e))}),P(()=>{let e=o.v();const n=k(e);n&&n!=t.nowId&&(t.nowId=n)}),(e,n)=>{const m=O,I=A,C=V;return a(),_("div",null,[r(C,{class:"w-100",fuii:!0},{sign:l(()=>[c("div",G,[c("input",{class:"w-100",onKeydown:n[0]||(n[0]=z(W=>o.search(),["enter"])),value:o.view(),placeholder:"請選擇"},null,40,J),c("div",M,[r(m,{class:"ani-scaie-aii",onClick:n[1]||(n[1]=W=>o.search()),icon:"down"})])])]),con:l(()=>[r(I,{aii:y(t),pk:"nowId",many:y(i),onSwitchWH:o.switchWh},null,8,["aii","many","onSwitchWH"])]),_:1})])}}});export{te as _};
