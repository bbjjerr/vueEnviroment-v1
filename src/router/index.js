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
//路由守卫
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token") === null) {
    // 如果没有 token，重定向到登录页面
    if (to.path !== "/login") {
      return next("/login");
    }
  } else {
    // 如果存在 token，允许访问目标路由
    next();
  }
});
router.afterEach((to, from) => {
  // 可以在这里执行一些操作，比如页面跳转后关闭加载动画等
});

export default router;
