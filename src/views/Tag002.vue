<template>
<div>
    <h1>HTML基礎講座vol.3 〜タグ基本編〜</h1>

    <div class="block">
        <p>divタグ</p>
        <div class="mybox">div</div>
    </div>

    <div class="block">
        <p>articleタグ</p>
        <article class="mybox">article</article>
    </div>

    <section class="block">
        <h3>タグ</h3>
        <section class="mybox">section</section>
    </section>

    <div>
        <p>navタグとul、liタグ</p>
        <nav>
            <ul>
                <li><a href="https://google.com" target="_blank">1</a></li>
                <li><a href="https://yahoo.co.jp" target="_blank">2</a></li>
                <li><router-link to="/">3</router-link></li>
            </ul>
        </nav>        
    </div>
    
    <div>
        <p>asideタグ</p>
        <aside>
            <p>asideで囲まれた要素</p>
        </aside>
        <p>本文</p>
    </div>

    <div>
        <p>h1〜h6タグ</p>
        <hgroup>
            <h1>title</h1>
            <h2>title</h2>
            <h3>title</h3>
            <h4>title</h4>
            <h5>title</h5>
            <h6>title</h6>
        </hgroup>
    </div>

    <div>
    <h1>mainタグ</h1>
        <main>
        main contents
            </main>
    </div>

    <div>
        <p>pタグ</p>
        <p>text</p>
    </div>

    <div>
        <p>ul、ol、liタグ</p>
        <ul>
            <li>とくに</li>            
            <li>いみは</li>            
            <li>ない</li> 
        </ul>
        <ol>
            <li>はじめに</li>            
            <li>つぎに</li>            
            <li>おわりに</li>            
        </ol>
    </div>

    <div>
        <dl>
            <dt>用語</dt>
            <dd>説明を長々と書いてもよい</dd>    
        </dl>
    </div>


<!--

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

radio 
footer -->

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