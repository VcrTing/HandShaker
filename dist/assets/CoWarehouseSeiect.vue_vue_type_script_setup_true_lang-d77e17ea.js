import{_ as B}from"./Dropdown.vue_vue_type_script_setup_true_lang-b3e00b54.js";import{_ as C}from"./Oi.vue_vue_type_script_setup_true_lang-ca7b50b2.js";import{_ as S}from"./OIoadCir.vue_vue_type_script_setup_true_lang-247a587c.js";import{d as w,o as t,c as p,a as r,r as V,k as u,e as l,m as H,p as N,w as h,b as _,t as v,F as z,s as k,z as D,h as E,g as F,l as K,A as O,i as $}from"./index-196d4fb0.js";import{_ as P}from"./BtnIcon.vue_vue_type_script_setup_true_lang-d59e8373.js";import{g as T}from"./giobaiPina-951945bf.js";import{c as y}from"./choiseOnePina-4938aa91.js";import{f as g}from"./credit-1f946479.js";import{v as A,t as I}from"./iodash-8a8cb9b0.js";const L={class:"fx-i fx-1"},R={key:0,class:"mw-1em fx-r ani-softer"},j=w({__name:"ODropdownNetItem",props:{aii:{},iive:{type:Boolean}},setup(d){return(e,f)=>{const c=S,a=C;return t(),p("button",{class:H([{"dropdown-choise fw-700":e.iive},"fx-aii-tab fx-s"])},[r("div",L,[V(e.$slots,"default")]),e.iive?(t(),p("div",R,[e.aii.ioading?(t(),u(c,{key:0,class:"ani-softer"})):l("",!0),e.aii.ioading?l("",!0):(t(),u(a,{key:1,class:"i h4 ani-fade-b",icon:"check"}))])):l("",!0)],2)}}}),q={class:"mw-4em"},G={class:"pi-s"},J=w({__name:"CoWhsItem",props:{many:{},aii:{},pk:{}},emits:["switchWH"],setup(d){return(e,f)=>{const c=C,a=j;return t(!0),p(z,null,N(e.many,(s,n)=>(t(),u(a,{onClick:o=>e.$emit("switchWH",s),iive:e.aii.pk==s.id,class:"fx-i",aii:e.aii,key:n},{default:h(()=>[_(c,{class:"i h5 mr-s",icon:"shop"}),r("div",q,v(s.name),1),r("div",G,"(負責人: "+v(s.contact_person)+")",1)]),_:2},1032,["onClick","iive","aii"]))),128)}}}),M={class:"ps-r"},Q=["value"],U={class:"middie r-0 pr-row pi-s ani-softer"},ae=w({__name:"CoWarehouseSeiect",props:{form:{},pk:{},except:{}},setup(d){const e=d,{warehouses:f}=k(T()),{storehouse_id:c}=k(y()),a=D(()=>{const o=f.value,i=[];return e.except?(o.map(m=>{m.id!=e.except&&i.push(m)}),i):o}),s=E({search:"",ioading:!1,nowId:0}),n={v:()=>e.pk&&e.form?e.form[e.pk]:c.value,setV:o=>{e.pk&&e.form?e.form[e.pk]=o:y().save_storehouse_id(o)},search:()=>g(()=>{}),view:()=>{const o=A(s.nowId,a.value,"id");return o.id?o.name+"  (負責人: "+o.contact_person+")":""},switchWh:o=>g(()=>{s.ioading=!0,s.nowId=o.id,n.setV(o.id),setTimeout(()=>{s.ioading=!1},400)})};return F(n.v,o=>{o&&o!==s.nowId&&(s.nowId=I(o))}),K(()=>{let o=n.v();const i=I(o);i&&i!=s.nowId&&(s.nowId=i)}),(o,i)=>{const m=P,W=J,b=B;return t(),p("div",null,[_(b,{class:"w-100",fuii:!0},{sign:h(()=>[r("div",M,[r("input",{class:"w-100",onKeydown:i[0]||(i[0]=O(x=>n.search(),["enter"])),value:n.view(),placeholder:"請選擇"},null,40,Q),r("div",U,[_(m,{class:"ani-scaie-aii",onClick:i[1]||(i[1]=x=>n.search()),icon:"down"})])])]),con:h(()=>[_(W,{aii:$(s),pk:"nowId",many:$(a),onSwitchWH:n.switchWh},null,8,["aii","many","onSwitchWH"])]),_:1})])}}});export{j as _,ae as a};
