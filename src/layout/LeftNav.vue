<template>
  <div>
    <v-navigation-drawer floating permanent>
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in Menu"
          :key="item.name"
          :title="item.meta.label"
          :value="item"
          @click="handleMenuClick(item)"
        ></v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="nav_footer">
          <v-btn :icon="mdiThemeLightDark" size="x-small"></v-btn>
          <v-btn :icon="mdiGithub" size="x-small"></v-btn>
          <v-btn :icon="mdiEmail" size="x-small"></v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { mdiGithub, mdiEmail, mdiThemeLightDark } from "@mdi/js";
import { Menu } from "@/router/index";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const handleMenuClick = (routeInfos) => {
  router.push(routeInfos.path);
};
</script>

<style scoped lang="scss">
.nav_footer {
  display: flex;
  justify-content: space-around;
  padding: 5px auto;
}
</style>
