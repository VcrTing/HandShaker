import{_ as U}from"./OInput.vue_vue_type_script_setup_true_lang-a14095cd.js";import{d as y,h as B,D as t,o as N,c as R,b as m,w as d,j as f,v as l,a as u,u as _}from"./index-5e9b51bc.js";import{g,j as i}from"./credit-2841b23d.js";import{v as j}from"./verify-18da9a0d.js";import{n as c}from"./conn-c0df13d5.js";import{a as h,s as w}from"./net-tooi-52780821.js";import{E as v}from"./errors_user-be6d0865.js";const C={class:"o-form"},O=y({__name:"WarehouseCreatBase",props:{form:{},aii:{}},setup(n){const r=n,E=["name","contact_person","phone_no","address"],o=B(g(r.form));return t(()=>r.aii.sign,()=>{E.map(e=>{if(i(o,e,r.form[e],r.aii)){r.aii.can=!1;return}}),r.aii.can=!0}),t(()=>r.form.name,e=>i(o,"name",e,r.aii)),t(()=>r.form.contact_person,e=>i(o,"contact_person",e,r.aii)),t(()=>r.form.phone_no,e=>i(o,"phone_no",e,r.aii,()=>!j(e))),t(()=>r.form.address,e=>i(o,"address",e,r.aii)),(e,a)=>{const p=U;return N(),R("div",C,[m(p,{tit:"倉庫名稱",err:_(o).name},{default:d(()=>[f(u("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>e.form.name=s),placeholder:"請輸入"},null,512),[[l,e.form.name]])]),_:1},8,["err"]),m(p,{tit:"倉庫聯絡人",err:_(o).contact_person},{default:d(()=>[f(u("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>e.form.contact_person=s),placeholder:"請輸入"},null,512),[[l,e.form.contact_person]])]),_:1},8,["err"]),m(p,{tit:"倉庫聯絡人電話",err:_(o).phone_no},{default:d(()=>[f(u("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>e.form.phone_no=s),placeholder:"請輸入"},null,512),[[l,e.form.phone_no]])]),_:1},8,["err"]),m(p,{tit:"倉庫地址",err:_(o).address},{default:d(()=>[f(u("textarea",{rows:"6","onUpdate:modelValue":a[3]||(a[3]=s=>e.form.address=s),placeholder:"請輸入"},null,512),[[l,e.form.address]])]),_:1},8,["err"])])}}}),V="warehouses",T=async(n,r)=>h(v,async()=>(delete n.password,w(await c.put(V,n,r+"")))),W=async n=>h(v,async()=>w(await c.pos(V,n)));export{O as _,W as a,T as s};
