<template>
  <div>
    <transition>
      <p v-if="showParagraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eveniet
        quia, corrupti voluptatum non repudiandae laborum reprehenderit, veniam
        repellendus quo quam fuga. Possimus, debitis reiciendis nemo quas
        dolorum eos illo!
      </p>
    </transition>
    <div>
      <button class="btn btn-primary" @click.prevent="onToggle()">
        Toggle
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showParagraph: true,
    };
  },
  methods: {
    onToggle() {
      this.showParagraph = !this.showParagraph;
    },
  },
};
</script>

<style scoped>

.v-enter-active {
    animation: animate-para 1s;
}

.v-leave-active {
    animation: animate-para 1s reverse;
}

@keyframes animate-para {
    0% {
        opacity: 0;
        transform: translateX(0px);
    }
    25% {
        opacity: 0.25;
        transform: translateX(30px);
    }
    50% {
        opacity: 0.50;
        transform: translateX(-30px);
    }
    75% {
        opacity: 0.75;
        transform: translateX(30px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>