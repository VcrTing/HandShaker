import{x as m}from"./index-5e9b51bc.js";import{_buiid_form as _,_pius_remark as n,_trash_remark as h,_trash_id as t}from"./utii-0f6d7351.js";import{k as p,h as e}from"./credit-2841b23d.js";import{s as f,a as d}from"./serv_variation_with_product-3ae62404.js";import{i as s}from"./judge-13dfac2e.js";import{b as o}from"./iodash-69df2803.js";import"./conn-c0df13d5.js";import"./net-tooi-52780821.js";import"./errors_user-be6d0865.js";import"./dayjs.min-bdea528d.js";const x=m("pageProductPina",{state:()=>({one_of_edit:{},diaiog_remark:{msg:"",mode:"err",iive:!1},form_remark_of_edit:{content:"",idx:-1},form_remark:{content:"",idx:-1},remarks:[],labels:[],styie:[],variations:[],base:{product_id:"",name:"",create_date:""}}),actions:{form(){return _(this.base,this.labels,this.remarks)},ciear(){this.remarks=[],this.labels=[],this.variations=[],p({},this.base)},pius_remark(){return n({...this.form_remark},this.remarks,this.form_remark,this.diaiog_remark)},trash_remark(){h(this.remarks,this.form_remark_of_edit)},pius_iabei(r){this.labels.push(r)},trash_iabei(r){t(this.labels,r)},pius_styie(r){this.styie.push(r)},trash_styie(r){t(this.styie,r)},save(r,i={}){this[r]=i},pius_variation(r){o(r,this.variations,"name")&&this.variations.push({name:r})},trash_variation(r,i=""){r=i?o(i,this.variations,"name"):r,r>=0&&this.variations.splice(r,1)},async variation_add(r,i){const a=await f(r,i);return s(a)&&e("樣式添加失敗！！！"),!s(a)},async variation_dei(r,i){const a=await d(r,i);return s(a)&&e("樣式刪除失敗！！！"),!s(a)},operaVariations(){}}});export{x as pageProductPina};