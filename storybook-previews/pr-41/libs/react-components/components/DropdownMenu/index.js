import { useState as a } from "react";
import { e as l } from "../../external-link-Cof3-Wdn.mjs";
import { jsxs as s, jsx as o } from "react/jsx-runtime";
import '../../assets/index11.css';const p = "_caret_17u71_1", u = "_active_17u71_12", _ = "_dropdown_17u71_16", m = "_dropdownToggle_17u71_20", w = "_dropdownIcon_17u71_27", i = "_dropdownIconOpen_17u71_38", I = "_dropdownMenu_17u71_42", M = "_dropdownMenuItem_17u71_49", g = "_dropdownMenuItemLabel_17u71_84", x = "_externalLinkImg_17u71_90", e = {
  caret: p,
  active: u,
  dropdown: _,
  dropdownToggle: m,
  dropdownIcon: w,
  dropdownIconOpen: i,
  dropdownMenu: I,
  dropdownMenuItem: M,
  dropdownMenuItemLabel: g,
  externalLinkImg: x
}, k = ({
  navItem: n
}) => {
  const [r, d] = a(!1), t = () => {
    d(!r);
  };
  return /* @__PURE__ */ s("li", {
    className: `${e.dropdownMenuItem} ${n.navItems ? e.nested : ""}`,
    children: [n.navItems ? /* @__PURE__ */ s("div", {
      className: e.dropdownMenuItemLabel,
      onClick: t,
      children: [/* @__PURE__ */ o("span", {
        children: n.label
      }), /* @__PURE__ */ o("span", {
        className: `${e.caret} ${r ? e.active : ""}`
      })]
    }) : /* @__PURE__ */ s("a", {
      href: n.href,
      target: "_blank",
      rel: "noreferrer",
      children: [n.label, n.external && /* @__PURE__ */ o("img", {
        className: e.externalLinkImg,
        src: l,
        alt: "External link"
      })]
    }), n.navItems && r && /* @__PURE__ */ o(L, {
      navItems: n.navItems
    })]
  });
}, L = ({
  navItems: n
}) => ((d) => d ? /* @__PURE__ */ o("ul", {
  className: e.dropdownMenu,
  children: d.map((t, c) => /* @__PURE__ */ o(k, {
    navItem: t
  }, c))
}) : null)(n);
export {
  L as DropdownMenu,
  k as DropdownMenuItem
};
