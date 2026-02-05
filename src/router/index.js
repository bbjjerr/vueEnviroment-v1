// src/router/index.js
import { createRouter, createWebHistory } from "vue-router"; // 从 vue-router 导入这两个方法
import Home from "../components/HelloWorld.vue"; // 组件导入方式保持不变

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home, // 路由映射到 Home 组件
    },
  ],
});

export default router;
