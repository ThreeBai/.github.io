<template>
  <v-layout class="layout_wrapper">
    <LeftNav></LeftNav>
    <v-main>
      <div class="main_container">
        <router-view></router-view>
      </div>
      <FootBar></FootBar>
    </v-main>
  </v-layout>
</template>
<script setup>
import LeftNav from "./LeftNav.vue";
import FootBar from "./FootBar.vue";
</script>
<style scoped lang="scss">
.layout_wrapper {
  height: 100%;
}
.main_container {
  padding: 60px 30px 20px 30px;
  min-width: 600px;
  overflow-x: auto;
  min-height: calc(100% - 41px);
}
</style>
