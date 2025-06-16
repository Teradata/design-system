import i from "react";
import { iconMap as l } from "../../assets/social-icons/iconMap.js";
import { jsx as h } from "react/jsx-runtime";
const g = ({
  className: m,
  size: s = 24,
  color: p = "currentColor",
  title: c,
  iconName: r,
  defaultPath: t = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}) => {
  const [a, e] = i.useState(t);
  return i.useEffect(() => {
    const n = l[r], o = n == null ? void 0 : n.match(/<path[^>]*d="([^"]*)"[^>]*>/);
    o != null && o[1] ? e(o[1]) : (console.warn(`Icon "${r}" not found or has no <path d="...">`), e(t));
  }, [r, t]), /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: s,
    height: s,
    fill: p,
    className: m,
    role: "img",
    "aria-hidden": !c,
    "aria-label": c,
    children: /* @__PURE__ */ h("path", {
      d: a
    })
  });
};
export {
  g as SvgIcon
};
