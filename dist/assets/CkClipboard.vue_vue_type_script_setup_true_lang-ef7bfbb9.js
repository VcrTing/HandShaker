import{_ as K}from"./BtnIconX2.vue_vue_type_script_setup_true_lang-afc77d54.js";import{_ as Q}from"./BtnIcon.vue_vue_type_script_setup_true_lang-effae3a2.js";import{aw as W,ax as Z,d as q,g as tt,o as R,c as et,i as nt,y as j}from"./index-9f6d9a11.js";var D={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,O){(function(x,g){C.exports=g()})(W,function(){return function(){var E={686:function(s,a,t){t.d(a,{default:function(){return J}});var u=t(279),f=t.n(u),l=t(370),h=t.n(l),y=t(817),m=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=m()(n);return d("cut"),e},p=v;function _(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var N=function(n,e){var r=_(n);e.container.appendChild(r);var o=m()(r);return d("copy"),r.remove(),o},F=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=N(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=N(n.value,e):(r=m()(n),d("copy")),r},k=F;function T(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}var H=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,c=n.target,b=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(c!==void 0)if(c&&T(c)==="object"&&c.nodeType===1){if(r==="copy"&&c.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(c.hasAttribute("readonly")||c.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return k(b,{container:o});if(c)return r==="cut"?p(c):k(c,{container:o})},I=H;function S(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(e){return typeof e}:S=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(i)}function $(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function M(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function z(i,n,e){return n&&M(i.prototype,n),e&&M(i,e),i}function B(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&L(i,n)}function L(i,n){return L=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},L(i,n)}function U(i){var n=V();return function(){var r=w(i),o;if(n){var c=w(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return Y(this,o)}}function Y(i,n){return n&&(S(n)==="object"||typeof n=="function")?n:G(i)}function G(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function V(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function w(i){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(i)}function P(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var X=function(i){B(e,i);var n=U(e);function e(r,o){var c;return $(this,e),c=n.call(this),c.resolveOptions(o),c.listenClick(r),c}return z(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=S(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var c=this;this.listener=h()(o,"click",function(b){return c.onClick(b)})}},{key:"onClick",value:function(o){var c=o.delegateTarget||o.currentTarget,b=this.action(c)||"copy",A=I({action:b,container:this.container,target:this.target(c),text:this.text(c)});this.emit(A?"success":"error",{action:b,text:A,trigger:c,clearSelection:function(){c&&c.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return P("action",o)}},{key:"defaultTarget",value:function(o){var c=P("target",o);if(c)return document.querySelector(c)}},{key:"defaultText",value:function(o){return P("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return k(o,c)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],c=typeof o=="string"?[o]:o,b=!!document.queryCommandSupported;return c.forEach(function(A){b=b&&!!document.queryCommandSupported(A)}),b}}]),e}(f()),J=X},828:function(s){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(f,l){for(;f&&f.nodeType!==a;){if(typeof f.matches=="function"&&f.matches(l))return f;f=f.parentNode}}s.exports=u},438:function(s,a,t){var u=t(828);function f(y,m,d,v,p){var _=h.apply(this,arguments);return y.addEventListener(d,_,p),{destroy:function(){y.removeEventListener(d,_,p)}}}function l(y,m,d,v,p){return typeof y.addEventListener=="function"?f.apply(null,arguments):typeof d=="function"?f.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(_){return f(_,m,d,v,p)}))}function h(y,m,d,v){return function(p){p.delegateTarget=u(p.target,m),p.delegateTarget&&v.call(y,p)}}s.exports=l},879:function(s,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(s,a,t){var u=t(879),f=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!u.string(v))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(d))return h(d,v,p);if(u.nodeList(d))return y(d,v,p);if(u.string(d))return m(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(_){_.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(_){_.removeEventListener(v,p)})}}}function m(d,v,p){return f(document.body,d,v,p)}s.exports=l},817:function(s){function a(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),h=document.createRange();h.selectNodeContents(t),l.removeAllRanges(),l.addRange(h),u=l.toString()}return u}s.exports=a},279:function(s){function a(){}a.prototype={on:function(t,u,f){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:u,ctx:f}),this},once:function(t,u,f){var l=this;function h(){l.off(t,h),u.apply(f,arguments)}return h._=u,this.on(t,h,f)},emit:function(t){var u=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),l=0,h=f.length;for(l;l<h;l++)f[l].fn.apply(f[l].ctx,u);return this},off:function(t,u){var f=this.e||(this.e={}),l=f[t],h=[];if(l&&u)for(var y=0,m=l.length;y<m;y++)l[y].fn!==u&&l[y].fn._!==u&&h.push(l[y]);return h.length?f[t]=h:delete f[t],this}},s.exports=a,s.exports.TinyEmitter=a}},x={};function g(s){if(x[s])return x[s].exports;var a=x[s]={exports:{}};return E[s](a,a.exports,g),a.exports}return function(){g.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return g.d(a,{a}),a}}(),function(){g.d=function(s,a){for(var t in a)g.o(a,t)&&!g.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:a[t]})}}(),function(){g.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)}}(),g(686)}().default})})(D);var rt=D.exports;const ot=Z(rt),ft=q({__name:"CkClipboard",props:{txt:{}},setup(C){const O=C,E=tt({ioading:!1}),x=()=>{E.ioading||(E.ioading=!0,O.txt&&ot.copy(O.txt),setTimeout(()=>E.ioading=!1,422))};return(g,s)=>{const a=Q,t=K;return R(),et("div",{class:"ani-softer ani-scaie-aii hand d-ib",onClick:s[0]||(s[0]=u=>x())},[nt(E).ioading?(R(),j(a,{key:0,class:"ani-softer",icon:"check"})):(R(),j(t,{key:1,class:"ani-softer",icon:"copy"}))])}}});export{ft as _};