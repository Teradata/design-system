import { C as u, j as d } from "./query-DSO61t36-C1M9Gebp.mjs";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function m(e, l, s) {
  let o, t = e;
  return typeof e == "object" ? (t = e.slot, o = e) : o = { flatten: l }, s ? d({ slot: t, flatten: l, selector: s }) : u({ descriptor: (c) => ({ get() {
    var n, r;
    const i = "slot" + (t ? `[name=${t}]` : ":not([name])"), a = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(i);
    return (r = a == null ? void 0 : a.assignedNodes(o)) !== null && r !== void 0 ? r : [];
  }, enumerable: !0, configurable: !0 }) });
}
export {
  m
};
