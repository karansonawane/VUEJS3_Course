import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'

Axios.defaults.headers.common['Karan'] = 'Karan Sonawane config';
Axios.defaults.baseURL = 'https://vue-course-9cc29-default-rtdb.firebaseio.com/';

createApp(App).mount('#app')
