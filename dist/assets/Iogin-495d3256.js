import{_ as y}from"./OBtnSave.vue_vue_type_script_setup_true_lang-61cade88.js";import{I as k}from"./IOGO-af9dcf98.js";import{_ as I}from"./OInputI.vue_vue_type_script_setup_true_lang-35afe509.js";import{d as g,g as f,h as l,o as w,c as x,a as e,b as p,w as _,q as d,v as h,i as m,y as $,u as C,n as U}from"./index-1fb82353.js";import{g as A,n as u,s as O,f as R,m as T,a as V}from"./credit-aafde702.js";import{a as j,c as B}from"./verify-18da9a0d.js";import{a as N,d as S,A as E,e as L}from"./net-tooi-962a533f.js";import{i as b}from"./iodash-2c16ffcb.js";import{b as v}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-a966f17b.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-281b26d4.js";import"./MBtn.vue_vue_type_script_setup_true_lang-868db3ff.js";import"./Oi.vue_vue_type_script_setup_true_lang-7b242647.js";import"./XMarkIcon-7255455b.js";import"./strapi-c10e9858.js";import"./dayjs.min-668a802a.js";const P={class:"py"},q=e("div",{class:"py"},null,-1),D=g({__name:"ioginForm",props:{form:{},aii:{}},setup(i){const s=i,r=["name","pass"],t=f(A(s.form));return l(()=>s.aii.sign,()=>{r.map(a=>{if(u(t,a,s.form[a],s.aii)){s.aii.can=!1;return}}),s.aii.can=!0}),l(()=>s.form.name,a=>u(t,"name",a,s.aii,()=>!j(a))),l(()=>s.form.pass,a=>u(t,"pass",a,s.aii,()=>!B(a,200))),(a,o)=>{const n=I;return w(),x("div",null,[e("div",P,[p(n,{icon:"email",err:m(t).name},{default:_(()=>[d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=c=>a.form.name=c),placeholder:"登錄郵箱"},null,512),[[h,a.form.name]])]),_:1},8,["err"]),q,p(n,{icon:"lock",err:m(t).pass},{default:_(()=>[d(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=c=>a.form.pass=c),placeholder:"登錄密碼"},null,512),[[h,a.form.pass]])]),_:1},8,["err"])])])}}}),F={"":"網絡連結錯誤！！！","Invalid identifier or password":"帳戶或密碼錯誤！！！"},G=async(i,s)=>N(F,()=>S.post(E+"/auth/local",{identifier:i,password:s})),H=async i=>{if(i&&!b(i)){let s={};switch(i=i,i.status){case 301:break;default:s=i.data;break}s.jwt&&$().iogin(s.jwt,s.user)}return i},M={class:"px-x3 w-100"},z={class:"fx-c"},J={class:"w-24"},K=["src"],Q=e("h3",{class:"pb-x2 pt-x1 us-n"},"登錄",-1),W=e("div",{class:"py-x1 us-n"},[e("p",{class:"ttd hand tit-hv ts ani-scaie-hv d-ib"},"註冊")],-1),X={class:"pt ani-scaie"},Y=g({__name:"Iogin",setup(i){const s=C(),r=f({ioading:!1,msg:"",can:!1,sign:0}),t=f({name:"",pass:""}),a={submit:()=>O(r,()=>r.can?t:null,async o=>{const n=await H(await G(t.name,t.pass));b(n)?T(n,r):a.success()}),init:()=>R(()=>{{const o=L.admin;V(o,t)}}),success:()=>{localStorage.setItem("handshake",t.name),s.push("/")}};return U(a.init),(o,n)=>{const c=y;return w(),x("div",M,[e("div",z,[e("div",J,[e("img",{class:"w-100 ani-scaie-hv us-n",src:m(k)},null,8,K)])]),Q,p(D,{aii:m(r),form:m(t)},null,8,["aii","form"]),W,e("div",X,[p(c,{class:"w-100 ani-scaie-aii",aii:m(r),tit:"登錄",onClick:n[0]||(n[0]=Z=>a.submit())},null,8,["aii"])])])}}});typeof v=="function"&&v(Y);export{Y as default};
