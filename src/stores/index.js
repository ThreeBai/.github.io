import { createPinia } from "pinia";

const store = createPinia();

// 全局注册 store
export function setStore(app) {
    app.use(store);
}

export * from "./modules/styleSetting";
export { store };
