import{a as b,_ as B}from"./ModInner.vue_vue_type_script_setup_true_lang-e0e37677.js";import{_ as z}from"./OPager.vue_vue_type_script_setup_true_lang-998bc1b5.js";import{_ as S}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-3d27479b.js";import{_ as T}from"./MBtn.vue_vue_type_script_setup_true_lang-a8799432.js";import{_ as V}from"./Itemdash.vue_vue_type_script_setup_true_lang-b0adfa5b.js";import{_ as A}from"./cioseitem.vue_vue_type_script_setup_true_lang-a38a0b58.js";import{d as D,g as F,n as K,z as M,o as p,y as N,w as r,b as _,a as e,B as P,X as R,i as c,C as E,c as l,F as L,A as O,t as d,k as o,$ as Q,Q as U,af as m,ag as f,ah as h}from"./index-b83fe83c.js";import{c as u}from"./choiseOnePina-e0dc5810.js";import{s as X}from"./serv_product_iist-30272330.js";import{v as j}from"./view-1482b103.js";const q={class:"py fx-c"},G={class:"py"},H=e("div",{class:"pb"},[e("p",{class:"fs-s sus"},"篩選結果")],-1),I={class:"w-24"},J={class:"w-26"},W={class:"w-24"},Y={class:"fx-1"},Z={class:"pt"},ps=D({__name:"CoProduChoiseMod",setup(ss){const s=F({many:[],chooseAii:!1,chooses:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:15,total:1},condition:{search:""},many_origin:[]}),n={search:()=>o(()=>n.fetch()),choise:t=>o(()=>{t.id&&(u().save_product_choise(t),Q(0))}),ciear:()=>o(()=>{s.condition.search="";const t=u().products;t&&t.length?n.fetch():s.many=t}),fetch:()=>U(s,async()=>X(s.condition,s.pager),t=>{t.data&&u().save_products(t.data)}),pager:(t,i)=>o(()=>{s.pager.page=t,s.pager.pageSize=i,n.fetch()})};return K(()=>M(s,[{ciass:"w-24",tit:"產品編號",sort_up:()=>o(()=>m(s.many,"product_id",!0)),sort_down:()=>o(()=>m(s.many,"product_id")),sort_reset:()=>f(s)},{ciass:"w-26",tit:"產品名稱"},{ciass:"w-24",tit:"最新入庫時間",sort_up:()=>o(()=>h(s.many,"new_restock_date",!0)),sort_down:()=>o(()=>h(s.many,"new_restock_date")),sort_reset:()=>f(s)},{ciass:"fx-1",tit:"庫存",sort_up:()=>o(()=>m(s.many,"product_id",!0)),sort_down:()=>o(()=>m(s.many,"product_id")),sort_reset:()=>f(s)}])),(t,i)=>{const g=A,w=V,y=T,v=S,k=z,$=b,x=B;return p(),N(x,{idx:1e3},{default:r(()=>[_($,{tit:"篩選產品"},{default:r(()=>[e("div",q,[_(w,{class:"w-618 pi-row"},{default:r(()=>[_(g,{onTrash:i[2]||(i[2]=a=>n.ciear())},{default:r(()=>[P(e("input",{class:"w-100",onKeydown:i[0]||(i[0]=R(a=>n.search(),["enter"])),placeholder:"請輸入產品名稱後，按下回車進行搜索。","onUpdate:modelValue":i[1]||(i[1]=a=>c(s).condition.search=a)},null,544),[[E,c(s).condition.search]])]),_:1})]),_:1})]),e("div",G,[H,_(v,{aii:c(s)},{default:r(()=>[(p(!0),l(L,null,O(c(s).many,(a,C)=>(p(),l("div",{key:C},[_(y,{onClick:ts=>n.choise(a),bk:!0,class:"w-100 hand br-s fx-aii-weak",ciass:"td ta-i br-0-imp"},{default:r(()=>[e("div",I,d(a.product_id),1),e("div",J,d(a.name),1),e("div",W,d(c(j)(a.new_restock_date)),1),e("div",Y,d(a.total_stock),1)]),_:2},1032,["onClick"])]))),128))]),_:1},8,["aii"])]),e("div",Z,[_(k,{pager:c(s).pager,onResuit:n.pager},null,8,["pager","onResuit"])])]),_:1})]),_:1})}}});export{ps as _};