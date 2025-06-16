import B from "../Icon/index.js";
import { jsxs as c, jsx as e } from "react/jsx-runtime";
import '../../assets/index16.css';const _ = "_tdButton_bj9g9_1", l = "_tdButtonPrimary_bj9g9_2", i = "_trailingIcon_bj9g9_32", m = "_tdButtonSecondary_bj9g9_37", y = "_tdButtonText_bj9g9_47", g = "_tdButtonsmall_bj9g9_56", t = {
  tdButton: _,
  tdButtonPrimary: l,
  trailingIcon: i,
  tdButtonSecondary: m,
  tdButtonText: y,
  tdButtonsmall: g
}, x = ({
  icon: n,
  label: d,
  primary: r,
  variant: u,
  size: o,
  trailingIcon: a,
  onClick: s
}) => /* @__PURE__ */ c("button", {
  type: "button",
  className: `${t.tdButton} ${u === "text" ? t.tdButtonText : r ? t.tdButtonPrimary : t.tdButtonSecondary} ${o ? t[`tdButton${o}`] : ""} ${a ? t.trailingIcon : ""}`,
  onClick: s,
  children: [n && /* @__PURE__ */ e(B, {
    className: n,
    style: {
      fontSize: "0.75rem"
    }
  }), d]
});
export {
  x as default
};
