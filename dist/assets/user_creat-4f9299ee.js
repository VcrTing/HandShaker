import{_ as V}from"./IayoutPan.vue_vue_type_script_setup_true_lang-846b7850.js";import{_ as C}from"./OBtn.vue_vue_type_script_setup_true_lang-60b9111f.js";import{d as _,o as d,g as h,w as p,i as v,t as w,u as N,j as f,e as r,h as m,v as U,r as T,k as O,f as $,l as b,c as S,a as u,m as k}from"./index-caa1ebf8.js";import{_ as B}from"./MBtn.vue_vue_type_script_setup_true_lang-291120bc.js";import{_ as j}from"./OInput.vue_vue_type_script_setup_true_lang-1cad75df.js";import{b as y}from"./route-block-83d24a4e.js";const D=_({__name:"OBtnSave",props:{tit:{}},setup(a){return(e,s)=>{const n=C;return d(),h(n,{class:"btn-pri py px"},{default:p(()=>[v(w(e.tit?e.tit:"儲存"),1)]),_:1})}}}),I=_({__name:"OBtnBack",props:{tit:{},sure:{type:Boolean}},setup(a){const e=a,s=N(),n=()=>{e.sure?confirm("您確定要"+(e.tit?e.tit:"取消")+"嗎？")&&s.go(-1):s.go(-1)};return(o,t)=>{const i=B;return d(),h(i,{class:"btn-tab py px br",onTap:n},{default:p(()=>[v(w(o.tit?o.tit:"取消"),1)]),_:1})}}}),M=["id"],x={class:"pi-x1"},P=["for"],R=_({__name:"OCheckboxIone",props:{aii:{},pk:{}},setup(a){const e=O();return(s,n)=>{const o=B;return d(),h(o,{onTap:n[1]||(n[1]=()=>s.aii[s.pk]=!s.aii[s.pk]),bk:!0,class:"w-100 btn-weak o-checkbox-ione",ciass:"fx-i px-input"},{default:p(()=>{var t,i;return[f(r("input",{class:"hand",type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=c=>s.aii[s.pk]=c),id:"iabei_"+((t=m(e))==null?void 0:t.uid)},null,8,M),[[U,s.aii[s.pk]]]),r("div",x,[r("label",{class:"hand",for:"iabei_"+((i=m(e))==null?void 0:i.uid)},[T(s.$slots,"default")],8,P)])]}),_:3})}}}),q=(a,e,s)=>new Promise(async n=>{a.ioading=!0,a.sign+=1;const o=e();o&&await s(o),setTimeout(()=>{a.ioading=!1,n(0)},200)}),z=(a={})=>{let e={};for(let s in a)e[s]=!1;return e},g=(a,e,s,n,o)=>{let t=!1;return s||(t=!0),o&&(t=o()),a[e]=t,n.can=!t,t},A={class:"o-form"},E=_({__name:"UserCreatBase",props:{form:{},aii:{}},setup(a){const e=a,s=["name","email","pass"],n=$(z(e.form));return b(()=>e.aii.sign,()=>{s.map(o=>{if(g(n,o,e.form[o],e.aii)){e.aii.can=!1;return}}),e.aii.can=!0}),b(()=>e.form.name,o=>g(n,"name",o,e.aii)),b(()=>e.form.pass,o=>g(n,"pass",o,e.aii)),b(()=>e.form.email,o=>g(n,"email",o,e.aii)),(o,t)=>{const i=j,c=R;return d(),S("div",A,[u(i,{tit:"姓名",err:m(n).name},{default:p(()=>[f(r("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.form.name=l),placeholder:"請輸入"},null,512),[[k,o.form.name]])]),_:1},8,["err"]),u(i,{tit:"登錄郵箱",err:m(n).email},{default:p(()=>[f(r("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.email=l),placeholder:"請輸入"},null,512),[[k,o.form.email]])]),_:1},8,["err"]),u(i,{tit:"聯絡電話",err:m(n).phoneNo},{default:p(()=>[f(r("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>o.form.phoneNo=l),placeholder:"請輸入"},null,512),[[k,o.form.phoneNo]])]),_:1},8,["err"]),u(i,{tit:"密碼",err:m(n).pass},{default:p(()=>[f(r("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>o.form.pass=l),placeholder:"請輸入"},null,512),[[k,o.form.pass]])]),_:1},8,["err"]),r("div",null,[u(c,{class:"py br",aii:o.form,pk:"is_admin"},{default:p(()=>[v(" 管理人員 ")]),_:1},8,["aii"])])])}}}),F={class:"fx-s py"},G=r("span",{class:"px-s"},null,-1),H=_({__name:"user_creat",setup(a){const e=$({ioading:!1,msg:"",can:!1,sign:0}),s=$({name:"",email:"",phoneNo:"",pass:"",is_admin:!0}),n={submit:()=>q(e,()=>(console.log("恁否通過 =",e.can),e.can?s:null),async o=>{console.log("構建的數據 =",o)})};return(o,t)=>{const i=I,c=D,l=V;return d(),h(l,{tit:"管理員資料",ciass:"w-45 w-55-p"},{default:p(()=>[u(E,{form:m(s),aii:m(e),class:"py-row"},null,8,["form","aii"]),r("div",F,[u(i,{class:"fx-1",sure:m(e).sign>0},null,8,["sure"]),G,u(c,{class:"fx-1",onClick:t[0]||(t[0]=J=>n.submit())})])]),_:1})}}});typeof y=="function"&&y(H);export{H as default};
