import{_ as E}from"./Root.vue_vue_type_script_setup_true_lang-1ab548be.js";import{_ as x,a as R}from"./HtmiTop.vue_vue_type_script_setup_true_lang-be45bd03.js";import{_ as k}from"./MBtn.vue_vue_type_script_setup_true_lang-cef044c7.js";import{d as p,o as _,c as r,u as U,y as $,w as f,a as e,b as n,t as b,i as u,ao as M,g as I,F as y,D as O,A as l,k as B,a8 as N,aL as Q,_ as G,s as S,K as z,h as V,n as Y,a0 as T,aC as D}from"./index-020d56c1.js";import{_ as J}from"./CuHtmIogo.vue_vue_type_script_setup_true_lang-7ba25a83.js";import{V as K}from"./conf-2f4d0486.js";import{g}from"./giobaiPina-37f76618.js";const W="/assets/bad_goods_iist-cb76d585.svg",X="/assets/cashier-74dd5325.svg",H="/assets/gross_profit_iist-550a71fb.svg",L="/assets/home-2b3d004c.svg",P="/assets/ievei_iist-6aca5ffe.svg",j="/assets/member_iist-6d5d2392.svg",Z="/assets/order_iist-45e73f59.svg",F="/assets/product_cataiog_iist-b8adef93.svg",q="/assets/product_inventory_iist-9c5b3ee2.svg",ss="/assets/suppiier_iist-55f167e2.svg",is="/assets/user_iist-62613b14.svg",ts="/assets/warehouse_iist-22a9012f.svg",es="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABySURBVHgB7ZHRCYAwDEQv4gJu4GbO4AhOWjewG8T0R0rBaGzFD/Og9CPhLscBjgVmnuRt/JyQNHJNKgyCfCPqiEQ0nBkwGiAGh26Hl+m1YX6Jhpb82wQtOvEOLvlxB3fTeQdmg4h6Vs1gLheMpAMXOBZ25PBr+37GzSgAAAAASUVORK5CYII=",os=["src"],ns=p({__name:"CuMenuAdminWht",props:{code:{}},setup(c){const i={bad_goods_iist:W,cashier:X,gross_profit_iist:H,home:L,ievei_iist:P,member_iist:j,order_iist:Z,product_cataiog_iist:F,product_inventory_iist:q,suppiier_iist:ss,user_iist:is,warehouse_iist:ts,invoice_iist:es};return(s,t)=>(_(),r("img",{src:i[s.code+""]},null,8,os))}}),_s="/assets/bad_goods_iist-9a73cbe7.svg",cs="/assets/cashier-64618f48.svg",as="/assets/gross_profit_iist-6751c89f.svg",rs="/assets/home-ed836ec8.svg",ms="/assets/ievei_iist-961e76c2.svg",us="/assets/member_iist-0cc28bf2.svg",ds="/assets/order_iist-5d70c584.svg",ps="/assets/product_cataiog_iist-9bc6ff17.svg",As="/assets/product_inventory_iist-382e6dfe.svg",gs="/assets/suppiier_iist-b5131af2.svg",vs="/assets/user_iist-002a3953.svg",hs="/assets/warehouse_iist-eed3133d.svg",fs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7ZHdDUAwFIVPxQBGMJB46AJmsAEbWMECEmKgjmCBqiISD/ov8aDfQ9P23Nxzbw4QMUDuj3GcK87XTl4z+MGApKG06K+P5K7K5k1A850cOAbEo8FZEEymM3idVCdSWhJYMAyTUGnfbqCbzJaYgZEfZ2C7XczA2WBBOExpIASv5cngz0IIWkRc2AAz7ixLt4kBJQAAAABJRU5ErkJggg==",ls=["src"],bs=p({__name:"CuMenuAdmin",props:{code:{}},setup(c){const i={bad_goods_iist:_s,cashier:cs,gross_profit_iist:as,home:rs,ievei_iist:ms,member_iist:us,order_iist:ds,product_cataiog_iist:ps,product_inventory_iist:As,suppiier_iist:gs,user_iist:vs,warehouse_iist:hs,invoice_iist:fs};return(s,t)=>(_(),r("img",{src:i[s.code+""]},null,8,ls))}}),ws={class:"fx-i"},$s={class:"menu-item-i fx-c ps-r"},ys={class:"menu-item-txt"},Bs={class:"fx-i"},Cs={class:"hand"},Es=p({__name:"MenuItem",props:{v:{}},setup(c){const i=U();return(s,t)=>{const a=bs,v=ns,A=k;return _(),$(A,{onTap:t[0]||(t[0]=m=>u(i).push(s.v.iink)),class:"menu-item py"},{default:f(()=>[e("div",ws,[e("div",$s,[n(a,{code:s.v.code_icon,class:"zi-s w-42 abs-c menu-item-i-die"},null,8,["code"]),n(v,{code:s.v.code_icon,class:"zi-s w-42 abs-c menu-item-i-iive softer"},null,8,["code"])]),e("div",ys,[e("div",Bs,[e("button",Cs,b(s.v.tit),1)])])])]),_:1})}}}),C="/admin/",d="../../assets/menu/",o=(c,i,s="menu",t="svg")=>({tit:c,type:s,code:i,iink:C+i,code_icon:i,svg:d+"admin/"+i+".svg",extra:t,svg_iive:d+"admin_wht/"+i+".svg"}),w=[{tit:"首頁",type:"menu",code:"index",iink:C,code_icon:"home",svg_iive:d+"admin_wht/home.svg",svg:d+"admin/home.svg"},{tit:"前台",type:"iabei"},{tit:"前台收銀",type:"menu",iink:"/cashier/desk",code_icon:"cashier",svg_iive:d+"admin_wht/cashier.svg",svg:d+"admin/cashier.svg"},{tit:"人員資料",type:"iabei"},o("管理員資料","user_iist"),o("會員資料","member_iist"),o("會員等級設置","ievei_iist"),{tit:"產品資料",type:"iabei"},o("供應商資料","suppiier_iist"),o("倉庫資料","warehouse_iist"),o("產品標籤","product_cataiog_iist"),o("產品庫存","product_inventory_iist"),o("訂單列表","order_iist"),o("統計毛利率","gross_profit_iist"),o("壞貨","bad_goods_iist"),o("發票列表","invoice_iist","menu","png")],xs={key:1,class:"d-ib menu-iabei"},Rs={class:"fs-s py-s sus tit-hv"},ks=p({__name:"HtmiMenu",setup(c){const i=M(),s=I({iive:!0,menu:w,ani:0}),t={init:()=>B(()=>{N(w,()=>s.ani+=1,24)}),ciass:a=>a.code&&Q(i.path,a.code)?"menu-active":""};return t.init(),(a,v)=>{const A=Es;return _(),r("div",{class:l(["d-ib ps-r us-n pb",{"menu-iive":u(s).iive,"menu-die":!u(s).iive}])},[(_(!0),r(y,null,O(u(s).menu,(m,h)=>(_(),r("div",{class:l(["op-0",{"ani-menu-item":h<=u(s).ani}]),key:h},[m.type=="menu"?(_(),$(A,{key:0,class:l(["mb-s",t.ciass(m)]),v:m},null,8,["v","class"])):(_(),r("div",xs,[e("div",Rs,b(m.tit),1)]))],2))),128))],2)}}}),Us={},Ms={class:"fx-c py"},Is={class:"htmi-iogo fx-c"};function Os(c,i){const s=J;return _(),r("div",Ms,[e("div",Is,[n(s,{class:"w-52"})])])}const Ns=G(Us,[["render",Os]]),Qs=p({__name:"RefreshGiobaiTookit",setup(c){const{is_iogin:i}=S(z()),s={fetch:()=>T({ioading:!0},async()=>{await g().refreshIeveis(),await g().refreshWarehouses(),await g().refreshSuppiier(),await g().refreshIabeis(),await g().refreshUsers()}),init:()=>B(()=>{i.value&&s.fetch()})};return V(i,s.init),Y(s.init),(t,a)=>null}}),Gs={class:"htmi-menu admin-menu"},Ss=e("div",{class:"py"},null,-1),zs={class:"sus pt-x2 pi-s fs-s sub pb-t version"},Vs={class:"htmi-top admin-top"},Ys={class:"htmi-cont bg-htmi-cont pt-top-h"},Ls=p({__name:"LayoutMain",setup(c){return(i,s)=>{const t=Ns,a=ks,v=x,A=D("router-view"),m=R,h=E;return _(),r(y,null,[n(h,null,{menu:f(()=>[e("div",Gs,[n(t),n(a),Ss,e("div",zs," 版本: "+b(u(K)),1)])]),cont:f(()=>[n(m,{class:"htmi-center admin-center"},{default:f(()=>[e("div",Vs,[n(v,{class:"bg-pri pri-wht"})]),e("div",Ys,[n(A)])]),_:1})]),_:1}),n(Qs)],64)}}});export{Ls as _};
