const app = Vue.createApp({
    data(){
        return{
            title: 'Create a Post',
            link: 'https://vuejs.org',
            text1: '<h1>Learn Vue Courses</h1>',
        }
    },
    methods: {
        getText(){
            return this.text1;
        },
        getAnotherText(){
            return 'Master Vue Courses';
        }
    }
});

app.mount('#app');