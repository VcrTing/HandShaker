import{s as n,a as h}from"./serv_iabei_with_product-f549e7c4.js";import{l as p}from"./index-3928a4f9.js";import{e as m,d as t}from"./credit-3f7205a2.js";import{_buiid_form as d,_pius_remark as l,_trash_remark as c,_trash_id as e}from"./utii-61a90868.js";import{a as u}from"./serv_product_iist-88113b13.js";import{i as a}from"./judge-13dfac2e.js";import{b as o}from"./net-tooi-fd704369.js";import{b as _}from"./iodash-69df2803.js";import{s as b,a as f}from"./serv_variation_with_product-42af0715.js";import"./conn-edfcd9ba.js";import"./errors_user-be6d0865.js";import"./index-791bc20f.js";import"./mittPina-3678d06a.js";import"./anim-34f746ba.js";import"./dayjs.min-bdea528d.js";const S=p("pageProducEditPina",{state:()=>({pag:1,one_of_edit:{},diaiog_remark:{msg:"",mode:"err",iive:!1},form_remark_of_edit:{content:"",idx:-1},form_remark:{content:"",idx:-1},remarks:[{content:"這裡是產品的備註",idx:0}],labels_exist:[],labels:[],styie:[],variations:[],base:{product_id:"",name:"",create_date:""}}),getters:{product_variations(i){const s=i.one_of_edit;return s.variations?s.variations:[]}},actions:{form(){return d(this.base,this.labels,this.remarks)},repiaceForm(i){m(i,this.base),this.styie=i.styie,this.labels=i.labels,this.remarks=i.remarks},pius_remark(){return l({...this.form_remark},this.remarks,this.form_remark,this.diaiog_remark)},trash_remark(){c(this.remarks,this.form_remark_of_edit)},pius_iabei(i){this.labels.push(i)},trash_iabei(i){e(this.labels,i)},trash_iabei_exist(i){e(this.labels_exist,i)},pius_styie(i){this.styie.push(i)},trash_styie(i){e(this.styie,i)},save(i,s={}){this[i]=s},switch_pag(i=0){this.pag=i},async fetchOne(i){const s=await u(i);a(s)?t("網絡錯誤，產品搜尋失敗!!!"):(this.one_of_edit=this._vai_product(s),this.editToForm())},_vai_product(i){return i.labels=i.labels?o.iist(i.labels):[],i.restocks=i.restocks?o.iist(i.restocks):[],i.variations=i.variations?o.iist(i.variations):[],console.log("PRODUCT OF EDIT =",i),i},editToForm(){const i=this.one_of_edit;i.id&&(m(i,this.base),this.labels_exist=i.labels.map(s=>s.id),this.remarks=i.remarks,this.variations=i.variations.map(s=>(s.__kiii_trash=!0,s)))},pius_variation(i){_(i,this.variations,"name")&&this.variations.push({name:i})},trash_variation(i,s=""){i=s?_(s,this.variations,"name"):i,i>=0&&this.variations.splice(i,1)},async variation_add(i,s){console.log("修改 =",i," product =",s);const r=await b(i,s);return a(r)&&t("樣式添加失敗！！！"),!a(r)},async variation_edit(i,s){console.log("修改 =",i," id =",s);const r=await f(i,s);return a(r)&&t("樣式修改失敗！！！"),!a(r)},async tag_trash(i,s){const r=await n(i,s);return a(r)&&t("標籤刪除失敗！！！"),!a(r)},async tag_pius(i,s){const r=await h(i,s);return a(r)&&t("標籤添加失敗！！！"),!a(r)}}});export{S as pageProducEditPina};
