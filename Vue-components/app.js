const app = Vue.createApp({
    template: ``,
    data() {
        return {
            
        };
    },
});

app.component('hobbies-component', {
    template: `<ul class="list-group">
               <li class="list-group-item" v-for="hobby in hobbies">{{hobby}}</li>
               </ul>`,
               data() {
                   return {
                    hobbies: ['Drawing', 'Illustrate', 'Playing'],
                   };
               },
});

app.mount('#app');
