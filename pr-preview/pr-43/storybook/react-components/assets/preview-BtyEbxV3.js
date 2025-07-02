const{STORY_CHANGED:s}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var O="storybook/highlight",a="storybookHighlight",m=`${O}/add`,p=`${O}/reset`,{document:d}=g,_=E.getChannel(),l=()=>{var n;let e=a,t=d.getElementById(e);t&&((n=t.parentNode)==null||n.removeChild(t))};_.on(s,l),_.on(p,l),_.on(m,e=>{let t=a;l();let n=Array.from(new Set(e.elements)),o=d.createElement("style");o.setAttribute("id",t),o.innerHTML=n.map(r=>`${r}{
          ${((i="#FF4785",h="dashed")=>`
  outline: 2px ${h} ${i};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)(e.color,e.style)}
         }`).join(" "),d.head.appendChild(o)});
