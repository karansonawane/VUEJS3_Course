<template>
  <div>
    <counter></counter>
    <div>
      <h3>Vuex Counter</h3>
      {{ count }}
    </div>
    <button @click.prevent="onIncrement()">Increment</button>
    <div>
      <todos-list></todos-list>
    </div>
    <div>Todos List complete: {{ doneListCount }}</div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import TodosList from "./components/TodosList.vue";

export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    },
    doneListCount() {
      return this.$store.getters.doneTodosListCount;
    },
  },
  components: {
    Counter,
    TodosList,
  },
  methods: {
    onIncrement() {
      return this.$store.dispatch({
        type: "increment",
        value: 4,
      });
    },
    // getDoneListCount() {
    //   return this.$store.state.todos.filter((todo) => todo.done).length;
    // },  ***************** Insted of this method, we used above computed property "doneListCount()""  *******************
  },
};
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
