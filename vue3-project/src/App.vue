<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="my-4">
          <div>{{ user }}</div>
          <a href="" @click.prevent="changeUser()">Click to change User</a>
        </div>
        <a href="" @click.prevent="changeTitle()">Click to change title</a>
        <h2>Post</h2>
        <div v-for="post in posts" :key="post.title">
          <single-post
            :data="post"
            :isactive="1"
            @title-changed="onTitleChange"
          ></single-post>
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
          <li class="list-group-item" v-for="post in posts" :key="post.title">
            {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Lecture from "./components/Lecture.vue";
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
          id: 1,
          title: "New Post 1",
          description: "Post Discription 1",
        },
        {
          id: 2,
          title: "New Post 2",
          description: "Post Discription 2",
        },
      ],
      user: "Karan Sonawane",
    };
  },
  provide() {
    return {
      user: this.user,
    };
  },
  methods: {
    selectChange(event) {
      console.log(event.target.value);
    },
    onTitleChange(event) {
      let index = this.posts.findIndex((post) => post.id === event.id);
      this.posts[index].title = event.title;
    },
    changeUser() {
      this.user = "Updated Karan Sonawane";
    },
  },
  name: "App",
  components: {
    Lecture,
  },
};
</script>

<style>
</style>
