<template>
  <div class="right_nav">
    <v-tabs v-model="currentTab" color="primary" direction="vertical">
      <v-tab
        v-for="item in articleList"
        :key="item.value"
        :text="item.title"
        :value="item.value"
      ></v-tab>
    </v-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
const currentTab = ref("");
const articleList = [
  { title: "无终卡农", value: "canon" },
  { title: "短篇", value: "short" }
];
</script>

<style lang="scss" scoped>
.right_nav {
  padding: 10px;
  position: fixed;
  top: 50px;
  right: 50px;
}
</style>
