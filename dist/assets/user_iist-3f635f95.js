import{_ as R}from"./IayoutIist.vue_vue_type_script_setup_true_lang-7a692263.js";import{_ as v}from"./OPager.vue_vue_type_script_setup_true_lang-0919e2da.js";import{_ as x}from"./OSearch.vue_vue_type_script_setup_true_lang-ea6b5898.js";import{_ as T}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-7781e41d.js";import{_ as $}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-7c7fd55e.js";import{i as b,f as C,d as L}from"./credit-14390c61.js";import{d as w,q as A,k as B,o as m,c as k,w as p,e as f,l as H,F as M,b as r,t as d,u as c,a as u,I as E,g as N}from"./index-034b25b4.js";import{d as S}from"./iodash-8a8cb9b0.js";import{s as z}from"./serv_user_iist-247404c5.js";import{b as h}from"./route-block-83d24a4e.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-3dccb5a7.js";import"./MBtn.vue_vue_type_script_setup_true_lang-2f180d8e.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-33918c27.js";import"./Oi.vue_vue_type_script_setup_true_lang-3097434f.js";import"./XMarkIcon-d6cf2063.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-b085ac3c.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-7293f77a.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-6ec5db61.js";import"./OTr.vue_vue_type_script_setup_true_lang-82623b68.js";import"./conn-6bbfef3c.js";import"./net-tooi-4fdf0d83.js";import"./errors_user-be6d0865.js";const D={true:"是",false:"否","":"否"},g={storename:e=>{const s=e.storehouse;let i="";return s&&(i=s.name),i},isAdminRoie:e=>D[e.isAdmin+""]},F={class:"w-18 tt-c"},I={class:"w-30"},P={class:"w-18"},U=["innerHTML"],V=["innerHTML"],q={class:"fx-1 fx-r"},O=w({__name:"UserIistTabie",props:{aii:{}},setup(e){const s=e,i=A();B(()=>b(s.aii,[{ciass:"w-18",tit:"姓名"},{ciass:"w-30",tit:"聯絡郵箱"},{ciass:"w-18",tit:"聯絡電話",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-13",tit:"管理員權限"},{ciass:"w-16",tit:"所属店铺"},{ciass:"fx-1",tit:""}]));const _={edit:t=>C(()=>{const n=S(t),o=n.storehouse;o&&o.id&&(n.storehouse=o.id,E().save("one_of_edit",n),i.push("/admin/user_iist/edit"))})};return(t,n)=>{const o=$,l=T;return m(),k(l,{aii:t.aii},{default:p(()=>[(m(!0),f(M,null,H(t.aii.many,(a,y)=>(m(),f("div",{class:"td",key:y},[r("div",F,d(a.name),1),r("div",I,d(a.email),1),r("div",P,d(a.phone_no),1),r("div",{class:"w-13",innerHTML:c(g).isAdminRoie(a)},null,8,U),r("div",{class:"w-16",innerHTML:c(g).storename(a)},null,8,V),r("div",q,[u(o,{onClick:j=>_.edit(a),class:"mr-s txt-pri"},null,8,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),W=w({__name:"user_iist",setup(e){const s=N({many:[],condition:{search:""},chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],search:"",many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1}}),i={fetch:()=>L(s,async()=>z(s.condition,s.pager)),pager:(_,t)=>{console.log("開啟分頁 pag =",_," size =",t),i.fetch()}};return(_,t)=>{const n=x,o=v,l=R;return m(),k(l,{tit:"管理員列表",tit_pius:"添加管理員資料"},{fiiter:p(()=>[u(n,{pchd:"請輸入姓名、電郵、電話進行搜索",class:"w-search ip-fiiter",onResuit:i.fetch,aii:c(s).condition,pk:"search",kiii:!0},null,8,["onResuit","aii"])]),con:p(()=>[u(O,{aii:c(s)},null,8,["aii"])]),pager:p(()=>[u(o,{pager:c(s).pager,onResuit:i.pager},null,8,["pager","onResuit"])]),_:1})}}});typeof h=="function"&&h(W);export{W as default};
