import { useState as k } from "react";
import { e as p } from "../../external-link-Cof3-Wdn.mjs";
import { SvgIcon as L } from "../SvgIcon/index.js";
import { jsxs as i, Fragment as h, jsx as t } from "react/jsx-runtime";
import '../../assets/index9.css';const m = "_containerWide_ujq8b_1", b = "_caret_ujq8b_19", d = "_active_ujq8b_30", u = "_footer_ujq8b_38", N = "_footerLinksWrapper_ujq8b_43", I = "_footerLink_ujq8b_43", g = "_footerLinkTitle_ujq8b_54", j = "_socialLinksWrapper_ujq8b_63", q = "_footerLinkItem_ujq8b_67", W = "_footerNavLink_ujq8b_71", v = "_socialLinksList_ujq8b_91", x = "_socialLink_ujq8b_63", $ = "_legalLinksWrapper_ujq8b_116", y = "_copyrightWrapper_ujq8b_122", T = "_copyrightLinks_ujq8b_128", O = "_copyrightText_ujq8b_137", F = "_externalIconImg_ujq8b_141", w = "_linksOfInterest_ujq8b_150", S = "_linksOfInterestTitle_ujq8b_171", C = "_linkOfInterest_ujq8b_177", z = "_collapsible_ujq8b_225", A = "_footerLinkList_ujq8b_240", B = "_show_ujq8b_243", e = {
  containerWide: m,
  caret: b,
  active: d,
  footer: u,
  footerLinksWrapper: N,
  footerLink: I,
  footerLinkTitle: g,
  socialLinksWrapper: j,
  footerLinkItem: q,
  footerNavLink: W,
  socialLinksList: v,
  socialLink: x,
  legalLinksWrapper: $,
  copyrightWrapper: y,
  copyrightLinks: T,
  copyrightText: O,
  externalIconImg: F,
  linksOfInterest: w,
  linksOfInterestTitle: S,
  linkOfInterest: C,
  collapsible: z,
  footerLinkList: A,
  show: B
}, D = ({
  title: o,
  items: a
}) => {
  const [n, _] = k(!1), c = () => {
    _(!n);
  };
  return /* @__PURE__ */ i("div", {
    className: `${e.footerLink} ${e.collapsible}`,
    children: [/* @__PURE__ */ i("div", {
      className: e.footerLinkTitle,
      onClick: c,
      children: [o, /* @__PURE__ */ t("span", {
        className: `${e.caret} ${n ? e.active : ""}`
      })]
    }), a && /* @__PURE__ */ t("ul", {
      className: `${e.footerLinkList} ${n ? e.show : ""}`,
      children: a.map((l, r) => /* @__PURE__ */ t(f, {
        label: l.label,
        href: l.href,
        external: l.external
      }, r))
    })]
  });
}, f = ({
  label: o,
  href: a,
  external: n = !1
}) => /* @__PURE__ */ t("li", {
  className: e.footerLinkItem,
  children: /* @__PURE__ */ i("a", {
    href: a,
    className: e.footerNavLink,
    target: n ? "_blank" : "_self",
    rel: "noreferrer",
    children: [o, n && /* @__PURE__ */ t("img", {
      src: p,
      className: e.externalIconImg,
      alt: `Link to ${o}`
    })]
  })
}), E = ({
  links: o,
  copyright: a,
  socialLinks: n,
  legalLinks: _,
  linksOfInterest: c
}) => {
  var l;
  return /* @__PURE__ */ i(h, {
    children: [c && /* @__PURE__ */ i("section", {
      className: e.linksOfInterest,
      children: [/* @__PURE__ */ t("div", {
        className: e.linksOfInterestTitle,
        children: c.title
      }), /* @__PURE__ */ t("ul", {
        children: c.items.map((r, s) => /* @__PURE__ */ t("li", {
          className: e.linkOfInterest,
          children: /* @__PURE__ */ t("a", {
            className: e.footerNavLink,
            href: r.href,
            target: r.external ? "_blank" : "_self",
            rel: "noreferrer",
            children: r.label
          })
        }, s))
      })]
    }), /* @__PURE__ */ i("footer", {
      className: e.footer,
      children: [/* @__PURE__ */ i("section", {
        className: `${e.containerWide} ${e.footerLinksWrapper}`,
        children: [o && o.map((r, s) => /* @__PURE__ */ t(D, {
          items: r.items,
          title: r.title
        }, s)), n && /* @__PURE__ */ i("div", {
          className: `${e.footerLink} ${e.socialLinksWrapper}`,
          children: [/* @__PURE__ */ t("div", {
            className: e.footerLinkTitle,
            children: n.title
          }), /* @__PURE__ */ t("ul", {
            className: e.socialLinksList,
            children: (l = n.items) == null ? void 0 : l.map((r, s) => /* @__PURE__ */ t("li", {
              children: /* @__PURE__ */ t("a", {
                href: r.href,
                target: r.external ? "_blank" : "_self",
                "aria-label": `Social Link${r.label ? `- ${r.label}` : ""}`,
                rel: "noreferrer",
                className: e.socialLink,
                children: /* @__PURE__ */ t(L, {
                  iconName: r.icon,
                  size: 14
                })
              })
            }, s))
          })]
        })]
      }), /* @__PURE__ */ t("section", {
        className: `${e.containerWide} ${e.copyrightWrapper}`,
        children: /* @__PURE__ */ i("div", {
          className: e.copyrightLinks,
          children: [/* @__PURE__ */ i("div", {
            className: e.copyrightText,
            children: ["©", a]
          }), _ && /* @__PURE__ */ t("ul", {
            className: e.legalLinksWrapper,
            children: _.map((r, s) => /* @__PURE__ */ t(f, {
              label: r.label,
              href: r.href,
              external: r.external
            }, s))
          })]
        })
      })]
    })]
  });
};
E.displayName = "Footer";
export {
  f as FooterNavLinkItem,
  D as FooterNavLinkList,
  E as default
};
