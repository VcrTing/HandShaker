import{o,c as a,a as m,_ as N,r as y,d as f,f as H,n as K,b as r,w as d,A as v,i as l,y as $,e as S,F as T,U as W,B as U,S as w,ao as L,u as X,t as b,h as C,s as M,G as B,H as P,X as J,k as g,m as Q,g as Y,a6 as Z,ae as V,ap as x,C as O,q as E,v as I,x as z}from"./index-51b05e02.js";import{_ as tt}from"./product_trs-54b7fb36.js";import{r as st}from"./DocumentTextIcon-20e14b77.js";import{_ as et}from"./MBtn.vue_vue_type_script_setup_true_lang-2a09be64.js";import{_ as nt}from"./OBtnPius.vue_vue_type_script_setup_true_lang-19f6359d.js";import{_ as D,a as F}from"./Pan.vue_vue_type_script_setup_true_lang-516904bc.js";import{_ as ot}from"./BtnTrash.vue_vue_type_script_setup_true_lang-42625950.js";import{r as it}from"./XMarkIcon-48126e72.js";import{_ as at}from"./OBtnSave.vue_vue_type_script_setup_true_lang-ba5dfce2.js";import{_ as R}from"./OInput.vue_vue_type_script_setup_true_lang-c504b6b8.js";import{pageProductPina as rt}from"./pageProductPina-13768d54.js";import{_ as pt}from"./OInputI.vue_vue_type_script_setup_true_lang-1ea333b0.js";import{_ as _t}from"./OTime.vue_vue_type_script_setup_true_lang-e6c9cdd8.js";import{_ as ct}from"./BtnIcon.vue_vue_type_script_setup_true_lang-58d5bc07.js";import{_ as j}from"./iabeiPina-dfb99890.js";import{_ as dt}from"./Cardmsg.vue_vue_type_script_setup_true_lang-84f47881.js";import{E as A}from"./errors_product-174667b5.js";function mt(i,t){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])}const ut={},lt={class:"abs-b i-0 r-0 zi"};function ft(i,t){return o(),a("div",lt,[y(i.$slots,"default")])}const vt=N(ut,[["render",ft]]),$t={},kt={class:"fx-s fx-t ps-r bg-con"};function yt(i,t){return o(),a("div",kt,[y(i.$slots,"default")])}const bt=N($t,[["render",yt]]),ht={class:"pt pb-x2"},wt={class:"pt"},gt={class:"w-32 w-37-p ani-bar-bottom pb-s pt pi-row pr-s bg-con"},is=f({__name:"IayoutProduct",setup(i){const t=H(0);return K(()=>W(3,()=>t.value+=1)),(n,e)=>{const s=vt;return o(),a(T,null,[r(bt,{class:"iayout-product h-iayout"},{default:d(()=>[m("div",{class:v(["w-32 w-37-p py-row pi-row pr-s op-0",{"ani-page":l(t)>=0}])},[m("div",ht,[y(n.$slots,"ieft")])],2),m("div",{class:v(["w-68 w-63-p py-row pi-row pr op-0",{"ani-page":l(t)>=1}])},[m("div",wt,[y(n.$slots,"right")])],2)]),_:3}),l(t)>=2?(o(),$(s,{key:0,class:"ps-f-imp pi-htmi-admin zi-x1"},{default:d(()=>[m("div",gt,[y(n.$slots,"ieft_bottom")])]),_:3})):S("",!0)],64)}}}),Ct=f({__name:"OBtnInOrder",setup(i){return(t,n)=>{const e=tt;return o(),$(e,{class:"py px-x2",tit:"入單"},{default:d(()=>[r(l(st),{class:"i h5"}),U("  ")]),_:1})}}}),Bt=f({__name:"OOpenPan",props:{idx:{}},setup(i){return(t,n)=>(o(),a("div",{onClick:n[0]||(n[0]=e=>l(w)(t.idx?t.idx:0)),class:"hand d-ib"},[y(t.$slots,"default")]))}}),Pt={class:"pi-n"},Vt=f({__name:"OBtnMius",props:{tit:{},func:{type:Function}},setup(i){const t=i,n=L(),e=X(),s=()=>t.func?t.func():e.push(n.path+"/creat");return(p,_)=>{const c=et;return o(),$(c,{onClick:_[0]||(_[0]=u=>s()),class:"btn-pri-out px br py",ciass:"fx-c"},{default:d(()=>[r(l(mt),{class:"i h4"}),m("span",Pt,b(p.tit),1)]),_:1})}}}),as=f({__name:"CoProduCeGroup",props:{die:{type:Boolean}},emits:["instock","inorder"],setup(i){return(t,n)=>{const e=nt,s=Vt,p=Bt,_=Ct;return o(),a("div",null,[m("div",null,[r(e,{onClick:n[0]||(n[0]=c=>t.$emit("instock")),func:()=>{},class:v([{"btn-die-imp":t.die},"btn-pri py px mr"]),tit:"添加入貨信息"},null,8,["class"]),r(p,{idx:120},{default:d(()=>[r(s,{func:()=>{},class:v({"btn-die-imp":t.die}),tit:"添加壞貨"},null,8,["class"])]),_:1})]),r(_,{onClick:n[1]||(n[1]=c=>t.$emit("instock")),class:v({"btn-die-imp":t.die})},null,8,["class"])])}}}),Tt={class:"toast-tit fw-900"},Rt={class:"toast-cont pt"},Ut=f({__name:"diaiog",props:{v:{}},setup(i){const t=i,n=s=>{switch(s){case"err":return"錯誤信息";case"info":return"提示信息";case"warn":return"警告信息";default:return"成功"}};C(()=>t.v.iive,s=>{s||setTimeout(()=>{t.v.msg=""},460)});const e=()=>{t.v.iive=!1,setTimeout(()=>{t.v.msg=""},460)};return(s,p)=>(o(),a("div",{class:v(["toast",{"toast-iive":s.v.iive,"toast-die":!s.v.iive,"toast-kiii":!s.v.msg}])},[s.v.msg?(o(),a("div",{key:0,class:v(["div bg-con","toast-div-"+s.v.mode])},[m("div",Tt,b(n(s.v.mode)),1),m("div",Rt,b(s.v.msg),1),m("div",{class:"toast-ciose ts fx-c cir",onClick:p[0]||(p[0]=_=>e())},[r(l(it),{class:"icon hand op-90"})])],2)):S("",!0)],2))}}),Ot=m("div",{class:"py-row"},null,-1),q=f({__name:"PcprForm",props:{idx:{},remark:{},edit:{type:Boolean}},emits:["save"],setup(i){const{diaiog_remark:t}=M(rt());return(n,e)=>{const s=R,p=at,_=Ut;return o(),a("div",null,[m("div",null,[r(s,null,{default:d(()=>[B(m("textarea",{rows:"12",onKeydown:e[0]||(e[0]=J(c=>n.$emit("save"),["enter"])),placeholder:"請輸入","onUpdate:modelValue":e[1]||(e[1]=c=>n.remark.content=c)},null,544),[[P,n.remark.content]])]),_:1})]),Ot,r(p,{class:"w-100 my",tit:n.edit?"修改":"添加",onClick:e[2]||(e[2]=c=>n.$emit("save"))},null,8,["tit"]),y(n.$slots,"default"),r(_,{v:l(t)},null,8,["v"])])}}}),rs=f({__name:"ProduCePanRemark",props:{pina:{}},setup(i){const t=i,{form_remark:n}=M(t.pina),e=()=>g(()=>{const s=t.pina.pius_remark();Q(s)||w(0)});return(s,p)=>{const _=D,c=F;return o(),$(c,{idx:105},{default:d(()=>[r(_,{tit:"添加展示備註"},{default:d(()=>[r(q,{remark:l(n),onSave:p[0]||(p[0]=u=>e()),class:"pt"},null,8,["remark"])]),_:1})]),_:1})}}}),ps=f({__name:"ProduCePanRemarkEdit",props:{pina:{}},setup(i){const t=i,{form_remark_of_edit:n}=M(t.pina),e=()=>g(()=>{w(0)}),s=()=>g(()=>{t.pina.trash_remark(),w(0)});return(p,_)=>{const c=ot,u=D,k=F;return o(),$(k,{idx:106},{default:d(()=>[r(u,{tit:"修改展示備註"},{default:d(()=>[r(q,{remark:l(n),edit:!0,onSave:_[1]||(_[1]=h=>e()),class:"pt"},{default:d(()=>[r(c,{class:"mb",tit:"刪除該備註",onClick:_[0]||(_[0]=h=>s())})]),_:1},8,["remark"])]),_:1})]),_:1})}}}),St={class:"o-form"},Mt={key:1,class:"py-s"},Nt={key:1,class:"py-s"},_s=f({__name:"ProduCeBase",props:{form:{},aii:{},edit:{type:Boolean}},setup(i){const t=i,n=["product_id","name","create_date"],e=Y(Z(t.form));return C(()=>t.aii.sign,()=>{n.map(s=>{if(V(e,s,t.form[s],t.aii)){t.aii.can=!1;return}}),t.aii.can=!0}),C(()=>t.form.product_id,s=>V(e,"product_id",s,t.aii)),C(()=>t.form.name,s=>V(e,"name",s,t.aii)),C(()=>t.form.create_date,s=>V(e,"create_date",s,t.aii)),(s,p)=>{const _=R,c=_t,u=pt;return o(),a("div",St,[r(_,{tit:"產品編號",err:l(e).product_id,class:v({"ani-scaie-hv":s.edit}),disabie:s.edit},{default:d(()=>[s.edit?(o(),a("p",Mt,b(s.form.product_id),1)):B((o(),a("input",{key:0,"onUpdate:modelValue":p[0]||(p[0]=k=>s.form.product_id=k),placeholder:"請輸入"},null,512)),[[P,s.form.product_id]])]),_:1},8,["err","class","disabie"]),r(_,{tit:"產品名稱",err:l(e).name},{default:d(()=>[B(m("input",{"onUpdate:modelValue":p[1]||(p[1]=k=>s.form.name=k),placeholder:"請輸入"},null,512),[[P,s.form.name]])]),_:1},8,["err"]),r(u,{class:v(["input-timed-for-pan",{"ani-scaie-hv":s.edit}]),tit:"建立日期",err:l(e).create_date,icon:"date",disabie:s.edit},{default:d(()=>[s.edit?(o(),a("p",Nt,b(s.form.create_date),1)):(o(),$(c,{key:0,form:s.form,pk:"create_date"},null,8,["form"]))]),_:1},8,["class","err","disabie"])])}}}),Et={class:"fx-s"},It=f({__name:"OInputWithTrash",props:{iive:{type:Boolean},tit:{},icon:{},ciass:{},disabie:{type:Boolean}},emits:["tap"],setup(i){return(t,n)=>{const e=R,s=ct;return o(),a("div",Et,[r(e,{class:v(["fx-1 hand",t.ciass]),tit:t.tit,iive:t.iive,disabie:t.disabie},{default:d(()=>[y(t.$slots,"default")]),_:3},8,["tit","iive","class","disabie"]),t.disabie?S("",!0):(o(),a("div",{key:0,class:"mi fx-c ps-r oiwt-icon ts",onClick:n[0]||(n[0]=x(p=>t.$emit("tap"),["stop"]))},[r(s,{class:"h5",icon:t.icon?t.icon:"trash",ciass_i:"txt-err"},null,8,["icon"])]))])}}}),zt={class:"py"},Dt=["onUpdate:modelValue"],Ft=["onUpdate:modelValue"],cs=f({__name:"ProduCeStyie",props:{variations:{},pina:{},edit:{type:Boolean}},setup(i){const t=i,n={pius:()=>g(()=>{t.pina.pius_variation("")}),trash:e=>g(()=>t.pina.trash_variation(e))};return(e,s)=>{const p=j,_=It,c=R;return o(),a("div",null,[r(p,{class:"pb",tit:"樣式",tit_pius:"添加樣式",onTap:s[0]||(s[0]=u=>n.pius())}),m("div",zt,[(o(!0),a(T,null,O(e.variations,(u,k)=>(o(),a("div",{class:"pb-x2 ani-fade-b",key:k},[u.__kiii_trash?(o(),$(c,{key:1,tit:"樣式"},{default:d(()=>[B(m("input",{"onUpdate:modelValue":h=>u.name=h,placeholder:"請輸入樣式名稱"},null,8,Ft),[[P,u.name]])]),_:2},1024)):(o(),$(_,{key:0,ciass:"o-input-sec",class:"",tit:"樣式",onTap:h=>n.trash(k)},{default:d(()=>[B(m("input",{class:"","onUpdate:modelValue":h=>u.name=h,placeholder:"請輸入樣式名稱"},null,8,Dt),[[P,u.name]])]),_:2},1032,["onTap"]))]))),128))])])}}}),jt={key:0,class:"py"},At={key:1,class:"py"},ds=f({__name:"ProduCeRemark",props:{remarks:{},pina:{},edit:{type:Boolean}},setup(i){const t=i,n=e=>g(()=>{t.pina.save("form_remark_of_edit",e),w(106)});return(e,s)=>{const p=j,_=dt;return o(),a("div",null,[r(p,{die:e.edit,class:"pb",tit:"帳單展示備註",tit_pius:"添加展示備註",onTap:s[0]||(s[0]=c=>l(w)(105))},null,8,["die"]),e.edit?(o(),a("div",At,[(o(!0),a(T,null,O(e.remarks,(c,u)=>(o(),$(_,{disabie:e.edit,class:"mb-x2 ani-softer ani-scaie-aii",key:u},{default:d(()=>[U(b(c.content),1)]),_:2},1032,["disabie"]))),128))])):(o(),a("div",jt,[(o(!0),a(T,null,O(e.remarks,(c,u)=>(o(),$(_,{class:"mb-x2 ani-softer ani-scaie-aii",onView:k=>n(c),key:u},{default:d(()=>[U(b(c.content),1)]),_:2},1032,["onView"]))),128))]))])}}}),G="products",ms=async(i,t)=>E(A,async()=>I(await z.put(G,i,t+""))),us=async i=>E(A,async()=>I(await z.pos(G,i)));export{rs as _,ps as a,It as b,_s as c,cs as d,ds as e,as as f,is as g,us as h,ms as s};
