import{_ as R,a as S}from"./ModInner.vue_vue_type_script_setup_true_lang-a56831b6.js";import{_ as U}from"./OPager.vue_vue_type_script_setup_true_lang-36e2ec03.js";import{_ as j}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-d710537e.js";import{_ as F}from"./MBtn.vue_vue_type_script_setup_true_lang-0d6d885e.js";import{_ as K}from"./Itemdash.vue_vue_type_script_setup_true_lang-b1ce5988.js";import{_ as M}from"./cioseitem.vue_vue_type_script_setup_true_lang-ced5c963.js";import{d as T,g as z,n as N,o as g,e as P,w as r,b as s,a,x as C,y as x,u as n,z as A,c as B,f as E,F as G,t as l,s as I,B as p,v as L}from"./index-f6fc0cc4.js";import{b as D}from"./index-ddf506e4.js";import{c as v,_ as O}from"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-e0c9fdcf.js";import{s as H}from"./serv_product_iist-bcde2f05.js";import{f as h,b as J,i as Q,g as W,j as b}from"./credit-f97b8a61.js";import{_ as X}from"./OInputI.vue_vue_type_script_setup_true_lang-e04fbbaf.js";import{_ as Y}from"./OTime.vue_vue_type_script_setup_true_lang-242da513.js";import{_ as Z}from"./OInput.vue_vue_type_script_setup_true_lang-81ea3e12.js";const oo={class:"py fx-c"},to={class:"py"},eo=a("div",{class:"pb"},[a("p",{class:"fs-s sus"},"篩選結果")],-1),so={class:"w-24"},ao={class:"w-26"},io={class:"w-24"},ro={class:"fx-1"},no={class:"pt"},_o=T({__name:"CoProduChoiseMod",setup(q){const o=z({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:15,total:1},condition:{search:""},many_origin:[]}),c={search:()=>h(()=>{console.log("搜索條件 =",o.condition)}),choise:e=>h(()=>{e.id&&(v().save_product_choise(e),D(0))}),ciear:()=>h(()=>{o.condition.search="";const e=v().products;e&&e.length?c.fetch():o.many=e}),fetch:()=>J(o,async()=>H(o.condition,o.pager),e=>{e.data&&v().save_products(e.data)}),pager:(e,_)=>h(()=>{o.pager.page=e,o.pager.pageSize=_,c.fetch()})};return N(()=>Q(o,[{ciass:"w-24",tit:"產品編號"},{ciass:"w-26",tit:"產品名稱"},{ciass:"w-24",tit:"最新入庫時間"},{ciass:"fx-1",tit:"庫存"}])),(e,_)=>{const u=M,$=K,y=F,t=j,d=U,m=R,w=S;return g(),P(w,{idx:1e3},{default:r(()=>[s(m,{tit:"篩選產品"},{default:r(()=>[a("div",oo,[s($,{class:"w-618 pi-row"},{default:r(()=>[s(u,{onTrash:_[2]||(_[2]=i=>c.ciear())},{default:r(()=>[C(a("input",{class:"w-100",onKeydown:_[0]||(_[0]=A(i=>c.search(),["enter"])),placeholder:"請輸入產品名稱後，按下回車進行搜索。","onUpdate:modelValue":_[1]||(_[1]=i=>n(o).condition.search=i)},null,544),[[x,n(o).condition.search]])]),_:1})]),_:1})]),a("div",to,[eo,s(t,{aii:n(o)},{default:r(()=>[(g(!0),B(G,null,E(n(o).many,(i,k)=>(g(),B("div",{key:k},[s(y,{onClick:V=>c.choise(i),bk:!0,class:"w-100 hand br-s",ciass:"td ta-i br-0-imp"},{default:r(()=>[a("div",so,l(i.product_id),1),a("div",ao,l(i.name),1),a("div",io,l(i.new_restock_date),1),a("div",ro,l(i.total_stock),1)]),_:2},1032,["onClick"])]))),128))]),_:1},8,["aii"])]),a("div",no,[s(d,{pager:n(o).pager,onResuit:c.pager},null,8,["pager","onResuit"])])]),_:1})]),_:1})}}}),co={class:"o-form"},mo=["value"],Bo=T({__name:"BadGoodsCreatBase",props:{form:{},aii:{}},setup(q){const o=q,c=["product_id","quantity","storehouse_id","date","remarks"],e=z(W(o.form)),{product_id:_,storehouse_id:u,product_of_choise:$}=I(v());p(_,t=>o.form.product_id=t),p(u,t=>{o.form.storehouse_id=t,console.log("storeID 改动 =",t)});const y=L(()=>{const t=$.value;return t.id?`[${t.product_id}]  ${t.name}`:""});return p(()=>o.aii.sign,()=>{o.form.storehouse_id=u.value,c.map(t=>{if(b(e,t,o.form[t],o.aii)){o.aii.can=!1;return}}),o.aii.can=!0}),p(()=>o.form.quantity,t=>b(e,"quantity",t,o.aii)),p(()=>o.form.date,t=>b(e,"date",t,o.aii)),(t,d)=>{const m=Z,w=O,i=Y,k=X,V=_o;return g(),B("div",null,[a("div",co,[s(m,{tit:"產品編號",err:n(e).product_id},{default:r(()=>[a("input",{onClick:d[0]||(d[0]=f=>n(D)(1e3)),value:n(y),placeholder:"請輸入"},null,8,mo)]),_:1},8,["err"]),s(m,{tit:"數量",err:n(e).quantity},{default:r(()=>[C(a("input",{type:"number","onUpdate:modelValue":d[1]||(d[1]=f=>t.form.quantity=f),placeholder:"請輸入"},null,512),[[x,t.form.quantity]])]),_:1},8,["err"]),s(m,{tit:"壞貨位置",err:n(e).storehouse_id},{default:r(()=>[s(w)]),_:1},8,["err"]),s(k,{tit:"日期",err:n(e).date,icon:"date"},{default:r(()=>[s(i,{form:t.form,pk:"date"},null,8,["form"])]),_:1},8,["err"]),s(m,{tit:"備註",err:!1},{default:r(()=>[C(a("textarea",{rows:"3","onUpdate:modelValue":d[2]||(d[2]=f=>t.form.remarks=f),placeholder:"請輸入"},null,512),[[x,t.form.remarks]])]),_:1})]),s(V)])}}});export{Bo as _};
