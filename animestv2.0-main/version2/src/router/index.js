import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AnimesView from "../views/AnimesView.vue";
import FavoritosView from "../views/FavoritosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/animes",
      name: "animes",
      component: AnimesView,
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: FavoritosView,
    },
  ],
});

export default router;
