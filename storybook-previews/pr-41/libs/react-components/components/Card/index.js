import { jsxs as e, jsx as t } from "react/jsx-runtime";
import '../../assets/index15.css';const _ = "_card_1aclc_1", d = "_top_1aclc_10", i = "_bottom_1aclc_13", m = "_cardImage_1aclc_16", p = "_right_1aclc_19", h = "_content_1aclc_40", g = "_contentWrapper_1aclc_79", f = "_left_1aclc_85", c = {
  card: _,
  top: d,
  bottom: i,
  cardImage: m,
  right: p,
  content: h,
  contentWrapper: g,
  left: f
}, v = ({
  content: n,
  imageAltText: r,
  imageDirection: o = "left",
  imageSrc: a,
  imageWidth: s = "350px",
  title: l
}) => /* @__PURE__ */ e("div", {
  className: `${c.card} ${c[o]}`,
  children: [a && /* @__PURE__ */ t("div", {
    className: c.cardImage,
    style: {
      "--td-web-card-img-width": s
    },
    children: /* @__PURE__ */ t("img", {
      src: a,
      alt: r
    })
  }), /* @__PURE__ */ e("div", {
    className: c.contentWrapper,
    children: [/* @__PURE__ */ t("h3", {
      children: l
    }), /* @__PURE__ */ t("div", {
      className: c.content,
      children: n
    })]
  })]
});
export {
  v as default
};
