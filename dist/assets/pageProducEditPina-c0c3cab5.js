import{l as e}from"./index-7e5d97c2.js";import{k as t}from"./credit-53cee7bf.js";import"./index-f7a16cec.js";import"./mittPina-ee683634.js";import"./anim-b74d0266.js";import"./judge-0b511643.js";const p=e("pageProducEditPina",{state:()=>({remarks:[],labels:[],base:{product_id:"",name:"",create_date:""}}),getters:{form(r){return{...r.base,labels:this.labels,remarks:this.remarks}}},actions:{repiaceForm(r){t(r,this.base),this.labels=r.labels,this.remarks=r.remarks}}});export{p as pageProducEditPina};
