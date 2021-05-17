<template>
    <div :class="{'bgcolor-grey' : isactive}" class="p-3">
        <div class="title">{{post.title}}</div>
        <div>{{post.description}}</div>
        <a href="" @click.prevent="changeTitle()">Click to Change the title</a>
    </div>
</template>
<script>
import { Post } from '../services/PostService';
export default {
    emits: {
        'title-changed' : (post) => {
            if (post instanceof Post) {
                return true;
            }
            console.log('Invalid Post Data');
            return false;
        },
    },
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
            const postData = new Post (this.post.id, this.post.title, this.post.description)
            this.$emit('title-changed', postData);
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
