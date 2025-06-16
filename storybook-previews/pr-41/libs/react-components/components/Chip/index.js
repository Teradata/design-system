import { useState as d, useEffect as f } from "react";
import { jsx as h } from "react/jsx-runtime";
import '../../assets/index14.css';const r = "_chip_1kl2v_1", _ = "_selectable_1kl2v_13", m = "_selected_1kl2v_20", t = {
  chip: r,
  selectable: _,
  selected: m
}, k = ({
  label: o = "",
  onClick: c,
  selectable: e = !1,
  selected: s = !1
}) => {
  const [i, l] = d(e && s), n = () => {
    e && (l(!i), c && c());
  }, a = (p) => {
    p.key === "Enter" && n();
  };
  return f(() => {
    e && l(s);
  }, [e, s]), /* @__PURE__ */ h("div", {
    className: `${t.chip} ${i ? t.selected : ""} ${e ? t.selectable : ""}`,
    onClick: n,
    onKeyUp: a,
    tabIndex: 0,
    children: o
  });
};
k.displayName = "Chip";
export {
  k as default
};
