<template>
  <div>
    <transition name="backdrop">
      <div class="backdrop" v-if="open"></div>
    </transition>
    <transition>
      <div class="dialog" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["open"],
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

.dialog {
  position: fixed;
  background: #fff;
  top: 20%;
  width: 60vw;
  left: 20vw;
  padding: 20px;
}

/* enter */

.v-enter-from {
  transform: translateY(-200px);
}

.v-enter-to {
  transform: translateY(0px);
}

.v-enter-active {
  transition: transform 0.5s;
}

/* leave */

.v-leave-from {
  transform: translateY(0px);
}

.v-leave-to {
  transform: translateY(-200px);
}

.v-leave-active {
  transition: transform 0.5s;
}

/* backdrop enter */

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 1;
}
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 1s;
}
</style>