<template>
  <a-config-provider :theme="themeConfig">
    <a-layout class="layout_wrapper">
      <LeftNav></LeftNav>
      <a-layout class="main_container">
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <FootBar></FootBar>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script setup>
import { useStyleSettingStore } from "@/stores";
import { storeToRefs } from "pinia";
import LeftNav from "./LeftNav.vue";
import FootBar from "./FootBar.vue";

const styleSettingStore = useStyleSettingStore();
const { themeConfig } = storeToRefs(styleSettingStore);
</script>
<style scoped lang="less">
.layout_wrapper {
  min-height: 100vh;
}
.main_container {
  margin-left: 280px;
  padding: 60px 30px 0px 30px;
  min-width: 600px;
  overflow: auto;
}
</style>
