import{_ as b}from"./Dropdown.vue_vue_type_script_setup_true_lang-ef17b606.js";import{_ as T}from"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-3d239409.js";import{_ as N}from"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-2e0511a7.js";import{_ as D}from"./Oi.vue_vue_type_script_setup_true_lang-e89faeb3.js";import{d as C,o as i,c as r,F as w,A as W,y as V,w as v,b as l,a as m,t as _,e as k,s as $,H as E,n as F,k as f,T as K,g as P,h as A,V as g,I as L,X as M,i as h,B as O,a7 as R,al as U}from"./index-4cfd176e.js";import{_ as X}from"./BtnIcon.vue_vue_type_script_setup_true_lang-4461ee34.js";import{g as j}from"./giobaiPina-89a9d613.js";import{c as I}from"./choiseOnePina-3f2f462f.js";const q={class:"mw-4em"},z={class:"pi-s"},G={key:0,class:"py-x3 ani-softer"},J=C({__name:"CoWhsItem",props:{many:{},aii:{},pk:{}},emits:["switchWH"],setup(y){return(o,u)=>{const d=D,c=N,t=T;return i(),r(w,null,[(i(!0),r(w,null,W(o.many,(n,e)=>(i(),V(c,{onClick:s=>o.$emit("switchWH",n),iive:o.aii.pk==n.id,class:"fx-i",aii:o.aii,key:e},{default:v(()=>[l(d,{class:"i h5 mr-s",icon:"shop"}),m("div",q,_(n.name),1),m("div",z,"(負責人: "+_(n.contact_person)+")",1)]),_:2},1032,["onClick","iive","aii"]))),128)),o.many.length<=0?(i(),r("div",G,[l(t)])):k("",!0)],64)}}}),Q={class:"ps-r"},Y=["value"],Z={class:"middie r-0 pr-row pi-s ani-softer"},x=m("option",{value:0}," -- 請選擇 -- ",-1),ee=["value"],me=C({__name:"CoWarehouseSeiect",props:{form:{},pk:{},except:{},pure:{type:Boolean}},setup(y){const o=y,{warehouses:u}=$(j()),{storehouse_id:d}=$(I()),c=E(()=>{const e=u.value,s=[];return o.except?(e.map(p=>{p.id!=o.except&&s.push(p)}),s):e||[]});F(()=>f(()=>{console.log(u.value),c.value.length<=0&&K("未找到可用的倉庫！！！")}));const t=P({search:"",ioading:!1,nowId:0}),n={v:()=>o.pk&&o.form?o.form[o.pk]:d.value,setV:e=>{o.pk&&o.form?o.form[o.pk]=e:I().save_storehouse_id(e)},search:()=>f(()=>{}),view:()=>{const e=U(t.nowId,c.value,"id");return e.id?e.name+"  (負責人: "+e.contact_person+")":""},switchWh:e=>f(()=>{t.ioading=!0,t.nowId=e.id,n.setV(e.id),setTimeout(()=>{t.ioading=!1},400)})};return A(n.v,e=>{e&&e!==t.nowId&&(t.nowId=g(e))}),L(()=>{let e=n.v();const s=g(e);s&&s!=t.nowId&&(t.nowId=s)}),(e,s)=>{const p=X,B=J,H=b;return i(),r("div",null,[e.pure?k("",!0):(i(),V(H,{key:0,class:"w-100",fuii:!0},{sign:v(()=>[m("div",Q,[m("input",{class:"w-100",onKeydown:s[0]||(s[0]=M(a=>n.search(),["enter"])),value:n.view(),placeholder:"請選擇"},null,40,Y),m("div",Z,[l(p,{class:"ani-scaie-aii",onClick:s[1]||(s[1]=a=>n.search()),icon:"down"})])])]),con:v(()=>[l(B,{aii:h(t),pk:"nowId",many:h(c),onSwitchWH:n.switchWh},null,8,["aii","many","onSwitchWH"])]),_:1})),e.pure&&e.form&&e.pk?O((i(),r("select",{key:1,"onUpdate:modelValue":s[2]||(s[2]=a=>e.form[e.pk]=a)},[x,(i(!0),r(w,null,W(h(c),(a,S)=>(i(),r("option",{value:a.id,key:S},_(a.name)+"   (負責人: "+_(a.contact_person)+") ",9,ee))),128))],512)),[[R,e.form[e.pk]]]):k("",!0)])}}});export{me as _};
