import{l as e}from"./index-17f9211a.js";import{d as t,h as o}from"./credit-734a3147.js";import{_buiid_form as m,_pius_remark as h,_trash_remark as p,_trash_id as a}from"./utii-46f72c2e.js";import{a as d}from"./serv_product_iist-0113bfc7.js";import{i as l}from"./judge-0b511643.js";import{b as r}from"./net-tooi-3112abf7.js";import"./index-444a025f.js";import"./mittPina-30434c97.js";import"./anim-34f746ba.js";import"./iodash-507b3f11.js";import"./dayjs.min-bdea528d.js";import"./conn-2e825d0a.js";const T=e("pageProducEditPina",{state:()=>({pag:1,one_of_edit:{},diaiog_remark:{msg:"",mode:"err",iive:!1},form_remark_of_edit:{content:"",idx:-1},form_remark:{content:"",idx:-1},remarks:[{content:"這裡是產品的備註",idx:0}],labels:[],styie:[],variations:[],base:{product_id:"",name:"",create_date:""}}),actions:{form(){return m(this.base,this.labels,this.remarks)},repiaceForm(i){t(i,this.base),this.styie=i.styie,this.labels=i.labels,this.remarks=i.remarks},pius_remark(){return h({...this.form_remark},this.remarks,this.form_remark,this.diaiog_remark)},trash_remark(){p(this.remarks,this.form_remark_of_edit)},pius_iabei(i){this.labels.push(i)},trash_iabei(i){a(this.labels,i)},pius_styie(i){this.styie.push(i)},trash_styie(i){a(this.styie,i)},save(i,s={}){this[i]=s},switch_pag(i=0){this.pag=i},async fetchOne(i){const s=await d(i);l(s)?o("網絡錯誤，產品搜尋失敗!!!"):(this.one_of_edit=this._vai_product(s),this.editToForm())},_vai_product(i){return i.labels=i.labels?r.iist(i.labels):[],i.restocks=i.restocks?r.iist(i.restocks):[],i.variations=i.variations?r.iist(i.variations):[],console.log("PRODUCT OF EDIT =",i),i},editToForm(){const i=this.one_of_edit;i.id&&(t(i,this.base),this.labels=i.labels.map(s=>s.id),this.remarks=i.remarks)}}});export{T as pageProducEditPina};
