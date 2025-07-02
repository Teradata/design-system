function v(i){for(var g=[],c=1;c<arguments.length;c++)g[c-1]=arguments[c];var n=Array.from(typeof i=="string"?[i]:i);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var p=n.reduce(function(t,u){var a=u.match(/\n([\t ]+|(?!\s).)/g);return a?t.concat(a.map(function(l){var r,e;return(e=(r=l.match(/[\t ]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0})):t},[]);if(p.length){var f=new RegExp(`
[	 ]{`+Math.min.apply(Math,p)+"}","g");n=n.map(function(t){return t.replace(f,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var o=n[0];return g.forEach(function(t,u){var a=o.match(/(?:^|\n)( *)$/),l=a?a[1]:"",r=t;typeof t=="string"&&t.includes(`
`)&&(r=String(t).split(`
`).map(function(e,h){return h===0?e:""+l+e}).join(`
`)),o+=r+n[u+1]}),o}export{v as d};
