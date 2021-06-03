<template>
  <div>
    <div>{{ count }}</div>
    <button @click.prevent="onIncrement()">Increment</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    onIncrement() {
      this.$store.dispatch({
        type: "increment",
        value: 3,
      });
    } /* ****************** 1st method **************** */,
    // onIncrement() {
    //   this.$store.commit("increment", { value: 2 });
    // } /* *********** 2nd Method ************* */,
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
    // count() {
    //   return this.$store.state.count;
    // },  *************************** insted of this we used above ...mapState function ******************************
  },
};
</script>
