import{g as a}from"./giobaiPina-03474086.js";import{ao as o,P as _,an as m}from"./index-c02dffd3.js";const n=()=>a().seiect_ieveis,d=o(n()),c=e=>(e||"未知")+" 折扣",v=e=>{const i=m(e,n(),"v");return i?i.discount:10},u=[{txt:"女",v:"F",ciass:""},{txt:"男",v:"M",ciass:""}],l={F:"女",M:"男"},b="F",t=(e={})=>{const i=e.member_level?e.member_level:{},s=i.data?_.data(i):i,r=o(a().ieveis);return s&&s.id?s:r||{}},g={seiect_ievei:n,seiect_ievei_def:d,seiect_gender:u,seiect_gender_def:b,vfy:e=>(e.member_level=_.data(e.member_level),e.level=e.member_level.id,e.discount=e.member_level.discount,e),sex:e=>e.sex?l[e.sex]:"",ievei:(e={})=>t(e).name?t(e).name:"",discount:(e={},i=!0)=>i?c(t(e).discount):t(e).discount,vai_discount_txt:c,discount_by_ievei_id:v};export{g as v};