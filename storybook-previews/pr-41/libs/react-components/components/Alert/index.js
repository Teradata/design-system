import { c as _, u as g, e as k, P as C, i as A, a as N, H as f, v as O, d as u, o as m, N as w, h as E } from "../../query-DSO61t36-C1M9Gebp.mjs";
import { v as I } from "../../observer-DQ8OfVDQ-Df_oiWMx.mjs";
import { n as T } from "../../state-B_tK3mBm-B9emsN7g.mjs";
import "../../icon-DpqNHE5_.mjs";
import P from "react";
import { jsx as F } from "react/jsx-runtime";
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var R = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.adapter = t;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
    }, e.prototype.destroy = function() {
    }, e;
  }()
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var v = {
  CLOSING: "mdc-banner--closing",
  OPEN: "mdc-banner--open",
  OPENING: "mdc-banner--opening"
}, y = {
  BANNER_ANIMATION_CLOSE_TIME_MS: 250,
  BANNER_ANIMATION_OPEN_TIME_MS: 300
}, S = {
  ACTION_CLICKED: "MDCBanner:actionClicked"
}, d;
(function(e) {
  e[e.PRIMARY = 0] = "PRIMARY", e[e.SECONDARY = 1] = "SECONDARY", e[e.UNSPECIFIED = 2] = "UNSPECIFIED";
})(d || (d = {}));
var h;
(function(e) {
  e[e.PRIMARY = 0] = "PRIMARY", e[e.SECONDARY = 1] = "SECONDARY", e[e.UNKNOWN = 2] = "UNKNOWN";
})(h || (h = {}));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var b = v.OPENING, x = v.OPEN, l = v.CLOSING, M = (
  /** @class */
  function(e) {
    _(t, e);
    function t(n) {
      var r = e.call(this, g(g({}, t.defaultAdapter), n)) || this;
      return r.isOpened = !1, r.animationFrame = 0, r.animationTimer = 0, r;
    }
    return Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          getContentHeight: function() {
            return 0;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          notifyActionClicked: function() {
          },
          releaseFocus: function() {
          },
          removeClass: function() {
          },
          setStyleProperty: function() {
          },
          trapFocus: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.destroy = function() {
      cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = 0;
    }, t.prototype.open = function() {
      var n = this;
      this.isOpened = !0, this.adapter.removeClass(l), this.adapter.addClass(b), this.adapter.notifyOpening();
      var r = this.adapter.getContentHeight();
      this.animationFrame = requestAnimationFrame(function() {
        n.adapter.addClass(x), n.adapter.setStyleProperty("height", r + "px"), n.animationTimer = setTimeout(function() {
          n.handleAnimationTimerEnd(), n.adapter.trapFocus(), n.adapter.notifyOpened();
        }, y.BANNER_ANIMATION_OPEN_TIME_MS);
      });
    }, t.prototype.close = function(n) {
      var r = this;
      this.isOpened && (cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, this.isOpened = !1, this.adapter.notifyClosing(n), this.adapter.addClass(l), this.adapter.setStyleProperty("height", "0"), this.adapter.removeClass(x), this.adapter.removeClass(b), clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, y.BANNER_ANIMATION_CLOSE_TIME_MS));
    }, t.prototype.isOpen = function() {
      return this.isOpened;
    }, t.prototype.handlePrimaryActionClick = function(n) {
      n === void 0 && (n = !1), n ? this.adapter.notifyActionClicked(h.PRIMARY) : this.close(d.PRIMARY);
    }, t.prototype.handleSecondaryActionClick = function(n) {
      n === void 0 && (n = !1), n ? this.adapter.notifyActionClicked(h.SECONDARY) : this.close(d.SECONDARY);
    }, t.prototype.layout = function() {
      var n = this.adapter.getContentHeight();
      this.adapter.setStyleProperty("height", n + "px");
    }, t.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(b), this.adapter.removeClass(l);
    }, t;
  }(R)
), $ = Object.defineProperty, i = (e, t, n, r) => {
  for (var a = void 0, c = e.length - 1, s; c >= 0; c--)
    (s = e[c]) && (a = s(t, n, a) || a);
  return a && $(t, n, a), a;
};
class o extends A {
  constructor() {
    super(), this.mdcFoundationClass = M, this.currentWidth = 0, this.open = !0, this.titleText = "", this.descriptionText = "", this.icon = "", this.iconAriaLabel = "", this.inline = !1, this.state = "", this.reason = d.UNSPECIFIED, this._resizeObserver = new ResizeObserver((t) => {
      for (const n of t) {
        const r = n.contentRect.width;
        r !== this.currentWidth && (this.currentWidth = r, this.mdcFoundation.layout());
      }
    });
  }
  // Cleanup when element is removed
  disconnectedCallback() {
    super.disconnectedCallback(), this._resizeObserver.disconnect();
  }
  render() {
    const t = {
      "mdc-banner": !0,
      "cv-banner--inline": this.inline,
      negative: this.state === "negative",
      positive: this.state === "positive",
      caution: this.state === "caution",
      active: this.state === "active"
    };
    return f` <div class="${N(t)}" role="banner">
      <div
        class="mdc-banner__content"
        role="alertdialog"
        aria-live="assertive"
        aria-label="${this.titleText}"
      >
        <div class="mdc-banner__graphic-text-wrapper">
          ${this.icon ? this.renderIcon() : ""}
          <div class="mdc-banner__text">
            <span class="mdc-typography--body1">${this.titleText}</span>
            <div class="mdc-typography--body2">${this.descriptionText}</div>
          </div>
        </div>
        <div class="mdc-banner__actions">
          <slot name="action-items"></slot>
        </div>
      </div>
    </div>`;
  }
  /** @soyTemplate */
  renderIcon() {
    return f` <div
      class="mdc-banner__graphic"
      role="img"
      aria-label="${this.iconAriaLabel}"
    >
      <slot name="icon">
        <cv-icon class="mdc-banner__icon"> ${this.icon} </cv-icon>
      </slot>
    </div>`;
  }
  createAdapter() {
    return {
      ...O(this.mdcRoot),
      getContentHeight: () => this.mdcContent.offsetHeight,
      setStyleProperty: (t, n) => {
        this.mdcRoot.style.setProperty(t, n);
      },
      trapFocus: () => {
      },
      releaseFocus: () => {
      },
      notifyActionClicked: (t) => this.dispatchEvent(
        new CustomEvent(S.ACTION_CLICKED, {
          bubbles: !0,
          cancelable: !0,
          detail: { reason: t }
        })
      ),
      notifyClosed: () => {
      },
      notifyClosing: () => {
        this.open = !1;
      },
      notifyOpened: () => {
      },
      notifyOpening: () => {
        this.open = !0;
      }
    };
  }
  /** @export */
  show() {
    this.open = !0;
  }
  /** @export */
  close(t = d.UNSPECIFIED) {
    this.reason = t, this.open = !1;
  }
  async firstUpdated() {
    this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(), this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.open && this.mdcFoundation.open(), this._resizeObserver.observe(this.mdcGraphicTextWrapper);
  }
}
i([
  u(".mdc-banner")
], o.prototype, "mdcRoot");
i([
  u(".mdc-banner__content")
], o.prototype, "mdcContent");
i([
  u(".mdc-banner__graphic-text-wrapper")
], o.prototype, "mdcGraphicTextWrapper");
i([
  T()
], o.prototype, "currentWidth");
i([
  m({ type: Boolean, reflect: !0 }),
  I(function(e) {
    this.mdcFoundation && (e ? this.mdcFoundation.open() : (this.mdcFoundation.close(this.reason), this.reason = d.UNSPECIFIED));
  })
], o.prototype, "open");
i([
  m({ type: String })
], o.prototype, "titleText");
i([
  m({ type: String })
], o.prototype, "descriptionText");
i([
  m({ type: String })
], o.prototype, "icon");
i([
  m({ type: String })
], o.prototype, "iconAriaLabel");
i([
  m({ type: Boolean })
], o.prototype, "inline");
i([
  m()
], o.prototype, "state");
const z = ':host .mdc-banner__graphic{color:#fff;color:var(--mdc-theme-surface, #fff)}:host .mdc-banner__graphic{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:host .mdc-banner__content,:host .mdc-banner__fixed{min-width:344px}@media (max-width: 480px),(max-width: 344px){:host .mdc-banner__content,:host .mdc-banner__fixed{min-width:100%}}:host .mdc-banner__content{max-width:720px}:host .mdc-banner{z-index:1;border-bottom-style:solid;box-sizing:border-box;display:none;flex-shrink:0;height:0;position:relative;width:100%}@media (max-width: 480px){:host .mdc-banner .mdc-banner__fixed{left:0;right:0}:host .mdc-banner .mdc-banner__text{margin-left:16px;margin-right:36px}[dir=rtl] :host .mdc-banner .mdc-banner__text,:host .mdc-banner .mdc-banner__text[dir=rtl]{margin-left:36px;margin-right:16px}}@media (max-width: 480px){:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__content{flex-wrap:wrap}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__graphic{margin-bottom:12px}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text{margin-left:16px;margin-right:8px;padding-bottom:4px}[dir=rtl] :host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text,:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text[dir=rtl]{margin-left:8px;margin-right:16px}:host .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__actions{margin-left:auto}}:host .mdc-banner--opening,:host .mdc-banner--open,:host .mdc-banner--closing{display:flex}:host .mdc-banner--open{transition:height .3s ease}:host .mdc-banner--open .mdc-banner__content{transition:transform .3s ease;transform:translateY(0)}:host .mdc-banner--closing{transition:height .25s ease}:host .mdc-banner--closing .mdc-banner__content{transition:transform .25s ease}:host .mdc-banner--centered .mdc-banner__content{left:0;margin-left:auto;margin-right:auto;right:0}:host .mdc-banner__fixed{border-bottom-style:solid;box-sizing:border-box;height:inherit;position:fixed;width:100%}:host .mdc-banner__content{display:flex;min-height:52px;position:absolute;transform:translateY(-100%);width:100%}:host .mdc-banner__graphic-text-wrapper{display:flex;width:100%}:host .mdc-banner__graphic{margin:16px 0 16px 16px;flex-shrink:0;text-align:center}[dir=rtl] :host .mdc-banner__graphic,:host .mdc-banner__graphic[dir=rtl]{margin-left:0;margin-right:16px}:host .mdc-banner__icon{position:relative;top:50%;transform:translateY(-50%)}:host .mdc-banner__text{margin-left:24px;margin-right:90px;align-self:center;flex-grow:1;padding-top:16px;padding-bottom:16px}[dir=rtl] :host .mdc-banner__text,:host .mdc-banner__text[dir=rtl]{margin-left:90px;margin-right:24px}:host .mdc-banner__actions{padding:8px 8px 8px 0;align-self:flex-end;display:flex;flex-shrink:0}[dir=rtl] :host .mdc-banner__actions,:host .mdc-banner__actions[dir=rtl]{padding-left:8px;padding-right:0}:host .mdc-banner{background-color:#fff;background-color:var(--mdc-banner-container-color, #fff);border-bottom-color:#0000001f;border-bottom-color:var(--mdc-banner-divider-color, rgba(0, 0, 0, .12));border-bottom-width:1px;border-bottom-width:var(--mdc-banner-divider-height, 1px);border-radius:0;border-radius:var(--mdc-banner-container-shape, 0)}:host .mdc-banner .mdc-banner__text{color:#000;color:var(--mdc-banner-supporting-text-color, #000)}:host .mdc-banner .mdc-banner__text{letter-spacing:.0178571429em;letter-spacing:var(--mdc-banner-supporting-text-tracking, .0178571429em);font-size:.875rem;font-size:var(--mdc-banner-supporting-text-size, .875rem);font-family:Roboto,sans-serif;font-family:var(--mdc-banner-supporting-text-font, Roboto, sans-serif);font-weight:400;font-weight:var(--mdc-banner-supporting-text-weight, 400);line-height:1.25rem;line-height:var(--mdc-banner-supporting-text-line-height, 1.25rem)}:host .mdc-banner .mdc-banner__graphic{border-radius:50%;border-radius:var(--mdc-banner-with-image-image-shape, 50%)}:host .mdc-banner .mdc-banner__graphic{height:40px;height:var(--mdc-banner-with-image-image-size, 40px);width:40px;width:var(--mdc-banner-with-image-image-size, 40px)}:host .mdc-banner .mdc-banner__fixed{background-color:#fff;background-color:var(--mdc-banner-container-color, #fff)}:host .mdc-banner .mdc-banner__fixed{border-bottom-color:#0000001f;border-bottom-color:var(--mdc-banner-divider-color, rgba(0, 0, 0, .12))}:host .mdc-banner .mdc-banner__fixed{border-bottom-width:1px;border-bottom-width:var(--mdc-banner-divider-height, 1px)}:host .mdc-banner .mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color, var(--mdc-banner-action-label-text-color, #6200ee))}:host .mdc-banner .mdc-button .mdc-button__ripple:before{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color, var(--mdc-banner-action-hover-state-layer-color, #6200ee))}:host .mdc-banner .mdc-button .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-text-button-pressed-state-layer-color, var(--mdc-banner-action-pressed-state-layer-color, #6200ee))}:host .mdc-banner .mdc-button:hover .mdc-button__ripple:before,:host .mdc-banner .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, var(--mdc-banner-action-hover-state-layer-opacity, .04))}:host .mdc-banner .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, var(--mdc-banner-action-focus-state-layer-opacity, .12))}:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}:host .mdc-banner .mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-text-button-pressed-state-layer-opacity, var(--mdc-banner-action-pressed-state-layer-opacity, .1))}:host .mdc-banner .mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-text-button-pressed-state-layer-opacity, var(--mdc-banner-action-pressed-state-layer-opacity, .1))}:host .mdc-banner__secondary-action{margin-left:0;margin-right:8px}[dir=rtl] :host .mdc-banner__secondary-action,:host .mdc-banner__secondary-action[dir=rtl]{margin-left:8px;margin-right:0}:host .mdc-banner{--mdc-theme-surface: var(--cv-theme-surface-container-highest);--mdc-theme-primary: var(--mdc-theme-on-surface);--mdc-theme-text-primary-on-background: var(--cv-theme-on-surface);--mdc-theme-text-secondary-on-background: var(--cv-theme-on-surface);--cv-theme-outline: var(--cv-theme-on-surface);background-color:var(--mdc-theme-surface);color:var(--mdc-theme-text-primary-on-background)}:host .mdc-banner .mdc-banner__graphic{--mdc-theme-surface: var(--mdc-theme-text-icon-on-background)}:host .mdc-banner .mdc-banner__text{color:var(--mdc-theme-text-primary-on-background)}:host .mdc-banner .mdc-banner__text .mdc-typography--body2{font-family:var(--mdc-typography-body2-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:var(--mdc-typography-body2-font-weight);line-height:var(--mdc-typography-body2-line-height)}:host .mdc-banner .mdc-banner__text .mdc-typography--body1{color:var(--mdc-theme-text-secondary-on-background);font-family:var(--mdc-typography-body1-font-family);font-size:var(--mdc-typography-body1-font-size);font-weight:var(--mdc-typography-body1-font-weight);line-height:var(--mdc-typography-body1-line-height)}:host .mdc-banner.cv-banner--inline{--mdc-theme-surface: var(--cv-theme-surface-container)}:host .mdc-banner.caution{--mdc-theme-surface: var(--mdc-theme-caution);--mdc-theme-primary: var(--mdc-theme-on-caution);--mdc-theme-on-primary: var(--mdc-theme-caution);--mdc-theme-text-primary-on-background: var(--mdc-theme-on-caution);--mdc-theme-text-secondary-on-background: var(--mdc-theme-on-caution);--mdc-theme-text-icon-on-background: var(--mdc-theme-on-caution);--cv-theme-outline: var(--cv-theme-on-caution)}:host .mdc-banner.caution.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-caution-container);--mdc-theme-primary: var(--mdc-theme-on-caution-container);--mdc-theme-on-primary: var(--mdc-theme-caution-container);--mdc-theme-text-primary-on-background: var( --mdc-theme-on-caution-container );--mdc-theme-text-secondary-on-background: var( --mdc-theme-on-caution-container );--mdc-theme-text-icon-on-background: var( --mdc-theme-on-caution-container );--cv-theme-outline: var(--cv-theme-on-caution-container)}:host .mdc-banner.negative{--mdc-theme-surface: var(--mdc-theme-negative);--mdc-theme-primary: var(--mdc-theme-on-negative);--mdc-theme-on-primary: var(--mdc-theme-negative);--mdc-theme-text-primary-on-background: var(--mdc-theme-on-negative);--mdc-theme-text-secondary-on-background: var(--mdc-theme-on-negative);--mdc-theme-text-icon-on-background: var(--mdc-theme-on-negative);--cv-theme-outline: var(--cv-theme-on-negative)}:host .mdc-banner.negative.cv-banner--inline{--mdc-theme-surface: var(--mdc-theme-negative-container);--mdc-theme-primary: var(--mdc-theme-on-negative-container);--mdc-theme-on-primary: var(--mdc-theme-negative-container);--mdc-theme-text-primary-on-background: var( --mdc-theme-on-negative-container );--mdc-theme-text-secondary-on-background: var( --mdc-theme-on-negative-container );--mdc-theme-text-icon-on-background: var( --mdc-theme-on-negative-container );--cv-theme-outline: var(--cv-theme-on-negative-container)}:host .mdc-banner.active{--mdc-theme-surface: var(--mdc-theme-secondary);--mdc-theme-primary: var(--mdc-theme-on-secondary);--mdc-theme-on-primary: var(--mdc-theme-secondary);--mdc-theme-text-primary-on-background: var(--mdc-theme-on-secondary);--mdc-theme-text-secondary-on-background: var(--mdc-theme-on-secondary);--mdc-theme-text-icon-on-background: var(--mdc-theme-on-secondary);--cv-theme-outline: var(--cv-theme-on-secondary)}:host .mdc-banner.active.cv-banner--inline{--mdc-theme-surface: var(--cv-theme-secondary-container);--mdc-theme-primary: var(--mdc-theme-on-secondary-container);--mdc-theme-on-primary: var(--mdc-theme-secondary-container);--mdc-theme-text-primary-on-background: var( --mdc-theme-on-secondary-container );--mdc-theme-text-secondary-on-background: var( --mdc-theme-on-secondary-container );--mdc-theme-text-icon-on-background: var( --mdc-theme-on-secondary-container );--cv-theme-outline: var(--cv-theme-on-secondary-container)}:host .mdc-banner.positive{--mdc-theme-surface: var(--mdc-theme-positive);--mdc-theme-primary: var(--mdc-theme-on-positive);--mdc-theme-on-primary: var(--mdc-theme-positive);--mdc-theme-text-primary-on-background: var(--mdc-theme-on-positive);--mdc-theme-text-secondary-on-background: var(--mdc-theme-on-positive);--mdc-theme-text-icon-on-background: var(--mdc-theme-on-positive);--cv-theme-outline: var(--cv-theme-on-positive)}:host .mdc-banner.positive.cv-banner--inline{--mdc-theme-surface: var(--cv-theme-positive-container);--mdc-theme-primary: var(--mdc-theme-on-positive-container);--mdc-theme-on-primary: var(--mdc-theme-positive-container);--mdc-theme-text-primary-on-background: var( --mdc-theme-on-positive-container );--mdc-theme-text-secondary-on-background: var( --mdc-theme-on-positive-container );--mdc-theme-text-icon-on-background: var( --mdc-theme-on-positive-container );--cv-theme-outline: var(--cv-theme-on-positive-container)}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity .28s cubic-bezier(.4,0,.2,1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-banner{border-radius:8px;position:relative;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;overflow:hidden;border:none}:host .mdc-banner .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-banner .mdc-banner__content{max-width:inherit}:host .mdc-banner .mdc-banner__graphic{background:none;margin-left:24px;width:24px;font-variation-settings:"FILL" 1}:host .mdc-banner .mdc-banner__text{margin-left:24px}:host .mdc-banner .mdc-banner__actions{align-self:center;align-items:center}:host .mdc-banner.cv-banner--inline{border-radius:0;box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}:host ::slotted(*){margin-left:8px}';
var Y = (e, t, n, r) => {
  for (var a = t, c = e.length - 1, s; c >= 0; c--)
    (s = e[c]) && (a = s(a) || a);
  return a;
};
let p = class extends o {
};
p.styles = [
  C`
      ${k(z)}
    `
];
p = Y([
  w("cv-alert")
], p);
const D = E({
  tagName: "cv-alert",
  elementClass: p,
  react: P
}), L = (e) => /* @__PURE__ */ F(D, {
  ...e
});
L.displayName = "Alert";
export {
  L as default
};
