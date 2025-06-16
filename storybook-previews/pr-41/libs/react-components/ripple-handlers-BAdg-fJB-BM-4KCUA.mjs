import { T as F, _ as H, b as R, E as k, c as D, p as v, u as y, s as p, P, a as _, H as O, C as x, d as z, o as u, N as V } from "./query-DSO61t36-C1M9Gebp.mjs";
import { d as N } from "./base-element-CzNmpVoz-DBhcS9pk.mjs";
import { n as l } from "./state-B_tK3mBm-B9emsN7g.mjs";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E = "important", U = " !" + E, B = F(class extends H {
  constructor(c) {
    var r;
    if (super(c), c.type !== R.ATTRIBUTE || c.name !== "style" || ((r = c.strings) === null || r === void 0 ? void 0 : r.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(c) {
    return Object.keys(c).reduce((r, e) => {
      const t = c[e];
      return t == null ? r : r + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${t};`;
    }, "");
  }
  update(c, [r]) {
    const { style: e } = c.element;
    if (this.ht === void 0) {
      this.ht = /* @__PURE__ */ new Set();
      for (const t in r)
        this.ht.add(t);
      return this.render(r);
    }
    this.ht.forEach((t) => {
      r[t] == null && (this.ht.delete(t), t.includes("-") ? e.removeProperty(t) : e[t] = "");
    });
    for (const t in r) {
      const a = r[t];
      if (a != null) {
        this.ht.add(t);
        const i = typeof a == "string" && a.endsWith(U);
        t.includes("-") || i ? e.setProperty(t, i ? a.slice(0, -11) : a, i ? E : "") : e[t] = a;
      }
    }
    return k;
  }
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function J(c) {
  return x({ descriptor: (r) => ({ async get() {
    var e;
    return await this.updateComplete, (e = this.renderRoot) === null || e === void 0 ? void 0 : e.querySelector(c);
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2018 Google Inc.
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
function M(c, r) {
  var e = c.matches || c.webkitMatchesSelector || c.msMatchesSelector;
  return e.call(c, r);
}
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
var G = (
  /** @class */
  function() {
    function c(r) {
      r === void 0 && (r = {}), this.adapter = r;
    }
    return Object.defineProperty(c, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), c.prototype.init = function() {
    }, c.prototype.destroy = function() {
    }, c;
  }()
);
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
var L = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, j = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, S = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function q(c, r, e) {
  if (!c)
    return { x: 0, y: 0 };
  var t = r.x, a = r.y, i = t + e.left, o = a + e.top, d, n;
  if (c.type === "touchstart") {
    var f = c;
    d = f.changedTouches[0].pageX - i, n = f.changedTouches[0].pageY - o;
  } else {
    var m = c;
    d = m.pageX - i, n = m.pageY - o;
  }
  return { x: d, y: n };
}
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
var I = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], w = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], h = [], $ = (
  /** @class */
  function(c) {
    D(r, c);
    function r(e) {
      var t = c.call(this, y(y({}, r.defaultAdapter), e)) || this;
      return t.activationAnimationHasEnded = !1, t.activationTimer = 0, t.fgDeactivationRemovalTimer = 0, t.fgScale = "0", t.frame = { width: 0, height: 0 }, t.initialSize = 0, t.layoutFrame = 0, t.maxRadius = 0, t.unboundedCoords = { left: 0, top: 0 }, t.activationState = t.defaultActivationState(), t.activationTimerCallback = function() {
        t.activationAnimationHasEnded = !0, t.runDeactivationUXLogicIfReady();
      }, t.activateHandler = function(a) {
        t.activateImpl(a);
      }, t.deactivateHandler = function() {
        t.deactivateImpl();
      }, t.focusHandler = function() {
        t.handleFocus();
      }, t.blurHandler = function() {
        t.handleBlur();
      }, t.resizeHandler = function() {
        t.layout();
      }, t;
    }
    return Object.defineProperty(r, "cssClasses", {
      get: function() {
        return L;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "strings", {
      get: function() {
        return j;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "numbers", {
      get: function() {
        return S;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.init = function() {
      var e = this, t = this.supportsPressRipple();
      if (this.registerRootHandlers(t), t) {
        var a = r.cssClasses, i = a.ROOT, o = a.UNBOUNDED;
        requestAnimationFrame(function() {
          e.adapter.addClass(i), e.adapter.isUnbounded() && (e.adapter.addClass(o), e.layoutInternal());
        });
      }
    }, r.prototype.destroy = function() {
      var e = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));
        var t = r.cssClasses, a = t.ROOT, i = t.UNBOUNDED;
        requestAnimationFrame(function() {
          e.adapter.removeClass(a), e.adapter.removeClass(i), e.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, r.prototype.activate = function(e) {
      this.activateImpl(e);
    }, r.prototype.deactivate = function() {
      this.deactivateImpl();
    }, r.prototype.layout = function() {
      var e = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        e.layoutInternal(), e.layoutFrame = 0;
      });
    }, r.prototype.setUnbounded = function(e) {
      var t = r.cssClasses.UNBOUNDED;
      e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
    }, r.prototype.handleFocus = function() {
      var e = this;
      requestAnimationFrame(function() {
        return e.adapter.addClass(r.cssClasses.BG_FOCUSED);
      });
    }, r.prototype.handleBlur = function() {
      var e = this;
      requestAnimationFrame(function() {
        return e.adapter.removeClass(r.cssClasses.BG_FOCUSED);
      });
    }, r.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, r.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, r.prototype.registerRootHandlers = function(e) {
      var t, a;
      if (e) {
        try {
          for (var i = v(I), o = i.next(); !o.done; o = i.next()) {
            var d = o.value;
            this.adapter.registerInteractionHandler(d, this.activateHandler);
          }
        } catch (n) {
          t = { error: n };
        } finally {
          try {
            o && !o.done && (a = i.return) && a.call(i);
          } finally {
            if (t)
              throw t.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, r.prototype.registerDeactivationHandlers = function(e) {
      var t, a;
      if (e.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var i = v(w), o = i.next(); !o.done; o = i.next()) {
            var d = o.value;
            this.adapter.registerDocumentInteractionHandler(d, this.deactivateHandler);
          }
        } catch (n) {
          t = { error: n };
        } finally {
          try {
            o && !o.done && (a = i.return) && a.call(i);
          } finally {
            if (t)
              throw t.error;
          }
        }
    }, r.prototype.deregisterRootHandlers = function() {
      var e, t;
      try {
        for (var a = v(I), i = a.next(); !i.done; i = a.next()) {
          var o = i.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (d) {
        e = { error: d };
      } finally {
        try {
          i && !i.done && (t = a.return) && t.call(a);
        } finally {
          if (e)
            throw e.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, r.prototype.deregisterDeactivationHandlers = function() {
      var e, t;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var a = v(w), i = a.next(); !i.done; i = a.next()) {
          var o = i.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (d) {
        e = { error: d };
      } finally {
        try {
          i && !i.done && (t = a.return) && t.call(a);
        } finally {
          if (e)
            throw e.error;
        }
      }
    }, r.prototype.removeCssVars = function() {
      var e = this, t = r.strings, a = Object.keys(t);
      a.forEach(function(i) {
        i.indexOf("VAR_") === 0 && e.adapter.updateCssVariable(t[i], null);
      });
    }, r.prototype.activateImpl = function(e) {
      var t = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var a = this.activationState;
        if (!a.isActivated) {
          var i = this.previousActivationEvent, o = i && e !== void 0 && i.type !== e.type;
          if (!o) {
            a.isActivated = !0, a.isProgrammatic = e === void 0, a.activationEvent = e, a.wasActivatedByPointer = a.isProgrammatic ? !1 : e !== void 0 && (e.type === "mousedown" || e.type === "touchstart" || e.type === "pointerdown");
            var d = e !== void 0 && h.length > 0 && h.some(function(n) {
              return t.adapter.containsEventTarget(n);
            });
            if (d) {
              this.resetActivationState();
              return;
            }
            e !== void 0 && (h.push(e.target), this.registerDeactivationHandlers(e)), a.wasElementMadeActive = this.checkElementMadeActive(e), a.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              h = [], !a.wasElementMadeActive && e !== void 0 && (e.key === " " || e.keyCode === 32) && (a.wasElementMadeActive = t.checkElementMadeActive(e), a.wasElementMadeActive && t.animateActivation()), a.wasElementMadeActive || (t.activationState = t.defaultActivationState());
            });
          }
        }
      }
    }, r.prototype.checkElementMadeActive = function(e) {
      return e !== void 0 && e.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, r.prototype.animateActivation = function() {
      var e = this, t = r.strings, a = t.VAR_FG_TRANSLATE_START, i = t.VAR_FG_TRANSLATE_END, o = r.cssClasses, d = o.FG_DEACTIVATION, n = o.FG_ACTIVATION, f = r.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", b = "";
      if (!this.adapter.isUnbounded()) {
        var A = this.getFgTranslationCoordinates(), C = A.startPoint, T = A.endPoint;
        m = C.x + "px, " + C.y + "px", b = T.x + "px, " + T.y + "px";
      }
      this.adapter.updateCssVariable(a, m), this.adapter.updateCssVariable(i, b), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(d), this.adapter.computeBoundingRect(), this.adapter.addClass(n), this.activationTimer = setTimeout(function() {
        e.activationTimerCallback();
      }, f);
    }, r.prototype.getFgTranslationCoordinates = function() {
      var e = this.activationState, t = e.activationEvent, a = e.wasActivatedByPointer, i;
      a ? i = q(t, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : i = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, i = {
        x: i.x - this.initialSize / 2,
        y: i.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: i, endPoint: o };
    }, r.prototype.runDeactivationUXLogicIfReady = function() {
      var e = this, t = r.cssClasses.FG_DEACTIVATION, a = this.activationState, i = a.hasDeactivationUXRun, o = a.isActivated, d = i || !o;
      d && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(t), this.fgDeactivationRemovalTimer = setTimeout(function() {
        e.adapter.removeClass(t);
      }, S.FG_DEACTIVATION_MS));
    }, r.prototype.rmBoundedActivationClasses = function() {
      var e = r.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(e), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, r.prototype.resetActivationState = function() {
      var e = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return e.previousActivationEvent = void 0;
      }, r.numbers.TAP_DELAY_MS);
    }, r.prototype.deactivateImpl = function() {
      var e = this, t = this.activationState;
      if (t.isActivated) {
        var a = y({}, t);
        t.isProgrammatic ? (requestAnimationFrame(function() {
          e.animateDeactivation(a);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          e.activationState.hasDeactivationUXRun = !0, e.animateDeactivation(a), e.resetActivationState();
        }));
      }
    }, r.prototype.animateDeactivation = function(e) {
      var t = e.wasActivatedByPointer, a = e.wasElementMadeActive;
      (t || a) && this.runDeactivationUXLogicIfReady();
    }, r.prototype.layoutInternal = function() {
      var e = this;
      this.frame = this.adapter.computeBoundingRect();
      var t = Math.max(this.frame.height, this.frame.width), a = function() {
        var o = Math.sqrt(Math.pow(e.frame.width, 2) + Math.pow(e.frame.height, 2));
        return o + r.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? t : a();
      var i = Math.floor(t * r.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && i % 2 !== 0 ? this.initialSize = i - 1 : this.initialSize = i, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, r.prototype.updateLayoutCssVars = function() {
      var e = r.strings, t = e.VAR_FG_SIZE, a = e.VAR_LEFT, i = e.VAR_TOP, o = e.VAR_FG_SCALE;
      this.adapter.updateCssVariable(t, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(a, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(i, this.unboundedCoords.top + "px"));
    }, r;
  }(G)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class s extends N {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = $;
  }
  get isActive() {
    return M(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (r) => {
        switch (r) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
            break;
        }
      },
      removeClass: (r) => {
        switch (r) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
            break;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      registerDocumentInteractionHandler: () => {
      },
      deregisterDocumentInteractionHandler: () => {
      },
      registerResizeHandler: () => {
      },
      deregisterResizeHandler: () => {
      },
      updateCssVariable: (r, e) => {
        switch (r) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = e;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = e;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = e;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = e;
            break;
          case "--mdc-ripple-left":
            this.leftPos = e;
            break;
          case "--mdc-ripple-top":
            this.topPos = e;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(r) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(r);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(r) {
    this.mdcFoundation ? r() : this.updateComplete.then(r);
  }
  update(r) {
    r.has("disabled") && this.disabled && this.endHover(), super.update(r);
  }
  /** @soyTemplate */
  render() {
    const r = this.activated && (this.primary || !this.accent), e = this.selected && (this.primary || !this.accent), t = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": r,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": e,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return O`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${_(t)}"
          style="${B({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
p([
  z(".mdc-ripple-surface")
], s.prototype, "mdcRoot", void 0);
p([
  u({ type: Boolean })
], s.prototype, "primary", void 0);
p([
  u({ type: Boolean })
], s.prototype, "accent", void 0);
p([
  u({ type: Boolean })
], s.prototype, "unbounded", void 0);
p([
  u({ type: Boolean })
], s.prototype, "disabled", void 0);
p([
  u({ type: Boolean })
], s.prototype, "activated", void 0);
p([
  u({ type: Boolean })
], s.prototype, "selected", void 0);
p([
  u({ type: Boolean })
], s.prototype, "internalUseStateLayerCustomProperties", void 0);
p([
  l()
], s.prototype, "hovering", void 0);
p([
  l()
], s.prototype, "bgFocused", void 0);
p([
  l()
], s.prototype, "fgActivation", void 0);
p([
  l()
], s.prototype, "fgDeactivation", void 0);
p([
  l()
], s.prototype, "fgScale", void 0);
p([
  l()
], s.prototype, "fgSize", void 0);
p([
  l()
], s.prototype, "translateStart", void 0);
p([
  l()
], s.prototype, "translateEnd", void 0);
p([
  l()
], s.prototype, "leftPos", void 0);
p([
  l()
], s.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const X = P`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let g = class extends s {
};
g.styles = [X];
g = p([
  V("mwc-ripple")
], g);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class K {
  constructor(r) {
    this.startPress = (e) => {
      r().then((t) => {
        t && t.startPress(e);
      });
    }, this.endPress = () => {
      r().then((e) => {
        e && e.endPress();
      });
    }, this.startFocus = () => {
      r().then((e) => {
        e && e.startFocus();
      });
    }, this.endFocus = () => {
      r().then((e) => {
        e && e.endFocus();
      });
    }, this.startHover = () => {
      r().then((e) => {
        e && e.startHover();
      });
    }, this.endHover = () => {
      r().then((e) => {
        e && e.endHover();
      });
    };
  }
}
export {
  K as N,
  J as T,
  B as f
};
