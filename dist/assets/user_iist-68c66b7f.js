import{_ as y}from"./IayoutIist.vue_vue_type_script_setup_true_lang-62c6c1d4.js";import{_ as x,a as C,b as P}from"./OTr.vue_vue_type_script_setup_true_lang-82c45b1a.js";import{d as g,o as i,c as o,r as B,_ as w,n as b,a as _,F as $,b as N,e as c,t as d,u as T,f as F,g as I,w as u,h as m}from"./index-caa1ebf8.js";import{b as k}from"./route-block-83d24a4e.js";import"./OBtn.vue_vue_type_script_setup_true_lang-60b9111f.js";import"./MBtn.vue_vue_type_script_setup_true_lang-291120bc.js";const S={key:0,class:"ani-softer"},V={key:1},D={key:0,class:"ani-softer"},E={key:1,class:"ani-softer"},L=g({__name:"OTabieIoading",props:{aii:{}},setup(n){return(t,e)=>t.aii.ioading?(i(),o("div",S," 加載中 ")):(i(),o("div",V,[t.aii.many&&t.aii.many.length>0?(i(),o("div",D,[B(t.$slots,"default")])):(i(),o("div",E," 空數據 "))]))}}),O={},R={class:"d-ib txt-err"};function U(n,t){return i(),o("div",R," 刪除 ")}const q=w(O,[["render",U]]),z={},A={class:"d-ib hand"};function G(n,t){return i(),o("div",A," 編輯 ")}const H=w(z,[["render",G]]),v=(n,t,e=100,s=0)=>new Promise(a=>{setTimeout(()=>{if(n.length<=s){a(!0);return}else t&&t(n[s],s),s+=1,v(n,t,e,s),a(!1)},e)}),J={class:"w-22"},K={class:"w-32"},M={class:"w-19"},Q={class:"w-15"},W={class:"fx-1 fx-r"},X=g({__name:"UserIistTabie",props:{aii:{}},setup(n){const t=n;b(()=>new Promise(s=>{t.aii.trs.length=0,v([{ciass:"w-22",txt:"姓名",sort:!1},{ciass:"w-32",txt:"聯絡郵箱",sort:!1},{ciass:"w-19",txt:"聯絡電話",sort:!0},{ciass:"w-15",txt:"管理員權限",sort:!1},{ciass:"fx-1",txt:"",sort:!1}],a=>t.aii.trs.push(a),32),s(0)}));const e={edit:()=>new Promise(s=>{s(0)}),trash:()=>new Promise(s=>{s(0)})};return(s,a)=>{const l=x,p=H,f=q;return i(),o($,null,[_(l,{aii:s.aii},null,8,["aii"]),(i(!0),o($,null,N(s.aii.many,(r,h)=>(i(),o("div",{class:"td",key:h},[c("div",J,d(r.name),1),c("div",K,d(r.email),1),c("div",M,d(r.phoneNo),1),c("div",Q,d(r.is_admin),1),c("div",W,[_(p,{onClick:e.edit,class:"mr-s"},null,8,["onClick"]),_(f,{onClick:e.trash},null,8,["onClick"])])]))),128))],64)}}}),Y={class:"tabie tabie-def"},Z=g({__name:"user_iist",setup(n){const t=T(),e=F({many:[{id:1,name:"小紅",email:"pinkiity@163.com",phoneNo:"9988 9888",is_admin:!0}],ioading:!1,trs:[],search:""});let s={};return b(()=>new Promise(a=>{s.pius=()=>t.push("/user_iist/creat"),a(0)})),(a,l)=>{const p=C,f=L,r=P,h=y;return i(),I(h,{tit:"管理員列表",tit_pius:"添加管理員資料",onPius:l[0]||(l[0]=j=>m(s).pius())},{fiiter:u(()=>[_(p,{class:"w-search",aii:m(e),pk:"search"},null,8,["aii"])]),con:u(()=>[_(f,{aii:m(e)},{default:u(()=>[c("div",Y,[_(X,{aii:m(e)},null,8,["aii"])])]),_:1},8,["aii"])]),pager:u(()=>[_(r)]),_:1})}}});typeof k=="function"&&k(Z);export{Z as default};
