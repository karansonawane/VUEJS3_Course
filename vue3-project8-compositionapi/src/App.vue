<template>
  <div>
    <div>My Full Name is : {{userName}}</div>
  </div>
</template>

<script>
  import {ref} from 'vue';
    export default {

      setup() {
        let name = ref('Karan Sonawane');

        setTimeout(() => {
          console.log('executing time out in setup');
          console.log(name);
          name.value = 'Karan Dinkar Sonawane';
        },3000);
        return{
          userName: name,
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