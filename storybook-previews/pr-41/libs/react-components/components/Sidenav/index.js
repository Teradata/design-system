import { jsx as i } from "react/jsx-runtime";
import '../../assets/index6.css';const o = "_sidenav_ahtnp_1", h = "_show_ahtnp_15", _ = "_left_ahtnp_18", d = "_right_ahtnp_21", t = {
  sidenav: o,
  show: h,
  left: _,
  right: d
}, r = ({
  children: s,
  show: n,
  left: a,
  style: e
}) => /* @__PURE__ */ i("div", {
  className: `${t.sidenav} ${n ? t.show : ""} ${a ? t.left : t.right}`,
  style: e,
  children: s
});
r.displayName = "Sidenav";
export {
  r as default
};
