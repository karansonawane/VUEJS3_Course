const app = Vue.createApp({
    data() {
        return {
            hobbies: [],
            enteredHobbyValue: '',
            userDetails: {
                firstName: 'Karan',
                lastName: 'Sonawane',
                age: 34,
            },
        };
    },
    methods: {
        onHobbySubmit() {
            this.hobbies.push(this.enteredHobbyValue);
            this.enteredHobbyValue = '';
        },
        removeHobby(index){
            this.hobbies.splice(index, 1);
        },
    },
});

app.mount('#app');