<template>
<div class="button-link">
    <a class="text" href="https://google.com">ボタンリンク</a>
</div>
</template>
<script>
export default {
    props: {
        styleCss: {
            type: Boolean,
            default: false,
        }
    }
    
}
</script>
<style lang="postcss" scoped>
.button-link{
    background-color: #36b7f4;
    border-radius: 20px;
    margin: 0 auto 0 auto;
    width: 200px;
    padding: 5px 0 5px 0;
}
.button-link .text{
    color: #ffffff;
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
}
</style>