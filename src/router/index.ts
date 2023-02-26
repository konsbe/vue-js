// Composables
import { createRouter, createWebHistory } from "vue-router";
import AboutSubNav from "@/components/sub/AboutSubNav.vue";
import HomeView from "@/views/HomeView/index.vue";
const routes = [
  {
    path: "/",
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: "",
        name: "Home",
        component: { HomeView },
      },
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "",
        name: "Dashboard",
        component: { HomeView },
      },
    ],
  },
  {
    path: "/products",
    children: [
      {
        path: "",
        name: "Products",
        component: { HomeView },
      },
    ],
  },
  {
    path: "/team",
    children: [
      {
        path: "",
        name: "Team",
        component: { HomeView },
      },
    ],
  },
  {
    path: "/about",
    // component: () => import("@/layouts/default/Default.vue"),
    components: {
      // default: Default,
      default: AboutSubNav,
    },
    children: [
      {
        path: "",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/AboutView/index.vue"),
      },
      {
        name: "Overview",
        path: "/about/overview",
        component: () => import("@/views/AboutView/index.vue"),
      },
      {
        name: "Description",
        path: "/about/description",
        component: () => import("@/views/AboutView/Description.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
