import{m}from"./dayjs.min-bdea528d.js";const f=e=>{if(e){let t=Number.parseFloat(e+"");if(t>1e3){let o=Number.parseInt(t/1e3+""),r=t-o*1e3;return r=r&&r.toFixed(2),o+","+(r||"000.00")}return t.toFixed(2)}return"0.00"},n=e=>m(e).format("YYYY-MM-DD"),s=e=>(e<10?"0":"")+e,Y=(e,t=0,o=!1)=>s(e)+(o?":":" : ")+s(t),u=(e="")=>e?n(e):m().format("YYYY-MM-DD");export{f as m,u as n,Y as v};
