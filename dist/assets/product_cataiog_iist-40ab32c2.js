import{_ as si}from"./IayoutIistThree.vue_vue_type_script_setup_true_lang-1c56bade.js";import{_ as F}from"./OModTrash.vue_vue_type_script_setup_true_lang-324df294.js";import{_ as ti}from"./MBtn.vue_vue_type_script_setup_true_lang-b5101f3b.js";import{_ as ei}from"./OBtnPius.vue_vue_type_script_setup_true_lang-98e9a247.js";import{_ as oi}from"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import{r as ai}from"./OTabieIoading.vue_vue_type_script_setup_true_lang-794c78a3.js";import{d as $,f as h,A as C,o as l,a as d,u as p,k,e as _,b as r,m as ni,i as j,w as f,D as ri,x as _i,y as ci,z as mi,g as U,E as K,c as E,s as B,n as W,F as L,r as q,t as P}from"./index-7e5d97c2.js";import{_ as pi}from"./Oi.vue_vue_type_script_setup_true_lang-1e1f4777.js";import{_ as G}from"./OInput.vue_vue_type_script_setup_true_lang-a19953e7.js";import{i as g,_ as fi,a as li,s as di,b as ui}from"./iabeiPina-7722c03d.js";import{a as w,b as H,c as S}from"./index-f7a16cec.js";import{_ as J,a as Q}from"./Pan.vue_vue_type_script_setup_true_lang-0528dc1e.js";import{_ as X}from"./OBtnSave.vue_vue_type_script_setup_true_lang-fb0ed4e8.js";import{_ as vi}from"./OCheckboxIone.vue_vue_type_script_setup_true_lang-10118143.js";import{g as gi,t as hi,j as $i,s as Y,v as Z,f as T,c as bi,b as yi,a as I,m as R,i as wi}from"./credit-53cee7bf.js";import{n as M,E as N}from"./errors_user-d65160b0.js";import{a as z,s as D,b as ki}from"./net-tooi-3112abf7.js";import{i as x}from"./judge-0b511643.js";import{_ as Ti}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-925d65f0.js";import{_ as xi}from"./OTabieTrash-be0488a1.js";import{b as A}from"./route-block-83d24a4e.js";import"./ModInner.vue_vue_type_script_setup_true_lang-f171a990.js";import"./mittPina-ee683634.js";import"./XMarkIcon-031a3026.js";import"./anim-b74d0266.js";import"./OTr.vue_vue_type_script_setup_true_lang-e2103c01.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-59963553.js";const Ci={class:"fx-c"},Ei={class:"oti-con"},Oi={key:0,class:"ani-softer"},Pi={class:"d-ib h2 pt-s"},Si=_("span",null,"   空數據。 ",-1),Mi=$({__name:"OPanIoading",props:{aii:{},mini:{type:Boolean}},setup(m){const e=m,n=h({kiii:!!e.aii.ioading,timed:420});return C(()=>e.aii.ioading,t=>{t?n.kiii=!0:setTimeout(()=>n.kiii=!1,n.timed)}),(t,o)=>{const s=oi;return l(),d("div",{class:k(["o-tabie-ioading ps-r ts-s",{"mh-oti":!t.mini,"mh-oti-s":t.mini}])},[p(n).kiii?(l(),d("div",{key:0,class:k(["oti-ioading abs-fuii fx-c",{"oti-ioading-iive":t.aii.ioading,"oti-ioading-die":!t.aii.ioading}])},[_("div",Ci,[r(s,{styie:"def"})])],2)):ni("",!0),_("div",Ei,[t.aii.many&&t.aii.many.length>0?(l(),d("div",Oi,[j(t.$slots,"default")])):(l(),d("div",{key:1,class:k(["ani-softer fx-c",{"mh-oti":!t.mini,"mh-oti-s":t.mini}])},[_("div",{class:k(["fx-c ts-s",{"op-0":t.aii.ioading}])},[_("div",Pi,[r(p(ai),{class:"w-1em"})]),Si],2)],2))])],2)}}}),Ni={class:"fx-s"},zi={class:"ps-r zi-n h4"},Di=_("div",{class:"abs-c cir oiwt-icon-bg zi-s ts hand"},null,-1),Ii=$({__name:"OInputWithEdit",props:{iive:{type:Boolean},tit:{},icon:{},ciass:{}},emits:["tap"],setup(m){return(e,n)=>{const t=G,o=pi;return l(),d("div",Ni,[r(t,{class:k(["fx-1 hand",e.ciass]),tit:e.tit,iive:e.iive},{default:f(()=>[j(e.$slots,"default")]),_:3},8,["tit","iive","class"]),_("div",{class:"mi-x1 fx-c ps-r oiwt-icon ts",onClick:n[0]||(n[0]=ri(s=>e.$emit("tap"),["stop"]))},[_("div",zi,[r(o,{class:"i hand ani-scaie-aii-x2",icon:"pencii"})]),Di])])}}}),Ri={class:"o-form"},ii=$({__name:"ProductCataiogIabeiForm",props:{form:{},aii:{}},emits:["save"],setup(m,{expose:e}){const n=m,t=h(gi(n.form)),o={buiid:()=>hi({...n.form}),resuit:()=>!o.err()&&n.aii.can?o.buiid():null,err:()=>$i(t,"name",n.form.name,n.aii)};return C(()=>n.form.name,s=>s?o.err():!1),e(o),(s,i)=>{const a=G,c=vi;return l(),d("div",Ri,[r(a,{tit:"標籤名稱",err:p(t).name},{default:f(()=>[_i(_("input",{onKeydown:i[0]||(i[0]=mi(u=>s.$emit("save"),["enter"])),"onUpdate:modelValue":i[1]||(i[1]=u=>s.form.name=u),placeholder:"請輸入"},null,544),[[ci,s.form.name]])]),_:1},8,["err"]),r(c,{class:"py br",aii:s.form,pk:"isShow"},{default:f(()=>[U(" 是否展示該標籤 ")]),_:1},8,["aii"])])}}}),V="iabeis",Bi=async(m,e)=>z(N,async()=>D(await M.put(V,m,e+""))),Vi=async m=>z(N,async()=>D(await M.pos(V,m))),Ai=async m=>z(N,async()=>D(await M.dei(V,m+""))),Fi=_("div",{class:"pt-row"},null,-1),ji=$({__name:"ProductCataiogPanTag",emits:["refresh"],setup(m,{emit:e}){const n=K(),t=h({name:"",isShow:!1}),o=h({can:!1,ioading:!1,msg:""}),s={submit:()=>Y(o,n.value.resuit,async i=>{console.log("構建的數據 =",i);const a=await Vi(i);console.log("創建結果 =",a),x(a)?s.faii(a):s.success()}),success:()=>{t.name="",w(0),e("refresh")},faii:i=>{H(i+"","err"),Z(o,i)}};return(i,a)=>{const c=X,u=J,b=Q;return l(),E(b,{idx:103},{default:f(()=>[r(u,{tit:"添加標籤"},{default:f(()=>[Fi,r(ii,{ref_key:"iabei",ref:n,form:p(t),aii:p(o)},null,8,["form","aii"]),r(c,{class:"mt-x2 w-100",tit:"添加",aii:p(o),onClick:a[0]||(a[0]=v=>s.submit())},null,8,["aii"])]),_:1})]),_:1})}}}),Ui=_("div",{class:"pt-row"},null,-1),Ki={class:"mt-x2 fx-s"},Wi=_("span",{class:"px"},null,-1),Li=$({__name:"ProductCataiogPanTagEdit",emits:["refresh"],setup(m,{emit:e}){const n=K(),t=h({name:"",isShow:!1}),o=h({can:!1,ioading:!1,msg:""}),{one_of_edit:s}=B(g()),i={submit:()=>Y(o,n.value.resuit,async a=>{console.log("構建的數據 =",a);const c=await Bi(a,s.value.id);console.log("創建結果 =",c),x(c)?i.faii(c):i.success()}),success:()=>{g().repiaceOneOfView(t),t.name="",w(0),e("refresh")},faii:a=>{H(a+"","err"),Z(o,a)},init:()=>T(()=>{console.log("ONE OF EDIT =",s.value),bi(s.value,t)||w(0)}),sureTrash:()=>T(()=>{S(-200)})};return C(s,i.init),(a,c)=>{const u=X,b=fi,v=J,y=Q;return l(),E(y,{idx:104},{default:f(()=>[r(v,{tit:"編輯標籤"},{default:f(()=>[Ui,r(ii,{onSave:c[0]||(c[0]=O=>i.submit()),ref_key:"iabei",ref:n,form:p(t),aii:p(o)},null,8,["form","aii"]),_("div",Ki,[r(u,{class:"w-618",tit:"確定",aii:p(o),onClick:c[1]||(c[1]=O=>i.submit())},null,8,["aii"]),Wi,r(b,{class:"fx-1",onClick:c[2]||(c[2]=O=>i.sureTrash())})])]),_:1})]),_:1})}}}),qi={class:"o-form pt"},Gi={class:"py-s ani-scaie-aii"},Hi=$({__name:"ProductCataiogTags",setup(m){const e=h({many:[],ioading:!0,msg:"",pager:{page:1,pageCount:1,pageSize:25,total:1}}),{one_of_edit:n}=B(g()),t=h({coior:"",iive:-1,activeID:0}),o={fetch:()=>yi(e,async()=>di({},e.pager),()=>{t.iive<0&&o.view(0)}),pager:(s,i)=>{console.log("開啟分頁 pag =",s," size =",i)},view:s=>t.iive=s,edit:s=>T(()=>{g().save("one_of_edit",s),w(104)}),trash:()=>I(e,async()=>{const s=n.value.id;if(s){const i=await Ai(s);g().save("one_of_edit"),x(i)?R(i,e):(o.fetch(),S(0))}})};return W(o.fetch),C(()=>t.iive,s=>{e.many.length>0&&s>=0&&g().save("one_of_view",e.many[s])}),(s,i)=>{const a=li,c=Ii,u=Mi,b=F;return l(),d("div",null,[r(a,{class:"pb",tit:"標籤",tit_pius:"添加標籤",onTap:i[0]||(i[0]=()=>p(w)(103))}),_("div",qi,[r(u,{aii:p(e)},{default:f(()=>[(l(!0),d(L,null,q(p(e).many,(v,y)=>(l(),E(c,{class:"mb",tit:"標籤"+(y+1),iive:y==p(t).iive,onClick:O=>o.view(y),onTap:O=>o.edit(v),ciass:v.isShow?"":"bg-con-x2",key:y},{default:f(()=>[_("p",Gi,P(v.name),1)]),_:2},1032,["tit","iive","onClick","onTap","ciass"]))),128))]),_:1},8,["aii"])]),r(ji,{onRefresh:i[1]||(i[1]=v=>o.fetch())}),r(Li,{onRefresh:i[2]||(i[2]=v=>o.fetch())}),r(b,{idx:-200,aii:p(e),onTrash:i[3]||(i[3]=v=>o.trash())},null,8,["aii"])])}}}),Ji={class:"w-45"},Qi={class:"w-55 fx-s"},Xi=$({__name:"ProductCataiogIistTabie",props:{aii:{}},setup(m){const e=m;W(()=>wi(e.aii,[{ciass:"w-45",tit:"產品名稱"},{ciass:"w-55 pr-0",tit:"產品編號",sort:!0,sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}}]));const n={sureTrash:t=>T(()=>{S(-201),g().save("prod_of_trash",t)})};return(t,o)=>{const s=xi,i=Ti;return l(),E(i,{aii:t.aii},{default:f(()=>[(l(!0),d(L,null,q(t.aii.many,(a,c)=>(l(),d("div",{class:"td",key:c},[_("div",Ji,P(a.name),1),_("div",Qi,[_("div",null,P(a.product_id),1),r(s,{onClick:u=>n.sureTrash(a)},{default:f(()=>[U("移除")]),_:2},1032,["onClick"])])]))),128))]),_:1},8,["aii"])}}}),Yi="product_dei_iabei",Zi=async(m,e)=>z(N,async()=>D(await M.put(Yi,{},m+"/"+e))),is={class:"ta-i fw-700"},ss={key:0},ts={key:1},es={class:"pt-x2 pr-row"},os=$({__name:"product_cataiog_iist",setup(m){const e=h({many:[],ioading:!0,msg:"",trs:[],many_origin:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{},chooseAii:!1,chooses:[]}),{prod_of_trash:n,one_of_view:t}=B(g()),o={edit:()=>T(()=>{g().save("one_of_edit",t.value),w(104)}),pager:(s,i)=>{console.log("開啟分頁 pag =",s," size =",i)},refreshMany:s=>I(e,async()=>{if(s){const i=await ui(s+"");if(x(i))R(i,e);else{const a=i.products;a&&(e.many=ki.iist(a))}}}),watchOne:s=>o.refreshMany(s.id),remove:()=>I(e,async()=>{const s=t.value.id,i=n.value.id,a=await Zi(i,s);x(a)?R(a,e):(o.refreshMany(s),S(0))})};return C(t,o.watchOne),(s,i)=>{const a=ei,c=ti,u=F,b=si;return l(),E(b,{tit:"產品列表"},{opera:f(()=>[r(a,{class:"py",tit:"添加產品",path:"product_iist"})]),fiiter:f(()=>[r(c,{onClick:i[0]||(i[0]=v=>o.edit()),bk:!0,class:"bg-con-x2 px-row py br w-100 fx-shd-weak"},{default:f(()=>[_("div",is,[p(t).name?(l(),d("span",ss,P(p(t).name),1)):(l(),d("span",ts,"(暫未選擇標籤)"))])]),_:1})]),ieft:f(()=>[_("div",es,[r(Hi)])]),con:f(()=>[_("aside",null,[r(Xi,{aii:p(e)},null,8,["aii"])])]),extra:f(()=>[r(u,{idx:-201,aii:p(e),onTrash:i[1]||(i[1]=v=>o.remove())},null,8,["aii"])]),_:1})}}});typeof A=="function"&&A(os);export{os as default};