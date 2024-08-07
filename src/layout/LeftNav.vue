<template>
  <v-navigation-drawer floating permanent>
    <template v-slot:prepend>
      <div class="nav_header">
        <img id="avatar_img" src="/src/assets/avatar.jpg" />
        <h1 class="owner_name">ThreeBai</h1>
        <p class="owner_intro">welcome to my internet villa</p>
      </div>
    </template>
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in Menu"
        :key="item.name"
        :title="item.meta.label"
        :prepend-icon="item.meta.icon"
        :value="item"
        @click="handleMenuClick(item)"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="nav_footer">
        <a href="javascript:;">
          <v-icon :icon="mdiThemeLightDark" class="fun_icon" @click="changeTheme"></v-icon>
        </a>
        <a href="https://github.com/ThreeBai" target="_blank">
          <v-icon :icon="mdiGithub" class="fun_icon"></v-icon>
        </a>
        <a href="mailto:Sakatazwj@outlook.com">
          <v-icon :icon="mdiEmail" class="fun_icon" @click="toEmail"></v-icon>
        </a>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { mdiGithub, mdiEmail, mdiThemeLightDark } from "@mdi/js";
import { Menu } from "@/router/index";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "vuetify";

const route = useRoute();
const router = useRouter();

const handleMenuClick = (routeInfos) => {
  router.push(routeInfos.path);
};

const theme = useTheme();
function changeTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

function toEmail() {}
</script>

<style scoped lang="scss">
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
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin-bottom: 20px;
}
.fun_icon {
  :hover {
    border: solid 1px;
    padding: 1px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
