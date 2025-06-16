import { s as o, o as a, d as m, e as b, P as v, i as R, H as d, N as f, h as $ } from "../../query-DSO61t36-C1M9Gebp.mjs";
import { T as H, N as y } from "../../ripple-handlers-BAdg-fJB-BM-4KCUA.mjs";
import { p as c, t as w } from "../../mwc-icon-button.css-DJiDOS0_-BkAgJ9cc.mjs";
import { n as P } from "../../state-B_tK3mBm-B9emsN7g.mjs";
import { n as h } from "../../event-options-D44mpm5S-h9E4Gudo.mjs";
import { l as g } from "../../if-defined-DN7whKwy-jzQToWN8.mjs";
import D from "react";
import { jsx as L } from "react/jsx-runtime";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class t extends R {
  constructor() {
    super(...arguments), this.disabled = !1, this.icon = "", this.shouldRenderRipple = !1, this.rippleHandlers = new y(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
  }
  focus() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.startFocus(), e.focus());
  }
  blur() {
    const e = this.buttonElement;
    e && (this.rippleHandlers.endFocus(), e.blur());
  }
  /** @soyTemplate */
  render() {
    return d`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${g(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? d`<i class="material-icons">${this.icon}</i>` : ""}
    <span
      ><slot></slot
    ></span>
  </button>`;
  }
  handleRippleMouseDown(e) {
    const p = () => {
      window.removeEventListener("mouseup", p), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", p), this.rippleHandlers.startPress(e);
  }
  handleRippleTouchStart(e) {
    this.rippleHandlers.startPress(e);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}
o([
  a({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", void 0);
o([
  a({ type: String })
], t.prototype, "icon", void 0);
o([
  c,
  a({ type: String, attribute: "aria-label" })
], t.prototype, "ariaLabel", void 0);
o([
  c,
  a({ type: String, attribute: "aria-haspopup" })
], t.prototype, "ariaHasPopup", void 0);
o([
  m("button")
], t.prototype, "buttonElement", void 0);
o([
  H("mwc-ripple")
], t.prototype, "ripple", void 0);
o([
  P()
], t.prototype, "shouldRenderRipple", void 0);
o([
  h({ passive: !0 })
], t.prototype, "handleRippleMouseDown", null);
o([
  h({ passive: !0 })
], t.prototype, "handleRippleTouchStart", null);
const E = ':host{color:var(--mdc-theme-text-icon-on-background)}:host .mdc-icon-button{cursor:var(--cv-icon-button-cursor, pointer)}:host .mdc-icon-button:active,:host .mdc-icon-button:focus{font-variation-settings:"FILL" 1}';
var F = (i, e, p, u) => {
  for (var s = e, r = i.length - 1, l; r >= 0; r--)
    (l = i[r]) && (s = l(s) || s);
  return s;
};
let n = class extends t {
};
n.styles = [w, v`${b(E)}`];
n = F([
  f("cv-icon-button")
], n);
const M = $({
  tagName: "cv-icon-button",
  elementClass: n,
  react: D
}), x = ({
  icon: i,
  ariaLabel: e,
  ariaHasPopup: p,
  disabled: u,
  slot: s,
  onClick: r
}) => /* @__PURE__ */ L(M, {
  ...{
    icon: i,
    disabled: u,
    slot: s,
    "aria-label": e,
    "aria-haspopup": p,
    onClick: r
  }
});
x.displayName = "IconButton";
export {
  x as default
};
