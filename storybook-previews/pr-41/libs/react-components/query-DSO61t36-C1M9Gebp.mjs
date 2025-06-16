/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x = window, K = x.ShadowRoot && (x.ShadyCSS === void 0 || x.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, J = Symbol(), Z = /* @__PURE__ */ new WeakMap();
let ht = class {
  constructor(e, t, s) {
    if (this._$cssResult$ = !0, s !== J)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (K && e === void 0) {
      const s = t !== void 0 && t.length === 1;
      s && (e = Z.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && Z.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const _t = (e) => new ht(typeof e == "string" ? e : e + "", void 0, J), zt = (e, ...t) => {
  const s = e.length === 1 ? e[0] : t.reduce((n, i, r) => n + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + e[r + 1], e[0]);
  return new ht(s, e, J);
}, yt = (e, t) => {
  K ? e.adoptedStyleSheets = t.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet) : t.forEach((s) => {
    const n = document.createElement("style"), i = x.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = s.cssText, e.appendChild(n);
  });
}, Y = K ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let s = "";
  for (const n of t.cssRules)
    s += n.cssText;
  return _t(s);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var H;
const U = window, F = U.trustedTypes, mt = F ? F.emptyScript : "", G = U.reactiveElementPolyfillSupport, I = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? mt : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let s = e;
  switch (t) {
    case Boolean:
      s = e !== null;
      break;
    case Number:
      s = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        s = JSON.parse(e);
      } catch {
        s = null;
      }
  }
  return s;
} }, ct = (e, t) => t !== e && (t == t || e == e), M = { attribute: !0, type: String, converter: I, reflect: !1, hasChanged: ct }, V = "finalized";
let E = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(e) {
    var t;
    this.finalize(), ((t = this.h) !== null && t !== void 0 ? t : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, s) => {
      const n = this._$Ep(s, t);
      n !== void 0 && (this._$Ev.set(n, s), e.push(n));
    }), e;
  }
  static createProperty(e, t = M) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const s = typeof e == "symbol" ? Symbol() : "__" + e, n = this.getPropertyDescriptor(e, s, t);
      n !== void 0 && Object.defineProperty(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, s) {
    return { get() {
      return this[t];
    }, set(n) {
      const i = this[e];
      this[t] = n, this.requestUpdate(e, i, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || M;
  }
  static finalize() {
    if (this.hasOwnProperty(V))
      return !1;
    this[V] = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties, s = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const n of s)
        this.createProperty(n, t[n]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const n of s)
        t.unshift(Y(n));
    } else
      e !== void 0 && t.push(Y(e));
    return t;
  }
  static _$Ep(e, t) {
    const s = t.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  _$Eu() {
    var e;
    this._$E_ = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((t) => t(this));
  }
  addController(e) {
    var t, s;
    ((t = this._$ES) !== null && t !== void 0 ? t : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((s = e.hostConnected) === null || s === void 0 || s.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return yt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var s;
      return (s = t.hostConnected) === null || s === void 0 ? void 0 : s.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var s;
      return (s = t.hostDisconnected) === null || s === void 0 ? void 0 : s.call(t);
    });
  }
  attributeChangedCallback(e, t, s) {
    this._$AK(e, s);
  }
  _$EO(e, t, s = M) {
    var n;
    const i = this.constructor._$Ep(e, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((n = s.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== void 0 ? s.converter : I).toAttribute(t, s.type);
      this._$El = e, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$El = null;
    }
  }
  _$AK(e, t) {
    var s;
    const n = this.constructor, i = n._$Ev.get(e);
    if (i !== void 0 && this._$El !== i) {
      const r = n.getPropertyOptions(i), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((s = r.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? r.converter : I;
      this._$El = i, this[i] = o.fromAttribute(t, r.type), this._$El = null;
    }
  }
  requestUpdate(e, t, s) {
    let n = !0;
    e !== void 0 && (((s = s || this.constructor.getPropertyOptions(e)).hasChanged || ct)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), s.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, s))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, i) => this[i] = n), this._$Ei = void 0);
    let t = !1;
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), (e = this._$ES) === null || e === void 0 || e.forEach((n) => {
        var i;
        return (i = n.hostUpdate) === null || i === void 0 ? void 0 : i.call(n);
      }), this.update(s)) : this._$Ek();
    } catch (n) {
      throw t = !1, this._$Ek(), n;
    }
    t && this._$AE(s);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((s) => {
      var n;
      return (n = s.hostUpdated) === null || n === void 0 ? void 0 : n.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((t, s) => this._$EO(s, this[s], t)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
E[V] = !0, E.elementProperties = /* @__PURE__ */ new Map(), E.elementStyles = [], E.shadowRootOptions = { mode: "open" }, G == null || G({ ReactiveElement: E }), ((H = U.reactiveElementVersions) !== null && H !== void 0 ? H : U.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var L;
const k = window, b = k.trustedTypes, Q = b ? b.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, W = "$lit$", $ = `lit$${(Math.random() + "").slice(9)}$`, dt = "?" + $, gt = `<${dt}>`, m = document, C = () => m.createComment(""), P = (e) => e === null || typeof e != "object" && typeof e != "function", ut = Array.isArray, At = (e) => ut(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", j = `[ 	
\f\r]`, w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, X = /-->/g, tt = />/g, _ = RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, st = /"/g, pt = /^(?:script|style|textarea|title)$/i, Et = (e) => (t, ...s) => ({ _$litType$: e, strings: t, values: s }), Bt = Et(1), g = Symbol.for("lit-noChange"), v = Symbol.for("lit-nothing"), nt = /* @__PURE__ */ new WeakMap(), y = m.createTreeWalker(m, 129, null, !1);
function vt(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Q !== void 0 ? Q.createHTML(t) : t;
}
const bt = (e, t) => {
  const s = e.length - 1, n = [];
  let i, r = t === 2 ? "<svg>" : "", o = w;
  for (let a = 0; a < s; a++) {
    const l = e[a];
    let h, c, u = -1, p = 0;
    for (; p < l.length && (o.lastIndex = p, c = o.exec(l), c !== null); )
      p = o.lastIndex, o === w ? c[1] === "!--" ? o = X : c[1] !== void 0 ? o = tt : c[2] !== void 0 ? (pt.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = _) : c[3] !== void 0 && (o = _) : o === _ ? c[0] === ">" ? (o = i ?? w, u = -1) : c[1] === void 0 ? u = -2 : (u = o.lastIndex - c[2].length, h = c[1], o = c[3] === void 0 ? _ : c[3] === '"' ? st : et) : o === st || o === et ? o = _ : o === X || o === tt ? o = w : (o = _, i = void 0);
    const d = o === _ && e[a + 1].startsWith("/>") ? " " : "";
    r += o === w ? l + gt : u >= 0 ? (n.push(h), l.slice(0, u) + W + l.slice(u) + $ + d) : l + $ + (u === -2 ? (n.push(void 0), a) : d);
  }
  return [vt(e, r + (e[s] || "<?>") + (t === 2 ? "</svg>" : "")), n];
};
class O {
  constructor({ strings: t, _$litType$: s }, n) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const a = t.length - 1, l = this.parts, [h, c] = bt(t, s);
    if (this.el = O.createElement(h, n), y.currentNode = this.el.content, s === 2) {
      const u = this.el.content, p = u.firstChild;
      p.remove(), u.append(...p.childNodes);
    }
    for (; (i = y.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const p of i.getAttributeNames())
            if (p.endsWith(W) || p.startsWith($)) {
              const d = c[o++];
              if (u.push(p), d !== void 0) {
                const f = i.getAttribute(d.toLowerCase() + W).split($), A = /([.?@])?(.*)/.exec(d);
                l.push({ type: 1, index: r, name: A[2], strings: f, ctor: A[1] === "." ? wt : A[1] === "?" ? Pt : A[1] === "@" ? Ot : R });
              } else
                l.push({ type: 6, index: r });
            }
          for (const p of u)
            i.removeAttribute(p);
        }
        if (pt.test(i.tagName)) {
          const u = i.textContent.split($), p = u.length - 1;
          if (p > 0) {
            i.textContent = b ? b.emptyScript : "";
            for (let d = 0; d < p; d++)
              i.append(u[d], C()), y.nextNode(), l.push({ type: 2, index: ++r });
            i.append(u[p], C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === dt)
          l.push({ type: 2, index: r });
        else {
          let u = -1;
          for (; (u = i.data.indexOf($, u + 1)) !== -1; )
            l.push({ type: 7, index: r }), u += $.length - 1;
        }
      r++;
    }
  }
  static createElement(t, s) {
    const n = m.createElement("template");
    return n.innerHTML = t, n;
  }
}
function S(e, t, s = e, n) {
  var i, r, o, a;
  if (t === g)
    return t;
  let l = n !== void 0 ? (i = s._$Co) === null || i === void 0 ? void 0 : i[n] : s._$Cl;
  const h = P(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), h === void 0 ? l = void 0 : (l = new h(e), l._$AT(e, s, n)), n !== void 0 ? ((o = (a = s)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[n] = l : s._$Cl = l), l !== void 0 && (t = S(e, l._$AS(e, t.values), l, n)), t;
}
class St {
  constructor(t, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var s;
    const { el: { content: n }, parts: i } = this._$AD, r = ((s = t == null ? void 0 : t.creationScope) !== null && s !== void 0 ? s : m).importNode(n, !0);
    y.currentNode = r;
    let o = y.nextNode(), a = 0, l = 0, h = i[0];
    for (; h !== void 0; ) {
      if (a === h.index) {
        let c;
        h.type === 2 ? c = new T(o, o.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (c = new Tt(o, this, t)), this._$AV.push(c), h = i[++l];
      }
      a !== (h == null ? void 0 : h.index) && (o = y.nextNode(), a++);
    }
    return y.currentNode = m, r;
  }
  v(t) {
    let s = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, s), s += n.strings.length - 2) : n._$AI(t[s])), s++;
  }
}
class T {
  constructor(t, s, n, i) {
    var r;
    this.type = 2, this._$AH = v, this._$AN = void 0, this._$AA = t, this._$AB = s, this._$AM = n, this.options = i, this._$Cp = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, s;
    return (s = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && s !== void 0 ? s : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = s.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, s = this) {
    t = S(this, t, s), P(t) ? t === v || t == null || t === "" ? (this._$AH !== v && this._$AR(), this._$AH = v) : t !== this._$AH && t !== g && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : At(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== v && P(this._$AH) ? this._$AA.nextSibling.data = t : this.$(m.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var s;
    const { values: n, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = O.createElement(vt(i.h, i.h[0]), this.options)), i);
    if (((s = this._$AH) === null || s === void 0 ? void 0 : s._$AD) === r)
      this._$AH.v(n);
    else {
      const o = new St(r, this), a = o.u(this.options);
      o.v(n), this.$(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let s = nt.get(t.strings);
    return s === void 0 && nt.set(t.strings, s = new O(t)), s;
  }
  T(t) {
    ut(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let n, i = 0;
    for (const r of t)
      i === s.length ? s.push(n = new T(this.k(C()), this.k(C()), this, this.options)) : n = s[i], n._$AI(r), i++;
    i < s.length && (this._$AR(n && n._$AB.nextSibling, i), s.length = i);
  }
  _$AR(t = this._$AA.nextSibling, s) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, s); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var s;
    this._$AM === void 0 && (this._$Cp = t, (s = this._$AP) === null || s === void 0 || s.call(this, t));
  }
}
class R {
  constructor(t, s, n, i, r) {
    this.type = 1, this._$AH = v, this._$AN = void 0, this.element = t, this.name = s, this._$AM = i, this.options = r, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = v;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, s = this, n, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = S(this, t, s, 0), o = !P(t) || t !== this._$AH && t !== g, o && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = S(this, a[n + l], s, l), h === g && (h = this._$AH[l]), o || (o = !P(h) || h !== this._$AH[l]), h === v ? t = v : t !== v && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === v ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class wt extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === v ? void 0 : t;
  }
}
const Ct = b ? b.emptyScript : "";
class Pt extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== v ? this.element.setAttribute(this.name, Ct) : this.element.removeAttribute(this.name);
  }
}
class Ot extends R {
  constructor(t, s, n, i, r) {
    super(t, s, n, i, r), this.type = 5;
  }
  _$AI(t, s = this) {
    var n;
    if ((t = (n = S(this, t, s, 0)) !== null && n !== void 0 ? n : v) === g)
      return;
    const i = this._$AH, r = t === v && i !== v || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== v && (i === v || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var s, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (s = this.options) === null || s === void 0 ? void 0 : s.host) !== null && n !== void 0 ? n : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Tt {
  constructor(t, s, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    S(this, t);
  }
}
const it = k.litHtmlPolyfillSupport;
it == null || it(O, T), ((L = k.litHtmlVersions) !== null && L !== void 0 ? L : k.litHtmlVersions = []).push("2.8.0");
const xt = (e, t, s) => {
  var n, i;
  const r = (n = s == null ? void 0 : s.renderBefore) !== null && n !== void 0 ? n : t;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (i = s == null ? void 0 : s.renderBefore) !== null && i !== void 0 ? i : null;
    r._$litPart$ = o = new T(t.insertBefore(C(), a), a, void 0, s ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var D, z;
class N extends E {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, s;
    const n = super.createRenderRoot();
    return (t = (s = this.renderOptions).renderBefore) !== null && t !== void 0 || (s.renderBefore = n.firstChild), n;
  }
  update(t) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = xt(s, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return g;
  }
}
N.finalized = !0, N._$litElement$ = !0, (D = globalThis.litElementHydrateSupport) === null || D === void 0 || D.call(globalThis, { LitElement: N });
const rt = globalThis.litElementPolyfillSupport;
rt == null || rt({ LitElement: N });
((z = globalThis.litElementVersions) !== null && z !== void 0 ? z : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = (e) => (t) => typeof t == "function" ? ((s, n) => (customElements.define(s, n), n))(e, t) : ((s, n) => {
  const { kind: i, elements: r } = n;
  return { kind: i, elements: r, finisher(o) {
    customElements.define(s, o);
  } };
})(e, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft = ({ finisher: e, descriptor: t }) => (s, n) => {
  var i;
  if (n === void 0) {
    const r = (i = s.originalKey) !== null && i !== void 0 ? i : s.key, o = t != null ? { kind: "method", placement: "prototype", key: r, descriptor: t(s.key) } : { ...s, key: r };
    return e != null && (o.finisher = function(a) {
      e(a, r);
    }), o;
  }
  {
    const r = s.constructor;
    t !== void 0 && Object.defineProperty(s, n, t(n)), e == null || e(r, n);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var B;
const Nt = ((B = window.HTMLSlotElement) === null || B === void 0 ? void 0 : B.prototype.assignedElements) != null ? (e, t) => e.assignedElements(t) : (e, t) => e.assignedNodes(t).filter((s) => s.nodeType === Node.ELEMENT_NODE);
function Vt(e) {
  const { slot: t, selector: s } = e ?? {};
  return ft({ descriptor: (n) => ({ get() {
    var i;
    const r = "slot" + (t ? `[name=${t}]` : ":not([name])"), o = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(r), a = o != null ? Nt(o, e) : [];
    return s ? a.filter((l) => l.matches(s)) : a;
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ut = (e, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(s) {
  s.createProperty(t.key, e);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(s) {
  s.createProperty(t.key, e);
} }, kt = (e, t, s) => {
  t.constructor.createProperty(s, e);
};
function Wt(e) {
  return (t, s) => s !== void 0 ? kt(e, t, s) : Ut(e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = { ATTRIBUTE: 1, PROPERTY: 3 }, Ht = (e) => (...t) => ({ _$litDirective$: e, values: t });
class Mt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, s, n) {
    this._$Ct = t, this._$AM = s, this._$Ci = n;
  }
  _$AS(t, s) {
    return this.update(t, s);
  }
  update(t, s) {
    return this.render(...s);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qt = Ht(class extends Mt {
  constructor(e) {
    var t;
    if (super(e), e.type !== Rt.ATTRIBUTE || e.name !== "class" || ((t = e.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var s, n;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in t)
        t[r] && !(!((s = this.nt) === null || s === void 0) && s.has(r)) && this.it.add(r);
      return this.render(t);
    }
    const i = e.element.classList;
    this.it.forEach((r) => {
      r in t || (i.remove(r), this.it.delete(r));
    });
    for (const r in t) {
      const o = !!t[r];
      o === this.it.has(r) || !((n = this.nt) === null || n === void 0) && n.has(r) || (o ? (i.add(r), this.it.add(r)) : (i.remove(r), this.it.delete(r)));
    }
    return g;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lt = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), ot = /* @__PURE__ */ new WeakMap(), lt = (e, t, s, n, i) => {
  const r = i == null ? void 0 : i[t];
  r === void 0 ? (e[t] = s, s == null && t in HTMLElement.prototype && e.removeAttribute(t)) : s !== n && ((o, a, l) => {
    let h = ot.get(o);
    h === void 0 && ot.set(o, h = /* @__PURE__ */ new Map());
    let c = h.get(a);
    l !== void 0 ? c === void 0 ? (h.set(a, c = { handleEvent: l }), o.addEventListener(a, c)) : c.handleEvent = l : c !== void 0 && (h.delete(a), o.removeEventListener(a, c));
  })(e, r, s);
}, Kt = ({ react: e, tagName: t, elementClass: s, events: n, displayName: i }) => {
  const r = new Set(Object.keys(n ?? {})), o = e.forwardRef((a, l) => {
    const h = e.useRef(/* @__PURE__ */ new Map()), c = e.useRef(null), u = {}, p = {};
    for (const [d, f] of Object.entries(a))
      Lt.has(d) ? u[d === "className" ? "class" : d] = f : r.has(d) || d in s.prototype ? p[d] = f : u[d] = f;
    return e.useLayoutEffect(() => {
      if (c.current === null)
        return;
      const d = /* @__PURE__ */ new Map();
      for (const f in p)
        lt(c.current, f, a[f], h.current.get(f), n), h.current.delete(f), d.set(f, a[f]);
      for (const [f, A] of h.current)
        lt(c.current, f, void 0, A, n);
      h.current = d;
    }), e.useLayoutEffect(() => {
      var d;
      (d = c.current) == null || d.removeAttribute("defer-hydration");
    }, []), u.suppressHydrationWarning = !0, e.createElement(t, { ...u, ref: e.useCallback((d) => {
      c.current = d, typeof l == "function" ? l(d) : l !== null && (l.current = d);
    }, [l]) });
  });
  return o.displayName = i ?? s.name, o;
};
var q = function(e, t) {
  return q = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, n) {
    s.__proto__ = n;
  } || function(s, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (s[i] = n[i]);
  }, q(e, t);
};
function Jt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  q(e, t);
  function s() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (s.prototype = t.prototype, new s());
}
var at = function() {
  return at = Object.assign || function(e) {
    for (var t, s = 1, n = arguments.length; s < n; s++) {
      t = arguments[s];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, at.apply(this, arguments);
};
function Zt(e, t, s, n) {
  var i = arguments.length, r = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, s) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    r = Reflect.decorate(e, t, s, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (r = (i < 3 ? o(r) : i > 3 ? o(t, s, r) : o(t, s)) || r);
  return i > 3 && r && Object.defineProperty(t, s, r), r;
}
function Yt(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, s = t && e[t], n = 0;
  if (s)
    return s.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ft = (e) => e.nodeType === Node.ELEMENT_NODE;
function Gt(e) {
  return {
    addClass: (t) => {
      e.classList.add(t);
    },
    removeClass: (t) => {
      e.classList.remove(t);
    },
    hasClass: (t) => e.classList.contains(t)
  };
}
const $t = () => {
}, jt = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", $t, jt);
document.removeEventListener("x", $t);
const Dt = (e = window.document) => {
  let t = e.activeElement;
  const s = [];
  if (!t)
    return s;
  for (; t && (s.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return s;
}, Qt = (e) => {
  const t = Dt();
  if (!t.length)
    return !1;
  const s = t[t.length - 1], n = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let i = [];
  const r = (o) => {
    i = o.composedPath();
  };
  return document.body.addEventListener("check-if-focused", r), s.dispatchEvent(n), document.body.removeEventListener("check-if-focused", r), i.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Xt(e, t) {
  return ft({ descriptor: (s) => ({ get() {
    var n, i;
    return (i = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(e)) !== null && i !== void 0 ? i : null;
  }, enumerable: !0, configurable: !0 }) });
}
export {
  ft as C,
  g as E,
  Bt as H,
  It as N,
  zt as P,
  Ht as T,
  Mt as _,
  qt as a,
  Rt as b,
  Jt as c,
  Xt as d,
  _t as e,
  v as f,
  Ft as g,
  Kt as h,
  N as i,
  Vt as j,
  Dt as l,
  Qt as m,
  Wt as o,
  Yt as p,
  Zt as s,
  at as u,
  Gt as v
};
