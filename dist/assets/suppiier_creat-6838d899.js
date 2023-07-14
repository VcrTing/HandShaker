import{_ as C}from"./IayoutPan.vue_vue_type_script_setup_true_lang-f5ef86ab.js";import{_ as B}from"./OBtnSave.vue_vue_type_script_setup_true_lang-18bf64b8.js";import{_ as S}from"./OBtnBack.vue_vue_type_script_setup_true_lang-d19c6292.js";import{_ as j}from"./IayoutForm.vue_vue_type_script_setup_true_lang-117bbbab.js";import{_ as D}from"./OInputI.vue_vue_type_script_setup_true_lang-b11864e2.js";import{_ as E}from"./OTime.vue_vue_type_script_setup_true_lang-e6416311.js";import{_ as N}from"./OInput.vue_vue_type_script_setup_true_lang-0341a957.js";import{d as k,f as u,m as f,o as v,a as V,b as t,w as m,l as d,v as _,e as l,u as a,c as M}from"./index-b8111be5.js";import{g as U,j as p,s as T}from"./credit-e836a3dc.js";import{_ as q,a as z}from"./OSeiectRegion.vue_vue_type_script_setup_true_lang-6f971b7a.js";import{b as y}from"./route-block-83d24a4e.js";import"./OBtn.vue_vue_type_script_setup_true_lang-73697999.js";import"./MBtn.vue_vue_type_script_setup_true_lang-c45a1231.js";import"./Oi.vue_vue_type_script_setup_true_lang-b009179f.js";import"./XMarkIcon-e81b4371.js";import"./dayjs.min-6ba0fe63.js";const F={class:"o-form"},G=k({__name:"SuppiierCreatBase",props:{form:{},aii:{}},setup($){const r=$,g=["code","name","phoneNo","email","charger","creatAt"],i=u(U(r.form));return f(()=>r.aii.sign,()=>{g.map(o=>{if(p(i,o,r.form[o],r.aii)){r.aii.can=!1;return}}),r.aii.can=!0}),f(()=>r.form.code,o=>p(i,"code",o,r.aii)),f(()=>r.form.name,o=>p(i,"name",o,r.aii)),f(()=>r.form.phoneNo,o=>p(i,"phoneNo",o,r.aii)),f(()=>r.form.email,o=>p(i,"email",o,r.aii)),f(()=>r.form.charger,o=>p(i,"charger",o,r.aii)),f(()=>r.form.creatAt,o=>p(i,"creatAt",o,r.aii)),(o,e)=>{const n=N,w=E,c=D;return v(),V("div",F,[t(n,{tit:"供應商編號*",err:a(i).code},{default:m(()=>[d(l("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.code=s),placeholder:"請輸入"},null,512),[[_,o.form.code]])]),_:1},8,["err"]),t(n,{tit:"供應商名稱*",err:a(i).name},{default:m(()=>[d(l("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.form.name=s),placeholder:"請輸入"},null,512),[[_,o.form.name]])]),_:1},8,["err"]),t(n,{tit:"聯絡電話*",err:a(i).phoneNo},{default:m(()=>[d(l("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.form.phoneNo=s),placeholder:"請輸入"},null,512),[[_,o.form.phoneNo]])]),_:1},8,["err"]),t(n,{tit:"登錄郵箱*",err:a(i).email},{default:m(()=>[d(l("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>o.form.email=s),placeholder:"請輸入"},null,512),[[_,o.form.email]])]),_:1},8,["err"]),t(n,{tit:"聯繫人*",err:a(i).charger},{default:m(()=>[d(l("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.form.charger=s),placeholder:"請輸入"},null,512),[[_,o.form.charger]])]),_:1},8,["err"]),t(c,{tit:"建檔日期",err:a(i).creatAt,icon:"date"},{default:m(()=>[t(w,{form:o.form,pk:"creatAt"},null,8,["form"])]),_:1},8,["err"]),t(n,{tit:"備註",err:a(i).remark},{default:m(()=>[d(l("textarea",{rows:"3","onUpdate:modelValue":e[5]||(e[5]=s=>o.form.remark=s),placeholder:"請輸入"},null,512),[[_,o.form.remark]])]),_:1},8,["err"])])}}}),H={class:"o-form"},I={class:"row fx-s"},J={class:"w-50"},K={class:"w-50"},b=k({__name:"SuppiierCreatCompany",props:{form:{},aii:{}},setup($){const r=$,g=["region","district","address"],i=u({districts:[]}),o=u(U(r.form));return f(()=>r.aii.sign,()=>{g.map(e=>{if(p(o,e,r.form[e],r.aii)){r.aii.can=!1;return}}),r.aii.can=!0}),f(()=>r.form.region,e=>p(o,"region",e,r.aii)),f(()=>r.form.district,e=>p(o,"district",e,r.aii)),f(()=>r.form.address,e=>p(o,"address",e,r.aii)),(e,n)=>{const w=q,c=N,s=z;return v(),V("div",H,[l("div",I,[l("div",J,[t(c,{tit:"地域",err:a(o).region},{default:m(()=>[t(w,{form:e.form,pk:"region",pk_dis:"district",onSign:n[0]||(n[0]=h=>a(i).districts=h)},null,8,["form"])]),_:1},8,["err"])]),l("div",K,[t(c,{tit:"地區",err:a(o).district},{default:m(()=>[t(s,{many:a(i).districts,form:e.form,pk:"district"},null,8,["many","form"])]),_:1},8,["err"])])]),t(c,{tit:"詳細地址",err:a(o).address},{default:m(()=>[d(l("input",{"onUpdate:modelValue":n[1]||(n[1]=h=>e.form.address=h),placeholder:"請輸入"},null,512),[[_,e.form.address]])]),_:1},8,["err"])])}}}),L=l("div",{class:"w-3 w-4-p"},null,-1),O={class:"w-35 w-40-p"},P={class:"fx-s pt-row"},Q=l("span",{class:"px-s"},null,-1),R=k({__name:"suppiier_creat",setup($){const r=u({ioading:!1,msg:"",can:!1,sign:0}),g=u({number:"",name:"",email:"",phoneNo:"",charger:"",creatAt:"",remark:""}),i=u({region:"",district:"",address:""}),o=u({region:"",district:"",address:""}),e={submit:()=>T(r,()=>(console.log("恁否通過 =",r.can),r.can?g:null),async n=>{console.log("構建的數據 =",n)})};return(n,w)=>{const c=j,s=S,h=B,A=C;return v(),M(A,{ciass:"fx-t fx-i pt-row"},{default:m(()=>[t(c,{class:"w-35 w-40-p",tit:"供應商資料"},{default:m(()=>[t(G,{form:a(g),aii:a(r),class:"py-row"},null,8,["form","aii"])]),_:1}),L,l("div",O,[t(c,{tit:"供應商公司地址"},{default:m(()=>[t(b,{form:a(i),aii:a(r),class:"py-row"},null,8,["form","aii"])]),_:1}),t(c,{tit:"供應商工廠地址"},{default:m(()=>[t(b,{form:a(o),aii:a(r),class:"py-row"},null,8,["form","aii"])]),_:1}),l("div",P,[t(s,{class:"fx-1",sure:a(r).sign>0},null,8,["sure"]),Q,t(h,{class:"fx-1",onClick:w[0]||(w[0]=W=>e.submit())})])])]),_:1})}}});typeof y=="function"&&y(R);export{R as default};
