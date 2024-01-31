import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home/HomePage.vue";
import MoviePage from "@/views/Movie/MoviePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/movie/:id",
      component: MoviePage,
    },
  ],
});

export default router;
