<template>
  <div>
    <div class="my-3">
      <span class="mx-1" v-for="number in numbers" :key="number">{{
        number
      }}</span>
    </div>
    <div>
      <button @click.prevent="onAdd()">Add</button>
      <button @click.prevent="onRemove()">Remove</button>
      <button @click.prevent="onShuffle()">Shuffle</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 0,
    };
  },
  methods: {
    onAdd() {
      this.numbers.push(this.nextNum);
      this.nextNum++;
    },
    onRemove() {
      let randomIndex = Math.floor(Math.random() * this.numbers.length);
      this.numbers = this.numbers.filter(
        (number) => number !== this.numbers[randomIndex]
      );
    },
    onShuffle(){
        this.numbers.reverse();
    }
  },
};
</script>