import{_ as G,a as J}from"./OBtnSearch.vue_vue_type_script_setup_true_lang-a2aa0862.js";import{_ as K}from"./OPager.vue_vue_type_script_setup_true_lang-510f0770.js";import{_ as W}from"./OBtnPius.vue_vue_type_script_setup_true_lang-a717f7a1.js";import{q as A,O as X,x as F,P as k,av as Y,d as h,f as N,n as q,U as Z,o as u,c as f,a as t,D as w,i as s,b as d,k as l,N as ii,g as b,z as B,y as x,w as m,A as E,t as _,F as O,m as ti,a4 as si,S as oi,ah as v,ai as C,H as R,s as ai,e as P,Q as ei}from"./index-c02dffd3.js";import{E as V}from"./errors_product-d5275ad5.js";import{_ as ni}from"./OBtnReset.vue_vue_type_script_setup_true_lang-9b97b075.js";import{_ as ri}from"./OSearch.vue_vue_type_script_setup_true_lang-acf479ee.js";import{_ as ci}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-8fa64e24.js";import{_ as _i}from"./CoSuppiierSeiectPure.vue_vue_type_script_setup_true_lang-dc92a038.js";import{_ as M}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-e1a1f6ff.js";import{_ as pi}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-e48d3fc1.js";import{b as di,m as S,a as y}from"./view-91223e10.js";import{invoiceCreatPina as U}from"./invoiceCreatPina-d66f197f.js";import{_ as ui,a as mi}from"./Pan.vue_vue_type_script_setup_true_lang-7f35740d.js";import{b as T}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-686a7428.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-f96beb73.js";import"./Oi.vue_vue_type_script_setup_true_lang-c317e4c1.js";import"./DocumentTextIcon-949aeb5b.js";import"./XMarkIcon-99b1c700.js";import"./OiX2.vue_vue_type_script_setup_true_lang-e940ced6.js";import"./PlusCircleIcon-f4e496c4.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-14cd32dc.js";import"./datepicker.esm-193264dc.js";import"./giobaiPina-03474086.js";import"./serv_suppiier_iist-0c51d78f.js";import"./serv_user_iist-87626e74.js";import"./serv_warehouse_iist-7383a4ad.js";import"./InboxIcon-8a908564.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-3d4cbf47.js";import"./OTr.vue_vue_type_script_setup_true_lang-bd0f3b05.js";import"./serv_product_iist-912b790e.js";const H="invoices",li=async(a,i)=>A(V,async()=>X(await F.get(H,k.buiid_pager(a,i)),["supplier"])),fi=async a=>A(V,async()=>Y(await F.one(H,a+""))),vi={class:"fx-s"},hi={class:"fx-1 row fx-i"},wi=h({__name:"InvoiceIistFiiter",props:{aii:{}},emits:["search"],setup(a,{emit:i}){const c=a,p=N(),o={search:()=>c.aii.ioading?void 0:i("search"),reset:()=>l(()=>{ii({},c.aii.condition),p.value&&p.value.ciear(),o.search()})},e=N(0);return q(()=>Z(7,()=>e.value+=1,32)),(r,n)=>{const I=_i,D=ci,L=ri,Q=ni,j=G;return u(),f("div",vi,[t("div",hi,[t("div",{class:w(["w-25 op-0",{"ani-fiiter":s(e)>=1}])},[d(I,{onResuit:n[0]||(n[0]=g=>o.search()),class:"input w-100 ip-fiiter fix-seiect",form:r.aii.condition,pk:"supplier"},null,8,["form"])],2),t("div",{class:w(["w-28 op-0 ip-fiiter",{"ani-fiiter":s(e)>=2}])},[d(D,{onResuit:n[1]||(n[1]=g=>o.search()),class:"input ip-fiiter",form:r.aii.condition,pk:"date"},null,8,["form"])],2),t("div",{class:w(["w-36 ip-fiiter op-0",{"ani-fiiter":s(e)>=3}])},[d(L,{onResuit:n[2]||(n[2]=g=>o.search()),aii:r.aii.condition,pk:"invoice_id",pchd:"請輸入供應商參考編號"},null,8,["aii"])],2)]),t("div",{class:w(["pi op-0",{"ani-fiiter":s(e)>=5}])},[d(Q,{onClick:n[3]||(n[3]=g=>o.reset())})],2),t("div",{class:w(["pi op-0",{"ani-fiiter":s(e)>=6}])},[d(j,{onClick:n[4]||(n[4]=g=>o.search()),aii:r.aii},null,8,["aii"])],2)])}}}),z=a=>a.supplier?a.supplier:{},$={suppiier_id:(a={})=>z(a).supplier_id,suppiier_name:(a={})=>z(a).name,restock_product_id:a=>(a.product?a.product:{}).product_id,restock_product_name:a=>(a.product?a.product:{}).name,restock_qunatity:a=>{const i=a.variations?a.variations:[];let c=0;return i.map(p=>{c+=p.quantity}),c}},yi={class:"w-20"},$i={class:"w-16"},gi={class:"w-13"},ki={class:"w-14"},bi={class:"w-15"},xi={class:"w-16"},Ii={class:"fx-1 fx-r"},Ci=h({__name:"InvoiceIistTabie",props:{aii:{}},setup(a){const i=a;b({ioading:!1,iiveId:-1});const c={editFuture:async p=>{let o=await fi(p);ti(o)?si(o+""):(o=o,U().save("one_of_view",o))},dump:()=>{oi(100)}};return q(()=>B(i.aii,[{ciass:"w-20",tit:"供應商參考編號",sort_up:()=>l(()=>v(i.aii.many,"order_id",!0)),sort_down:()=>l(()=>v(i.aii.many,"order_id")),sort_reset:()=>C(i.aii)},{ciass:"w-16",tit:"發票日期"},{ciass:"w-13",tit:"合計數量",sort_up:()=>l(()=>v(i.aii.many,"total_quantity",!0)),sort_down:()=>l(()=>v(i.aii.many,"total_quantity")),sort_reset:()=>C(i.aii)},{ciass:"w-14",tit:"合計金額",sort_up:()=>l(()=>v(i.aii.many,"total_price",!0)),sort_down:()=>l(()=>v(i.aii.many,"total_price")),sort_reset:()=>C(i.aii)},{ciass:"w-15",tit:"供應商編號"},{ciass:"w-22",tit:"供應商名稱"}])),(p,o)=>{const e=pi,r=M;return u(),x(r,{aii:p.aii},{default:m(()=>[(u(!0),f(O,null,E(p.aii.many,(n,I)=>(u(),f("div",{class:"td",key:I},[t("div",yi,_(n.invoice_id),1),t("div",$i,_(s(di)(n.date)),1),t("div",gi,_(n.total_quantity),1),t("div",ki,_(s(S)(n.total_price)),1),t("div",bi,_(s($).suppiier_id(n)),1),t("div",xi,_(s($).suppiier_name(n)),1),t("div",Ii,[d(e,{tit:"產品詳情",func:c.editFuture,id:n.id,onTap:o[0]||(o[0]=D=>c.dump())},null,8,["func","id"])])]))),128))]),_:1},8,["aii"])}}}),Ri={class:"w-13"},qi={class:"w-20"},Si={class:"w-10"},Di={class:"w-10"},Ni={class:"w-9"},Pi={class:"w-11"},Ti={class:"w-10"},zi={class:"w-10"},Ai={class:"fx-1"},Fi=h({__name:"IpdiTabie",props:{aii:{},many:{}},setup(a){const i=a;return b({ioading:!1,iiveId:-1}),q(()=>B(i.aii,[{ciass:"w-13",tit:"貨號"},{ciass:"w-20",tit:"貨品名稱 / 摘要"},{ciass:"w-10",tit:"數量總數"},{ciass:"w-10",tit:"單價"},{ciass:"w-9",tit:"折扣"},{ciass:"w-11",tit:"最新入貨價錢"},{ciass:"w-10",tit:"統計"},{ciass:"w-10",tit:"最低價錢"},{ciass:"fx-1",tit:"售價"}])),(c,p)=>{const o=M;return u(),x(o,{aii:c.aii,mini:!0},{default:m(()=>[(u(!0),f(O,null,E(c.many,(e,r)=>(u(),f("div",{class:"td",key:r},[t("div",Ri,_(s($).restock_product_id(e)),1),t("div",qi,_(s($).restock_product_name(e)),1),t("div",Si,_(s($).restock_qunatity(e)),1),t("div",Di,_(s(y)(e.unit_price)),1),t("div",Ni,_(s(y)(e.discount)),1),t("div",Pi,_(s(y)(e.net_price)),1),t("div",Ti,_(s(S)(e.total_amount)),1),t("div",zi,_(s(y)(e.lowest_price)),1),t("div",Ai,_(s(y)(e.selling_price)),1)]))),128))]),_:1},8,["aii"])}}}),Bi={class:"pt ani-softer"},Ei=h({__name:"InvoicePanDetaiiIist",props:{one:{}},setup(a){const i=a,c=R(()=>{const o=i.one?i.one:{};return(o.restocks?o.restocks:[]).map(r=>(r.product=r.product?k.data(r.product):{},r.variations=r.variations?r.variations:[],r.__totai=o.total_quantity,r))}),p=b({many:[{}],condition:{},chooseAii:!1,chooses:[],ioading:!1,msg:"",trs:[],many_origin:[],pager:{page:1,pageSize:25,pageCount:1,total:1}});return(o,e)=>(u(),f("div",Bi,[d(Fi,{aii:s(p),many:s(c)},null,8,["aii","many"])]))}}),Oi={key:0,class:"row ani-softer py my bg-card"},Vi={class:"w-50"},Mi=t("div",null,"入貨倉庫",-1),Ui={class:"pt"},Hi={class:"w-50"},Li=t("div",null,"供應商",-1),Qi={class:"pt"},ji={key:1,class:"row ani-fade-b py-x3"},Gi={class:"w-50"},Ji=t("div",null,"合計數量",-1),Ki={class:"pt"},Wi={class:"w-50"},Xi=t("div",null,"合計金額",-1),Yi={class:"pt"},Zi=h({__name:"InvoicePanDetaii",setup(a){const{one_of_view:i}=ai(U()),c=R(()=>{const o=i.value?i.value:{},e=o.storehouse?k.data(o.storehouse):{};return e||{}}),p=R(()=>{const o=i.value?i.value:{},e=o.supplier?k.data(o.supplier):{};return e||{}});return(o,e)=>{const r=ui,n=mi;return u(),x(n,{idx:100,big:!0},{default:m(()=>[d(r,{tit:"入單產品詳情"},{default:m(()=>[s(i)?(u(),f("div",Oi,[t("div",Vi,[Mi,t("div",Ui,[t("h6",null,_(s(c).name?s(c).name:"(無入貨倉庫信息)"),1)])]),t("div",Hi,[Li,t("div",Qi,[t("h6",null,_(s(p).name?s(p).name:"(無供應商信息)"),1)])])])):P("",!0),d(Ei,{one:s(i)},null,8,["one"]),s(i)?(u(),f("div",ji,[t("div",Gi,[Ji,t("div",Ki,[t("h4",null,_(s(i).total_quantity),1)])]),t("div",Wi,[Xi,t("div",Yi,[t("h4",null,_(s(S)(s(i).total_price)),1)])])])):P("",!0)]),_:1})]),_:1})}}}),it=h({__name:"invoice_iist",setup(a){const i=b({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{supplier:"",date:"",invoice_id:""}}),c={fetch:()=>ei(i,async()=>li(i.condition,i.pager)),pager:(p,o)=>l(()=>{i.pager.page=p,i.pager.pageSize=o,c.fetch()})};return(p,o)=>{const e=W,r=K,n=J;return u(),x(n,{tit:"發票列表",tit_pius:"快速入單"},{pius:m(()=>[d(e,{class:"py mi",tit:"快速入單"})]),fiiter:m(()=>[d(wi,{aii:s(i),onSearch:c.fetch},null,8,["aii","onSearch"])]),con:m(()=>[d(Ci,{aii:s(i)},null,8,["aii"])]),pager:m(()=>[d(r,{pager:s(i).pager,onResuit:c.pager},null,8,["pager","onResuit"])]),extra:m(()=>[d(Zi)]),_:1})}}});typeof T=="function"&&T(it);export{it as default};
