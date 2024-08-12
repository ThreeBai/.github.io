<template>
  <a-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm
    }"
  >
    <a-layout class="layout_wrapper">
      <LeftNav></LeftNav>
      <a-layout>
        <a-layout-content class="main_container">
          <router-view></router-view>
        </a-layout-content>
        <FootBar></FootBar>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script setup>
import { theme } from "ant-design-vue";
import LeftNav from "./LeftNav.vue";
import FootBar from "./FootBar.vue";
</script>
<style scoped lang="less">
.layout_wrapper {
  height: 100vh;
  overflow: hidden;
}
.main_container {
  padding: 60px 30px 20px 30px;
  min-width: 600px;
  overflow: "initial";
}
</style>
