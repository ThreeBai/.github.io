<template>
  <v-layout>
    <LeftNav></LeftNav>

    <v-navigation-drawer location="right">
      <v-list>
        <v-list-item title="Drawer right"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="min-height: 300px">
      <router-view></router-view>
    </v-main>

    <FootBar></FootBar>
  </v-layout>
</template>
<script setup>
import LeftNav from "./LeftNav.vue";
import FootBar from "./FootBar.vue";
</script>
<style scoped lang="scss"></style>
