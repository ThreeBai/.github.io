<template>
  <a-layout-sider
    width="280"
    theme="light"
    style="height: 100vh; position: fixed; overflow-y: auto"
  >
    <div class="sider_wrapper">
      <div class="nav_header">
        <img id="avatar_img" src="/src/assets/avatar.jpg" />
        <h1 class="owner_name">ThreeBai</h1>
        <p class="owner_intro">welcome to my villa online</p>
      </div>
      <a-menu v-model:selectedKeys="currentRoute" mode="inline" style="flex-grow: 1">
        <template v-for="item in Menu">
          <a-sub-menu v-if="item.children" :key="item.path">
            <template #title>
              <span>
                <!-- <user-outlined /> -->
                <span>{{ item.meta.label }}</span>
              </span>
            </template>
            <a-menu-item
              @click="handleMenuClick(initem)"
              v-for="initem in item.children"
              :key="initem.name"
            >
              {{ initem.meta.label }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else @click="handleMenuClick(item)" :key="item.name">
            <!-- <pie-chart-outlined /> -->
            <span>{{ item.meta.label }}</span>
          </a-menu-item>
        </template>
      </a-menu>
      <div class="nav_footer">
        <a href="javascript:;">
          <div class="fun_icon" @click="changeTheme">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path :d="mdiThemeLightDark" />
            </svg>
          </div>
        </a>
        <a href="https://github.com/ThreeBai" target="_blank">
          <div class="fun_icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path :d="mdiGithub" />
            </svg>
          </div>
        </a>
        <a href="mailto:Sakatazwj@outlook.com">
          <div class="fun_icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path :d="mdiEmail" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </a-layout-sider>
</template>

<script setup>
import { Menu } from "@/router/index";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useStyleSettingStore } from "@/stores";
import { mdiGithub, mdiEmail, mdiThemeLightDark } from "@mdi/js";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const styleSettingStore = useStyleSettingStore();
const { sysTheme } = storeToRefs(styleSettingStore);

const currentRoute = ref([""]);
currentRoute.value.push(route.name);

const handleMenuClick = (routeInfos) => {
  if (route.path.indexOf(routeInfos.path) === -1) {
    router.push({ name: routeInfos.name });
  }
};

function changeTheme() {
  const targetTheme = sysTheme.value === "dark" ? "light" : "dark";
  styleSettingStore.changeSysTheme(targetTheme);
}
</script>

<style scoped lang="less">
.sider_wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.nav_header {
  padding: 0 10px 0 40px;
  margin: 40px 0 20px 0;
  #avatar_img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .owner_name {
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .owner_intro {
    font-style: italic;
  }
}
.nav_footer {
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin: 20px 0;
}
.fun_icon {
  height: 28px;
  width: 28px;
  padding: 1px;
  &:hover {
    border: solid 1px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
