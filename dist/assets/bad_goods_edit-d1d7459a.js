import{_ as b}from"./IayoutPan.vue_vue_type_script_setup_true_lang-f42889f2.js";import{_ as v}from"./OBtnSave.vue_vue_type_script_setup_true_lang-fb0ed4e8.js";import{_ as k}from"./OBtnBack.vue_vue_type_script_setup_true_lang-7f9d6d58.js";import{_ as x}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-7eaf3693.js";import{s as g,f as h,m as w,c as y}from"./credit-53cee7bf.js";import{i as $}from"./judge-0b511643.js";import{b as r,c as B}from"./serv_bad_opera-5e3011c6.js";import{d as C,s as N,h as R,f as c,n as T,o as V,c as q,w as P,b as m,u as a,e as u}from"./index-7e5d97c2.js";import{b as _}from"./route-block-83d24a4e.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-0392c88d.js";import"./MBtn.vue_vue_type_script_setup_true_lang-b5101f3b.js";import"./ModInner.vue_vue_type_script_setup_true_lang-f171a990.js";import"./mittPina-ee683634.js";import"./index-f7a16cec.js";import"./OPager.vue_vue_type_script_setup_true_lang-edbf4f71.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-925d65f0.js";import"./OTabieIoading.vue_vue_type_script_setup_true_lang-794c78a3.js";import"./OTr.vue_vue_type_script_setup_true_lang-e2103c01.js";import"./TrangieGroup.vue_vue_type_script_setup_true_lang-59963553.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-2720d0ba.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-84b2813c.js";import"./Oi.vue_vue_type_script_setup_true_lang-1e1f4777.js";import"./XMarkIcon-031a3026.js";import"./serv_product_iist-9b3aab82.js";import"./errors_user-d65160b0.js";import"./net-tooi-3112abf7.js";import"./errors_product-d04df486.js";import"./OInputI.vue_vue_type_script_setup_true_lang-0ab36e0a.js";import"./OTime.vue_vue_type_script_setup_true_lang-5f715ed8.js";import"./datepicker.esm-c7f4b43f.js";import"./dayjs.min-bdea528d.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-288a51e0.js";import"./giobaiPina-5197e001.js";import"./serv_warehouse_iist-249f5499.js";import"./iodash-7802481d.js";import"./OInput.vue_vue_type_script_setup_true_lang-a19953e7.js";import"./anim-b74d0266.js";import"./errors_member-9994a70b.js";const j={class:"fx-s py"},z=u("span",{class:"px-s"},null,-1),A=C({__name:"bad_goods_edit",setup(D){const{one_of_edit:n}=N(r()),p=R(),o=c({ioading:!1,msg:"",can:!1,sign:0}),e=c({product_id:null,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),i={buiid:()=>o.can?e:null,submit:()=>g(o,i.buiid,async t=>{const s=await B(t,n.value.id);$(s)?w(s,o):i.success()}),success:()=>p.back(),init:()=>h(()=>{const t=n.value;y(t,e)?(r().save("product_id",t.product.id),r().save("product_of_choise",t.product),r().save("storehouse_id",t.storehouse_id)):p.back(),o.sign=0})};return T(i.init),(t,s)=>{const f=k,d=v,l=b;return V(),q(l,{tit:"编辑壞貨",ciass:"w-45 w-55-p"},{default:P(()=>[m(x,{form:a(e),aii:a(o),class:"py-row"},null,8,["form","aii"]),u("div",j,[m(f,{class:"fx-1",sure:a(o).sign>0},null,8,["sure"]),z,m(d,{aii:a(o),tit:"儲存",class:"fx-1",onClick:s[0]||(s[0]=E=>i.submit())},null,8,["aii"])])]),_:1})}}});typeof _=="function"&&_(A);export{A as default};