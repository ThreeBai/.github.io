// 集中管理vue-app插件
import { setAntd } from "./antDesign.js";
import { setStore } from "@/stores";

export default {
  install(app) {
    // antd
    setAntd(app);
    // store
    setStore(app);
  }
};
