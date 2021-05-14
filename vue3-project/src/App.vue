<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Post</h2>
        <div v-for="post in posts" :key="post.title">
          <single-post :data="post"></single-post>
          <hr />
        </div>
        <h2>Lecture</h2>
        <div v-for="lecture in lectures" :key="lecture.title">
          <lecture :data="lecture"></lecture>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lecture from './components/Lecture.vue';
export default {
  data() {
    return {
      lectures :[
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
  name: "App",
  components: {Lecture},
};
</script>

<style>
</style>
