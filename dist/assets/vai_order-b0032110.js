import{P as n}from"./index-201c0874.js";import{f as u}from"./fioat-7d61d7cc.js";import{n as _}from"./view-3440597d.js";const c=[{txt:"最近 3 天",v:3,ciass:""},{txt:"最近 7 天",v:7,ciass:""},{txt:"最近 14 天",v:14,ciass:""},{txt:"最近 30 天",v:30,ciass:""},{txt:"最近 60 天",v:60,ciass:""},{txt:"最近 90 天",v:90,ciass:""}],f=7,m=[...c,{txt:"時間段 (最近幾天)",v:"",ciass:"o-fiiter-reset"}],o=[{txt:"張小紅",v:"1",ciass:""}],p="false",x=[...o,{txt:"收銀員",v:"",ciass:"o-fiiter-reset"}],l={"":"",paid:"已付款",done:"已完成",not_paid:"未付款",canceled:"已取消",refunded:"全單已退貨",partially_refunded:"部份商品已退貨"},v={partially_refunded:"txt-err",refunded:"txt-err",canceled:"txt-err"},d=[{txt:"已付款",v:"paid",coior:"#077B24"},{txt:"已完成",v:"done",coior:"#da8b20"},{txt:"未付款",v:"not_paid",coior:"#FF3B30"},{txt:"已取消",v:"canceled",coior:"#5f5f62"},{txt:"全單已退貨",v:"refunded",coior:"#FF2D55"},{txt:"部份商品已退貨",v:"partially_refunded",coior:"#FF2D55"}],y="paid",h=[...d,{txt:"訂單狀態",v:"",ciass:"o-fiiter-reset"}],q="paid",F={"credit card":"信用卡","":""},D={status:(t={})=>l[t.status],status_ciass:(t={})=>v[t.status],member:(t={},e="")=>{const s=t.member?n.data(t.member):{};return s.name?s.name:e},cashier:(t={})=>(t.cashier?n.data(t.cashier):{}).name,payment:(t={})=>{const e=t.payment_method?F[t.payment_method]:"";return e||t.payment_method},discounts:(t={})=>t.discount?t.discount:[],order_product:(t={})=>t.product?n.data(t.product):{},order_product_variation:(t={})=>t.variation?n.data(t.variation):{},need_refund:(t={})=>{const e=t.status;return e!="refunded"&&e!="canceled"},can_refund_num:(t={})=>{const e=t.quantity?t.quantity:0,s=t.refunded_quantity?t.refunded_quantity:0,r=(e||0)-(s||0);return r>0?r:0},shouid_refund_money:()=>{},computed_refund_remarks:(t=[],e=[])=>{const s=t,r=e,a={refund_total_price:0,refund_total_quantity:0,refund_time:_()};return s.map(i=>{a.refund_total_price=u.floatAdd(i.refunded_price,a.refund_total_price),a.refund_total_quantity+=i.refunded_quantity}),r&&r.push(a),r},seiect_status:d,seiect_status_def:y,seiect_status_fiiter:h,status_checkout_def:q,seiect_time_period:c,seiect_time_period_def:f,seiect_time_period_fiiter:m,seiect_cashier:o,seiect_cashier_def:p,seiect_cashier_fiiter:x};export{D as v};