import{d as D}from"./index-C8OlKvdu.js";const{useEffect:_,useMemo:M}=__STORYBOOK_MODULE_PREVIEW_API__,{global:K}=__STORYBOOK_MODULE_GLOBAL__,{logger:P}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var $="backgrounds",U={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:f,window:w}=K,Y=()=>{var n;return!!((n=w==null?void 0:w.matchMedia("(prefers-reduced-motion: reduce)"))!=null&&n.matches)},S=n=>{(Array.isArray(n)?n:[n]).forEach(X)},X=n=>{var i;let e=f.getElementById(n);e&&((i=e.parentElement)==null||i.removeChild(e))},B=(n,e)=>{let i=f.getElementById(n);if(i)i.innerHTML!==e&&(i.innerHTML=e);else{let o=f.createElement("style");o.setAttribute("id",n),o.innerHTML=e,f.head.appendChild(o)}},R=(n,e,i)=>{var t;let o=f.getElementById(n);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let a=f.createElement("style");a.setAttribute("id",n),a.innerHTML=e;let l="addon-backgrounds-grid"+(i?`-docs-${i}`:""),r=f.getElementById(l);r?(t=r.parentElement)==null||t.insertBefore(a,r):f.head.appendChild(a)}},N={cellSize:100,cellAmount:10,opacity:.8},G="addon-backgrounds",I="addon-backgrounds-grid",V=Y()?"":"transition: background-color 0.3s;",z,J=(z=globalThis.FEATURES)!=null&&z.backgroundsStoryGlobals?[(n,e)=>{let{globals:i,parameters:o,viewMode:t,id:a}=e,{options:l=U,disable:r,grid:c=N}=o[$]||{},b=i[$]||{},x=b.value,d=x?l[x]:void 0,s=(d==null?void 0:d.value)||"transparent",g=b.grid||!1,m=!!d&&!r,p=t==="docs"?`#anchor--${a} .docs-story`:".sb-show-main",E=t==="docs"?`#anchor--${a} .docs-story`:".sb-show-main",j=o.layout===void 0||o.layout==="padded",A=t==="docs"?20:j?16:0,{cellAmount:y,cellSize:u,opacity:k,offsetX:v=A,offsetY:h=A}=c,T=t==="docs"?`${G}-docs-${a}`:`${G}-color`,L=t==="docs"?a:null;_(()=>{m?R(T,`
    ${p} {
      background: ${s} !important;
      ${V}
      }`,L):S(T)},[p,T,L,m,s]);let O=t==="docs"?`${I}-docs-${a}`:`${I}`;return _(()=>{if(!g)return void S(O);let C=[`${u*y}px ${u*y}px`,`${u*y}px ${u*y}px`,`${u}px ${u}px`,`${u}px ${u}px`].join(", ");B(O,`
        ${E} {
          background-size: ${C} !important;
          background-position: ${v}px ${h}px, ${v}px ${h}px, ${v}px ${h}px, ${v}px ${h}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${k}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${k}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${k/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${k/2}) 1px, transparent 1px) !important;
        }
      `)},[y,u,E,O,g,v,h,k]),n()}]:[(n,e)=>{var m;let{globals:i,parameters:o}=e,t=o[$].grid,a=((m=i[$])==null?void 0:m.grid)===!0&&t.disable!==!0,{cellAmount:l,cellSize:r,opacity:c}=t,b=e.viewMode==="docs",x=o.layout===void 0||o.layout==="padded"?16:0,d=t.offsetX??(b?20:x),s=t.offsetY??(b?20:x),g=M(()=>`
      ${e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main"} {
        background-size: ${[`${r*l}px ${r*l}px`,`${r*l}px ${r*l}px`,`${r}px ${r}px`,`${r}px ${r}px`].join(", ")} !important;
        background-position: ${d}px ${s}px, ${d}px ${s}px, ${d}px ${s}px, ${d}px ${s}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${c}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${c}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${c/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${c/2}) 1px, transparent 1px) !important;
      }
    `,[r]);return _(()=>{let p=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";a?B(p,g):S(p)},[a,g,e]),n()},(n,e)=>{var x;let{globals:i,parameters:o}=e,t=(x=i[$])==null?void 0:x.value,a=o[$],l=M(()=>a.disable?"transparent":((d,s=[],g)=>{if(d==="transparent")return"transparent";if(s.find(p=>p.value===d)||d)return d;let m=s.find(p=>p.name===g);if(m)return m.value;if(g){let p=s.map(E=>E.name).join(", ");P.warn(D`
        Backgrounds Addon: could not find the default color "${g}".
        These are the available colors for your story based on your configuration:
        ${p}.
      `)}return"transparent"})(t,a.values,a.default),[a,t]),r=M(()=>l&&l!=="transparent",[l]),c=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",b=M(()=>`
      ${c} {
        background: ${l} !important;
        ${Y()?"":"transition: background-color 0.3s;"}
      }
    `,[l,c]);return _(()=>{let d=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";r?R(d,b,e.viewMode==="docs"?e.id:null):S(d)},[r,b,e]),n()}],F,Q={[$]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!((F=globalThis.FEATURES)!=null&&F.backgroundsStoryGlobals)&&{values:Object.values(U)}}},W={[$]:{value:void 0,grid:!1}},H,Z=(H=globalThis.FEATURES)!=null&&H.backgroundsStoryGlobals?W:{[$]:null};export{J as decorators,Z as initialGlobals,Q as parameters};
