import s from "../Icon/index.js";
import { jsx as o } from "react/jsx-runtime";
import '../../assets/index4.css';const t = "_iconLink_hea44_1", l = "_icon_hea44_1", f = {
  iconLink: t,
  icon: l
}, k = ({
  iconName: i,
  href: e,
  external: c = !0,
  color: a = "#fff",
  size: r = 16,
  label: n
}) => /* @__PURE__ */ o("a", {
  href: e,
  target: c ? "_blank" : "_self",
  className: f.iconLink,
  rel: "noreferrer",
  "aria-label": `Social Link${n ? `- ${n}` : ""}`,
  children: /* @__PURE__ */ o(s, {
    className: i,
    style: {
      color: a,
      fontSize: r
    }
  })
});
k.displayName = "IconLink";
export {
  k as default
};
