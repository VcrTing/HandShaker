import{t as K,a as is,_ as ns,b as os,c as es,d as as,e as _s,f as rs,g as cs,h as ls,i as ds,j as ps,k as ms,l as us}from"./ProduCeRemark.vue_vue_type_script_setup_true_lang-6ac93e39.js";import{_ as fs}from"./OBtnSave.vue_vue_type_script_setup_true_lang-d2e550ff.js";import{_ as hs}from"./scroiiy-05be3805.js";import{_ as $s,o as _,c as d,d as $,g as y,B as k,a as t,b as i,w as l,u as e,x as g,y as P,r as Q,k as N,n as V,F as w,f as T,t as f,s as q,m as D,q as ys,D as R,e as B,h as O}from"./index-6381f874.js";import{pageProducEditPina as S}from"./pageProducEditPina-bea488f4.js";import{a as vs,_ as gs}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-f9873f69.js";import{_ as X}from"./IayoutForm.vue_vue_type_script_setup_true_lang-e5ae48e2.js";import{a as ws}from"./anim-34f746ba.js";import{g as Y,j as x,f as I,a as bs,i as C,d as ks,e as xs}from"./credit-6ebf5b28.js";import{_ as Z}from"./OInput.vue_vue_type_script_setup_true_lang-c8e318aa.js";import{_ as Ps}from"./OInputI.vue_vue_type_script_setup_true_lang-1b26f258.js";import{_ as Is}from"./OTime.vue_vue_type_script_setup_true_lang-1d00e086.js";import{_ as Ts}from"./OModTrash.vue_vue_type_script_setup_true_lang-8bd29333.js";import{_ as U}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-ceae338d.js";import{_ as Cs}from"./BtnIcon.vue_vue_type_script_setup_true_lang-d8987b7f.js";import{_ as z}from"./OTabieOpera.vue_vue_type_script_setup_true_lang-3d8d52c9.js";import{_ as ss}from"./OTabieTrash-8964a0e1.js";import{_ as Vs}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-f3578ed2.js";import{b as H}from"./index-dbd74263.js";import{d as Bs}from"./judge-0b511643.js";import{_ as W,a as L}from"./Pan.vue_vue_type_script_setup_true_lang-c512d438.js";import{_ as Us}from"./OTrPure.vue_vue_type_script_setup_true_lang-875aeac1.js";import{_ as M}from"./OOpenPan.vue_vue_type_script_setup_true_lang-7879ef1e.js";import{b as J}from"./route-block-83d24a4e.js";import"./OBtnInOrder.vue_vue_type_script_setup_true_lang-1fc8ee76.js";import"./MBtn.vue_vue_type_script_setup_true_lang-242bb797.js";import"./Oi.vue_vue_type_script_setup_true_lang-f011ce58.js";import"./XMarkIcon-86985cc1.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-ffdccb3e.js";import"./iabeiPina-24cc55ac.js";import"./errors_user-cbfafd4e.js";import"./net-tooi-3112abf7.js";import"./pageProductPina-2d0c0da3.js";import"./utii-4ceeb6a9.js";import"./iodash-66372aee.js";import"./dayjs.min-bdea528d.js";import"./Cardmsg.vue_vue_type_script_setup_true_lang-e3f6e896.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-e52db6b5.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-cbff765b.js";import"./BtnPri.vue_vue_type_script_setup_true_lang-a78a76d1.js";import"./datepicker.esm-f8feaf17.js";import"./ModInner.vue_vue_type_script_setup_true_lang-d889b60c.js";import"./mittPina-2f430d85.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-33dde04c.js";import"./OTr.vue_vue_type_script_setup_true_lang-84e83f7f.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-747d6d7f.js";const Es={};function Ns(h,s){return _(),d("div",null," IN BAD ")}const Ds=$s(Es,[["render",Ns]]),Ss={class:"row"},js={class:"w-333"},Rs={class:"w-333"},zs={class:"w-333"},As=t("div",{class:"py-s"},null,-1),Fs={class:"row"},Os={class:"w-333"},qs=t("div",{class:"w-333"},null,-1),Ws=t("div",{class:"w-333"},null,-1),Ls=$({__name:"PiisBase",props:{form:{},aii:{}},setup(h){const s=h,r=["date","time","number","name"],a=y(Y(s.form));return k(()=>s.aii.sign,()=>{r.map(n=>{if(x(a,n,s.form[n],s.aii)){s.aii.can=!1;return}}),s.aii.can=!0}),k(()=>s.form.date,n=>x(a,"date",n,s.aii)),k(()=>s.form.time,n=>x(a,"time",n,s.aii)),k(()=>s.form.number,n=>x(a,"number",n,s.aii)),k(()=>s.form.name,n=>x(a,"name",n,s.aii)),(n,o)=>{const m=Is,c=Ps,p=Z;return _(),d("div",null,[t("div",Ss,[t("div",js,[i(c,{icon:"date",err:e(a).date,tit:"建檔日期"},{default:l(()=>[i(m,{form:n.form,pk:"date"},null,8,["form"])]),_:1},8,["err"])]),t("div",Rs,[i(c,{icon:"time",err:e(a).time,tit:"建檔時間"},{default:l(()=>[i(m,{form:n.form,pk:"date"},null,8,["form"])]),_:1},8,["err"])]),t("div",zs,[i(p,{err:e(a).number,tit:"供應商編號"},{default:l(()=>[g(t("input",{"onUpdate:modelValue":o[0]||(o[0]=u=>n.form.number=u),placeholder:"請輸入"},null,512),[[P,n.form.number]])]),_:1},8,["err"])])]),As,t("div",Fs,[t("div",Os,[i(p,{err:e(a).name,tit:"供應商名稱"},{default:l(()=>[g(t("input",{"onUpdate:modelValue":o[1]||(o[1]=u=>n.form.name=u),placeholder:"請輸入"},null,512),[[P,n.form.name]])]),_:1},8,["err"])]),qs,Ws])])}}}),Ms={class:"row"},Gs={class:"w-333"},Hs={class:"w-333"},Js={class:"w-333"},Ks=$({__name:"PiisPrice",props:{form:{},aii:{}},setup(h){const s=h,r=["in_price","iow_price","price"],a=y(Y(s.form));return k(()=>s.aii.sign,()=>{r.map(n=>{if(x(a,n,s.form[n],s.aii)){s.aii.can=!1;return}}),s.aii.can=!0}),k(()=>s.form.in_price,n=>x(a,"in_price",n,s.aii)),k(()=>s.form.iow_price,n=>x(a,"iow_price",n,s.aii)),k(()=>s.form.price,n=>x(a,"price",n,s.aii)),(n,o)=>{const m=Z;return _(),d("div",Ms,[t("div",Gs,[i(m,{err:e(a).in_price,tit:"入貨價錢"},{default:l(()=>[g(t("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=c=>n.form.in_price=c),placeholder:"請輸入"},null,512),[[P,n.form.in_price]])]),_:1},8,["err"])]),t("div",Hs,[i(m,{err:e(a).iow_price,tit:"最低價錢"},{default:l(()=>[g(t("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=c=>n.form.iow_price=c),placeholder:"請輸入"},null,512),[[P,n.form.iow_price]])]),_:1},8,["err"])]),t("div",Js,[i(m,{err:e(a).price,tit:"售價"},{default:l(()=>[g(t("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=c=>n.form.price=c),placeholder:"請輸入"},null,512),[[P,n.form.price]])]),_:1},8,["err"])])])}}}),Qs=$({__name:"OInpuTd",props:{iive:{type:Boolean},tit:{},err:{type:Boolean},ciass:{}},setup(h){return(s,r)=>(_(),d("div",{class:N(["o-input input o-input-td",{"o-input-iive":s.iive,"input-err":s.err}])},[t("div",{class:N(["fx-1",s.ciass])},[Q(s.$slots,"default")],2)],2))}}),Xs={key:0,class:"td"},Ys={class:"w-30"},Zs={class:"w-30"},st={class:"fx-1 fx-s"},tt={class:"fx-r"},it={key:1,class:"td"},nt={class:"w-30"},ot=["onUpdate:modelValue"],et={class:"w-30"},at=["onUpdate:modelValue"],_t={class:"fx-1 fx-s"},rt=["onUpdate:modelValue"],ct={class:"pi fx-r"},ts=$({__name:"PiisStyieInventoryTabie",props:{aii:{}},emits:["sureTrash"],setup(h,{emit:s}){const r=h;V(()=>C(r.aii,[{ciass:"w-30",tit:"樣式名稱"},{ciass:"w-30",tit:"入貨位置"},{ciass:"fx-1",tit:"入貨數量"}]));const a=y({origin:{},trashIdx:0}),n={edit:o=>I(()=>{o.edit=!0,a.origin[o.id+""]=Bs(o)}),cancei:o=>I(()=>{const m=a.origin[o.id+""];m?(m.edit=!1,ks(m,o)):o.edit=!1}),sureTrash:o=>I(()=>{a.trashIdx=o,s("sureTrash",o),H(-201)}),trash:()=>bs(r.aii,()=>{r.aii.many.splice(a.trashIdx,1),H(0)})};return(o,m)=>{const c=Vs,p=ss,u=Qs,E=z,A=Cs,F=U,j=Ts;return _(),d(w,null,[i(F,{aii:o.aii,mini:!0},{default:l(()=>[(_(!0),d(w,null,T(o.aii.many,(v,G)=>(_(),d("div",{key:G},[v.edit?(_(),d("div",it,[t("div",nt,[i(u,null,{default:l(()=>[g(t("input",{"onUpdate:modelValue":b=>v.styie=b,placeholder:"請輸入"},null,8,ot),[[P,v.styie]])]),_:2},1024)]),t("div",et,[i(u,null,{default:l(()=>[g(t("input",{"onUpdate:modelValue":b=>v.store=b,placeholder:"請輸入"},null,8,at),[[P,v.store]])]),_:2},1024)]),t("div",_t,[i(u,{class:"fx-1"},{default:l(()=>[g(t("input",{"onUpdate:modelValue":b=>v.num=b,placeholder:"請輸入"},null,8,rt),[[P,v.num]])]),_:2},1024),t("div",ct,[i(E,{class:"pr",tit:"儲存",onClick:b=>v.edit=!1},null,8,["onClick"]),t("div",null,[i(A,{icon:"x",onClick:b=>n.cancei(v)},null,8,["onClick"])])])])])):(_(),d("div",Xs,[t("div",Ys,f(v.styie),1),t("div",Zs,f(v.store),1),t("div",st,[t("div",null,f(v.num),1),t("div",tt,[i(c,{onClick:b=>n.edit(v),class:"mr-s txt-pri"},null,8,["onClick"]),i(p,{onClick:b=>n.sureTrash(G)},null,8,["onClick"])])])]))]))),128))]),_:1},8,["aii"]),i(j,{idx:-201,aii:o.aii,onTrash:n.trash},null,8,["aii","onTrash"])],64)}}}),lt=t("h3",{class:"py-x3"},"添加入貨信息",-1),dt={class:"pt"},pt={key:0,class:"abs-b r-0 w-36 w-50-p py"},mt=$({__name:"ProduInvInStock",setup(h){const s=y({ioading:!1,msg:"",can:!1,sign:0,ani:0}),r=y({date:"",time:"",number:"",name:""}),a=y({in_price:"",iow_price:"",price:""}),n=y({msg:"",many:[{idx:1,styie:1,store:1,num:10,edit:!1,ioading:!1},{idx:2,styie:1,store:1,num:100,edit:!0,ioading:!1}],trashIdx:0,pager:{},ioading:!1,trs:[]}),o=["styie","store","num"],{pag:m}=q(S()),c={save:()=>I(()=>{}),pius:()=>I((p=!0)=>{n.many.map(u=>{xs(u,o)||(p=!1)}),p&&n.many.push({idx:n.many.length,styie:1,store:1,num:0,edit:!0,ioading:!1})}),back:()=>I(()=>{m.value=0}),init:()=>ws(4,()=>s.ani+=1)};return V(c.init),(p,u)=>{const E=X,A=vs,F=gs;return _(),d("div",null,[t("section",null,[lt,t("div",dt,[i(E,{tit:"時間及供應商",class:N(["pb-x3 op-0",{"ani-page":e(s).ani>=0}])},{default:l(()=>[i(Ls,{form:e(r),aii:e(s)},null,8,["form","aii"])]),_:1},8,["class"]),i(E,{tit:"價錢",class:N(["pb-x3 op-0",{"ani-page":e(s).ani>=1}])},{default:l(()=>[i(Ks,{form:e(a),aii:e(s)},null,8,["form","aii"])]),_:1},8,["class"]),i(E,{tit:"樣式及庫存分配數量",class:N(["pt pb-x3 op-0",{"ani-page":e(s).ani>=2}])},{default:l(()=>[i(ts,{aii:e(n)},null,8,["aii"])]),_:1},8,["class"]),t("div",null,[i(A,{onClick:u[0]||(u[0]=j=>c.pius()),class:"w-100 py-s",tit:"添加樣式"})])])]),e(s).ani>=3?(_(),d("section",pt,[i(F,{ciass:"w-100",tit_save:"儲存",onBack:u[1]||(u[1]=j=>c.back()),onSave:u[2]||(u[2]=j=>c.save())})])):D("",!0)])}}}),ut=$({__name:"ProduInvInOrder",setup(h){return(s,r)=>(_(),d("div",null," IN ORDER "))}}),ft={class:"ps-r"},ht={key:0,class:"prod-pag-wrapper abs-t i-0 r-0 zi-x2"},$t=$({__name:"ProductPagWrapper",setup(h){const{pag:s}=q(S());s.value=0;const r=ys(!1);return setTimeout(()=>r.value=!0,1200),(a,n)=>{const o=hs;return _(),d("div",ft,[t("div",null,[Q(a.$slots,"default")]),e(r)?(_(),d("div",ht,[g(i(o,{class:"h-iayout h-iayout-max bg-con"},{default:l(()=>[g(i(mt,null,null,512),[[R,e(s)==1]]),g(i(Ds,null,null,512),[[R,e(s)==2]]),g(i(ut,null,null,512),[[R,e(s)==3]])]),_:1},512),[[R,e(s)>0]])])):D("",!0)])}}}),yt=t("h4",{class:"py-x2"},"樣式及庫存分配數量",-1),vt={class:"pb-x3"},gt=$({__name:"ProductEditPanPriview",setup(h){const s=y({msg:"",many:[{idx:1,styie:1,store:1,num:10,edit:!1,ioading:!1},{idx:2,styie:1,store:1,num:100,edit:!1,ioading:!1}],trashIdx:0,pager:{},ioading:!1,trs:[]});return(r,a)=>{const n=W,o=L;return _(),B(o,{idx:112,big:!0},{default:l(()=>[i(n,{tit:"檢視"},{default:l(()=>[yt,t("div",vt,[i(ts,{aii:e(s)},null,8,["aii"])])]),_:1})]),_:1})}}}),wt=t("h4",{class:"py-x2"},"樣式",-1),bt={class:"w-50"},kt={class:"w-50"},xt=t("h4",{class:"py-x2"},"倉庫",-1),Pt={class:"w-333"},It={class:"w-333"},Tt={class:"w-333"},Ct=$({__name:"ProductEditPanInstock",setup(h){const s=y({msg:"",many:[{}],pager:{},ioading:!0,trs:[]}),r=y({msg:"",many:[{}],pager:{},ioading:!0,trs:[]});return V(()=>{C(s,K),C(r,is)}),(a,n)=>{const o=U,m=W,c=L;return _(),B(c,{idx:111,big:!0},{default:l(()=>[i(m,{tit:"入貨詳情"},{default:l(()=>[wt,i(o,{aii:e(s),mini:!0},{default:l(()=>[(_(!0),d(w,null,T(e(s).many,(p,u)=>(_(),d("div",{class:"td",key:u},[t("div",bt,f(p.o_1),1),t("div",kt,f(p.o_2),1)]))),128))]),_:1},8,["aii"]),xt,i(o,{aii:e(r),mini:!0},{default:l(()=>[(_(!0),d(w,null,T(e(r).many,(p,u)=>(_(),d("div",{class:"td",key:u},[t("div",Pt,f(p.o_1),1),t("div",It,f(p.o_2),1),t("div",Tt,f(p.o_2),1)]))),128))]),_:1},8,["aii"])]),_:1})]),_:1})}}}),Vt=t("h4",{class:"py-x2"},"倉庫 A",-1),Bt={class:"w-50"},Ut={class:"w-50"},Et=$({__name:"ProductEditPanInventory",setup(h){const s=y({msg:"",many:[{}],pager:{},ioading:!0,trs:[]});return V(()=>{C(s,K)}),(r,a)=>{const n=U,o=W,m=L;return _(),B(m,{idx:110,big:!0},{default:l(()=>[i(o,{tit:"庫存詳情"},{default:l(()=>[Vt,i(n,{aii:e(s),mini:!0},{default:l(()=>[(_(!0),d(w,null,T(e(s).many,(c,p)=>(_(),d("div",{class:"td",key:p},[t("div",Bt,f(c.o_1),1),t("div",Ut,f(c.o_2),1)]))),128))]),_:1},8,["aii"])]),_:1})]),_:1})}}}),Nt=$({__name:"ProductEditPans",setup(h){const s=S();return(r,a)=>(_(),d(w,null,[i(ns,{pina:e(s)},null,8,["pina"]),i(os,{pina:e(s)},null,8,["pina"]),i(gt),i(Ct),i(Et)],64))}}),Dt=t("div",{class:"pt"},null,-1),St=t("div",{class:"py"},null,-1),jt={key:0,class:"py-x2"},Rt={key:1,class:"py-x2"},zt={key:2,class:"py-x2"},At=t("div",{class:"py"},null,-1),Ft=$({__name:"ProductEditIeft",props:{aii:{}},setup(h){const s=S(),{remarks:r,labels:a,styie:n,base:o}=q(s);return(m,c)=>{const p=X;return _(),d("div",null,[i(p,{tit:"編輯產品"},{default:l(()=>[Dt,i(es,{form:e(o),aii:m.aii},null,8,["form","aii"])]),_:1}),St,i(as,{class:"pt-s",pina:e(s),iabeis:e(a)},null,8,["pina","iabeis"]),O(),e(a).length<=0?(_(),d("div",jt)):D("",!0),i(_s,{class:"pt-s",pina:e(s),styie:e(n)},null,8,["pina","styie"]),O(),e(n).length<=0?(_(),d("div",Rt)):D("",!0),i(rs,{class:"pt-s",pina:e(s),remarks:e(r)},null,8,["pina","remarks"]),O(),e(r).length<=0?(_(),d("div",zt)):D("",!0),At])}}}),Ot={class:"w-18"},qt={class:"w-15"},Wt={class:"w-14"},Lt={class:"w-13"},Mt={class:"w-12"},Gt={class:"w-12"},Ht={class:"fx-1 fx-r"},Jt=$({__name:"ProduInstockTabie",props:{aii:{}},setup(h){const s=h;return V(()=>C(s.aii,cs)),(r,a)=>{const n=z,o=M,m=ss,c=U;return _(),B(c,{aii:r.aii,mini:!0},{default:l(()=>[(_(!0),d(w,null,T(r.aii.many,(p,u)=>(_(),d("div",{class:"td",key:u},[t("div",Ot,f(p.o_1),1),t("div",qt,f(p.o_2),1),t("div",Wt,f(p.o_3),1),t("div",Lt,f(p.o_4),1),t("div",Mt,f(p.o_5),1),t("div",Gt,f(p.o_6),1),t("div",Ht,[i(o,{idx:112,class:"pr-s"},{default:l(()=>[i(n,{tit:"監視"})]),_:1}),i(m)])]))),128))]),_:1},8,["aii"])}}}),Kt={class:"w-18"},Qt={class:"w-14"},Xt={class:"w-16"},Yt={class:"fx-1 fx-r"},Zt={class:"d-ib"},si=$({__name:"ProduWarehouseTabie",props:{aii:{}},setup(h){const s=h;return V(()=>C(s.aii,ls)),(r,a)=>{const n=z,o=M,m=U;return _(),B(m,{aii:r.aii,mini:!0},{default:l(()=>[(_(!0),d(w,null,T(r.aii.many,(c,p)=>(_(),d("div",{class:"td",key:p},[t("div",Kt,f(c.o_1),1),t("div",Qt,f(c.o_2),1),t("div",Xt,f(c.o_3),1),t("div",Yt,[t("div",Zt,f(c.o_4),1),i(o,{idx:110,class:"pr-s"},{default:l(()=>[i(n,{tit:"庫存詳情"})]),_:1}),i(n,{tit:"調貨"})])]))),128))]),_:1},8,["aii"])}}}),ti={class:"w-18"},ii={class:"w-15"},ni={class:"w-14"},oi={class:"w-13"},ei={class:"w-12"},ai={class:"w-12"},_i={class:"fx-1 ta-r"},ri=$({__name:"ProduNewInstockTabie",props:{aii:{}},setup(h){const s=h;return V(()=>C(s.aii,ds)),(r,a)=>{const n=z,o=M,m=U;return _(),B(m,{aii:r.aii,mini:!0},{default:l(()=>[(_(!0),d(w,null,T(r.aii.many,(c,p)=>(_(),d("div",{class:"td",key:p},[t("div",ti,f(c.o_1),1),t("div",ii,f(c.o_2),1),t("div",ni,f(c.o_3),1),t("div",oi,f(c.o_4),1),t("div",ei,f(c.o_5),1),t("div",ai,f(c.o_6),1),t("div",_i,[i(o,{idx:111},{default:l(()=>[i(n,{tit:"入貨詳情"})]),_:1})])]))),128))]),_:1},8,["aii"])}}}),ci=t("div",{class:"py-row"},null,-1),li=t("div",{class:"py-row"},null,-1),di=t("div",{class:"py-row"},null,-1),pi=t("div",{class:"py-row"},null,-1),mi={class:"tabie tabie-def"},ui=t("div",{class:"td"},[t("div",{class:"w-100"},"1999.93")],-1),fi=$({__name:"ProductEditRight",setup(h){const s=y({msg:"",many:[{}],pager:{},ioading:!1,trs:[]}),r=y({msg:"",many:[{}],pager:{},ioading:!1,trs:[]}),a=y({msg:"",many:[{}],pager:{},ioading:!1,trs:[]});return(n,o)=>{const m=Us;return _(),d("div",null,[ci,i(ri,{aii:e(a)},null,8,["aii"]),li,i(si,{aii:e(r)},null,8,["aii"]),di,i(Jt,{aii:e(s)},null,8,["aii"]),pi,t("div",mi,[i(m,{trs:e(ps)},null,8,["trs"]),ui])])}}}),hi=$({__name:"product_edit",setup(h){const s=S(),r=y({ioading:!1,msg:"",can:!1,sign:0,search:""}),a={submit:()=>{},dump:n=>I(()=>{s.switch_pag(n||0)})};return(n,o)=>{const m=fs,c=ms,p=us;return _(),d(w,null,[i($t,null,{default:l(()=>[i(p,null,{ieft:l(()=>[i(Ft,{aii:e(r)},null,8,["aii"])]),ieft_bottom:l(()=>[i(m,{onClick:o[0]||(o[0]=u=>a.submit()),class:"w-100",tit:"儲存"})]),right:l(()=>[i(c,{class:"fx-s",onInbad:o[1]||(o[1]=u=>a.dump(2)),onInstock:o[2]||(o[2]=u=>a.dump(1)),onInorder:o[3]||(o[3]=u=>a.dump(3))}),i(fi)]),_:1})]),_:1}),i(Nt)],64)}}});typeof J=="function"&&J(hi);export{hi as default};
