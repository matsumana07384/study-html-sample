<template>
<div class="content">
    <div class="info center">
        <p class="title">{{ sample.title }} </p>
        <p class="discription">{{ sample.text }}</p>
    </div>
    <div class="summary-image">
        <img src="https://placehold.jp/300x400.png">
    </div>
    <Button></Button>
</div>
</template>
<script>
import Button from '@/components/atom/Button.vue'

export default {
    components: {
        Button,
    },
    data(){
        return {
            sample: {
                title: "ダミータイトルダミータイトルダミータイトルダミータイトルダミータイトル",
                text: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ'
            }
        }
    }
}
</script>
<style lang="postcss" scoped>
.content {
    background-color: #ffd700;
    padding: 0 40px 0 40px;
}
.center {
    margin: 0 auto 0 auto;
    text-align: center;    
}
.content .info { 
    color: #ffffff;
}
.content .info .title {
    font-size: 24px;
    font-weight: bold;
}
.content .info .discription {
    font-size: 14px;
    font-weight: bold;
    line-height: 2;
}
.content .summary-image {

}
.content .summary-image img{
    height: auto;
    width: 100%;
}
</style>