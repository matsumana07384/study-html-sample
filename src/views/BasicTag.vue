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
        <h1>タグ</h1>
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

    <p>
        <ins>
            <a href="/">Apples</a>
        </ins>
    </p>

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
-->
    <div>
        <p>iframe</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.770164154662!2d139.69944175186086!3d35.658033880102536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1568196084451!5m2!1sja!2sjp" width="300" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div>
        <a href="/input">input編</a>
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
.dot-none {
  list-style: none;
}
</style>