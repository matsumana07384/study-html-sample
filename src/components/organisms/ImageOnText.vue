<template>
<div class="content">
    <div class="visual">
        <img src="https://placehold.jp/375x620.png">
    </div>
    <div class="heading-section">
        <p class="addition">{{ sample.subtitle }}</p>
        <h1 class="title">{{ sample.title }}</h1>
        <Button></Button>
    </div>
</div>
</template>
<script>
import Button from '@/components/atom/Button.vue'

export default {
  components: {
    Button
  },
    data(){
        return {
            sample: {
                subtitle: "サブタイトル",
                title: "ダミータイトル",
            }
        }
    }
}
</script>
<style lang="postcss" scoped>
.content {
    position: relative;
}
.content .visual {
    background-color: #F0E68C;
}
.content .visual img{
    display: block;
    opacity: 0.6;
    width: 100%;
}
.content .heading-section {
    color: #ffffff;
    margin: 0;
    padding: 0;
    position: absolute;
    transform: translate(-50%,-50%);
    width: 100%;
    top: 40%;
    left: 50%;
}
.content .heading-section .addition{
    font-weight: bold;
}
.content .heading-section .title{
}
</style>