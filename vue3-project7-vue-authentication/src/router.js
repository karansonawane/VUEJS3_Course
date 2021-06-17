import { createRouter, createWebHistory } from 'vue-router';
// import Home from './pages/Home.vue';
// import Login from './pages/Login.vue';
// import Signup from './pages/Signup.vue';
// import Post from './pages/Post.vue';
import store from './store/store';
import { IS_USER_AUTHENTICATE_GETTERS } from './store/storeconstants';

const Login = () => import(/* webpackChunkName: "Login" */'./pages/Login.vue');
const Signup = () => import('./pages/Signup.vue');
const Home = () => import('./pages/Home.vue');
const Post = () => import('./pages/Post.vue');    /* Dynamically imported */

const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/login', component: Login,
        meta: { auth: false }
    },
    {
        path: '/signup', component: Signup,
        meta: { auth: false }
    },
    {
        path: '/posts', component: Post,
        meta: { auth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if ('auth' in to.meta && to.meta.auth && !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTERS}`]) {
        next('/login');
    } else if ('auth' in to.meta && !to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATE_GETTERS}`]) {
        next('/posts');
    } else {
        next();
    }
});

export default router;
