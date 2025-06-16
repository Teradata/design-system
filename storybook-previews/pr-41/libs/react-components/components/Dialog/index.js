import { c as Q, u as $, s as E, d as D, o as O, P as q, e as J, v as X, H as z, a as W, N as Z, h as tt } from "../../query-DSO61t36-C1M9Gebp.mjs";
import { d as et } from "../../base-element-CzNmpVoz-DBhcS9pk.mjs";
import { v as P } from "../../observer-DQ8OfVDQ-Df_oiWMx.mjs";
import it from "react";
import { jsx as ot } from "react/jsx-runtime";
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
  var n, t, e;
  const o = Symbol(), c = Symbol(), f = Symbol(), g = Symbol(), w = Symbol(), L = Symbol(), p = Symbol(), i = Symbol(), s = Symbol(), r = Symbol(), m = Symbol(), _ = Symbol(), y = Symbol();
  class N {
    constructor() {
      this[n] = [], this[t] = [], this[e] = /* @__PURE__ */ new Set();
    }
    destructor() {
      this[s](this[f]);
      const a = this;
      a[o] = null, a[f] = null, a[c] = null;
    }
    get top() {
      const a = this[o];
      return a[a.length - 1] || null;
    }
    push(a) {
      !a || a === this.top || (this.remove(a), this[L](a), this[o].push(a));
    }
    remove(a) {
      const l = this[o].indexOf(a);
      return l === -1 ? !1 : (this[o].splice(l, 1), l === this[o].length && this[L](this.top), !0);
    }
    pop() {
      const a = this.top;
      return a && this.remove(a), a;
    }
    has(a) {
      return this[o].indexOf(a) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */
    [(n = o, t = f, e = c, L)](a) {
      const l = this[c], d = this[f];
      if (!a) {
        this[s](d), l.clear(), this[f] = [];
        return;
      }
      const h = this[r](a);
      if (h[h.length - 1].parentNode !== document.body)
        throw Error("Non-connected element cannot be a blocking element");
      this[f] = h;
      const S = this[m](a);
      if (!d.length) {
        this[i](h, S, l);
        return;
      }
      let v = d.length - 1, b = h.length - 1;
      for (; v > 0 && b > 0 && d[v] === h[b]; )
        v--, b--;
      d[v] !== h[b] && this[p](d[v], h[b]), v > 0 && this[s](d.slice(0, v)), b > 0 && this[i](h.slice(0, b), S, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [p](a, l) {
      const d = a[g];
      this[_](a) && !a.inert && (a.inert = !0, d.add(a)), d.has(l) && (l.inert = !1, d.delete(l)), l[w] = a[w], l[g] = d, a[w] = void 0, a[g] = void 0;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [s](a) {
      for (const l of a) {
        l[w].disconnect(), l[w] = void 0;
        const d = l[g];
        for (const h of d)
          h.inert = !1;
        l[g] = void 0;
      }
    }
    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [i](a, l, d) {
      for (const h of a) {
        const S = h.parentNode, v = S.children, b = /* @__PURE__ */ new Set();
        for (let B = 0; B < v.length; B++) {
          const T = v[B];
          T === h || !this[_](T) || l && l.has(T) || (d && T.inert ? d.add(T) : (T.inert = !0, b.add(T)));
        }
        h[g] = b;
        const k = new MutationObserver(this[y].bind(this));
        h[w] = k;
        let A = S;
        const C = A;
        C.__shady && C.host && (A = C.host), k.observe(A, {
          childList: !0
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */
    [y](a) {
      const l = this[f], d = this[c];
      for (const h of a) {
        const S = h.target.host || h.target, v = S === document.body ? l.length : l.indexOf(S), b = l[v - 1], k = b[g];
        for (let A = 0; A < h.removedNodes.length; A++) {
          const C = h.removedNodes[A];
          if (C === b) {
            console.info("Detected removal of the top Blocking Element."), this.pop();
            return;
          }
          k.has(C) && (C.inert = !1, k.delete(C));
        }
        for (let A = 0; A < h.addedNodes.length; A++) {
          const C = h.addedNodes[A];
          this[_](C) && (d && C.inert ? d.add(C) : (C.inert = !0, k.add(C)));
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */
    [_](a) {
      return /^(style|template|script)$/.test(a.localName) === !1;
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */
    [r](a) {
      const l = [];
      let d = a;
      for (; d && d !== document.body; ) {
        if (d.nodeType === Node.ELEMENT_NODE && l.push(d), d.assignedSlot) {
          for (; d = d.assignedSlot; )
            l.push(d);
          d = l.pop();
          continue;
        }
        d = d.parentNode || d.host;
      }
      return l;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */
    [m](a) {
      const l = a.shadowRoot;
      if (!l)
        return null;
      const d = /* @__PURE__ */ new Set();
      let h, S, v;
      const b = l.querySelectorAll("slot");
      if (b.length && b[0].assignedNodes)
        for (h = 0; h < b.length; h++)
          for (v = b[h].assignedNodes({
            flatten: !0
          }), S = 0; S < v.length; S++)
            v[S].nodeType === Node.ELEMENT_NODE && d.add(v[S]);
      return d;
    }
  }
  document.$blockingElements = new N();
})();
var K = /* @__PURE__ */ function() {
  function n(t, e) {
    for (var o = 0; o < e.length; o++) {
      var c = e[o];
      c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(t, c.key, c);
    }
  }
  return function(t, e, o) {
    return e && n(t.prototype, e), o && n(t, o), t;
  };
}();
function U(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
(function() {
  if (typeof window > "u" || typeof Element > "u")
    return;
  var n = Array.prototype.slice, t = Element.prototype.matches || Element.prototype.msMatchesSelector, e = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "video", "[contenteditable]"].join(","), o = function() {
    function p(i, s) {
      U(this, p), this._inertManager = s, this._rootElement = i, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
    }
    return K(p, [{
      key: "destructor",
      value: function() {
        this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(i) {
          this._unmanageNode(i.node);
        }, this), this._observer = /** @type {?} */
        null, this._rootElement = /** @type {?} */
        null, this._managedNodes = /** @type {?} */
        null, this._inertManager = /** @type {?} */
        null;
      }
      /**
       * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
       */
    }, {
      key: "_makeSubtreeUnfocusable",
      /**
       * @param {!Node} startNode
       */
      value: function(i) {
        var s = this;
        g(i, function(y) {
          return s._visitNode(y);
        });
        var r = document.activeElement;
        if (!document.body.contains(i)) {
          for (var m = i, _ = void 0; m; ) {
            if (m.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              _ = /** @type {!ShadowRoot} */
              m;
              break;
            }
            m = m.parentNode;
          }
          _ && (r = _.activeElement);
        }
        i.contains(r) && (r.blur(), r === document.activeElement && document.body.focus());
      }
      /**
       * @param {!Node} node
       */
    }, {
      key: "_visitNode",
      value: function(i) {
        if (i.nodeType === Node.ELEMENT_NODE) {
          var s = (
            /** @type {!HTMLElement} */
            i
          );
          s !== this._rootElement && s.hasAttribute("inert") && this._adoptInertRoot(s), (t.call(s, e) || s.hasAttribute("tabindex")) && this._manageNode(s);
        }
      }
      /**
       * Register the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_manageNode",
      value: function(i) {
        var s = this._inertManager.register(i, this);
        this._managedNodes.add(s);
      }
      /**
       * Unregister the given node with this InertRoot and with InertManager.
       * @param {!Node} node
       */
    }, {
      key: "_unmanageNode",
      value: function(i) {
        var s = this._inertManager.deregister(i, this);
        s && this._managedNodes.delete(s);
      }
      /**
       * Unregister the entire subtree starting at `startNode`.
       * @param {!Node} startNode
       */
    }, {
      key: "_unmanageSubtree",
      value: function(i) {
        var s = this;
        g(i, function(r) {
          return s._unmanageNode(r);
        });
      }
      /**
       * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
       * @param {!HTMLElement} node
       */
    }, {
      key: "_adoptInertRoot",
      value: function(i) {
        var s = this._inertManager.getInertRoot(i);
        s || (this._inertManager.setInert(i, !0), s = this._inertManager.getInertRoot(i)), s.managedNodes.forEach(function(r) {
          this._manageNode(r.node);
        }, this);
      }
      /**
       * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_onMutation",
      value: function(i, s) {
        i.forEach(function(r) {
          var m = (
            /** @type {!HTMLElement} */
            r.target
          );
          if (r.type === "childList")
            n.call(r.addedNodes).forEach(function(y) {
              this._makeSubtreeUnfocusable(y);
            }, this), n.call(r.removedNodes).forEach(function(y) {
              this._unmanageSubtree(y);
            }, this);
          else if (r.type === "attributes") {
            if (r.attributeName === "tabindex")
              this._manageNode(m);
            else if (m !== this._rootElement && r.attributeName === "inert" && m.hasAttribute("inert")) {
              this._adoptInertRoot(m);
              var _ = this._inertManager.getInertRoot(m);
              this._managedNodes.forEach(function(y) {
                m.contains(y.node) && _._manageNode(y.node);
              });
            }
          }
        }, this);
      }
    }, {
      key: "managedNodes",
      get: function() {
        return new Set(this._managedNodes);
      }
      /** @return {boolean} */
    }, {
      key: "hasSavedAriaHidden",
      get: function() {
        return this._savedAriaHidden !== null;
      }
      /** @param {?string} ariaHidden */
    }, {
      key: "savedAriaHidden",
      set: function(i) {
        this._savedAriaHidden = i;
      },
      get: function() {
        return this._savedAriaHidden;
      }
    }]), p;
  }(), c = function() {
    function p(i, s) {
      U(this, p), this._node = i, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([s]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
    }
    return K(p, [{
      key: "destructor",
      value: function() {
        if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
          var i = (
            /** @type {!HTMLElement} */
            this._node
          );
          this._savedTabIndex !== null ? i.setAttribute("tabindex", this._savedTabIndex) : i.removeAttribute("tabindex"), this._overrodeFocusMethod && delete i.focus;
        }
        this._node = /** @type {?} */
        null, this._inertRoots = /** @type {?} */
        null, this._destroyed = !0;
      }
      /**
       * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
       * If the object has been destroyed, any attempt to access it will cause an exception.
       */
    }, {
      key: "_throwIfDestroyed",
      /**
       * Throw if user tries to access destroyed InertNode.
       */
      value: function() {
        if (this.destroyed)
          throw new Error("Trying to access destroyed InertNode");
      }
      /** @return {boolean} */
    }, {
      key: "ensureUntabbable",
      /** Save the existing tabindex value and make the node untabbable and unfocusable */
      value: function() {
        if (this.node.nodeType === Node.ELEMENT_NODE) {
          var i = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (t.call(i, e)) {
            if (
              /** @type {!HTMLElement} */
              i.tabIndex === -1 && this.hasSavedTabIndex
            )
              return;
            i.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            i.tabIndex), i.setAttribute("tabindex", "-1"), i.nodeType === Node.ELEMENT_NODE && (i.focus = function() {
            }, this._overrodeFocusMethod = !0);
          } else
            i.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            i.tabIndex, i.removeAttribute("tabindex"));
        }
      }
      /**
       * Add another inert root to this inert node's set of managing inert roots.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "addInertRoot",
      value: function(i) {
        this._throwIfDestroyed(), this._inertRoots.add(i);
      }
      /**
       * Remove the given inert root from this inert node's set of managing inert roots.
       * If the set of managing inert roots becomes empty, this node is no longer inert,
       * so the object should be destroyed.
       * @param {!InertRoot} inertRoot
       */
    }, {
      key: "removeInertRoot",
      value: function(i) {
        this._throwIfDestroyed(), this._inertRoots.delete(i), this._inertRoots.size === 0 && this.destructor();
      }
    }, {
      key: "destroyed",
      get: function() {
        return (
          /** @type {!InertNode} */
          this._destroyed
        );
      }
    }, {
      key: "hasSavedTabIndex",
      get: function() {
        return this._savedTabIndex !== null;
      }
      /** @return {!Node} */
    }, {
      key: "node",
      get: function() {
        return this._throwIfDestroyed(), this._node;
      }
      /** @param {?number} tabIndex */
    }, {
      key: "savedTabIndex",
      set: function(i) {
        this._throwIfDestroyed(), this._savedTabIndex = i;
      },
      get: function() {
        return this._throwIfDestroyed(), this._savedTabIndex;
      }
    }]), p;
  }(), f = function() {
    function p(i) {
      if (U(this, p), !i)
        throw new Error("Missing required argument; InertManager needs to wrap a document.");
      this._document = i, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), w(i.head || i.body || i.documentElement), i.readyState === "loading" ? i.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
    }
    return K(p, [{
      key: "setInert",
      value: function(i, s) {
        if (s) {
          if (this._inertRoots.has(i))
            return;
          var r = new o(i, this);
          if (i.setAttribute("inert", ""), this._inertRoots.set(i, r), !this._document.body.contains(i))
            for (var m = i.parentNode; m; )
              m.nodeType === 11 && w(m), m = m.parentNode;
        } else {
          if (!this._inertRoots.has(i))
            return;
          var _ = this._inertRoots.get(i);
          _.destructor(), this._inertRoots.delete(i), i.removeAttribute("inert");
        }
      }
      /**
       * Get the InertRoot object corresponding to the given inert root element, if any.
       * @param {!Node} element
       * @return {!InertRoot|undefined}
       */
    }, {
      key: "getInertRoot",
      value: function(i) {
        return this._inertRoots.get(i);
      }
      /**
       * Register the given InertRoot as managing the given node.
       * In the case where the node has a previously existing inert root, this inert root will
       * be added to its set of inert roots.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {!InertNode} inertNode
       */
    }, {
      key: "register",
      value: function(i, s) {
        var r = this._managedNodes.get(i);
        return r !== void 0 ? r.addInertRoot(s) : r = new c(i, s), this._managedNodes.set(i, r), r;
      }
      /**
       * De-register the given InertRoot as managing the given inert node.
       * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
       * node from the InertManager's set of managed nodes if it is destroyed.
       * If the node is not currently managed, this is essentially a no-op.
       * @param {!Node} node
       * @param {!InertRoot} inertRoot
       * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
       */
    }, {
      key: "deregister",
      value: function(i, s) {
        var r = this._managedNodes.get(i);
        return r ? (r.removeInertRoot(s), r.destroyed && this._managedNodes.delete(i), r) : null;
      }
      /**
       * Callback used when document has finished loading.
       */
    }, {
      key: "_onDocumentLoaded",
      value: function() {
        var i = n.call(this._document.querySelectorAll("[inert]"));
        i.forEach(function(s) {
          this.setInert(s, !0);
        }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
      }
      /**
       * Callback used when mutation observer detects attribute changes.
       * @param {!Array<!MutationRecord>} records
       * @param {!MutationObserver} self
       */
    }, {
      key: "_watchForInert",
      value: function(i, s) {
        var r = this;
        i.forEach(function(m) {
          switch (m.type) {
            case "childList":
              n.call(m.addedNodes).forEach(function(N) {
                if (N.nodeType === Node.ELEMENT_NODE) {
                  var I = n.call(N.querySelectorAll("[inert]"));
                  t.call(N, "[inert]") && I.unshift(N), I.forEach(function(a) {
                    this.setInert(a, !0);
                  }, r);
                }
              }, r);
              break;
            case "attributes":
              if (m.attributeName !== "inert")
                return;
              var _ = (
                /** @type {!HTMLElement} */
                m.target
              ), y = _.hasAttribute("inert");
              r.setInert(_, y);
              break;
          }
        }, this);
      }
    }]), p;
  }();
  function g(p, i, s) {
    if (p.nodeType == Node.ELEMENT_NODE) {
      var r = (
        /** @type {!HTMLElement} */
        p
      );
      i && i(r);
      var m = (
        /** @type {!HTMLElement} */
        r.shadowRoot
      );
      if (m) {
        g(m, i);
        return;
      }
      if (r.localName == "content") {
        for (var _ = (
          /** @type {!HTMLContentElement} */
          r
        ), y = _.getDistributedNodes ? _.getDistributedNodes() : [], N = 0; N < y.length; N++)
          g(y[N], i);
        return;
      }
      if (r.localName == "slot") {
        for (var I = (
          /** @type {!HTMLSlotElement} */
          r
        ), a = I.assignedNodes ? I.assignedNodes({ flatten: !0 }) : [], l = 0; l < a.length; l++)
          g(a[l], i);
        return;
      }
    }
    for (var d = p.firstChild; d != null; )
      g(d, i), d = d.nextSibling;
  }
  function w(p) {
    if (!p.querySelector("style#inert-style, link#inert-style")) {
      var i = document.createElement("style");
      i.setAttribute("id", "inert-style"), i.textContent = `
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`, p.appendChild(i);
    }
  }
  if (!HTMLElement.prototype.hasOwnProperty("inert")) {
    var L = new f(document);
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: !0,
      /** @this {!HTMLElement} */
      get: function() {
        return this.hasAttribute("inert");
      },
      /** @this {!HTMLElement} */
      set: function(p) {
        L.setInert(this, p);
      }
    });
  }
})();
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
var u = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  // Class for showing a scroll divider on full-screen dialog header element.
  // Should only be displayed on scrollable content, when the dialog content is
  // scrolled "underneath" the header.
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  // Class for showing a scroll divider on a full-screen dialog footer element.
  // Should only be displayed on scrolalble content, when the dialog content is
  // obscured "underneath" the footer.
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  // The "surface scrim" is a scrim covering only the surface of a dialog. This
  // is used in situations where a confirmation dialog is shown over an already
  // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
  // is sized as a modal and so in these situations we display a "surface scrim"
  // to prevent a "double scrim" (where the scrim from the secondary
  // confirmation dialog would overlap with the scrim from the full-screen
  // dialog).
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  // "Showing" animating class for the surface-scrim.
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  // "Hiding" animating class for the surface-scrim.
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
  // Note that we only hide the original scrim rather than removing it entirely
  // to prevent interactions with the content behind this scrim, and to capture
  // scrim clicks.
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
}, R = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, j = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
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
var nt = (
  /** @class */
  function() {
    function n() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return n.prototype.request = function(t, e) {
      var o = this;
      this.cancel(t);
      var c = requestAnimationFrame(function(f) {
        o.rafIDs.delete(t), e(f);
      });
      this.rafIDs.set(t, c);
    }, n.prototype.cancel = function(t) {
      var e = this.rafIDs.get(t);
      e && (cancelAnimationFrame(e), this.rafIDs.delete(t));
    }, n.prototype.cancelAll = function() {
      var t = this;
      this.rafIDs.forEach(function(e, o) {
        t.cancel(o);
      });
    }, n.prototype.getQueue = function() {
      var t = [];
      return this.rafIDs.forEach(function(e, o) {
        t.push(o);
      }), t;
    }, n;
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
var at = (
  /** @class */
  function() {
    function n(t) {
      t === void 0 && (t = {}), this.adapter = t;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
  }()
);
/**
 * @license
 * Copyright 2017 Google Inc.
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
var M;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(M || (M = {}));
var rt = (
  /** @class */
  function(n) {
    Q(t, n);
    function t(e) {
      var o = n.call(this, $($({}, t.defaultAdapter), e)) || this;
      return o.dialogOpen = !1, o.isFullscreen = !1, o.animationFrame = 0, o.animationTimer = 0, o.escapeKeyAction = R.CLOSE_ACTION, o.scrimClickAction = R.CLOSE_ACTION, o.autoStackButtons = !0, o.areButtonsStacked = !1, o.suppressDefaultPressSelector = R.SUPPRESS_DEFAULT_PRESS_SELECTOR, o.animFrame = new nt(), o.contentScrollHandler = function() {
        o.handleScrollEvent();
      }, o.windowResizeHandler = function() {
        o.layout();
      }, o.windowOrientationChangeHandler = function() {
        o.layout();
      }, o;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return R;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return j;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          },
          registerContentEventHandler: function() {
          },
          deregisterContentEventHandler: function() {
          },
          isScrollableContentAtTop: function() {
            return !1;
          },
          isScrollableContentAtBottom: function() {
            return !1;
          },
          registerWindowEventHandler: function() {
          },
          deregisterWindowEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
      this.adapter.hasClass(u.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(u.FULLSCREEN);
    }, t.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, t.prototype.open = function(e) {
      var o = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(u.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), e && e.isAboveFullscreenDialog && this.adapter.addClass(u.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        o.adapter.addClass(u.OPEN), o.adapter.addBodyClass(u.SCROLL_LOCK), o.layout(), o.animationTimer = setTimeout(function() {
          o.handleAnimationTimerEnd(), o.adapter.trapFocus(o.adapter.getInitialFocusEl()), o.adapter.notifyOpened();
        }, j.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, t.prototype.close = function(e) {
      var o = this;
      e === void 0 && (e = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(e), this.adapter.addClass(u.CLOSING), this.adapter.removeClass(u.OPEN), this.adapter.removeBodyClass(u.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        o.adapter.releaseFocus(), o.handleAnimationTimerEnd(), o.adapter.notifyClosed(e);
      }, j.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, t.prototype.showSurfaceScrim = function() {
      var e = this;
      this.adapter.addClass(u.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        e.adapter.addClass(u.SURFACE_SCRIM_SHOWN);
      });
    }, t.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(u.SURFACE_SCRIM_SHOWN), this.adapter.addClass(u.SURFACE_SCRIM_HIDING);
    }, t.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(u.SURFACE_SCRIM_HIDING), this.adapter.removeClass(u.SURFACE_SCRIM_SHOWING);
    }, t.prototype.isOpen = function() {
      return this.dialogOpen;
    }, t.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, t.prototype.setEscapeKeyAction = function(e) {
      this.escapeKeyAction = e;
    }, t.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, t.prototype.setScrimClickAction = function(e) {
      this.scrimClickAction = e;
    }, t.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, t.prototype.setAutoStackButtons = function(e) {
      this.autoStackButtons = e;
    }, t.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, t.prototype.setSuppressDefaultPressSelector = function(e) {
      this.suppressDefaultPressSelector = e;
    }, t.prototype.layout = function() {
      var e = this;
      this.animFrame.request(M.POLL_LAYOUT_CHANGE, function() {
        e.layoutInternal();
      });
    }, t.prototype.handleClick = function(e) {
      var o = this.adapter.eventTargetMatches(e.target, R.SCRIM_SELECTOR);
      if (o && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var c = this.adapter.getActionFromEvent(e);
        c && this.close(c);
      }
    }, t.prototype.handleKeydown = function(e) {
      var o = e.key === "Enter" || e.keyCode === 13;
      if (o) {
        var c = this.adapter.getActionFromEvent(e);
        if (!c) {
          var f = e.composedPath ? e.composedPath()[0] : e.target, g = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(f, this.suppressDefaultPressSelector) : !0;
          o && g && this.adapter.clickDefaultButton();
        }
      }
    }, t.prototype.handleDocumentKeydown = function(e) {
      var o = e.key === "Escape" || e.keyCode === 27;
      o && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, t.prototype.handleScrollEvent = function() {
      var e = this;
      this.animFrame.request(M.POLL_SCROLL_POS, function() {
        e.toggleScrollDividerHeader(), e.toggleScrollDividerFooter();
      });
    }, t.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, t.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(u.OPENING), this.adapter.removeClass(u.CLOSING);
    }, t.prototype.runNextAnimationFrame = function(e) {
      var o = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        o.animationFrame = 0, clearTimeout(o.animationTimer), o.animationTimer = setTimeout(e, 0);
      });
    }, t.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(u.STACKED);
      var e = this.adapter.areButtonsStacked();
      e && this.adapter.addClass(u.STACKED), e !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = e);
    }, t.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(u.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(u.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, t.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(u.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(u.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(u.SCROLL_DIVIDER_HEADER);
    }, t.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(u.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(u.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(u.SCROLL_DIVIDER_FOOTER);
    }, t;
  }(at)
);
/**
 * @license
 * Copyright 2019 Google Inc.
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
function H(n) {
  return n === void 0 && (n = window), dt(n) ? { passive: !0 } : !1;
}
function dt(n) {
  n === void 0 && (n = window);
  var t = !1;
  try {
    var e = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return t = !0, !1;
      }
    }, o = function() {
    };
    n.document.addEventListener("test", o, e), n.document.removeEventListener("test", o, e);
  } catch {
    t = !1;
  }
  return t;
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
function st(n, t) {
  if (n.closest)
    return n.closest(t);
  for (var e = n; e; ) {
    if (V(e, t))
      return e;
    e = e.parentElement;
  }
  return null;
}
function V(n, t) {
  var e = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return e.call(n, t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const G = document.$blockingElements;
class x extends et {
  constructor() {
    super(...arguments), this.hideActions = !1, this.stacked = !1, this.heading = "", this.scrimClickAction = "close", this.escapeKeyAction = "close", this.open = !1, this.defaultAction = "close", this.actionAttribute = "dialogAction", this.initialFocusAttribute = "dialogInitialFocus", this.initialSupressDefaultPressSelector = "", this.mdcFoundationClass = rt, this.boundHandleClick = null, this.boundHandleKeydown = null, this.boundHandleDocumentKeydown = null;
  }
  set suppressDefaultPressSelector(t) {
    this.mdcFoundation ? this.mdcFoundation.setSuppressDefaultPressSelector(t) : this.initialSupressDefaultPressSelector = t;
  }
  /**
   * @export
   */
  get suppressDefaultPressSelector() {
    return this.mdcFoundation ? this.mdcFoundation.getSuppressDefaultPressSelector() : this.initialSupressDefaultPressSelector;
  }
  get primaryButton() {
    let t = this.primarySlot.assignedNodes();
    return t = t.filter((o) => o instanceof HTMLElement), t[0] || null;
  }
  emitNotification(t, e) {
    const o = { detail: e ? { action: e } : {} }, c = new CustomEvent(t, o);
    this.dispatchEvent(c);
  }
  getInitialFocusEl() {
    const t = `[${this.initialFocusAttribute}]`, e = this.querySelector(t);
    if (e)
      return e;
    const o = this.primarySlot.assignedNodes({ flatten: !0 }), c = this.searchNodeTreesForAttribute(o, this.initialFocusAttribute);
    if (c)
      return c;
    const f = this.secondarySlot.assignedNodes({ flatten: !0 }), g = this.searchNodeTreesForAttribute(f, this.initialFocusAttribute);
    if (g)
      return g;
    const w = this.contentSlot.assignedNodes({ flatten: !0 });
    return this.searchNodeTreesForAttribute(w, this.initialFocusAttribute);
  }
  searchNodeTreesForAttribute(t, e) {
    for (const o of t)
      if (o instanceof HTMLElement) {
        if (o.hasAttribute(e))
          return o;
        {
          const c = o.querySelector(`[${e}]`);
          if (c)
            return c;
        }
      }
    return null;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, X(this.mdcRoot)), { addBodyClass: () => document.body.style.overflow = "hidden", removeBodyClass: () => document.body.style.overflow = "", areButtonsStacked: () => this.stacked, clickDefaultButton: () => {
      const t = this.primaryButton;
      t && t.click();
    }, eventTargetMatches: (t, e) => t ? V(t, e) : !1, getActionFromEvent: (t) => {
      if (!t.target)
        return "";
      const e = st(t.target, `[${this.actionAttribute}]`);
      return e && e.getAttribute(this.actionAttribute);
    }, getInitialFocusEl: () => this.getInitialFocusEl(), isContentScrollable: () => {
      const t = this.contentElement;
      return t ? t.scrollHeight > t.offsetHeight : !1;
    }, notifyClosed: (t) => this.emitNotification("closed", t), notifyClosing: (t) => {
      this.closingDueToDisconnect || (this.open = !1), this.emitNotification("closing", t);
    }, notifyOpened: () => this.emitNotification("opened"), notifyOpening: () => {
      this.open = !0, this.emitNotification("opening");
    }, reverseButtons: () => {
    }, releaseFocus: () => {
      G.remove(this);
    }, trapFocus: (t) => {
      this.isConnected && (G.push(this), t && t.focus());
    }, registerContentEventHandler: (t, e) => {
      this.contentElement.addEventListener(t, e);
    }, deregisterContentEventHandler: (t, e) => {
      this.contentElement.removeEventListener(t, e);
    }, isScrollableContentAtTop: () => {
      const t = this.contentElement;
      return t ? t.scrollTop === 0 : !1;
    }, isScrollableContentAtBottom: () => {
      const t = this.contentElement;
      return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
    }, registerWindowEventHandler: (t, e) => {
      window.addEventListener(t, e, H());
    }, deregisterWindowEventHandler: (t, e) => {
      window.removeEventListener(t, e, H());
    } });
  }
  render() {
    const t = {
      [u.STACKED]: this.stacked
    };
    let e = z``;
    this.heading && (e = this.renderHeading());
    const o = {
      "mdc-dialog__actions": !this.hideActions
    };
    return z`
    <div class="mdc-dialog ${W(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${e}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${W(o)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }
  renderHeading() {
    return z`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`;
  }
  firstUpdated() {
    super.firstUpdated(), this.mdcFoundation.setAutoStackButtons(!0), this.initialSupressDefaultPressSelector ? this.suppressDefaultPressSelector = this.initialSupressDefaultPressSelector : this.suppressDefaultPressSelector = [
      this.suppressDefaultPressSelector,
      "mwc-textarea",
      "mwc-menu mwc-list-item",
      "mwc-select mwc-list-item"
    ].join(", "), this.boundHandleClick = this.mdcFoundation.handleClick.bind(this.mdcFoundation), this.boundHandleKeydown = this.mdcFoundation.handleKeydown.bind(this.mdcFoundation), this.boundHandleDocumentKeydown = this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation);
  }
  connectedCallback() {
    super.connectedCallback(), this.open && this.mdcFoundation && !this.mdcFoundation.isOpen() && (this.setEventListeners(), this.mdcFoundation.open());
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.open && this.mdcFoundation && (this.removeEventListeners(), this.closingDueToDisconnect = !0, this.mdcFoundation.close(this.currentAction || this.defaultAction), this.closingDueToDisconnect = !1, this.currentAction = void 0, G.remove(this));
  }
  forceLayout() {
    this.mdcFoundation.layout();
  }
  focus() {
    const t = this.getInitialFocusEl();
    t && t.focus();
  }
  blur() {
    if (!this.shadowRoot)
      return;
    const t = this.shadowRoot.activeElement;
    if (t)
      t instanceof HTMLElement && t.blur();
    else {
      const e = this.getRootNode(), o = e instanceof Document ? e.activeElement : null;
      o instanceof HTMLElement && o.blur();
    }
  }
  setEventListeners() {
    this.boundHandleClick && this.mdcRoot.addEventListener("click", this.boundHandleClick), this.boundHandleKeydown && this.mdcRoot.addEventListener("keydown", this.boundHandleKeydown, H()), this.boundHandleDocumentKeydown && document.addEventListener("keydown", this.boundHandleDocumentKeydown, H());
  }
  removeEventListeners() {
    this.boundHandleClick && this.mdcRoot.removeEventListener("click", this.boundHandleClick), this.boundHandleKeydown && this.mdcRoot.removeEventListener("keydown", this.boundHandleKeydown), this.boundHandleDocumentKeydown && document.removeEventListener("keydown", this.boundHandleDocumentKeydown);
  }
  close() {
    this.open = !1;
  }
  show() {
    this.open = !0;
  }
}
E([
  D(".mdc-dialog")
], x.prototype, "mdcRoot", void 0);
E([
  D('slot[name="primaryAction"]')
], x.prototype, "primarySlot", void 0);
E([
  D('slot[name="secondaryAction"]')
], x.prototype, "secondarySlot", void 0);
E([
  D("#contentSlot")
], x.prototype, "contentSlot", void 0);
E([
  D(".mdc-dialog__content")
], x.prototype, "contentElement", void 0);
E([
  D(".mdc-container")
], x.prototype, "conatinerElement", void 0);
E([
  O({ type: Boolean })
], x.prototype, "hideActions", void 0);
E([
  O({ type: Boolean }),
  P(function() {
    this.forceLayout();
  })
], x.prototype, "stacked", void 0);
E([
  O({ type: String })
], x.prototype, "heading", void 0);
E([
  O({ type: String }),
  P(function(n) {
    this.mdcFoundation.setScrimClickAction(n);
  })
], x.prototype, "scrimClickAction", void 0);
E([
  O({ type: String }),
  P(function(n) {
    this.mdcFoundation.setEscapeKeyAction(n);
  })
], x.prototype, "escapeKeyAction", void 0);
E([
  O({ type: Boolean, reflect: !0 }),
  P(function(n) {
    this.mdcFoundation && this.isConnected && (n ? (this.setEventListeners(), this.mdcFoundation.open()) : (this.removeEventListeners(), this.mdcFoundation.close(this.currentAction || this.defaultAction), this.currentAction = void 0));
  })
], x.prototype, "open", void 0);
E([
  O()
], x.prototype, "defaultAction", void 0);
E([
  O()
], x.prototype, "actionAttribute", void 0);
E([
  O()
], x.prototype, "initialFocusAttribute", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ct = q`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`, lt = ":host{--mdc-dialog-heading-ink-color: var(--mdc-theme-text-primary-on-background);--mdc-dialog-content-ink-color: var(--mdc-theme-text-primary-on-background);--mdc-dialog-scroll-divider-color: var(--mdc-theme-border)}:host .mdc-dialog .mdc-dialog__surface{border-radius:var(--cv-dialog-border-radius, var(--mdc-shape-medium, 4));min-height:var(--mdc-dialog-min-height)}:host .mdc-dialog .mdc-dialog__content{padding:var(--cv-dialog-vertical-padding, 20px) var(--cv-dialog-horizontal-padding, 24px)}";
var mt = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, Y = (n, t, e, o) => {
  for (var c = o > 1 ? void 0 : o ? ut(t, e) : t, f = n.length - 1, g; f >= 0; f--)
    (g = n[f]) && (c = (o ? g(t, e, c) : g(c)) || c);
  return o && c && mt(t, e, c), c;
};
let F = class extends x {
  constructor() {
    super(...arguments), this.trapFocus = !1;
  }
  createAdapter() {
    const n = super.createAdapter();
    return {
      ...n,
      // Override the trapFocus method to prevent the blocking-elements from assigning inert attribute
      trapFocus: (t) => {
        this.trapFocus ? n.trapFocus(t) : t && !this.isConnected && t.focus();
      }
    };
  }
};
F.styles = [
  ct,
  q`
      ${J(lt)}
    `
];
Y([
  O({ type: Boolean, reflect: !0 })
], F.prototype, "trapFocus", 2);
F = Y([
  Z("cv-dialog")
], F);
const ht = tt({
  tagName: "cv-dialog",
  elementClass: F,
  react: it
}), gt = (n) => /* @__PURE__ */ ot(ht, {
  ...n
});
gt.displayName = "Dialog";
export {
  gt as default
};
