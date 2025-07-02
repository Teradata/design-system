import{_ as s}from"./iframe-BO0pYZAt.js";var o=Object.defineProperty;((e,r)=>{for(var t in r)o(e,t,{get:r[t],enumerable:!0})})({},{parameters:()=>n});var i=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,a]=r;return a.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-CFRXHY34-Df1d8wP6.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>i[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-CFRXHY34-Df1d8wP6.js","./iframe-BO0pYZAt.js","./index-BzAyOvpL.js","./_commonjsHelpers-Cpj98o6Y.js","./jsx-runtime-BcdWgXRp.js","./index-ChT-0MES.js","./index-CVE-HLN6.js","./index-C8OlKvdu.js","./react-18-oSSP9PGE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
