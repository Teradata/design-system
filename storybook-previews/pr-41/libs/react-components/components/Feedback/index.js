import { useState as k } from "react";
import { IconButtonToggle as d } from "../IconButtonToggle/index.js";
import m from "../Typography/index.js";
import { jsxs as p, jsx as o } from "react/jsx-runtime";
import '../../assets/index10.css';const u = "_feedback_w1ixq_1", h = "_feedbackLabel_w1ixq_10", b = {
  feedback: u,
  feedbackLabel: h
}, y = ({
  label: f = "Did this page help?",
  labelForFeedback: i = "Thank you for your feedback!",
  onFeedBack: t
}) => {
  const c = "neutral", [e, l] = k(c), r = e !== c ? i : f, a = (n) => {
    const s = e === n ? c : n;
    l(s), t && t(s);
  };
  return /* @__PURE__ */ p("div", {
    className: b.feedback,
    children: [/* @__PURE__ */ o("span", {
      className: b.feedbackLabel,
      children: /* @__PURE__ */ o(m, {
        scale: "body1",
        children: r
      })
    }), /* @__PURE__ */ o(d, {
      offIcon: "thumb_up",
      onIcon: "thumb_up",
      onClick: () => a("positive"),
      toggledOn: e === "positive"
    }), /* @__PURE__ */ o(d, {
      offIcon: "thumb_down",
      onIcon: "thumb_down",
      onClick: () => a("negative"),
      toggledOn: e === "negative"
    })]
  });
};
export {
  y as Feedback,
  y as default
};
