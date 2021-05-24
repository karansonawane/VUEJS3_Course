<template>
  <div>
    <h3>Post Details</h3>
    <div>
      <div>Id: {{ id }}</div>
      <div>Title: {{ post.title }}</div>
      <div>Description: {{ post.description }}</div>
    </div>
    <div>
      <router-link to="/posts/-MaSFIo6O84vdh66Ab-j"
        >go- to post id -MaSFIo6O84vdh66Ab-j</router-link
      >
    </div>
    <div>
      <router-link class="btn btn-dark" to="/posts">Back to Posts</router-link>
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

  // ************* Second Method **************

  watch: {             
    $route() {
      console.log('watch called');
      this.getPostDetails();
    },
  },
  created() {
    // this.$watch(                           ********* first Method *********
    //   () => this.$route.params,
    //   () => {
    //     this.getPostDetails();
    //   },
    // );
    this.getPostDetails();
  },
  methods: {
    getPostDetails() {
      this.id = this.$route.params.id;
      axios.get(`posts.json?id=${this.id}`).then((response) => {
        this.post = response.data[this.id];
      });
    },
  },
};
</script>
