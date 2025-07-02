/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const v=n=>(r,u)=>{if(r.constructor._observers){if(!r.constructor.hasOwnProperty("_observers")){const t=r.constructor._observers;r.constructor._observers=new Map,t.forEach((o,e)=>r.constructor._observers.set(e,o))}}else{r.constructor._observers=new Map;const t=r.updated;r.updated=function(o){t.call(this,o),o.forEach((e,s)=>{const c=this.constructor._observers.get(s);c!==void 0&&c.call(this,this[s],e)})}}r.constructor._observers.set(u,n)};export{v};
