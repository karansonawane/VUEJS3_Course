<template>
  <div>
    <div class="title">{{lecture.title}}</div>
    <div>{{lecture.description}}</div>
    <a href="" @click.prevent="ChangeLecTitle()">Click to change Title</a>
  </div>
</template>

<script>
export default {
    props: ['data'],
  data() {
    return {
        lecture: this.data,
    };
  },
  methods: {
      ChangeLecTitle() {
          this.lecture.title = 'Changed The Title';
      },
  },
};
</script>
<style>
.title{
    color: red;
    font-weight: bold;
}
</style>