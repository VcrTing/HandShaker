import{m as o}from"./dayjs.min-bdea528d.js";import{t as i}from"./judge-0b511643.js";const f=(n,r)=>n.includes(r),u=(n,r)=>r.filter(t=>t==n).length>0,m=(n,r)=>r.filter(t=>t==n).length>0,h=(n,r)=>{let t=-1;return r.map((s,a)=>{s===n&&(t=a)}),t},_=(n,r,t="v")=>{let s={};return r.map(a=>{a[t]==n&&(s=a)}),s},p=(n,r,t=!1)=>n.sort((s,a)=>t?i(a[r])-i(s[r]):i(s[r])-i(a[r])),g=(n,r)=>{const t=o("2023-07-07")-o("2023-07-09");return console.log("排序 =",t),n.sort((s,a)=>{if(s[r]&&a[r]){const e=o(s[r])-o(a[r]);return console.log("RES =",e),e}return 0})},v=(n,r)=>{const t=[];return n.map(s=>{const a={};for(let e in r)a[r[e]+""]=s[e];t.push(a)}),t},d=(n,r="v")=>n.length>0?n[0][r]:"",w=(n,r=[],t="id")=>(n.length>0&&(r.length=0,n.map(s=>{s[t]&&r.push(s[t])})),r);export{g as a,m as b,v as c,d,w as e,f,u as h,p as s,_ as v,h as w};