<template>
  <div class="text-primary py-4 text-center" style="border: 1px solid #000">
    <transition name="button" mode="out-in">
      <button
        v-if="!showOnButton"
        class="btn btn-danger"
        @click.prevent="onShowButton()"
      >
        Off
      </button>
      <button v-else class="btn btn-warning" @click.prevent="onShowButton()">
        On
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOnButton: true,
    };
  },
  methods: {
    onShowButton() {
      this.showOnButton = !this.showOnButton;
    },
  },
};
</script>

<style scoped>
.button-enter-from,
.button-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.button-enter-to,
.button-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.button-enter-active .button-leave-active {
  transition: all 0.5s;
}
</style>