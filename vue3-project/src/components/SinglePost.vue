<template>
    <div :class="{'bgcolor-grey' : isactive}" class="p-3">
        <div class="title">{{post.title}}</div>
        <div>{{post.description}}</div>
        <a href="" @click.prevent="changeTitle()">Click to Change the title</a>
    </div>
</template>
<script>
export default {
    emits: ['title-changed'],
    props: {
        data: {
            type: Object,
            required: true,
        },
        isactive: {
            type: Number,
            required: false,
            default: 1,
        },
    },
    data() {
        return{
            post: { ...this.data },
        };
    },
    methods: {
        changeTitle(){
            this.post.title = 'Changed The Title';
            this.$emit('title-changed', this.post);
        }
    }
};
</script>
<style>
.title{
    color: red;
    font-weight: bold;
}
.bgcolor-grey{
    background-color: #ccc;
}
</style>
