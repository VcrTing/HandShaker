import{d as y,o as c,c as l,a as o,r as b,t as P,B as E,g as $,h as M,i as f,A as T,b as _,e as ti,y as x,w as p,an as ei,a6 as ai,G as oi,H as ni,Y as ri,aa as _i,ae as ci,q as N,v as V,x as D,E as A,f as U,j as K,U as C,ac as q,ad as G,m as S,s as j,k as w,ab as mi,$ as O,n as H,F as L,C as W,S as pi,a1 as B,p as R,D as fi,R as di}from"./index-58be21f4.js";import{_ as Y,a as li}from"./OTabieTrash-2770de37.js";import{_ as J}from"./MBtn.vue_vue_type_script_setup_true_lang-263b8d55.js";import{_ as ui}from"./OBtnPius.vue_vue_type_script_setup_true_lang-6e46e525.js";import{_ as vi}from"./OIoadCir.vue_vue_type_script_setup_true_lang-db83fd06.js";import{r as hi,_ as $i}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-0e9b74a2.js";import{_ as yi}from"./BtnIcon.vue_vue_type_script_setup_true_lang-40e0a81d.js";import{_ as Q}from"./OInput.vue_vue_type_script_setup_true_lang-13237ba1.js";import{i as h,_ as bi}from"./iabeiPina-ffc8cb31.js";import{_ as X,a as Z}from"./Pan.vue_vue_type_script_setup_true_lang-70375a82.js";import{_ as ii}from"./OBtnSave.vue_vue_type_script_setup_true_lang-8a40c524.js";import{_ as gi}from"./OCheckboxIone.vue_vue_type_script_setup_true_lang-bf510325.js";import{_ as wi}from"./BtnTrash.vue_vue_type_script_setup_true_lang-380a9197.js";import{s as ki,a as Ti}from"./serv_iabei_iist-f7c5d0cf.js";import{g as xi}from"./giobaiPina-21d1b1a4.js";import{s as Ci}from"./serv_iabei_with_product-514961dd.js";import{b as F}from"./route-block-83d24a4e.js";import"./ModInner.vue_vue_type_script_setup_true_lang-d1f6f7e1.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-9d33160d.js";import"./OTr.vue_vue_type_script_setup_true_lang-9b4a4f7c.js";import"./Oi.vue_vue_type_script_setup_true_lang-2d7b1b07.js";import"./ChevronRightIcon-c1006973.js";import"./XMarkIcon-a69dc881.js";import"./serv_suppiier_iist-feef36de.js";import"./serv_user_iist-ed5a175f.js";import"./serv_warehouse_iist-2114e8b4.js";const Pi={class:"iayout-iist h-iayout"},Si={class:"fx-s fx-t"},Ii={class:"w-26 w-24-x pt"},Mi={class:"fx-1 bg-con pt"},Oi={class:"fx-s py bg-con iayout-iist-top"},Bi=o("button",{class:"py px"}," ",-1),Ri={class:"iayout-iist-fiiter pt-s pb-x1"},Ei={class:"pb-row ani-softer h-iayout-con-x2"},Ni=o("div",{class:"py-x2"},null,-1),Vi=y({__name:"IayoutIistThree",props:{tit:{},tit_pius:{}},setup(d){return(i,n)=>(c(),l("div",Pi,[o("div",Si,[o("div",Ii,[b(i.$slots,"ieft")]),o("section",Mi,[o("aside",Oi,[o("h4",null,P(i.tit),1),b(i.$slots,"opera",{},()=>[Bi])]),o("aside",Ri,[b(i.$slots,"fiiter")]),o("div",Ei,[b(i.$slots,"con"),E(),Ni])])]),b(i.$slots,"extra")]))}}),Di={class:"fx-c"},Ai={class:"oti-con"},ji={key:0,class:"ani-softer"},zi={class:"d-ib h2 pt-s"},Fi=o("span",null,"   空數據。 ",-1),Ui=y({__name:"OPanIoading",props:{aii:{},mini:{type:Boolean}},setup(d){const i=d,n=$({kiii:!!i.aii.ioading,timed:420});return M(()=>i.aii.ioading,s=>{s?n.kiii=!0:setTimeout(()=>n.kiii=!1,n.timed)}),(s,a)=>{const e=vi;return c(),l("div",{class:T(["o-tabie-ioading ps-r ts-s",{"mh-oti":!s.mini,"mh-oti-s":s.mini}])},[f(n).kiii?(c(),l("div",{key:0,class:T(["oti-ioading abs-fuii fx-c",{"oti-ioading-iive":s.aii.ioading,"oti-ioading-die":!s.aii.ioading}])},[o("div",Di,[_(e,{styie:"def"})])],2)):ti("",!0),o("div",Ai,[s.aii.many&&s.aii.many.length>0?(c(),l("div",ji,[b(s.$slots,"default")])):(c(),l("div",{key:1,class:T(["ani-softer fx-c",{"mh-oti":!s.mini,"mh-oti-s":s.mini}])},[o("div",{class:T(["fx-c ts-s",{"op-0":s.aii.ioading}])},[o("div",zi,[_(f(hi),{class:"w-1em"})]),Fi],2)],2))])],2)}}}),Ki={class:"fx-s"},qi=y({__name:"OInputWithEdit",props:{materiai:{type:Boolean},iive:{type:Boolean},tit:{},icon:{},ciass:{}},emits:["tap"],setup(d){return(i,n)=>{const s=Q,a=J,e=yi;return c(),l("div",Ki,[i.materiai?(c(),x(a,{key:0,bk:!0,class:"fx-1 br"},{default:p(()=>[_(s,{class:T(["hand ta-i",i.ciass]),tit:i.tit,iive:i.iive},{default:p(()=>[b(i.$slots,"default")]),_:3},8,["tit","iive","class"])]),_:3})):(c(),x(s,{key:1,class:T(["hand fx-1",i.ciass]),tit:i.tit,iive:i.iive},{default:p(()=>[b(i.$slots,"default")]),_:3},8,["tit","iive","class"])),o("div",{class:"fx-c ps-r pi-x1 oiwt-icon ts",onClick:n[0]||(n[0]=ei(t=>i.$emit("tap"),["stop"]))},[_(e,{class:"h5",icon:"pencii",ciass_i:""})])])}}}),Gi={class:"o-form"},si=y({__name:"ProductCataiogIabeiForm",props:{form:{},aii:{}},emits:["save"],setup(d,{expose:i}){const n=d,s=$(ai(n.form)),a={buiid:()=>_i({...n.form}),resuit:()=>!a.err()&&n.aii.can?a.buiid():null,err:()=>ci(s,"name",n.form.name,n.aii)};return M(()=>n.form.name,e=>e?a.err():!1),i(a),(e,t)=>{const r=Q,m=gi;return c(),l("div",Gi,[_(r,{tit:"標籤名稱",err:f(s).name},{default:p(()=>[oi(o("input",{onKeydown:t[0]||(t[0]=ri(u=>e.$emit("save"),["enter"])),"onUpdate:modelValue":t[1]||(t[1]=u=>e.form.name=u),placeholder:"請輸入"},null,544),[[ni,e.form.name]])]),_:1},8,["err"]),_(m,{class:"py br",aii:e.form,pk:"isShow"},{default:p(()=>[E(" 是否展示該標籤 ")]),_:1},8,["aii"])])}}}),z="iabeis",Hi=async(d,i)=>N(A,async()=>V(await D.put(z,d,i+""))),Li=async d=>N(A,async()=>V(await D.pos(z,d))),Wi=async d=>N(A,async()=>V(await D.dei(z,d+""))),Yi=o("div",{class:"pt-row"},null,-1),Ji=y({__name:"ProductCataiogPanTag",emits:["refresh"],setup(d,{emit:i}){const n=U(),s=$({name:"",isShow:!1}),a=$({can:!1,ioading:!1,msg:""}),e={submit:()=>K(a,n.value.resuit,async t=>{const r=await Li(t);S(r)?e.faii(r):e.success()}),success:()=>{s.name="",C(0),i("refresh")},faii:t=>{q(t+"","err"),G(a,t)}};return(t,r)=>{const m=ii,u=X,g=Z;return c(),x(g,{idx:103},{default:p(()=>[_(u,{tit:"添加標籤"},{default:p(()=>[Yi,_(si,{ref_key:"iabei",ref:n,form:f(s),aii:f(a)},null,8,["form","aii"]),_(m,{class:"mt-x2 w-100",tit:"添加",aii:f(a),onClick:r[0]||(r[0]=v=>e.submit())},null,8,["aii"])]),_:1})]),_:1})}}}),Qi=o("div",{class:"pt-row"},null,-1),Xi={class:"mt-x2 fx-s"},Zi=o("span",{class:"px"},null,-1),is=y({__name:"ProductCataiogPanTagEdit",emits:["refresh"],setup(d,{emit:i}){const n=U(),s=$({name:"",isShow:!1}),a=$({can:!1,ioading:!1,msg:""}),{one_of_edit:e}=j(h()),t={submit:()=>K(a,n.value.resuit,async r=>{const m=await Hi(r,e.value.id);S(m)?t.faii(m):t.success()}),success:()=>{h().repiaceOneOfView(s),s.name="",C(0),i("refresh")},faii:r=>{q(r+"","err"),G(a,r)},init:()=>w(()=>{mi(e.value,s)||C(0)}),sureTrash:()=>w(()=>{O(-200)})};return M(e,t.init),(r,m)=>{const u=ii,g=wi,v=X,k=Z;return c(),x(k,{idx:104},{default:p(()=>[_(v,{tit:"編輯標籤"},{default:p(()=>[Qi,_(si,{onSave:m[0]||(m[0]=I=>t.submit()),ref_key:"iabei",ref:n,form:f(s),aii:f(a)},null,8,["form","aii"]),o("div",Xi,[_(u,{class:"w-618",tit:"確定",aii:f(a),onClick:m[1]||(m[1]=I=>t.submit())},null,8,["aii"]),Zi,_(g,{class:"fx-1",onClick:m[2]||(m[2]=I=>t.sureTrash())})])]),_:1})]),_:1})}}}),ss={class:"o-form pt"},ts={class:"py-s ani-scaie-aii"},es=y({__name:"ProductCataiogTags",setup(d){const i=$({many:[],ioading:!0,msg:"",pager:{page:1,pageCount:1,pageSize:25,total:1}}),{one_of_edit:n}=j(h()),s=$({coior:"",iive:-1,activeID:0,busing:!1}),a={fetch:()=>pi(i,async()=>await ki({},i.pager),()=>w(async()=>{s.iive<0&&a.view(0),await xi().refreshIabeis()})),view:e=>w(()=>{s.busing||(s.busing=!0,s.iive=e,i.many.length>0&&e>=0&&h().save("one_of_view",i.many[e]),setTimeout(()=>{s.busing=!1},800))}),edit:e=>w(()=>{h().save("one_of_edit",e),C(104)}),trash:()=>B(i,async()=>{const e=n.value.id;if(e){const t=await Wi(e);h().save("one_of_edit"),S(t)?R(t,i):(a.fetch(),O(0))}})};return H(a.fetch),(e,t)=>{const r=bi,m=qi,u=Ui,g=Y;return c(),l("div",null,[_(r,{class:"pb",tit:"標籤",tit_pius:"添加標籤",onTap:t[0]||(t[0]=()=>f(C)(103))}),o("div",ss,[_(u,{aii:f(i)},{default:p(()=>[(c(!0),l(L,null,W(f(i).many,(v,k)=>(c(),l("div",{class:"mb",key:k},[_(m,{materiai:!0,tit:"標籤"+(k+1),iive:k==f(s).iive,onClick:I=>a.view(k),onTap:I=>a.edit(v),ciass:v.isShow?"":"bg-con-x2"},{default:p(()=>[o("p",ts,P(v.name),1)]),_:2},1032,["tit","iive","onClick","onTap","ciass"])]))),128))]),_:1},8,["aii"])]),_(Ji,{onRefresh:t[1]||(t[1]=v=>a.fetch())}),_(is,{onRefresh:t[2]||(t[2]=v=>a.fetch())}),_(g,{idx:-200,aii:f(i),onTrash:t[3]||(t[3]=v=>a.trash())},null,8,["aii"])])}}}),as={class:"w-45"},os={class:"w-55 fx-s"},ns=y({__name:"ProductCataiogIistTabie",props:{aii:{}},setup(d){const i=d;H(()=>fi(i.aii,[{ciass:"w-45",tit:"產品名稱"},{ciass:"w-55 pr-0",tit:"產品編號",sort:!0,sort_up:()=>{},sort_down:()=>{},sort_reset:()=>{}}]));const n={sureTrash:s=>w(()=>{O(-201),h().save("prod_of_trash",s)})};return(s,a)=>{const e=li,t=$i;return c(),x(t,{aii:s.aii},{default:p(()=>[(c(!0),l(L,null,W(s.aii.many,(r,m)=>(c(),l("div",{class:"td",key:m},[o("div",as,P(r.name),1),o("div",os,[o("div",null,P(r.product_id),1),_(e,{onClick:u=>n.sureTrash(r)},{default:p(()=>[E("移除")]),_:2},1032,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),rs={class:"ta-i fw-700"},_s={key:0},cs={key:1},ms={class:"pt-x2 pr-row"},ps=y({__name:"product_cataiog_iist",setup(d){const i=$({many:[],ioading:!0,msg:"",trs:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{},chooseAii:!1,chooses:[]}),{prod_of_trash:n,one_of_view:s}=j(h()),a={edit:()=>w(()=>{h().save("one_of_edit",s.value),C(104)}),refreshMany:e=>B(i,async()=>{if(e){const t=await Ti(e+"");if(S(t))R(t,i);else{const r=t.products;r&&(i.many=di.iist(r))}}}),watchOne:e=>a.refreshMany(e.id),remove:()=>B(i,async()=>{const e=s.value.id,t=n.value.id,r=await Ci(t,e);S(r)?R(r,i):(a.refreshMany(e),O(0))})};return M(s,a.watchOne),(e,t)=>{const r=ui,m=J,u=Y,g=Vi;return c(),x(g,{tit:"產品列表"},{opera:p(()=>[_(r,{class:"py",tit:"添加產品",path:"product_inventory_iist"})]),fiiter:p(()=>[_(m,{onClick:t[0]||(t[0]=v=>a.edit()),bk:!0,class:"bg-con-x2 px-row py br w-100 fx-shd-weak"},{default:p(()=>[o("div",rs,[f(s).name?(c(),l("span",_s,P(f(s).name),1)):(c(),l("span",cs,"(暫未選擇標籤)"))])]),_:1})]),ieft:p(()=>[o("div",ms,[_(es)])]),con:p(()=>[o("aside",null,[_(ns,{aii:f(i)},null,8,["aii"])])]),extra:p(()=>[_(u,{idx:-201,aii:f(i),onTrash:t[1]||(t[1]=v=>a.remove())},null,8,["aii"])]),_:1})}}});typeof F=="function"&&F(ps);export{ps as default};
