<template>
  <v-layout>
    <LeftNav></LeftNav>
    <v-main>
      <div class="main_container">
        <router-view></router-view>
      </div>
    </v-main>
    <RightNav v-if="showSecondRoute"></RightNav>
    <FootBar></FootBar>
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
.main_container {
  padding: 60px 30px 20px 30px;
}
</style>
