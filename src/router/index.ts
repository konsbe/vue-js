// Composables
import { createRouter, createWebHistory } from "vue-router";
import AboutSubNav from "@/components/sub/AboutSubNav.vue";
import HomeView from "@/views/HomeView/index.vue";
// import ProductsView from "@/views/Products/index.vue";
import DashboardView from "@/views/Dashboard/index.vue";
import TeamView from "@/views/Team/index.vue";
const routes = [
  {
    path: "/",
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import('@/views/HomeView/index.vue'),
      },
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import('@/views/Dashboard/index.vue'),
      },
    ],
  },
  {
    path: "/products",
    children: [
      {
        path: "",
        name: "Products",
        component: () => import('@/views/Products/index.vue'),
      },
    ],
  },
  {
    path: "/team",
    children: [
      {
        path: "",
        name: "Team",
        component: () => import('@/views/Team/index.vue'),
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
        component: () => import("@/views/AboutView/Overview.vue"),
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
