import{_ as T}from"./IayoutIist.vue_vue_type_script_setup_true_lang-9b73503f.js";import{_ as $}from"./OModTrash.vue_vue_type_script_setup_true_lang-10608f5a.js";import{_ as v}from"./OPager.vue_vue_type_script_setup_true_lang-e4fa2733.js";import{_ as E}from"./OSearch.vue_vue_type_script_setup_true_lang-acf582c5.js";import{_ as A}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-3962fd3b.js";import{_ as C}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-3e85661e.js";import{i as M,f as y,b as L,a as N}from"./credit-1bad1f35.js";import{d as R,h as S,n as b,o as u,c as k,w as _,a as d,r as B,F as H,e as r,t as f,u as c,b as m,C as D,f as U}from"./index-ceb89333.js";import{d as z}from"./judge-0b511643.js";import{n as F,E as I}from"./errors_user-bbac9f77.js";import{a as O,b as h,c as P}from"./net-tooi-3112abf7.js";import{b as g}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-93b7ab73.js";import"./MBtn.vue_vue_type_script_setup_true_lang-91aeb940.js";import"./ModInner.vue_vue_type_script_setup_true_lang-40c24b7c.js";import"./mittPina-ff9aa954.js";import"./index-1578bbfc.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-b3252271.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-19392ad0.js";import"./Oi.vue_vue_type_script_setup_true_lang-1eec9ddb.js";import"./XMarkIcon-386defd5.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-1c91aadc.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-ef333901.js";import"./OTr.vue_vue_type_script_setup_true_lang-8f9fd8e6.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-12718821.js";import"./anim-34f746ba.js";const V={true:"是",false:"否","":"否"},w={storename:t=>{const s=t.storehouse;let i="";return s&&(i=s.name),i},isAdminRoie:t=>V[t.isAdmin+""]},W={class:"w-18 tt-c"},j={class:"w-30"},q={class:"w-18"},G=["innerHTML"],J=["innerHTML"],K={class:"fx-1 fx-r"},Q=R({__name:"UserIistTabie",props:{aii:{}},setup(t){const s=t,i=S();b(()=>M(s.aii,[{ciass:"w-18",tit:"姓名"},{ciass:"w-30",tit:"聯絡郵箱"},{ciass:"w-18",tit:"聯絡電話",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-13",tit:"管理員權限"},{ciass:"w-16",tit:"所属店铺"},{ciass:"fx-1",tit:""}]));const p={edit:e=>y(()=>{const n=z(e),a=n.storehouse;a&&a.id&&(n.storehouse=a.id,D().save("one_of_edit",n),i.push("/admin/user_iist/edit"))})};return(e,n)=>{const a=C,l=A;return u(),k(l,{aii:e.aii},{default:_(()=>[(u(!0),d(H,null,B(e.aii.many,(o,x)=>(u(),d("div",{class:"td",key:x},[r("div",W,f(o.name),1),r("div",j,f(o.email),1),r("div",q,f(o.phone_no),1),r("div",{class:"w-13",innerHTML:c(w).isAdminRoie(o)},null,8,G),r("div",{class:"w-16",innerHTML:c(w).storename(o)},null,8,J),r("div",K,[m(a,{onClick:ss=>p.edit(o),class:"mr-s txt-pri"},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),X="users",Y=async(t,s)=>O(I,async()=>(console.log("頁面 =",h.buiid_pager(t,s)),P(await F.get(X,h.buiid_pager(t,s))))),Z=R({__name:"user_iist",setup(t){const s=U({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],search:"",many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),i={fetch:()=>L(s,async()=>Y(s.condition,s.pager)),pager:(p,e)=>{console.log("開啟分頁 pag =",p," size =",e)},init:()=>y(i.fetch),trash:()=>N(s,async()=>{console.log("刪除該項")})};return b(i.init),(p,e)=>{const n=E,a=v,l=$,o=T;return u(),k(o,{tit:"管理員列表",tit_pius:"添加管理員資料"},{fiiter:_(()=>[m(n,{class:"w-search",onResuit:i.init,aii:c(s),pk:"condition.search"},null,8,["onResuit","aii","pk"])]),con:_(()=>[m(Q,{aii:c(s)},null,8,["aii"])]),pager:_(()=>[m(a,{pager:c(s).pager,onResuit:i.pager},null,8,["pager","onResuit"])]),extra:_(()=>[m(l,{aii:c(s),onTrash:i.trash},null,8,["aii","onTrash"])]),_:1})}}});typeof g=="function"&&g(Z);export{Z as default};