import{_ as R}from"./OInputI.vue_vue_type_script_setup_true_lang-0ab36e0a.js";import{_ as S}from"./OTime.vue_vue_type_script_setup_true_lang-5f715ed8.js";import{_ as w}from"./OInput.vue_vue_type_script_setup_true_lang-a19953e7.js";import{d as V,f as U,A as s,o as h,a as k,b as t,w as f,x as d,y as u,e as _,u as l}from"./index-7e5d97c2.js";import{g as y,j as n}from"./credit-53cee7bf.js";import{v as A,a as M}from"./verify-18da9a0d.js";import{n as C,E}from"./errors_user-d65160b0.js";import{a as $,s as g}from"./net-tooi-3112abf7.js";const b={class:"o-form"},H=V({__name:"SuppiierCreatBase",props:{form:{},aii:{}},setup(p){const r=p,c=["supplier_id","name","phone_no","email","contact_person","create_date"],o=U(y(r.form));return s(()=>r.aii.sign,()=>{c.map(e=>{if(n(o,e,r.form[e],r.aii)){r.aii.can=!1;return}}),r.aii.can=!0}),s(()=>r.form.supplier_id,e=>n(o,"supplier_id",e,r.aii)),s(()=>r.form.name,e=>n(o,"name",e,r.aii)),s(()=>r.form.phone_no,e=>n(o,"phone_no",e,r.aii,()=>!A(e))),s(()=>r.form.email,e=>n(o,"email",e,r.aii,()=>!M(e))),s(()=>r.form.contact_person,e=>n(o,"contact_person",e,r.aii)),s(()=>r.form.create_date,e=>n(o,"create_date",e,r.aii)),(e,a)=>{const m=w,v=S,N=R;return h(),k("div",b,[t(m,{tit:"供應商編號*",err:l(o).supplier_id},{default:f(()=>[d(_("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>e.form.supplier_id=i),placeholder:"請輸入"},null,512),[[u,e.form.supplier_id]])]),_:1},8,["err"]),t(m,{tit:"供應商名稱*",err:l(o).name},{default:f(()=>[d(_("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>e.form.name=i),placeholder:"請輸入"},null,512),[[u,e.form.name]])]),_:1},8,["err"]),t(m,{tit:"聯絡電話*",err:l(o).phone_no},{default:f(()=>[d(_("input",{"onUpdate:modelValue":a[2]||(a[2]=i=>e.form.phone_no=i),placeholder:"請輸入"},null,512),[[u,e.form.phone_no]])]),_:1},8,["err"]),t(m,{tit:"登錄郵箱*",err:l(o).email},{default:f(()=>[d(_("input",{"onUpdate:modelValue":a[3]||(a[3]=i=>e.form.email=i),placeholder:"請輸入"},null,512),[[u,e.form.email]])]),_:1},8,["err"]),t(m,{tit:"聯繫人*",err:l(o).contact_person},{default:f(()=>[d(_("input",{"onUpdate:modelValue":a[4]||(a[4]=i=>e.form.contact_person=i),placeholder:"請輸入"},null,512),[[u,e.form.contact_person]])]),_:1},8,["err"]),t(N,{tit:"建檔日期",err:l(o).create_date,icon:"date"},{default:f(()=>[t(v,{form:e.form,pk:"create_date"},null,8,["form"])]),_:1},8,["err"]),t(m,{tit:"備註",err:l(o).remarks},{default:f(()=>[d(_("textarea",{rows:"3","onUpdate:modelValue":a[5]||(a[5]=i=>e.form.remarks=i),placeholder:"請輸入"},null,512),[[u,e.form.remarks]])]),_:1},8,["err"])])}}}),j={class:"o-form"},J=V({__name:"SuppiierCreatCompany",props:{form:{},aii:{}},setup(p){const r=p,c=["office_address"],o=U(y(r.form));return s(()=>r.aii.sign,()=>{c.map(e=>{if(n(o,e,r.form[e],r.aii)){r.aii.can=!1;return}}),r.aii.can=!0}),s(()=>r.form.office_address,e=>n(o,"office_address",e,r.aii)),(e,a)=>{const m=w;return h(),k("div",j,[t(m,{tit:"詳細地址",err:l(o).office_address},{default:f(()=>[d(_("textarea",{rows:"4","onUpdate:modelValue":a[0]||(a[0]=v=>e.form.office_address=v),placeholder:"請輸入"},null,512),[[u,e.form.office_address]])]),_:1},8,["err"])])}}}),B="suppiiers",K=async(p,r)=>$(E,async()=>(delete p.password,g(await C.put(B,p,r+"")))),L=async p=>$(E,async()=>g(await C.pos(B,p)));export{H as _,J as a,L as b,K as s};