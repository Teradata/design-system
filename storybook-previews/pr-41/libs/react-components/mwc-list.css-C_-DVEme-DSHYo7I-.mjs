import { s as h, N as H, o as A, d as k, P as X, H as P, g as G, m as V, l as $ } from "./query-DSO61t36-C1M9Gebp.mjs";
import { z as K, i as z } from "./mwc-list-item.css-Cg9onxQ--V9CUa5oh.mjs";
import { d as j } from "./base-element-CzNmpVoz-DBhcS9pk.mjs";
import { v as C } from "./observer-DQ8OfVDQ-Df_oiWMx.mjs";
import { m as W } from "./query-assigned-nodes-B-jCihdA-B4zaBPwz.mjs";
import { l as U } from "./if-defined-DN7whKwy-jzQToWN8.mjs";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let D = class extends z {
};
D.styles = [K];
D = h([
  H("mwc-list-item")
], D);
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
var Y = (
  /** @class */
  function() {
    function d(t) {
      t === void 0 && (t = {}), this.adapter = t;
    }
    return Object.defineProperty(d, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(d, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(d, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(d, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), d.prototype.init = function() {
    }, d.prototype.destroy = function() {
    }, d;
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
var n = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, l = /* @__PURE__ */ new Set();
l.add(n.BACKSPACE);
l.add(n.ENTER);
l.add(n.SPACEBAR);
l.add(n.PAGE_UP);
l.add(n.PAGE_DOWN);
l.add(n.END);
l.add(n.HOME);
l.add(n.ARROW_LEFT);
l.add(n.ARROW_UP);
l.add(n.ARROW_RIGHT);
l.add(n.ARROW_DOWN);
l.add(n.DELETE);
l.add(n.ESCAPE);
l.add(n.TAB);
var u = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, c = /* @__PURE__ */ new Map();
c.set(u.BACKSPACE, n.BACKSPACE);
c.set(u.ENTER, n.ENTER);
c.set(u.SPACEBAR, n.SPACEBAR);
c.set(u.PAGE_UP, n.PAGE_UP);
c.set(u.PAGE_DOWN, n.PAGE_DOWN);
c.set(u.END, n.END);
c.set(u.HOME, n.HOME);
c.set(u.ARROW_LEFT, n.ARROW_LEFT);
c.set(u.ARROW_UP, n.ARROW_UP);
c.set(u.ARROW_RIGHT, n.ARROW_RIGHT);
c.set(u.ARROW_DOWN, n.ARROW_DOWN);
c.set(u.DELETE, n.DELETE);
c.set(u.ESCAPE, n.ESCAPE);
c.set(u.TAB, n.TAB);
var x = /* @__PURE__ */ new Set();
x.add(n.PAGE_UP);
x.add(n.PAGE_DOWN);
x.add(n.END);
x.add(n.HOME);
x.add(n.ARROW_LEFT);
x.add(n.ARROW_UP);
x.add(n.ARROW_RIGHT);
x.add(n.ARROW_DOWN);
function S(d) {
  var t = d.key;
  if (l.has(t))
    return t;
  var e = c.get(d.keyCode);
  return e || n.UNKNOWN;
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
var R, f, a = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
R = {}, R["" + a.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", R["" + a.LIST_ITEM_CLASS] = "mdc-list-item", R["" + a.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", R["" + a.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", R["" + a.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", R["" + a.ROOT] = "mdc-list";
var v = (f = {}, f["" + a.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", f["" + a.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", f["" + a.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", f["" + a.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", f["" + a.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", f["" + a.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", f["" + a.ROOT] = "mdc-deprecated-list", f), y = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + a.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + a.LIST_ITEM_CLASS + ` a,
    .` + v[a.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + v[a.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + a.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + a.LIST_ITEM_CLASS + ` a,
    .` + a.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + a.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + v[a.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + v[a.LIST_ITEM_CLASS] + ` a,
    .` + v[a.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + v[a.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, m = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const N = (d, t) => d - t, q = (d, t) => {
  const e = Array.from(d), i = Array.from(t), s = { added: [], removed: [] }, o = e.sort(N), r = i.sort(N);
  let p = 0, T = 0;
  for (; p < o.length || T < r.length; ) {
    const I = o[p], _ = r[T];
    if (I === _) {
      p++, T++;
      continue;
    }
    if (I !== void 0 && (_ === void 0 || I < _)) {
      s.removed.push(I), p++;
      continue;
    }
    if (_ !== void 0 && (I === void 0 || _ < I)) {
      s.added.push(_), T++;
      continue;
    }
  }
  return s;
}, Z = ["input", "button", "textarea", "select"];
function L(d) {
  return d instanceof Set;
}
const F = (d) => {
  const t = d === m.UNSET_INDEX ? /* @__PURE__ */ new Set() : d;
  return L(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class M extends Y {
  constructor(t) {
    super(Object.assign(Object.assign({}, M.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = m.UNSET_INDEX, this.focusedItemIndex_ = m.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return y;
  }
  static get numbers() {
    return m;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {
      },
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {
      },
      notifySelected: () => {
      },
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {
      },
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {
      },
      setActivatedStateForElementIndex: () => {
      },
      setTabIndexForElementIndex: () => {
      },
      setAttributeForElementIndex: () => {
      },
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(t) {
    this.wrapFocus_ = t;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(t) {
    this.isMulti_ = t;
    const e = this.selectedIndex_;
    if (t) {
      if (!L(e)) {
        const i = e === m.UNSET_INDEX;
        this.selectedIndex_ = i ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([e]);
      }
    } else if (L(e))
      if (e.size) {
        const i = Array.from(e).sort(N);
        this.selectedIndex_ = i[0];
      } else
        this.selectedIndex_ = m.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(t) {
    this.isVertical_ = t;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(t) {
    this.useActivatedClass_ = t;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(t) {
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(F(t)) : this.setSingleSelectionAtIndex_(t));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(t, e) {
    e >= 0 && this.adapter.setTabIndexForElementIndex(e, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(t, e) {
    e >= 0 && this.adapter.setTabIndexForElementIndex(e, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(t, e, i) {
    const s = S(t) === "ArrowLeft", o = S(t) === "ArrowUp", r = S(t) === "ArrowRight", p = S(t) === "ArrowDown", T = S(t) === "Home", I = S(t) === "End", _ = S(t) === "Enter", B = S(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || I ? (t.preventDefault(), this.focusLastElement()) : (p || T) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let g = this.adapter.getFocusedElementIndex();
    if (g === -1 && (g = i, g < 0))
      return;
    let b;
    if (this.isVertical_ && p || !this.isVertical_ && r)
      this.preventDefaultEvent(t), b = this.focusNextElement(g);
    else if (this.isVertical_ && o || !this.isVertical_ && s)
      this.preventDefaultEvent(t), b = this.focusPrevElement(g);
    else if (T)
      this.preventDefaultEvent(t), b = this.focusFirstElement();
    else if (I)
      this.preventDefaultEvent(t), b = this.focusLastElement();
    else if ((_ || B) && e) {
      const w = t.target;
      if (w && w.tagName === "A" && _)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(g, !0);
    }
    this.focusedItemIndex_ = g, b !== void 0 && (this.setTabindexAtIndex_(b), this.focusedItemIndex_ = b);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, e, i) {
    t !== m.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, e, i), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const e = this.adapter.getListItemCount();
    let i = t + 1;
    if (i >= e)
      if (this.wrapFocus_)
        i = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(i), i;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(t) {
    let e = t - 1;
    if (e < 0)
      if (this.wrapFocus_)
        e = this.adapter.getListItemCount() - 1;
      else
        return t;
    return this.adapter.focusItemAtIndex(e), e;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const t = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(t), t;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(t, e) {
    this.isIndexValid_(t) && this.adapter.setDisabledStateForElementIndex(t, !e);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(t) {
    const e = `${t.target.tagName}`.toLowerCase();
    Z.indexOf(e) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, e = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== m.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), e && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, e = !0) {
    const i = F(this.selectedIndex_), s = q(i, t);
    if (!(!s.removed.length && !s.added.length)) {
      for (const o of s.removed)
        e && this.adapter.setSelectedStateForElementIndex(o, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !1);
      for (const o of s.added)
        e && this.adapter.setSelectedStateForElementIndex(o, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, s);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === m.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, y.ARIA_CURRENT));
    const e = this.ariaCurrentAttrValue_ !== null, i = e ? y.ARIA_CURRENT : y.ARIA_SELECTED;
    this.selectedIndex_ !== m.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const s = e ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, i, s);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === m.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== m.UNSET_INDEX ? t = this.selectedIndex_ : L(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let e = !1;
        for (const i of t)
          if (e = this.isIndexInRange_(i), e)
            break;
        return e;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === m.UNSET_INDEX || this.isIndexInRange_(t);
    } else
      return !1;
  }
  isIndexInRange_(t) {
    const e = this.adapter.getListItemCount();
    return t >= 0 && t < e;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(t, e, i) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let s = t;
    this.isMulti_ && (s = /* @__PURE__ */ new Set([t])), this.isIndexValid_(s) && (this.isMulti_ ? this.toggleMultiAtIndex(t, i, e) : e || i ? this.setSingleSelectionAtIndex_(t, e) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(m.UNSET_INDEX), e && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, e, i = !0) {
    let s = !1;
    e === void 0 ? s = !this.adapter.getSelectedStateForElementIndex(t) : s = e;
    const o = F(this.selectedIndex_);
    s ? o.add(t) : o.delete(t), this.setMultiSelectionAtIndex_(o, i);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function J(d, t = 50) {
  let e;
  return function(i = !0) {
    clearTimeout(e), e = setTimeout(() => {
      d(i);
    }, t);
  };
}
const O = (d) => d.hasAttribute("mwc-list-item");
function Q() {
  const d = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), d();
}
class E extends j {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = M, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = J(this.layout.bind(this));
    this.debouncedLayout = (e = !0) => {
      Q.call(this), t(e);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const t = await super.getUpdateComplete();
    return await this.itemsReady, t;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var t;
    const e = (t = this.assignedElements) !== null && t !== void 0 ? t : [], i = [];
    for (const r of e)
      O(r) && (i.push(r), r._managingList = this), r.hasAttribute("divider") && !r.hasAttribute("role") && r.setAttribute("role", "separator");
    this.items_ = i;
    const s = /* @__PURE__ */ new Set();
    if (this.items_.forEach((r, p) => {
      this.itemRoles ? r.setAttribute("role", this.itemRoles) : r.removeAttribute("role"), r.selected && s.add(p);
    }), this.multi)
      this.select(s);
    else {
      const r = s.size ? s.entries().next().value[1] : -1;
      this.select(r);
    }
    const o = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(o);
  }
  get selected() {
    const t = this.index;
    if (!L(t))
      return t === -1 ? null : this.items[t];
    const e = [];
    for (const i of t)
      e.push(this.items[i]);
    return e;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, e = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, i = this.rootTabbable ? "0" : "-1";
    return P`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${U(t)}"
          aria-label="${U(e)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var t;
    const e = (t = this.assignedElements) !== null && t !== void 0 ? t : [];
    return this.emptyMessage !== void 0 && e.length === 0 ? P`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const e = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusIn(t, e);
    }
  }
  onFocusOut(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const e = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusOut(t, e);
    }
  }
  onKeydown(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const e = this.getIndexOfTarget(t), i = t.target, s = O(i);
      this.mdcFoundation.handleKeydown(t, s, e);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let e = this.getIndexOfTarget(t);
      if (e === -1 && (this.layout(), e = this.getIndexOfTarget(t), e === -1) || this.items[e].disabled)
        return;
      const i = t.detail.selected, s = t.detail.source;
      this.mdcFoundation.handleSingleSelection(e, s === "interaction", i), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const e = this.items, i = t.composedPath();
    for (const s of i) {
      let o = -1;
      if (G(s) && O(s) && (o = e.indexOf(s)), o !== -1)
        return o;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (t, e) => {
        if (!this.mdcRoot)
          return "";
        const i = this.items[t];
        return i ? i.getAttribute(e) : "";
      },
      setAttributeForElementIndex: (t, e, i) => {
        if (!this.mdcRoot)
          return;
        const s = this.items[t];
        s && s.setAttribute(e, i);
      },
      focusItemAtIndex: (t) => {
        const e = this.items[t];
        e && e.focus();
      },
      setTabIndexForElementIndex: (t, e) => {
        const i = this.items[t];
        i && (i.tabindex = e);
      },
      notifyAction: (t) => {
        const e = { bubbles: !0, composed: !0 };
        e.detail = { index: t };
        const i = new CustomEvent("action", e);
        this.dispatchEvent(i);
      },
      notifySelected: (t, e) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: t, diff: e };
        const s = new CustomEvent("selected", i);
        this.dispatchEvent(s);
      },
      isFocusInsideList: () => V(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, e) => {
        const i = this.items[t];
        i && (i.disabled = e);
      },
      getDisabledStateForElementIndex: (t) => {
        const e = this.items[t];
        return e ? e.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, e) => {
        const i = this.items[t];
        i && (i.selected = e);
      },
      getSelectedStateForElementIndex: (t) => {
        const e = this.items[t];
        return e ? e.selected : !1;
      },
      setActivatedStateForElementIndex: (t, e) => {
        const i = this.items[t];
        i && (i.activated = e);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, e = !1) {
    const i = this.items[t];
    i && (i.selected = !0, i.activated = e);
  }
  deselectUi(t) {
    const e = this.items[t];
    e && (e.selected = !1, e.activated = !1);
  }
  select(t) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(t);
  }
  toggle(t, e) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(t, e);
  }
  onListItemConnected(t) {
    const e = t.target;
    this.layout(this.items.indexOf(e) === -1);
  }
  layout(t = !0) {
    t && this.updateItems();
    const e = this.items[0];
    for (const i of this.items)
      i.tabindex = -1;
    e && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = e) : e.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = $();
    if (!t.length)
      return -1;
    for (let e = t.length - 1; e >= 0; e--) {
      const i = t[e];
      if (O(i))
        return this.items.indexOf(i);
    }
    return -1;
  }
  focusItemAtIndex(t) {
    for (const e of this.items)
      if (e.tabindex === 0) {
        e.tabindex = -1;
        break;
      }
    this.items[t].tabindex = 0, this.items[t].focus();
  }
  focus() {
    const t = this.mdcRoot;
    t && t.focus();
  }
  blur() {
    const t = this.mdcRoot;
    t && t.blur();
  }
}
h([
  A({ type: String })
], E.prototype, "emptyMessage", void 0);
h([
  k(".mdc-deprecated-list")
], E.prototype, "mdcRoot", void 0);
h([
  W("", !0, "*")
], E.prototype, "assignedElements", void 0);
h([
  W("", !0, '[tabindex="0"]')
], E.prototype, "tabbableElements", void 0);
h([
  A({ type: Boolean }),
  C(function(d) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(d);
  })
], E.prototype, "activatable", void 0);
h([
  A({ type: Boolean }),
  C(function(d, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(d), t !== void 0 && this.layout();
  })
], E.prototype, "multi", void 0);
h([
  A({ type: Boolean }),
  C(function(d) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(d);
  })
], E.prototype, "wrapFocus", void 0);
h([
  A({ type: String }),
  C(function(d, t) {
    t !== void 0 && this.updateItems();
  })
], E.prototype, "itemRoles", void 0);
h([
  A({ type: String })
], E.prototype, "innerRole", void 0);
h([
  A({ type: String })
], E.prototype, "innerAriaLabel", void 0);
h([
  A({ type: Boolean })
], E.prototype, "rootTabbable", void 0);
h([
  A({ type: Boolean, reflect: !0 }),
  C(function(d) {
    var t, e;
    if (d) {
      const i = (e = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && e !== void 0 ? e : null;
      this.previousTabindex = i, i && i.setAttribute("tabindex", "-1");
    } else
      !d && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], E.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const at = X`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
export {
  E as h,
  at as u
};
