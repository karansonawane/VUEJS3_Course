<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <Button> <em class="fa fa-caret-down"></em>&nbsp; User Profile </Button>

  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <profile-card>
          <template v-slot:header>
            <div>Header Title</div>
          </template>

          <template v-slot:content>
            <div>Content</div>
            <div>content message</div>
          </template>

          <template v-slot:footer>
            <div>Footer Message</div>
          </template>
        </profile-card>
      </div>
    </div>

    <div class="container my-4">
      <div class="row">
        <div class="col-md-4">
          <hobbies  #default="slotProps">
              <h2>{{slotProps.hobby}}</h2>
          </hobbies>
        </div>
        <div class="col-md-4">
          <hobbies>
            <template #default="slotProps">
              <div>{{slotProps.hobby}}</div>
            </template>
          </hobbies>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue";
import ProfileCard from "./components/ProfileCard.vue";
import Hobbies from "./components/Hobbies.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Button,
    ProfileCard,
    Hobbies,
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
