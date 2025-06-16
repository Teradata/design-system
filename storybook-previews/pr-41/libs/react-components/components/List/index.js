import { e as r, P as o, N as p, h as n } from "../../query-DSO61t36-C1M9Gebp.mjs";
import { u as l, h as g } from "../../mwc-list.css-C_-DVEme-DSHYo7I-.mjs";
import v from "react";
import "../../icon-DpqNHE5_.mjs";
import { jsx as h } from "react/jsx-runtime";
const c = ":host{padding-right:var(--cv-list-padding-right, 0);padding-left:var(--cv-list-padding-left, 0)}:host(.subnav) ::slotted(*),:host([subnav]) ::slotted(*){height:32px;font-weight:var(--mdc-typography-body2-font-weight);border-radius:var(--cv-list-item-border-radius, 100px);padding-right:var(--cv-list-padding-right, 16px);padding-left:var(--cv-list-padding-left, 16px)}:host(.subnav),:host([subnav]){--cv-list-padding-right: 0;--cv-list-padding-left: 16px;padding-left:32px}.mdc-deprecated-list{width:100%}";
var m = (t, d, x, b) => {
  for (var s = d, a = t.length - 1, e; a >= 0; a--)
    (e = t[a]) && (s = e(s) || s);
  return s;
};
let i = class extends g {
};
i.styles = [
  l,
  o`
      ${r(c)}
    `
];
i = m([
  p("cv-list")
], i);
const f = n({
  tagName: "cv-list",
  elementClass: i,
  react: v
}), u = (t) => /* @__PURE__ */ h(f, {
  ...t
});
u.displayName = "List";
export {
  u as default
};
