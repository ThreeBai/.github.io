<template>
  <v-layout>
    <LeftNav></LeftNav>

    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Drawer right"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <FootBar></FootBar>
  </v-layout>
</template>
<script setup>
import LeftNav from "./LeftNav.vue";
import FootBar from "./FootBar.vue";
import { useRouter } from "vue-router";

const router = useRouter();
console.log(router, "reouttt");
</script>
<style scoped lang="scss"></style>
