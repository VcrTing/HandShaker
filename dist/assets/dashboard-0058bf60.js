import{_ as K,a as L}from"./ModInner.vue_vue_type_script_setup_true_lang-f171a990.js";import{_ as q,a as E}from"./Pan.vue_vue_type_script_setup_true_lang-0528dc1e.js";import{_ as I}from"./Cardmsg.vue_vue_type_script_setup_true_lang-16739f81.js";import{_ as S}from"./OTr.vue_vue_type_script_setup_true_lang-e2103c01.js";import{d as $,o as m,a as u,b as t,w as n,e as s,k as v,f as U,A as j,M as G,g as o,x as H,y as J,u as p,z as Q,F as R,r as W,t as r,q as X}from"./index-7e5d97c2.js";import{_ as Y}from"./Msgiine.vue_vue_type_script_setup_true_lang-fb62727f.js";import{_ as Z}from"./OSearch.vue_vue_type_script_setup_true_lang-73db3c26.js";import{_ as ss}from"./OInput.vue_vue_type_script_setup_true_lang-a19953e7.js";import{_ as ts,a as ns}from"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import{a as os,_ as as}from"./TrangieGroup.vue_vue_type_script_setup_true_lang-59963553.js";import{_ as y}from"./MBtn.vue_vue_type_script_setup_true_lang-b5101f3b.js";import{_ as is}from"./OBtn.vue_vue_type_script_setup_true_lang-609b1d89.js";import{c as _s,a as cs}from"./index-f7a16cec.js";import{m as es}from"./mittPina-ee683634.js";import{b as g}from"./route-block-83d24a4e.js";const ls={class:"o-btn-i d-ib"},ps=$({__name:"OBtnI",props:{ciass:{},icon:{}},emits:["tap"],setup(w){return(a,e)=>{const c=y;return m(),u("div",ls,[t(c,{class:v(["cir fx-c",a.ciass]),onClick:e[0]||(e[0]=i=>a.$emit("tap"))},{default:n(()=>[s("i",{class:v(a.icon)},null,2)]),_:1},8,["class"])])}}}),ds={class:"px py bg-con"},rs=s("span",{class:"px"},null,-1),ms=s("span",{class:"pi"},"新增產品",-1),us=s("span",{class:"px"},null,-1),fs=s("span",{class:"px"},null,-1),bs=s("span",{class:"px"},null,-1),xs=s("span",{class:"px"},null,-1),hs={class:"d-ib"},vs=s("span",{class:"px"},null,-1),gs={class:"py fx-i"},$s=s("span",{class:"px"},null,-1),ys=s("span",{class:"px"},null,-1),ws=s("span",{class:"px"},null,-1),ks=s("span",{class:"px"},null,-1),Cs={class:"pt"},Ms={class:"px py bg-con"},Ns={class:"fx-s"},Bs={class:"fx-r"},Ds=s("div",{class:"py-s"},null,-1),Vs={class:"row"},As={class:"w-50"},Os={class:"bg-con px py"},Ps={class:"w-25"},Ts={class:"bg-con px py"},zs=s("button",null,"首頁",-1),Fs=s("button",null,"全部產品",-1),Ks=s("button",null,"聯絡我們",-1),Ls={class:"w-25"},qs={class:"bg-con px py"},Es={class:"px py mt bg-con"},Is={class:"tabie tabie-def"},Ss={class:"w-10"},Us={class:"w-33"},js={class:"w-14"},Gs={class:"w-36"},Hs=s("div",{class:"w-7"},null,-1),Js={class:"px py mt bg-con"},Qs=$({__name:"dashboard",setup(w){const a=U({search:"",msg:"",trs:[],users:[{id:1,name:"曾以單",age:18,addr:"降息吉祥泰和股息自然村 302"},{id:2,name:"闇龍",age:67,addr:"感動吉祥泰和股息自然村 302"},{id:3,name:"Lucy Andy Na",age:24,addr:"上海吉祥泰和股息自然村 302"}],sec:"huge",seiects:[{txt:"大尺寸",v:"huge",ciass:"pri"},{txt:"小尺寸",v:"smaii",ciass:"btn-pri-iht"}]}),e={mod:c=>{_s(c),console.log("打開 MOD =",c)},pan:c=>{cs(c),console.log("打開 PAN =",c)},toast:()=>{console.log("彈出消息 =",a.msg),es().toast(a.msg),a.msg=""}};return j(()=>a.search,c=>{console.log("搜索 =",c)}),(c,i)=>{const d=is,f=ps,l=y,b=os,k=as,C=ts,M=ns,N=ss,B=Z,D=Y,V=X,A=S,O=I,P=G("router-view"),x=q,h=E,T=K,z=L;return m(),u("section",null,[s("div",ds,[s("div",null,[t(d,{class:"btn-pri py-n px-x2",icon:"fa-solid fa-plus"},{default:n(()=>[o(" 新增產品 ")]),_:1}),rs,t(l,{class:"btn-pri-out py-n px-x2",ciass:"fx-c"},{default:n(()=>[t(f,{icon:"fa-solid fa-gift"}),ms]),_:1}),us,t(l,{class:"btn-pri-iht py-n px-x2"},{default:n(()=>[o("一個按鈕")]),_:1}),fs,t(l,{bk:!0,class:"bg-pri-iht btn-ip px-x2"},{default:n(()=>[t(f,{ciass:"btn-pri",icon:"fa-solid fa-plus"})]),_:1}),bs,t(l,{bk:!0,class:"btn-tab py-n px-x2"},{default:n(()=>[o("一個按鈕")]),_:1}),xs,s("div",hs,[t(f,{ciass:"btn-pri",icon:"fa-solid fa-plus"})]),vs]),s("div",gs,[t(d,{class:"btn-die btn-ip px",icon:"fa-solid fa-minus"},{default:n(()=>[o(" 增加懷貨 ")]),_:1}),$s,t(b),t(b,{down:!0,iive:!0}),ys,t(k),ws,t(C,{styie:"pri"}),ks,t(M)]),s("div",Cs,[t(N,{class:"",tit:"發送消息",iive:!0},{default:n(()=>[H(s("input",{"onUpdate:modelValue":i[0]||(i[0]=_=>p(a).msg=_),onKeydown:i[1]||(i[1]=Q((..._)=>e.toast&&e.toast(..._),["enter"])),class:"",placeholder:"请输入"},null,544),[[J,p(a).msg]])]),_:1})])]),s("aside",Ms,[s("div",Ns,[t(B,{class:"fx-1",aii:p(a),pk:"search"},null,8,["aii"]),s("div",Bs,[t(l,{class:"btn-pri btn-ip px-x2"},{default:n(()=>[o("彈出")]),_:1})])])]),Ds,s("div",Vs,[s("div",As,[s("nav",Os,[t(D,{ciass:"fs-s"},{default:n(()=>[o(" 全部減價：-90.0 ")]),_:1})])]),s("div",Ps,[s("nav",Ts,[t(d,{onTap:i[2]||(i[2]=_=>e.mod(20)),class:"btn-pri btn-ip px",icon:"fa-solid fa-plus"},{default:n(()=>[o(" 彈出框 ")]),_:1}),t(V,null,{sign:n(()=>[t(d,{class:"btn-pri-iht btn-ip px"},{default:n(()=>[o(" 菜單 ")]),_:1})]),con:n(()=>[zs,Fs,Ks]),_:1})])]),s("div",Ls,[s("nav",qs,[t(l,{class:"btn-pri px py-s br-r-0",onClick:i[3]||(i[3]=_=>e.pan(200))},{default:n(()=>[o("寬面板")]),_:1}),t(l,{class:"btn-pri-out px py-s br-i-0",onClick:i[4]||(i[4]=_=>e.pan(20))},{default:n(()=>[o("窄面板")]),_:1})])])]),s("aside",Es,[s("div",Is,[t(A,{aii:p(a)},null,8,["aii"]),s("div",null,[(m(!0),u(R,null,W(p(a).users,(_,F)=>(m(),u("div",{class:"td",key:F},[s("div",Ss,r(_.id),1),s("div",Us,r(_.name),1),s("div",js,r(_.age),1),s("div",Gs,r(_.addr),1),Hs]))),128))])])]),s("aside",Js,[t(O,null,{default:n(()=>[o(" 女王：1.女性国王的统称。2.也指行事雷厉、果断、霸气、有主见的女性。中国历史上唯一获得普遍认可的女皇是武则天。 [1] 英国已故女王伊丽莎白·亚历山德拉·玛丽·温莎。丹麦现任国王为女王玛格丽特二世。荷兰上一任国王为女王贝娅特丽克丝·威廉明娜·阿姆加德。俄罗斯历史上的著名女皇是叶卡捷琳娜二世。 ")]),_:1})]),t(P),s("div",null,[t(h,{idx:200,big:!0},{default:n(()=>[t(x,{tit:"添加展示備註"},{default:n(()=>[o(" 寬面板裡面的內容 ")]),_:1})]),_:1}),t(h,{idx:20},{default:n(()=>[t(x,{tit:"添加展示備註"},{default:n(()=>[o(" 裡面的內容 ")]),_:1})]),_:1})]),s("div",null,[t(z,{idx:20,class:"mod-s"},{default:n(()=>[t(T,null,{default:n(()=>[o(" MOD內容 ")]),_:1})]),_:1})])])}}});typeof g=="function"&&g(Qs);export{Qs as default};