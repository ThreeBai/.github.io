import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/index.vue";
import Dashboard from "../views/Dashboard/index.vue";
import GameCenter from "../views/GameCenter/index.vue";
import LiquorFish from "../views/NeuroRoam/LiquorFish/index.vue";
import RussianLiterature from "../views/NeuroRoam/RussianLiterature/index.vue";
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
  },
  {
    path: "/neuronroam",
    name: "neuronroam",
    children: [
      {
        path: "russianliterature",
        name: "russianliterature",
        component: RussianLiterature,
        meta: {
          label: "RussianLiterature"
        }
      },
      {
        path: "liquorfish",
        name: "liquorfish",
        component: LiquorFish,
        meta: {
          label: "liquorfish"
        }
      }
    ],
    meta: {
      label: "Neuron Roam",
      icon: mdiBookshelf,
      secondRoute: true
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
