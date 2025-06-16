import { z as o, i as m } from "../../mwc-list-item.css-Cg9onxQ--V9CUa5oh.mjs";
import { P as i, e as d, N as n, h as l } from "../../query-DSO61t36-C1M9Gebp.mjs";
import p from "react";
import "../../icon-DpqNHE5_.mjs";
import { jsx as h } from "react/jsx-runtime";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _ = i`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`, v = ':host{width:100%;box-sizing:border-box}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{--mdc-theme-text-icon-on-background: var(--cv-theme-on-secondary-container);color:var(--cv-theme-on-secondary-container);background-color:var(--cv-theme-secondary-container);border-radius:9999px}:host([disabled]){color:var(--cv-theme-on-surface-38)}:host([disabled]):host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([disabled]) .mdc-deprecated-list-item__meta{--mdc-theme-text-icon-on-background: var(--cv-theme-on-surface-38)}:host([selected]) .mdc-deprecated-list-item__graphic.material-icons,:host([activated]) .mdc-deprecated-list-item__graphic.material-icons,:host([hasActivatedChild]) .mdc-deprecated-list-item__graphic.material-icons{font-variation-settings:"FILL" 1}.mdc-deprecated-list-item__meta.material-icons ::slotted(cv-icon){font-family:var(--mdc-icon-font);font-size:var(--mdc-icon-size, 24px);line-height:1}.mdc-deprecated-list-item__text{padding-left:var(--cv-list-item-text-padding, 0)}.mdc-deprecated-list-item__secondary-text{--mdc-icon-size: var(--mdc-typography-body2-font-size)}.mdc-deprecated-list-item__secondary-text ::slotted(*){display:inline-flex;align-items:center}.mdc-deprecated-list-item__meta{display:flex;align-items:center}:host(:not([left])) .mdc-deprecated-list-item__meta{width:auto;min-width:40px}.mdc-deprecated-list-item__meta ::slotted(*),.mdc-deprecated-list-item__graphic ::slotted(*){display:flex;align-items:center}';
var g = (t, r, y, b) => {
  for (var e = r, c = t.length - 1, s; c >= 0; c--)
    (s = t[c]) && (e = s(e) || e);
  return e;
};
let a = class extends m {
};
a.styles = [
  i`
      ${d(o)}
    `,
  i`
      ${d(_)}
    `,
  i`
      ${d(v)}
    `
];
a = g([
  n("cv-list-item")
], a);
const f = l({
  tagName: "cv-list-item",
  elementClass: a,
  react: p
}), x = (t) => /* @__PURE__ */ h(f, {
  ...t
});
x.displayName = "CvListItem";
export {
  x as default
};
