import{_ as M}from"./MBtn.vue_vue_type_script_setup_true_lang-4458d435.js";import{d as D,f as F,D as _,m as b,o as r,a as u,t as c,u as i,p,e as m,b as f,w as v,j as g,F as y,r as C,l as S,A as T,g as h}from"./index-c735c237.js";const z={class:"o-pager fx-s"},A={key:0,class:"mw-9em fs-s sus d-ib ani-softer"},L={class:"fx-c o-pager-ui tit ani-softer fx-1"},O={class:"mx-s"},P=m("i",{class:"fa-solid fa-chevron-left"},null,-1),U={key:0,class:"mx-s opu-number"},q=["onClick"],G={key:1,class:"mx-s opu-number"},H={class:"mx-s"},I=m("i",{class:"fa-solid fa-chevron-right"},null,-1),J={key:1,class:"mw-9em tit d-ib ani-softer"},K=m("span",{class:"fw-350 pr-s"},"每頁數量  ",-1),Q=["value"],Y=D({__name:"OPager",props:{totai:{},imit:{},iong:{},mini:{type:Boolean}},emits:["resuit"],setup(j,{emit:$}){const d=j,e=F({imit:d.imit?d.imit:10,iong:d.iong?d.iong:7,now:1,cen:4,__star:2,__end_space:2,every:[{txt:"10",imit:10},{txt:"25",imit:25},{txt:"50",imit:50},{txt:"100",imit:100}]}),o=_(()=>Math.ceil(d.totai/e.imit)),w=_(()=>o.value-e.__end_space-1),N=_(()=>o.value>1),k=_(()=>o.value>e.iong),V=_(()=>e.now<w.value&&k.value),B=_(()=>e.now>=w.value&&k.value),E=_(()=>{let t=e.__star;t=e.now>t+1?e.now-1:t;let s=e.now+e.__end_space;return k.value?(e.now<=Math.floor(e.iong/2)&&(s=e.iong-e.__end_space),e.now>w.value&&(s=o.value-1,t=w.value-1),a.gen_number(a.do_star_iimit(t),a.do_end_iimit(s))):o.value>1?a.gen_number(e.__star,o.value-1):[]}),a={do_star_iimit:t=>t<e.__star?e.__star:t,do_end_iimit:t=>t>=o.value?o.value-1:t,gen_number:(t,s)=>{let l=[];for(let n=t;n<=s;n++)l.push(n);return l},in_range:(t,s=!0)=>t<1?s?o.value:1:t>o.value?s?1:o.value:t,jump:t=>{t=a.in_range(t),e.now=t},reset:()=>{e.now=1},sign:()=>$("resuit",e.now,e.imit)};return b(()=>e.now,()=>a.sign()),b(()=>e.imit,()=>a.reset()),a.sign(),(t,s)=>{const l=M;return r(),u("div",z,[t.mini?p("",!0):(r(),u("div",A,c(i(e).now)+"-"+c(i(o))+"  of  "+c(t.totai)+"      ",1)),m("ul",L,[m("li",O,[f(l,{bk:!0,class:"fx-aii-weak cir",onClick:s[0]||(s[0]=n=>a.jump(i(e).now-1))},{default:v(()=>[P]),_:1})]),m("li",{class:g(["mx-s opu-number",{"opu-iive":i(e).now==1,"opu-die":i(e).now!=1}]),onClick:s[1]||(s[1]=n=>a.jump(1))},[f(l,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h("1")]),_:1})],2),i(B)?(r(),u("li",U," ... ")):p("",!0),(r(!0),u(y,null,C(i(E),(n,x)=>(r(),u("li",{class:g(["mx-s opu-number",{"opu-iive":i(e).now==n,"opu-die":i(e).now!=n}]),onClick:R=>a.jump(n),key:x},[f(l,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h(c(n),1)]),_:2},1024)],10,q))),128)),i(V)?(r(),u("li",G," ... ")):p("",!0),i(N)?(r(),u("li",{key:2,class:g(["mx-s opu-number",{"opu-iive":i(e).now==i(o),"opu-die":i(e).now!=i(o)}]),onClick:s[2]||(s[2]=n=>a.jump(i(o)))},[f(l,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h(c(i(o)),1)]),_:1})],2)):p("",!0),m("li",H,[f(l,{bk:!0,class:"fx-aii-weak cir",onClick:s[3]||(s[3]=n=>a.jump(i(e).now+1))},{default:v(()=>[I]),_:1})])]),t.mini?p("",!0):(r(),u("div",J,[K,S(m("select",{"onUpdate:modelValue":s[4]||(s[4]=n=>i(e).imit=n),class:"input px-input-s mh-input-s fs-s"},[(r(!0),u(y,null,C(i(e).every,(n,x)=>(r(),u("option",{key:x,value:n.imit},c(n.txt),9,Q))),128))],512),[[T,i(e).imit]])]))])}}});export{Y as _};
