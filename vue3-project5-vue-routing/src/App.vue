<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <router-view></router-view>
          </div>
          <div>
            <router-view name="footer"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/pages/TheNavigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
</style>
