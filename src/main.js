import { createApp } from "vue"; // Vue 3 的导入方式
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia"; // 如果你在使用 Pinia

const app = createApp(App); // 使用 createApp 创建 Vue 应用

app.use(router); // 挂载 router
app.use(createPinia()); // 挂载 Pinia store（如果你在使用 Pinia）
app.mount("#app"); // 挂载到 DOM 中的 #app 元素
