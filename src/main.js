import "./styles/index.scss";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import setupPlugins from "@/plugins";

const app = createApp(App);

app.use(router);
app.use(setupPlugins);
app.mount("#app");
