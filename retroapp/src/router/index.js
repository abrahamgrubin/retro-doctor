import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeView from "../views/HomeView.vue";
import NewItem from "../views/NewItem.vue";
import AuthView from "../views/AuthView.vue";
 const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/new",
      name: 'NewItem',
      component: NewItem
    }, 
    {
      path: "/auth",
      name: 'Auth',
      component: AuthView
    }
  ];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
