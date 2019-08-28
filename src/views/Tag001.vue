<template>
<div>
    <h1>HTML基礎講座vol.2 〜ブロック要素とインライン要素基礎編〜</h1>
    <div class="block">
        <p>ブロック要素</p>
        <div class="mybox"></div>
        <div class="mybox yohaku-margin"> margin 上下左右 10px</div>
        <div class="mybox yohaku-padding">padding 上下左右 10px</div>
    </div>
    <div class="block">
        <p class>インライン要素</p>
        <span class="mybox"></span>
        <span class="mybox yohaku-margin">margin 上下左右 10px</span>
        <span class="mybox yohaku-padding">padding 上下左右 10px</span>
    </div>
    <div  class="block">
    <p>空要素</p>
    <br>
    <img src="https://placehold.jp/150x150.png" alt="サンプル画像">
    <img src="https://placehold.jp/150x150.png" alt="サンプル画像">
    <img src="https://placehold.jp/150x150.png" alt="サンプル画像">
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
    padding: 20px;  /* 内側の余白 */
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
</style>