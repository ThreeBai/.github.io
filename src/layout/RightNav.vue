<template>
  <v-navigation-drawer location="right">
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in secondMenu"
        :key="item.name"
        :title="item.meta.label"
        :prepend-icon="item.meta.icon"
        :value="item"
        @click="handleMenuClick(item)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const router = useRouter();

const currentRouteInfo = router.getRoutes().find((item) => item.name === route.name);

const secondMenu = computed(() => {
  return currentRouteInfo.children;
});
function handleMenuClick(item) {
  router.push({ name: item.name });
}

handleMenuClick(currentRouteInfo.children[0]);
</script>

<style lang="scss" scoped></style>
