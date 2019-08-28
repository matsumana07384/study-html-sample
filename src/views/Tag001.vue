<template>
<div>
    <h1>HTML基礎講座vol.2 〜ブロック要素とインライン要素基礎編〜</h1>
    <div class="block">
        <p><b>ブロック要素</b></p>
        <div class="mybox">default</div>
        <div class="mybox yohaku-margin"> margin 上下左右 10px</div>
        <div class="mybox yohaku-padding">padding 上下左右 10px</div>
    </div>
    <div class="block">
        <p><b>インライン要素</b></p>
        <div class="block">
            <span class="mybox">default</span>
            <span class="mybox yohaku-margin">margin 上下左右 10px</span>
            <span class="mybox yohaku-padding">padding 上下左右 10px</span>
        </div>
        <p>inlien要素が重なる例</p>
        <div class="block">
            <span class="mybox yohaku-padding" v-for="i in 10" v-bind:key="i">padding 上下左右 10px</span>
        </div>
        <p>インライン要素にブロック要素を入れ込める特別例</p>
        <a href="https://hogehoge.com">
            <div class="mybox"> 
                <img src="https://placehold.jp/150x150.png" alt="サンプル画像">
                <p>こういう画像だよ</p>
            </div>
        </a>
    </div>
    <div  class="block">
    <p><b>空要素</b></p>
    <p>pタグに<br>改行を追加</p>
    <div>
        <p>margin を指定</p>
        <img src="https://placehold.jp/150x150.png" alt="サンプル画像" class="yohaku-margin">
    </div>
    <div>
        <p>paddingを指定</p>
        <img src="https://placehold.jp/150x150.png" alt="サンプル画像" class="yohaku-padding">
    </div>
    <br>
    <hr>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
.block {
    margin-top: 30px;
}
.mybox{
    background-color: #F6D4D8;  /* 背景色 */
    border-radius: 5px;
    /* padding: 20px;  内側の余白 */
    position: relative;
    z-index: 0;
 }

.yohaku-margin {
    margin-top: 10px; 
    margin-bottom: 10px; 
    margin-left: 10px;
    margin-right: 10px;
}
.yohaku-padding {
    padding-top: 10px; 
    padding-bottom: 10px; 
    padding-left: 10px;
    padding-right: 10px;
}
.yohaku-padding {
    padding-top: 10px; 
    padding-left: 10px;
    border: solid 1px #000;
}
</style>