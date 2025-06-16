import u, { useState as a, useEffect as S } from "react";
import r from "../Chip/index.js";
import { jsx as p } from "react/jsx-runtime";
import '../../assets/index13.css';const y = "_chipSet_58wx8_1", $ = {
  chipSet: y
}, x = ({
  children: n,
  className: o = "",
  defaultSelected: i,
  multiSelect: l = !1,
  onChipSelect: d,
  selectable: h = !0
}) => {
  const [s, c] = a([]), f = (t) => {
    let e = s;
    l ? e = s.includes(t) ? s.filter((m) => m !== t) : [...s, t] : s.includes(t) || (e = [t]), c(e), d(e);
  }, C = u.Children.toArray(n).filter((t) => t.type === r);
  return S(() => {
    i && c([i]);
  }, [i]), /* @__PURE__ */ p("div", {
    className: `${$.chipSet} ${o}`,
    children: C.map((t) => {
      const {
        label: e
      } = t.props;
      return /* @__PURE__ */ p(r, {
        label: e,
        onClick: () => f(e),
        selectable: h,
        selected: s.includes(e)
      }, `${e}-${s.includes(e)}`);
    })
  });
};
x.displayName = "ChipSet";
export {
  x as default
};
