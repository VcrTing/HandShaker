const s=t=>{let e=/[`~!$^&*(“”‘’'、`～·！—_|=;？，。\\)<>?:"{},\/;'[\]]/;return e.test(t)?!1:(e=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),e.test(t))},r=(t,e=400)=>{let a=!0;return(t.length<4||t.length>e)&&(a=!1),a},n=t=>r(t+"",15),f=t=>0<t&&t<=1;export{s as a,f as b,r as c,n as v};