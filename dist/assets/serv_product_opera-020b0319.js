import{o,e as _,b as d,_ as S,r as b,d as f,p as W,k as G,a,w as m,n as $,u as l,c as v,f as O,F as T,i as R,t as y,L as H,q as J,j as g,s as N,m as C,v as B,B as Q,D as P,g as X,M as Y,l as M}from"./index-ecdfbad0.js";import{c as Z,f as w,h as x,k as V}from"./credit-f7bb6a57.js";import{_ as D}from"./MBtn.vue_vue_type_script_setup_true_lang-06b927df.js";import{r as tt}from"./Oi.vue_vue_type_script_setup_true_lang-3b88d7e5.js";import{_ as st}from"./OOpenPan.vue_vue_type_script_setup_true_lang-0f4f5ba0.js";import{_ as et}from"./OBtnPius.vue_vue_type_script_setup_true_lang-1c8cc024.js";import{_ as E,a as I}from"./Pan.vue_vue_type_script_setup_true_lang-2acb7758.js";import{i as nt}from"./iodash-8a8cb9b0.js";import{a as ot,_ as j}from"./iabeiPina-b35a9c57.js";import{r as it}from"./XMarkIcon-939f3d4f.js";import{_ as at}from"./OBtnSave.vue_vue_type_script_setup_true_lang-19e7a200.js";import{_ as U}from"./OInput.vue_vue_type_script_setup_true_lang-c288ee49.js";import{pageProductPina as rt}from"./pageProductPina-715d6f67.js";import{_ as pt}from"./OInputI.vue_vue_type_script_setup_true_lang-834f1076.js";import{_ as _t}from"./OTime.vue_vue_type_script_setup_true_lang-b87ef999.js";import{_ as ct}from"./BtnIcon.vue_vue_type_script_setup_true_lang-0d4b5b7c.js";import{_ as mt}from"./Cardmsg.vue_vue_type_script_setup_true_lang-e5db0cad.js";import{n as z}from"./conn-18cb3692.js";import{a as F,s as q}from"./net-tooi-4fdf0d83.js";import{E as A}from"./errors_product-174667b5.js";function dt(i,t){return o(),_("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])}const ut={},lt={class:"abs-b i-0 r-0 zi"};function ft(i,t){return o(),_("div",lt,[b(i.$slots,"default")])}const vt=S(ut,[["render",ft]]),$t={},kt={class:"fx-s fx-t ps-r bg-con"};function bt(i,t){return o(),_("div",kt,[b(i.$slots,"default")])}const yt=S($t,[["render",bt]]),ht={class:"pt pb-x2"},wt={class:"pt"},gt={class:"w-32 w-37-p ani-bar-bottom pb-s pt pi-row pr-s bg-con"},ps=f({__name:"IayoutProduct",setup(i){const t=W(0);return G(()=>Z(3,()=>t.value+=1)),(n,e)=>{const s=vt;return o(),_(T,null,[a(yt,{class:"iayout-product h-iayout"},{default:m(()=>[d("div",{class:$(["w-32 w-37-p py-row pi-row pr-s op-0",{"ani-page":l(t)>=0}])},[d("div",ht,[b(n.$slots,"ieft")])],2),d("div",{class:$(["w-68 w-63-p py-row pi-row pr op-0",{"ani-page":l(t)>=1}])},[d("div",wt,[b(n.$slots,"right")])],2)]),_:3}),l(t)>=2?(o(),v(s,{key:0,class:"ps-f-imp pi-htmi-admin zi-x1"},{default:m(()=>[d("div",gt,[b(n.$slots,"ieft_bottom")])]),_:3})):O("",!0)],64)}}}),Ct=f({__name:"BtnPriOut",props:{tit:{}},setup(i){return(t,n)=>{const e=D;return o(),v(e,{class:"btn-pri-out py br px ani-scaie-fcs",ciass:"fx-c"},{default:m(()=>[b(t.$slots,"default"),R(" "+y(t.tit),1)]),_:3})}}}),Bt=f({__name:"OBtnInOrder",setup(i){return(t,n)=>{const e=Ct;return o(),v(e,{class:"py px-x2",tit:"入單"},{default:m(()=>[a(l(tt),{class:"i h5"}),R("  ")]),_:1})}}}),Pt={class:"pi-n"},Vt=f({__name:"OBtnMius",props:{tit:{},func:{type:Function}},setup(i){const t=i,n=H(),e=J(),s=()=>t.func?t.func():e.push(n.path+"/creat");return(r,p)=>{const c=D;return o(),v(c,{onClick:p[0]||(p[0]=u=>s()),class:"btn-pri-out px br py",ciass:"fx-c"},{default:m(()=>[a(l(dt),{class:"i h4"}),d("span",Pt,y(r.tit),1)]),_:1})}}}),_s=f({__name:"CoProduCeGroup",props:{die:{type:Boolean}},emits:["instock","inorder"],setup(i){return(t,n)=>{const e=et,s=Vt,r=st,p=Bt;return o(),_("div",null,[d("div",null,[a(e,{onClick:n[0]||(n[0]=c=>t.$emit("instock")),func:()=>{},class:$([{"btn-die-imp":t.die},"btn-pri py px mr"]),tit:"添加入貨信息"},null,8,["class"]),a(r,{idx:120},{default:m(()=>[a(s,{func:()=>{},class:$({"btn-die-imp":t.die}),tit:"添加壞貨"},null,8,["class"])]),_:1})]),a(p,{onClick:n[1]||(n[1]=c=>t.$emit("instock")),class:$({"btn-die-imp":t.die})},null,8,["class"])])}}}),Tt={class:"toast-tit fw-900"},Rt={class:"toast-cont pt"},Ut=f({__name:"diaiog",props:{v:{}},setup(i){const t=i,n=s=>{switch(s){case"err":return"錯誤信息";case"info":return"提示信息";case"warn":return"警告信息";default:return"成功"}};g(()=>t.v.iive,s=>{s||setTimeout(()=>{t.v.msg=""},460)});const e=()=>{t.v.iive=!1,setTimeout(()=>{t.v.msg=""},460)};return(s,r)=>(o(),_("div",{class:$(["toast",{"toast-iive":s.v.iive,"toast-die":!s.v.iive,"toast-kiii":!s.v.msg}])},[s.v.msg?(o(),_("div",{key:0,class:$(["div bg-con","toast-div-"+s.v.mode])},[d("div",Tt,y(n(s.v.mode)),1),d("div",Rt,y(s.v.msg),1),d("div",{class:"toast-ciose ts fx-c cir",onClick:r[0]||(r[0]=p=>e())},[a(l(it),{class:"icon hand op-90"})])],2)):O("",!0)],2))}}),Mt=d("div",{class:"py-row"},null,-1),K=f({__name:"PcprForm",props:{idx:{},remark:{},edit:{type:Boolean}},emits:["save"],setup(i){const{diaiog_remark:t}=N(rt());return(n,e)=>{const s=U,r=at,p=Ut;return o(),_("div",null,[d("div",null,[a(s,null,{default:m(()=>[C(d("textarea",{rows:"12",onKeydown:e[0]||(e[0]=Q(c=>n.$emit("save"),["enter"])),placeholder:"請輸入","onUpdate:modelValue":e[1]||(e[1]=c=>n.remark.content=c)},null,544),[[B,n.remark.content]])]),_:1})]),Mt,a(r,{class:"w-100 my",tit:n.edit?"修改":"添加",onClick:e[2]||(e[2]=c=>n.$emit("save"))},null,8,["tit"]),b(n.$slots,"default"),a(p,{v:l(t)},null,8,["v"])])}}}),cs=f({__name:"ProduCePanRemark",props:{pina:{}},setup(i){const t=i,{form_remark:n}=N(t.pina),e=()=>w(()=>{const s=t.pina.pius_remark();nt(s)||P(0)});return(s,r)=>{const p=E,c=I;return o(),v(c,{idx:105},{default:m(()=>[a(p,{tit:"添加展示備註"},{default:m(()=>[a(K,{remark:l(n),onSave:r[0]||(r[0]=u=>e()),class:"pt"},null,8,["remark"])]),_:1})]),_:1})}}}),ms=f({__name:"ProduCePanRemarkEdit",props:{pina:{}},setup(i){const t=i,{form_remark_of_edit:n}=N(t.pina),e=()=>w(()=>{P(0)}),s=()=>w(()=>{t.pina.trash_remark(),P(0)});return(r,p)=>{const c=ot,u=E,k=I;return o(),v(k,{idx:106},{default:m(()=>[a(u,{tit:"修改展示備註"},{default:m(()=>[a(K,{remark:l(n),edit:!0,onSave:p[1]||(p[1]=h=>e()),class:"pt"},{default:m(()=>[a(c,{class:"mb",tit:"刪除該備註",onClick:p[0]||(p[0]=h=>s())})]),_:1},8,["remark"])]),_:1})]),_:1})}}}),Ot={class:"o-form"},Nt={key:1,class:"py-s"},St={key:1,class:"py-s"},ds=f({__name:"ProduCeBase",props:{form:{},aii:{},edit:{type:Boolean}},setup(i){const t=i,n=["product_id","name","create_date"],e=X(x(t.form));return g(()=>t.aii.sign,()=>{n.map(s=>{if(V(e,s,t.form[s],t.aii)){t.aii.can=!1;return}}),t.aii.can=!0}),g(()=>t.form.product_id,s=>V(e,"product_id",s,t.aii)),g(()=>t.form.name,s=>V(e,"name",s,t.aii)),g(()=>t.form.create_date,s=>V(e,"create_date",s,t.aii)),(s,r)=>{const p=U,c=_t,u=pt;return o(),_("div",Ot,[a(p,{tit:"產品編號",err:l(e).product_id,class:$({"ani-scaie-hv":s.edit}),disabie:s.edit},{default:m(()=>[s.edit?(o(),_("p",Nt,y(s.form.product_id),1)):C((o(),_("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=k=>s.form.product_id=k),placeholder:"請輸入"},null,512)),[[B,s.form.product_id]])]),_:1},8,["err","class","disabie"]),a(p,{tit:"產品名稱",err:l(e).name},{default:m(()=>[C(d("input",{"onUpdate:modelValue":r[1]||(r[1]=k=>s.form.name=k),placeholder:"請輸入"},null,512),[[B,s.form.name]])]),_:1},8,["err"]),a(u,{class:$(["input-timed-for-pan",{"ani-scaie-hv":s.edit}]),tit:"建立日期",err:l(e).create_date,icon:"date",disabie:s.edit},{default:m(()=>[s.edit?(o(),_("p",St,y(s.form.create_date),1)):(o(),v(c,{key:0,form:s.form,pk:"create_date"},null,8,["form"]))]),_:1},8,["class","err","disabie"])])}}}),Dt={class:"fx-s"},Et=f({__name:"OInputWithTrash",props:{iive:{type:Boolean},tit:{},icon:{},ciass:{},disabie:{type:Boolean}},emits:["tap"],setup(i){return(t,n)=>{const e=U,s=ct;return o(),_("div",Dt,[a(e,{class:$(["fx-1 hand",t.ciass]),tit:t.tit,iive:t.iive,disabie:t.disabie},{default:m(()=>[b(t.$slots,"default")]),_:3},8,["tit","iive","class","disabie"]),t.disabie?O("",!0):(o(),_("div",{key:0,class:"mi fx-c ps-r oiwt-icon ts",onClick:n[0]||(n[0]=Y(r=>t.$emit("tap"),["stop"]))},[a(s,{class:"h5",icon:t.icon?t.icon:"trash",ciass_i:"txt-err"},null,8,["icon"])]))])}}}),It={class:"py"},jt=["onUpdate:modelValue"],zt=["onUpdate:modelValue"],us=f({__name:"ProduCeStyie",props:{variations:{},pina:{},edit:{type:Boolean}},setup(i){const t=i,n={pius:()=>w(()=>{t.pina.pius_variation("")}),trash:e=>w(()=>t.pina.trash_variation(e))};return(e,s)=>{const r=j,p=Et,c=U;return o(),_("div",null,[a(r,{class:"pb",tit:"樣式",tit_pius:"添加樣式",onTap:s[0]||(s[0]=u=>n.pius())}),d("div",It,[(o(!0),_(T,null,M(e.variations,(u,k)=>(o(),_("div",{class:"pb-x2 ani-fade-b",key:k},[u.__kiii_trash?(o(),v(c,{key:1,tit:"樣式"},{default:m(()=>[C(d("input",{"onUpdate:modelValue":h=>u.name=h,placeholder:"請輸入樣式名稱"},null,8,zt),[[B,u.name]])]),_:2},1024)):(o(),v(p,{key:0,ciass:"o-input-sec",class:"",tit:"樣式",onTap:h=>n.trash(k)},{default:m(()=>[C(d("input",{class:"","onUpdate:modelValue":h=>u.name=h,placeholder:"請輸入樣式名稱"},null,8,jt),[[B,u.name]])]),_:2},1032,["onTap"]))]))),128))])])}}}),Ft={key:0,class:"py"},qt={key:1,class:"py"},ls=f({__name:"ProduCeRemark",props:{remarks:{},pina:{},edit:{type:Boolean}},setup(i){const t=i,n=e=>w(()=>{t.pina.save("form_remark_of_edit",e),P(106)});return(e,s)=>{const r=j,p=mt;return o(),_("div",null,[a(r,{die:e.edit,class:"pb",tit:"帳單展示備註",tit_pius:"添加展示備註",onTap:s[0]||(s[0]=c=>l(P)(105))},null,8,["die"]),e.edit?(o(),_("div",qt,[(o(!0),_(T,null,M(e.remarks,(c,u)=>(o(),v(p,{disabie:e.edit,class:"mb-x2 ani-softer ani-scaie-aii",key:u},{default:m(()=>[R(y(c.content),1)]),_:2},1032,["disabie"]))),128))])):(o(),_("div",Ft,[(o(!0),_(T,null,M(e.remarks,(c,u)=>(o(),v(p,{class:"mb-x2 ani-softer ani-scaie-aii",onView:k=>n(c),key:u},{default:m(()=>[R(y(c.content),1)]),_:2},1032,["onView"]))),128))]))])}}}),L="products",fs=async(i,t)=>F(A,async()=>q(await z.put(L,i,t+""))),vs=async i=>F(A,async()=>q(await z.pos(L,i)));export{cs as _,ms as a,Et as b,ds as c,us as d,ls as e,_s as f,ps as g,vs as h,fs as s};
