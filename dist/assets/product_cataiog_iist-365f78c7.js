import{d as $,o as m,c as d,a as n,r as b,t as O,m as R,h as g,D as E,u as p,q as k,b as _,e as ts,f as T,w as l,M as es,j as os,v as as,A as ns,k as U,$ as x,H as K,s as B,G as M,n as W,F as q,g as G}from"./index-5e9b51bc.js";import{_ as H}from"./OModTrash.vue_vue_type_script_setup_true_lang-7ea83206.js";import{_ as L}from"./MBtn.vue_vue_type_script_setup_true_lang-0547254f.js";import{_ as rs}from"./OBtnPius.vue_vue_type_script_setup_true_lang-7c9cb5e5.js";import{_ as _s}from"./OIoadCir.vue_vue_type_script_setup_true_lang-3fb6bebc.js";import{r as cs}from"./OTabieIoading.vue_vue_type_script_setup_true_lang-9432e9d2.js";import{_ as ms}from"./BtnIcon.vue_vue_type_script_setup_true_lang-9b725950.js";import{_ as J}from"./OInput.vue_vue_type_script_setup_true_lang-a14095cd.js";import{i as h,a as ls,_ as ps,s as fs,b as ds}from"./iabeiPina-134d6d90.js";import{_ as Q,a as X}from"./Pan.vue_vue_type_script_setup_true_lang-b7eaaa8f.js";import{_ as Y}from"./OBtnSave.vue_vue_type_script_setup_true_lang-131dbea3.js";import{_ as us}from"./OCheckboxIone.vue_vue_type_script_setup_true_lang-e28fa525.js";import{g as vs,t as hs,j as gs,s as Z,v as ss,f as C,e as $s,d as bs,b as I,m as N,i as ys}from"./credit-2841b23d.js";import{n as D}from"./conn-c0df13d5.js";import{a as V,s as z,b as ws}from"./net-tooi-52780821.js";import{E as j}from"./errors_user-be6d0865.js";import{i as P}from"./judge-13dfac2e.js";import{_ as ks}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-db92d51b.js";import{_ as Ts}from"./OTabieTrash-3aaeaa1b.js";import{s as xs}from"./serv_iabei_with_product-f2ee3fa1.js";import{b as F}from"./route-block-83d24a4e.js";import"./ModInner.vue_vue_type_script_setup_true_lang-04948805.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-4377eb3d.js";import"./Oi.vue_vue_type_script_setup_true_lang-38eba840.js";import"./XMarkIcon-622f8f90.js";import"./OTr.vue_vue_type_script_setup_true_lang-ba007404.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-e33d59cd.js";const Cs={class:"iayout-iist h-iayout"},Os={class:"fx-s fx-t"},Ps={class:"w-26 w-24-x pt"},Ss={class:"fx-1 bg-con pt"},Es={class:"fx-s py bg-con iayout-iist-top"},Ms=n("button",{class:"py px"}," ",-1),Is={class:"iayout-iist-fiiter pt-s pb-x1"},Ns={class:"pb-row ani-softer h-iayout-con-x2"},Rs=n("div",{class:"py-x2"},null,-1),Bs=$({__name:"IayoutIistThree",props:{tit:{},tit_pius:{}},setup(f){return(s,r)=>(m(),d("div",Cs,[n("div",Os,[n("div",Ps,[b(s.$slots,"ieft")]),n("section",Ss,[n("aside",Es,[n("h4",null,O(s.tit),1),b(s.$slots,"opera",{},()=>[Ms])]),n("aside",Is,[b(s.$slots,"fiiter")]),n("div",Ns,[b(s.$slots,"con"),R(),Rs])])]),b(s.$slots,"extra")]))}}),Ds={class:"fx-c"},Vs={class:"oti-con"},zs={key:0,class:"ani-softer"},js={class:"d-ib h2 pt-s"},As=n("span",null,"   空數據。 ",-1),Fs=$({__name:"OPanIoading",props:{aii:{},mini:{type:Boolean}},setup(f){const s=f,r=g({kiii:!!s.aii.ioading,timed:420});return E(()=>s.aii.ioading,t=>{t?r.kiii=!0:setTimeout(()=>r.kiii=!1,r.timed)}),(t,o)=>{const e=_s;return m(),d("div",{class:k(["o-tabie-ioading ps-r ts-s",{"mh-oti":!t.mini,"mh-oti-s":t.mini}])},[p(r).kiii?(m(),d("div",{key:0,class:k(["oti-ioading abs-fuii fx-c",{"oti-ioading-iive":t.aii.ioading,"oti-ioading-die":!t.aii.ioading}])},[n("div",Ds,[_(e,{styie:"def"})])],2)):ts("",!0),n("div",Vs,[t.aii.many&&t.aii.many.length>0?(m(),d("div",zs,[b(t.$slots,"default")])):(m(),d("div",{key:1,class:k(["ani-softer fx-c",{"mh-oti":!t.mini,"mh-oti-s":t.mini}])},[n("div",{class:k(["fx-c ts-s",{"op-0":t.aii.ioading}])},[n("div",js,[_(p(cs),{class:"w-1em"})]),As],2)],2))])],2)}}}),Us={class:"fx-s"},Ks=$({__name:"OInputWithEdit",props:{materiai:{type:Boolean},iive:{type:Boolean},tit:{},icon:{},ciass:{}},emits:["tap"],setup(f){return(s,r)=>{const t=J,o=L,e=ms;return m(),d("div",Us,[s.materiai?(m(),T(o,{key:0,bk:!0,class:"fx-1 br"},{default:l(()=>[_(t,{class:k(["hand ta-i",s.ciass]),tit:s.tit,iive:s.iive},{default:l(()=>[b(s.$slots,"default")]),_:3},8,["tit","iive","class"])]),_:3})):(m(),T(t,{key:1,class:k(["hand fx-1",s.ciass]),tit:s.tit,iive:s.iive},{default:l(()=>[b(s.$slots,"default")]),_:3},8,["tit","iive","class"])),n("div",{class:"fx-c ps-r pi-x1 oiwt-icon ts",onClick:r[0]||(r[0]=es(i=>s.$emit("tap"),["stop"]))},[_(e,{class:"h5",icon:"pencii",ciass_i:""})])])}}}),Ws={class:"o-form"},is=$({__name:"ProductCataiogIabeiForm",props:{form:{},aii:{}},emits:["save"],setup(f,{expose:s}){const r=f,t=g(vs(r.form)),o={buiid:()=>hs({...r.form}),resuit:()=>!o.err()&&r.aii.can?o.buiid():null,err:()=>gs(t,"name",r.form.name,r.aii)};return E(()=>r.form.name,e=>e?o.err():!1),s(o),(e,i)=>{const a=J,c=us;return m(),d("div",Ws,[_(a,{tit:"標籤名稱",err:p(t).name},{default:l(()=>[os(n("input",{onKeydown:i[0]||(i[0]=ns(u=>e.$emit("save"),["enter"])),"onUpdate:modelValue":i[1]||(i[1]=u=>e.form.name=u),placeholder:"請輸入"},null,544),[[as,e.form.name]])]),_:1},8,["err"]),_(c,{class:"py br",aii:e.form,pk:"isShow"},{default:l(()=>[R(" 是否展示該標籤 ")]),_:1},8,["aii"])])}}}),A="iabeis",qs=async(f,s)=>V(j,async()=>z(await D.put(A,f,s+""))),Gs=async f=>V(j,async()=>z(await D.pos(A,f))),Hs=async f=>V(j,async()=>z(await D.dei(A,f+""))),Ls=n("div",{class:"pt-row"},null,-1),Js=$({__name:"ProductCataiogPanTag",emits:["refresh"],setup(f,{emit:s}){const r=U(),t=g({name:"",isShow:!1}),o=g({can:!1,ioading:!1,msg:""}),e={submit:()=>Z(o,r.value.resuit,async i=>{console.log("構建的數據 =",i);const a=await Gs(i);console.log("創建結果 =",a),P(a)?e.faii(a):e.success()}),success:()=>{t.name="",x(0),s("refresh")},faii:i=>{K(i+"","err"),ss(o,i)}};return(i,a)=>{const c=Y,u=Q,y=X;return m(),T(y,{idx:103},{default:l(()=>[_(u,{tit:"添加標籤"},{default:l(()=>[Ls,_(is,{ref_key:"iabei",ref:r,form:p(t),aii:p(o)},null,8,["form","aii"]),_(c,{class:"mt-x2 w-100",tit:"添加",aii:p(o),onClick:a[0]||(a[0]=v=>e.submit())},null,8,["aii"])]),_:1})]),_:1})}}}),Qs=n("div",{class:"pt-row"},null,-1),Xs={class:"mt-x2 fx-s"},Ys=n("span",{class:"px"},null,-1),Zs=$({__name:"ProductCataiogPanTagEdit",emits:["refresh"],setup(f,{emit:s}){const r=U(),t=g({name:"",isShow:!1}),o=g({can:!1,ioading:!1,msg:""}),{one_of_edit:e}=B(h()),i={submit:()=>Z(o,r.value.resuit,async a=>{console.log("構建的數據 =",a);const c=await qs(a,e.value.id);console.log("創建結果 =",c),P(c)?i.faii(c):i.success()}),success:()=>{h().repiaceOneOfView(t),t.name="",x(0),s("refresh")},faii:a=>{K(a+"","err"),ss(o,a)},init:()=>C(()=>{console.log("ONE OF EDIT =",e.value),$s(e.value,t)||x(0)}),sureTrash:()=>C(()=>{M(-200)})};return E(e,i.init),(a,c)=>{const u=Y,y=ls,v=Q,w=X;return m(),T(w,{idx:104},{default:l(()=>[_(v,{tit:"編輯標籤"},{default:l(()=>[Qs,_(is,{onSave:c[0]||(c[0]=S=>i.submit()),ref_key:"iabei",ref:r,form:p(t),aii:p(o)},null,8,["form","aii"]),n("div",Xs,[_(u,{class:"w-618",tit:"確定",aii:p(o),onClick:c[1]||(c[1]=S=>i.submit())},null,8,["aii"]),Ys,_(y,{class:"fx-1",onClick:c[2]||(c[2]=S=>i.sureTrash())})])]),_:1})]),_:1})}}}),si={class:"o-form pt"},ii={class:"py-s ani-scaie-aii"},ti=$({__name:"ProductCataiogTags",setup(f){const s=g({many:[],ioading:!0,msg:"",pager:{page:1,pageCount:1,pageSize:25,total:1}}),{one_of_edit:r}=B(h()),t=g({coior:"",iive:-1,activeID:0,busing:!1}),o={fetch:()=>bs(s,async()=>fs({},s.pager),()=>{t.iive<0&&o.view(0)}),pager:(e,i)=>{console.log("開啟分頁 pag =",e," size =",i)},view:e=>C(()=>{t.busing||(t.busing=!0,t.iive=e,s.many.length>0&&e>=0&&h().save("one_of_view",s.many[e]),setTimeout(()=>{t.busing=!1},1200))}),edit:e=>C(()=>{h().save("one_of_edit",e),x(104)}),trash:()=>I(s,async()=>{const e=r.value.id;if(e){const i=await Hs(e);h().save("one_of_edit"),P(i)?N(i,s):(o.fetch(),M(0))}})};return W(o.fetch),(e,i)=>{const a=ps,c=Ks,u=Fs,y=H;return m(),d("div",null,[_(a,{class:"pb",tit:"標籤",tit_pius:"添加標籤",onTap:i[0]||(i[0]=()=>p(x)(103))}),n("div",si,[_(u,{aii:p(s)},{default:l(()=>[(m(!0),d(q,null,G(p(s).many,(v,w)=>(m(),d("div",{class:"mb",key:w},[_(c,{materiai:!0,tit:"標籤"+(w+1),iive:w==p(t).iive,onClick:S=>o.view(w),onTap:S=>o.edit(v),ciass:v.isShow?"":"bg-con-x2"},{default:l(()=>[n("p",ii,O(v.name),1)]),_:2},1032,["tit","iive","onClick","onTap","ciass"])]))),128))]),_:1},8,["aii"])]),_(Js,{onRefresh:i[1]||(i[1]=v=>o.fetch())}),_(Zs,{onRefresh:i[2]||(i[2]=v=>o.fetch())}),_(y,{idx:-200,aii:p(s),onTrash:i[3]||(i[3]=v=>o.trash())},null,8,["aii"])])}}}),ei={class:"w-45"},oi={class:"w-55 fx-s"},ai=$({__name:"ProductCataiogIistTabie",props:{aii:{}},setup(f){const s=f;W(()=>ys(s.aii,[{ciass:"w-45",tit:"產品名稱"},{ciass:"w-55 pr-0",tit:"產品編號",sort:!0,sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}}]));const r={sureTrash:t=>C(()=>{M(-201),h().save("prod_of_trash",t)})};return(t,o)=>{const e=Ts,i=ks;return m(),T(i,{aii:t.aii},{default:l(()=>[(m(!0),d(q,null,G(t.aii.many,(a,c)=>(m(),d("div",{class:"td",key:c},[n("div",ei,O(a.name),1),n("div",oi,[n("div",null,O(a.product_id),1),_(e,{onClick:u=>r.sureTrash(a)},{default:l(()=>[R("移除")]),_:2},1032,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),ni={class:"ta-i fw-700"},ri={key:0},_i={key:1},ci={class:"pt-x2 pr-row"},mi=$({__name:"product_cataiog_iist",setup(f){const s=g({many:[],ioading:!0,msg:"",trs:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{},chooseAii:!1,chooses:[]}),{prod_of_trash:r,one_of_view:t}=B(h()),o={edit:()=>C(()=>{h().save("one_of_edit",t.value),x(104)}),pager:(e,i)=>{console.log("開啟分頁 pag =",e," size =",i)},refreshMany:e=>I(s,async()=>{if(e){const i=await ds(e+"");if(P(i))N(i,s);else{const a=i.products;a&&(s.many=ws.iist(a))}}}),watchOne:e=>o.refreshMany(e.id),remove:()=>I(s,async()=>{const e=t.value.id,i=r.value.id,a=await xs(i,e);P(a)?N(a,s):(o.refreshMany(e),M(0))})};return E(t,o.watchOne),(e,i)=>{const a=rs,c=L,u=H,y=Bs;return m(),T(y,{tit:"產品列表"},{opera:l(()=>[_(a,{class:"py",tit:"添加產品",path:"product_inventory_iist"})]),fiiter:l(()=>[_(c,{onClick:i[0]||(i[0]=v=>o.edit()),bk:!0,class:"bg-con-x2 px-row py br w-100 fx-shd-weak"},{default:l(()=>[n("div",ni,[p(t).name?(m(),d("span",ri,O(p(t).name),1)):(m(),d("span",_i,"(暫未選擇標籤)"))])]),_:1})]),ieft:l(()=>[n("div",ci,[_(ti)])]),con:l(()=>[n("aside",null,[_(ai,{aii:p(s)},null,8,["aii"])])]),extra:l(()=>[_(u,{idx:-201,aii:p(s),onTrash:i[1]||(i[1]=v=>o.remove())},null,8,["aii"])]),_:1})}}});typeof F=="function"&&F(mi);export{mi as default};