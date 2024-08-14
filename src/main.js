import "./styles/index.less";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import setupPlugins from "@/plugins";
import "@/utils/permission";

const app = createApp(App);

app.use(router);
app.use(setupPlugins);
app.mount("#app");
