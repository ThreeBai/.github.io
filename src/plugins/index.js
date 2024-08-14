// 集中管理vue-app插件
import { setAntd } from "./antDesign.js";
import { setVsd } from "./vueShowdown.js";
import { setStore } from "@/stores";

export default {
  install(app) {
    // antd
    setAntd(app);
    // markdown展示
    setVsd(app);
    // store
    setStore(app);
  }
};
