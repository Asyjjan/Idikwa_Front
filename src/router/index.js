import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login.vue"),
        },
        {
            path: "/Accueil",
            name: "Accueil",
            component: () => import("../views/Accueil.vue"),
        },
        {
            path: "/Utilisateur",
            name: "Utilisateur",
            component: () => import("../views/Utilisateur.vue"),
        },
        {
            path: "/About",
            name: "About",
            component: () => import("../views/About.vue"),
        },
        {
            path: "/TestApi",
            name: "TestApi",
            component: () => import("../views/TestApi.vue"),
        },
    ]
})