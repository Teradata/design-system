import { useState as l } from "react";
import m from "../Chip/index.js";
import d from "../ChipSet/index.js";
import { jsx as e, jsxs as S } from "react/jsx-runtime";
import '../../assets/index2.css';const _ = "_chipSet_1i66c_1", C = "_tabBar_1i66c_6", f = "_tabContent_1i66c_18", c = {
  chipSet: _,
  tabBar: C,
  tabContent: f
}, h = ({
  children: a
}) => /* @__PURE__ */ e("div", {
  children: a
}), u = ({
  defaultSelectedIndex: a = 0,
  children: t
}) => {
  const [p, r] = l(a), b = t[a].props.label, i = (s) => {
    const o = t.findIndex((n) => n.props.label === s[0]);
    r(o);
  };
  return /* @__PURE__ */ S("div", {
    children: [/* @__PURE__ */ e("div", {
      className: c.tabBar,
      children: /* @__PURE__ */ e(d, {
        onChipSelect: i,
        defaultSelected: b,
        className: c.chipSet,
        children: t.map((s, o) => {
          const {
            label: n
          } = s.props;
          return /* @__PURE__ */ e(m, {
            label: n,
            selectable: !0
          }, o);
        })
      })
    }), /* @__PURE__ */ e("div", {
      className: c.tabContent,
      children: (t == null ? void 0 : t.length) && t[p].props.children
    })]
  });
};
h.displayName = "Tab";
u.displayName = "TabBar";
export {
  h as Tab,
  u as TabBar
};
