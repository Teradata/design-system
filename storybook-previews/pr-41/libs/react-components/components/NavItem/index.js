import { useState as h, useRef as x, useEffect as f } from "react";
import { e as L } from "../../external-link-Cof3-Wdn.mjs";
import { jsx as a, jsxs as _ } from "react/jsx-runtime";
import '../../assets/index7.css';const b = "_navItemLink_b236k_1", g = "_isOpen_b236k_19", O = "_active_b236k_20", $ = "_navItemWrapper_b236k_33", N = "_navItemMenu_b236k_37", E = "_externalLinkImg_b236k_70", n = {
  navItemLink: b,
  isOpen: g,
  active: O,
  navItemWrapper: $,
  navItemMenu: N,
  externalLinkImg: E
}, y = ({
  active: s = !1,
  href: p,
  nestedNavItems: t = [],
  label: o,
  external: d,
  onClick: u,
  onMenuChange: l
}) => {
  const [r, k] = h(!1), c = x(null), m = (e) => {
    c.current && !c.current.contains(e.target) && k(!1);
  }, v = () => {
    t.length && k(!r), u();
  }, I = (e) => {
    t.forEach((i) => {
      i.active = !1;
    }), e.active = !0;
  };
  return f(() => {
    if (t.length)
      return document.body.addEventListener("click", m), () => {
        document.body.removeEventListener("click", m);
      };
  }, [t]), f(() => {
    l && l(r);
  }, [r, l]), /* @__PURE__ */ a("li", {
    children: t.length ? /* @__PURE__ */ _("div", {
      ref: c,
      className: n.navItemWrapper,
      children: [/* @__PURE__ */ a("div", {
        className: `${n.navItemLink} ${r ? n.isOpen : ""} ${s ? n.active : ""}`,
        onClick: v,
        children: o
      }), r && /* @__PURE__ */ a("div", {
        className: n.navItemMenu,
        children: /* @__PURE__ */ a("ul", {
          children: t.map((e, i) => /* @__PURE__ */ _("li", {
            onClick: () => I(e),
            children: [/* @__PURE__ */ a("a", {
              href: e.href,
              target: e.external ? "_blank" : "_self",
              rel: "noreferrer",
              className: `${e.external ? n.externalLink : ""} ${e.active ? n.active : ""}`,
              children: e.label
            }), e.external && /* @__PURE__ */ a("img", {
              className: n.externalLinkImg,
              src: L,
              alt: "External link"
            })]
          }, i))
        })
      })]
    }) : /* @__PURE__ */ a("a", {
      href: p,
      target: d ? "_blank" : "_self",
      rel: "noreferrer",
      className: `${n.navItemLink} ${s ? n.active : ""}`,
      onClick: v,
      children: o
    })
  });
};
y.displayName = "NavItem";
export {
  y as default
};
