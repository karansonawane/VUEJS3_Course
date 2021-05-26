import { createApp } from 'vue';
import App from './App.vue';
// import Home from './components/pages/Home.vue';
import Posts from './components/pages/Posts.vue';
import CreatePost from './components/pages/CreatePost.vue';
import PostItem from './components/pages/PostItem.vue';
import NotFound from './components/pages/NotFound.vue';
import NoPost from './components/pages/NoPost.vue';
import PostsFooter from './components/pages/PostsFooter.vue';
import CreatePostFooter from './components/pages/CreatePostFooter.vue';
// import TheNavigation from './components/pages/TheNavigation.vue';
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
        components: {
            default: Posts,
            footer: PostsFooter,
            // navigation: TheNavigation,
        },
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
        components: {
            default: CreatePost,
            footer: CreatePostFooter,
            // navigation: TheNavigation,
        },
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

router.beforeEach((to, from) => {
    console.log(to);
    console.log(from);
});

axios.defaults.baseURL = 'https://vue-course-9cc29-default-rtdb.firebaseio.com/';

const app = createApp(App);
app.use(router);
app.mount('#app');
