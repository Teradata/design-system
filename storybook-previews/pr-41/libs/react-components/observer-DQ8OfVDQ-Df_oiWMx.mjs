/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const v = (n) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (r, u) => {
    if (r.constructor._observers) {
      if (!r.constructor.hasOwnProperty("_observers")) {
        const t = r.constructor._observers;
        r.constructor._observers = /* @__PURE__ */ new Map(), t.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (o, s) => r.constructor._observers.set(s, o)
        );
      }
    } else {
      r.constructor._observers = /* @__PURE__ */ new Map();
      const t = r.updated;
      r.updated = function(o) {
        t.call(this, o), o.forEach((s, e) => {
          const c = this.constructor._observers.get(e);
          c !== void 0 && c.call(this, this[e], s);
        });
      };
    }
    r.constructor._observers.set(u, n);
  }
);
export {
  v
};
