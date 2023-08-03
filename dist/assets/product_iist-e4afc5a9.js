import{_ as S}from"./IayoutIistTwo.vue_vue_type_script_setup_true_lang-8c2a4647.js";import{_ as O}from"./OPager.vue_vue_type_script_setup_true_lang-49866657.js";import{_ as W}from"./OOpenPan.vue_vue_type_script_setup_true_lang-f27c0d5e.js";import{E as A,_ as I}from"./errors_product-a7bfbfad.js";import{_ as B}from"./BtnPriOut.vue_vue_type_script_setup_true_lang-a951cea3.js";import{_ as F}from"./OBtnPius.vue_vue_type_script_setup_true_lang-3682d34d.js";import{_ as M}from"./OSearch.vue_vue_type_script_setup_true_lang-8e167baa.js";import{_ as j}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-cd268988.js";import{_ as z}from"./OSeiect.vue_vue_type_script_setup_true_lang-25305585.js";import{d as $,o as v,a as k,e as s,b as r,u as _,w as n,g as H,h as q,n as N,c as E,r as x,t as h,F as G,f as y,x as c,q as g,v as w}from"./index-a3556410.js";import{_ as K}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-b2f8e7bf.js";import{_ as L}from"./OTabieTrash-e165765e.js";import{_ as J}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-fb4755fb.js";import{m as Q}from"./memberPina-0f911567.js";import{i as X}from"./anim-b74d0266.js";import{f as U,g as D,j as f,b as Y,a as Z}from"./credit-1302e1e4.js";import{_ as oo,a as io}from"./Pan.vue_vue_type_script_setup_true_lang-7b26f81b.js";import{_ as to}from"./OBtnSave.vue_vue_type_script_setup_true_lang-bb8db2f7.js";import{_ as T}from"./OInputI.vue_vue_type_script_setup_true_lang-b1b3b174.js";import{_ as eo}from"./OInput.vue_vue_type_script_setup_true_lang-9fe4ab40.js";import{_ as so}from"./OTime.vue_vue_type_script_setup_true_lang-a80503da.js";import{n as ro}from"./errors_user-4f4e50fd.js";import{a as no,b as ao,s as _o}from"./net-tooi-ea9b75e1.js";import{b as V}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-32af1671.js";import"./index-dde68e1c.js";import"./mittPina-ba3b533f.js";import"./Oi.vue_vue_type_script_setup_true_lang-4f5c19e6.js";import"./XMarkIcon-aef9f9f5.js";import"./datepicker.esm-c1dc5fc6.js";import"./dayjs.min-bdea528d.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-13b18b27.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-beb8cd00.js";import"./OTr.vue_vue_type_script_setup_true_lang-df772011.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-8d1ab7b5.js";import"./vai_member-1e809082.js";import"./giobaiPina-502a2a8e.js";import"./iodash-7802481d.js";import"./judge-0b511643.js";const P=[{txt:"粉紅色",v:"pink",ciass:""},{txt:"紅色",v:"red",ciass:""}],po="pink",mo=[{txt:"標籤",v:"",ciass:"o-fiiter-reset"},...P],lo=[{txt:"供應商 一",v:"一",ciass:""},{txt:"供應商 二",v:"二",ciass:""}],co="一",uo=[{txt:"供應商",v:"",ciass:"o-fiiter-reset"},...P],R={seiect_tag:P,seiect_tag_def:po,seiect_tag_fiiter:mo,seiect_supplier:lo,seiect_supplier_def:co,seiect_supplier_fiiter:uo},fo={class:"fx-s"},go={class:"fx-1 row fx-i"},wo={class:"w-20"},ho={class:"w-20"},vo={class:"w-21"},bo={class:"pi fx-c"},$o=s("span",{class:"px-s"},null,-1),ko=$({__name:"ProductIistFiiter",props:{aii:{}},setup(d){return(i,l)=>{const t=z,o=j,e=M,u=F,m=B;return v(),k("div",fo,[s("div",go,[s("div",wo,[r(t,{class:"input w-100",form:i.aii.condition,pk:"label",many:_(R).seiect_tag_fiiter},null,8,["form","many"])]),s("div",ho,[r(t,{class:"input w-100",form:i.aii.condition,pk:"supplier",many:_(R).seiect_supplier_fiiter},null,8,["form","many"])]),s("div",vo,[r(o,{class:"input",form:i.aii.condition,pk:"date",pchd:"最新入貨日期"},null,8,["form"])]),r(e,{class:"fx-1",aii:i.aii,pk:"search"},null,8,["aii"])]),s("div",bo,[r(u,{class:"py",tit:"添加產品資料"}),$o,r(m,{class:"py"},{default:n(()=>[H(" 印列產品列表 ")]),_:1})])])}}}),yo={class:"w-9"},Uo={class:"w-13"},Eo={class:"w-9"},Po={class:"w-15"},Vo={class:"w-11"},Ro={class:"w-11"},No={class:"w-9"},Do={class:"w-10"},To={class:"w-6"},Co={class:"fx-1 ta-r"},So=s("p",{class:"hand"},"庫存詳情",-1),Oo=$({__name:"ProductIistTabie",props:{aii:{}},setup(d){const i=d,l=q();N(()=>new Promise(o=>{i.aii.trs.length=0,X([{ciass:"w-9",tit:"產品編號",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-13",tit:"產品名稱"},{ciass:"w-9",tit:"供應商"},{ciass:"w-15",tit:"最新入貨時間",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-11",tit:"最新入貨價錢",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-11",tit:"最新最低價錢",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-9",tit:"最新售價",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-10",tit:"入貨平均價",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"w-6",tit:"庫存",sort_up:()=>{console.log("UP sort")},sort_down:()=>{console.log("DOWN sort")},sort_reset:()=>{console.log("RESET sort")}},{ciass:"fx-1",tit:""}],e=>i.aii.trs.push(e),32),o(0)}));const t={edit:o=>U(()=>{Q().save("one_of_edit",o),l.push("/admin/order_iist/edit")}),trash:o=>U(()=>{console.log("刪除～ =",o)})};return(o,e)=>{const u=J,m=L,b=K;return v(),E(b,{aii:o.aii},{default:n(()=>[(v(!0),k(G,null,x(o.aii.many,(a,p)=>(v(),k("div",{class:"td",key:p},[s("div",yo,h(a.product_id),1),s("div",Uo,h(a.name),1),s("div",Eo,h(a.new_supplier),1),s("div",Po,h(a.new_restock_date),1),s("div",Vo,h(a.new_restock_price),1),s("div",Ro,h(a.new_lowest_price),1),s("div",No,h(a.new_selling_price),1),s("div",Do,h(a.average_restock_price),1),s("div",To,h(a.total_stock),1),s("div",Co,[So,s("div",null,[r(u,{onClick:C=>t.edit(a),class:"mr-s"},null,8,["onClick"]),r(m,{onClick:C=>t.trash(a)},null,8,["onClick"])])])]))),128))]),_:1},8,["aii"])}}}),Wo={class:"o-form"},Ao=$({__name:"CoProductInventAiiocatForm",props:{form:{},aii:{}},setup(d){const i=d,l=["num_warehouse"],t=y(D(i.form));return c(()=>i.aii.sign,()=>{l.map(o=>{if(f(t,o,i.form[o],i.aii)){i.aii.can=!1;return}}),i.aii.can=!0}),c(()=>i.form.num_warehouse,o=>f(t,"num_warehouse",o,i.aii)),(o,e)=>{const u=T;return v(),k("div",Wo,[r(u,{tit:"倉庫數量",err:_(t).num_warehouse,icon:"store"},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[0]||(e[0]=m=>o.form.num_warehouse=m),type:"number",placeholder:"請輸入"},null,512),[[w,o.form.num_warehouse]])]),_:1},8,["err"]),r(u,{tit:"A店鋪數量",err:_(t).num_a_shop,icon:"store"},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[1]||(e[1]=m=>o.form.num_a_shop=m),type:"number",placeholder:"請輸入"},null,512),[[w,o.form.num_a_shop]])]),_:1},8,["err"]),r(u,{tit:"B店鋪數量",err:_(t).num_b_shop,icon:"store"},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[2]||(e[2]=m=>o.form.num_b_shop=m),type:"number",placeholder:"請輸入"},null,512),[[w,o.form.num_b_shop]])]),_:1},8,["err"])])}}}),Io=$({__name:"OHours",props:{form:{},pk:{}},setup(d){const i=d;return c({v:()=>i.form[i.pk]}.v,t=>{console.log("N =",t)}),(t,o)=>g((v(),k("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>t.form[t.pk]=e),placeholder:"00:00"},null,512)),[[w,t.form[t.pk]]])}}),Bo={class:"o-form"},Fo=$({__name:"CoProductIncomeCreatForm",props:{form:{},aii:{}},setup(d){const i=d,l=["in_date","in_time","suppiier_number","suppiier_name","name","number","in_price","iow_price","price","invent"],t=y(D(i.form));return c(()=>i.aii.sign,()=>{l.map(o=>{if(f(t,o,i.form[o],i.aii)){i.aii.can=!1;return}}),i.aii.can=!0}),c(()=>i.form.in_date,o=>f(t,"in_date",o,i.aii)),c(()=>i.form.in_time,o=>f(t,"in_time",o,i.aii)),c(()=>i.form.suppiier_number,o=>f(t,"suppiier_number",o,i.aii)),c(()=>i.form.suppiier_name,o=>f(t,"suppiier_name",o,i.aii)),c(()=>i.form.name,o=>f(t,"name",o,i.aii)),c(()=>i.form.number,o=>f(t,"number",o,i.aii)),c(()=>i.form.in_price,o=>f(t,"in_price",o,i.aii)),c(()=>i.form.iow_price,o=>f(t,"iow_price",o,i.aii)),c(()=>i.form.price,o=>f(t,"price",o,i.aii)),c(()=>i.form.invent,o=>f(t,"invent",o,i.aii)),(o,e)=>{const u=so,m=T,b=Io,a=eo;return v(),k("div",Bo,[r(m,{tit:"入庫日期",err:_(t).in_date,icon:"date"},{default:n(()=>[r(u,{form:o.form,pk:"in_date"},null,8,["form"])]),_:1},8,["err"]),r(m,{tit:"入庫時間",err:_(t).in_time,icon:"hour"},{default:n(()=>[r(b,{form:o.form,pk:"in_time"},null,8,["form"])]),_:1},8,["err"]),r(a,{tit:"供應商編號",err:_(t).suppiier_number},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[0]||(e[0]=p=>o.form.suppiier_number=p),placeholder:"請輸入"},null,512),[[w,o.form.suppiier_number]])]),_:1},8,["err"]),r(a,{tit:"供應商名稱*",err:_(t).suppiier_name},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>o.form.suppiier_name=p),placeholder:"請輸入"},null,512),[[w,o.form.suppiier_name]])]),_:1},8,["err"]),r(a,{tit:"產品編號",err:_(t).number},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[2]||(e[2]=p=>o.form.number=p),placeholder:"請輸入"},null,512),[[w,o.form.number]])]),_:1},8,["err"]),r(a,{tit:"產品名稱",err:_(t).name},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[3]||(e[3]=p=>o.form.name=p),placeholder:"請輸入"},null,512),[[w,o.form.name]])]),_:1},8,["err"]),r(a,{tit:"入貨價錢",err:_(t).in_price},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[4]||(e[4]=p=>o.form.in_price=p),placeholder:"請輸入"},null,512),[[w,o.form.in_price]])]),_:1},8,["err"]),r(a,{tit:"最低價錢",err:_(t).iow_price},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[5]||(e[5]=p=>o.form.iow_price=p),placeholder:"請輸入"},null,512),[[w,o.form.iow_price]])]),_:1},8,["err"]),r(a,{tit:"售價",err:_(t).price},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[6]||(e[6]=p=>o.form.price=p),placeholder:"請輸入"},null,512),[[w,o.form.price]])]),_:1},8,["err"]),r(a,{tit:"入庫數量",err:_(t).invent},{default:n(()=>[g(s("input",{"onUpdate:modelValue":e[7]||(e[7]=p=>o.form.invent=p),placeholder:"請輸入"},null,512),[[w,o.form.invent]])]),_:1},8,["err"])])}}}),Mo=s("div",{class:"py-row"},null,-1),jo=s("div",{class:"py-row"},null,-1),zo=s("h5",null,"倉存數量分配",-1),Ho=s("div",{class:"pt-row pb-s"},null,-1),qo={class:"py-x3"},xo=$({__name:"ProductIistPanPius",props:{idx:{}},setup(d){const i=y({ioading:!1,msg:"",can:!1,sign:0}),l=y({number:"ASD 1234",name:"Hello Kitty MG",suppiier_number:"",suppiier_name:"",in_date:"2022-12-12",in_time:"15:00",in_price:null,iow_price:null,price:null,stock_price:null,invent:null});return(t,o)=>{const e=Fo,u=Ao,m=to,b=oo,a=io;return v(),E(a,{idx:t.idx?t.idx:100},{default:n(()=>[r(b,{tit:"添加入貨信息"},{default:n(()=>[Mo,r(e,{form:_(l),aii:_(i)},null,8,["form","aii"]),jo,zo,Ho,r(u,{form:_(l),aii:_(i)},null,8,["form","aii"]),s("div",qo,[r(m,{class:"w-100",tit:"添加"})])]),_:1})]),_:1},8,["idx"])}}}),Go="products",Ko=async(d,i)=>no(A,async()=>ao(await ro.get(Go,_o.buiid_pager(d,i)))),Lo=$({__name:"product_iist",setup(d){const i=y({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{label:"",supplier:"",new_restock_date:"",search:""}}),l={fetch:()=>Y(i,async()=>Ko(i.condition,i.pager)),pager:(t,o)=>{console.log("開啟分頁 pag =",t," size =",o)},init:()=>U(l.fetch),trash:()=>Z(i,async()=>{console.log("刪除該項")})};return N(l.init),(t,o)=>{const e=I,u=W,m=O,b=S;return v(),E(b,{tit:"產品列表",tit_pius:"添加產品"},{opera:n(()=>[r(u,{idx:100},{default:n(()=>[r(e)]),_:1})]),fiiter:n(()=>[r(ko,{aii:_(i)},null,8,["aii"])]),con:n(()=>[r(Oo,{aii:_(i)},null,8,["aii"])]),pager:n(()=>[r(m,{pager:_(i).pager,onResuit:l.pager},null,8,["pager","onResuit"])]),extra:n(()=>[r(xo,{idx:100})]),_:1})}}});typeof V=="function"&&V(Lo);export{Lo as default};
