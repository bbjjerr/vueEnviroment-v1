// src/stores/counter.js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    chageCount: false,
  }),
  actions: {
    // actions 用于定义修改状态的方法,可以包含异步操作
    increment() {
      // 示例同步操作
      this.count++;
    },
    incrementAsync() {
      this.chageCount = true;
      // 示例异步操作
      setTimeout(() => {
        this.count++;
        this.chageCount = false;
      }, 1000);
    },
  },
  getters: {
    // getters 用于计算派生状态
    doubleCount: (state) => state.count * 2,
  },
  setters: {
    // setters 用于定义修改状态的计算属性
    setCount(state) {
      return (value) => {
        state.count = value;
      };
    },
  },
  // 持久化配置
  persist: {
    enabled: true, // 启用持久化
    strategies: [
      {
        key: "counter-store", // 存储的键名
        storage: localStorage, // 使用 localStorage 进行存储
      },
    ],
  },
});
