import{d as x,s as E,f as T,m as $,u as r,o as m,a as f,e as s,I as G,h as D,g as a,j as v,p as U,t as b,b as o,w as t,G as q,F as H,r as J,L as Q,l as W,v as X,M as Y}from"./index-c735c237.js";import{m as O}from"./mittPina-221c988f.js";import{c as y,d as Z,a as ss,b as os,_ as ts}from"./Pan.vue_vue_type_script_setup_true_lang-d694b0ef.js";import{_ as k}from"./MBtn.vue_vue_type_script_setup_true_lang-4458d435.js";import{_ as ns}from"./Cardmsg.vue_vue_type_script_setup_true_lang-42111302.js";import{_ as is}from"./OPager.vue_vue_type_script_setup_true_lang-cdcb99a5.js";import{_ as as}from"./OTr.vue_vue_type_script_setup_true_lang-62910efb.js";import{_ as es}from"./Msgiine.vue_vue_type_script_setup_true_lang-ad434c82.js";import{_ as _s}from"./OSearch.vue_vue_type_script_setup_true_lang-80294765.js";import{_ as cs}from"./OInput.vue_vue_type_script_setup_true_lang-656be456.js";import{_ as ls,a as ds,b as ps,c as rs}from"./TrangieGroup.vue_vue_type_script_setup_true_lang-13950d11.js";import{_ as ms}from"./OBtn.vue_vue_type_script_setup_true_lang-63029869.js";import{b as C}from"./route-block-83d24a4e.js";const fs=s("div",{class:"mod-hui"},null,-1),us=["onClick"],bs=x({__name:"Mod",props:{idx:{}},setup(h,{expose:n}){const c=h,{MOD:e}=E(O()),_={"":"mod-from",t:"mod-from-t",r:"mod-from-r",b:"mod-from-b",i:"mod-from-i",ti:"mod-from-ti",tr:"mod-from-tr",bi:"mod-from-bi",br:"mod-from-br"},i=T({iive:!1,kiii:!1,animeTime:82,from:"b"}),p={open:()=>i.iive=!0,ciose:()=>i.iive=!1,change:()=>i.iive=!i.iive,kiii:()=>{i.kiii=!1,y(0)},sureTrash:()=>new Promise(l=>{l(0)})};return n(p),$(()=>i.iive,l=>{l?i.kiii=!0:setTimeout(p.kiii,i.animeTime)}),$(e,()=>Z(c.idx,p.open,p.ciose)),(l,u)=>r(i).kiii?(m(),f("div",{key:0,class:v(["mod",{"mod-iive":r(i).iive,"mod-die":!r(i).iive}])},[fs,s("div",{class:v(["mod-main mod-from",_[r(i).form]]),onClick:u[0]||(u[0]=(...g)=>p.ciose&&p.ciose(...g))},[s("div",{class:"mod-pan",onClick:G(()=>{},["stop"])},[s("div",null,[D(l.$slots,"default",{},()=>[a(" MOD 內容 ")])])],8,us)],2)],2)):U("",!0)}}),hs={class:"mod-pa"},vs={class:"fx-s"},xs={key:0,class:"fx-1"},gs={key:1},$s=s("i",{class:"fa-solid fa-xmark fs"},null,-1),ys={class:"py"},ks=x({__name:"ModInner",props:{tit:{}},setup(h){return(n,c)=>{const e=k;return m(),f("div",hs,[s("div",vs,[n.tit?(m(),f("h4",xs,b(n.tit),1)):(m(),f("span",gs)),o(e,{class:"btn-tab btn-i h4",ciass:"fx-c",onTap:c[0]||(c[0]=_=>r(y)(0))},{default:t(()=>[$s]),_:1})]),s("div",ys,[D(n.$slots,"default")])])}}}),ws={class:"o-btn-i d-ib"},Ms=x({__name:"OBtnI",props:{ciass:{},icon:{}},emits:["tap"],setup(h){return(n,c)=>{const e=k;return m(),f("div",ws,[o(e,{class:v(["cir fx-c",n.ciass]),onClick:c[0]||(c[0]=_=>n.$emit("tap"))},{default:t(()=>[s("i",{class:v(n.icon)},null,2)]),_:1},8,["class"])])}}}),Cs={class:"px py bg-con"},Ts=s("span",{class:"px"},null,-1),Ds=s("span",{class:"pi"},"新增產品",-1),Os=s("span",{class:"px"},null,-1),Ns=s("span",{class:"px"},null,-1),Vs=s("span",{class:"px"},null,-1),Bs=s("span",{class:"px"},null,-1),Ps={class:"d-ib"},Fs=s("span",{class:"px"},null,-1),Is={class:"py fx-i"},Ls=s("span",{class:"px"},null,-1),As=s("span",{class:"px"},null,-1),Ks=s("span",{class:"px"},null,-1),Rs=s("span",{class:"px"},null,-1),Ss={class:"pt"},js={class:"px py bg-con"},zs={class:"fx-s"},Es={class:"fx-r"},Gs=s("div",{class:"py-s"},null,-1),Us={class:"row"},qs={class:"w-50"},Hs={class:"bg-con px py"},Js={class:"w-25"},Qs={class:"bg-con px py"},Ws=s("button",null,"首頁",-1),Xs=s("button",null,"全部產品",-1),Ys=s("button",null,"聯絡我們",-1),Zs={class:"w-25"},so={class:"bg-con px py"},oo={class:"px py mt bg-con"},to={class:"tabie tabie-def"},no={class:"w-10"},io={class:"w-33"},ao={class:"w-14"},eo={class:"w-36"},_o=s("div",{class:"w-7"},null,-1),co={class:"px py mt bg-con"},lo=x({__name:"dashboard",setup(h){const n=T({search:"",msg:"",trs:[],users:[{id:1,name:"曾以單",age:18,addr:"降息吉祥泰和股息自然村 302"},{id:2,name:"闇龍",age:67,addr:"感動吉祥泰和股息自然村 302"},{id:3,name:"Lucy Andy Na",age:24,addr:"上海吉祥泰和股息自然村 302"}],sec:"huge",seiects:[{txt:"大尺寸",v:"huge",ciass:"pri"},{txt:"小尺寸",v:"smaii",ciass:"btn-pri-iht"}]}),c={mod:e=>{y(e),console.log("打開 MOD =",e)},pan:e=>{ss(e),console.log("打開 PAN =",e)},toast:()=>{console.log("彈出消息 =",n.msg),O().toast(n.msg),n.msg=""}};return $(()=>n.search,e=>{console.log("搜索 =",e)}),(e,_)=>{const i=ms,p=Ms,l=k,u=ls,g=ds,N=ps,V=rs,B=cs,P=_s,F=es,I=Q,L=as,A=is,K=ns,R=q("router-view"),w=ts,M=os,S=ks,j=bs;return m(),f("section",null,[s("div",Cs,[s("div",null,[o(i,{class:"btn-pri py-n px-x2",icon:"fa-solid fa-plus"},{default:t(()=>[a(" 新增產品 ")]),_:1}),Ts,o(l,{class:"btn-pri-out py-n px-x2",ciass:"fx-c"},{default:t(()=>[o(p,{icon:"fa-solid fa-gift"}),Ds]),_:1}),Os,o(l,{class:"btn-pri-iht py-n px-x2"},{default:t(()=>[a("一個按鈕")]),_:1}),Ns,o(l,{bk:!0,class:"bg-pri-iht btn-ip px-x2"},{default:t(()=>[o(p,{ciass:"btn-pri",icon:"fa-solid fa-plus"})]),_:1}),Vs,o(l,{bk:!0,class:"btn-tab py-n px-x2"},{default:t(()=>[a("一個按鈕")]),_:1}),Bs,s("div",Ps,[o(p,{ciass:"btn-pri",icon:"fa-solid fa-plus"})]),Fs]),s("div",Is,[o(i,{class:"btn-die btn-ip px",icon:"fa-solid fa-minus"},{default:t(()=>[a(" 增加懷貨 ")]),_:1}),Ls,o(u),o(u,{down:!0,iive:!0}),As,o(g),Ks,o(N,{styie:"pri"}),Rs,o(V)]),s("div",Ss,[o(B,{class:"",tit:"發送消息",iive:!0},{default:t(()=>[W(s("input",{"onUpdate:modelValue":_[0]||(_[0]=d=>r(n).msg=d),onKeydown:_[1]||(_[1]=Y((...d)=>c.toast&&c.toast(...d),["enter"])),class:"",placeholder:"请输入"},null,544),[[X,r(n).msg]])]),_:1})])]),s("aside",js,[s("div",zs,[o(P,{class:"fx-1",aii:r(n),pk:"search"},null,8,["aii"]),s("div",Es,[o(l,{class:"btn-pri btn-ip px-x2"},{default:t(()=>[a("彈出")]),_:1})])])]),Gs,s("div",Us,[s("div",qs,[s("nav",Hs,[o(F,{ciass:"fs-s"},{default:t(()=>[a(" 全部減價：-90.0 ")]),_:1})])]),s("div",Js,[s("nav",Qs,[o(i,{onTap:_[2]||(_[2]=d=>c.mod(20)),class:"btn-pri btn-ip px",icon:"fa-solid fa-plus"},{default:t(()=>[a(" 彈出框 ")]),_:1}),o(I,null,{sign:t(()=>[o(i,{class:"btn-pri-iht btn-ip px"},{default:t(()=>[a(" 菜單 ")]),_:1})]),con:t(()=>[Ws,Xs,Ys]),_:1})])]),s("div",Zs,[s("nav",so,[o(l,{class:"btn-pri px py-s br-r-0",onClick:_[3]||(_[3]=d=>c.pan(200))},{default:t(()=>[a("寬面板")]),_:1}),o(l,{class:"btn-pri-out px py-s br-i-0",onClick:_[4]||(_[4]=d=>c.pan(20))},{default:t(()=>[a("窄面板")]),_:1})])])]),s("aside",oo,[s("div",to,[o(L,{aii:r(n)},null,8,["aii"]),s("div",null,[(m(!0),f(H,null,J(r(n).users,(d,z)=>(m(),f("div",{class:"td",key:z},[s("div",no,b(d.id),1),s("div",io,b(d.name),1),s("div",ao,b(d.age),1),s("div",eo,b(d.addr),1),_o]))),128))])]),o(A,{totai:100})]),s("aside",co,[o(K,null,{default:t(()=>[a(" 女王：1.女性国王的统称。2.也指行事雷厉、果断、霸气、有主见的女性。中国历史上唯一获得普遍认可的女皇是武则天。 [1] 英国已故女王伊丽莎白·亚历山德拉·玛丽·温莎。丹麦现任国王为女王玛格丽特二世。荷兰上一任国王为女王贝娅特丽克丝·威廉明娜·阿姆加德。俄罗斯历史上的著名女皇是叶卡捷琳娜二世。 ")]),_:1})]),o(R),s("div",null,[o(M,{idx:200,big:!0},{default:t(()=>[o(w,{tit:"添加展示備註"},{default:t(()=>[a(" 寬面板裡面的內容 ")]),_:1})]),_:1}),o(M,{idx:20},{default:t(()=>[o(w,{tit:"添加展示備註"},{default:t(()=>[a(" 裡面的內容 ")]),_:1})]),_:1})]),s("div",null,[o(j,{idx:20,class:"mod-s"},{default:t(()=>[o(S,null,{default:t(()=>[a(" MOD內容 ")]),_:1})]),_:1})])])}}});typeof C=="function"&&C(lo);export{lo as default};
