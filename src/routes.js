import {createRouter, createWebHistory} from 'vue-router';
import MyProfile from "@/pages/MyProfile.vue";

const routes = [
    {
        name: 'PersonalProfile',
        path: '/personal',
        component: MyProfile
    },
    {
        name: 'Personal',
        path: '/',
        component: MyProfile
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        name: 'EditArticles',
        path: '/create',
        component: () => import('@/pages/EditArticles.vue')
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: () => import('@/pages/LoginPage.vue')
    },
    {
        name: 'SignUpPage',
        path: '/register',
        component: () => import('@/pages/RegisterPage.vue')
    },
    {
        name: 'ArticleView',
        path: '/article/:id',
        props: true,
        component: () => import('@/pages/ArticleView.vue')
    },
    {
        name: 'UploadFile',
        path: '/upload',
        meta: {
            event: null
        },
        beforeEnter: (to, from, next) => {
            // Log a message to the console
            console.log(to.meta);
            // You can perform other actions here if needed.
            // For example, you can redirect to a different route using next('/some-route').
            next(); // Continue with the navigation
        },
        children: [],
    },
];

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {top: 0}
    },
    routes: routes
});

export default router;