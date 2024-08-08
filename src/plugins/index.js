// 集中管理vue-app插件
import { setVuetify } from "./vuetify.js";
import { setStore } from "@/stores";

export default {
  install(app) {
    // vuetify-plugins
    setVuetify(app);
    // store
    setStore(app);
  }
};
