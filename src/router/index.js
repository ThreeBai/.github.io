import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/index.vue";
import Dashboard from "../views/Dashboard/index.vue";
import GameCenter from "../views/GameCenter/index.vue";
import { mdiHome, mdiGamepadVariantOutline, mdiBookshelf, mdiTelevisionClassic } from "@mdi/js";

const MainRoutes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      label: "Dashboard",
      icon: mdiHome
    }
  },
  {
    path: "/gamecenter",
    name: "gamecenter",
    component: GameCenter,
    meta: {
      label: "Play with me",
      icon: mdiGamepadVariantOutline
    }
  }
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/",
      name: "MainView",
      component: Layout,
      children: MainRoutes
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export const Menu = MainRoutes;
export default router;
