<template>
<div>
    <div class="header">
        <slot name="header"></slot>
    </div>
    <div class="content">
        <slot name="content"></slot>
    </div>
    <div class="footer">
        <slot name="footer"></slot>
    </div>
</div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.card {
    border: 3px solid #eee;
    box-shadow: 3px 3px 3px #eee;
}
.header{
    background: #eee;
    font-size: 20px;
}
.content{
    padding: 20px 10px;
}
.footer{
    background: #eee;
    font-size: 20px;
}
</style>