import{_ as V}from"./OInput.vue_vue_type_script_setup_true_lang-71ae68de.js";import{_ as R}from"./OInputI.vue_vue_type_script_setup_true_lang-2d2a761e.js";import{_ as S}from"./OTime.vue_vue_type_script_setup_true_lang-f0f20038.js";import{d as U,f as h,B as s,o as k,a as y,b as t,w as m,u as f,x as l,y as d,e as u}from"./index-ceb89333.js";import{g as B,j as n}from"./credit-1bad1f35.js";import{v as M,a as b}from"./verify-18da9a0d.js";import{n as C,E}from"./errors_user-bbac9f77.js";import{a as $,s as g}from"./net-tooi-3112abf7.js";const j={class:"o-form"},H=U({__name:"SuppiierCreatBase",props:{form:{},aii:{}},setup(p){const r=p,c=["supplier_id","name","phone_no","email","contact_person","create_date"],o=h(B(r.form));return s(()=>r.aii.sign,()=>{c.map(e=>{if(n(o,e,r.form[e],r.aii)){r.aii.can=!1;return}}),r.aii.can=!0}),s(()=>r.form.supplier_id,e=>n(o,"supplier_id",e,r.aii)),s(()=>r.form.name,e=>n(o,"name",e,r.aii)),s(()=>r.form.phone_no,e=>n(o,"phone_no",e,r.aii,()=>!M(e))),s(()=>r.form.email,e=>n(o,"email",e,r.aii,()=>!b(e))),s(()=>r.form.contact_person,e=>n(o,"contact_person",e,r.aii)),s(()=>r.form.create_date,e=>n(o,"create_date",e,r.aii)),(e,a)=>{const v=S,w=R,_=V;return k(),y("div",j,[t(w,{tit:"建檔日期",err:f(o).create_date,icon:"date"},{default:m(()=>[t(v,{form:e.form,pk:"create_date"},null,8,["form"])]),_:1},8,["err"]),t(_,{tit:"供應商編號*",err:f(o).supplier_id},{default:m(()=>[l(u("input",{"onUpdate:modelValue":a[0]||(a[0]=i=>e.form.supplier_id=i),placeholder:"請輸入"},null,512),[[d,e.form.supplier_id]])]),_:1},8,["err"]),t(_,{tit:"供應商名稱*",err:f(o).name},{default:m(()=>[l(u("input",{"onUpdate:modelValue":a[1]||(a[1]=i=>e.form.name=i),placeholder:"請輸入"},null,512),[[d,e.form.name]])]),_:1},8,["err"]),t(_,{tit:"聯絡電話*",err:f(o).phone_no},{default:m(()=>[l(u("input",{"onUpdate:modelValue":a[2]||(a[2]=i=>e.form.phone_no=i),placeholder:"請輸入"},null,512),[[d,e.form.phone_no]])]),_:1},8,["err"]),t(_,{tit:"登錄郵箱*",err:f(o).email},{default:m(()=>[l(u("input",{"onUpdate:modelValue":a[3]||(a[3]=i=>e.form.email=i),placeholder:"請輸入"},null,512),[[d,e.form.email]])]),_:1},8,["err"]),t(_,{tit:"聯繫人*",err:f(o).contact_person},{default:m(()=>[l(u("input",{"onUpdate:modelValue":a[4]||(a[4]=i=>e.form.contact_person=i),placeholder:"請輸入"},null,512),[[d,e.form.contact_person]])]),_:1},8,["err"]),t(_,{tit:"備註",err:f(o).remarks},{default:m(()=>[l(u("textarea",{rows:"3","onUpdate:modelValue":a[5]||(a[5]=i=>e.form.remarks=i),placeholder:"請輸入"},null,512),[[d,e.form.remarks]])]),_:1},8,["err"])])}}}),A={class:"o-form"},J=U({__name:"SuppiierCreatCompany",props:{form:{},aii:{}},setup(p){const r=p,c=["office_address"],o=h(B(r.form));return s(()=>r.aii.sign,()=>{c.map(e=>{if(n(o,e,r.form[e],r.aii)){r.aii.can=!1;return}}),r.aii.can=!0}),s(()=>r.form.office_address,e=>n(o,"office_address",e,r.aii)),(e,a)=>{const v=V;return k(),y("div",A,[t(v,{tit:"詳細地址",err:f(o).office_address},{default:m(()=>[l(u("textarea",{rows:"4","onUpdate:modelValue":a[0]||(a[0]=w=>e.form.office_address=w),placeholder:"請輸入"},null,512),[[d,e.form.office_address]])]),_:1},8,["err"])])}}}),N="suppiiers",K=async(p,r)=>$(E,async()=>(delete p.password,g(await C.put(N,p,r+"")))),L=async p=>$(E,async()=>g(await C.pos(N,p)));export{H as _,J as a,L as b,K as s};