import { useState as _ } from "react";
import { jsxs as a, Fragment as d, jsx as s } from "react/jsx-runtime";
import '../../assets/index3.css';const u = "_listItem_63m2u_1", p = "_active_63m2u_23", h = "_content_63m2u_28", x = "_caret_63m2u_37", t = {
  listItem: u,
  active: p,
  content: h,
  caret: x
}, $ = ({
  label: n,
  active: i,
  content: e
}) => {
  const [c, o] = _(i), r = e !== void 0, l = c ? t.active : "", m = c ? t.active : "", v = () => {
    o(!c);
  };
  return /* @__PURE__ */ a(d, {
    children: [/* @__PURE__ */ a("div", {
      className: `${t.listItem} ${m}`,
      onClick: v,
      children: [r && /* @__PURE__ */ s("button", {
        "aria-label": `Expand nav category '${n}'`,
        "aria-expanded": "false",
        type: "button",
        className: t.caret
      }), /* @__PURE__ */ s("span", {
        children: n
      })]
    }), e && /* @__PURE__ */ s("div", {
      className: `${t.content} ${l}`,
      children: e
    })]
  });
};
export {
  $ as default
};
