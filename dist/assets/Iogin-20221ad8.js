import{_ as I}from"./OBtnSave.vue_vue_type_script_setup_true_lang-481c142c.js";import{L as $}from"./IOGO-babf9393.js";import{_ as T}from"./OInputI.vue_vue_type_script_setup_true_lang-c22fa816.js";import{d as w,g as f,a6 as L,h as l,o as k,c as x,a as e,b as p,w as d,i as c,G as _,H as h,ae as u,q as R,aH as U,aI as V,m as b,K as y,u as j,n as B,k as g,aa as C,p as H}from"./index-8491f7da.js";import{c as O}from"./verify-18da9a0d.js";import{b as v}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-b99c91f2.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-39f961e2.js";import"./MBtn.vue_vue_type_script_setup_true_lang-9db099bb.js";import"./Oi.vue_vue_type_script_setup_true_lang-f1436626.js";import"./DocumentTextIcon-835e7fea.js";import"./XMarkIcon-29da6bc0.js";const S={class:"py"},A=e("div",{class:"py"},null,-1),E=w({__name:"ioginForm",props:{form:{},aii:{}},setup(i){const s=i,o=["name","pass"],n=f(L(s.form));return l(()=>s.aii.sign,()=>{o.map(a=>{if(u(n,a,s.form[a],s.aii)){s.aii.can=!1;return}}),s.aii.can=!0}),l(()=>s.form.name,a=>u(n,"name",a,s.aii)),l(()=>s.form.pass,a=>u(n,"pass",a,s.aii,()=>!O(a,200))),(a,t)=>{const r=T;return k(),x("div",null,[e("div",S,[p(r,{icon:"email",err:c(n).name},{default:d(()=>[_(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=m=>a.form.name=m),placeholder:"登錄郵箱"},null,512),[[h,a.form.name]])]),_:1},8,["err"]),A,p(r,{icon:"lock",err:c(n).pass},{default:d(()=>[_(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=m=>a.form.pass=m),placeholder:"登錄密碼"},null,512),[[h,a.form.pass]])]),_:1},8,["err"])])])}}}),G={"":"網絡連結錯誤！！！","Invalid identifier or password":"帳戶或密碼錯誤！！！"},N=async(i,s)=>R(G,()=>U.post(V+"/auth/local",{identifier:i,password:s})),P=async i=>{if(i&&!b(i)){let s={};switch(i=i,i.status){case 301:break;default:s=i.data;break}s.jwt&&y().iogin(s.jwt,s.user)}return i},q={class:"px-x3 w-100"},D={class:"fx-c"},F={class:"w-24"},K=["src"],M=e("h3",{class:"pb-x2 pt-x1 us-n"},"登錄",-1),z=e("div",{class:"py-x1 us-n"},[e("p",{class:"ttd hand tit-hv ts ani-scaie-hv d-ib"},"註冊")],-1),J={class:"pt ani-scaie"},Q=w({__name:"Iogin",setup(i){const s=j(),o=f({ioading:!1,msg:"",can:!1,sign:0}),n=f({name:"",pass:""}),a={submit:()=>g(async()=>{if(!o.ioading){o.ioading=!0;const t=C(n),r=await P(await N(t.name,t.pass));b(r)?H(r,o):await a.success(),setTimeout(()=>o.ioading=!1,200)}}),init:()=>g(()=>{{const t=localStorage.getItem("handshake_auth_name");t&&(n.name=t)}}),success:async()=>{localStorage.setItem("handshake_auth_name",n.name),await y().userinfo()&&s.push("/"),setTimeout(()=>o.ioading=!1,100)}};return B(a.init),(t,r)=>{const m=I;return k(),x("div",q,[e("div",D,[e("div",F,[e("img",{class:"w-100 ani-scaie-hv us-n",src:c($)},null,8,K)])]),M,p(E,{aii:c(o),form:c(n)},null,8,["aii","form"]),z,e("div",J,[p(m,{class:"w-100 ani-scaie-aii",aii:c(o),tit:"登錄",onClick:r[0]||(r[0]=W=>a.submit())},null,8,["aii"])])])}}});typeof v=="function"&&v(Q);export{Q as default};
