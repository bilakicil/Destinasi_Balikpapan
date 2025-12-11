import { createWebHistory, createRouter } from "vue-router";

import home from "../pages/home.vue";
import tentang from "../pages/tentang.vue";
import destinasi from "../pages/destinasi.vue";
import DetailDestinasi from "@/pages/DetailDestinasi.vue";
import kontak from "../pages/kontak.vue";
import AboutMe from "@/pages/AboutMe.vue";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/tentang", name: "tentang", component: tentang },
  { path: "/destinasi", name: "destinasi", component: destinasi },
  {
    path: "/destinasi/:slug",
    name: "detail-destinasi",
    component: () => import("../pages/DetailDestinasi.vue"),
  },
  { path: "/kontak", name: "kontak", component: kontak },
  { path: "/aboutme", name: "aboutme", component: AboutMe}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
