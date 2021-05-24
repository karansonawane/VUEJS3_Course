<template>
  <div>
    <h3>Post Details</h3>
    <div>
      <div>Id: {{ id }}</div>
      <div>Title: {{ post.title }}</div>
      <div>Description: {{ post.description }}</div>
    </div>
    <div>
        <router-link class="btn btn-dark" to="/posts">Back</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: "",
      id: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    axios.get(`posts.json?id=${this.id}`).then((response) => {
      this.post = response.data[this.id];
    });
  },
};
</script>