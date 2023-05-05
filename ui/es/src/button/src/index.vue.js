import { defineComponent as s, computed as r, openBlock as p, createElementBlock as a, normalizeClass as c, unref as u, renderSlot as l } from "vue";
import "./index.vue2.js";
import d from "../../../_virtual/_plugin-vue_export-helper.js";
const f = s({
  name: "IrisButton"
}), m = /* @__PURE__ */ Object.assign(f, {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    const e = t, o = r(() => `button-${e.type}`);
    return (n, _) => (p(), a("button", {
      class: c(["button", u(o)])
    }, [
      l(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), B = /* @__PURE__ */ d(m, [["__scopeId", "data-v-e0b67c9b"]]);
export {
  B as default
};
