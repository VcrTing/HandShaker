import{l as e}from"./index-9a233275.js";import{k as a}from"./credit-3718e35a.js";import"./index-6afa936f.js";import"./anim-34f746ba.js";import"./judge-0b511643.js";const l=e("pageProducEditPina",{state:()=>({remarks:[],labels:[],base:{product_id:"",name:"",create_date:""}}),getters:{form(r){return{...r.base,labels:this.labels,remarks:this.remarks}}},actions:{repiaceForm(r){a(r,this.base),this.labels=r.labels,this.remarks=r.remarks}}});export{l as pageProducEditPina};