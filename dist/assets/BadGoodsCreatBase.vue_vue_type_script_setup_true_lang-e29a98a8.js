import{_ as U}from"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-f77d0368.js";import{_ as b}from"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-89c54e8a.js";import{_ as F}from"./OTime.vue_vue_type_script_setup_true_lang-1a3bcec8.js";import{_ as G}from"./OInput.vue_vue_type_script_setup_true_lang-ec4fb52b.js";import{_ as I}from"./OInputI.vue_vue_type_script_setup_true_lang-be93c43f.js";import{d as P,g as S,a6 as T,s as j,h as n,P as $,o as l,c as p,a as d,b as s,w as m,an as z,i as a,$ as y,H as f,I as w,z as E,a7 as H,F as L,G as O,t as Q,e as R,a3 as A,Q as J,ae as _}from"./index-1c4854d6.js";import{c as K}from"./choiseOnePina-9fbd7469.js";const W={class:"o-form"},X=["value"],Y=d("option",{value:0},"-- 請選擇 --",-1),Z=["value"],se=P({__name:"BadGoodsCreatBase",props:{form:{},aii:{}},setup(g){const o=g,q=["product_id","variation","quantity","storehouse_id","date","remarks"],i=S(T(o.form)),{product_id:c,storehouse_id:v,product_of_choise:h}=j(K());n(c,e=>o.form.product_id=e),n(v,e=>{o.form.storehouse_id=e,console.log("storeID 改动 =",e)});const B=$(()=>{const e=h.value;return e.id?`[${e.product_id}]  ${e.name}`:""}),C=$(()=>{let e=h.value.variations;return A(e)?e:J.iist(e)});return n(()=>o.aii.sign,()=>{o.form.storehouse_id=v.value,q.map(e=>{if(_(i,e,o.form[e],o.aii)){o.aii.can=!1;return}}),o.aii.can=!0}),n(()=>o.form.variation,e=>_(i,"variation",e,o.aii)),n(()=>o.form.quantity,e=>_(i,"quantity",e,o.aii)),n(()=>o.form.date,e=>_(i,"date",e,o.aii)),(e,t)=>{const k=I,u=G,V=F,D=b,M=U;return l(),p("div",null,[d("div",W,[s(k,{tit:"壞貨產品",err:a(i).product_id,icon:"product",onClick:t[1]||(t[1]=r=>a(y)(1e3))},{default:m(()=>[d("input",{onClick:t[0]||(t[0]=z(r=>a(y)(1e3),["stop"])),value:a(B),placeholder:"請點擊後打開選擇框"},null,8,X)]),_:1},8,["err"]),s(u,{tit:"數量",err:a(i).quantity},{default:m(()=>[f(d("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=r=>e.form.quantity=r),placeholder:"請輸入"},null,512),[[w,e.form.quantity]])]),_:1},8,["err"]),a(c)?(l(),E(u,{key:0,tit:"樣式",err:a(i).variation},{default:m(()=>[f(d("select",{"onUpdate:modelValue":t[3]||(t[3]=r=>e.form.variation=r)},[Y,(l(!0),p(L,null,O(a(C),(r,N)=>(l(),p("option",{key:N,value:r.id},Q(r.name),9,Z))),128))],512),[[H,e.form.variation]])]),_:1},8,["err"])):R("",!0),s(k,{tit:"日期",err:a(i).date,icon:"date"},{default:m(()=>[s(V,{form:e.form,pk:"date"},null,8,["form"])]),_:1},8,["err"]),s(u,{tit:"壞貨位置",err:a(i).storehouse_id},{default:m(()=>[s(D)]),_:1},8,["err"]),s(u,{tit:"備註",err:!1},{default:m(()=>[f(d("textarea",{rows:"3","onUpdate:modelValue":t[4]||(t[4]=r=>e.form.remarks=r),placeholder:"請輸入"},null,512),[[w,e.form.remarks]])]),_:1})]),s(M)])}}});export{se as _};
