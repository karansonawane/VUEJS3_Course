import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';
import Post from './pages/Post.vue';

const routes = [
    {
        path: '', component: Home
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/signup', component: Signup
    },
    {
        path: '/posts', component: Post
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
