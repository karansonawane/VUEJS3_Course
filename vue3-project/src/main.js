import { createApp } from 'vue'
import App from './App.vue'
import SinglePost from './components/SinglePost.vue';
import Lecture from './components/Lecture.vue';

const app = createApp(App)

app.component('SinglePost', SinglePost);
app.component('Lecture', Lecture);
app.mount('#app')
