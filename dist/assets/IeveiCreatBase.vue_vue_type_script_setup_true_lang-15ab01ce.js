import{_ as v}from"./OInput.vue_vue_type_script_setup_true_lang-465c0573.js";import{d as B,g as h,a6 as w,h as n,o as V,c as b,b as m,w as u,G as d,H as f,a as p,i as c,ae as i}from"./index-a2bf0a06.js";import{b as g}from"./verify-18da9a0d.js";const C={class:"o-form"},U=B({__name:"IeveiCreatBase",props:{form:{},aii:{},edit:{type:Boolean}},setup(l){const a=l,_=["name","discount"],o=h(w(a.form));return n(()=>a.aii.sign,()=>{_.map(e=>{if(i(o,e,a.form[e],a.aii)){a.aii.can=!1;return}}),a.aii.can=!0}),n(()=>a.form.name,e=>i(o,"name",e,a.aii)),n(()=>a.form.discount,e=>i(o,"discount",e,a.aii,()=>!g(e))),(e,r)=>{const s=v;return V(),b("div",C,[m(s,{tit:"等級名稱",err:c(o).name},{default:u(()=>[d(p("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>e.form.name=t),placeholder:"請輸入"},null,512),[[f,e.form.name]])]),_:1},8,["err"]),m(s,{tit:"購買折扣",err:c(o).discount},{default:u(()=>[d(p("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=t=>e.form.discount=t),placeholder:"請輸入 0 - 1 之間的數字"},null,512),[[f,e.form.discount]])]),_:1},8,["err"])])}}});export{U as _};
