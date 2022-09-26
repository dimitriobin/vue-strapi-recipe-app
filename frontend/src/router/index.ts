import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AccountView from "@/views/AccountView.vue";
import HomeView from "../views/HomeView.vue";
import RecipesView from "../views/RecipesView.vue";
import RecipeView from "../views/RecipeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/recipes",
        name: "recipes",
        component: RecipesView,
    },
    {
        path: "/recipe/:id",
        name: "recipe",
        component: RecipeView,
    },
    {
        path: "/account",
        name: "account",
        component: AccountView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
