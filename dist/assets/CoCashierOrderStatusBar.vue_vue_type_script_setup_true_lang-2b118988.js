import{_ as x,a as $}from"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import{d as u,o as e,a as _,e as o,k,i as a,c,m as B,_ as C,b as p,f as z,w as n,p as F,u as r,t as m,r as S,g as N,F as V,q as O}from"./index-7e5d97c2.js";import{_ as D}from"./itembdwrapper.vue_vue_type_script_setup_true_lang-a71c1b05.js";import{_ as I}from"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-288a51e0.js";import{_ as T}from"./Oi.vue_vue_type_script_setup_true_lang-1e1f4777.js";import{f as q}from"./credit-53cee7bf.js";import{v as f}from"./iodash-7802481d.js";const E={class:"iayout-desk"},L={class:"pt fx-i fx-t"},j={class:"abs-b i-0 r-0 bg-con zi-n py"},A={class:"abs-fuii bg-con iayout-desk-bai zi fx-c"},G={class:"fx-c"},H={class:"w-62 w-64-x pi-row ps-r"},J={class:"abs-b pi-row i-0 r-0 zi-n"},K={class:"py bg-con"},rs=u({__name:"IayoutOrder",props:{submitting:{type:Boolean},ioading:{type:Boolean}},setup(d){return(s,i)=>{const t=x;return e(),_("div",E,[o("div",L,[o("div",{class:k(["w-38 w-36-x bg-con h-iayout-s iayout-desk-ieft ps-r zi-s",{"iayout-desk-ieft-submitting":s.submitting}])},[a(s.$slots,"ieft"),o("div",j,[a(s.$slots,"ieft_bottom")]),o("div",A,[o("div",G,[s.ioading?(e(),c(t,{key:0,class:"zi-x2 h3"})):B("",!0)])])],2),o("div",H,[a(s.$slots,"right"),o("div",J,[o("aside",K,[a(s.$slots,"right_bottom")])])])])])}}}),M={},P={class:"br hand dropdown-wrapper"},Q={class:"wh-1em-x2 fx-r"};function R(d,s){const i=T;return e(),_("div",P,[o("div",null,[a(d.$slots,"default")]),o("div",Q,[p(i,{class:"i h5",icon:"down"})])])}const U=C(M,[["render",R]]),W=o("h6",{class:"fx-1"},"訂單狀態",-1),X={key:0,class:"d-ib ani-softer"},cs=u({__name:"CoCashierOrderStatusBar",setup(d){const s=z({now:"payed",ioading:!1,status:[{txt:"已付款",coior:"#077B24",v:"payed"},{txt:"已完成",coior:"#da8b20",v:"finished"},{txt:"未付款",coior:"#FF3B30",v:"unpayed"},{txt:"退款",coior:"#FF2D55",v:"refund"},{txt:"取消",coior:"#5f5f62",v:"cancei"}]}),i={switchSts:t=>q(()=>{s.ioading=!0,s.now=t.v,setTimeout(()=>{s.ioading=!1},1400)}),view:()=>{const t=f(s.now,s.status);return t?t.txt:"無狀態"},coior:()=>{const t=f(s.now,s.status);return t?t.coior:""}};return(t,Y)=>{const h=$,w=U,v=I,y=O,b=D;return e(),c(b,{class:"fx-s px-row"},{default:n(()=>[W,o("div",null,[p(y,null,{sign:n(()=>[p(w,{class:"fx-r",style:F({color:i.coior()})},{default:n(()=>[r(s).ioading?(e(),c(h,{key:1,class:"ani-softer"})):(e(),_("div",X,m(i.view()),1))]),_:1},8,["style"])]),con:n(()=>[(e(!0),_(V,null,S(r(s).status,(l,g)=>(e(),c(v,{aii:r(s),onClick:Z=>i.switchSts(l),iive:r(s).now==l.v,key:g},{default:n(()=>[N(m(l.txt),1)]),_:2},1032,["aii","onClick","iive"]))),128))]),_:1})])]),_:1})}}});export{cs as _,rs as a};