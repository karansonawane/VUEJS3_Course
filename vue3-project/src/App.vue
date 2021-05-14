<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="my-4">
          <select-component
            data-status="1"
            id="selectbox"
            @change="selectChange"
          ></select-component>
        </div>
        <a href="" @click.prevent="changeTitle()">Click to change title</a>
        <h2>Post</h2>
        <div v-for="post in posts" :key="post.title">
          <single-post :data="post" :isactive="1"></single-post>
          <hr />
        </div>
        <h2>Lecture</h2>
        <div v-for="lecture in lectures" :key="lecture.title">
          <lecture :data="lecture" :isactive="1"></lecture>
          <hr />
        </div>
      </div>
      <div class="col-md-4 my-4">
        <h3>Latest Post</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="post in posts" :key="post.title">{{post.title}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Lecture from "./components/Lecture.vue";
import SelectComponent from "./components/SelectComponent.vue";
export default {
  data() {
    return {
      lectures: [
        {
          title: "Lecture 1",
          description: "Lecture One Discription",
        },
        {
          title: "Lecture 2",
          description: "Lecture Two Discription",
        },
      ],
      posts: [
        {
          title: "New Post 1",
          description: "Post Discription 1",
        },
        {
          title: "New Post 2",
          description: "Post Discription 2",
        },
      ],
    };
  },
  methods: {
    selectChange(event) {
      console.log(event.target.value);
    },
  },
  name: "App",
  components: {
    Lecture,
    SelectComponent,
  },
};
</script>

<style>
</style>
