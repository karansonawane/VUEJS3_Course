import { createApp } from 'vue';
import App from './App.vue';
// import Home from './components/pages/Home.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostItem from './components/pages/PostItem.vue';
import NotFound from './components/pages/NotFound.vue';
import NoPost from './components/pages/NoPost.vue'
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        // component: Home
        redirect: '/posts',
    },
    {   name: 'posts',
        path: '/posts',
        component: Posts,
        children: [
            {
                path: '',
                component: NoPost,
            },
            {   name: 'single-post',
                path: ':id',
                component: PostItem,
            },
        ]
    },
    {
        path: '/posts/:id',
        component: PostItem,
    },
    {
        path: '/createpost',
        component: CreatePost,
    },
    {
        path: '/:NotFound(.*)*', component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});
axios.defaults.baseURL = 'https://vue-course-9cc29-default-rtdb.firebaseio.com/';

const app = createApp(App);
app.use(router);
app.mount('#app');
