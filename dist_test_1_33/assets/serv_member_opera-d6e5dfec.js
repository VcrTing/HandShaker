import{_ as V}from"./OInputI.vue_vue_type_script_setup_true_lang-dbec6769.js";import{_ as B}from"./OTime.vue_vue_type_script_setup_true_lang-44bfdaaf.js";import{_ as E}from"./OSeiect.vue_vue_type_script_setup_true_lang-9602ec5a.js";import{_ as k}from"./OInput.vue_vue_type_script_setup_true_lang-8ac22f88.js";import{d as w,g as y,a8 as M,h as _,o as $,c as C,b as s,w as n,B as v,C as b,a as l,i as t,ag as f,n as D,k as I,T as S,t as q,q as U,v as N,x as R}from"./index-3f210c36.js";import{v as p}from"./vai_member-b1f797a5.js";import{v as j,a as O}from"./verify-18da9a0d.js";import{g as P}from"./giobaiPina-50220297.js";const z={class:"o-form"},ee=w({__name:"MemberCreatBase",props:{form:{},aii:{}},setup(m){const r=m,c=["name","phone_no","email"],a=y(M(r.form));return _(()=>r.aii.sign,()=>{r.aii.can=!1;let e=!0;c.map(o=>{f(a,o,r.form[o],r.aii)&&(e=!1)}),r.aii.can=e}),_(()=>r.form.name,e=>f(a,"name",e,r.aii)),_(()=>r.form.phone_no,e=>f(a,"phone_no",e,r.aii,()=>!j(e))),_(()=>r.form.email,e=>f(a,"email",e,r.aii,()=>!O(e))),(e,o)=>{const i=k,u=E,h=B,g=V;return $(),C("div",z,[s(i,{tit:"姓名*",err:t(a).name},{default:n(()=>[v(l("input",{"onUpdate:modelValue":o[0]||(o[0]=d=>e.form.name=d),placeholder:"請輸入"},null,512),[[b,e.form.name]])]),_:1},8,["err"]),s(i,{tit:"聯絡電話*",err:t(a).phone_no},{default:n(()=>[v(l("input",{"onUpdate:modelValue":o[1]||(o[1]=d=>e.form.phone_no=d),placeholder:"請輸入"},null,512),[[b,e.form.phone_no]])]),_:1},8,["err"]),s(i,{tit:"郵箱*",err:t(a).email},{default:n(()=>[v(l("input",{"onUpdate:modelValue":o[2]||(o[2]=d=>e.form.email=d),placeholder:"請輸入"},null,512),[[b,e.form.email]])]),_:1},8,["err"]),s(i,{tit:"性別",err:t(a).sex},{default:n(()=>[s(u,{many:t(p).seiect_gender,form:e.form,pk:"sex",def:t(p).seiect_gender_def},null,8,["many","form","def"])]),_:1},8,["err"]),s(g,{tit:"出生日期",err:t(a).birthdate,icon:"date"},{default:n(()=>[s(h,{form:e.form,pk:"birthdate"},null,8,["form"])]),_:1},8,["err"])])}}}),F={class:"o-form"},re=w({__name:"MemberCreatAddr",props:{form:{},aii:{}},setup(m){const r=m,c=["address"],a=y(M(r.form));return _(()=>r.aii.sign,()=>{r.aii.can=!1;let e=!0;c.map(o=>{f(a,o,r.form[o],r.aii)&&(e=!1)}),r.aii.can=e}),_(()=>r.form.address,e=>f(a,"address",e,r.aii)),(e,o)=>{const i=k;return $(),C("div",F,[s(i,{tit:"詳細地址*",err:t(a).address},{default:n(()=>[v(l("textarea",{rows:"4","onUpdate:modelValue":o[0]||(o[0]=u=>e.form.address=u),placeholder:"請輸入"},null,512),[[b,e.form.address]])]),_:1},8,["err"])])}}}),G={class:"o-form"},H=l("input",{disabled:"",value:"(自動生成，無需填入)",placeholder:""},null,-1),J={class:"py-s"},ae=w({__name:"MemberCreatCard",props:{form:{},aii:{}},setup(m){const r=m,c=["member_id","create_date"];D(()=>I(()=>{const e=P().seiect_ieveis;(!e||e.length<=0)&&S("未找到任何可用的會員等級！！！")}));const a=y(M(r.form));return _(()=>r.aii.sign,()=>{r.aii.can=!1;let e=!0;c.map(o=>{f(a,o,r.form[o],r.aii)&&(e=!1)}),r.aii.can=e}),_(()=>r.form.member_id,e=>f(a,"member_id",e,r.aii)),_(()=>r.form.create_date,e=>f(a,"create_date",e,r.aii)),_(()=>r.form.member_level,e=>{r.form.discount=p.discount_by_ievei_id(e)}),(e,o)=>{const i=k,u=B,h=V,g=E;return $(),C("div",G,[s(i,{tit:"會員編號",err:t(a).member_id},{default:n(()=>[H]),_:1},8,["err"]),s(h,{tit:"加入日期*",err:t(a).create_date,icon:"date"},{default:n(()=>[s(u,{form:e.form,pk:"create_date"},null,8,["form"])]),_:1},8,["err"]),s(i,{tit:"會員等級",err:t(a).member_level},{default:n(()=>[s(g,{many:t(p).seiect_ievei(),form:e.form,pk:"member_level",def:t(p).seiect_ievei_def},null,8,["many","form","def"])]),_:1},8,["err"]),s(i,{tit:"購買折扣",err:t(a).discount,class:"bd-c-t-imp"},{default:n(()=>[l("p",J,q(t(p).vai_discount_txt(e.form.discount)),1)]),_:1},8,["err"]),s(i,{tit:"備註",err:t(a).remarks},{default:n(()=>[v(l("textarea",{rows:"3","onUpdate:modelValue":o[0]||(o[0]=d=>e.form.remarks=d),placeholder:"請輸入"},null,512),[[b,e.form.remarks]])]),_:1},8,["err"])])}}}),T={"":"網絡連結錯誤！！！","Internal Server Error":"後台數據錯誤！！！","Invalid identifier or password":"帳戶或密碼錯誤！！！","This attribute must be unique":"數據庫中已存在該會員了！！！"},A="members",oe=async(m,r)=>U(T,async()=>(delete m.password,N(await R.put(A,m,r+"")))),te=async m=>U(T,async()=>N(await R.pos(A,m)));export{ee as _,re as a,ae as b,te as c,oe as s};
