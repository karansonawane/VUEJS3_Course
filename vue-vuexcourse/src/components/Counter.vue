<template>
    <div>
        <div>{{ count }}</div>
        <button @click.prevent="onIncrement()">Increment</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        onIncrement() {
            this.$store.state.count++;
        }
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    }
}
</script>
