<template>
  <v-layout class="layout_wrapper">
    <LeftNav></LeftNav>
    <v-main>
      <div class="main_container">
        <router-view></router-view>

        <RightNav v-if="showSecondRoute"></RightNav>
      </div>

      <FootBar></FootBar>
    </v-main>
  </v-layout>
</template>
<script setup>
import LeftNav from "./LeftNav.vue";
import RightNav from "./RightNav.vue";
import FootBar from "./FootBar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const showSecondRoute = computed(() => {
  return route.meta.secondRoute;
});
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
