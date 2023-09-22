import{_ as w}from"./OInput.vue_vue_type_script_setup_true_lang-57a565f6.js";import{_ as R}from"./OInputI.vue_vue_type_script_setup_true_lang-e8c603ba.js";import{_ as g}from"./OTime.vue_vue_type_script_setup_true_lang-e9da75ad.js";import{d as y,g as V,a6 as h,h as p,o as U,c as $,b as i,w as m,i as l,G as d,H as _,a as u,ae as f,q as k,v as C,x as E,E as S}from"./index-672a1f88.js";import{v as M,a as b}from"./verify-18da9a0d.js";const A={class:"o-form"},O=y({__name:"SuppiierCreatBase",props:{form:{},aii:{}},setup(n){const r=n,o=V(h(r.form)),t=["supplier_id","name","phone_no","email","contact_person","create_date"];return p(()=>r.aii.sign,()=>{let e=!0;r.aii.can=!1,t.map(a=>{f(o,a,r.form[a],r.aii)&&(e=!1)}),r.aii.can=e}),p(()=>r.form.supplier_id,e=>f(o,"supplier_id",e,r.aii)),p(()=>r.form.name,e=>f(o,"name",e,r.aii)),p(()=>r.form.phone_no,e=>f(o,"phone_no",e,r.aii,()=>!M(e))),p(()=>r.form.email,e=>f(o,"email",e,r.aii,()=>!b(e))),p(()=>r.form.contact_person,e=>f(o,"contact_person",e,r.aii)),p(()=>r.form.create_date,e=>f(o,"create_date",e,r.aii)),(e,a)=>{const v=g,N=R,c=w;return U(),$("div",A,[i(N,{tit:"建檔日期",err:l(o).create_date,icon:"date"},{default:m(()=>[i(v,{form:e.form,pk:"create_date"},null,8,["form"])]),_:1},8,["err"]),i(c,{tit:"供應商編號*",err:l(o).supplier_id},{default:m(()=>[d(u("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>e.form.supplier_id=s),placeholder:"請輸入"},null,512),[[_,e.form.supplier_id]])]),_:1},8,["err"]),i(c,{tit:"供應商名稱*",err:l(o).name},{default:m(()=>[d(u("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>e.form.name=s),placeholder:"請輸入"},null,512),[[_,e.form.name]])]),_:1},8,["err"]),i(c,{tit:"聯絡電話*",err:l(o).phone_no},{default:m(()=>[d(u("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>e.form.phone_no=s),placeholder:"請輸入"},null,512),[[_,e.form.phone_no]])]),_:1},8,["err"]),i(c,{tit:"登錄郵箱*",err:l(o).email},{default:m(()=>[d(u("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>e.form.email=s),placeholder:"請輸入"},null,512),[[_,e.form.email]])]),_:1},8,["err"]),i(c,{tit:"聯繫人*",err:l(o).contact_person},{default:m(()=>[d(u("input",{"onUpdate:modelValue":a[4]||(a[4]=s=>e.form.contact_person=s),placeholder:"請輸入"},null,512),[[_,e.form.contact_person]])]),_:1},8,["err"]),i(c,{tit:"備註",err:l(o).remarks},{default:m(()=>[d(u("textarea",{rows:"3","onUpdate:modelValue":a[5]||(a[5]=s=>e.form.remarks=s),placeholder:"請輸入"},null,512),[[_,e.form.remarks]])]),_:1},8,["err"])])}}}),D={class:"o-form"},T=y({__name:"SuppiierCreatCompany",props:{form:{},aii:{}},setup(n){const r=n,o=V(h(r.form));return p(()=>r.form.office_address,t=>f(o,"office_address",t,r.aii)),(t,e)=>{const a=w;return U(),$("div",D,[i(a,{tit:"詳細地址",err:l(o).office_address},{default:m(()=>[d(u("textarea",{rows:"4","onUpdate:modelValue":e[0]||(e[0]=v=>t.form.office_address=v),placeholder:"請輸入"},null,512),[[_,t.form.office_address]])]),_:1},8,["err"])])}}}),j={class:"o-form"},z=y({__name:"SuppiierCreatFactory",props:{form:{},aii:{}},setup(n){const r=n,o=V(h(r.form));return p(()=>r.form.factory_address,t=>f(o,"factory_address",t,r.aii)),(t,e)=>{const a=w;return U(),$("div",j,[i(a,{tit:"詳細地址",err:l(o).factory_address},{default:m(()=>[d(u("textarea",{rows:"4","onUpdate:modelValue":e[0]||(e[0]=v=>t.form.factory_address=v),placeholder:"請輸入"},null,512),[[_,t.form.factory_address]])]),_:1},8,["err"])])}}}),B="suppiiers",J=async(n,r)=>k(S,async()=>(delete n.password,C(await E.put(B,n,r+"")))),K=async n=>k(S,async()=>C(await E.pos(B,n)));export{O as _,T as a,z as b,K as c,J as s};