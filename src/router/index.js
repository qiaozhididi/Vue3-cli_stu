import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    // 同步加载路由
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    //异步加载路由
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    //异步加载路由
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginPage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
