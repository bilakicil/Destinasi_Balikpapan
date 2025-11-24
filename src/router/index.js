import { createWebHistory, createRouter } from "vue-router";

import home from "../pages/home.vue";
import tentang from "../pages/tentang.vue";
import destinasi from "../pages/destinasi.vue";
import DetailDestinasi from "@/pages/DetailDestinasi.vue";
import kontak from "../pages/kontak.vue";

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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
