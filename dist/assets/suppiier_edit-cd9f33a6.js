import{_ as w}from"./IayoutPanThree.vue_vue_type_script_setup_true_lang-c566b549.js";import{_ as $}from"./OBtnSave.vue_vue_type_script_setup_true_lang-a4afef5a.js";import{_ as x}from"./OBtnBack.vue_vue_type_script_setup_true_lang-9cbb3182.js";import{_ as C}from"./IayoutForm.vue_vue_type_script_setup_true_lang-8cf5fb4a.js";import{_ as B,a as T,s as V}from"./serv_suppiier_opera-514b6d11.js";import{_ as j}from"./OInput.vue_vue_type_script_setup_true_lang-db169646.js";import{d as b,f,C as u,o as v,a as N,b as t,w as _,y as R,z,e as p,u as i,h as D,s as E,n as F,c as M}from"./index-9a233275.js";import{g as P,j as d,t as S,s as U,f as q,m as A,c as G}from"./credit-3718e35a.js";import{i as H}from"./judge-0b511643.js";import{s as I}from"./suppiierPina-ed83c432.js";import{b as y}from"./route-block-83d24a4e.js";import"./scroiiy-8dbda61a.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-c5e8c719.js";import"./MBtn.vue_vue_type_script_setup_true_lang-6287b88b.js";import"./OInputI.vue_vue_type_script_setup_true_lang-033e7133.js";import"./Oi.vue_vue_type_script_setup_true_lang-325e8dcc.js";import"./XMarkIcon-1605e303.js";import"./OTime.vue_vue_type_script_setup_true_lang-7085d47f.js";import"./datepicker.esm-e6b43a14.js";import"./dayjs.min-bdea528d.js";import"./verify-18da9a0d.js";import"./errors_user-ac9a0f3d.js";import"./net-tooi-3112abf7.js";import"./index-6afa936f.js";import"./anim-34f746ba.js";const J={class:"o-form"},K=b({__name:"SuppiierCreatFactory",props:{form:{},aii:{}},setup(l){const s=l,a=["factory_address"],m=f(P(s.form));return u(()=>s.aii.sign,()=>{a.map(o=>{if(d(m,o,s.form[o],s.aii)){s.aii.can=!1;return}}),s.aii.can=!0}),u(()=>s.form.factory_address,o=>d(m,"factory_address",o,s.aii)),(o,e)=>{const r=j;return v(),N("div",J,[t(r,{tit:"詳細地址",err:i(m).factory_address},{default:_(()=>[R(p("textarea",{rows:"4","onUpdate:modelValue":e[0]||(e[0]=n=>o.form.factory_address=n),placeholder:"請輸入"},null,512),[[z,o.form.factory_address]])]),_:1},8,["err"])])}}}),L={class:"fx-s pt-row"},O=p("span",{class:"px-s"},null,-1),Q=b({__name:"suppiier_edit",setup(l){const s=f({ioading:!1,msg:"",can:!1,sign:0}),a=f({supplier_id:"",name:"",email:"",phone_no:"",contact_person:"",create_date:"",office_address:"",factory_address:"",remarks:""}),m=D(),{one_of_edit:o}=E(I()),e={buiid:()=>{const r={...a};return r.phone_no=r.phone_no+"",r.level=r.level+"",S(r)},submit:()=>U(s,()=>s.can?e.buiid():null,async r=>{const n=await V(r,o.value.id);H(n)?A(n,s):e.success()}),success:()=>m.back(),init:()=>q(()=>{s.sign=0,G(o.value,a)||m.back()})};return F(e.init),(r,n)=>{const c=C,h=x,g=$,k=w;return v(),M(k,null,{ieft:_(()=>[t(c,{tit:"編輯供應商資料"},{default:_(()=>[t(B,{form:i(a),aii:i(s),class:"py-row"},null,8,["form","aii"])]),_:1})]),right:_(()=>[t(c,{tit:"供應商公司地址"},{default:_(()=>[t(T,{form:i(a),aii:i(s),class:"py-row"},null,8,["form","aii"])]),_:1}),t(c,{tit:"供應商工廠地址"},{default:_(()=>[t(K,{form:i(a),aii:i(s),class:"py-row"},null,8,["form","aii"])]),_:1}),p("div",L,[t(h,{class:"fx-1",sure:i(s).sign>0},null,8,["sure"]),O,t(g,{class:"fx-1",aii:i(s),tit:"儲存",onClick:n[0]||(n[0]=W=>e.submit())},null,8,["aii"])])]),_:1})}}});typeof y=="function"&&y(Q);export{Q as default};