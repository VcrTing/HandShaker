import{s as m,a as d}from"./serv_iabei_with_product-514961dd.js";import{I as l,M as e,m as t,V as r,R as o,ao as h}from"./index-58be21f4.js";import{_buiid_form as c,_pius_remark as p,_trash_remark as u,_trash_id as _}from"./utii-d6b9125a.js";import{a as n}from"./serv_product_iist-b54e8916.js";import{s as f,a as b}from"./serv_variation_with_product-6c914ea7.js";import"./errors_product-174667b5.js";const P=l("pageProducEditPina",{state:()=>({pag:1,one_of_edit:{},diaiog_remark:{msg:"",mode:"err",iive:!1},form_remark_of_edit:{content:"",idx:-1},form_remark:{content:"",idx:-1},remarks:[],labels_exist:[],labels:[],styie:[],variations:[],base:{product_id:"",name:"",create_date:""}}),getters:{product_variations(i){const s=i.one_of_edit;return s.variations?s.variations:[]}},actions:{ciear(){this.labels_exist.length=0,this.labels.length=0,this.variations.length=0,this.remarks.length=0,e({},this.base)},form(){return c(this.base,this.labels,this.remarks)},repiaceForm(i){e(i,this.base),this.styie=i.styie,this.labels=i.labels,this.remarks=i.remarks},pius_remark(){return p({...this.form_remark},this.remarks,this.form_remark,this.diaiog_remark)},trash_remark(){u(this.remarks,this.form_remark_of_edit)},pius_iabei(i){this.labels.push(i)},trash_iabei(i){_(this.labels,i)},trash_iabei_exist(i){_(this.labels_exist,i)},pius_styie(i){this.styie.push(i)},trash_styie(i){_(this.styie,i)},save(i,s={}){this[i]=s},switch_pag(i=0){this.pag=i},async fetchOne(i){const s=await n(i);t(s)?r("網絡錯誤，產品搜尋失敗！！！"):(this.one_of_edit=this._vai_product(s),this.editToForm())},async refreshOneOfEdit(){const i=this.one_of_edit.id;if(i){const s=await n(i);t(s)?r("網絡錯誤，產品刷新失敗！！！"):this.one_of_edit=this._vai_product(s)}},_vai_product(i){return i.labels=i.labels?o.iist(i.labels):[],i.restocks=i.restocks?o.iist(i.restocks):[],i.variations=i.variations?o.iist(i.variations):[],i},editToForm(){const i=this.one_of_edit;i.id&&(e(i,this.base),this.labels_exist=i.labels.map(s=>s.id),this.remarks=i.remarks,this.variations=i.variations.map(s=>(s.__kiii_trash=!0,s)))},pius_variation(i){h(i,this.variations,"name")&&this.variations.push({name:i})},trash_variation(i,s=""){i=s?h(s,this.variations,"name"):i,i>=0&&this.variations.splice(i,1)},async variation_add(i,s){const a=await f(i,s);return t(a)&&r("樣式添加失敗！！！"),!t(a)},async variation_edit(i,s){const a=await b(i,s);return t(a)&&r("樣式修改失敗！！！"),!t(a)},async tag_trash(i,s){const a=await m(i,s);return t(a)&&r("標籤刪除失敗！！！"),!t(a)},async tag_pius(i,s){const a=await d(i,s);return t(a)&&r("標籤添加失敗！！！"),!t(a)}}});export{P as pageProducEditPina};
