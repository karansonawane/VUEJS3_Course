const app2 = Vue.createApp({
    data() {
        return {
            count: 0,
            name: '',
            lastName: '',
            confirmedName: '',
        };

    },
    watch: {
        count(value) {
            if (value > 5){
                this.count = 0;
            }
        },
    //    name() {
    //        this.fullName = this.name + this.lastName;
    //    },
    //    lastName() {
    //        this.fullName = this.name + this.lastName;

    //    }
    },
    computed: {
        fullName(){
            return this.name + this.lastName;
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
