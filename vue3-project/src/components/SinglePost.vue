<template>
    <div>
        <div class="title">{{post.title}}</div>
        <div>{{post.description}}</div>
        <a href="" @click.prevent="changeTitle()">Click to Change the title</a>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return{
            post: this.data,
        };
    },
    methods: {
        changeTitle(){
            this.post.title = 'Changed The Title';
        }
    }
};
</script>
<style>
.title{
    color: red;
    font-weight: bold;
}
</style>