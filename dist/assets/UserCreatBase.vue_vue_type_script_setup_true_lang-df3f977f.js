import{_ as B}from"./OCheckboxIone.vue_vue_type_script_setup_true_lang-bf510325.js";import{_ as k}from"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-f8d62e8d.js";import{_ as U}from"./OInput.vue_vue_type_script_setup_true_lang-13237ba1.js";import{d as b,g,a6 as y,s as C,h as i,o as _,c as N,b as t,w as n,G as f,H as u,a as m,i as p,y as T,e as $,B as j,X as A,ae as d}from"./index-58be21f4.js";import{c as D}from"./choiseOnePina-bb16117e.js";import{a as E}from"./verify-18da9a0d.js";const G={class:"o-form"},q=b({__name:"UserCreatBase",props:{form:{},aii:{},edit:{type:Boolean}},setup(c){const o=c,h=["name","email","password","storehouse"],r=g(y(o.form)),{storehouse_id:w}=C(D());return i(w,e=>{o.form.storehouse=A(e)}),i(()=>o.aii.sign,()=>{h.map(e=>{if(d(r,e,o.form[e],o.aii)){o.aii.can=!1;return}}),o.aii.can=!0}),i(()=>o.form.storehouse,e=>d(r,"storehouse",e,o.aii)),i(()=>o.form.name,e=>d(r,"name",e,o.aii)),i(()=>o.form.email,e=>d(r,"email",e,o.aii,()=>!E(e))),o.edit||i(()=>o.form.pass,e=>d(r,"password",e,o.aii)),(e,a)=>{const l=U,v=k,V=B;return _(),N("div",G,[t(l,{tit:"姓名",err:p(r).name},{default:n(()=>[f(m("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>e.form.name=s),placeholder:"請輸入"},null,512),[[u,e.form.name]])]),_:1},8,["err"]),t(l,{tit:"登錄郵箱",err:p(r).email},{default:n(()=>[f(m("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>e.form.email=s),placeholder:"請輸入"},null,512),[[u,e.form.email]])]),_:1},8,["err"]),t(l,{tit:"聯絡電話",err:p(r).phone_no},{default:n(()=>[f(m("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>e.form.phone_no=s),placeholder:"請輸入"},null,512),[[u,e.form.phone_no]])]),_:1},8,["err"]),e.edit?$("",!0):(_(),T(l,{key:0,tit:"密碼",err:p(r).password},{default:n(()=>[f(m("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>e.form.password=s),placeholder:"請輸入"},null,512),[[u,e.form.password]])]),_:1},8,["err"])),m("div",null,[t(l,{class:"bg-card",tit:"管理員所屬倉庫",err:p(r).storehouse},{default:n(()=>[t(v)]),_:1},8,["err"])]),m("div",null,[t(V,{class:"py br",aii:e.form,pk:"isAdmin"},{default:n(()=>[j(" 管理人員 ")]),_:1},8,["aii"])])])}}});export{q as _};
