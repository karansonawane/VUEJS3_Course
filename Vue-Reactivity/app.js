
// **********First App**********

const commonData ={
    commonMessage: 'This is the common message',
};

const app = Vue.createApp({
    data () {
        return {
            message: 'Hello World',
            data: commonData,
            textMessage: '',
        };
    },
    methods: {
        setText() {
            this.textMessage = this.$refs.userText.value;
        },
    },
});

app.mount('#app');

// **********Second App********** 

const app2 = Vue.createApp({
    data() {
        return {
            anotherMessage: 'Hello Another World',
            data: commonData,
        };
    },
    methods: {
        changeMessage(){ 
            this.data.commonMessage = 'Changed The Message';
        },
    },
});

app2.mount('#app2');
