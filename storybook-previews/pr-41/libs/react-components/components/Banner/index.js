import r from "../Typography/index.js";
import { jsxs as s, jsx as e } from "react/jsx-runtime";
import '../../assets/index19.css';const l = "_banner_1ftsd_1", m = "_bannerContent_1ftsd_15", _ = "_bannerInfo_1ftsd_19", f = "_bannerImage_1ftsd_20", i = "_bannerHero_1ftsd_27", n = {
  banner: l,
  bannerContent: m,
  bannerInfo: _,
  bannerImage: f,
  bannerHero: i
}, I = ({
  content: t = "",
  imageAltText: o = "Banner Image",
  imageClassName: b = "",
  imageSrc: c = "",
  isHero: a = !1,
  title: d = ""
}) => /* @__PURE__ */ s("div", {
  className: `${n.banner} ${a ? n.bannerHero : ""}`,
  children: [/* @__PURE__ */ s("section", {
    className: n.bannerInfo,
    children: [/* @__PURE__ */ e(r, {
      scale: a ? "headline1" : "headline3",
      children: d
    }), /* @__PURE__ */ e(r, {
      scale: a ? "body1" : "body2",
      children: /* @__PURE__ */ e("div", {
        className: n.bannerContent,
        children: t
      })
    })]
  }), /* @__PURE__ */ e("img", {
    className: `${n.bannerImage} ${b}`,
    src: c,
    alt: o
  })]
});
I.displayName = "Banner";
export {
  I as default
};
