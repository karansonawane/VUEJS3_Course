<template>
  <div>
    <div>{{ count }}</div>
    <button @click.prevent="onIncrement()">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onIncrement() {
        this.$store.dispatch({
            type: 'increment',
            value: 3,
        });
    } /* ****************** 1st method **************** */
    // onIncrement() {
    //   this.$store.commit("increment", { value: 2 });
    // } /* *********** 2nd Method ************* */,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>
