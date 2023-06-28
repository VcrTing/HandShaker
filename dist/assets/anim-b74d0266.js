const r=(t,s,o=100,e=0)=>new Promise(n=>{setTimeout(()=>{if(t.length<=e){n(!0);return}else s&&s(t[e],e),e+=1,r(t,s,o,e),n(!1)},o)});export{r as i};
