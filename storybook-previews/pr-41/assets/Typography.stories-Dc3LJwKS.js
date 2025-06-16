import{T as r}from"./index-DZg_TWpB.js";import{j as c}from"./jsx-runtime-BcdWgXRp.js";import"./index-BzAyOvpL.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b={title:"Components/Typography",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`The Typography component provides a consistent and flexible way to display text across your application. 
        It supports a range of predefined styles and customizations, ensuring your text aligns with the design system.
        `}}},argTypes:{scale:{options:["body1","body2","body3","headline1","headline2","headline3","caption","eyebrow"],control:{type:"select"}}},args:{scale:"headline1"},render:o=>{const e=document.getElementById("story--components-typography--basic--primary-inner");return e==null||e.style.setProperty("--td-web-typography-eyebrow-alignment","center"),c.jsx(r,{scale:o.scale,children:"Change the scale value."})}},t={},n={parameters:{docs:{description:{story:`The alignment of the eyebrow scale can be customized by modifying 
          the custom CSS property '--td-web-typography-eyebrow-alignment'. 

          This property accepts the following values:

    center: Aligns the eyebrow to the center.
    start: Aligns the eyebrow to the start (left-aligned).
    end: Aligns the eyebrow to the end (right-aligned).

    Here the css property is set as '--td-web-typography-eyebrow-alignment: start;'`}}},render:o=>{const e=document.getElementById("story--components-typography--left-aligned-eyebrow-inner");return e==null||e.style.setProperty("--td-web-typography-eyebrow-alignment","left"),c.jsx(r,{scale:"eyebrow",children:"Left aligned eyebrow"})}};var s,a,y,p,i,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(y=(a=t.parameters)==null?void 0:a.docs)==null?void 0:y.source}}},n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`The alignment of the eyebrow scale can be customized by modifying 
          the custom CSS property '--td-web-typography-eyebrow-alignment'. 

          This property accepts the following values:

    center: Aligns the eyebrow to the center.
    start: Aligns the eyebrow to the start (left-aligned).
    end: Aligns the eyebrow to the end (right-aligned).

    Here the css property is set as '--td-web-typography-eyebrow-alignment: start;'\`
      }
    }
  },
  render: _args => {
    const element = document.getElementById('story--components-typography--left-aligned-eyebrow-inner');
    element?.style.setProperty('--td-web-typography-eyebrow-alignment', 'left');
    return <Typography scale="eyebrow">Left aligned eyebrow</Typography>;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const w=["Basic","LeftAlignedEyebrow"];export{t as Basic,n as LeftAlignedEyebrow,w as __namedExportsOrder,b as default};
