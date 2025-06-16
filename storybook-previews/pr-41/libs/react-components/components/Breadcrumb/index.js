import { jsx as r } from "react/jsx-runtime";
import '../../assets/index17.css';const l = "_breadcrumb_1209b_1", b = {
  breadcrumb: l
}, n = ({
  items: a
}) => /* @__PURE__ */ r("nav", {
  className: b.breadcrumb,
  children: /* @__PURE__ */ r("ul", {
    children: a.map((e, c) => /* @__PURE__ */ r("li", {
      children: /* @__PURE__ */ r("a", {
        href: e.link,
        children: e.label
      })
    }, c))
  })
});
export {
  n as default
};
