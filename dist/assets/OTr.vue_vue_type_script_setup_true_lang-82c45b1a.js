import{o as s,c as i,e as n,d as m,D as c,_ as w,t as a,y as u,F as d,b as p,x as f,i as k,j as g,A as v,m as x,a as y,h as C}from"./index-caa1ebf8.js";function $(t,e){return s(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})])}function b(t,e){return s(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"})])}function A(t,e){return s(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})])}function M(t,e){return s(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})])}function N(t,e){return s(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])}const B=m({components:{ChevronDoubleLeftIcon:$,ChevronDoubleRightIcon:b,ChevronLeftIcon:A,ChevronRightIcon:M},emits:["resuit","iimit"],computed:{everys(){const t=[{txt:"10",limit:10},{txt:"25",limit:25},{txt:"50",limit:50},{txt:"100",limit:100}];return this.is_500&&t.push({txt:"500",limit:500},{txt:"1000",limit:1e3}),t},pages(){return this.genaPage(this.start,this.long)},total(){return Math.ceil(this.count/this.limit)},long(){let t=this._long;return this.total>t?t:this.total},cen(){return Math.ceil(this.long/2)},center(){return this.start+this.cen}},async mounted(){this._limit?this.limit=this._limit:this.reset()},setup(){const t=c(1),e=c(1),r=c(10);return{now:t,start:e,limit:r}},watch:{limit(){this.reset()},now(t){t=t>this.total?this.total:t,t>0?(this.start=this.num_start(t),this.sign()):t==""||isNaN(Number.parseInt(t))&&(this.now=1)}},methods:{num(t){t+=this.now,t=t<1?this.total:t,t=t>this.total?1:t,this.now=t},genaPage(t,e){let r=[];for(let o=t;o<=t+e-1;o++)o<=this.total&&r.push(o);return r},num_start(t){let e=t-this.cen;return t>this.center&&(e=e>this.total-this.long?this.total-this.long+1:e),t+this.cen>this.total&&(e=this.total-this.long+1),e<1?1:e},reset(){this.now==1&&this.sign(),this.now=1},sign(){const t=this.now>1?this.now:1;let e=(t-1)*this.limit;this.$emit("resuit",t,e,this.limit)}},props:{count:{type:Number,default:2},_limit:{type:Number,default:10},_long:{type:Number,default:6},mode:{type:Number,default:1},is_500:{type:Boolean}}}),L={class:"pagenation t-c fx-s upper_x2"},j={class:"d-ib sus fs-s mw-8em"},V={class:"d-ib fx-c"},D={class:"ui-pagenation"},I=n("span",null,[n("i",{class:"fa-solid fa-angle-left"})],-1),T=[I],F=["onClick"],S={key:1,class:"active"},z=n("span",null,[n("i",{class:"fa-solid fa-angle-right"})],-1),H=[z],O={class:"pl d-ib sub fs-s mw-8em"},P=["value"];function R(t,e,r,o,_,J){return s(),i("div",L,[n("div",j,a(t.now)+"-"+a(Math.ceil(t.count/t.limit))+"  of  "+a(t.count)+"      ",1),n("div",V,[n("ul",D,[t.mode<2?(s(),i("li",{key:0,class:"ul-page-l",onClick:e[0]||(e[0]=l=>t.reset())},T)):u("",!0),(s(!0),i(d,null,p(t.pages,(l,h)=>(s(),i("li",{key:h,class:f({active:l==t.now}),onClick:K=>t.now=l},a(l),11,F))),128)),t.pages.length<=0?(s(),i("li",S," 1 ")):u("",!0),t.mode<2?(s(),i("li",{key:2,class:"ul-page-r",onClick:e[1]||(e[1]=()=>t.now=t.total)},H)):u("",!0)])]),n("div",O,[k(" 每頁數量   "),t.limit?g((s(),i("select",{key:0,"onUpdate:modelValue":e[2]||(e[2]=l=>t.limit=l),class:"input px-input-s mh-input-s"},[(s(!0),i(d,null,p(t.everys,(l,h)=>(s(),i("option",{key:h,value:l.limit},a(l.txt),9,P))),128))],512)),[[v,t.limit]]):u("",!0)])])}const W=w(B,[["render",R]]),U={class:"o-search ps-r input-icon-r"},X=m({__name:"OSearch",props:{aii:{},pk:{}},emits:["change"],setup(t){return(e,r)=>(s(),i("div",U,[g(n("input",{class:"fx-1 input w-100","onUpdate:modelValue":r[0]||(r[0]=o=>e.aii[e.pk]=o),placeholder:"搜索"},null,512),[[x,e.aii[e.pk]]]),y(C(N),{class:"i h4"})]))}}),E={key:0,class:"tr b ani-softer"},q=["innerHTML"],G={key:1,class:"tr ani-softer"},Y=m({__name:"OTr",props:{aii:{}},setup(t){return(e,r)=>e.aii.trs&&e.aii.trs.length>0?(s(),i("div",E,[(s(!0),i(d,null,p(e.aii.trs,(o,_)=>(s(),i("div",{class:f(["pr-s",o.ciass]),key:_,innerHTML:o.txt},null,10,q))),128))])):(s(),i("div",G))}});export{Y as _,X as a,W as b};
