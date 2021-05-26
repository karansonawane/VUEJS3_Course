<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="box" :class="{ animate: animate }"></div>
        <div class="mt-3">
          <button class="btn btn-primary" @click.prevent="onAnimateClick()">
            Click me
          </button>
        </div>
        <div class="my-3">
          <the-paragraph></the-paragraph>
        </div>
        <div class="my-3">
          <animate-paragraph></animate-paragraph>
        </div>
        <div class="my-3">
            <dialog-modal :open="openDialog">
              <div>This is Dialog Modal</div>
              <div class="my-3">
                <button
                  class="btn btn-success"
                  @click.prevent="openDialog = false"
                >
                  Okay!
                </button>
              </div>
            </dialog-modal>
          <div>
            <button class="btn btn-dark" @click.prevent="onOpenDialog()">
              Open Dialog Modal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheParagraph from "./components/TheParagraph.vue";
import AnimateParagraph from "./components/AnimateParagraph.vue";
import DialogModal from "./components/DialogModal.vue";
export default {
  components: { TheParagraph, AnimateParagraph, DialogModal },
  data() {
    return {
      animate: false,
      openDialog: false,
    };
  },
  component: {
    TheParagraph,
    AnimateParagraph,
    DialogModal,
  },
  methods: {
    onAnimateClick() {
      this.animate = true;
    },
    onOpenDialog() {
      this.openDialog = true;
    },
  },
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid rebeccapurple;
  background: rebeccapurple;
  /* transition: transform 0.5s; */
}
.animate {
  /* transform: translateX(150px); */
  animation: animate-box 1s;
}
@keyframes animate-box {
  0% {
    transform: translateX(0px) scaleX(1);
  }
  50% {
    transform: translateX(100px) scaleX(1.5);
  }
  100% {
    transform: translateX(200px) scaleX(1);
  }
}
</style>
