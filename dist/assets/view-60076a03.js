import{m}from"./dayjs.min-bdea528d.js";const Y=t=>{if(t){let e=Number.parseFloat(t+"");if(e>1e3){let r=Number.parseInt(e/1e3+""),o=e-r*1e3;return o=o&&o.toFixed(2),r+","+(o||"000.00")}return e.toFixed(2)}return"0.00"},n=t=>t?m(t).format("YYYY-MM-DD"):"",f=t=>t?m(t).format("YYYY-MM-DD HH:mm"):"",s=t=>(t<10?"0":"")+t,i=(t,e=0,r=!1)=>s(t)+(r?":":" : ")+s(e),u=(t="")=>t?n(t):m().format("YYYY-MM-DD");export{i as a,Y as m,u as n,f as v};
