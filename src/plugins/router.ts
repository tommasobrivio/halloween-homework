import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/exercise/1/",
            name: "exercise-1",
            component: () => import("@/pages/exercises/Exercise1.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/pages/AboutPage.vue")
        }
    ]
});

export default router;
