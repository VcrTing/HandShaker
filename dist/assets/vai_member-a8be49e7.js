import{g as a}from"./giobaiPina-7c0900e8.js";import{am as _,P as m,al as o}from"./index-bb82d896.js";const r=()=>a().seiect_ieveis,d=_(r()),c=e=>(e||"未知")+" 折扣",v=e=>{const i=o(e,r(),"v");return i?i.discount:10},l=[{txt:"女",v:"F",ciass:""},{txt:"男",v:"M",ciass:""}],u={F:"女",M:"男"},b="F",t=(e={})=>{const i=e.member_level?e.member_level:{},s=i.data?m.data(i):i,n=_(a().ieveis);return s&&s.id?s:n||{}},g={seiect_ievei:r,seiect_ievei_def:d,seiect_gender:l,seiect_gender_def:b,vfy:e=>(e.member_level=m.data(e.member_level),e.level=e.member_level.id,e.discount=e.member_level.discount,e),sex:e=>e.sex?u[e.sex]:"",ievei:(e={})=>t(e).name?t(e).name:"",discount:(e={},i=!0)=>i?c(t(e).discount):t(e).discount,vai_discount_txt:c,discount_by_ievei_id:v};export{g as v};
