import { jsx as e } from "react/jsx-runtime";
import '../../assets/index20.css';const y = "_caption_1ntfq_1", _ = "_eyebrow_1ntfq_2", a = "_headline3_1ntfq_2", d = "_headline2_1ntfq_2", s = "_headline1_1ntfq_2", p = "_body2_1ntfq_7", c = "_body1_1ntfq_7", h = "_typography_1ntfq_12", i = "_body3_1ntfq_59", o = {
  caption: y,
  eyebrow: _,
  headline3: a,
  headline2: d,
  headline1: s,
  body2: p,
  body1: c,
  typography: h,
  body3: i
}, l = ({
  scale: n = "body1",
  children: t
}) => /* @__PURE__ */ e("slot", {
  className: `${o[n]} ${o.typography}`,
  children: t
});
l.displayName = "Typography";
export {
  l as default
};
