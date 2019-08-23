<template>
<div>
    <h1>HTML基礎講座vol.3 〜タグ基本編〜</h1>
    <div class="block">
        <p>divタグ</p>
        <div class="mybox"></div>
    </div>
    <div class="block">
        <p>articleタグ</p>
        <article class="mybox"></article>
    </div>
    <section class="block">
        <h3>sectionタグ</h3>
        <section class="mybox"></section>
    </section>
    <div>
        <p>navタグ</p>
        <nav>
            <ul>
                <li>トップページ</li>
                <li>子ページ</li>
                <li>子ページ</li>
            </ul>
        </nav>        
    </div>
<!-- aside

main

h1〜h6

header

footer

p

ul

ol

li

dl

dt

dd

figure

figcaption

span

strong

img

a

em

br

table

tr

th

td

iframe

form

input

label

textarea

select

radio -->

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