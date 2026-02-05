<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.incrementAsync">
      <!-- {{ counter.chageCount === false ? "Change to True" : "loading....." }} -->
      {{ counter.chageCount &&  }}
    </button>
    <p>Double Count: {{ counter.doubleCount }}</p>
  </div>
</template>

<script>
import { flat } from "vant/lib/utils";
import { useCounterStore } from "../store/counter";

export default {
  setup() {
    const counter = useCounterStore(); // 使用 Pinia store, 通过 useCounterStore 获取 counter store 实例

    return { counter }; // 返回 counter 实例以供模板使用,结构是:{}
  },
};
</script>
