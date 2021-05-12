const app2 = Vue.createApp({
    data() {
        return {
            count: 0,
            name: 'Karan',
            confirmedName: '',
        };

    },
    computed: {
        fullName(){
            return this.name + ' Sonawane';
        },
    },
    methods: {
        onIncrement(){
            this.count++;

        },
        onDecrement(){
            this.count--;

        },
        setName(event){
            this.name = event.target.value;
        },
        submitForm(event){
            alert('submitted');
        },
        setConfirmedName(){
            this.confirmedName = this.name;
        },
        outputFullName(){
            return this.name + ' Sonawane';
        }
    },

});

app2.mount('#app2')