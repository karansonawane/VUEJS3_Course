<template>
  <div>
    <div>
      <button @click="onActiveSelected">Active Hobbies</button>
      <button @click="onInActiveSelected">InActive Hobbies</button>
    </div>
    <!-- <active-hobbies v-if="selectedComponent === 'active-hobbies'"></active-hobbies>
    <inactive-hobbies v-if="selectedComponent === 'inactive-hobbies'"></inactive-hobbies> ....For all above commented line used just following component tag.... -->
    <div>
      <a href="" @click.prevent="onOpenModal()">Open Modal</a>
    </div>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <teleport to="">
      <modal-dialog
        v-if="showModal"
        @closemodal="showModal = false"
      ></modal-dialog>
    </teleport>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import ModalDialog from "./components/ModalDialog.vue";

const ActiveHobbies = defineAsyncComponent(() => {
  return import("./components/ActiveHobbies.vue");
});
const InactiveHobbies = defineAsyncComponent(() => {
  return import("./components/InactiveHobbies.vue");
});
export default {
  data() {
    return {
      selectedComponent: "active-hobbies",
      showModal: false,
    };
  },
  name: "App",
  components: {
    ActiveHobbies,
    InactiveHobbies,
    ModalDialog,
  },
  methods: {
    onActiveSelected() {
      this.selectedComponent = "active-hobbies";
    },
    onInActiveSelected() {
      this.selectedComponent = "inactive-hobbies";
    },
    onOpenModal() {
      this.showModal = true;
    },
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
