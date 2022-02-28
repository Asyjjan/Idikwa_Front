import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/About",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/",
    name: "Accueil",
    component: () =>
      import("../views/Accueil.vue"),
  },
];

const router = new VueRouter({
  routes,
});
/*router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/Connexion")) {
    next();
  } else {
    if (!variables.authentifie) {
      next({
        path: "/Connexion",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  }
});*/
export default router;
