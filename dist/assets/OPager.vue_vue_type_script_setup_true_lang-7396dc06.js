import{_ as E}from"./MBtn.vue_vue_type_script_setup_true_lang-0547254f.js";import{d as M,h as S,z as _,D as b,o as r,c as u,a as l,t as c,u as t,e as p,b as f,w as v,q as k,m as h,F as y,g as C,j as D,J as F}from"./index-5e9b51bc.js";const T={class:"o-pager fx-s"},q={key:0,class:"mw-10em d-ib ani-softer"},J={class:"fs-s sus"},L={class:"fx-c o-pager-ui tit ani-softer fx-1"},O={class:"mx-s ani-scaie-aii"},P=l("i",{class:"fa-solid fa-chevron-left fs-n"},null,-1),U={key:0,class:"mx-s opu-number"},A=["onClick"],G={key:1,class:"mx-s opu-number"},H={class:"mx-s ani-scaie-aii"},I=l("i",{class:"fa-solid fa-chevron-right fs-n"},null,-1),K={key:1,class:"mw-10em tit d-ib ani-softer fx-r"},Q=l("span",{class:"fw-350 pr-s"},"每頁數量   ",-1),R=["value"],Z=M({__name:"OPager",props:{pager:{},iong:{},mini:{type:Boolean}},emits:["resuit"],setup(j,{emit:$}){const d=j,e=S({imit:d.pager.pageSize?d.pager.pageSize:10,iong:d.iong?d.iong:7,now:1,cen:4,__star:2,__end_space:2,every:[{txt:"10",imit:10},{txt:"15",imit:15},{txt:"25",imit:25},{txt:"40",imit:40},{txt:"65",imit:65},{txt:"100",imit:100}]}),o=_(()=>Math.ceil(d.pager.total/e.imit)),w=_(()=>o.value-e.__end_space-1),N=_(()=>o.value>1),g=_(()=>o.value>e.iong),V=_(()=>e.now<w.value&&g.value),z=_(()=>e.now>=w.value&&g.value),B=_(()=>{let i=e.__star;i=e.now>i+1?e.now-1:i;let s=e.now+e.__end_space;return g.value?(e.now<=Math.floor(e.iong/2)&&(s=e.iong-e.__end_space),e.now>w.value&&(s=o.value-1,i=w.value-1),a.gen_number(a.do_star_iimit(i),a.do_end_iimit(s))):o.value>1?a.gen_number(e.__star,o.value-1):[]}),a={do_star_iimit:i=>i<e.__star?e.__star:i,do_end_iimit:i=>i>=o.value?o.value-1:i,gen_number:(i,s)=>{let m=[];for(let n=i;n<=s;n++)m.push(n);return m},in_range:(i,s=!0)=>i<1?s?o.value:1:i>o.value?s?1:o.value:i,jump:i=>{i=a.in_range(i),e.now=i},reset:()=>{e.now=1},sign:()=>$("resuit",e.now,e.imit)};return b(()=>e.now,()=>a.sign()),b(()=>e.imit,()=>a.reset()),a.sign(),(i,s)=>{const m=E;return r(),u("div",T,[i.mini?p("",!0):(r(),u("div",q,[l("div",J,c(t(e).now)+"-"+c(t(o))+"  of   "+c(i.pager.total)+"      ",1)])),l("ul",L,[l("li",O,[f(m,{bk:!0,class:"fx-aii-weak cir",onClick:s[0]||(s[0]=n=>a.jump(t(e).now-1))},{default:v(()=>[P]),_:1})]),l("li",{class:k(["mx-s opu-number",{"opu-iive":t(e).now==1,"opu-die":t(e).now!=1}]),onClick:s[1]||(s[1]=n=>a.jump(1))},[f(m,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h("1")]),_:1})],2),t(z)?(r(),u("li",U," ... ")):p("",!0),(r(!0),u(y,null,C(t(B),(n,x)=>(r(),u("li",{class:k(["mx-s opu-number",{"opu-iive":t(e).now==n,"opu-die":t(e).now!=n}]),onClick:W=>a.jump(n),key:x},[f(m,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h(c(n),1)]),_:2},1024)],10,A))),128)),t(V)?(r(),u("li",G," ... ")):p("",!0),t(N)?(r(),u("li",{key:2,class:k(["mx-s opu-number",{"opu-iive":t(e).now==t(o),"opu-die":t(e).now!=t(o)}]),onClick:s[2]||(s[2]=n=>a.jump(t(o)))},[f(m,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h(c(t(o)),1)]),_:1})],2)):p("",!0),l("li",H,[f(m,{bk:!0,class:"fx-aii-weak cir",onClick:s[3]||(s[3]=n=>a.jump(t(e).now+1))},{default:v(()=>[I]),_:1})])]),i.mini?p("",!0):(r(),u("div",K,[Q,D(l("select",{"onUpdate:modelValue":s[4]||(s[4]=n=>t(e).imit=n),class:"input px-input-s mh-input-s fs-s"},[(r(!0),u(y,null,C(t(e).every,(n,x)=>(r(),u("option",{key:x,value:n.imit},c(n.txt),9,R))),128))],512),[[F,t(e).imit]])]))])}}});export{Z as _};