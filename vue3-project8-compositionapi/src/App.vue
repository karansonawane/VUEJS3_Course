<template>
  <div>
    <div>My Full Name is : {{userName}}</div>

    <h3>User Details</h3>
    <div>Name : {{userDetails.name}}</div>
    <div>Age : {{userDetails.age}}</div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  export default {

    setup() {
      let name = ref('Karan Sonawane');

      let userDetails = ref({
        name: 'Karan',
        age: 22,
      });

      setTimeout(() => {
        console.log('executing time out in setup');
        console.log(name);
        name.value = 'Karan Dinkar Sonawane';
        userDetails.value.name = 'Changed Name';
        userDetails.value.age = 22;
      }, 3000);
      return {
        userName: name,
        name: userDetails.value.name,
        age: userDetails.value.age,
        userDetails: userDetails,
      }
    },
    // name: 'App',
    // data(){
    //   return{
    //     name: 'Karan Sonawane',
    //   };
    // },
    // mounted(){
    //   setTimeout(() => {
    //     this.name = 'Karan Dinkar Sonawane';
    //   }, 3000)
    // },
    // components: {
    // }
  }

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
