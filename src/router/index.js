import { createWebHistory, createRouter } from "vue-router";

import home from "../pages/home.vue";
import kontak from "../pages/kontak.vue";

const routes = [
  { path: "/", name : "home", component: home },
  { path: "/kontak", name: "kontak", component: kontak },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;