const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: 'Karan',
            confirmedName: '',
        };

    },
    methods: {
        onIncrement(){
            this.count++;

        },
        onDecrement(){
            this.count--;

        },
        setName(event, lastName){
            this.name = event.target.value + lastName;
        },
        submitForm(event){
            alert('submitted');
        },
        setConfirmedName(){
            this.confirmedName = this.name;
        }
    },

});

app.mount('#app')