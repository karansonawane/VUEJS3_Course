<template>
    <div>
        <div>
            <button @click.prevent="onPostsClick()">Click to post page</button>
        </div>
        <div> Home Page </div>
    </div>
</template>

<script>
export default {
    methods: {
        onPostsClick() {
            this.$router.push({ path: '/posts', query: { id: 1 } });
        },
    },
};
</script>
