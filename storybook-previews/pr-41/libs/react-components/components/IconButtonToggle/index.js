import { s as e, d as g, o as r, N as m, e as f, P as R, i as y, H as h, a as $, h as O } from "../../query-DSO61t36-C1M9Gebp.mjs";
import { p as w, t as H } from "../../mwc-icon-button.css-DJiDOS0_-BkAgJ9cc.mjs";
import { T as L, N as I } from "../../ripple-handlers-BAdg-fJB-BM-4KCUA.mjs";
import { n as B } from "../../state-B_tK3mBm-B9emsN7g.mjs";
import { n as b } from "../../event-options-D44mpm5S-h9E4Gudo.mjs";
import { l as u } from "../../if-defined-DN7whKwy-jzQToWN8.mjs";
import D from "react";
import { jsx as P } from "react/jsx-runtime";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class t extends y {
  constructor() {
    super(...arguments), this.disabled = !1, this.onIcon = "", this.offIcon = "", this.on = !1, this.shouldRenderRipple = !1, this.rippleHandlers = new I(() => (this.shouldRenderRipple = !0, this.ripple));
  }
  handleClick() {
    this.on = !this.on, this.dispatchEvent(new CustomEvent("icon-button-toggle-change", { detail: { isOn: this.on }, bubbles: !0 }));
  }
  click() {
    this.mdcRoot.focus(), this.mdcRoot.click();
  }
  focus() {
    this.rippleHandlers.startFocus(), this.mdcRoot.focus();
  }
  blur() {
    this.rippleHandlers.endFocus(), this.mdcRoot.blur();
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? h`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
  }
  /** @soyTemplate */
  render() {
    const o = {
      "mdc-icon-button--on": this.on
    }, s = this.ariaLabelOn !== void 0 && this.ariaLabelOff !== void 0, a = s ? void 0 : this.on, i = s ? this.on ? this.ariaLabelOn : this.ariaLabelOff : this.ariaLabel;
    return h`<button
          class="mdc-icon-button mdc-icon-button--display-flex ${$(o)}"
          aria-pressed="${u(a)}"
          aria-label="${u(i)}"
          @click="${this.handleClick}"
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
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`;
  }
  handleRippleMouseDown(o) {
    const s = () => {
      window.removeEventListener("mouseup", s), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", s), this.rippleHandlers.startPress(o);
  }
  handleRippleTouchStart(o) {
    this.rippleHandlers.startPress(o);
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
e([
  g(".mdc-icon-button")
], t.prototype, "mdcRoot", void 0);
e([
  w,
  r({ type: String, attribute: "aria-label" })
], t.prototype, "ariaLabel", void 0);
e([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", void 0);
e([
  r({ type: String })
], t.prototype, "onIcon", void 0);
e([
  r({ type: String })
], t.prototype, "offIcon", void 0);
e([
  r({ type: String })
], t.prototype, "ariaLabelOn", void 0);
e([
  r({ type: String })
], t.prototype, "ariaLabelOff", void 0);
e([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "on", void 0);
e([
  L("mwc-ripple")
], t.prototype, "ripple", void 0);
e([
  B()
], t.prototype, "shouldRenderRipple", void 0);
e([
  b({ passive: !0 })
], t.prototype, "handleRippleMouseDown", null);
e([
  b({ passive: !0 })
], t.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let p = class extends t {
};
p.styles = [H];
p = e([
  m("mwc-icon-button-toggle")
], p);
const S = ':host{border-radius:50%;color:var(--cv-theme-on-surface-variant)}:host([disabled]){background-color:transparent}:host([on]){--mdc-ripple-color: var(--cv-theme-on-surface);background-color:var(--cv-theme-secondary-container);color:var(--cv-theme-on-secondary-container)}:host([on]) .material-icons{font-variation-settings:"FILL" 1}';
var k = Object.defineProperty, F = Object.getOwnPropertyDescriptor, v = (n, o, s, a) => {
  for (var i = a > 1 ? void 0 : a ? F(o, s) : o, l = n.length - 1, c; l >= 0; l--)
    (c = n[l]) && (i = (a ? c(o, s, i) : c(i)) || i);
  return a && i && k(o, s, i), i;
};
let d = class extends p {
  constructor() {
    super(...arguments), this.toggledOn = !1;
  }
  update(n) {
    n.has("toggledOn") && this.toggledOn !== this.on && (this.on = this.toggledOn), n.has("on") && this.toggledOn !== this.on && (this.toggledOn = this.on), super.update(n);
  }
  renderRipple() {
    return this.shouldRenderRipple ? h` <mwc-ripple
          .disabled="${this.disabled}"
          .activated="${this.toggledOn}"
          unbounded
        >
        </mwc-ripple>` : "";
  }
};
d.styles = [
  ...p.styles,
  R`
      ${f(S)}
    `
];
v([
  r({ type: Boolean, reflect: !0 })
], d.prototype, "toggledOn", 2);
d = v([
  m("cv-icon-button-toggle")
], d);
const M = O({
  tagName: "cv-icon-button-toggle",
  elementClass: d,
  react: D
}), T = ({
  offIcon: n,
  onIcon: o,
  ariaLabel: s,
  ariaHasPopup: a,
  disabled: i,
  onClick: l
}) => /* @__PURE__ */ P(M, {
  ...{
    offIcon: n,
    onIcon: o,
    disabled: i,
    "aria-label": s,
    "aria-haspopup": a,
    onClick: l
  }
});
T.displayName = "IconButtonToggle";
export {
  T as IconButtonToggle,
  T as default
};
