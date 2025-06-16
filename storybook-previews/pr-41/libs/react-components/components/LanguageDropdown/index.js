import { useState as s } from "react";
import { jsxs as m, jsx as o } from "react/jsx-runtime";
import '../../assets/index8.css';const v = "_languageSelectorWrapper_18ecj_1", j = "_languageSelectorToggle_18ecj_6", $ = "_languageSelector_18ecj_1", f = "_languageOption_18ecj_50", b = "_active_18ecj_58", h = "_top_18ecj_75", t = {
  languageSelectorWrapper: v,
  languageSelectorToggle: j,
  languageSelector: $,
  languageOption: f,
  active: b,
  top: h
}, k = ({
  selectedLanguage: g,
  languages: l,
  onLanguageChange: n,
  menuPosition: p
}) => {
  const [c, u] = s(!1), i = l == null ? void 0 : l.find((e) => e.value === g), [a, _] = s(i || null), r = () => {
    u(!c);
  }, d = (e) => {
    _(e), n && n(e.value), r();
  };
  return /* @__PURE__ */ m("div", {
    className: `${t.languageSelectorWrapper} ${c ? t.active : ""}`,
    children: [/* @__PURE__ */ o("button", {
      "aria-label": "Click or press enter to open menu",
      tabIndex: 0,
      "aria-haspopup": "true",
      className: `${t.languageSelectorToggle} ${t.selected}`,
      onClick: r,
      children: a == null ? void 0 : a.label
    }), /* @__PURE__ */ o("ul", {
      className: `${t.languageSelector} ${p === "top" ? t.top : ""}`,
      role: "menu",
      children: l.map((e, S) => /* @__PURE__ */ o("li", {
        className: `${t.languageOption} ${e.value === (a == null ? void 0 : a.value) ? t.active : ""}`,
        onClick: () => d(e),
        tabIndex: 0,
        children: e.label
      }, S))
    })]
  });
};
k.displayName = "LanguageDropdown";
export {
  k as default
};
