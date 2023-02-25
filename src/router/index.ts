// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomeSubNav from "@/components/sub/HomeSubNav.vue";
const routes = [
  {
    path: "/",
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView/index.vue"),
      },
    ],
  },
  {
    path: "/about",
    // component: () => import("@/layouts/default/Default.vue"),
    components: {
      // default: Default,
      default: HomeSubNav
    },
    children: [
      {
        path: "",
        name: "About",
        component: () =>
          import("@/views/AboutView/index.vue"),
      },
      {
        name: "Overview",
        path: "/about/overview",
        component: () =>
          import("@/views/AboutView/index.vue"),
      },
      {
        name: "Description",
        path: "/about/description",
        component: () =>
          import("@/views/AboutView/Description.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
