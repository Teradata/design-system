import { e as Rn, P as In, o as xe, i as Dn, H as Se, a as Ln, N as Bn, h as $n } from "../../query-DSO61t36-C1M9Gebp.mjs";
import { m as zn } from "../../query-assigned-nodes-B-jCihdA-B4zaBPwz.mjs";
import jn from "react";
import Fn from "../IconButton/index.js";
import { jsx as Ce, jsxs as Un } from "react/jsx-runtime";
import '../../assets/index12.css';function Pn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const Hn = ":host{background-color:var(--mdc-theme-surface-canvas);border-radius:var(--mdc-shape-medium);display:block;position:relative;overflow:hidden}:host .code-slot{display:none}:host pre{margin:0;overflow:auto}:host pre code.hljs.cv-code-snippet{padding:16px;display:block;overflow-x:auto;font-family:var(--cv-theme-code-font-family);font-size:var(--cv-theme-code-font-size);font-weight:var(--cv-theme-code-font-weight);line-height:var(--cv-theme-code-line-height)}:host .hljs{color:var(--cv-theme-code-snippet-color, #abb2bf)}:host .hljs-comment,:host .hljs-quote{color:var(--cv-theme-code-snippet-comment, #5c6370);font-style:italic}:host .hljs-doctag,:host .hljs-formula,:host .hljs-keyword{color:var(--cv-theme-code-snippet-keyword, #c678dd)}:host .hljs-deletion,:host .hljs-name,:host .hljs-section,:host .hljs-selector-tag,:host .hljs-subst{color:var(--cv-theme-code-snippet-selector, #e06c75)}:host .hljs-literal{color:var(--cv-theme-code-snippet-literal, #56b6c2)}:host .hljs-addition,:host .hljs-attribute,:host .hljs-meta .hljs-string,:host .hljs-regexp,:host .hljs-string{color:var(--cv-theme-code-snippet-string, #98c379)}:host .hljs-attr,:host .hljs-number,:host .hljs-selector-attr,:host .hljs-selector-class,:host .hljs-selector-pseudo,:host .hljs-template-variable,:host .hljs-type,:host .hljs-variable{color:var(--cv-theme-code-snippet-variable, #d19a66)}:host .hljs-bullet,:host .hljs-link,:host .hljs-meta,:host .hljs-selector-id,:host .hljs-symbol,:host .hljs-title{color:var(--cv-theme-code-snippet-title, #61aeee)}:host .hljs-built_in,:host .hljs-class .hljs-title,:host .hljs-title.class_{color:var(--cv-theme-code-snippet-class, #e6c07b)}:host .hljs-emphasis{font-style:italic}:host .hljs-strong{font-weight:700}:host .hljs-link{text-decoration:underline}:host([inline]){border-radius:0}.header{border-bottom:1px solid var(--mdc-theme-border);position:sticky;top:-8px;background-color:var(--mdc-theme-surface-canvas);display:flex;justify-content:space-between;padding:4px 8px 4px 16px;align-items:center;border-radius:var(--mdc-shape-medium) var(--mdc-shape-medium) 0 0}.title{font-family:var(--mdc-typography-subtitle2-font-family);font-size:var(--mdc-typography-subtitle2-font-size);font-weight:var(--mdc-typography-subtitle2-font-weight);line-height:var(--mdc-typography-subtitle2-line-height);padding-right:16px}";
function bn(t) {
  return t instanceof Map ? t.clear = t.delete = t.set = function() {
    throw new Error("map is read-only");
  } : t instanceof Set && (t.add = t.clear = t.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach((e) => {
    const n = t[e], r = typeof n;
    (r === "object" || r === "function") && !Object.isFrozen(n) && bn(n);
  }), t;
}
class Nt {
  /**
   * @param {CompiledMode} mode
   */
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function mn(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function ue(t, ...e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r in t)
    n[r] = t[r];
  return e.forEach(function(r) {
    for (const c in r)
      n[c] = r[c];
  }), /** @type {T} */
  n;
}
const Kn = "</span>", kt = (t) => !!t.scope, qn = (t, { prefix: e }) => {
  if (t.startsWith("language:"))
    return t.replace("language:", "language-");
  if (t.includes(".")) {
    const n = t.split(".");
    return [
      `${e}${n.shift()}`,
      ...n.map((r, c) => `${r}${"_".repeat(c + 1)}`)
    ].join(" ");
  }
  return `${e}${t}`;
};
class Zn {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(e, n) {
    this.buffer = "", this.classPrefix = n.classPrefix, e.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(e) {
    this.buffer += mn(e);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(e) {
    if (!kt(e))
      return;
    const n = qn(
      e.scope,
      { prefix: this.classPrefix }
    );
    this.span(n);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(e) {
    kt(e) && (this.buffer += Kn);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
const xt = (t = {}) => {
  const e = { children: [] };
  return Object.assign(e, t), e;
};
class yt {
  constructor() {
    this.rootNode = xt(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(e) {
    this.top.children.push(e);
  }
  /** @param {string} scope */
  openNode(e) {
    const n = xt({ scope: e });
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); )
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(e, n) {
    return typeof n == "string" ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((r) => this._walk(e, r)), e.closeNode(n)), e;
  }
  /**
   * @param {Node} node
   */
  static _collapse(e) {
    typeof e != "string" && e.children && (e.children.every((n) => typeof n == "string") ? e.children = [e.children.join("")] : e.children.forEach((n) => {
      yt._collapse(n);
    }));
  }
}
class Gn extends yt {
  /**
   * @param {*} options
   */
  constructor(e) {
    super(), this.options = e;
  }
  /**
   * @param {string} text
   */
  addText(e) {
    e !== "" && this.add(e);
  }
  /** @param {string} scope */
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(e, n) {
    const r = e.root;
    n && (r.scope = `language:${n}`), this.add(r);
  }
  toHTML() {
    return new Zn(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function Ne(t) {
  return t ? typeof t == "string" ? t : t.source : null;
}
function pn(t) {
  return be("(?=", t, ")");
}
function Wn(t) {
  return be("(?:", t, ")*");
}
function Qn(t) {
  return be("(?:", t, ")?");
}
function be(...t) {
  return t.map((e) => Ne(e)).join("");
}
function Xn(t) {
  const e = t[t.length - 1];
  return typeof e == "object" && e.constructor === Object ? (t.splice(t.length - 1, 1), e) : {};
}
function vt(...t) {
  return "(" + (Xn(t).capture ? "" : "?:") + t.map((e) => Ne(e)).join("|") + ")";
}
function hn(t) {
  return new RegExp(t.toString() + "|").exec("").length - 1;
}
function Vn(t, e) {
  const n = t && t.exec(e);
  return n && n.index === 0;
}
const Jn = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Et(t, { joinWith: e }) {
  let n = 0;
  return t.map((r) => {
    n += 1;
    const c = n;
    let o = Ne(r), a = "";
    for (; o.length > 0; ) {
      const s = Jn.exec(o);
      if (!s) {
        a += o;
        break;
      }
      a += o.substring(0, s.index), o = o.substring(s.index + s[0].length), s[0][0] === "\\" && s[1] ? a += "\\" + String(Number(s[1]) + c) : (a += s[0], s[0] === "(" && n++);
    }
    return a;
  }).map((r) => `(${r})`).join(e);
}
const Yn = /\b\B/, fn = "[a-zA-Z]\\w*", wt = "[a-zA-Z_]\\w*", _n = "\\b\\d+(\\.\\d+)?", yn = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", vn = "\\b(0b[01]+)", ea = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", ta = (t = {}) => {
  const e = /^#![ ]*\//;
  return t.binary && (t.begin = be(
    e,
    /.*\b/,
    t.binary,
    /\b.*/
  )), ue({
    scope: "meta",
    begin: e,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (n, r) => {
      n.index !== 0 && r.ignoreMatch();
    }
  }, t);
}, ke = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, na = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [ke]
}, aa = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [ke]
}, ia = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, De = function(t, e, n = {}) {
  const r = ue(
    {
      scope: "comment",
      begin: t,
      end: e,
      contains: []
    },
    n
  );
  r.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const c = vt(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return r.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: be(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        c,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), r;
}, ra = De("//", "$"), sa = De("/\\*", "\\*/"), oa = De("#", "$"), la = {
  scope: "number",
  begin: _n,
  relevance: 0
}, ca = {
  scope: "number",
  begin: yn,
  relevance: 0
}, da = {
  scope: "number",
  begin: vn,
  relevance: 0
}, ua = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    ke,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [ke]
    }
  ]
}, ga = {
  scope: "title",
  begin: fn,
  relevance: 0
}, ba = {
  scope: "title",
  begin: wt,
  relevance: 0
}, ma = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + wt,
  relevance: 0
}, pa = function(t) {
  return Object.assign(
    t,
    {
      /** @type {ModeCallback} */
      "on:begin": (e, n) => {
        n.data._beginMatch = e[1];
      },
      /** @type {ModeCallback} */
      "on:end": (e, n) => {
        n.data._beginMatch !== e[1] && n.ignoreMatch();
      }
    }
  );
};
var Te = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: na,
  BACKSLASH_ESCAPE: ke,
  BINARY_NUMBER_MODE: da,
  BINARY_NUMBER_RE: vn,
  COMMENT: De,
  C_BLOCK_COMMENT_MODE: sa,
  C_LINE_COMMENT_MODE: ra,
  C_NUMBER_MODE: ca,
  C_NUMBER_RE: yn,
  END_SAME_AS_BEGIN: pa,
  HASH_COMMENT_MODE: oa,
  IDENT_RE: fn,
  MATCH_NOTHING_RE: Yn,
  METHOD_GUARD: ma,
  NUMBER_MODE: la,
  NUMBER_RE: _n,
  PHRASAL_WORDS_MODE: ia,
  QUOTE_STRING_MODE: aa,
  REGEXP_MODE: ua,
  RE_STARTERS_RE: ea,
  SHEBANG: ta,
  TITLE_MODE: ga,
  UNDERSCORE_IDENT_RE: wt,
  UNDERSCORE_TITLE_MODE: ba
});
function ha(t, e) {
  t.input[t.index - 1] === "." && e.ignoreMatch();
}
function fa(t, e) {
  t.className !== void 0 && (t.scope = t.className, delete t.className);
}
function _a(t, e) {
  e && t.beginKeywords && (t.begin = "\\b(" + t.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", t.__beforeBegin = ha, t.keywords = t.keywords || t.beginKeywords, delete t.beginKeywords, t.relevance === void 0 && (t.relevance = 0));
}
function ya(t, e) {
  Array.isArray(t.illegal) && (t.illegal = vt(...t.illegal));
}
function va(t, e) {
  if (t.match) {
    if (t.begin || t.end)
      throw new Error("begin & end are not supported with match");
    t.begin = t.match, delete t.match;
  }
}
function Ea(t, e) {
  t.relevance === void 0 && (t.relevance = 1);
}
const wa = (t, e) => {
  if (!t.beforeMatch)
    return;
  if (t.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const n = Object.assign({}, t);
  Object.keys(t).forEach((r) => {
    delete t[r];
  }), t.keywords = n.keywords, t.begin = be(n.beforeMatch, pn(n.begin)), t.starts = {
    relevance: 0,
    contains: [
      Object.assign(n, { endsParent: !0 })
    ]
  }, t.relevance = 0, delete n.beforeMatch;
}, Na = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], ka = "keyword";
function En(t, e, n = ka) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof t == "string" ? c(n, t.split(" ")) : Array.isArray(t) ? c(n, t) : Object.keys(t).forEach(function(o) {
    Object.assign(
      r,
      En(t[o], e, o)
    );
  }), r;
  function c(o, a) {
    e && (a = a.map((s) => s.toLowerCase())), a.forEach(function(s) {
      const d = s.split("|");
      r[d[0]] = [o, xa(d[0], d[1])];
    });
  }
}
function xa(t, e) {
  return e ? Number(e) : Oa(t) ? 0 : 1;
}
function Oa(t) {
  return Na.includes(t.toLowerCase());
}
const Ot = {}, ge = (t) => {
  console.error(t);
}, Mt = (t, ...e) => {
  console.log(`WARN: ${t}`, ...e);
}, fe = (t, e) => {
  Ot[`${t}/${e}`] || (console.log(`Deprecated as of ${t}. ${e}`), Ot[`${t}/${e}`] = !0);
}, Ie = new Error();
function wn(t, e, { key: n }) {
  let r = 0;
  const c = t[n], o = {}, a = {};
  for (let s = 1; s <= e.length; s++)
    a[s + r] = c[s], o[s + r] = !0, r += hn(e[s - 1]);
  t[n] = a, t[n]._emit = o, t[n]._multi = !0;
}
function Ma(t) {
  if (Array.isArray(t.begin)) {
    if (t.skip || t.excludeBegin || t.returnBegin)
      throw ge("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Ie;
    if (typeof t.beginScope != "object" || t.beginScope === null)
      throw ge("beginScope must be object"), Ie;
    wn(t, t.begin, { key: "beginScope" }), t.begin = Et(t.begin, { joinWith: "" });
  }
}
function Aa(t) {
  if (Array.isArray(t.end)) {
    if (t.skip || t.excludeEnd || t.returnEnd)
      throw ge("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Ie;
    if (typeof t.endScope != "object" || t.endScope === null)
      throw ge("endScope must be object"), Ie;
    wn(t, t.end, { key: "endScope" }), t.end = Et(t.end, { joinWith: "" });
  }
}
function Sa(t) {
  t.scope && typeof t.scope == "object" && t.scope !== null && (t.beginScope = t.scope, delete t.scope);
}
function Ca(t) {
  Sa(t), typeof t.beginScope == "string" && (t.beginScope = { _wrap: t.beginScope }), typeof t.endScope == "string" && (t.endScope = { _wrap: t.endScope }), Ma(t), Aa(t);
}
function Ta(t) {
  function e(a, s) {
    return new RegExp(
      Ne(a),
      "m" + (t.case_insensitive ? "i" : "") + (t.unicodeRegex ? "u" : "") + (s ? "g" : "")
    );
  }
  class n {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(s, d) {
      d.position = this.position++, this.matchIndexes[this.matchAt] = d, this.regexes.push([d, s]), this.matchAt += hn(s) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const s = this.regexes.map((d) => d[1]);
      this.matcherRe = e(Et(s, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const d = this.matcherRe.exec(s);
      if (!d)
        return null;
      const l = d.findIndex((g, b) => b > 0 && g !== void 0), i = this.matchIndexes[l];
      return d.splice(0, l), Object.assign(d, i);
    }
  }
  class r {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(s) {
      if (this.multiRegexes[s])
        return this.multiRegexes[s];
      const d = new n();
      return this.rules.slice(s).forEach(([l, i]) => d.addRule(l, i)), d.compile(), this.multiRegexes[s] = d, d;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(s, d) {
      this.rules.push([s, d]), d.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(s) {
      const d = this.getMatcher(this.regexIndex);
      d.lastIndex = this.lastIndex;
      let l = d.exec(s);
      if (this.resumingScanAtSamePosition() && !(l && l.index === this.lastIndex)) {
        const i = this.getMatcher(0);
        i.lastIndex = this.lastIndex + 1, l = i.exec(s);
      }
      return l && (this.regexIndex += l.position + 1, this.regexIndex === this.count && this.considerAll()), l;
    }
  }
  function c(a) {
    const s = new r();
    return a.contains.forEach((d) => s.addRule(d.begin, { rule: d, type: "begin" })), a.terminatorEnd && s.addRule(a.terminatorEnd, { type: "end" }), a.illegal && s.addRule(a.illegal, { type: "illegal" }), s;
  }
  function o(a, s) {
    const d = (
      /** @type CompiledMode */
      a
    );
    if (a.isCompiled)
      return d;
    [
      fa,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      va,
      Ca,
      wa
    ].forEach((i) => i(a, s)), t.compilerExtensions.forEach((i) => i(a, s)), a.__beforeBegin = null, [
      _a,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      ya,
      // default to 1 relevance if not specified
      Ea
    ].forEach((i) => i(a, s)), a.isCompiled = !0;
    let l = null;
    return typeof a.keywords == "object" && a.keywords.$pattern && (a.keywords = Object.assign({}, a.keywords), l = a.keywords.$pattern, delete a.keywords.$pattern), l = l || /\w+/, a.keywords && (a.keywords = En(a.keywords, t.case_insensitive)), d.keywordPatternRe = e(l, !0), s && (a.begin || (a.begin = /\B|\b/), d.beginRe = e(d.begin), !a.end && !a.endsWithParent && (a.end = /\B|\b/), a.end && (d.endRe = e(d.end)), d.terminatorEnd = Ne(d.end) || "", a.endsWithParent && s.terminatorEnd && (d.terminatorEnd += (a.end ? "|" : "") + s.terminatorEnd)), a.illegal && (d.illegalRe = e(
      /** @type {RegExp | string} */
      a.illegal
    )), a.contains || (a.contains = []), a.contains = [].concat(...a.contains.map(function(i) {
      return Ra(i === "self" ? a : i);
    })), a.contains.forEach(function(i) {
      o(
        /** @type Mode */
        i,
        d
      );
    }), a.starts && o(a.starts, s), d.matcher = c(d), d;
  }
  if (t.compilerExtensions || (t.compilerExtensions = []), t.contains && t.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return t.classNameAliases = ue(t.classNameAliases || {}), o(
    /** @type Mode */
    t
  );
}
function Nn(t) {
  return t ? t.endsWithParent || Nn(t.starts) : !1;
}
function Ra(t) {
  return t.variants && !t.cachedVariants && (t.cachedVariants = t.variants.map(function(e) {
    return ue(t, { variants: null }, e);
  })), t.cachedVariants ? t.cachedVariants : Nn(t) ? ue(t, { starts: t.starts ? ue(t.starts) : null }) : Object.isFrozen(t) ? ue(t) : t;
}
var Ia = "11.11.1";
class Da extends Error {
  constructor(e, n) {
    super(e), this.name = "HTMLInjectionError", this.html = n;
  }
}
const Be = mn, At = ue, St = Symbol("nomatch"), La = 7, kn = function(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = [];
  let c = !0;
  const o = "Could not find the language '{}', did you forget to load/include a language module?", a = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let s = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: Gn
  };
  function d(u) {
    return s.noHighlightRe.test(u);
  }
  function l(u) {
    let f = u.className + " ";
    f += u.parentNode ? u.parentNode.className : "";
    const k = s.languageDetectRe.exec(f);
    if (k) {
      const R = N(k[1]);
      return R || (Mt(o.replace("{}", k[1])), Mt("Falling back to no-highlight mode for this block.", u)), R ? k[1] : "no-highlight";
    }
    return f.split(/\s+/).find((R) => d(R) || N(R));
  }
  function i(u, f, k) {
    let R = "", U = "";
    typeof f == "object" ? (R = u, k = f.ignoreIllegals, U = f.language) : (fe("10.7.0", "highlight(lang, code, ...args) has been deprecated."), fe("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), U = u, R = f), k === void 0 && (k = !0);
    const X = {
      code: R,
      language: U
    };
    $("before:highlight", X);
    const Y = X.result ? X.result : g(X.language, X.code, k);
    return Y.code = X.code, $("after:highlight", Y), Y;
  }
  function g(u, f, k, R) {
    const U = /* @__PURE__ */ Object.create(null);
    function X(p, v) {
      return p.keywords[v];
    }
    function Y() {
      if (!x.keywords) {
        Q.addText(L);
        return;
      }
      let p = 0;
      x.keywordPatternRe.lastIndex = 0;
      let v = x.keywordPatternRe.exec(L), O = "";
      for (; v; ) {
        O += L.substring(p, v.index);
        const I = ae.case_insensitive ? v[0].toLowerCase() : v[0], W = X(x, I);
        if (W) {
          const [re, Me] = W;
          if (Q.addText(O), O = "", U[I] = (U[I] || 0) + 1, U[I] <= La && (he += Me), re.startsWith("_"))
            O += v[0];
          else {
            const Le = ae.classNameAliases[re] || re;
            Z(v[0], Le);
          }
        } else
          O += v[0];
        p = x.keywordPatternRe.lastIndex, v = x.keywordPatternRe.exec(L);
      }
      O += L.substring(p), Q.addText(O);
    }
    function se() {
      if (L === "")
        return;
      let p = null;
      if (typeof x.subLanguage == "string") {
        if (!e[x.subLanguage]) {
          Q.addText(L);
          return;
        }
        p = g(x.subLanguage, L, !0, Oe[x.subLanguage]), Oe[x.subLanguage] = /** @type {CompiledMode} */
        p._top;
      } else
        p = m(L, x.subLanguage.length ? x.subLanguage : null);
      x.relevance > 0 && (he += p.relevance), Q.__addSublanguage(p._emitter, p.language);
    }
    function H() {
      x.subLanguage != null ? se() : Y(), L = "";
    }
    function Z(p, v) {
      p !== "" && (Q.startScope(v), Q.addText(p), Q.endScope());
    }
    function G(p, v) {
      let O = 1;
      const I = v.length - 1;
      for (; O <= I; ) {
        if (!p._emit[O]) {
          O++;
          continue;
        }
        const W = ae.classNameAliases[p[O]] || p[O], re = v[O];
        W ? Z(re, W) : (L = re, Y(), L = ""), O++;
      }
    }
    function B(p, v) {
      return p.scope && typeof p.scope == "string" && Q.openNode(ae.classNameAliases[p.scope] || p.scope), p.beginScope && (p.beginScope._wrap ? (Z(L, ae.classNameAliases[p.beginScope._wrap] || p.beginScope._wrap), L = "") : p.beginScope._multi && (G(p.beginScope, v), L = "")), x = Object.create(p, { parent: { value: x } }), x;
    }
    function V(p, v, O) {
      let I = Vn(p.endRe, O);
      if (I) {
        if (p["on:end"]) {
          const W = new Nt(p);
          p["on:end"](v, W), W.isMatchIgnored && (I = !1);
        }
        if (I) {
          for (; p.endsParent && p.parent; )
            p = p.parent;
          return p;
        }
      }
      if (p.endsWithParent)
        return V(p.parent, v, O);
    }
    function ee(p) {
      return x.matcher.regexIndex === 0 ? (L += p[0], 1) : (de = !0, 0);
    }
    function ne(p) {
      const v = p[0], O = p.rule, I = new Nt(O), W = [O.__beforeBegin, O["on:begin"]];
      for (const re of W)
        if (re && (re(p, I), I.isMatchIgnored))
          return ee(v);
      return O.skip ? L += v : (O.excludeBegin && (L += v), H(), !O.returnBegin && !O.excludeBegin && (L = v)), B(O, p), O.returnBegin ? 0 : v.length;
    }
    function te(p) {
      const v = p[0], O = f.substring(p.index), I = V(x, p, O);
      if (!I)
        return St;
      const W = x;
      x.endScope && x.endScope._wrap ? (H(), Z(v, x.endScope._wrap)) : x.endScope && x.endScope._multi ? (H(), G(x.endScope, p)) : W.skip ? L += v : (W.returnEnd || W.excludeEnd || (L += v), H(), W.excludeEnd && (L = v));
      do
        x.scope && Q.closeNode(), !x.skip && !x.subLanguage && (he += x.relevance), x = x.parent;
      while (x !== I.parent);
      return I.starts && B(I.starts, p), W.returnEnd ? 0 : v.length;
    }
    function le() {
      const p = [];
      for (let v = x; v !== ae; v = v.parent)
        v.scope && p.unshift(v.scope);
      p.forEach((v) => Q.openNode(v));
    }
    let ie = {};
    function ye(p, v) {
      const O = v && v[0];
      if (L += p, O == null)
        return H(), 0;
      if (ie.type === "begin" && v.type === "end" && ie.index === v.index && O === "") {
        if (L += f.slice(v.index, v.index + 1), !c) {
          const I = new Error(`0 width match regex (${u})`);
          throw I.languageName = u, I.badRule = ie.rule, I;
        }
        return 1;
      }
      if (ie = v, v.type === "begin")
        return ne(v);
      if (v.type === "illegal" && !k) {
        const I = new Error('Illegal lexeme "' + O + '" for mode "' + (x.scope || "<unnamed>") + '"');
        throw I.mode = x, I;
      } else if (v.type === "end") {
        const I = te(v);
        if (I !== St)
          return I;
      }
      if (v.type === "illegal" && O === "")
        return L += `
`, 1;
      if (Ee > 1e5 && Ee > v.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return L += O, O.length;
    }
    const ae = N(u);
    if (!ae)
      throw ge(o.replace("{}", u)), new Error('Unknown language: "' + u + '"');
    const ve = Ta(ae);
    let pe = "", x = R || ve;
    const Oe = {}, Q = new s.__emitter(s);
    le();
    let L = "", he = 0, ce = 0, Ee = 0, de = !1;
    try {
      if (ae.__emitTokens)
        ae.__emitTokens(f, Q);
      else {
        for (x.matcher.considerAll(); ; ) {
          Ee++, de ? de = !1 : x.matcher.considerAll(), x.matcher.lastIndex = ce;
          const p = x.matcher.exec(f);
          if (!p)
            break;
          const v = f.substring(ce, p.index), O = ye(v, p);
          ce = p.index + O;
        }
        ye(f.substring(ce));
      }
      return Q.finalize(), pe = Q.toHTML(), {
        language: u,
        value: pe,
        relevance: he,
        illegal: !1,
        _emitter: Q,
        _top: x
      };
    } catch (p) {
      if (p.message && p.message.includes("Illegal"))
        return {
          language: u,
          value: Be(f),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: p.message,
            index: ce,
            context: f.slice(ce - 100, ce + 100),
            mode: p.mode,
            resultSoFar: pe
          },
          _emitter: Q
        };
      if (c)
        return {
          language: u,
          value: Be(f),
          illegal: !1,
          relevance: 0,
          errorRaised: p,
          _emitter: Q,
          _top: x
        };
      throw p;
    }
  }
  function b(u) {
    const f = {
      value: Be(u),
      illegal: !1,
      relevance: 0,
      _top: a,
      _emitter: new s.__emitter(s)
    };
    return f._emitter.addText(u), f;
  }
  function m(u, f) {
    f = f || s.languages || Object.keys(e);
    const k = b(u), R = f.filter(N).filter(j).map(
      (H) => g(H, u, !1)
    );
    R.unshift(k);
    const U = R.sort((H, Z) => {
      if (H.relevance !== Z.relevance)
        return Z.relevance - H.relevance;
      if (H.language && Z.language) {
        if (N(H.language).supersetOf === Z.language)
          return 1;
        if (N(Z.language).supersetOf === H.language)
          return -1;
      }
      return 0;
    }), [X, Y] = U, se = X;
    return se.secondBest = Y, se;
  }
  function h(u, f, k) {
    const R = f && n[f] || k;
    u.classList.add("hljs"), u.classList.add(`language-${R}`);
  }
  function _(u) {
    let f = null;
    const k = l(u);
    if (d(k))
      return;
    if ($(
      "before:highlightElement",
      { el: u, language: k }
    ), u.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", u);
      return;
    }
    if (u.children.length > 0 && (s.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(u)), s.throwUnescapedHTML))
      throw new Da(
        "One of your code blocks includes unescaped HTML.",
        u.innerHTML
      );
    f = u;
    const R = f.textContent, U = k ? i(R, { language: k, ignoreIllegals: !0 }) : m(R);
    u.innerHTML = U.value, u.dataset.highlighted = "yes", h(u, k, U.language), u.result = {
      language: U.language,
      // TODO: remove with version 11.0
      re: U.relevance,
      relevance: U.relevance
    }, U.secondBest && (u.secondBest = {
      language: U.secondBest.language,
      relevance: U.secondBest.relevance
    }), $("after:highlightElement", { el: u, result: U, text: R });
  }
  function y(u) {
    s = At(s, u);
  }
  const E = () => {
    S(), fe("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function A() {
    S(), fe("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let w = !1;
  function S() {
    function u() {
      S();
    }
    if (document.readyState === "loading") {
      w || window.addEventListener("DOMContentLoaded", u, !1), w = !0;
      return;
    }
    document.querySelectorAll(s.cssSelector).forEach(_);
  }
  function D(u, f) {
    let k = null;
    try {
      k = f(t);
    } catch (R) {
      if (ge("Language definition for '{}' could not be registered.".replace("{}", u)), c)
        ge(R);
      else
        throw R;
      k = a;
    }
    k.name || (k.name = u), e[u] = k, k.rawDefinition = f.bind(null, t), k.aliases && T(k.aliases, { languageName: u });
  }
  function C(u) {
    delete e[u];
    for (const f of Object.keys(n))
      n[f] === u && delete n[f];
  }
  function P() {
    return Object.keys(e);
  }
  function N(u) {
    return u = (u || "").toLowerCase(), e[u] || e[n[u]];
  }
  function T(u, { languageName: f }) {
    typeof u == "string" && (u = [u]), u.forEach((k) => {
      n[k.toLowerCase()] = f;
    });
  }
  function j(u) {
    const f = N(u);
    return f && !f.disableAutodetect;
  }
  function K(u) {
    u["before:highlightBlock"] && !u["before:highlightElement"] && (u["before:highlightElement"] = (f) => {
      u["before:highlightBlock"](
        Object.assign({ block: f.el }, f)
      );
    }), u["after:highlightBlock"] && !u["after:highlightElement"] && (u["after:highlightElement"] = (f) => {
      u["after:highlightBlock"](
        Object.assign({ block: f.el }, f)
      );
    });
  }
  function J(u) {
    K(u), r.push(u);
  }
  function q(u) {
    const f = r.indexOf(u);
    f !== -1 && r.splice(f, 1);
  }
  function $(u, f) {
    const k = u;
    r.forEach(function(R) {
      R[k] && R[k](f);
    });
  }
  function F(u) {
    return fe("10.7.0", "highlightBlock will be removed entirely in v12.0"), fe("10.7.0", "Please use highlightElement now."), _(u);
  }
  Object.assign(t, {
    highlight: i,
    highlightAuto: m,
    highlightAll: S,
    highlightElement: _,
    // TODO: Remove with v12 API
    highlightBlock: F,
    configure: y,
    initHighlighting: E,
    initHighlightingOnLoad: A,
    registerLanguage: D,
    unregisterLanguage: C,
    listLanguages: P,
    getLanguage: N,
    registerAliases: T,
    autoDetection: j,
    inherit: At,
    addPlugin: J,
    removePlugin: q
  }), t.debugMode = function() {
    c = !1;
  }, t.safeMode = function() {
    c = !0;
  }, t.versionString = Ia, t.regex = {
    concat: be,
    lookahead: pn,
    either: vt,
    optional: Qn,
    anyNumberOfTimes: Wn
  };
  for (const u in Te)
    typeof Te[u] == "object" && bn(Te[u]);
  return Object.assign(t, Te), t;
}, _e = kn({});
_e.newInstance = () => kn({});
var Ba = _e;
_e.HighlightJS = _e;
_e.default = _e;
var $e, Ct;
function $a() {
  if (Ct)
    return $e;
  Ct = 1;
  function t(e) {
    const n = e.regex, r = n.concat(/[\p{L}_]/u, n.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), c = /[\p{L}0-9._:-]+/u, o = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }, a = {
      begin: /\s/,
      contains: [
        {
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    }, s = e.inherit(a, {
      begin: /\(/,
      end: /\)/
    }), d = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), i = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: c,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [o]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [o]
                },
                { begin: /[^\s"'=<>`]+/ }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            a,
            l,
            d,
            s,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    a,
                    s,
                    l,
                    d
                  ]
                }
              ]
            }
          ]
        },
        e.COMMENT(
          /<!--/,
          /-->/,
          { relevance: 10 }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        o,
        // xml processing instructions
        {
          className: "meta",
          end: /\?>/,
          variants: [
            {
              begin: /<\?xml/,
              relevance: 10,
              contains: [
                l
              ]
            },
            {
              begin: /<\?[a-z][a-z0-9]+/
            }
          ]
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending bracket.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [i],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [i],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: n.concat(
            /</,
            n.lookahead(n.concat(
              r,
              // <tag/>
              // <tag>
              // <tag ...
              n.either(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0,
              starts: i
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: n.concat(
            /<\//,
            n.lookahead(n.concat(
              r,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: r,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: !0
            }
          ]
        }
      ]
    };
  }
  return $e = t, $e;
}
var ze, Tt;
function za() {
  if (Tt)
    return ze;
  Tt = 1;
  function t(e) {
    const n = e.regex, r = {}, c = {
      begin: /\$\{/,
      end: /\}/,
      contains: [
        "self",
        {
          begin: /:-/,
          contains: [r]
        }
        // default values
      ]
    };
    Object.assign(r, {
      className: "variable",
      variants: [
        { begin: n.concat(
          /\$[\w\d#@][\w\d_]*/,
          // negative look-ahead tries to avoid matching patterns that are not
          // Perl at all like $ident$, @ident@, etc.
          "(?![\\w\\d])(?![$])"
        ) },
        c
      ]
    });
    const o = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [e.BACKSLASH_ESCAPE]
    }, a = e.inherit(
      e.COMMENT(),
      {
        match: [
          /(^|\s)/,
          /#.*$/
        ],
        scope: {
          2: "comment"
        }
      }
    ), s = {
      begin: /<<-?\s*(?=\w+)/,
      starts: { contains: [
        e.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })
      ] }
    }, d = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        e.BACKSLASH_ESCAPE,
        r,
        o
      ]
    };
    o.contains.push(d);
    const l = {
      match: /\\"/
    }, i = {
      className: "string",
      begin: /'/,
      end: /'/
    }, g = {
      match: /\\'/
    }, b = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        {
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        },
        e.NUMBER_MODE,
        r
      ]
    }, m = [
      "fish",
      "bash",
      "zsh",
      "sh",
      "csh",
      "ksh",
      "tcsh",
      "dash",
      "scsh"
    ], h = e.SHEBANG({
      binary: `(${m.join("|")})`,
      relevance: 10
    }), _ = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    }, y = [
      "if",
      "then",
      "else",
      "elif",
      "fi",
      "time",
      "for",
      "while",
      "until",
      "in",
      "do",
      "done",
      "case",
      "esac",
      "coproc",
      "function",
      "select"
    ], E = [
      "true",
      "false"
    ], A = { match: /(\/[a-z._-]+)+/ }, w = [
      "break",
      "cd",
      "continue",
      "eval",
      "exec",
      "exit",
      "export",
      "getopts",
      "hash",
      "pwd",
      "readonly",
      "return",
      "shift",
      "test",
      "times",
      "trap",
      "umask",
      "unset"
    ], S = [
      "alias",
      "bind",
      "builtin",
      "caller",
      "command",
      "declare",
      "echo",
      "enable",
      "help",
      "let",
      "local",
      "logout",
      "mapfile",
      "printf",
      "read",
      "readarray",
      "source",
      "sudo",
      "type",
      "typeset",
      "ulimit",
      "unalias"
    ], D = [
      "autoload",
      "bg",
      "bindkey",
      "bye",
      "cap",
      "chdir",
      "clone",
      "comparguments",
      "compcall",
      "compctl",
      "compdescribe",
      "compfiles",
      "compgroups",
      "compquote",
      "comptags",
      "comptry",
      "compvalues",
      "dirs",
      "disable",
      "disown",
      "echotc",
      "echoti",
      "emulate",
      "fc",
      "fg",
      "float",
      "functions",
      "getcap",
      "getln",
      "history",
      "integer",
      "jobs",
      "kill",
      "limit",
      "log",
      "noglob",
      "popd",
      "print",
      "pushd",
      "pushln",
      "rehash",
      "sched",
      "setcap",
      "setopt",
      "stat",
      "suspend",
      "ttyctl",
      "unfunction",
      "unhash",
      "unlimit",
      "unsetopt",
      "vared",
      "wait",
      "whence",
      "where",
      "which",
      "zcompile",
      "zformat",
      "zftp",
      "zle",
      "zmodload",
      "zparseopts",
      "zprof",
      "zpty",
      "zregexparse",
      "zsocket",
      "zstyle",
      "ztcp"
    ], C = [
      "chcon",
      "chgrp",
      "chown",
      "chmod",
      "cp",
      "dd",
      "df",
      "dir",
      "dircolors",
      "ln",
      "ls",
      "mkdir",
      "mkfifo",
      "mknod",
      "mktemp",
      "mv",
      "realpath",
      "rm",
      "rmdir",
      "shred",
      "sync",
      "touch",
      "truncate",
      "vdir",
      "b2sum",
      "base32",
      "base64",
      "cat",
      "cksum",
      "comm",
      "csplit",
      "cut",
      "expand",
      "fmt",
      "fold",
      "head",
      "join",
      "md5sum",
      "nl",
      "numfmt",
      "od",
      "paste",
      "ptx",
      "pr",
      "sha1sum",
      "sha224sum",
      "sha256sum",
      "sha384sum",
      "sha512sum",
      "shuf",
      "sort",
      "split",
      "sum",
      "tac",
      "tail",
      "tr",
      "tsort",
      "unexpand",
      "uniq",
      "wc",
      "arch",
      "basename",
      "chroot",
      "date",
      "dirname",
      "du",
      "echo",
      "env",
      "expr",
      "factor",
      // "false", // keyword literal already
      "groups",
      "hostid",
      "id",
      "link",
      "logname",
      "nice",
      "nohup",
      "nproc",
      "pathchk",
      "pinky",
      "printenv",
      "printf",
      "pwd",
      "readlink",
      "runcon",
      "seq",
      "sleep",
      "stat",
      "stdbuf",
      "stty",
      "tee",
      "test",
      "timeout",
      // "true", // keyword literal already
      "tty",
      "uname",
      "unlink",
      "uptime",
      "users",
      "who",
      "whoami",
      "yes"
    ];
    return {
      name: "Bash",
      aliases: [
        "sh",
        "zsh"
      ],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: y,
        literal: E,
        built_in: [
          ...w,
          ...S,
          // Shell modifiers
          "set",
          "shopt",
          ...D,
          ...C
        ]
      },
      contains: [
        h,
        // to catch known shells and boost relevancy
        e.SHEBANG(),
        // to catch unknown shells but still highlight the shebang
        _,
        b,
        a,
        s,
        A,
        d,
        l,
        i,
        g,
        r
      ]
    };
  }
  return ze = t, ze;
}
var je, Rt;
function ja() {
  if (Rt)
    return je;
  Rt = 1;
  function t(e) {
    const n = e.regex, r = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), c = "decltype\\(auto\\)", o = "[a-zA-Z_]\\w*::", a = "(" + c + "|" + n.optional(o) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", s = {
      className: "type",
      variants: [
        { begin: "\\b[a-z\\d_]*_t\\b" },
        { match: /\batomic_[a-z]{3,6}\b/ }
      ]
    }, d = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, l = {
      className: "number",
      variants: [
        { match: /\b(0b[01']+)/ },
        { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
        { match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
        { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
      ],
      relevance: 0
    }, i = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        e.inherit(d, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        e.C_BLOCK_COMMENT_MODE
      ]
    }, g = {
      className: "title",
      begin: n.optional(o) + e.IDENT_RE,
      relevance: 0
    }, b = n.optional(o) + e.IDENT_RE + "\\s*\\(", m = {
      keyword: [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "typeof",
        "typeof_unqual",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        // aliases
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        // not a C keyword but is, for all intents and purposes, treated exactly like one.
        "_Pragma"
      ],
      type: [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_BitInt",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal96",
        "_Decimal128",
        "_Decimal64x",
        "_Decimal128x",
        "_Float16",
        "_Float32",
        "_Float64",
        "_Float128",
        "_Float32x",
        "_Float64x",
        "_Float128x",
        // modifiers
        "const",
        "static",
        "constexpr",
        // aliases
        "complex",
        "bool",
        "imaginary"
      ],
      literal: "true false NULL",
      // TODO: apply hinting work similar to what was done in cpp.js
      built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    }, h = [
      i,
      s,
      r,
      e.C_BLOCK_COMMENT_MODE,
      l,
      d
    ], _ = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: m,
      contains: h.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: m,
          contains: h.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, y = {
      begin: "(" + a + "[\\*&\\s]+)+" + b,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: m,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: c,
          keywords: m,
          relevance: 0
        },
        {
          begin: b,
          returnBegin: !0,
          contains: [e.inherit(g, { className: "title.function" })],
          relevance: 0
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: m,
          relevance: 0,
          contains: [
            r,
            e.C_BLOCK_COMMENT_MODE,
            d,
            l,
            s,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: m,
              relevance: 0,
              contains: [
                "self",
                r,
                e.C_BLOCK_COMMENT_MODE,
                d,
                l,
                s
              ]
            }
          ]
        },
        s,
        r,
        e.C_BLOCK_COMMENT_MODE,
        i
      ]
    };
    return {
      name: "C",
      aliases: ["h"],
      keywords: m,
      // Until differentiations are added between `c` and `cpp`, `c` will
      // not be auto-detected to avoid auto-detect conflicts between C and C++
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(
        _,
        y,
        h,
        [
          i,
          {
            begin: e.IDENT_RE + "::",
            keywords: m
          },
          {
            className: "class",
            beginKeywords: "enum class struct union",
            end: /[{;:<>=]/,
            contains: [
              { beginKeywords: "final class struct" },
              e.TITLE_MODE
            ]
          }
        ]
      ),
      exports: {
        preprocessor: i,
        strings: d,
        keywords: m
      }
    };
  }
  return je = t, je;
}
var Fe, It;
function Fa() {
  if (It)
    return Fe;
  It = 1;
  function t(e) {
    const n = e.regex, r = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), c = "decltype\\(auto\\)", o = "[a-zA-Z_]\\w*::", a = "(?!struct)(" + c + "|" + n.optional(o) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", s = {
      className: "type",
      begin: "\\b[a-z\\d_]*_t\\b"
    }, d = {
      className: "string",
      variants: [
        {
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE]
        },
        {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        },
        e.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })
      ]
    }, l = {
      className: "number",
      variants: [
        // Floating-point literal.
        {
          begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
        },
        // Integer literal.
        {
          begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
          // Note: there are user-defined literal suffixes too, but perhaps having the custom suffix not part of the
          // literal highlight actually makes it stand out more.
        }
      ],
      relevance: 0
    }, i = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
      contains: [
        {
          begin: /\\\n/,
          relevance: 0
        },
        e.inherit(d, { className: "string" }),
        {
          className: "string",
          begin: /<.*?>/
        },
        r,
        e.C_BLOCK_COMMENT_MODE
      ]
    }, g = {
      className: "title",
      begin: n.optional(o) + e.IDENT_RE,
      relevance: 0
    }, b = n.optional(o) + e.IDENT_RE + "\\s*\\(", m = [
      "alignas",
      "alignof",
      "and",
      "and_eq",
      "asm",
      "atomic_cancel",
      "atomic_commit",
      "atomic_noexcept",
      "auto",
      "bitand",
      "bitor",
      "break",
      "case",
      "catch",
      "class",
      "co_await",
      "co_return",
      "co_yield",
      "compl",
      "concept",
      "const_cast|10",
      "consteval",
      "constexpr",
      "constinit",
      "continue",
      "decltype",
      "default",
      "delete",
      "do",
      "dynamic_cast|10",
      "else",
      "enum",
      "explicit",
      "export",
      "extern",
      "false",
      "final",
      "for",
      "friend",
      "goto",
      "if",
      "import",
      "inline",
      "module",
      "mutable",
      "namespace",
      "new",
      "noexcept",
      "not",
      "not_eq",
      "nullptr",
      "operator",
      "or",
      "or_eq",
      "override",
      "private",
      "protected",
      "public",
      "reflexpr",
      "register",
      "reinterpret_cast|10",
      "requires",
      "return",
      "sizeof",
      "static_assert",
      "static_cast|10",
      "struct",
      "switch",
      "synchronized",
      "template",
      "this",
      "thread_local",
      "throw",
      "transaction_safe",
      "transaction_safe_dynamic",
      "true",
      "try",
      "typedef",
      "typeid",
      "typename",
      "union",
      "using",
      "virtual",
      "volatile",
      "while",
      "xor",
      "xor_eq"
    ], h = [
      "bool",
      "char",
      "char16_t",
      "char32_t",
      "char8_t",
      "double",
      "float",
      "int",
      "long",
      "short",
      "void",
      "wchar_t",
      "unsigned",
      "signed",
      "const",
      "static"
    ], _ = [
      "any",
      "auto_ptr",
      "barrier",
      "binary_semaphore",
      "bitset",
      "complex",
      "condition_variable",
      "condition_variable_any",
      "counting_semaphore",
      "deque",
      "false_type",
      "flat_map",
      "flat_set",
      "future",
      "imaginary",
      "initializer_list",
      "istringstream",
      "jthread",
      "latch",
      "lock_guard",
      "multimap",
      "multiset",
      "mutex",
      "optional",
      "ostringstream",
      "packaged_task",
      "pair",
      "promise",
      "priority_queue",
      "queue",
      "recursive_mutex",
      "recursive_timed_mutex",
      "scoped_lock",
      "set",
      "shared_future",
      "shared_lock",
      "shared_mutex",
      "shared_timed_mutex",
      "shared_ptr",
      "stack",
      "string_view",
      "stringstream",
      "timed_mutex",
      "thread",
      "true_type",
      "tuple",
      "unique_lock",
      "unique_ptr",
      "unordered_map",
      "unordered_multimap",
      "unordered_multiset",
      "unordered_set",
      "variant",
      "vector",
      "weak_ptr",
      "wstring",
      "wstring_view"
    ], y = [
      "abort",
      "abs",
      "acos",
      "apply",
      "as_const",
      "asin",
      "atan",
      "atan2",
      "calloc",
      "ceil",
      "cerr",
      "cin",
      "clog",
      "cos",
      "cosh",
      "cout",
      "declval",
      "endl",
      "exchange",
      "exit",
      "exp",
      "fabs",
      "floor",
      "fmod",
      "forward",
      "fprintf",
      "fputs",
      "free",
      "frexp",
      "fscanf",
      "future",
      "invoke",
      "isalnum",
      "isalpha",
      "iscntrl",
      "isdigit",
      "isgraph",
      "islower",
      "isprint",
      "ispunct",
      "isspace",
      "isupper",
      "isxdigit",
      "labs",
      "launder",
      "ldexp",
      "log",
      "log10",
      "make_pair",
      "make_shared",
      "make_shared_for_overwrite",
      "make_tuple",
      "make_unique",
      "malloc",
      "memchr",
      "memcmp",
      "memcpy",
      "memset",
      "modf",
      "move",
      "pow",
      "printf",
      "putchar",
      "puts",
      "realloc",
      "scanf",
      "sin",
      "sinh",
      "snprintf",
      "sprintf",
      "sqrt",
      "sscanf",
      "std",
      "stderr",
      "stdin",
      "stdout",
      "strcat",
      "strchr",
      "strcmp",
      "strcpy",
      "strcspn",
      "strlen",
      "strncat",
      "strncmp",
      "strncpy",
      "strpbrk",
      "strrchr",
      "strspn",
      "strstr",
      "swap",
      "tan",
      "tanh",
      "terminate",
      "to_underlying",
      "tolower",
      "toupper",
      "vfprintf",
      "visit",
      "vprintf",
      "vsprintf"
    ], E = {
      type: h,
      keyword: m,
      literal: [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
      ],
      built_in: ["_Pragma"],
      _type_hints: _
    }, A = {
      className: "function.dispatch",
      relevance: 0,
      keywords: {
        // Only for relevance, not highlighting.
        _hint: y
      },
      begin: n.concat(
        /\b/,
        /(?!decltype)/,
        /(?!if)/,
        /(?!for)/,
        /(?!switch)/,
        /(?!while)/,
        e.IDENT_RE,
        n.lookahead(/(<[^<>]+>|)\s*\(/)
      )
    }, w = [
      A,
      i,
      s,
      r,
      e.C_BLOCK_COMMENT_MODE,
      l,
      d
    ], S = {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [
        {
          begin: /=/,
          end: /;/
        },
        {
          begin: /\(/,
          end: /\)/
        },
        {
          beginKeywords: "new throw return else",
          end: /;/
        }
      ],
      keywords: E,
      contains: w.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: E,
          contains: w.concat(["self"]),
          relevance: 0
        }
      ]),
      relevance: 0
    }, D = {
      className: "function",
      begin: "(" + a + "[\\*&\\s]+)+" + b,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: E,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [
        {
          // to prevent it from being confused as the function title
          begin: c,
          keywords: E,
          relevance: 0
        },
        {
          begin: b,
          returnBegin: !0,
          contains: [g],
          relevance: 0
        },
        // needed because we do not have look-behind on the below rule
        // to prevent it from grabbing the final : in a :: pair
        {
          begin: /::/,
          relevance: 0
        },
        // initializers
        {
          begin: /:/,
          endsWithParent: !0,
          contains: [
            d,
            l
          ]
        },
        // allow for multiple declarations, e.g.:
        // extern void f(int), g(char);
        {
          relevance: 0,
          match: /,/
        },
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: E,
          relevance: 0,
          contains: [
            r,
            e.C_BLOCK_COMMENT_MODE,
            d,
            l,
            s,
            // Count matching parentheses.
            {
              begin: /\(/,
              end: /\)/,
              keywords: E,
              relevance: 0,
              contains: [
                "self",
                r,
                e.C_BLOCK_COMMENT_MODE,
                d,
                l,
                s
              ]
            }
          ]
        },
        s,
        r,
        e.C_BLOCK_COMMENT_MODE,
        i
      ]
    };
    return {
      name: "C++",
      aliases: [
        "cc",
        "c++",
        "h++",
        "hpp",
        "hh",
        "hxx",
        "cxx"
      ],
      keywords: E,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(
        S,
        D,
        A,
        w,
        [
          i,
          {
            // containers: ie, `vector <int> rooms (9);`
            begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
            end: ">",
            keywords: E,
            contains: [
              "self",
              s
            ]
          },
          {
            begin: e.IDENT_RE + "::",
            keywords: E
          },
          {
            match: [
              // extra complexity to deal with `enum class` and `enum struct`
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/
            ],
            className: {
              1: "keyword",
              3: "title.class"
            }
          }
        ]
      )
    };
  }
  return Fe = t, Fe;
}
var Ue, Dt;
function Ua() {
  if (Dt)
    return Ue;
  Dt = 1;
  function t(e) {
    const n = [
      "bool",
      "byte",
      "char",
      "decimal",
      "delegate",
      "double",
      "dynamic",
      "enum",
      "float",
      "int",
      "long",
      "nint",
      "nuint",
      "object",
      "sbyte",
      "short",
      "string",
      "ulong",
      "uint",
      "ushort"
    ], r = [
      "public",
      "private",
      "protected",
      "static",
      "internal",
      "protected",
      "abstract",
      "async",
      "extern",
      "override",
      "unsafe",
      "virtual",
      "new",
      "sealed",
      "partial"
    ], c = [
      "default",
      "false",
      "null",
      "true"
    ], o = [
      "abstract",
      "as",
      "base",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "do",
      "else",
      "event",
      "explicit",
      "extern",
      "finally",
      "fixed",
      "for",
      "foreach",
      "goto",
      "if",
      "implicit",
      "in",
      "interface",
      "internal",
      "is",
      "lock",
      "namespace",
      "new",
      "operator",
      "out",
      "override",
      "params",
      "private",
      "protected",
      "public",
      "readonly",
      "record",
      "ref",
      "return",
      "scoped",
      "sealed",
      "sizeof",
      "stackalloc",
      "static",
      "struct",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "unchecked",
      "unsafe",
      "using",
      "virtual",
      "void",
      "volatile",
      "while"
    ], a = [
      "add",
      "alias",
      "and",
      "ascending",
      "args",
      "async",
      "await",
      "by",
      "descending",
      "dynamic",
      "equals",
      "file",
      "from",
      "get",
      "global",
      "group",
      "init",
      "into",
      "join",
      "let",
      "nameof",
      "not",
      "notnull",
      "on",
      "or",
      "orderby",
      "partial",
      "record",
      "remove",
      "required",
      "scoped",
      "select",
      "set",
      "unmanaged",
      "value|0",
      "var",
      "when",
      "where",
      "with",
      "yield"
    ], s = {
      keyword: o.concat(a),
      built_in: n,
      literal: c
    }, d = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), l = {
      className: "number",
      variants: [
        { begin: "\\b(0b[01']+)" },
        { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
        { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
      ],
      relevance: 0
    }, i = {
      className: "string",
      begin: /"""("*)(?!")(.|\n)*?"""\1/,
      relevance: 1
    }, g = {
      className: "string",
      begin: '@"',
      end: '"',
      contains: [{ begin: '""' }]
    }, b = e.inherit(g, { illegal: /\n/ }), m = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: s
    }, h = e.inherit(m, { illegal: /\n/ }), _ = {
      className: "string",
      begin: /\$"/,
      end: '"',
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        e.BACKSLASH_ESCAPE,
        h
      ]
    }, y = {
      className: "string",
      begin: /\$@"/,
      end: '"',
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        m
      ]
    }, E = e.inherit(y, {
      illegal: /\n/,
      contains: [
        { begin: /\{\{/ },
        { begin: /\}\}/ },
        { begin: '""' },
        h
      ]
    });
    m.contains = [
      y,
      _,
      g,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      l,
      e.C_BLOCK_COMMENT_MODE
    ], h.contains = [
      E,
      _,
      b,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      l,
      e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
    ];
    const A = { variants: [
      i,
      y,
      _,
      g,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ] }, w = {
      begin: "<",
      end: ">",
      contains: [
        { beginKeywords: "in out" },
        d
      ]
    }, S = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", D = {
      // prevents expressions like `@class` from incorrect flagging
      // `class` as a keyword
      begin: "@" + e.IDENT_RE,
      relevance: 0
    };
    return {
      name: "C#",
      aliases: [
        "cs",
        "c#"
      ],
      keywords: s,
      illegal: /::/,
      contains: [
        e.COMMENT(
          "///",
          "$",
          {
            returnBegin: !0,
            contains: [
              {
                className: "doctag",
                variants: [
                  {
                    begin: "///",
                    relevance: 0
                  },
                  { begin: "<!--|-->" },
                  {
                    begin: "</?",
                    end: ">"
                  }
                ]
              }
            ]
          }
        ),
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
        },
        A,
        l,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            d,
            w,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            d,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [
            d,
            w,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // [Attributes("")]
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/
            }
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new return throw await else",
          relevance: 0
        },
        {
          className: "function",
          begin: "(" + S + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: s,
          contains: [
            // prevents these from being highlighted `title`
            {
              beginKeywords: r.join(" "),
              relevance: 0
            },
            {
              begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: !0,
              contains: [
                e.TITLE_MODE,
                w
              ],
              relevance: 0
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: s,
              relevance: 0,
              contains: [
                A,
                l,
                e.C_BLOCK_COMMENT_MODE
              ]
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        D
      ]
    };
  }
  return Ue = t, Ue;
}
var Pe, Lt;
function Pa() {
  if (Lt)
    return Pe;
  Lt = 1;
  const t = (l) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: l.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: l.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], n = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...n
  ], c = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), o = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), a = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), s = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse();
  function d(l) {
    const i = l.regex, g = t(l), b = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, m = "and or not only", h = /@-?\w[\w]*(-\w+)*/, _ = "[a-zA-Z-][a-zA-Z0-9_-]*", y = [
      l.APOS_STRING_MODE,
      l.QUOTE_STRING_MODE
    ];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: {
        // for visual continuity with `tag {}` and because we
        // don't have a great class for this?
        keyframePosition: "selector-tag"
      },
      contains: [
        g.BLOCK_COMMENT,
        b,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        g.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\." + _,
          relevance: 0
        },
        g.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + o.join("|") + ")" },
            { begin: ":(:)?(" + a.join("|") + ")" }
          ]
        },
        // we may actually need this (12/2020)
        // { // pseudo-selector params
        //   begin: /\(/,
        //   end: /\)/,
        //   contains: [ hljs.CSS_NUMBER_MODE ]
        // },
        g.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + s.join("|") + ")\\b"
        },
        // attribute values
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            g.BLOCK_COMMENT,
            g.HEXCOLOR,
            g.IMPORTANT,
            g.CSS_NUMBER_MODE,
            ...y,
            // needed to highlight these as strings and to avoid issues with
            // illegal characters that might be inside urls that would tigger the
            // languages illegal stack
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              // from keywords
              keywords: { built_in: "url data-uri" },
              contains: [
                ...y,
                {
                  className: "string",
                  // any character other than `)` as in `url()` will be the start
                  // of a string, which ends with `)` (from the parent mode)
                  begin: /[^)]/,
                  endsWithParent: !0,
                  excludeEnd: !0
                }
              ]
            },
            g.FUNCTION_DISPATCH
          ]
        },
        {
          begin: i.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          // break on Less variables @var: ...
          contains: [
            {
              className: "keyword",
              begin: h
            },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: m,
                attribute: c.join(" ")
              },
              contains: [
                {
                  begin: /[a-z-]+(?=:)/,
                  className: "attribute"
                },
                ...y,
                g.CSS_NUMBER_MODE
              ]
            }
          ]
        },
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b"
        }
      ]
    };
  }
  return Pe = d, Pe;
}
var He, Bt;
function Ha() {
  if (Bt)
    return He;
  Bt = 1;
  function t(e) {
    const n = e.regex, r = {
      begin: /<\/?[A-Za-z_]/,
      end: ">",
      subLanguage: "xml",
      relevance: 0
    }, c = {
      begin: "^[-\\*]{3,}",
      end: "$"
    }, o = {
      className: "code",
      variants: [
        // TODO: fix to allow these to work with sublanguage also
        { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
        { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
        // needed to allow markdown as a sublanguage to work
        {
          begin: "```",
          end: "```+[ ]*$"
        },
        {
          begin: "~~~",
          end: "~~~+[ ]*$"
        },
        { begin: "`.+?`" },
        {
          begin: "(?=^( {4}|\\t))",
          // use contains to gobble up multiple lines to allow the block to be whatever size
          // but only have a single open/close tag vs one per line
          contains: [
            {
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }
          ],
          relevance: 0
        }
      ]
    }, a = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: !0
    }, s = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }
      ]
    }, d = /[A-Za-z][A-Za-z0-9+.-]*/, l = {
      variants: [
        // too much like nested array access in so many languages
        // to have any real relevance
        {
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        },
        // popular internet URLs
        {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        },
        {
          begin: n.concat(/\[.+?\]\(/, d, /:\/\/.*?\)/),
          relevance: 2
        },
        // relative urls
        {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        },
        // whatever else, lower relevance (might not be a link at all)
        {
          begin: /\[.*?\]\(.*?\)/,
          relevance: 0
        }
      ],
      returnBegin: !0,
      contains: [
        {
          // empty strings for alt or link text
          match: /\[(?=\])/
        },
        {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        },
        {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }
      ]
    }, i = {
      className: "strong",
      contains: [],
      // defined later
      variants: [
        {
          begin: /_{2}(?!\s)/,
          end: /_{2}/
        },
        {
          begin: /\*{2}(?!\s)/,
          end: /\*{2}/
        }
      ]
    }, g = {
      className: "emphasis",
      contains: [],
      // defined later
      variants: [
        {
          begin: /\*(?![*\s])/,
          end: /\*/
        },
        {
          begin: /_(?![_\s])/,
          end: /_/,
          relevance: 0
        }
      ]
    }, b = e.inherit(i, { contains: [] }), m = e.inherit(g, { contains: [] });
    i.contains.push(m), g.contains.push(b);
    let h = [
      r,
      l
    ];
    return [
      i,
      g,
      b,
      m
    ].forEach((_) => {
      _.contains = _.contains.concat(h);
    }), h = h.concat(i, g), {
      name: "Markdown",
      aliases: [
        "md",
        "mkdown",
        "mkd"
      ],
      contains: [
        {
          className: "section",
          variants: [
            {
              begin: "^#{1,6}",
              end: "$",
              contains: h
            },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                { begin: "^[=-]*$" },
                {
                  begin: "^",
                  end: "\\n",
                  contains: h
                }
              ]
            }
          ]
        },
        r,
        a,
        i,
        g,
        {
          className: "quote",
          begin: "^>\\s+",
          contains: h,
          end: "$"
        },
        o,
        c,
        l,
        s,
        {
          //https://spec.commonmark.org/0.31.2/#entity-references
          scope: "literal",
          match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
        }
      ]
    };
  }
  return He = t, He;
}
var Ke, $t;
function Ka() {
  if ($t)
    return Ke;
  $t = 1;
  function t(e) {
    const n = e.regex;
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: n.either(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          )
        },
        {
          className: "comment",
          variants: [
            {
              begin: n.either(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/
            },
            { match: /^\*{15}$/ }
          ]
        },
        {
          className: "addition",
          begin: /^\+/,
          end: /$/
        },
        {
          className: "deletion",
          begin: /^-/,
          end: /$/
        },
        {
          className: "addition",
          begin: /^!/,
          end: /$/
        }
      ]
    };
  }
  return Ke = t, Ke;
}
var qe, zt;
function qa() {
  if (zt)
    return qe;
  zt = 1;
  function t(e) {
    const n = e.regex, r = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", c = n.either(
      /\b([A-Z]+[a-z0-9]+)+/,
      // ends in caps
      /\b([A-Z]+[a-z0-9]+)+[A-Z]+/
    ), o = n.concat(c, /(::\w+)*/), a = {
      "variable.constant": [
        "__FILE__",
        "__LINE__",
        "__ENCODING__"
      ],
      "variable.language": [
        "self",
        "super"
      ],
      keyword: [
        "alias",
        "and",
        "begin",
        "BEGIN",
        "break",
        "case",
        "class",
        "defined",
        "do",
        "else",
        "elsif",
        "end",
        "END",
        "ensure",
        "for",
        "if",
        "in",
        "module",
        "next",
        "not",
        "or",
        "redo",
        "require",
        "rescue",
        "retry",
        "return",
        "then",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield",
        "include",
        "extend",
        "prepend",
        "public",
        "private",
        "protected",
        "raise",
        "throw"
      ],
      built_in: [
        "proc",
        "lambda",
        "attr_accessor",
        "attr_reader",
        "attr_writer",
        "define_method",
        "private_constant",
        "module_function"
      ],
      literal: [
        "true",
        "false",
        "nil"
      ]
    }, s = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    }, d = {
      begin: "#<",
      end: ">"
    }, l = [
      e.COMMENT(
        "#",
        "$",
        { contains: [s] }
      ),
      e.COMMENT(
        "^=begin",
        "^=end",
        {
          contains: [s],
          relevance: 10
        }
      ),
      e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
    ], i = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: a
    }, g = {
      className: "string",
      contains: [
        e.BACKSLASH_ESCAPE,
        i
      ],
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        {
          begin: /`/,
          end: /`/
        },
        {
          begin: /%[qQwWx]?\(/,
          end: /\)/
        },
        {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        },
        {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        },
        {
          begin: /%[qQwWx]?</,
          end: />/
        },
        {
          begin: /%[qQwWx]?\//,
          end: /\//
        },
        {
          begin: /%[qQwWx]?%/,
          end: /%/
        },
        {
          begin: /%[qQwWx]?-/,
          end: /-/
        },
        {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        },
        // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
        // where ? is the last character of a preceding identifier, as in: `func?4`
        { begin: /\B\?(\\\d{1,3})/ },
        { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
        { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
        { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
        { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
        { begin: /\B\?\\?\S/ },
        // heredocs
        {
          // this guard makes sure that we have an entire heredoc and not a false
          // positive (auto-detect, etc.)
          begin: n.concat(
            /<<[-~]?'?/,
            n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
          ),
          contains: [
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [
                e.BACKSLASH_ESCAPE,
                i
              ]
            })
          ]
        }
      ]
    }, b = "[1-9](_?[0-9])*|0", m = "[0-9](_?[0-9])*", h = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal integer/float, optionally exponential or rational, optionally imaginary
        { begin: `\\b(${b})(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b` },
        // explicit decimal/binary/octal/hexadecimal integer,
        // optionally rational and/or imaginary
        { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
        // 0-prefixed implicit octal integer, optionally rational and/or imaginary
        { begin: "\\b0(_?[0-7])+r?i?\\b" }
      ]
    }, _ = {
      variants: [
        {
          match: /\(\)/
        },
        {
          className: "params",
          begin: /\(/,
          end: /(?=\))/,
          excludeBegin: !0,
          endsParent: !0,
          keywords: a
        }
      ]
    }, y = [
      g,
      {
        variants: [
          {
            match: [
              /class\s+/,
              o,
              /\s+<\s+/,
              o
            ]
          },
          {
            match: [
              /\b(class|module)\s+/,
              o
            ]
          }
        ],
        scope: {
          2: "title.class",
          4: "title.class.inherited"
        },
        keywords: a
      },
      {
        match: [
          /(include|extend)\s+/,
          o
        ],
        scope: {
          2: "title.class"
        },
        keywords: a
      },
      {
        relevance: 0,
        match: [
          o,
          /\.new[. (]/
        ],
        scope: {
          1: "title.class"
        }
      },
      {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
      },
      {
        relevance: 0,
        match: c,
        scope: "title.class"
      },
      {
        match: [
          /def/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [
          _
        ]
      },
      {
        // swallow namespace qualifiers before symbols
        begin: e.IDENT_RE + "::"
      },
      {
        className: "symbol",
        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      },
      {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [
          g,
          { begin: r }
        ],
        relevance: 0
      },
      h,
      {
        // negative-look forward attempts to prevent false matches like:
        // @ident@ or $ident$ that might indicate this is not ruby at all
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      },
      {
        className: "params",
        begin: /\|(?!=)/,
        end: /\|/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        // this could be a lot of things (in other languages) other than params
        keywords: a
      },
      {
        // regexp container
        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [
              e.BACKSLASH_ESCAPE,
              i
            ],
            illegal: /\n/,
            variants: [
              {
                begin: "/",
                end: "/[a-z]*"
              },
              {
                begin: /%r\{/,
                end: /\}[a-z]*/
              },
              {
                begin: "%r\\(",
                end: "\\)[a-z]*"
              },
              {
                begin: "%r!",
                end: "![a-z]*"
              },
              {
                begin: "%r\\[",
                end: "\\][a-z]*"
              }
            ]
          }
        ].concat(d, l),
        relevance: 0
      }
    ].concat(d, l);
    i.contains = y, _.contains = y;
    const E = [
      {
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: y
        }
      },
      {
        className: "meta.prompt",
        begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
        starts: {
          end: "$",
          keywords: a,
          contains: y
        }
      }
    ];
    return l.unshift(d), {
      name: "Ruby",
      aliases: [
        "rb",
        "gemspec",
        "podspec",
        "thor",
        "irb"
      ],
      keywords: a,
      illegal: /\/\*/,
      contains: [e.SHEBANG({ binary: "ruby" })].concat(E).concat(l).concat(y)
    };
  }
  return qe = t, qe;
}
var Ze, jt;
function Za() {
  if (jt)
    return Ze;
  jt = 1;
  function t(e) {
    const n = {
      keyword: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var"
      ],
      type: [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune"
      ],
      literal: [
        "true",
        "false",
        "iota",
        "nil"
      ],
      built_in: [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete"
      ]
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: n,
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            {
              begin: "`",
              end: "`"
            }
          ]
        },
        {
          className: "number",
          variants: [
            {
              match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
              // hex without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
              // hex with a present digit before . (making a digit afterwards optional)
              relevance: 0
            },
            {
              match: /-?\b0[oO](_?[0-7])*i?/,
              // leading 0o octal
              relevance: 0
            },
            {
              match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
              // decimal without a present digit before . (making a digit afterwards required)
              relevance: 0
            },
            {
              match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
              // decimal with a present digit before . (making a digit afterwards optional)
              relevance: 0
            }
          ]
        },
        {
          begin: /:=/
          // relevance booster
        },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            e.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: n,
              illegal: /["']/
            }
          ]
        }
      ]
    };
  }
  return Ze = t, Ze;
}
var Ge, Ft;
function Ga() {
  if (Ft)
    return Ge;
  Ft = 1;
  function t(e) {
    const n = e.regex, r = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: "GraphQL",
      aliases: ["gql"],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          "query",
          "mutation",
          "subscription",
          "type",
          "input",
          "schema",
          "directive",
          "interface",
          "union",
          "scalar",
          "fragment",
          "enum",
          "on"
        ],
        literal: [
          "true",
          "false",
          "null"
        ]
      },
      contains: [
        e.HASH_COMMENT_MODE,
        e.QUOTE_STRING_MODE,
        e.NUMBER_MODE,
        {
          scope: "punctuation",
          match: /[.]{3}/,
          relevance: 0
        },
        {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0
        },
        {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: !0,
          relevance: 0
        },
        {
          scope: "meta",
          match: /@\w+/,
          excludeEnd: !0
        },
        {
          scope: "symbol",
          begin: n.concat(r, n.lookahead(/\s*:/)),
          relevance: 0
        }
      ],
      illegal: [
        /[;<']/,
        /BEGIN/
      ]
    };
  }
  return Ge = t, Ge;
}
var We, Ut;
function Wa() {
  if (Ut)
    return We;
  Ut = 1;
  function t(e) {
    const n = e.regex, r = {
      className: "number",
      relevance: 0,
      variants: [
        { begin: /([+-]+)?[\d]+_[\d_]+/ },
        { begin: e.NUMBER_RE }
      ]
    }, c = e.COMMENT();
    c.variants = [
      {
        begin: /;/,
        end: /$/
      },
      {
        begin: /#/,
        end: /$/
      }
    ];
    const o = {
      className: "variable",
      variants: [
        { begin: /\$[\w\d"][\w\d_]*/ },
        { begin: /\$\{(.*?)\}/ }
      ]
    }, a = {
      className: "literal",
      begin: /\bon|off|true|false|yes|no\b/
    }, s = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: "'''",
          end: "'''",
          relevance: 10
        },
        {
          begin: '"""',
          end: '"""',
          relevance: 10
        },
        {
          begin: '"',
          end: '"'
        },
        {
          begin: "'",
          end: "'"
        }
      ]
    }, d = {
      begin: /\[/,
      end: /\]/,
      contains: [
        c,
        a,
        o,
        s,
        r,
        "self"
      ],
      relevance: 0
    }, l = /[A-Za-z0-9_-]+/, i = /"(\\"|[^"])*"/, g = /'[^']*'/, b = n.either(
      l,
      i,
      g
    ), m = n.concat(
      b,
      "(\\s*\\.\\s*",
      b,
      ")*",
      n.lookahead(/\s*=\s*[^#\s]/)
    );
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        c,
        {
          className: "section",
          begin: /\[+/,
          end: /\]+/
        },
        {
          begin: m,
          className: "attr",
          starts: {
            end: /$/,
            contains: [
              c,
              d,
              a,
              o,
              s,
              r
            ]
          }
        }
      ]
    };
  }
  return We = t, We;
}
var Qe, Pt;
function Qa() {
  if (Pt)
    return Qe;
  Pt = 1;
  var t = "[0-9](_*[0-9])*", e = `\\.(${t})`, n = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${t})((${e})|\\.)?|(${e}))[eE][+-]?(${t})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${t})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${e})[fFdD]?\\b` },
      { begin: `\\b(${t})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${t})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${n})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function c(a, s, d) {
    return d === -1 ? "" : a.replace(s, (l) => c(a, s, d - 1));
  }
  function o(a) {
    const s = a.regex, d = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", l = d + c("(?:<" + d + "~~~(?:\\s*,\\s*" + d + "~~~)*>)?", /~~~/g, 2), i = {
      keyword: [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits",
        "goto",
        "when"
      ],
      literal: [
        "false",
        "true",
        "null"
      ],
      type: [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
      ],
      built_in: [
        "super",
        "this"
      ]
    }, g = {
      className: "meta",
      begin: "@" + d,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    }, b = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: i,
      relevance: 0,
      contains: [a.C_BLOCK_COMMENT_MODE],
      endsParent: !0
    };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: i,
      illegal: /<\/|#/,
      contains: [
        a.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        a.C_LINE_COMMENT_MODE,
        a.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [a.BACKSLASH_ESCAPE]
        },
        a.APOS_STRING_MODE,
        a.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            d
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          // Exceptions for hyphenated keywords
          match: /non-sealed/,
          scope: "keyword"
        },
        {
          begin: [
            s.concat(/(?!else)/, d),
            /\s+/,
            d,
            /\s+/,
            /=(?!=)/
          ],
          className: {
            1: "type",
            3: "variable",
            5: "operator"
          }
        },
        {
          begin: [
            /record/,
            /\s+/,
            d
          ],
          className: {
            1: "keyword",
            3: "title.class"
          },
          contains: [
            b,
            a.C_LINE_COMMENT_MODE,
            a.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          begin: [
            "(?:" + l + "\\s+)",
            a.UNDERSCORE_IDENT_RE,
            /\s*(?=\()/
          ],
          className: { 2: "title.function" },
          keywords: i,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: i,
              relevance: 0,
              contains: [
                g,
                a.APOS_STRING_MODE,
                a.QUOTE_STRING_MODE,
                r,
                a.C_BLOCK_COMMENT_MODE
              ]
            },
            a.C_LINE_COMMENT_MODE,
            a.C_BLOCK_COMMENT_MODE
          ]
        },
        r,
        g
      ]
    };
  }
  return Qe = o, Qe;
}
var Xe, Ht;
function Xa() {
  if (Ht)
    return Xe;
  Ht = 1;
  const t = "[A-Za-z$_][0-9A-Za-z$_]*", e = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ], n = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], c = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], o = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], a = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], s = [].concat(
    o,
    r,
    c
  );
  function d(l) {
    const i = l.regex, g = (G, { after: B }) => {
      const V = "</" + G[0].slice(1);
      return G.input.indexOf(V, B) !== -1;
    }, b = t, m = {
      begin: "<>",
      end: "</>"
    }, h = /<[A-Za-z0-9\\._:-]+\s*\/>/, _ = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (G, B) => {
        const V = G[0].length + G.index, ee = G.input[V];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          ee === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          ee === ","
        ) {
          B.ignoreMatch();
          return;
        }
        ee === ">" && (g(G, { after: V }) || B.ignoreMatch());
        let ne;
        const te = G.input.substring(V);
        if (ne = te.match(/^\s*=/)) {
          B.ignoreMatch();
          return;
        }
        if ((ne = te.match(/^\s+extends\s+/)) && ne.index === 0) {
          B.ignoreMatch();
          return;
        }
      }
    }, y = {
      $pattern: t,
      keyword: e,
      literal: n,
      built_in: s,
      "variable.language": a
    }, E = "[0-9](_?[0-9])*", A = `\\.(${E})`, w = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", S = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${w})((${A})|\\.)?|(${A}))[eE][+-]?(${E})\\b` },
        { begin: `\\b(${w})\\b((${A})\\b|\\.)?|(${A})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, D = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: y,
      contains: []
      // defined later
    }, C = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          D
        ],
        subLanguage: "xml"
      }
    }, P = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          D
        ],
        subLanguage: "css"
      }
    }, N = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          l.BACKSLASH_ESCAPE,
          D
        ],
        subLanguage: "graphql"
      }
    }, T = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        l.BACKSLASH_ESCAPE,
        D
      ]
    }, j = {
      className: "comment",
      variants: [
        l.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: b + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        l.C_BLOCK_COMMENT_MODE,
        l.C_LINE_COMMENT_MODE
      ]
    }, K = [
      l.APOS_STRING_MODE,
      l.QUOTE_STRING_MODE,
      C,
      P,
      N,
      T,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      S
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    D.contains = K.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: y,
      contains: [
        "self"
      ].concat(K)
    });
    const J = [].concat(j, D.contains), q = J.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: y,
        contains: ["self"].concat(J)
      }
    ]), $ = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: y,
      contains: q
    }, F = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            b,
            /\s+/,
            /extends/,
            /\s+/,
            i.concat(b, "(", i.concat(/\./, b), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            b
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, u = {
      relevance: 0,
      match: i.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...c
        ]
      }
    }, f = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, k = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            b,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [$],
      illegal: /%/
    }, R = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function U(G) {
      return i.concat("(?!", G.join("|"), ")");
    }
    const X = {
      match: i.concat(
        /\b/,
        U([
          ...o,
          "super",
          "import"
        ].map((G) => `${G}\\s*\\(`)),
        b,
        i.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, Y = {
      begin: i.concat(/\./, i.lookahead(
        i.concat(b, /(?![0-9A-Za-z$_(])/)
      )),
      end: b,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, se = {
      match: [
        /get|set/,
        /\s+/,
        b,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        $
      ]
    }, H = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + l.UNDERSCORE_IDENT_RE + ")\\s*=>", Z = {
      match: [
        /const|var|let/,
        /\s+/,
        b,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        i.lookahead(H)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        $
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: y,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: q, CLASS_REFERENCE: u },
      illegal: /#(?![$_A-z])/,
      contains: [
        l.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        f,
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE,
        C,
        P,
        N,
        T,
        j,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        S,
        u,
        {
          scope: "attr",
          match: b + i.lookahead(":"),
          relevance: 0
        },
        Z,
        {
          // "value" container
          begin: "(" + l.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            j,
            l.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: H,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: l.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: y,
                      contains: q
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: m.begin, end: m.end },
                { match: h },
                {
                  begin: _.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": _.isTrulyOpeningTag,
                  end: _.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: _.begin,
                  end: _.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        k,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + l.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            $,
            l.inherit(l.TITLE_MODE, { begin: b, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        Y,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + b,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [$]
        },
        X,
        R,
        F,
        se,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  return Xe = d, Xe;
}
var Ve, Kt;
function Va() {
  if (Kt)
    return Ve;
  Kt = 1;
  function t(e) {
    const n = {
      className: "attr",
      begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
      relevance: 1.01
    }, r = {
      match: /[{}[\],:]/,
      className: "punctuation",
      relevance: 0
    }, c = [
      "true",
      "false",
      "null"
    ], o = {
      scope: "literal",
      beginKeywords: c.join(" ")
    };
    return {
      name: "JSON",
      aliases: ["jsonc"],
      keywords: {
        literal: c
      },
      contains: [
        n,
        r,
        e.QUOTE_STRING_MODE,
        o,
        e.C_NUMBER_MODE,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE
      ],
      illegal: "\\S"
    };
  }
  return Ve = t, Ve;
}
var Je, qt;
function Ja() {
  if (qt)
    return Je;
  qt = 1;
  var t = "[0-9](_*[0-9])*", e = `\\.(${t})`, n = "[0-9a-fA-F](_*[0-9a-fA-F])*", r = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${t})((${e})|\\.)?|(${e}))[eE][+-]?(${t})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${t})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${e})[fFdD]?\\b` },
      { begin: `\\b(${t})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${t})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${n})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function c(o) {
    const a = {
      keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
      built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
      literal: "true false null"
    }, s = {
      className: "keyword",
      begin: /\b(break|continue|return|this)\b/,
      starts: { contains: [
        {
          className: "symbol",
          begin: /@\w+/
        }
      ] }
    }, d = {
      className: "symbol",
      begin: o.UNDERSCORE_IDENT_RE + "@"
    }, l = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      contains: [o.C_NUMBER_MODE]
    }, i = {
      className: "variable",
      begin: "\\$" + o.UNDERSCORE_IDENT_RE
    }, g = {
      className: "string",
      variants: [
        {
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [
            i,
            l
          ]
        },
        // Can't use built-in modes easily, as we want to use STRING in the meta
        // context as 'meta-string' and there's no syntax to remove explicitly set
        // classNames in built-in modes.
        {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [o.BACKSLASH_ESCAPE]
        },
        {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [
            o.BACKSLASH_ESCAPE,
            i,
            l
          ]
        }
      ]
    };
    l.contains.push(g);
    const b = {
      className: "meta",
      begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + o.UNDERSCORE_IDENT_RE + ")?"
    }, m = {
      className: "meta",
      begin: "@" + o.UNDERSCORE_IDENT_RE,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            o.inherit(g, { className: "string" }),
            "self"
          ]
        }
      ]
    }, h = r, _ = o.COMMENT(
      "/\\*",
      "\\*/",
      { contains: [o.C_BLOCK_COMMENT_MODE] }
    ), y = { variants: [
      {
        className: "type",
        begin: o.UNDERSCORE_IDENT_RE
      },
      {
        begin: /\(/,
        end: /\)/,
        contains: []
        // defined later
      }
    ] }, E = y;
    return E.variants[1].contains = [y], y.variants[1].contains = [E], {
      name: "Kotlin",
      aliases: [
        "kt",
        "kts"
      ],
      keywords: a,
      contains: [
        o.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        o.C_LINE_COMMENT_MODE,
        _,
        s,
        d,
        b,
        m,
        {
          className: "function",
          beginKeywords: "fun",
          end: "[(]|$",
          returnBegin: !0,
          excludeEnd: !0,
          keywords: a,
          relevance: 5,
          contains: [
            {
              begin: o.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [o.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "type",
              begin: /</,
              end: />/,
              keywords: "reified",
              relevance: 0
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: a,
              relevance: 0,
              contains: [
                {
                  begin: /:/,
                  end: /[=,\/]/,
                  endsWithParent: !0,
                  contains: [
                    y,
                    o.C_LINE_COMMENT_MODE,
                    _
                  ],
                  relevance: 0
                },
                o.C_LINE_COMMENT_MODE,
                _,
                b,
                m,
                g,
                o.C_NUMBER_MODE
              ]
            },
            _
          ]
        },
        {
          begin: [
            /class|interface|trait/,
            /\s+/,
            o.UNDERSCORE_IDENT_RE
          ],
          beginScope: {
            3: "title.class"
          },
          keywords: "class interface trait",
          end: /[:\{(]|$/,
          excludeEnd: !0,
          illegal: "extends implements",
          contains: [
            { beginKeywords: "public protected internal private constructor" },
            o.UNDERSCORE_TITLE_MODE,
            {
              className: "type",
              begin: /</,
              end: />/,
              excludeBegin: !0,
              excludeEnd: !0,
              relevance: 0
            },
            {
              className: "type",
              begin: /[,:]\s*/,
              end: /[<\(,){\s]|$/,
              excludeBegin: !0,
              returnEnd: !0
            },
            b,
            m
          ]
        },
        g,
        {
          className: "meta",
          begin: "^#!/usr/bin/env",
          end: "$",
          illegal: `
`
        },
        h
      ]
    };
  }
  return Je = c, Je;
}
var Ye, Zt;
function Ya() {
  if (Zt)
    return Ye;
  Zt = 1;
  const t = (i) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: i.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        i.APOS_STRING_MODE,
        i.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: i.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], n = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...n
  ], c = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), o = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), a = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), s = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse(), d = o.concat(a).sort().reverse();
  function l(i) {
    const g = t(i), b = d, m = "and or not only", h = "[\\w-]+", _ = "(" + h + "|@\\{" + h + "\\})", y = [], E = [], A = function(q) {
      return {
        // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
        className: "string",
        begin: "~?" + q + ".*?" + q
      };
    }, w = function(q, $, F) {
      return {
        className: q,
        begin: $,
        relevance: F
      };
    }, S = {
      $pattern: /[a-z-]+/,
      keyword: m,
      attribute: c.join(" ")
    }, D = {
      // used only to properly balance nested parens inside mixin call, def. arg list
      begin: "\\(",
      end: "\\)",
      contains: E,
      keywords: S,
      relevance: 0
    };
    E.push(
      i.C_LINE_COMMENT_MODE,
      i.C_BLOCK_COMMENT_MODE,
      A("'"),
      A('"'),
      g.CSS_NUMBER_MODE,
      // fixme: it does not include dot for numbers like .5em :(
      {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: !0
        }
      },
      g.HEXCOLOR,
      D,
      w("variable", "@@?" + h, 10),
      w("variable", "@\\{" + h + "\\}"),
      w("built_in", "~?`[^`]*?`"),
      // inline javascript (or whatever host language) *multiline* string
      {
        // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
        className: "attribute",
        begin: h + "\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0
      },
      g.IMPORTANT,
      { beginKeywords: "and not" },
      g.FUNCTION_DISPATCH
    );
    const C = E.concat({
      begin: /\{/,
      end: /\}/,
      contains: y
    }), P = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{ beginKeywords: "and not" }].concat(E)
      // using this form to override VALUE’s 'function' match
    }, N = {
      begin: _ + "\\s*:",
      returnBegin: !0,
      end: /[;}]/,
      relevance: 0,
      contains: [
        { begin: /-(webkit|moz|ms|o)-/ },
        g.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + s.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: E
          }
        }
      ]
    }, T = {
      className: "keyword",
      begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        end: "[;{}]",
        keywords: S,
        returnEnd: !0,
        contains: E,
        relevance: 0
      }
    }, j = {
      className: "variable",
      variants: [
        // using more strict pattern for higher relevance to increase chances of Less detection.
        // this is *the only* Less specific statement used in most of the sources, so...
        // (we’ll still often loose to the css-parser unless there's '//' comment,
        // simply because 1 variable just can't beat 99 properties :)
        {
          begin: "@" + h + "\\s*:",
          relevance: 15
        },
        { begin: "@" + h }
      ],
      starts: {
        end: "[;}]",
        returnEnd: !0,
        contains: C
      }
    }, K = {
      // first parse unambiguous selectors (i.e. those not starting with tag)
      // then fall into the scary lookahead-discriminator variant.
      // this mode also handles mixin definitions and calls
      variants: [
        {
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
          // mixin calls end with ';'
        },
        {
          begin: _,
          end: /\{/
        }
      ],
      returnBegin: !0,
      returnEnd: !0,
      illegal: `[<='$"]`,
      relevance: 0,
      contains: [
        i.C_LINE_COMMENT_MODE,
        i.C_BLOCK_COMMENT_MODE,
        P,
        w("keyword", "all\\b"),
        w("variable", "@\\{" + h + "\\}"),
        // otherwise it’s identified as tag
        {
          begin: "\\b(" + r.join("|") + ")\\b",
          className: "selector-tag"
        },
        g.CSS_NUMBER_MODE,
        w("selector-tag", _, 0),
        w("selector-id", "#" + _),
        w("selector-class", "\\." + _, 0),
        w("selector-tag", "&", 0),
        g.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          begin: ":(" + o.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + a.join("|") + ")"
        },
        {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          contains: C
        },
        // argument list of parametric mixins
        { begin: "!important" },
        // eat !important after mixin call or it will be colored as tag
        g.FUNCTION_DISPATCH
      ]
    }, J = {
      begin: h + `:(:)?(${b.join("|")})`,
      returnBegin: !0,
      contains: [K]
    };
    return y.push(
      i.C_LINE_COMMENT_MODE,
      i.C_BLOCK_COMMENT_MODE,
      T,
      j,
      J,
      N,
      K,
      P,
      g.FUNCTION_DISPATCH
    ), {
      name: "Less",
      case_insensitive: !0,
      illegal: `[=>'/<($"]`,
      contains: y
    };
  }
  return Ye = l, Ye;
}
var et, Gt;
function ei() {
  if (Gt)
    return et;
  Gt = 1;
  function t(e) {
    const n = "\\[=*\\[", r = "\\]=*\\]", c = {
      begin: n,
      end: r,
      contains: ["self"]
    }, o = [
      e.COMMENT("--(?!" + n + ")", "$"),
      e.COMMENT(
        "--" + n,
        r,
        {
          contains: [c],
          relevance: 10
        }
      )
    ];
    return {
      name: "Lua",
      aliases: ["pluto"],
      keywords: {
        $pattern: e.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in: (
          // Metatags and globals:
          "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
        )
      },
      contains: o.concat([
        {
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [
            e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }),
            {
              className: "params",
              begin: "\\(",
              endsWithParent: !0,
              contains: o
            }
          ].concat(o)
        },
        e.C_NUMBER_MODE,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        {
          className: "string",
          begin: n,
          end: r,
          contains: [c],
          relevance: 5
        }
      ])
    };
  }
  return et = t, et;
}
var tt, Wt;
function ti() {
  if (Wt)
    return tt;
  Wt = 1;
  function t(e) {
    const n = {
      className: "variable",
      variants: [
        {
          begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
          contains: [e.BACKSLASH_ESCAPE]
        },
        { begin: /\$[@%<?\^\+\*]/ }
      ]
    }, r = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [
        e.BACKSLASH_ESCAPE,
        n
      ]
    }, c = {
      className: "variable",
      begin: /\$\([\w-]+\s/,
      end: /\)/,
      keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
      contains: [
        n,
        r
        // Added QUOTE_STRING as they can be a part of functions
      ]
    }, o = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, a = {
      className: "meta",
      begin: /^\.PHONY:/,
      end: /$/,
      keywords: {
        $pattern: /[\.\w]+/,
        keyword: ".PHONY"
      }
    }, s = {
      className: "section",
      begin: /^[^\s]+:/,
      end: /$/,
      contains: [n]
    };
    return {
      name: "Makefile",
      aliases: [
        "mk",
        "mak",
        "make"
      ],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
      },
      contains: [
        e.HASH_COMMENT_MODE,
        n,
        r,
        c,
        o,
        a,
        s
      ]
    };
  }
  return tt = t, tt;
}
var nt, Qt;
function ni() {
  if (Qt)
    return nt;
  Qt = 1;
  function t(e) {
    const n = e.regex, r = [
      "abs",
      "accept",
      "alarm",
      "and",
      "atan2",
      "bind",
      "binmode",
      "bless",
      "break",
      "caller",
      "chdir",
      "chmod",
      "chomp",
      "chop",
      "chown",
      "chr",
      "chroot",
      "class",
      "close",
      "closedir",
      "connect",
      "continue",
      "cos",
      "crypt",
      "dbmclose",
      "dbmopen",
      "defined",
      "delete",
      "die",
      "do",
      "dump",
      "each",
      "else",
      "elsif",
      "endgrent",
      "endhostent",
      "endnetent",
      "endprotoent",
      "endpwent",
      "endservent",
      "eof",
      "eval",
      "exec",
      "exists",
      "exit",
      "exp",
      "fcntl",
      "field",
      "fileno",
      "flock",
      "for",
      "foreach",
      "fork",
      "format",
      "formline",
      "getc",
      "getgrent",
      "getgrgid",
      "getgrnam",
      "gethostbyaddr",
      "gethostbyname",
      "gethostent",
      "getlogin",
      "getnetbyaddr",
      "getnetbyname",
      "getnetent",
      "getpeername",
      "getpgrp",
      "getpriority",
      "getprotobyname",
      "getprotobynumber",
      "getprotoent",
      "getpwent",
      "getpwnam",
      "getpwuid",
      "getservbyname",
      "getservbyport",
      "getservent",
      "getsockname",
      "getsockopt",
      "given",
      "glob",
      "gmtime",
      "goto",
      "grep",
      "gt",
      "hex",
      "if",
      "index",
      "int",
      "ioctl",
      "join",
      "keys",
      "kill",
      "last",
      "lc",
      "lcfirst",
      "length",
      "link",
      "listen",
      "local",
      "localtime",
      "log",
      "lstat",
      "lt",
      "ma",
      "map",
      "method",
      "mkdir",
      "msgctl",
      "msgget",
      "msgrcv",
      "msgsnd",
      "my",
      "ne",
      "next",
      "no",
      "not",
      "oct",
      "open",
      "opendir",
      "or",
      "ord",
      "our",
      "pack",
      "package",
      "pipe",
      "pop",
      "pos",
      "print",
      "printf",
      "prototype",
      "push",
      "q|0",
      "qq",
      "quotemeta",
      "qw",
      "qx",
      "rand",
      "read",
      "readdir",
      "readline",
      "readlink",
      "readpipe",
      "recv",
      "redo",
      "ref",
      "rename",
      "require",
      "reset",
      "return",
      "reverse",
      "rewinddir",
      "rindex",
      "rmdir",
      "say",
      "scalar",
      "seek",
      "seekdir",
      "select",
      "semctl",
      "semget",
      "semop",
      "send",
      "setgrent",
      "sethostent",
      "setnetent",
      "setpgrp",
      "setpriority",
      "setprotoent",
      "setpwent",
      "setservent",
      "setsockopt",
      "shift",
      "shmctl",
      "shmget",
      "shmread",
      "shmwrite",
      "shutdown",
      "sin",
      "sleep",
      "socket",
      "socketpair",
      "sort",
      "splice",
      "split",
      "sprintf",
      "sqrt",
      "srand",
      "stat",
      "state",
      "study",
      "sub",
      "substr",
      "symlink",
      "syscall",
      "sysopen",
      "sysread",
      "sysseek",
      "system",
      "syswrite",
      "tell",
      "telldir",
      "tie",
      "tied",
      "time",
      "times",
      "tr",
      "truncate",
      "uc",
      "ucfirst",
      "umask",
      "undef",
      "unless",
      "unlink",
      "unpack",
      "unshift",
      "untie",
      "until",
      "use",
      "utime",
      "values",
      "vec",
      "wait",
      "waitpid",
      "wantarray",
      "warn",
      "when",
      "while",
      "write",
      "x|0",
      "xor",
      "y|0"
    ], c = /[dualxmsipngr]{0,12}/, o = {
      $pattern: /[\w.]+/,
      keyword: r.join(" ")
    }, a = {
      className: "subst",
      begin: "[$@]\\{",
      end: "\\}",
      keywords: o
    }, s = {
      begin: /->\{/,
      end: /\}/
      // contains defined later
    }, d = {
      scope: "attr",
      match: /\s+:\s*\w+(\s*\(.*?\))?/
    }, l = {
      scope: "variable",
      variants: [
        { begin: /\$\d/ },
        {
          begin: n.concat(
            /[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
            // negative look-ahead tries to avoid matching patterns that are not
            // Perl at all like $ident$, @ident@, etc.
            "(?![A-Za-z])(?![@$%])"
          )
        },
        {
          // Only $= is a special Perl variable and one can't declare @= or %=.
          begin: /[$%@](?!")[^\s\w{=]|\$=/,
          relevance: 0
        }
      ],
      contains: [d]
    }, i = {
      className: "number",
      variants: [
        // decimal numbers:
        // include the case where a number starts with a dot (eg. .9), and
        // the leading 0? avoids mixing the first and second match on 0.x cases
        { match: /0?\.[0-9][0-9_]+\b/ },
        // include the special versioned number (eg. v5.38)
        { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
        // non-decimal numbers:
        { match: /\b0[0-7][0-7_]*\b/ },
        { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
        { match: /\b0b[0-1][0-1_]*\b/ }
      ],
      relevance: 0
    }, g = [
      e.BACKSLASH_ESCAPE,
      a,
      l
    ], b = [
      /!/,
      /\//,
      /\|/,
      /\?/,
      /'/,
      /"/,
      // valid but infrequent and weird
      /#/
      // valid but infrequent and weird
    ], m = (y, E, A = "\\1") => {
      const w = A === "\\1" ? A : n.concat(A, E);
      return n.concat(
        n.concat("(?:", y, ")"),
        E,
        /(?:\\.|[^\\\/])*?/,
        w,
        /(?:\\.|[^\\\/])*?/,
        A,
        c
      );
    }, h = (y, E, A) => n.concat(
      n.concat("(?:", y, ")"),
      E,
      /(?:\\.|[^\\\/])*?/,
      A,
      c
    ), _ = [
      l,
      e.HASH_COMMENT_MODE,
      e.COMMENT(
        /^=\w/,
        /=cut/,
        { endsWithParent: !0 }
      ),
      s,
      {
        className: "string",
        contains: g,
        variants: [
          {
            begin: "q[qwxr]?\\s*\\(",
            end: "\\)",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\[",
            end: "\\]",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\{",
            end: "\\}",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*\\|",
            end: "\\|",
            relevance: 5
          },
          {
            begin: "q[qwxr]?\\s*<",
            end: ">",
            relevance: 5
          },
          {
            begin: "qw\\s+q",
            end: "q",
            relevance: 5
          },
          {
            begin: "'",
            end: "'",
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: '"',
            end: '"'
          },
          {
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: /\{\w+\}/,
            relevance: 0
          },
          {
            begin: "-?\\w+\\s*=>",
            relevance: 0
          }
        ]
      },
      i,
      {
        // regexp container
        begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [
          e.HASH_COMMENT_MODE,
          {
            className: "regexp",
            variants: [
              // allow matching common delimiters
              { begin: m("s|tr|y", n.either(...b, { capture: !0 })) },
              // and then paired delmis
              { begin: m("s|tr|y", "\\(", "\\)") },
              { begin: m("s|tr|y", "\\[", "\\]") },
              { begin: m("s|tr|y", "\\{", "\\}") }
            ],
            relevance: 2
          },
          {
            className: "regexp",
            variants: [
              {
                // could be a comment in many languages so do not count
                // as relevant
                begin: /(m|qr)\/\//,
                relevance: 0
              },
              // prefix is optional with /regex/
              { begin: h("(?:m|qr)?", /\//, /\//) },
              // allow matching common delimiters
              { begin: h("m|qr", n.either(...b, { capture: !0 }), /\1/) },
              // allow common paired delmins
              { begin: h("m|qr", /\(/, /\)/) },
              { begin: h("m|qr", /\[/, /\]/) },
              { begin: h("m|qr", /\{/, /\}/) }
            ]
          }
        ]
      },
      {
        className: "function",
        beginKeywords: "sub method",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [e.TITLE_MODE, d]
      },
      {
        className: "class",
        beginKeywords: "class",
        end: "[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [e.TITLE_MODE, d, i]
      },
      {
        begin: "-\\w\\b",
        relevance: 0
      },
      {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [
          {
            begin: "^@@.*",
            end: "$",
            className: "comment"
          }
        ]
      }
    ];
    return a.contains = _, s.contains = _, {
      name: "Perl",
      aliases: [
        "pl",
        "pm"
      ],
      keywords: o,
      contains: _
    };
  }
  return nt = t, nt;
}
var at, Xt;
function ai() {
  if (Xt)
    return at;
  Xt = 1;
  function t(e) {
    const n = {
      className: "built_in",
      begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    }, r = /[a-zA-Z@][a-zA-Z0-9_]*/, c = {
      "variable.language": [
        "this",
        "super"
      ],
      $pattern: r,
      keyword: [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN"
      ],
      literal: [
        "false",
        "true",
        "FALSE",
        "TRUE",
        "nil",
        "YES",
        "NO",
        "NULL"
      ],
      built_in: [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once"
      ],
      type: [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool"
      ]
    }, o = {
      $pattern: r,
      keyword: [
        "@interface",
        "@class",
        "@protocol",
        "@implementation"
      ]
    };
    return {
      name: "Objective-C",
      aliases: [
        "mm",
        "objc",
        "obj-c",
        "obj-c++",
        "objective-c++"
      ],
      keywords: c,
      illegal: "</",
      contains: [
        n,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.C_NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        {
          className: "string",
          variants: [
            {
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [e.BACKSLASH_ESCAPE]
            }
          ]
        },
        {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
          contains: [
            {
              begin: /\\\n/,
              relevance: 0
            },
            e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/,
              end: /$/,
              illegal: "\\n"
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          className: "class",
          begin: "(" + o.keyword.join("|") + ")\\b",
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: o,
          contains: [e.UNDERSCORE_TITLE_MODE]
        },
        {
          begin: "\\." + e.UNDERSCORE_IDENT_RE,
          relevance: 0
        }
      ]
    };
  }
  return at = t, at;
}
var it, Vt;
function ii() {
  if (Vt)
    return it;
  Vt = 1;
  function t(e) {
    const n = e.regex, r = /(?![A-Za-z0-9])(?![$])/, c = n.concat(
      /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
      r
    ), o = n.concat(
      /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
      r
    ), a = n.concat(
      /[A-Z]+/,
      r
    ), s = {
      scope: "variable",
      match: "\\$+" + c
    }, d = {
      scope: "meta",
      variants: [
        { begin: /<\?php/, relevance: 10 },
        // boost for obvious PHP
        { begin: /<\?=/ },
        // less relevant per PSR-1 which says not to use short-tags
        { begin: /<\?/, relevance: 0.1 },
        { begin: /\?>/ }
        // end php tag
      ]
    }, l = {
      scope: "subst",
      variants: [
        { begin: /\$\w+/ },
        {
          begin: /\{\$/,
          end: /\}/
        }
      ]
    }, i = e.inherit(e.APOS_STRING_MODE, { illegal: null }), g = e.inherit(e.QUOTE_STRING_MODE, {
      illegal: null,
      contains: e.QUOTE_STRING_MODE.contains.concat(l)
    }), b = {
      begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
      end: /[ \t]*(\w+)\b/,
      contains: e.QUOTE_STRING_MODE.contains.concat(l),
      "on:begin": ($, F) => {
        F.data._beginMatch = $[1] || $[2];
      },
      "on:end": ($, F) => {
        F.data._beginMatch !== $[1] && F.ignoreMatch();
      }
    }, m = e.END_SAME_AS_BEGIN({
      begin: /<<<[ \t]*'(\w+)'\n/,
      end: /[ \t]*(\w+)\b/
    }), h = `[ 	
]`, _ = {
      scope: "string",
      variants: [
        g,
        i,
        b,
        m
      ]
    }, y = {
      scope: "number",
      variants: [
        { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
        // Binary w/ underscore support
        { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
        // Octals w/ underscore support
        { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
        // Hex w/ underscore support
        // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
        { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
      ],
      relevance: 0
    }, E = [
      "false",
      "null",
      "true"
    ], A = [
      // Magic constants:
      // <https://www.php.net/manual/en/language.constants.predefined.php>
      "__CLASS__",
      "__DIR__",
      "__FILE__",
      "__FUNCTION__",
      "__COMPILER_HALT_OFFSET__",
      "__LINE__",
      "__METHOD__",
      "__NAMESPACE__",
      "__TRAIT__",
      // Function that look like language construct or language construct that look like function:
      // List of keywords that may not require parenthesis
      "die",
      "echo",
      "exit",
      "include",
      "include_once",
      "print",
      "require",
      "require_once",
      // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
      // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
      // Other keywords:
      // <https://www.php.net/manual/en/reserved.php>
      // <https://www.php.net/manual/en/language.types.type-juggling.php>
      "array",
      "abstract",
      "and",
      "as",
      "binary",
      "bool",
      "boolean",
      "break",
      "callable",
      "case",
      "catch",
      "class",
      "clone",
      "const",
      "continue",
      "declare",
      "default",
      "do",
      "double",
      "else",
      "elseif",
      "empty",
      "enddeclare",
      "endfor",
      "endforeach",
      "endif",
      "endswitch",
      "endwhile",
      "enum",
      "eval",
      "extends",
      "final",
      "finally",
      "float",
      "for",
      "foreach",
      "from",
      "global",
      "goto",
      "if",
      "implements",
      "instanceof",
      "insteadof",
      "int",
      "integer",
      "interface",
      "isset",
      "iterable",
      "list",
      "match|0",
      "mixed",
      "new",
      "never",
      "object",
      "or",
      "private",
      "protected",
      "public",
      "readonly",
      "real",
      "return",
      "string",
      "switch",
      "throw",
      "trait",
      "try",
      "unset",
      "use",
      "var",
      "void",
      "while",
      "xor",
      "yield"
    ], w = [
      // Standard PHP library:
      // <https://www.php.net/manual/en/book.spl.php>
      "Error|0",
      "AppendIterator",
      "ArgumentCountError",
      "ArithmeticError",
      "ArrayIterator",
      "ArrayObject",
      "AssertionError",
      "BadFunctionCallException",
      "BadMethodCallException",
      "CachingIterator",
      "CallbackFilterIterator",
      "CompileError",
      "Countable",
      "DirectoryIterator",
      "DivisionByZeroError",
      "DomainException",
      "EmptyIterator",
      "ErrorException",
      "Exception",
      "FilesystemIterator",
      "FilterIterator",
      "GlobIterator",
      "InfiniteIterator",
      "InvalidArgumentException",
      "IteratorIterator",
      "LengthException",
      "LimitIterator",
      "LogicException",
      "MultipleIterator",
      "NoRewindIterator",
      "OutOfBoundsException",
      "OutOfRangeException",
      "OuterIterator",
      "OverflowException",
      "ParentIterator",
      "ParseError",
      "RangeException",
      "RecursiveArrayIterator",
      "RecursiveCachingIterator",
      "RecursiveCallbackFilterIterator",
      "RecursiveDirectoryIterator",
      "RecursiveFilterIterator",
      "RecursiveIterator",
      "RecursiveIteratorIterator",
      "RecursiveRegexIterator",
      "RecursiveTreeIterator",
      "RegexIterator",
      "RuntimeException",
      "SeekableIterator",
      "SplDoublyLinkedList",
      "SplFileInfo",
      "SplFileObject",
      "SplFixedArray",
      "SplHeap",
      "SplMaxHeap",
      "SplMinHeap",
      "SplObjectStorage",
      "SplObserver",
      "SplPriorityQueue",
      "SplQueue",
      "SplStack",
      "SplSubject",
      "SplTempFileObject",
      "TypeError",
      "UnderflowException",
      "UnexpectedValueException",
      "UnhandledMatchError",
      // Reserved interfaces:
      // <https://www.php.net/manual/en/reserved.interfaces.php>
      "ArrayAccess",
      "BackedEnum",
      "Closure",
      "Fiber",
      "Generator",
      "Iterator",
      "IteratorAggregate",
      "Serializable",
      "Stringable",
      "Throwable",
      "Traversable",
      "UnitEnum",
      "WeakReference",
      "WeakMap",
      // Reserved classes:
      // <https://www.php.net/manual/en/reserved.classes.php>
      "Directory",
      "__PHP_Incomplete_Class",
      "parent",
      "php_user_filter",
      "self",
      "static",
      "stdClass"
    ], S = {
      keyword: A,
      literal: (($) => {
        const F = [];
        return $.forEach((u) => {
          F.push(u), u.toLowerCase() === u ? F.push(u.toUpperCase()) : F.push(u.toLowerCase());
        }), F;
      })(E),
      built_in: w
    }, D = ($) => $.map((F) => F.replace(/\|\d+$/, "")), C = { variants: [
      {
        match: [
          /new/,
          n.concat(h, "+"),
          // to prevent built ins from being confused as the class constructor call
          n.concat("(?!", D(w).join("\\b|"), "\\b)"),
          o
        ],
        scope: {
          1: "keyword",
          4: "title.class"
        }
      }
    ] }, P = n.concat(c, "\\b(?!\\()"), N = { variants: [
      {
        match: [
          n.concat(
            /::/,
            n.lookahead(/(?!class\b)/)
          ),
          P
        ],
        scope: { 2: "variable.constant" }
      },
      {
        match: [
          /::/,
          /class/
        ],
        scope: { 2: "variable.language" }
      },
      {
        match: [
          o,
          n.concat(
            /::/,
            n.lookahead(/(?!class\b)/)
          ),
          P
        ],
        scope: {
          1: "title.class",
          3: "variable.constant"
        }
      },
      {
        match: [
          o,
          n.concat(
            "::",
            n.lookahead(/(?!class\b)/)
          )
        ],
        scope: { 1: "title.class" }
      },
      {
        match: [
          o,
          /::/,
          /class/
        ],
        scope: {
          1: "title.class",
          3: "variable.language"
        }
      }
    ] }, T = {
      scope: "attr",
      match: n.concat(c, n.lookahead(":"), n.lookahead(/(?!::)/))
    }, j = {
      relevance: 0,
      begin: /\(/,
      end: /\)/,
      keywords: S,
      contains: [
        T,
        s,
        N,
        e.C_BLOCK_COMMENT_MODE,
        _,
        y,
        C
      ]
    }, K = {
      relevance: 0,
      match: [
        /\b/,
        // to prevent keywords from being confused as the function title
        n.concat("(?!fn\\b|function\\b|", D(A).join("\\b|"), "|", D(w).join("\\b|"), "\\b)"),
        c,
        n.concat(h, "*"),
        n.lookahead(/(?=\()/)
      ],
      scope: { 3: "title.function.invoke" },
      contains: [j]
    };
    j.contains.push(K);
    const J = [
      T,
      N,
      e.C_BLOCK_COMMENT_MODE,
      _,
      y,
      C
    ], q = {
      begin: n.concat(
        /#\[\s*\\?/,
        n.either(
          o,
          a
        )
      ),
      beginScope: "meta",
      end: /]/,
      endScope: "meta",
      keywords: {
        literal: E,
        keyword: [
          "new",
          "array"
        ]
      },
      contains: [
        {
          begin: /\[/,
          end: /]/,
          keywords: {
            literal: E,
            keyword: [
              "new",
              "array"
            ]
          },
          contains: [
            "self",
            ...J
          ]
        },
        ...J,
        {
          scope: "meta",
          variants: [
            { match: o },
            { match: a }
          ]
        }
      ]
    };
    return {
      case_insensitive: !1,
      keywords: S,
      contains: [
        q,
        e.HASH_COMMENT_MODE,
        e.COMMENT("//", "$"),
        e.COMMENT(
          "/\\*",
          "\\*/",
          { contains: [
            {
              scope: "doctag",
              match: "@[A-Za-z]+"
            }
          ] }
        ),
        {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: e.MATCH_NOTHING_RE,
            contains: [
              {
                match: /\?>/,
                scope: "meta",
                endsParent: !0
              }
            ]
          }
        },
        d,
        {
          scope: "variable.language",
          match: /\$this\b/
        },
        s,
        K,
        N,
        {
          match: [
            /const/,
            /\s/,
            c
          ],
          scope: {
            1: "keyword",
            3: "variable.constant"
          }
        },
        C,
        {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            e.UNDERSCORE_TITLE_MODE,
            {
              begin: "=>",
              // No markup, just a relevance booster
              endsParent: !0
            },
            {
              scope: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: S,
              contains: [
                "self",
                q,
                s,
                N,
                e.C_BLOCK_COMMENT_MODE,
                _,
                y
              ]
            }
          ]
        },
        {
          scope: "class",
          variants: [
            {
              beginKeywords: "enum",
              illegal: /[($"]/
            },
            {
              beginKeywords: "class interface trait",
              illegal: /[:($"]/
            }
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        // both use and namespace still use "old style" rules (vs multi-match)
        // because the namespace name can include `\` and we still want each
        // element to be treated as its own *individual* title
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [
            // TODO: title.function vs title.class
            {
              match: /\b(as|const|function)\b/,
              scope: "keyword"
            },
            // TODO: could be title.class or title.function
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        _,
        y
      ]
    };
  }
  return it = t, it;
}
var rt, Jt;
function ri() {
  if (Jt)
    return rt;
  Jt = 1;
  function t(e) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            // We don't want the php closing tag ?> to close the PHP block when
            // inside any of the following blocks:
            {
              begin: "/\\*",
              end: "\\*/",
              skip: !0
            },
            {
              begin: 'b"',
              end: '"',
              skip: !0
            },
            {
              begin: "b'",
              end: "'",
              skip: !0
            },
            e.inherit(e.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            }),
            e.inherit(e.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0
            })
          ]
        }
      ]
    };
  }
  return rt = t, rt;
}
var st, Yt;
function si() {
  if (Yt)
    return st;
  Yt = 1;
  function t(e) {
    return {
      name: "Plain text",
      aliases: [
        "text",
        "txt"
      ],
      disableAutodetect: !0
    };
  }
  return st = t, st;
}
var ot, en;
function oi() {
  if (en)
    return ot;
  en = 1;
  function t(e) {
    const n = e.regex, r = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), c = [
      "and",
      "as",
      "assert",
      "async",
      "await",
      "break",
      "case",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "match",
      "nonlocal|10",
      "not",
      "or",
      "pass",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield"
    ], o = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: c,
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ]
    }, a = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    }, s = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: o,
      illegal: /#/
    }, d = {
      begin: /\{\{/,
      relevance: 0
    }, l = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            a
          ],
          relevance: 10
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            a
          ],
          relevance: 10
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            a,
            d,
            s
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            a,
            d,
            s
          ]
        },
        {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        },
        {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d,
            s
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [
            e.BACKSLASH_ESCAPE,
            d,
            s
          ]
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE
      ]
    }, i = "[0-9](_?[0-9])*", g = `(\\b(${i}))?\\.(${i})|\\b(${i})\\.`, b = `\\b|${c.join("|")}`, m = {
      className: "number",
      relevance: 0,
      variants: [
        // exponentfloat, pointfloat
        // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
        // optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        // Note: no leading \b because floats can start with a decimal point
        // and we don't want to mishandle e.g. `fn(.5)`,
        // no trailing \b for pointfloat because it can end with a decimal point
        // and we don't want to mishandle e.g. `0..hex()`; this should be safe
        // because both MUST contain a decimal point and so cannot be confused with
        // the interior part of an identifier
        {
          begin: `(\\b(${i})|(${g}))[eE][+-]?(${i})[jJ]?(?=${b})`
        },
        {
          begin: `(${g})[jJ]?`
        },
        // decinteger, bininteger, octinteger, hexinteger
        // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
        // optionally "long" in Python 2
        // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
        // decinteger is optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${b})`
        },
        {
          begin: `\\b0[bB](_?[01])+[lL]?(?=${b})`
        },
        {
          begin: `\\b0[oO](_?[0-7])+[lL]?(?=${b})`
        },
        {
          begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${b})`
        },
        // imagnumber (digitpart-based)
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b(${i})[jJ](?=${b})`
        }
      ]
    }, h = {
      className: "comment",
      begin: n.lookahead(/# type:/),
      end: /$/,
      keywords: o,
      contains: [
        {
          // prevent keywords from coloring `type`
          begin: /# type:/
        },
        // comment within a datatype comment includes no keywords
        {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }
      ]
    }, _ = {
      className: "params",
      variants: [
        // Exclude params in functions without params
        {
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: o,
          contains: [
            "self",
            a,
            m,
            l,
            e.HASH_COMMENT_MODE
          ]
        }
      ]
    };
    return s.contains = [
      l,
      m,
      a
    ], {
      name: "Python",
      aliases: [
        "py",
        "gyp",
        "ipython"
      ],
      unicodeRegex: !0,
      keywords: o,
      illegal: /(<\/|\?)|=>/,
      contains: [
        a,
        m,
        {
          // very common convention
          scope: "variable.language",
          match: /\bself\b/
        },
        {
          // eat "if" prior to string so that it won't accidentally be
          // labeled as an f-string
          beginKeywords: "if",
          relevance: 0
        },
        { match: /\bor\b/, scope: "keyword" },
        l,
        h,
        e.HASH_COMMENT_MODE,
        {
          match: [
            /\bdef/,
            /\s+/,
            r
          ],
          scope: {
            1: "keyword",
            3: "title.function"
          },
          contains: [_]
        },
        {
          variants: [
            {
              match: [
                /\bclass/,
                /\s+/,
                r,
                /\s*/,
                /\(\s*/,
                r,
                /\s*\)/
              ]
            },
            {
              match: [
                /\bclass/,
                /\s+/,
                r
              ]
            }
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            6: "title.class.inherited"
          }
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [
            m,
            _,
            l
          ]
        }
      ]
    };
  }
  return ot = t, ot;
}
var lt, tn;
function li() {
  if (tn)
    return lt;
  tn = 1;
  function t(e) {
    return {
      aliases: ["pycon"],
      contains: [
        {
          className: "meta.prompt",
          starts: {
            // a space separates the REPL prefix from the actual code
            // this is purely for cleaner HTML output
            end: / |$/,
            starts: {
              end: "$",
              subLanguage: "python"
            }
          },
          variants: [
            { begin: /^>>>(?=[ ]|$)/ },
            { begin: /^\.\.\.(?=[ ]|$)/ }
          ]
        }
      ]
    };
  }
  return lt = t, lt;
}
var ct, nn;
function ci() {
  if (nn)
    return ct;
  nn = 1;
  function t(e) {
    const n = e.regex, r = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, c = n.either(
      // Special case: only hexadecimal binary powers can contain fractions
      /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
      // Hexadecimal numbers without fraction and optional binary power
      /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
      // Decimal numbers
      /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
    ), o = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, a = n.either(
      /[()]/,
      /[{}]/,
      /\[\[/,
      /[[\]]/,
      /\\/,
      /,/
    );
    return {
      name: "R",
      keywords: {
        $pattern: r,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: (
          // Builtin constants
          "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
        )
      },
      contains: [
        // Roxygen comments
        e.COMMENT(
          /#'/,
          /$/,
          { contains: [
            {
              // Handle `@examples` separately to cause all subsequent code
              // until the next `@`-tag on its own line to be kept as-is,
              // preventing highlighting. This code is example R code, so nested
              // doctags shouldn’t be treated as such. See
              // `test/markup/r/roxygen.txt` for an example.
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: n.lookahead(n.either(
                  // end if another doc comment
                  /\n^#'\s*(?=@[a-zA-Z]+)/,
                  // or a line with no comment
                  /\n^(?!#')/
                )),
                endsParent: !0
              }
            },
            {
              // Handle `@param` to highlight the parameter name following
              // after.
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [
                    { match: r },
                    { match: /`(?:\\.|[^`\\])+`/ }
                  ],
                  endsParent: !0
                }
              ]
            },
            {
              scope: "doctag",
              match: /@[a-zA-Z]+/
            },
            {
              scope: "keyword",
              match: /\\[a-zA-Z]+/
            }
          ] }
        ),
        e.HASH_COMMENT_MODE,
        {
          scope: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\(/,
              end: /\)(-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\{/,
              end: /\}(-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]"(-*)\[/,
              end: /\](-*)"/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\(/,
              end: /\)(-*)'/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\{/,
              end: /\}(-*)'/
            }),
            e.END_SAME_AS_BEGIN({
              begin: /[rR]'(-*)\[/,
              end: /\](-*)'/
            }),
            {
              begin: '"',
              end: '"',
              relevance: 0
            },
            {
              begin: "'",
              end: "'",
              relevance: 0
            }
          ]
        },
        // Matching numbers immediately following punctuation and operators is
        // tricky since we need to look at the character ahead of a number to
        // ensure the number is not part of an identifier, and we cannot use
        // negative look-behind assertions. So instead we explicitly handle all
        // possible combinations of (operator|punctuation), number.
        // TODO: replace with negative look-behind when available
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
        // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
        // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
        {
          relevance: 0,
          variants: [
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                o,
                c
              ]
            },
            {
              scope: {
                1: "operator",
                2: "number"
              },
              match: [
                /%[^%]*%/,
                c
              ]
            },
            {
              scope: {
                1: "punctuation",
                2: "number"
              },
              match: [
                a,
                c
              ]
            },
            {
              scope: { 2: "number" },
              match: [
                /[^a-zA-Z0-9._]|^/,
                // not part of an identifier, or start of document
                c
              ]
            }
          ]
        },
        // Operators/punctuation when they're not directly followed by numbers
        {
          // Relevance boost for the most common assignment form.
          scope: { 3: "operator" },
          match: [
            r,
            /\s+/,
            /<-/,
            /\s+/
          ]
        },
        {
          scope: "operator",
          relevance: 0,
          variants: [
            { match: o },
            { match: /%[^%]*%/ }
          ]
        },
        {
          scope: "punctuation",
          relevance: 0,
          match: a
        },
        {
          // Escaped identifier
          begin: "`",
          end: "`",
          contains: [{ begin: /\\./ }]
        }
      ]
    };
  }
  return ct = t, ct;
}
var dt, an;
function di() {
  if (an)
    return dt;
  an = 1;
  function t(e) {
    const n = e.regex, r = /(r#)?/, c = n.concat(r, e.UNDERSCORE_IDENT_RE), o = n.concat(r, e.IDENT_RE), a = {
      className: "title.function.invoke",
      relevance: 0,
      begin: n.concat(
        /\b/,
        /(?!let|for|while|if|else|match\b)/,
        o,
        n.lookahead(/\s*\(/)
      )
    }, s = "([ui](8|16|32|64|128|size)|f(32|64))?", d = [
      "abstract",
      "as",
      "async",
      "await",
      "become",
      "box",
      "break",
      "const",
      "continue",
      "crate",
      "do",
      "dyn",
      "else",
      "enum",
      "extern",
      "false",
      "final",
      "fn",
      "for",
      "if",
      "impl",
      "in",
      "let",
      "loop",
      "macro",
      "match",
      "mod",
      "move",
      "mut",
      "override",
      "priv",
      "pub",
      "ref",
      "return",
      "self",
      "Self",
      "static",
      "struct",
      "super",
      "trait",
      "true",
      "try",
      "type",
      "typeof",
      "union",
      "unsafe",
      "unsized",
      "use",
      "virtual",
      "where",
      "while",
      "yield"
    ], l = [
      "true",
      "false",
      "Some",
      "None",
      "Ok",
      "Err"
    ], i = [
      // functions
      "drop ",
      // traits
      "Copy",
      "Send",
      "Sized",
      "Sync",
      "Drop",
      "Fn",
      "FnMut",
      "FnOnce",
      "ToOwned",
      "Clone",
      "Debug",
      "PartialEq",
      "PartialOrd",
      "Eq",
      "Ord",
      "AsRef",
      "AsMut",
      "Into",
      "From",
      "Default",
      "Iterator",
      "Extend",
      "IntoIterator",
      "DoubleEndedIterator",
      "ExactSizeIterator",
      "SliceConcatExt",
      "ToString",
      // macros
      "assert!",
      "assert_eq!",
      "bitflags!",
      "bytes!",
      "cfg!",
      "col!",
      "concat!",
      "concat_idents!",
      "debug_assert!",
      "debug_assert_eq!",
      "env!",
      "eprintln!",
      "panic!",
      "file!",
      "format!",
      "format_args!",
      "include_bytes!",
      "include_str!",
      "line!",
      "local_data_key!",
      "module_path!",
      "option_env!",
      "print!",
      "println!",
      "select!",
      "stringify!",
      "try!",
      "unimplemented!",
      "unreachable!",
      "vec!",
      "write!",
      "writeln!",
      "macro_rules!",
      "assert_ne!",
      "debug_assert_ne!"
    ], g = [
      "i8",
      "i16",
      "i32",
      "i64",
      "i128",
      "isize",
      "u8",
      "u16",
      "u32",
      "u64",
      "u128",
      "usize",
      "f32",
      "f64",
      "str",
      "char",
      "bool",
      "Box",
      "Option",
      "Result",
      "String",
      "Vec"
    ];
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: e.IDENT_RE + "!?",
        type: g,
        keyword: d,
        literal: l,
        built_in: i
      },
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        e.inherit(e.QUOTE_STRING_MODE, {
          begin: /b?"/,
          illegal: null
        }),
        {
          className: "symbol",
          // negative lookahead to avoid matching `'`
          begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
        },
        {
          scope: "string",
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            {
              begin: /b?'/,
              end: /'/,
              contains: [
                {
                  scope: "char.escape",
                  match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
                }
              ]
            }
          ]
        },
        {
          className: "number",
          variants: [
            { begin: "\\b0b([01_]+)" + s },
            { begin: "\\b0o([0-7_]+)" + s },
            { begin: "\\b0x([A-Fa-f0-9_]+)" + s },
            { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + s }
          ],
          relevance: 0
        },
        {
          begin: [
            /fn/,
            /\s+/,
            c
          ],
          className: {
            1: "keyword",
            3: "title.function"
          }
        },
        {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [
            {
              className: "string",
              begin: /"/,
              end: /"/,
              contains: [
                e.BACKSLASH_ESCAPE
              ]
            }
          ]
        },
        {
          begin: [
            /let/,
            /\s+/,
            /(?:mut\s+)?/,
            c
          ],
          className: {
            1: "keyword",
            3: "keyword",
            4: "variable"
          }
        },
        // must come before impl/for rule later
        {
          begin: [
            /for/,
            /\s+/,
            c,
            /\s+/,
            /in/
          ],
          className: {
            1: "keyword",
            3: "variable",
            5: "keyword"
          }
        },
        {
          begin: [
            /type/,
            /\s+/,
            c
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: [
            /(?:trait|enum|struct|union|impl|for)/,
            /\s+/,
            c
          ],
          className: {
            1: "keyword",
            3: "title.class"
          }
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: {
            keyword: "Self",
            built_in: i,
            type: g
          }
        },
        {
          className: "punctuation",
          begin: "->"
        },
        a
      ]
    };
  }
  return dt = t, dt;
}
var ut, rn;
function ui() {
  if (rn)
    return ut;
  rn = 1;
  const t = (l) => ({
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: l.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: "number",
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
    },
    FUNCTION_DISPATCH: {
      className: "built_in",
      begin: /[\w-]+(?=\()/
    },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: "selector-attr",
      begin: /\[/,
      end: /\]/,
      illegal: "$",
      contains: [
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: l.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  }), e = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "optgroup",
    "option",
    "p",
    "picture",
    "q",
    "quote",
    "samp",
    "section",
    "select",
    "source",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
  ], n = [
    "defs",
    "g",
    "marker",
    "mask",
    "pattern",
    "svg",
    "switch",
    "symbol",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "linearGradient",
    "radialGradient",
    "stop",
    "circle",
    "ellipse",
    "image",
    "line",
    "path",
    "polygon",
    "polyline",
    "rect",
    "text",
    "use",
    "textPath",
    "tspan",
    "foreignObject",
    "clipPath"
  ], r = [
    ...e,
    ...n
  ], c = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
  ].sort().reverse(), o = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    // dir()
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    // has()
    "host",
    // host or host()
    "host-context",
    // host-context()
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    // is()
    "lang",
    // lang()
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    // not()
    "nth-child",
    // nth-child()
    "nth-col",
    // nth-col()
    "nth-last-child",
    // nth-last-child()
    "nth-last-col",
    // nth-last-col()
    "nth-last-of-type",
    //nth-last-of-type()
    "nth-of-type",
    //nth-of-type()
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where"
    // where()
  ].sort().reverse(), a = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
  ].sort().reverse(), s = [
    "accent-color",
    "align-content",
    "align-items",
    "align-self",
    "alignment-baseline",
    "all",
    "anchor-name",
    "animation",
    "animation-composition",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-range",
    "animation-range-end",
    "animation-range-start",
    "animation-timeline",
    "animation-timing-function",
    "appearance",
    "aspect-ratio",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-start-end-radius",
    "border-start-start-radius",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-align",
    "box-decoration-break",
    "box-direction",
    "box-flex",
    "box-flex-group",
    "box-lines",
    "box-ordinal-group",
    "box-orient",
    "box-pack",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "color-scheme",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "contain-intrinsic-block-size",
    "contain-intrinsic-height",
    "contain-intrinsic-inline-size",
    "contain-intrinsic-size",
    "contain-intrinsic-width",
    "container",
    "container-name",
    "container-type",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "counter-set",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "cx",
    "cy",
    "direction",
    "display",
    "dominant-baseline",
    "empty-cells",
    "enable-background",
    "field-sizing",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flood-color",
    "flood-opacity",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-palette",
    "font-size",
    "font-size-adjust",
    "font-smooth",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-synthesis-position",
    "font-synthesis-small-caps",
    "font-synthesis-style",
    "font-synthesis-weight",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-emoji",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "forced-color-adjust",
    "gap",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphenate-character",
    "hyphenate-limit-chars",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "initial-letter",
    "initial-letter-align",
    "inline-size",
    "inset",
    "inset-area",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "kerning",
    "left",
    "letter-spacing",
    "lighting-color",
    "line-break",
    "line-height",
    "line-height-step",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-trim",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "masonry-auto-flow",
    "math-depth",
    "math-shift",
    "math-style",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-anchor",
    "overflow-block",
    "overflow-clip-margin",
    "overflow-inline",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "overlay",
    "overscroll-behavior",
    "overscroll-behavior-block",
    "overscroll-behavior-inline",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "paint-order",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "place-content",
    "place-items",
    "place-self",
    "pointer-events",
    "position",
    "position-anchor",
    "position-visibility",
    "print-color-adjust",
    "quotes",
    "r",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "rotate",
    "row-gap",
    "ruby-align",
    "ruby-position",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scroll-timeline",
    "scroll-timeline-axis",
    "scroll-timeline-name",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "shape-rendering",
    "speak",
    "speak-as",
    "src",
    // @font-face
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-anchor",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-transform",
    "text-underline-offset",
    "text-underline-position",
    "text-wrap",
    "text-wrap-mode",
    "text-wrap-style",
    "timeline-scope",
    "top",
    "touch-action",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-modify",
    "user-select",
    "vector-effect",
    "vertical-align",
    "view-timeline",
    "view-timeline-axis",
    "view-timeline-inset",
    "view-timeline-name",
    "view-transition-name",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "white-space-collapse",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "x",
    "y",
    "z-index",
    "zoom"
  ].sort().reverse();
  function d(l) {
    const i = t(l), g = a, b = o, m = "@[a-z-]+", h = "and or not only", _ = {
      className: "variable",
      begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
      relevance: 0
    };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        l.C_LINE_COMMENT_MODE,
        l.C_BLOCK_COMMENT_MODE,
        // to recognize keyframe 40% etc which are outside the scope of our
        // attribute value mode
        i.CSS_NUMBER_MODE,
        {
          className: "selector-id",
          begin: "#[A-Za-z0-9_-]+",
          relevance: 0
        },
        {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0
        },
        i.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-tag",
          begin: "\\b(" + r.join("|") + ")\\b",
          // was there, before, but why?
          relevance: 0
        },
        {
          className: "selector-pseudo",
          begin: ":(" + b.join("|") + ")"
        },
        {
          className: "selector-pseudo",
          begin: ":(:)?(" + g.join("|") + ")"
        },
        _,
        {
          // pseudo-selector params
          begin: /\(/,
          end: /\)/,
          contains: [i.CSS_NUMBER_MODE]
        },
        i.CSS_VARIABLE,
        {
          className: "attribute",
          begin: "\\b(" + s.join("|") + ")\\b"
        },
        { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            i.BLOCK_COMMENT,
            _,
            i.HEXCOLOR,
            i.CSS_NUMBER_MODE,
            l.QUOTE_STRING_MODE,
            l.APOS_STRING_MODE,
            i.IMPORTANT,
            i.FUNCTION_DISPATCH
          ]
        },
        // matching these here allows us to treat them more like regular CSS
        // rules so everything between the {} gets regular rule highlighting,
        // which is what we want for page and font-face
        {
          begin: "@(page|font-face)",
          keywords: {
            $pattern: m,
            keyword: "@page @font-face"
          }
        },
        {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: h,
            attribute: c.join(" ")
          },
          contains: [
            {
              begin: m,
              className: "keyword"
            },
            {
              begin: /[a-z-]+(?=:)/,
              className: "attribute"
            },
            _,
            l.QUOTE_STRING_MODE,
            l.APOS_STRING_MODE,
            i.HEXCOLOR,
            i.CSS_NUMBER_MODE
          ]
        },
        i.FUNCTION_DISPATCH
      ]
    };
  }
  return ut = d, ut;
}
var gt, sn;
function gi() {
  if (sn)
    return gt;
  sn = 1;
  function t(e) {
    return {
      name: "Shell Session",
      aliases: [
        "console",
        "shellsession"
      ],
      contains: [
        {
          className: "meta.prompt",
          // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
          // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
          // echo /path/to/home > t.exe
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash"
          }
        }
      ]
    };
  }
  return gt = t, gt;
}
var bt, on;
function bi() {
  if (on)
    return bt;
  on = 1;
  function t(e) {
    const n = e.regex, r = e.COMMENT("--", "$"), c = {
      scope: "string",
      variants: [
        {
          begin: /'/,
          end: /'/,
          contains: [{ match: /''/ }]
        }
      ]
    }, o = {
      begin: /"/,
      end: /"/,
      contains: [{ match: /""/ }]
    }, a = [
      "true",
      "false",
      // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
      // "null",
      "unknown"
    ], s = [
      "double precision",
      "large object",
      "with timezone",
      "without timezone"
    ], d = [
      "bigint",
      "binary",
      "blob",
      "boolean",
      "char",
      "character",
      "clob",
      "date",
      "dec",
      "decfloat",
      "decimal",
      "float",
      "int",
      "integer",
      "interval",
      "nchar",
      "nclob",
      "national",
      "numeric",
      "real",
      "row",
      "smallint",
      "time",
      "timestamp",
      "varchar",
      "varying",
      // modifier (character varying)
      "varbinary"
    ], l = [
      "add",
      "asc",
      "collation",
      "desc",
      "final",
      "first",
      "last",
      "view"
    ], i = [
      "abs",
      "acos",
      "all",
      "allocate",
      "alter",
      "and",
      "any",
      "are",
      "array",
      "array_agg",
      "array_max_cardinality",
      "as",
      "asensitive",
      "asin",
      "asymmetric",
      "at",
      "atan",
      "atomic",
      "authorization",
      "avg",
      "begin",
      "begin_frame",
      "begin_partition",
      "between",
      "bigint",
      "binary",
      "blob",
      "boolean",
      "both",
      "by",
      "call",
      "called",
      "cardinality",
      "cascaded",
      "case",
      "cast",
      "ceil",
      "ceiling",
      "char",
      "char_length",
      "character",
      "character_length",
      "check",
      "classifier",
      "clob",
      "close",
      "coalesce",
      "collate",
      "collect",
      "column",
      "commit",
      "condition",
      "connect",
      "constraint",
      "contains",
      "convert",
      "copy",
      "corr",
      "corresponding",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "create",
      "cross",
      "cube",
      "cume_dist",
      "current",
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_row",
      "current_schema",
      "current_time",
      "current_timestamp",
      "current_path",
      "current_role",
      "current_transform_group_for_type",
      "current_user",
      "cursor",
      "cycle",
      "date",
      "day",
      "deallocate",
      "dec",
      "decimal",
      "decfloat",
      "declare",
      "default",
      "define",
      "delete",
      "dense_rank",
      "deref",
      "describe",
      "deterministic",
      "disconnect",
      "distinct",
      "double",
      "drop",
      "dynamic",
      "each",
      "element",
      "else",
      "empty",
      "end",
      "end_frame",
      "end_partition",
      "end-exec",
      "equals",
      "escape",
      "every",
      "except",
      "exec",
      "execute",
      "exists",
      "exp",
      "external",
      "extract",
      "false",
      "fetch",
      "filter",
      "first_value",
      "float",
      "floor",
      "for",
      "foreign",
      "frame_row",
      "free",
      "from",
      "full",
      "function",
      "fusion",
      "get",
      "global",
      "grant",
      "group",
      "grouping",
      "groups",
      "having",
      "hold",
      "hour",
      "identity",
      "in",
      "indicator",
      "initial",
      "inner",
      "inout",
      "insensitive",
      "insert",
      "int",
      "integer",
      "intersect",
      "intersection",
      "interval",
      "into",
      "is",
      "join",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "language",
      "large",
      "last_value",
      "lateral",
      "lead",
      "leading",
      "left",
      "like",
      "like_regex",
      "listagg",
      "ln",
      "local",
      "localtime",
      "localtimestamp",
      "log",
      "log10",
      "lower",
      "match",
      "match_number",
      "match_recognize",
      "matches",
      "max",
      "member",
      "merge",
      "method",
      "min",
      "minute",
      "mod",
      "modifies",
      "module",
      "month",
      "multiset",
      "national",
      "natural",
      "nchar",
      "nclob",
      "new",
      "no",
      "none",
      "normalize",
      "not",
      "nth_value",
      "ntile",
      "null",
      "nullif",
      "numeric",
      "octet_length",
      "occurrences_regex",
      "of",
      "offset",
      "old",
      "omit",
      "on",
      "one",
      "only",
      "open",
      "or",
      "order",
      "out",
      "outer",
      "over",
      "overlaps",
      "overlay",
      "parameter",
      "partition",
      "pattern",
      "per",
      "percent",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "period",
      "portion",
      "position",
      "position_regex",
      "power",
      "precedes",
      "precision",
      "prepare",
      "primary",
      "procedure",
      "ptf",
      "range",
      "rank",
      "reads",
      "real",
      "recursive",
      "ref",
      "references",
      "referencing",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "release",
      "result",
      "return",
      "returns",
      "revoke",
      "right",
      "rollback",
      "rollup",
      "row",
      "row_number",
      "rows",
      "running",
      "savepoint",
      "scope",
      "scroll",
      "search",
      "second",
      "seek",
      "select",
      "sensitive",
      "session_user",
      "set",
      "show",
      "similar",
      "sin",
      "sinh",
      "skip",
      "smallint",
      "some",
      "specific",
      "specifictype",
      "sql",
      "sqlexception",
      "sqlstate",
      "sqlwarning",
      "sqrt",
      "start",
      "static",
      "stddev_pop",
      "stddev_samp",
      "submultiset",
      "subset",
      "substring",
      "substring_regex",
      "succeeds",
      "sum",
      "symmetric",
      "system",
      "system_time",
      "system_user",
      "table",
      "tablesample",
      "tan",
      "tanh",
      "then",
      "time",
      "timestamp",
      "timezone_hour",
      "timezone_minute",
      "to",
      "trailing",
      "translate",
      "translate_regex",
      "translation",
      "treat",
      "trigger",
      "trim",
      "trim_array",
      "true",
      "truncate",
      "uescape",
      "union",
      "unique",
      "unknown",
      "unnest",
      "update",
      "upper",
      "user",
      "using",
      "value",
      "values",
      "value_of",
      "var_pop",
      "var_samp",
      "varbinary",
      "varchar",
      "varying",
      "versioning",
      "when",
      "whenever",
      "where",
      "width_bucket",
      "window",
      "with",
      "within",
      "without",
      "year"
    ], g = [
      "abs",
      "acos",
      "array_agg",
      "asin",
      "atan",
      "avg",
      "cast",
      "ceil",
      "ceiling",
      "coalesce",
      "corr",
      "cos",
      "cosh",
      "count",
      "covar_pop",
      "covar_samp",
      "cume_dist",
      "dense_rank",
      "deref",
      "element",
      "exp",
      "extract",
      "first_value",
      "floor",
      "json_array",
      "json_arrayagg",
      "json_exists",
      "json_object",
      "json_objectagg",
      "json_query",
      "json_table",
      "json_table_primitive",
      "json_value",
      "lag",
      "last_value",
      "lead",
      "listagg",
      "ln",
      "log",
      "log10",
      "lower",
      "max",
      "min",
      "mod",
      "nth_value",
      "ntile",
      "nullif",
      "percent_rank",
      "percentile_cont",
      "percentile_disc",
      "position",
      "position_regex",
      "power",
      "rank",
      "regr_avgx",
      "regr_avgy",
      "regr_count",
      "regr_intercept",
      "regr_r2",
      "regr_slope",
      "regr_sxx",
      "regr_sxy",
      "regr_syy",
      "row_number",
      "sin",
      "sinh",
      "sqrt",
      "stddev_pop",
      "stddev_samp",
      "substring",
      "substring_regex",
      "sum",
      "tan",
      "tanh",
      "translate",
      "translate_regex",
      "treat",
      "trim",
      "trim_array",
      "unnest",
      "upper",
      "value_of",
      "var_pop",
      "var_samp",
      "width_bucket"
    ], b = [
      "current_catalog",
      "current_date",
      "current_default_transform_group",
      "current_path",
      "current_role",
      "current_schema",
      "current_transform_group_for_type",
      "current_user",
      "session_user",
      "system_time",
      "system_user",
      "current_time",
      "localtime",
      "current_timestamp",
      "localtimestamp"
    ], m = [
      "create table",
      "insert into",
      "primary key",
      "foreign key",
      "not null",
      "alter table",
      "add constraint",
      "grouping sets",
      "on overflow",
      "character set",
      "respect nulls",
      "ignore nulls",
      "nulls first",
      "nulls last",
      "depth first",
      "breadth first"
    ], h = g, _ = [
      ...i,
      ...l
    ].filter((C) => !g.includes(C)), y = {
      scope: "variable",
      match: /@[a-z0-9][a-z0-9_]*/
    }, E = {
      scope: "operator",
      match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
      relevance: 0
    }, A = {
      match: n.concat(/\b/, n.either(...h), /\s*\(/),
      relevance: 0,
      keywords: { built_in: h }
    };
    function w(C) {
      return n.concat(
        /\b/,
        n.either(...C.map((P) => P.replace(/\s+/, "\\s+"))),
        /\b/
      );
    }
    const S = {
      scope: "keyword",
      match: w(m),
      relevance: 0
    };
    function D(C, {
      exceptions: P,
      when: N
    } = {}) {
      const T = N;
      return P = P || [], C.map((j) => j.match(/\|\d+$/) || P.includes(j) ? j : T(j) ? `${j}|0` : j);
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      // does not include {} or HTML tags `</`
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: D(_, { when: (C) => C.length < 3 }),
        literal: a,
        type: d,
        built_in: b
      },
      contains: [
        {
          scope: "type",
          match: w(s)
        },
        S,
        A,
        y,
        c,
        o,
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE,
        r,
        E
      ]
    };
  }
  return bt = t, bt;
}
var mt, ln;
function mi() {
  if (ln)
    return mt;
  ln = 1;
  function t(N) {
    return N ? typeof N == "string" ? N : N.source : null;
  }
  function e(N) {
    return n("(?=", N, ")");
  }
  function n(...N) {
    return N.map((T) => t(T)).join("");
  }
  function r(N) {
    const T = N[N.length - 1];
    return typeof T == "object" && T.constructor === Object ? (N.splice(N.length - 1, 1), T) : {};
  }
  function c(...N) {
    return "(" + (r(N).capture ? "" : "?:") + N.map((T) => t(T)).join("|") + ")";
  }
  const o = (N) => n(
    /\b/,
    N,
    /\w$/.test(N) ? /\b/ : /\B/
  ), a = [
    "Protocol",
    // contextual
    "Type"
    // contextual
  ].map(o), s = [
    "init",
    "self"
  ].map(o), d = [
    "Any",
    "Self"
  ], l = [
    // strings below will be fed into the regular `keywords` engine while regex
    // will result in additional modes being created to scan for those keywords to
    // avoid conflicts with other rules
    "actor",
    "any",
    // contextual
    "associatedtype",
    "async",
    "await",
    /as\?/,
    // operator
    /as!/,
    // operator
    "as",
    // operator
    "borrowing",
    // contextual
    "break",
    "case",
    "catch",
    "class",
    "consume",
    // contextual
    "consuming",
    // contextual
    "continue",
    "convenience",
    // contextual
    "copy",
    // contextual
    "default",
    "defer",
    "deinit",
    "didSet",
    // contextual
    "distributed",
    "do",
    "dynamic",
    // contextual
    "each",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    // contextual
    "for",
    "func",
    "get",
    // contextual
    "guard",
    "if",
    "import",
    "indirect",
    // contextual
    "infix",
    // contextual
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    // operator
    "isolated",
    // contextual
    "nonisolated",
    // contextual
    "lazy",
    // contextual
    "let",
    "macro",
    "mutating",
    // contextual
    "nonmutating",
    // contextual
    /open\(set\)/,
    // contextual
    "open",
    // contextual
    "operator",
    "optional",
    // contextual
    "override",
    // contextual
    "package",
    "postfix",
    // contextual
    "precedencegroup",
    "prefix",
    // contextual
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    // contextual
    "rethrows",
    "return",
    "set",
    // contextual
    "some",
    // contextual
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    // operator
    /try!/,
    // operator
    "try",
    // operator
    "typealias",
    /unowned\(safe\)/,
    // contextual
    /unowned\(unsafe\)/,
    // contextual
    "unowned",
    // contextual
    "var",
    "weak",
    // contextual
    "where",
    "while",
    "willSet"
    // contextual
  ], i = [
    "false",
    "nil",
    "true"
  ], g = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right"
  ], b = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warning"
  ], m = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
  ], h = c(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/
  ), _ = c(
    h,
    /[\u0300-\u036F]/,
    /[\u1DC0-\u1DFF]/,
    /[\u20D0-\u20FF]/,
    /[\uFE00-\uFE0F]/,
    /[\uFE20-\uFE2F]/
    // TODO: The following characters are also allowed, but the regex isn't supported yet.
    // /[\u{E0100}-\u{E01EF}]/u
  ), y = n(h, _, "*"), E = c(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
    // The following characters are also allowed, but the regexes aren't supported yet.
    // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
    // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
    // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
    // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
  ), A = c(
    E,
    /\d/,
    /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
  ), w = n(E, A, "*"), S = n(/[A-Z]/, A, "*"), D = [
    "attached",
    "autoclosure",
    n(/convention\(/, c("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "freestanding",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    n(/objc\(/, w, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "Sendable",
    "testable",
    "UIApplicationMain",
    "unchecked",
    "unknown",
    "usableFromInline",
    "warn_unqualified_access"
  ], C = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
  ];
  function P(N) {
    const T = {
      match: /\s+/,
      relevance: 0
    }, j = N.COMMENT(
      "/\\*",
      "\\*/",
      { contains: ["self"] }
    ), K = [
      N.C_LINE_COMMENT_MODE,
      j
    ], J = {
      match: [
        /\./,
        c(...a, ...s)
      ],
      className: { 2: "keyword" }
    }, q = {
      // Consume .keyword to prevent highlighting properties and methods as keywords.
      match: n(/\./, c(...l)),
      relevance: 0
    }, $ = l.filter((z) => typeof z == "string").concat(["_|0"]), F = l.filter((z) => typeof z != "string").concat(d).map(o), u = { variants: [
      {
        className: "keyword",
        match: c(...F, ...s)
      }
    ] }, f = {
      $pattern: c(
        /\b\w+/,
        // regular keywords
        /#\w+/
        // number keywords
      ),
      keyword: $.concat(b),
      literal: i
    }, k = [
      J,
      q,
      u
    ], R = {
      // Consume .built_in to prevent highlighting properties and methods.
      match: n(/\./, c(...m)),
      relevance: 0
    }, U = {
      className: "built_in",
      match: n(/\b/, c(...m), /(?=\()/)
    }, X = [
      R,
      U
    ], Y = {
      // Prevent -> from being highlighting as an operator.
      match: /->/,
      relevance: 0
    }, se = {
      className: "operator",
      relevance: 0,
      variants: [
        { match: y },
        {
          // dot-operator: only operators that start with a dot are allowed to use dots as
          // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
          // characters that may also include dots.
          match: `\\.(\\.|${_})+`
        }
      ]
    }, H = [
      Y,
      se
    ], Z = "([0-9]_*)+", G = "([0-9a-fA-F]_*)+", B = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal floating-point-literal (subsumes decimal-literal)
        { match: `\\b(${Z})(\\.(${Z}))?([eE][+-]?(${Z}))?\\b` },
        // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
        { match: `\\b0x(${G})(\\.(${G}))?([pP][+-]?(${Z}))?\\b` },
        // octal-literal
        { match: /\b0o([0-7]_*)+\b/ },
        // binary-literal
        { match: /\b0b([01]_*)+\b/ }
      ]
    }, V = (z = "") => ({
      className: "subst",
      variants: [
        { match: n(/\\/, z, /[0\\tnr"']/) },
        { match: n(/\\/, z, /u\{[0-9a-fA-F]{1,8}\}/) }
      ]
    }), ee = (z = "") => ({
      className: "subst",
      match: n(/\\/, z, /[\t ]*(?:[\r\n]|\r\n)/)
    }), ne = (z = "") => ({
      className: "subst",
      label: "interpol",
      begin: n(/\\/, z, /\(/),
      end: /\)/
    }), te = (z = "") => ({
      begin: n(z, /"""/),
      end: n(/"""/, z),
      contains: [
        V(z),
        ee(z),
        ne(z)
      ]
    }), le = (z = "") => ({
      begin: n(z, /"/),
      end: n(/"/, z),
      contains: [
        V(z),
        ne(z)
      ]
    }), ie = {
      className: "string",
      variants: [
        te(),
        te("#"),
        te("##"),
        te("###"),
        le(),
        le("#"),
        le("##"),
        le("###")
      ]
    }, ye = [
      N.BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [N.BACKSLASH_ESCAPE]
      }
    ], ae = {
      begin: /\/[^\s](?=[^/\n]*\/)/,
      end: /\//,
      contains: ye
    }, ve = (z) => {
      const Ae = n(z, /\//), we = n(/\//, z);
      return {
        begin: Ae,
        end: we,
        contains: [
          ...ye,
          {
            scope: "comment",
            begin: `#(?!.*${we})`,
            end: /$/
          }
        ]
      };
    }, pe = {
      scope: "regexp",
      variants: [
        ve("###"),
        ve("##"),
        ve("#"),
        ae
      ]
    }, x = { match: n(/`/, w, /`/) }, Oe = {
      className: "variable",
      match: /\$\d+/
    }, Q = {
      className: "variable",
      match: `\\$${A}+`
    }, L = [
      x,
      Oe,
      Q
    ], he = {
      match: /(@|#(un)?)available/,
      scope: "keyword",
      starts: { contains: [
        {
          begin: /\(/,
          end: /\)/,
          keywords: C,
          contains: [
            ...H,
            B,
            ie
          ]
        }
      ] }
    }, ce = {
      scope: "keyword",
      match: n(/@/, c(...D), e(c(/\(/, /\s+/)))
    }, Ee = {
      scope: "meta",
      match: n(/@/, w)
    }, de = [
      he,
      ce,
      Ee
    ], p = {
      match: e(/\b[A-Z]/),
      relevance: 0,
      contains: [
        {
          // Common Apple frameworks, for relevance boost
          className: "type",
          match: n(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, A, "+")
        },
        {
          // Type identifier
          className: "type",
          match: S,
          relevance: 0
        },
        {
          // Optional type
          match: /[?!]+/,
          relevance: 0
        },
        {
          // Variadic parameter
          match: /\.\.\./,
          relevance: 0
        },
        {
          // Protocol composition
          match: n(/\s+&\s+/, e(S)),
          relevance: 0
        }
      ]
    }, v = {
      begin: /</,
      end: />/,
      keywords: f,
      contains: [
        ...K,
        ...k,
        ...de,
        Y,
        p
      ]
    };
    p.contains.push(v);
    const O = {
      match: n(w, /\s*:/),
      keywords: "_|0",
      relevance: 0
    }, I = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: f,
      contains: [
        "self",
        O,
        ...K,
        pe,
        ...k,
        ...X,
        ...H,
        B,
        ie,
        ...L,
        ...de,
        p
      ]
    }, W = {
      begin: /</,
      end: />/,
      keywords: "repeat each",
      contains: [
        ...K,
        p
      ]
    }, re = {
      begin: c(
        e(n(w, /\s*:/)),
        e(n(w, /\s+/, w, /\s*:/))
      ),
      end: /:/,
      relevance: 0,
      contains: [
        {
          className: "keyword",
          match: /\b_\b/
        },
        {
          className: "params",
          match: w
        }
      ]
    }, Me = {
      begin: /\(/,
      end: /\)/,
      keywords: f,
      contains: [
        re,
        ...K,
        ...k,
        ...H,
        B,
        ie,
        ...de,
        p,
        I
      ],
      endsParent: !0,
      illegal: /["']/
    }, Le = {
      match: [
        /(func|macro)/,
        /\s+/,
        c(x.match, w, y)
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        W,
        Me,
        T
      ],
      illegal: [
        /\[/,
        /%/
      ]
    }, xn = {
      match: [
        /\b(?:subscript|init[?!]?)/,
        /\s*(?=[<(])/
      ],
      className: { 1: "keyword" },
      contains: [
        W,
        Me,
        T
      ],
      illegal: /\[|%/
    }, On = {
      match: [
        /operator/,
        /\s+/,
        y
      ],
      className: {
        1: "keyword",
        3: "title"
      }
    }, Mn = {
      begin: [
        /precedencegroup/,
        /\s+/,
        S
      ],
      className: {
        1: "keyword",
        3: "title"
      },
      contains: [p],
      keywords: [
        ...g,
        ...i
      ],
      end: /}/
    }, An = {
      match: [
        /class\b/,
        /\s+/,
        /func\b/,
        /\s+/,
        /\b[A-Za-z_][A-Za-z0-9_]*\b/
      ],
      scope: {
        1: "keyword",
        3: "keyword",
        5: "title.function"
      }
    }, Sn = {
      match: [
        /class\b/,
        /\s+/,
        /var\b/
      ],
      scope: {
        1: "keyword",
        3: "keyword"
      }
    }, Cn = {
      begin: [
        /(struct|protocol|class|extension|enum|actor)/,
        /\s+/,
        w,
        /\s*/
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      },
      keywords: f,
      contains: [
        W,
        ...k,
        {
          begin: /:/,
          end: /\{/,
          keywords: f,
          contains: [
            {
              scope: "title.class.inherited",
              match: S
            },
            ...k
          ],
          relevance: 0
        }
      ]
    };
    for (const z of ie.variants) {
      const Ae = z.contains.find((Tn) => Tn.label === "interpol");
      Ae.keywords = f;
      const we = [
        ...k,
        ...X,
        ...H,
        B,
        ie,
        ...L
      ];
      Ae.contains = [
        ...we,
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            "self",
            ...we
          ]
        }
      ];
    }
    return {
      name: "Swift",
      keywords: f,
      contains: [
        ...K,
        Le,
        xn,
        An,
        Sn,
        Cn,
        On,
        Mn,
        {
          beginKeywords: "import",
          end: /$/,
          contains: [...K],
          relevance: 0
        },
        pe,
        ...k,
        ...X,
        ...H,
        B,
        ie,
        ...L,
        ...de,
        p,
        I
      ]
    };
  }
  return mt = P, mt;
}
var pt, cn;
function pi() {
  if (cn)
    return pt;
  cn = 1;
  function t(e) {
    const n = "true false yes no null", r = "[\\w#;/?:@&=+$,.~*'()[\\]]+", c = {
      className: "attr",
      variants: [
        // added brackets support and special char support
        { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
        {
          // double quoted keys - with brackets and special char support
          begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
        },
        {
          // single quoted keys - with brackets and special char support
          begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
        }
      ]
    }, o = {
      className: "template-variable",
      variants: [
        {
          // jinja templates Ansible
          begin: /\{\{/,
          end: /\}\}/
        },
        {
          // Ruby i18n
          begin: /%\{/,
          end: /\}/
        }
      ]
    }, a = {
      className: "string",
      relevance: 0,
      begin: /'/,
      end: /'/,
      contains: [
        {
          match: /''/,
          scope: "char.escape",
          relevance: 0
        }
      ]
    }, s = {
      className: "string",
      relevance: 0,
      variants: [
        {
          begin: /"/,
          end: /"/
        },
        { begin: /\S+/ }
      ],
      contains: [
        e.BACKSLASH_ESCAPE,
        o
      ]
    }, d = e.inherit(s, { variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [
          {
            begin: /''/,
            relevance: 0
          }
        ]
      },
      {
        begin: /"/,
        end: /"/
      },
      { begin: /[^\s,{}[\]]+/ }
    ] }), l = {
      className: "number",
      begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
    }, i = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: n,
      relevance: 0
    }, g = {
      begin: /\{/,
      end: /\}/,
      contains: [i],
      illegal: "\\n",
      relevance: 0
    }, b = {
      begin: "\\[",
      end: "\\]",
      contains: [i],
      illegal: "\\n",
      relevance: 0
    }, m = [
      c,
      {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      },
      {
        // multi line string
        // Blocks start with a | or > followed by a newline
        //
        // Indentation of subsequent lines must be the same to
        // be considered part of the block
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      },
      {
        // Ruby/Rails erb
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      },
      {
        // named tags
        className: "type",
        begin: "!\\w+!" + r
      },
      // https://yaml.org/spec/1.2/spec.html#id2784064
      {
        // verbatim tags
        className: "type",
        begin: "!<" + r + ">"
      },
      {
        // primary tags
        className: "type",
        begin: "!" + r
      },
      {
        // secondary tags
        className: "type",
        begin: "!!" + r
      },
      {
        // fragment id &ref
        className: "meta",
        begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // fragment reference *ref
        className: "meta",
        begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // array listing
        className: "bullet",
        // TODO: remove |$ hack when we have proper look-ahead support
        begin: "-(?=[ ]|$)",
        relevance: 0
      },
      e.HASH_COMMENT_MODE,
      {
        beginKeywords: n,
        keywords: { literal: n }
      },
      l,
      // numbers are any valid C-style number that
      // sit isolated from other words
      {
        className: "number",
        begin: e.C_NUMBER_RE + "\\b",
        relevance: 0
      },
      g,
      b,
      a,
      s
    ], h = [...m];
    return h.pop(), h.push(d), i.contains = h, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: m
    };
  }
  return pt = t, pt;
}
var ht, dn;
function hi() {
  if (dn)
    return ht;
  dn = 1;
  const t = "[A-Za-z$_][0-9A-Za-z$_]*", e = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends",
    // It's reached stage 3, which is "recommended for implementation":
    "using"
  ], n = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], r = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
  ], c = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], o = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], a = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global"
    // Node.js
  ], s = [].concat(
    o,
    r,
    c
  );
  function d(i) {
    const g = i.regex, b = (B, { after: V }) => {
      const ee = "</" + B[0].slice(1);
      return B.input.indexOf(ee, V) !== -1;
    }, m = t, h = {
      begin: "<>",
      end: "</>"
    }, _ = /<[A-Za-z0-9\\._:-]+\s*\/>/, y = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (B, V) => {
        const ee = B[0].length + B.index, ne = B.input[ee];
        if (
          // HTML should not include another raw `<` inside a tag
          // nested type?
          // `<Array<Array<number>>`, etc.
          ne === "<" || // the , gives away that this is not HTML
          // `<T, A extends keyof T, V>`
          ne === ","
        ) {
          V.ignoreMatch();
          return;
        }
        ne === ">" && (b(B, { after: ee }) || V.ignoreMatch());
        let te;
        const le = B.input.substring(ee);
        if (te = le.match(/^\s*=/)) {
          V.ignoreMatch();
          return;
        }
        if ((te = le.match(/^\s+extends\s+/)) && te.index === 0) {
          V.ignoreMatch();
          return;
        }
      }
    }, E = {
      $pattern: t,
      keyword: e,
      literal: n,
      built_in: s,
      "variable.language": a
    }, A = "[0-9](_?[0-9])*", w = `\\.(${A})`, S = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", D = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${S})((${w})|\\.)?|(${w}))[eE][+-]?(${A})\\b` },
        { begin: `\\b(${S})\\b((${w})\\b|\\.)?|(${w})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, C = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: E,
      contains: []
      // defined later
    }, P = {
      begin: ".?html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          i.BACKSLASH_ESCAPE,
          C
        ],
        subLanguage: "xml"
      }
    }, N = {
      begin: ".?css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          i.BACKSLASH_ESCAPE,
          C
        ],
        subLanguage: "css"
      }
    }, T = {
      begin: ".?gql`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          i.BACKSLASH_ESCAPE,
          C
        ],
        subLanguage: "graphql"
      }
    }, j = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        i.BACKSLASH_ESCAPE,
        C
      ]
    }, K = {
      className: "comment",
      variants: [
        i.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                  },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: m + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        i.C_BLOCK_COMMENT_MODE,
        i.C_LINE_COMMENT_MODE
      ]
    }, J = [
      i.APOS_STRING_MODE,
      i.QUOTE_STRING_MODE,
      P,
      N,
      T,
      j,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      D
      // This is intentional:
      // See https://github.com/highlightjs/highlight.js/issues/3288
      // hljs.REGEXP_MODE
    ];
    C.contains = J.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: E,
      contains: [
        "self"
      ].concat(J)
    });
    const q = [].concat(K, C.contains), $ = q.concat([
      // eat recursive parens in sub expressions
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: E,
        contains: ["self"].concat(q)
      }
    ]), F = {
      className: "params",
      // convert this to negative lookbehind in v12
      begin: /(\s*)\(/,
      // to match the parms with
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: E,
      contains: $
    }, u = {
      variants: [
        // class Car extends vehicle
        {
          match: [
            /class/,
            /\s+/,
            m,
            /\s+/,
            /extends/,
            /\s+/,
            g.concat(m, "(", g.concat(/\./, m), ")*")
          ],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        },
        // class Car
        {
          match: [
            /class/,
            /\s+/,
            m
          ],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }
      ]
    }, f = {
      relevance: 0,
      match: g.either(
        // Hard coded exceptions
        /\bJSON/,
        // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        // P
        // single letters are not highlighted
        // BLAH
        // this will be flagged as a UPPER_CASE_CONSTANT instead
      ),
      className: "title.class",
      keywords: {
        _: [
          // se we still get relevance credit for JS library classes
          ...r,
          ...c
        ]
      }
    }, k = {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, R = {
      variants: [
        {
          match: [
            /function/,
            /\s+/,
            m,
            /(?=\s*\()/
          ]
        },
        // anonymous function
        {
          match: [
            /function/,
            /\s*(?=\()/
          ]
        }
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [F],
      illegal: /%/
    }, U = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    };
    function X(B) {
      return g.concat("(?!", B.join("|"), ")");
    }
    const Y = {
      match: g.concat(
        /\b/,
        X([
          ...o,
          "super",
          "import"
        ].map((B) => `${B}\\s*\\(`)),
        m,
        g.lookahead(/\s*\(/)
      ),
      className: "title.function",
      relevance: 0
    }, se = {
      begin: g.concat(/\./, g.lookahead(
        g.concat(m, /(?![0-9A-Za-z$_(])/)
      )),
      end: m,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    }, H = {
      match: [
        /get|set/,
        /\s+/,
        m,
        /(?=\()/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        {
          // eat to avoid empty params
          begin: /\(\)/
        },
        F
      ]
    }, Z = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + i.UNDERSCORE_IDENT_RE + ")\\s*=>", G = {
      match: [
        /const|var|let/,
        /\s+/,
        m,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        // async is optional
        g.lookahead(Z)
      ],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [
        F
      ]
    };
    return {
      name: "JavaScript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: E,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: $, CLASS_REFERENCE: f },
      illegal: /#(?![$_A-z])/,
      contains: [
        i.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        k,
        i.APOS_STRING_MODE,
        i.QUOTE_STRING_MODE,
        P,
        N,
        T,
        j,
        K,
        // Skip numbers when they are part of a variable name
        { match: /\$\d+/ },
        D,
        f,
        {
          scope: "attr",
          match: m + g.lookahead(":"),
          relevance: 0
        },
        G,
        {
          // "value" container
          begin: "(" + i.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            K,
            i.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: Z,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: i.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /(\s*)\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: E,
                      contains: $
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              match: /\s+/,
              relevance: 0
            },
            {
              // JSX
              variants: [
                { begin: h.begin, end: h.end },
                { match: _ },
                {
                  begin: y.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": y.isTrulyOpeningTag,
                  end: y.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: y.begin,
                  end: y.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ]
        },
        R,
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: "\\b(?!function)" + i.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          label: "func.def",
          contains: [
            F,
            i.inherit(i.TITLE_MODE, { begin: m, className: "title.function" })
          ]
        },
        // catch ... so it won't trigger the property rule below
        {
          match: /\.\.\./,
          relevance: 0
        },
        se,
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          match: "\\$" + m,
          relevance: 0
        },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [F]
        },
        Y,
        U,
        u,
        H,
        {
          match: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function l(i) {
    const g = i.regex, b = d(i), m = t, h = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "symbol",
      "bigint",
      "unknown"
    ], _ = {
      begin: [
        /namespace/,
        /\s+/,
        i.IDENT_RE
      ],
      beginScope: {
        1: "keyword",
        3: "title.class"
      }
    }, y = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: {
        keyword: "interface extends",
        built_in: h
      },
      contains: [b.exports.CLASS_REFERENCE]
    }, E = {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }, A = [
      "type",
      // "namespace",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly",
      "enum",
      "override",
      "satisfies"
    ], w = {
      $pattern: t,
      keyword: e.concat(A),
      literal: n,
      built_in: s.concat(h),
      "variable.language": a
    }, S = {
      className: "meta",
      begin: "@" + m
    }, D = (T, j, K) => {
      const J = T.contains.findIndex((q) => q.label === j);
      if (J === -1)
        throw new Error("can not find mode to replace");
      T.contains.splice(J, 1, K);
    };
    Object.assign(b.keywords, w), b.exports.PARAMS_CONTAINS.push(S);
    const C = b.contains.find((T) => T.scope === "attr"), P = Object.assign(
      {},
      C,
      { match: g.concat(m, g.lookahead(/\s*\?:/)) }
    );
    b.exports.PARAMS_CONTAINS.push([
      b.exports.CLASS_REFERENCE,
      // class reference for highlighting the params types
      C,
      // highlight the params key
      P
      // Added for optional property assignment highlighting
    ]), b.contains = b.contains.concat([
      S,
      _,
      y,
      P
      // Added for optional property assignment highlighting
    ]), D(b, "shebang", i.SHEBANG()), D(b, "use_strict", E);
    const N = b.contains.find((T) => T.label === "func.def");
    return N.relevance = 0, Object.assign(b, {
      name: "TypeScript",
      aliases: [
        "ts",
        "tsx",
        "mts",
        "cts"
      ]
    }), b;
  }
  return ht = l, ht;
}
var ft, un;
function fi() {
  if (un)
    return ft;
  un = 1;
  function t(e) {
    const n = e.regex, r = {
      className: "string",
      begin: /"(""|[^/n])"C\b/
    }, c = {
      className: "string",
      begin: /"/,
      end: /"/,
      illegal: /\n/,
      contains: [
        {
          // double quote escape
          begin: /""/
        }
      ]
    }, o = /\d{1,2}\/\d{1,2}\/\d{4}/, a = /\d{4}-\d{1,2}-\d{1,2}/, s = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, d = /\d{1,2}(:\d{1,2}){1,2}/, l = {
      className: "literal",
      variants: [
        {
          // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
          begin: n.concat(/# */, n.either(a, o), / *#/)
        },
        {
          // #H:mm[:ss]# (24h Time)
          begin: n.concat(/# */, d, / *#/)
        },
        {
          // #h[:mm[:ss]] A# (12h Time)
          begin: n.concat(/# */, s, / *#/)
        },
        {
          // date plus time
          begin: n.concat(
            /# */,
            n.either(a, o),
            / +/,
            n.either(s, d),
            / *#/
          )
        }
      ]
    }, i = {
      className: "number",
      relevance: 0,
      variants: [
        {
          // Float
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        },
        {
          // Integer (base 10)
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 16)
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 8)
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 2)
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }
      ]
    }, g = {
      className: "label",
      begin: /^\w+:/
    }, b = e.COMMENT(/'''/, /$/, { contains: [
      {
        className: "doctag",
        begin: /<\/?/,
        end: />/
      }
    ] }), m = e.COMMENT(null, /$/, { variants: [
      { begin: /'/ },
      {
        // TODO: Use multi-class for leading spaces
        begin: /([\t ]|^)REM(?=\s)/
      }
    ] });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: { label: "symbol" },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: (
          // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
        ),
        type: (
          // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
          "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
        ),
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        r,
        c,
        l,
        i,
        g,
        b,
        m,
        {
          className: "meta",
          // TODO: Use multi-class for indentation once available
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
          contains: [m]
        }
      ]
    };
  }
  return ft = t, ft;
}
var _t, gn;
function _i() {
  if (gn)
    return _t;
  gn = 1;
  function t(e) {
    e.regex;
    const n = e.COMMENT(/\(;/, /;\)/);
    n.contains.push("self");
    const r = e.COMMENT(/;;/, /$/), c = [
      "anyfunc",
      "block",
      "br",
      "br_if",
      "br_table",
      "call",
      "call_indirect",
      "data",
      "drop",
      "elem",
      "else",
      "end",
      "export",
      "func",
      "global.get",
      "global.set",
      "local.get",
      "local.set",
      "local.tee",
      "get_global",
      "get_local",
      "global",
      "if",
      "import",
      "local",
      "loop",
      "memory",
      "memory.grow",
      "memory.size",
      "module",
      "mut",
      "nop",
      "offset",
      "param",
      "result",
      "return",
      "select",
      "set_global",
      "set_local",
      "start",
      "table",
      "tee_local",
      "then",
      "type",
      "unreachable"
    ], o = {
      begin: [
        /(?:func|call|call_indirect)/,
        /\s+/,
        /\$[^\s)]+/
      ],
      className: {
        1: "keyword",
        3: "title.function"
      }
    }, a = {
      className: "variable",
      begin: /\$[\w_]+/
    }, s = {
      match: /(\((?!;)|\))+/,
      className: "punctuation",
      relevance: 0
    }, d = {
      className: "number",
      relevance: 0,
      // borrowed from Prism, TODO: split out into variants
      match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
    }, l = {
      // look-ahead prevents us from gobbling up opcodes
      match: /(i32|i64|f32|f64)(?!\.)/,
      className: "type"
    }, i = {
      className: "keyword",
      // borrowed from Prism, TODO: split out into variants
      match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
    };
    return {
      name: "WebAssembly",
      keywords: {
        $pattern: /[\w.]+/,
        keyword: c
      },
      contains: [
        r,
        n,
        {
          match: [
            /(?:offset|align)/,
            /\s*/,
            /=/
          ],
          className: {
            1: "keyword",
            3: "operator"
          }
        },
        a,
        s,
        o,
        e.QUOTE_STRING_MODE,
        l,
        i,
        d
      ]
    };
  }
  return _t = t, _t;
}
var M = Ba;
M.registerLanguage("xml", $a());
M.registerLanguage("bash", za());
M.registerLanguage("c", ja());
M.registerLanguage("cpp", Fa());
M.registerLanguage("csharp", Ua());
M.registerLanguage("css", Pa());
M.registerLanguage("markdown", Ha());
M.registerLanguage("diff", Ka());
M.registerLanguage("ruby", qa());
M.registerLanguage("go", Za());
M.registerLanguage("graphql", Ga());
M.registerLanguage("ini", Wa());
M.registerLanguage("java", Qa());
M.registerLanguage("javascript", Xa());
M.registerLanguage("json", Va());
M.registerLanguage("kotlin", Ja());
M.registerLanguage("less", Ya());
M.registerLanguage("lua", ei());
M.registerLanguage("makefile", ti());
M.registerLanguage("perl", ni());
M.registerLanguage("objectivec", ai());
M.registerLanguage("php", ii());
M.registerLanguage("php-template", ri());
M.registerLanguage("plaintext", si());
M.registerLanguage("python", oi());
M.registerLanguage("python-repl", li());
M.registerLanguage("r", ci());
M.registerLanguage("rust", di());
M.registerLanguage("scss", ui());
M.registerLanguage("shell", gi());
M.registerLanguage("sql", bi());
M.registerLanguage("swift", mi());
M.registerLanguage("yaml", pi());
M.registerLanguage("typescript", hi());
M.registerLanguage("vbnet", fi());
M.registerLanguage("wasm", _i());
M.HighlightJS = M;
M.default = M;
var yi = M;
const vi = /* @__PURE__ */ Pn(yi);
var Ei = Object.defineProperty, wi = Object.getOwnPropertyDescriptor, me = (t, e, n, r) => {
  for (var c = r > 1 ? void 0 : r ? wi(e, n) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (c = (r ? a(e, n, c) : a(c)) || c);
  return r && c && Ei(e, n, c), c;
};
let oe = class extends Dn {
  constructor() {
    super(...arguments), this.inline = !1, this.hideHeader = !1, this._code = "";
  }
  highlight() {
    this._code = "", this._codeItems.forEach((t) => {
      this._code += vi.highlight(t.textContent ?? "", {
        language: this.language ?? ""
      }).value, this.requestUpdate();
    });
  }
  firstUpdated() {
    this.highlight();
  }
  render() {
    let t = Se`${this.renderContainer()}`;
    return this.hideHeader || (t = Se`${this.renderHeader()}${this.renderContainer()}`), t;
  }
  renderContainer() {
    const t = {
      "cv-code-snippet": !0,
      hljs: !0,
      inline: this.inline
    };
    t[`language-${this.language}`] = !0;
    const e = document.createElement("div");
    e.innerHTML = this._code.trim();
    let n;
    return this.maxHeight && this.maxHeight > 0 && (n = `max-height: ${this.maxHeight}px`), Se` <pre
        style="${n}"
        part="container"
      ><code part="code" class="${Ln(t)}">${e}</code></pre>
      <slot class="code-slot"></slot>`;
  }
  renderHeader() {
    return Se`<div class="header" part="header">
      <div class="title">${this.label}</div>
      <span><slot name="actionItems"></slot></span>
    </div>`;
  }
};
oe.styles = [
  In`
      ${Rn(Hn)}
    `
];
me([
  xe()
], oe.prototype, "language", 2);
me([
  xe()
], oe.prototype, "label", 2);
me([
  xe({ type: Boolean, reflect: !0 })
], oe.prototype, "inline", 2);
me([
  xe({ type: Boolean, reflect: !0 })
], oe.prototype, "hideHeader", 2);
me([
  zn({})
], oe.prototype, "_codeItems", 2);
me([
  xe()
], oe.prototype, "maxHeight", 2);
oe = me([
  Bn("cv-code-snippet")
], oe);
const Ni = "_codeSnippetWrapper_1mzmt_1", ki = "_copyButton_1mzmt_5", xi = "_codeSnippet_1mzmt_1", Oi = "_headerHidden_1mzmt_22", Re = {
  codeSnippetWrapper: Ni,
  copyButton: ki,
  codeSnippet: xi,
  headerHidden: Oi
}, Mi = $n({
  tagName: "cv-code-snippet",
  elementClass: oe,
  react: jn
}), Ai = (t) => {
  const {
    content: e,
    hideHeader: n
  } = t, r = () => {
    navigator.clipboard.writeText(e);
  };
  return /* @__PURE__ */ Ce("div", {
    className: Re.codeSnippetWrapper,
    children: /* @__PURE__ */ Un("div", {
      className: `${Re.codeSnippet} ${n ? Re.headerHidden : ""}`,
      children: [/* @__PURE__ */ Ce(Mi, {
        ...t,
        children: e
      }), /* @__PURE__ */ Ce("div", {
        className: `${Re.copyButton}`,
        children: /* @__PURE__ */ Ce(Fn, {
          icon: "content_copy",
          onClick: r
        })
      })]
    })
  });
};
Ai.displayName = "CodeSnippet";
export {
  Ai as default
};
