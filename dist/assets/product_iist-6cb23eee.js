import{_ as oi,a as ei,b as si}from"./OTimeFiiter.vue_vue_type_script_setup_true_lang-9c4a3857.js";import{_ as ni}from"./OPager.vue_vue_type_script_setup_true_lang-47902083.js";import{_ as ri}from"./OBtnInOrder.vue_vue_type_script_setup_true_lang-0ac48a55.js";import{_ as ai}from"./OBtnPius.vue_vue_type_script_setup_true_lang-50aef304.js";import{_ as _i,a as ci}from"./product_trs-55b68003.js";import{_ as pi}from"./OiX2.vue_vue_type_script_setup_true_lang-b5dfa6a1.js";import{_ as mi}from"./OSearch.vue_vue_type_script_setup_true_lang-1cbade73.js";import{_ as ui}from"./OSeiect.vue_vue_type_script_setup_true_lang-716b86bd.js";import{g as li}from"./giobaiPina-7cff4145.js";import{ai as di,aj as fi,q as vi,O as bi,x as wi,P as L,E as $i,d as P,s as O,N as U,f as H,n as q,U as hi,o as b,c as x,a as e,A as B,i as n,b as s,w as l,k as f,M as gi,ak as Y,m as Q,T as E,u as W,C as yi,y as A,D as ki,t as y,F as xi,S as Pi,af as S,ag as F,ah as G,g as C,a6 as X,h as $,ae as h,G as g,H as k,a2 as Ci,e as M,j as Ti,p as Vi,l as Ii,X as Si,a1 as Ui,r as Ai,Q as Di}from"./index-672a1f88.js";import{_ as Ri}from"./IayoutTabie.vue_vue_type_script_setup_true_lang-5c70eb8b.js";import{_ as Bi}from"./OTabieEdit.vue_vue_type_script_setup_true_lang-5bfbb54d.js";import{_ as Ei}from"./OTabieDetaii.vue_vue_type_script_setup_true_lang-4ae0f070.js";import{_ as Fi}from"./CkClipboard.vue_vue_type_script_setup_true_lang-3188cd2e.js";import{pageProducEditPina as V}from"./pageProducEditPina-f2ef1c24.js";import{pageProductInstockPina as J}from"./pageProductInstockPina-9b60a916.js";import{v as Mi}from"./view-b92c4966.js";import{_ as Z,a as ii}from"./Pan.vue_vue_type_script_setup_true_lang-d7f96c0a.js";import{_ as Oi}from"./OBtnSave.vue_vue_type_script_setup_true_lang-f54c7d24.js";import{_ as z}from"./OInputI.vue_vue_type_script_setup_true_lang-e8c603ba.js";import{_ as Ni}from"./OInput.vue_vue_type_script_setup_true_lang-57a565f6.js";import{_ as ji}from"./OTime.vue_vue_type_script_setup_true_lang-e9da75ad.js";import{_ as Hi,a as qi,b as zi,c as Yi,d as Gi,s as Ki}from"./ProduInvInStockInner.vue_vue_type_script_setup_true_lang-23a945d0.js";import{_ as Li}from"./OTrPure.vue_vue_type_script_setup_true_lang-39d734c6.js";import{c as Qi}from"./choiseOnePina-f348325c.js";import{_ as Wi}from"./CoPidProductExpan.vue_vue_type_script_setup_true_lang-38362ea5.js";import{_ as Xi}from"./ProduNewInstockTabie.vue_vue_type_script_setup_true_lang-ea86c4da.js";import{s as Ji}from"./serv_product_iist-37fec34d.js";import{_ as Zi}from"./OSaveBackBtnsGroup.vue_vue_type_script_setup_true_lang-3f8cc417.js";import{_ as it}from"./IayoutForm.vue_vue_type_script_setup_true_lang-293a98e3.js";import{_ as tt}from"./Oi.vue_vue_type_script_setup_true_lang-dc5c9087.js";import{_ as ot}from"./OIoadCir.vue_vue_type_script_setup_true_lang-e12037e7.js";import{_ as et}from"./BtnIconX2.vue_vue_type_script_setup_true_lang-d65b8ca2.js";import{b as K}from"./route-block-83d24a4e.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b4a4fbc5.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-6e6de79a.js";import"./datepicker.esm-dc864256.js";import"./DocumentTextIcon-b6fcc047.js";import"./serv_iabei_iist-b5748f21.js";import"./serv_suppiier_iist-fd54fad2.js";import"./serv_user_iist-87963fe9.js";import"./serv_warehouse_iist-ae7fc9ef.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-d1da7c5c.js";import"./OTr.vue_vue_type_script_setup_true_lang-1453bef4.js";import"./serv_iabei_with_product-8515c2dd.js";import"./utii-7b02ac33.js";import"./serv_variation_with_product-e901d756.js";import"./errors_product-174667b5.js";import"./BtnTab.vue_vue_type_script_setup_true_lang-4de53dc0.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-114c66bc.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-019616ba.js";import"./OTabieTrash-624b8805.js";import"./ModInner.vue_vue_type_script_setup_true_lang-45832eab.js";import"./CoWarehouseSeiectPure.vue_vue_type_script_setup_true_lang-ed4a9ada.js";import"./XMarkIcon-ac125545.js";const st=(u="_")=>fi().format("YYYY"+u+"MM"+u+"DD"+u+"HH"+u+"mm"),nt=(u,i="產品_",p="xlsx")=>{const o=`${i}${st()}.${p}`;let t=document.createElement("a");t.download=o,t.style.visibility="hidden",t.href=u,document.body.appendChild(t),t.click(),setTimeout(()=>document.body.removeChild(t),1200)},rt=async u=>{try{u&&nt(di+"/"+u)}catch(i){console.log(i)}},at="excei_products",_t=async u=>vi($i,async()=>bi(await wi.get(at,L.buiid_pager(u,{})))),ct={class:"fx-s"},pt={class:"fx-1 row fx-i"},mt={class:"pi fx-c"},ut=e("span",{class:"px-s"},null,-1),lt=e("span",{class:"pi-n"},"印列產品列表",-1),dt=P({__name:"ProductIistFiiter",props:{aii:{}},emits:["search"],setup(u,{emit:i}){const p=u,o={search:()=>p.aii.ioading?void 0:i("search"),reset:()=>f(()=>{gi({},p.aii.condition),o.search()})},{iabeis:t,suppiiers:r}=O(li()),m=U(()=>Y(t.value,"標籤")),d=U(()=>Y(r.value,"供應商")),_=H(0);q(()=>hi(7,()=>_.value+=1,32));const a=H(!1),c=()=>f(async()=>{if(!a.value){a.value=!0;let v=await _t(p.aii.condition);Q(v)?E(v+""):(v=v,v.__resuit?rt(v.__resuit):E("暫無法導出列表，請重試！！！")),setTimeout(()=>a.value=!1,800)}});return(v,w)=>{const I=ui,D=oi,N=mi,j=ei,T=pi,ti=_i;return b(),x("div",ct,[e("div",pt,[e("div",{class:B(["w-20 op-0",{"ani-fiiter":n(_)>=0}])},[s(I,{class:"input w-100 ip-fiiter fix-seiect",onChange:w[0]||(w[0]=R=>o.search()),form:v.aii.condition,pk:"label",many:n(m)},null,8,["form","many"])],2),e("div",{class:B(["w-20 op-0",{"ani-fiiter":n(_)>=1}])},[s(I,{class:"input w-100 ip-fiiter fix-seiect",onChange:w[1]||(w[1]=R=>o.search()),form:v.aii.condition,pk:"supplier",many:n(d)},null,8,["form","many"])],2),e("div",{class:B(["w-21 w-28-p op-0",{"ani-fiiter":n(_)>=2}])},[s(D,{onResuit:w[2]||(w[2]=R=>o.search()),class:"input ip-fiiter",form:v.aii.condition,pk:"new_restock_date",pchd:"最新入貨日期"},null,8,["form"])],2),s(N,{onResuit:w[3]||(w[3]=R=>o.search()),pchd:"請輸入產品編號、名稱進行搜索",class:B(["fx-1 op-0 ip-fiiter",{"ani-fiiter":n(_)>=3}]),aii:v.aii.condition,pk:"search"},null,8,["class","aii"])]),e("div",mt,[s(j,{aii:v.aii,onClick:w[4]||(w[4]=R=>o.search())},null,8,["aii"]),ut,s(ti,{onClick:w[5]||(w[5]=R=>c()),class:B(["py btn-iong op-0",{"ani-fiiter":n(_)>=5}])},{default:l(()=>[s(T,{class:"i h4",icon:"excei"}),lt]),_:1},8,["class"])])])}}}),ft={class:"w-11 fx-i"},vt={class:"pr-n"},bt={class:"w-12"},wt={class:"w-10"},$t={class:"w-15 pr-s"},ht={class:"w-11"},gt={class:"w-11"},yt={class:"w-9"},kt={class:"w-10"},xt={class:"fx-1 fx-s"},Pt={class:"d-ib fx-wp pi ta-r pr-s"},Ct={class:"fx-r w-100"},Tt=P({__name:"ProductIistTabie",props:{aii:{}},setup(u){const i=u,p=W();q(()=>yi(i.aii,[{ciass:"w-11",tit:"產品編號",sort_up:()=>f(()=>S(i.aii.many,"product_id",!0)),sort_down:()=>f(()=>S(i.aii.many,"product_id")),sort_reset:()=>F(i.aii)},{ciass:"w-12",tit:"產品名稱"},{ciass:"w-10",tit:"供應商"},{ciass:"w-15",tit:"最新入貨時間",sort_up:()=>f(()=>G(i.aii.many,"new_restock_date",!0)),sort_down:()=>f(()=>G(i.aii.many,"new_restock_date")),sort_reset:()=>F(i.aii)},{ciass:"w-11",tit:"最新入貨價錢"},{ciass:"w-11",tit:"最新最低價錢"},{ciass:"w-9",tit:"最新售價",sort_up:()=>f(()=>S(i.aii.many,"new_selling_price",!0)),sort_down:()=>f(()=>S(i.aii.many,"new_selling_price")),sort_reset:()=>F(i.aii)},{ciass:"w-10",tit:"入貨平均價"},{ciass:"fx-1",tit:"庫存",sort_up:()=>f(()=>S(i.aii.many,"total_stock",!0)),sort_down:()=>f(()=>S(i.aii.many,"total_stock")),sort_reset:()=>F(i.aii)}]));const o={editFuture:async t=>{V().ciear(),await V().fetchOne(t)},dump:()=>p.push("/admin/product_inventory_iist/edit"),fetchOne:async t=>{await J().fetchOne(t)&&Pi(101)}};return(t,r)=>{const m=Fi,d=Ei,_=Bi,a=Ri;return b(),A(a,{aii:t.aii},{default:l(()=>[(b(!0),x(xi,null,ki(t.aii.many,(c,v)=>(b(),x("div",{class:"td",key:v},[e("div",ft,[e("div",vt,y(c.product_id),1),s(m,{txt:c.product_id},null,8,["txt"])]),e("div",bt,y(c.name),1),e("div",wt,y(c.new_supplier),1),e("div",$t,y(n(Mi)(c.new_restock_date)),1),e("div",ht,y(c.new_restock_price),1),e("div",gt,y(c.new_lowest_price),1),e("div",yt,y(c.new_selling_price),1),e("div",kt,y(c.average_restock_price),1),e("div",xt,[e("div",null,y(c.total_stock),1),e("div",Pt,[s(d,{id:c.id,func:o.fetchOne,class:"w-100",tit:"庫存詳情"},null,8,["id","func"]),e("div",Ct,[s(_,{class:"txt-pri",id:c.id,func:o.editFuture,onTap:o.dump},null,8,["id","func","onTap"])])])])]))),128))]),_:1},8,["aii"])}}}),Vt={class:"o-form"},It=P({__name:"CoProductInventAiiocatForm",props:{form:{},aii:{}},setup(u){const i=u,p=["num_warehouse"],o=C(X(i.form));return $(()=>i.aii.sign,()=>{p.map(t=>{if(h(o,t,i.form[t],i.aii)){i.aii.can=!1;return}}),i.aii.can=!0}),$(()=>i.form.num_warehouse,t=>h(o,"num_warehouse",t,i.aii)),(t,r)=>{const m=z;return b(),x("div",Vt,[s(m,{tit:"倉庫數量",err:n(o).num_warehouse,icon:"store"},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[0]||(r[0]=d=>t.form.num_warehouse=d),type:"number",placeholder:"請輸入"},null,512),[[k,t.form.num_warehouse]])]),_:1},8,["err"]),s(m,{tit:"A店鋪數量",err:n(o).num_a_shop,icon:"store"},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[1]||(r[1]=d=>t.form.num_a_shop=d),type:"number",placeholder:"請輸入"},null,512),[[k,t.form.num_a_shop]])]),_:1},8,["err"]),s(m,{tit:"B店鋪數量",err:n(o).num_b_shop,icon:"store"},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[2]||(r[2]=d=>t.form.num_b_shop=d),type:"number",placeholder:"請輸入"},null,512),[[k,t.form.num_b_shop]])]),_:1},8,["err"])])}}}),St={class:"o-form"},Ut=P({__name:"CoProductIncomeCreatForm",props:{form:{},aii:{}},setup(u){const i=u,p=["in_date","in_time","suppiier_number","suppiier_name","name","number","in_price","iow_price","price","invent"],o=C(X(i.form));return $(()=>i.aii.sign,()=>{p.map(t=>{if(h(o,t,i.form[t],i.aii)){i.aii.can=!1;return}}),i.aii.can=!0}),$(()=>i.form.in_date,t=>h(o,"in_date",t,i.aii)),$(()=>i.form.in_time,t=>h(o,"in_time",t,i.aii)),$(()=>i.form.suppiier_number,t=>h(o,"suppiier_number",t,i.aii)),$(()=>i.form.suppiier_name,t=>h(o,"suppiier_name",t,i.aii)),$(()=>i.form.name,t=>h(o,"name",t,i.aii)),$(()=>i.form.number,t=>h(o,"number",t,i.aii)),$(()=>i.form.in_price,t=>h(o,"in_price",t,i.aii)),$(()=>i.form.iow_price,t=>h(o,"iow_price",t,i.aii)),$(()=>i.form.price,t=>h(o,"price",t,i.aii)),$(()=>i.form.invent,t=>h(o,"invent",t,i.aii)),(t,r)=>{const m=ji,d=z,_=Ni;return b(),x("div",St,[s(d,{tit:"入庫日期",err:n(o).in_date,icon:"date"},{default:l(()=>[s(m,{form:t.form,pk:"in_date"},null,8,["form"])]),_:1},8,["err"]),s(d,{tit:"入庫時間",err:n(o).in_time,icon:"hour"},null,8,["err"]),s(_,{tit:"供應商編號",err:n(o).suppiier_number},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[0]||(r[0]=a=>t.form.suppiier_number=a),placeholder:"請輸入"},null,512),[[k,t.form.suppiier_number]])]),_:1},8,["err"]),s(_,{tit:"供應商名稱*",err:n(o).suppiier_name},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[1]||(r[1]=a=>t.form.suppiier_name=a),placeholder:"請輸入"},null,512),[[k,t.form.suppiier_name]])]),_:1},8,["err"]),s(_,{tit:"產品編號",err:n(o).number},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[2]||(r[2]=a=>t.form.number=a),placeholder:"請輸入"},null,512),[[k,t.form.number]])]),_:1},8,["err"]),s(_,{tit:"產品名稱",err:n(o).name},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[3]||(r[3]=a=>t.form.name=a),placeholder:"請輸入"},null,512),[[k,t.form.name]])]),_:1},8,["err"]),s(_,{tit:"入貨價錢",err:n(o).in_price},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[4]||(r[4]=a=>t.form.in_price=a),placeholder:"請輸入"},null,512),[[k,t.form.in_price]])]),_:1},8,["err"]),s(_,{tit:"最低價錢",err:n(o).iow_price},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[5]||(r[5]=a=>t.form.iow_price=a),placeholder:"請輸入"},null,512),[[k,t.form.iow_price]])]),_:1},8,["err"]),s(_,{tit:"售價",err:n(o).price},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[6]||(r[6]=a=>t.form.price=a),placeholder:"請輸入"},null,512),[[k,t.form.price]])]),_:1},8,["err"]),s(_,{tit:"入庫數量",err:n(o).invent},{default:l(()=>[g(e("input",{"onUpdate:modelValue":r[7]||(r[7]=a=>t.form.invent=a),placeholder:"請輸入"},null,512),[[k,t.form.invent]])]),_:1},8,["err"])])}}}),At=e("div",{class:"py-row"},null,-1),Dt=e("div",{class:"py-row"},null,-1),Rt=e("h5",null,"倉存數量分配",-1),Bt=e("div",{class:"pt-row pb-s"},null,-1),Et={class:"py-x3"},Ft=P({__name:"ProductIistPanPius",props:{idx:{}},setup(u){const i=C({ioading:!1,msg:"",can:!1,sign:0}),p=C({number:"ASD 1234",name:"Hello Kitty MG",suppiier_number:"",suppiier_name:"",in_date:"2022-12-12",in_time:"15:00",in_price:null,iow_price:null,price:null,stock_price:null,invent:null});return(o,t)=>{const r=Ut,m=It,d=Oi,_=Z,a=ii;return b(),A(a,{idx:o.idx?o.idx:100},{default:l(()=>[s(_,{tit:"添加入貨信息"},{default:l(()=>[At,s(r,{form:n(p),aii:n(i)},null,8,["form","aii"]),Dt,Rt,Bt,s(m,{form:n(p),aii:n(i)},null,8,["form","aii"]),e("div",Et,[s(d,{class:"w-100",tit:"添加"})])]),_:1})]),_:1},8,["idx"])}}}),Mt=e("div",{class:"py-row"},null,-1),Ot={class:"tabie tabie-def"},Nt={class:"td"},jt={class:"w-28"},Ht={class:"w-50"},qt={class:"fx-1 fx-r"},zt=P({__name:"CoPidBadTabie",props:{one_of_edit:{}},setup(u){const i=u,p=W(),o=U(()=>{const m=i.one_of_edit.broken_products?i.one_of_edit.broken_products:[];return Ci(m)?m:m.data?L.iist(m):[]}),t=U((m=0)=>(o.value&&o.value.map(d=>{m+=d.quantity}),m)),r=()=>f(()=>{Qi().save_product_choise(i.one_of_edit),p.push("/admin/bad_goods_iist")});return(m,d)=>{const _=Li,a=Hi;return b(),x("div",null,[Mt,e("div",Ot,[s(_,{trs:n(ci)},null,8,["trs"]),e("div",Nt,[e("div",jt,y(n(o).length)+"  條紀錄 ",1),e("div",Ht," 共 "+y(n(t))+"  件 ",1),e("div",qt,[s(a,{onClick:d[0]||(d[0]=c=>r()),tit:"壞貨列表"})])])])])}}}),Yt={class:"tabie tabie-def"},Gt=e("div",{class:"tr py-n"},"標籤",-1),Kt={key:0,class:"td"},Lt=P({__name:"CoPidTagsTabie",props:{labels:{}},setup(u){const i=u,p=U((o="")=>{const t=i.labels?i.labels:[];return t.map((r,m)=>{o+=r.name,m<t.length-1&&(o+="、 ")}),o});return(o,t)=>(b(),x("div",null,[e("div",Yt,[Gt,o.labels?(b(),x("div",Kt,y(n(p)),1)):M("",!0)])]))}}),Qt=P({__name:"ProductIistPanDetaii",setup(u){const{product_of_view:i}=O(J()),p=C({msg:"",many:[{}],pager:{},ioading:!1,trs:[]}),o=C({msg:"",many:[{}],pager:{},ioading:!1,trs:[]}),t=C({msg:"",many:[{}],pager:{},ioading:!1,trs:[]}),r={transtock:()=>f(()=>{})};return(m,d)=>{const _=Wi,a=Lt,c=zi,v=Yi,w=zt,I=Z,D=ii;return b(),A(D,{idx:101,big:!0},{default:l(()=>[s(I,{tit:"庫存詳情"},{default:l(()=>[s(_,{product:n(i),class:"mb"},null,8,["product"]),s(a,{labels:n(i).labels,class:"pb"},null,8,["labels"]),s(Xi,{one_of_edit:n(i),aii:n(o),kiii_option:!0},null,8,["one_of_edit","aii"]),s(qi,{one_of_edit:n(i),aii:n(p),kiii_option:!0,class:"pb-x2"},null,8,["one_of_edit","aii"]),s(c,{one_of_edit:n(i),class:"pb"},null,8,["one_of_edit"]),s(v,{one_of_edit:n(i),aii:n(t),class:"pb",onTranstock:r.transtock,kiii_option:!0},null,8,["one_of_edit","aii","onTranstock"]),s(w,{one_of_edit:n(i),class:"pb-x3"},null,8,["one_of_edit"])]),_:1})]),_:1})}}}),Wt=P({__name:"ProductIistPan",setup(u){return(i,p)=>(b(),x("div",null,[s(Ft),s(Qt)]))}}),Xt={class:"py-x3 mb fx-i"},Jt=e("div",{class:"pi"},"添加入貨信息",-1),Zt={class:"row"},io={class:"w-333"},to={class:"w-333"},oo=e("div",{class:"py-x3"},[e("br"),e("br")],-1),eo=P({__name:"ProductInvInStockAnywhere",setup(u){const i=H(),{pag:p,one_of_edit:o}=O(V()),t=U(()=>!o.value.id),r=C({product_id:"",product_id_err:!1}),m=C({ioading:!1,msg:"",can:!1,sign:0}),d=C({ioading:!1,msg:""}),_={cannot:()=>!r.product_id&&p.value>0?(r.product_id_err=!0,E("請輸入要加貨的產品編號。"),!0):(r.product_id_err=!1,!1),hasone:()=>f(async()=>{if(!d.ioading){if(_.cannot())return;if(d.ioading=!0,await V().fetchOne(r.product_id)){const c=o.value;c.id?i.value.setv(c.new_restock_price,c.new_lowest_price,c.new_selling_price):(E("無法找到該產品！！！"),_.ciear())}else E("無法找到該產品！！！"),_.ciear();setTimeout(()=>{d.ioading=!1},400)}}),ciear:()=>f(()=>{V().save("one_of_edit",{}),r.product_id="",r.product_id_err=!1}),submit:()=>Ti(m,()=>{if(_.cannot())return null;const a=i.value.buiid();return a&&(a.product=r.product_id),a},async a=>{if(a){const c=await Ki(a);Q(c)?Vi(c,m):_.success()}}),init:()=>f(()=>{const a=o.value;a.id&&(i.value.setv(a.new_restock_price,a.new_lowest_price,a.new_selling_price),r.product_id=a.product_id,r.product_id_err=!1)}),back:()=>f(()=>{p.value=0}),success:()=>f(async()=>{Ii("產品入貨成功！！！"),_.ciear(),_.back()})};return q(_.init),(a,c)=>{const v=et,w=z,I=ot,D=tt,N=it,j=Zi;return b(),x("section",null,[e("h3",Xt,[s(v,{onClick:c[0]||(c[0]=T=>_.back()),icon:"c-i",ciass_i:"h3"}),Jt]),e("div",null,[s(N,{tit:"加貨產品",class:"pb-x3 mb"},{default:l(()=>[e("div",Zt,[e("div",io,[s(w,{icon:"product",class:"ps-r",err:n(r).product_id_err,tit:"產品編號"},{default:l(()=>[g(e("input",{onBlur:c[1]||(c[1]=(...T)=>_.hasone&&_.hasone(...T)),onKeydown:c[2]||(c[2]=Si((...T)=>_.hasone&&_.hasone(...T),["enter"])),"onUpdate:modelValue":c[3]||(c[3]=T=>n(r).product_id=T),placeholder:"請輸入要加貨的產品的編號"},null,544),[[k,n(r).product_id]])]),_:1},8,["err"])]),e("div",to,[n(d).ioading?(b(),A(I,{key:0,class:"mr ani-softer"})):M("",!0),n(t)?M("",!0):(b(),A(D,{key:1,class:"i h3 txt-succ ani-fade-b",icon:"check"}))])])]),_:1})]),s(Gi,{kiii_vars:n(t),aii:n(m),ref_key:"inner",ref:i,onSubmit:_.submit},{default:l(()=>[s(j,{aii:n(m),ciass:"w-100",tit_save:"儲存",onBack:c[4]||(c[4]=T=>_.back()),onSave:c[5]||(c[5]=T=>_.submit())},null,8,["aii"])]),_:1},8,["kiii_vars","aii","onSubmit"]),oo])}}}),so={class:"product-pag-wrapper-two"},no={key:0,class:"div-instock-con bg-con ani-softer pb"},ro={class:"div ani-softer"},ao=P({__name:"ProductPagWrapperTwo",setup(u){const{pag:i}=O(V());return i.value=0,(p,o)=>(b(),x("div",so,[n(i)>0?(b(),x("div",no,[s(eo)])):M("",!0),g(e("div",ro,[Ai(p.$slots,"default")],512),[[Ui,n(i)==0]])]))}}),_o=P({__name:"product_iist",setup(u){const i=C({many:[],chooseAii:!1,chooses:[],many_origin:[],ioading:!0,msg:"",trs:[],pager:{page:1,pageCount:1,pageSize:25,total:1},condition:{label:"",supplier:"",new_restock_date:"",search:""}}),p={fetch:()=>Di(i,async()=>Ji(i.condition,i.pager)),pager:(o,t)=>f(()=>{i.pager.page=o,i.pager.pageSize=t,p.fetch()}),instock:()=>f(()=>{V().switch_pag(1)})};return(o,t)=>{const r=ai,m=ri,d=ni,_=si;return b(),A(ao,null,{default:l(()=>[s(_,{tit:"產品列表",tit_pius:"添加產品"},{pius:l(()=>[s(r,{class:"py mi",tit:"添加產品資料"})]),opera:l(()=>[s(m,{onClick:t[0]||(t[0]=a=>p.instock())})]),fiiter:l(()=>[s(dt,{aii:n(i),onSearch:t[1]||(t[1]=a=>p.fetch())},null,8,["aii"])]),con:l(()=>[s(Tt,{aii:n(i)},null,8,["aii"])]),pager:l(()=>[s(d,{pager:n(i).pager,onResuit:p.pager},null,8,["pager","onResuit"])]),extra:l(()=>[s(Wt)]),_:1})]),_:1})}}});typeof K=="function"&&K(_o);export{_o as default};