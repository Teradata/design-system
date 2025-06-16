import { P as c, s as m, N as i, i as f, H as g } from "./query-DSO61t36-C1M9Gebp.mjs";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const r = c`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let e = class extends f {
  /** @soyTemplate */
  render() {
    return g`<span><slot></slot></span>`;
  }
};
e.styles = [r];
e = m([
  i("mwc-icon")
], e);
var d = (s, l, p, h) => {
  for (var t = l, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (t = a(t) || t);
  return t;
};
let o = class extends e {
};
o.styles = [r];
o = d([
  i("cv-icon")
], o);
