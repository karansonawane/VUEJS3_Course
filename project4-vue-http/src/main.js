import { createApp } from 'vue';
import App from './App.vue';
import Axios from 'axios';

Axios.defaults.headers.common['Karan'] = 'Karan Sonawane config';
Axios.defaults.baseURL = 'https://vue-course-9cc29-default-rtdb.firebaseio.com/';

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.common['interceptorheader'] = 'Interceptor Header'
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response.data = { hai: 'hai' };
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

createApp(App).mount('#app')
