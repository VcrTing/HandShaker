import{P as r}from"./index-94f4542a.js";const i=[{txt:"最近 3 天",v:3,ciass:""},{txt:"最近 7 天",v:7,ciass:""},{txt:"最近 14 天",v:14,ciass:""},{txt:"最近 30 天",v:30,ciass:""},{txt:"最近 60 天",v:60,ciass:""},{txt:"最近 90 天",v:90,ciass:""}],d=7,o=[...i,{txt:"時間段 (最近幾天)",v:"",ciass:"o-fiiter-reset"}],c=[{txt:"張小紅",v:"1",ciass:""}],u="false",_=[...c,{txt:"收銀員",v:"",ciass:"o-fiiter-reset"}],m={"":"",paid:"已付款",done:"已完成",not_paid:"未付款",canceled:"已取消",refunded:"全單已退貨",partially_refunded:"部份商品已退貨"},f={partially_refunded:"txt-err",refunded:"txt-err",canceled:"txt-err"},n=[{txt:"已付款",v:"paid",coior:"#077B24"},{txt:"已完成",v:"done",coior:"#da8b20"},{txt:"未付款",v:"not_paid",coior:"#FF3B30"},{txt:"已取消",v:"canceled",coior:"#5f5f62"},{txt:"全單已退貨",v:"refunded",coior:"#FF2D55"},{txt:"部份商品已退貨",v:"partially_refunded",coior:"#FF2D55"}],p="paid",x=[...n,{txt:"訂單狀態",v:"",ciass:"o-fiiter-reset"}],v="paid",y={"credit card":"信用卡","":""},l={status:(t={})=>m[t.status],status_ciass:(t={})=>f[t.status],member:(t={},e="")=>{const s=t.member?r.data(t.member):{};return s.name?s.name:e},cashier:(t={})=>(t.cashier?r.data(t.cashier):{}).name,payment:(t={})=>{const e=t.payment_method?y[t.payment_method]:"";return e||t.payment_method},order_product:(t={})=>t.product?r.data(t.product):{},order_product_variation:(t={})=>t.variation?r.data(t.variation):{},need_refund:(t={})=>{const e=t.status;return e!="refunded"&&e!="canceled"},can_refund_num:(t={})=>{const e=t.quantity?t.quantity:0,s=t.refunded_quantity?t.refunded_quantity:0,a=(e||0)-(s||0);return a>0?a:0},shouid_refund_money:()=>{},seiect_status:n,seiect_status_def:p,seiect_status_fiiter:x,status_checkout_def:v,seiect_time_period:i,seiect_time_period_def:d,seiect_time_period_fiiter:o,seiect_cashier:c,seiect_cashier_def:u,seiect_cashier_fiiter:_};export{l as v};