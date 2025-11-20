import { createWebHistory, createRouter } from "vue-router";

import home from "../pages/home.vue";
import kontak from "../pages/kontak.vue";
import destinasi from "../pages/destinasi.vue";
import tentang from "../pages/tentang.vue";

const routes = [
  { path: "/", name : "home", component: home },
  { path: "/kontak", name: "kontak", component: kontak },
  { path: "/destinasi", name: "destinasi", component: destinasi},
  { path: "/tentang", name: "tentang", component: tentang}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;