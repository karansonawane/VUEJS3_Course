<template>
  <div>
    <div>My Full Name is : {{userName}}</div>

    <h3>User Details</h3>
    <div>Name : {{name}}</div>
    <div>Age : {{age}}</div>
  </div>
</template>

<script>
  import { ref, reactive, isReactive, isRef, toRefs } from 'vue';
  export default {

    setup() {
      let name = ref('Karan Sonawane');

      let userDetails = reactive({
        name: 'Karan',
        age: 22,
      });

      console.log(isRef(name));
      console.log(isReactive(userDetails));

      setTimeout(() => {
        // console.log('executing time out in setup');
        // console.log(name);
        name.value = 'Karan Dinkar Sonawane';
        userDetails.name = 'Changed Name';
        userDetails.age = 22;
      }, 3000);

      let userRefs = toRefs(userDetails);

      return {
        userName: name,
        name: userRefs.name,
        age: userRefs.age,
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
