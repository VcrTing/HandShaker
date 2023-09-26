import{_ as w}from"./OInput.vue_vue_type_script_setup_true_lang-78f6a52c.js";import{_ as R}from"./OInputI.vue_vue_type_script_setup_true_lang-c22fa816.js";import{_ as g}from"./OTime.vue_vue_type_script_setup_true_lang-1332b1c1.js";import{d as V,g as h,a6 as y,h as _,o as U,c as $,b as n,w as i,i as p,G as m,H as l,a as f,ae as u,q as k,v as C,x as E,E as S}from"./index-8491f7da.js";import{v as M,a as b}from"./verify-18da9a0d.js";const A={class:"o-form"},O=V({__name:"SuppiierCreatBase",props:{form:{},aii:{}},setup(s){const r=s,a=h(y(r.form)),d=["supplier_id","name","phone_no","email","contact_person","create_date"];return _(()=>r.aii.sign,()=>{let e=!0;r.aii.can=!1,d.map(o=>{u(a,o,r.form[o],r.aii)&&(e=!1)}),r.aii.can=e}),_(()=>r.form.supplier_id,e=>u(a,"supplier_id",e,r.aii)),_(()=>r.form.name,e=>u(a,"name",e,r.aii)),_(()=>r.form.phone_no,e=>u(a,"phone_no",e,r.aii,()=>!M(e))),_(()=>r.form.email,e=>u(a,"email",e,r.aii,()=>!b(e))),_(()=>r.form.contact_person,e=>u(a,"contact_person",e,r.aii)),_(()=>r.form.create_date,e=>u(a,"create_date",e,r.aii)),(e,o)=>{const v=g,N=R,c=w;return U(),$("div",A,[n(N,{tit:"建檔日期",err:p(a).create_date,icon:"date"},{default:i(()=>[n(v,{form:e.form,pk:"create_date"},null,8,["form"])]),_:1},8,["err"]),n(c,{tit:"供應商編號*",err:p(a).supplier_id},{default:i(()=>[m(f("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.supplier_id=t),placeholder:"請輸入"},null,512),[[l,e.form.supplier_id]])]),_:1},8,["err"]),n(c,{tit:"供應商名稱*",err:p(a).name},{default:i(()=>[m(f("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.name=t),placeholder:"請輸入"},null,512),[[l,e.form.name]])]),_:1},8,["err"]),n(c,{tit:"聯絡電話*",err:p(a).phone_no},{default:i(()=>[m(f("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.phone_no=t),placeholder:"請輸入"},null,512),[[l,e.form.phone_no]])]),_:1},8,["err"]),n(c,{tit:"登錄郵箱*",err:p(a).email},{default:i(()=>[m(f("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.email=t),placeholder:"請輸入"},null,512),[[l,e.form.email]])]),_:1},8,["err"]),n(c,{tit:"聯繫人*",err:p(a).contact_person},{default:i(()=>[m(f("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.contact_person=t),placeholder:"請輸入"},null,512),[[l,e.form.contact_person]])]),_:1},8,["err"]),n(c,{tit:"備註",err:p(a).remarks},{default:i(()=>[m(f("textarea",{rows:"3","onUpdate:modelValue":o[5]||(o[5]=t=>e.form.remarks=t),placeholder:"請輸入"},null,512),[[l,e.form.remarks]])]),_:1},8,["err"])])}}}),D={class:"o-form"},T=V({__name:"SuppiierCreatCompany",props:{form:{},aii:{}},setup(s){const a=h(y(s.form));return(d,e)=>{const o=w;return U(),$("div",D,[n(o,{tit:"詳細地址",err:p(a).office_address},{default:i(()=>[m(f("textarea",{rows:"4","onUpdate:modelValue":e[0]||(e[0]=v=>d.form.office_address=v),placeholder:"請輸入"},null,512),[[l,d.form.office_address]])]),_:1},8,["err"])])}}}),j={class:"o-form"},z=V({__name:"SuppiierCreatFactory",props:{form:{},aii:{}},setup(s){const a=h(y(s.form));return(d,e)=>{const o=w;return U(),$("div",j,[n(o,{tit:"詳細地址",err:p(a).factory_address},{default:i(()=>[m(f("textarea",{rows:"4","onUpdate:modelValue":e[0]||(e[0]=v=>d.form.factory_address=v),placeholder:"請輸入"},null,512),[[l,d.form.factory_address]])]),_:1},8,["err"])])}}}),B="suppiiers",J=async(s,r)=>k(S,async()=>(delete s.password,C(await E.put(B,s,r+"")))),K=async s=>k(S,async()=>C(await E.pos(B,s)));export{O as _,T as a,z as b,K as c,J as s};
