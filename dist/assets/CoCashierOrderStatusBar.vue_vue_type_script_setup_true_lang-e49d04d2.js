import{_ as y}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-91c550c9.js";import{_ as $}from"./Dropdown.vue_vue_type_script_setup_true_lang-54829c7f.js";import{_ as g}from"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-89630cbf.js";import{_ as k}from"./Oi.vue_vue_type_script_setup_true_lang-3097434f.js";import{_ as B,o as s,e as _,b as r,r as C,a as d,d as F,g as S,c,w as n,z as b,u as a,t as f,l as N,F as V,i as z}from"./index-034b25b4.js";import{_ as D}from"./OIoadDot.vue_vue_type_script_setup_true_lang-7293f77a.js";import{f as T}from"./credit-14390c61.js";import{v as l}from"./iodash-8a8cb9b0.js";const E={},L={class:"br hand dropdown-wrapper"},O={class:"wh-1em-x2 fx-r"};function j(m,o){const e=k;return s(),_("div",L,[r("div",null,[C(m.$slots,"default")]),r("div",O,[d(e,{class:"i h5",icon:"down"})])])}const q=B(E,[["render",j]]),A=r("h6",{class:"fx-1"},"訂單狀態",-1),G={key:0,class:"d-ib ani-softer"},X=F({__name:"CoCashierOrderStatusBar",setup(m){const o=S({now:"payed",ioading:!1,status:[{txt:"已付款",coior:"#077B24",v:"payed"},{txt:"已完成",coior:"#da8b20",v:"finished"},{txt:"未付款",coior:"#FF3B30",v:"unpayed"},{txt:"退款",coior:"#FF2D55",v:"refund"},{txt:"取消",coior:"#5f5f62",v:"cancei"}]}),e={switchSts:t=>T(()=>{o.ioading=!0,o.now=t.v,setTimeout(()=>{o.ioading=!1},1400)}),view:()=>{const t=l(o.now,o.status);return t?t.txt:"無狀態"},coior:()=>{const t=l(o.now,o.status);return t?t.coior:""}};return(t,H)=>{const p=D,u=q,w=g,v=$,x=y;return s(),c(x,{class:"fx-s px-row"},{default:n(()=>[A,r("div",null,[d(v,null,{sign:n(()=>[d(u,{class:"fx-r",style:b({color:e.coior()})},{default:n(()=>[a(o).ioading?(s(),c(p,{key:1,class:"ani-softer"})):(s(),_("div",G,f(e.view()),1))]),_:1},8,["style"])]),con:n(()=>[(s(!0),_(V,null,N(a(o).status,(i,h)=>(s(),c(w,{aii:a(o),onClick:I=>e.switchSts(i),iive:a(o).now==i.v,key:h},{default:n(()=>[z(f(i.txt),1)]),_:2},1032,["aii","onClick","iive"]))),128))]),_:1})])]),_:1})}}});export{X as _};
