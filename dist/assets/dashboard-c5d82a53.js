import{_ as K,a as L}from"./ModInner.vue_vue_type_script_setup_true_lang-ff4abfed.js";import{_ as q,a as z}from"./Pan.vue_vue_type_script_setup_true_lang-61a4e396.js";import{_ as I}from"./Cardmsg.vue_vue_type_script_setup_true_lang-c2eeaaf9.js";import{_ as Q}from"./OTr.vue_vue_type_script_setup_true_lang-a1d279fb.js";import{_ as S}from"./Dropdown.vue_vue_type_script_setup_true_lang-2b29b390.js";import{_ as U}from"./Msgiine.vue_vue_type_script_setup_true_lang-98ec3a21.js";import{_ as j}from"./OSearch.vue_vue_type_script_setup_true_lang-ead4291c.js";import{_ as G}from"./OInput.vue_vue_type_script_setup_true_lang-148701d0.js";import{_ as H}from"./OIoadDot.vue_vue_type_script_setup_true_lang-c1dafded.js";import{_ as J}from"./OIoadCir.vue_vue_type_script_setup_true_lang-6e1141ce.js";import{a as R,_ as W}from"./TrangieGroup.vue_vue_type_script_setup_true_lang-12150f09.js";import{_ as $}from"./MBtn.vue_vue_type_script_setup_true_lang-ec77d985.js";import{d as y,o as m,e as u,a as t,w as n,b as s,n as v,g as X,i as Y,Q as Z,q as o,l as ss,v as ts,u as p,B as ns,F as os,k as as,$ as is,D as _s,E as cs,t as r}from"./index-0966950c.js";import{_ as es}from"./OBtn.vue_vue_type_script_setup_true_lang-a305392e.js";import{b as g}from"./route-block-83d24a4e.js";import"./Oi.vue_vue_type_script_setup_true_lang-14d130be.js";import"./XMarkIcon-838afdc9.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-7b7446f5.js";const ls={class:"o-btn-i d-ib"},ps=y({__name:"OBtnI",props:{ciass:{},icon:{}},emits:["tap"],setup(w){return(a,e)=>{const c=$;return m(),u("div",ls,[t(c,{class:v(["cir fx-c",a.ciass]),onClick:e[0]||(e[0]=i=>a.$emit("tap"))},{default:n(()=>[s("i",{class:v(a.icon)},null,2)]),_:1},8,["class"])])}}}),ds={class:"px py bg-con"},rs=s("span",{class:"px"},null,-1),ms=s("span",{class:"pi"},"新增產品",-1),us=s("span",{class:"px"},null,-1),fs=s("span",{class:"px"},null,-1),bs=s("span",{class:"px"},null,-1),xs=s("span",{class:"px"},null,-1),hs={class:"d-ib"},vs=s("span",{class:"px"},null,-1),gs={class:"py fx-i"},$s=s("span",{class:"px"},null,-1),ys=s("span",{class:"px"},null,-1),ws=s("span",{class:"px"},null,-1),ks=s("span",{class:"px"},null,-1),Cs={class:"pt"},Bs={class:"px py bg-con"},Ds={class:"fx-s"},Ns={class:"fx-r"},Ms=s("div",{class:"py-s"},null,-1),Vs={class:"row"},Os={class:"w-50"},Ps={class:"bg-con px py"},Ts={class:"w-25"},As={class:"bg-con px py"},Es=s("button",null,"首頁",-1),Fs=s("button",null,"全部產品",-1),Ks=s("button",null,"聯絡我們",-1),Ls={class:"w-25"},qs={class:"bg-con px py"},zs={class:"px py mt bg-con"},Is={class:"tabie tabie-def"},Qs={class:"w-10"},Ss={class:"w-33"},Us={class:"w-14"},js={class:"w-36"},Gs=s("div",{class:"w-7"},null,-1),Hs={class:"px py mt bg-con"},Js=y({__name:"dashboard",setup(w){const a=X({search:"",msg:"",trs:[],users:[{id:1,name:"曾以單",age:18,addr:"降息吉祥泰和股息自然村 302"},{id:2,name:"闇龍",age:67,addr:"感動吉祥泰和股息自然村 302"},{id:3,name:"Lucy Andy Na",age:24,addr:"上海吉祥泰和股息自然村 302"}],sec:"huge",seiects:[{txt:"大尺寸",v:"huge",ciass:"pri"},{txt:"小尺寸",v:"smaii",ciass:"btn-pri-iht"}]}),e={mod:c=>{is(c),console.log("打開 MOD =",c)},pan:c=>{_s(c),console.log("打開 PAN =",c)},toast:()=>{console.log("彈出消息 =",a.msg),cs().toast(a.msg),a.msg=""}};return Y(()=>a.search,c=>{console.log("搜索 =",c)}),(c,i)=>{const d=es,f=ps,l=$,b=R,k=W,C=J,B=H,D=G,N=j,M=U,V=S,O=Q,P=I,T=Z("router-view"),x=q,h=z,A=K,E=L;return m(),u("section",null,[s("div",ds,[s("div",null,[t(d,{class:"btn-pri py-n px-x2",icon:"fa-solid fa-plus"},{default:n(()=>[o(" 新增產品 ")]),_:1}),rs,t(l,{class:"btn-pri-out py-n px-x2",ciass:"fx-c"},{default:n(()=>[t(f,{icon:"fa-solid fa-gift"}),ms]),_:1}),us,t(l,{class:"btn-pri-iht py-n px-x2"},{default:n(()=>[o("一個按鈕")]),_:1}),fs,t(l,{bk:!0,class:"bg-pri-iht btn-ip px-x2"},{default:n(()=>[t(f,{ciass:"btn-pri",icon:"fa-solid fa-plus"})]),_:1}),bs,t(l,{bk:!0,class:"btn-tab py-n px-x2"},{default:n(()=>[o("一個按鈕")]),_:1}),xs,s("div",hs,[t(f,{ciass:"btn-pri",icon:"fa-solid fa-plus"})]),vs]),s("div",gs,[t(d,{class:"btn-die btn-ip px",icon:"fa-solid fa-minus"},{default:n(()=>[o(" 增加懷貨 ")]),_:1}),$s,t(b),t(b,{down:!0,iive:!0}),ys,t(k),ws,t(C,{styie:"pri"}),ks,t(B)]),s("div",Cs,[t(D,{class:"",tit:"發送消息",iive:!0},{default:n(()=>[ss(s("input",{"onUpdate:modelValue":i[0]||(i[0]=_=>p(a).msg=_),onKeydown:i[1]||(i[1]=ns((..._)=>e.toast&&e.toast(..._),["enter"])),class:"",placeholder:"请输入"},null,544),[[ts,p(a).msg]])]),_:1})])]),s("aside",Bs,[s("div",Ds,[t(N,{class:"fx-1",aii:p(a),pk:"search"},null,8,["aii"]),s("div",Ns,[t(l,{class:"btn-pri btn-ip px-x2"},{default:n(()=>[o("彈出")]),_:1})])])]),Ms,s("div",Vs,[s("div",Os,[s("nav",Ps,[t(M,{ciass:"fs-s"},{default:n(()=>[o(" 全部減價：-90.0 ")]),_:1})])]),s("div",Ts,[s("nav",As,[t(d,{onTap:i[2]||(i[2]=_=>e.mod(20)),class:"btn-pri btn-ip px",icon:"fa-solid fa-plus"},{default:n(()=>[o(" 彈出框 ")]),_:1}),t(V,null,{sign:n(()=>[t(d,{class:"btn-pri-iht btn-ip px"},{default:n(()=>[o(" 菜單 ")]),_:1})]),con:n(()=>[Es,Fs,Ks]),_:1})])]),s("div",Ls,[s("nav",qs,[t(l,{class:"btn-pri px py-s br-r-0",onClick:i[3]||(i[3]=_=>e.pan(200))},{default:n(()=>[o("寬面板")]),_:1}),t(l,{class:"btn-pri-out px py-s br-i-0",onClick:i[4]||(i[4]=_=>e.pan(20))},{default:n(()=>[o("窄面板")]),_:1})])])]),s("aside",zs,[s("div",Is,[t(O,{aii:p(a)},null,8,["aii"]),s("div",null,[(m(!0),u(os,null,as(p(a).users,(_,F)=>(m(),u("div",{class:"td",key:F},[s("div",Qs,r(_.id),1),s("div",Ss,r(_.name),1),s("div",Us,r(_.age),1),s("div",js,r(_.addr),1),Gs]))),128))])])]),s("aside",Hs,[t(P,null,{default:n(()=>[o(" 女王：1.女性国王的统称。2.也指行事雷厉、果断、霸气、有主见的女性。中国历史上唯一获得普遍认可的女皇是武则天。 [1] 英国已故女王伊丽莎白·亚历山德拉·玛丽·温莎。丹麦现任国王为女王玛格丽特二世。荷兰上一任国王为女王贝娅特丽克丝·威廉明娜·阿姆加德。俄罗斯历史上的著名女皇是叶卡捷琳娜二世。 ")]),_:1})]),t(T),s("div",null,[t(h,{idx:200,big:!0},{default:n(()=>[t(x,{tit:"添加展示備註"},{default:n(()=>[o(" 寬面板裡面的內容 ")]),_:1})]),_:1}),t(h,{idx:20},{default:n(()=>[t(x,{tit:"添加展示備註"},{default:n(()=>[o(" 裡面的內容 ")]),_:1})]),_:1})]),s("div",null,[t(E,{idx:20,class:"mod-s"},{default:n(()=>[t(A,null,{default:n(()=>[o(" MOD內容 ")]),_:1})]),_:1})])])}}});typeof g=="function"&&g(Js);export{Js as default};
