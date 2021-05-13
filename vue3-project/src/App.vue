<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Post</h2>
        <div v-for="post in posts" :key="post.title">
          <single-post :data="post"></single-post>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  components: {},
};
</script>

<style>
</style>
