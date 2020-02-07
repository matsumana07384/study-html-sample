<template lang="pug">
div
    section
        h1 Box Type model
        p 要素を囲むボックスのこと
        p content（文字や画像など）、padding、border、marginの層で構成される
        div
            div(class='boxtypemodel')
                p contents
    hr
    div(class='size')
        p(class='title') 単位
        div
            div(class='sample-box')
                div(class='unit')
                    p em（えむ）
                    p 文字の大きさを基準とする単位。語源は大文字の「M」。
                    div(class='unit-em')
                    small 
                        p 10em × 10em
                div(class='unit')
                    p %（ぱーせんと）
                    p 親要素の領域や初期値を基準とする単位。相対的に変化する。
                    div(class='unit-percent') 
                    small
                        p 10% × 10% 
                div(class='unit')
                    p px（ぴくせる）
                    p 画面上の1pxの長さを基準とする単位。相対的に変化する。
                    div(class='unit-px')
                    small  
                        p  10px × 10px
                div(class='unit')
                    p pt（ポイント）
                    p 1pt＝1/72in＝0.3528mmで値が固定されている単位。どの画面でも変わらない。
                    div(class='unit-pt')
                    small  
                        p  10pt × 10pt
                div(class='unit')
                    p rem（れむ）
                    p ルート（html)の要素のフォントサイズを基準とする単位。語源は「root em」。
                    div(class='unit-rem')
                    small
                        p 10rem × 10rem
                div(class='unit')
                    p vh/vw
                    p スクロールバーを含んだ状態でブラウザの表示領域を算出する単位。vhがviewport height 、vwがviewport width。
                    div(class='unit-vh unit-vw')
                    small
                        p
                            | 10vw × 10vh
    hr
    section
        h2 calc関数
        p CSS上で数学演算を行うことができる関数。viewportや親要素に基づいて計算ができる。
        p calc関数が使えるブラウザは多く、 Opera Miniを除くほんとんどのバージョンでサポートされている。
        p 参考：
            ul
                li
                    a(href='https://caniuse.com/#feat=calc') calcが使えるブラウザ
                li
                    a(href='https://coliss.com/articles/build-websites/operation/css/calc-function-with-use-cases.html') 
                        |[CSS]知っていると便利な「calc()関数」の使い方のまとめ -レイアウト・要素の配置・フォントサイズの定義など
    hr
    section
        h2 グローバル属性値
        div(class='l-global')
            p 設定した色
            p(class='p-initial') initial
            p(class='p-inherit') inherit
            p(class='p-unset') unset
        hr
        div
            p 初期色
            p(class='p-initial') initial
            p(class='p-inherit') inherit
            p(class='p-unset') unset

</template>
<script>
export default {
    data: function(){
        return{
        }   
    }
}
</script>
<style lang="scss" scoped>
div{
    font-family: 'Kosugi Maru', sans-serif;
}
.title {
    font-weight: bold;
    color: #000;
    font-size: 24px;
}
.sample-box .unit div{
    background: #f0f7ff;
    border: dashed 0.1em #5b8bd0;
    margin: 0 auto 0 auto;
}
.size {
    margin: 0 auto 0 auto;

    .unit-em {
        width: 10em;
        height: 10em;
    }
    .unit-percent {
        width: 10%;
        height: 100%;
    }
    .unit-px {
        width: 10px;
        height: 10px;
    }
    .unit-pt {
        width: 10pt;
        height: 10pt;
    }
    .unit-rem {
        width: 10rem;
        height: 10rem;
    }
    .unit-vh {
        height: 10vh;

    } 
    .unit-vw {
        width: 10vw;
    }
}
section{
    margin: 100px auto;
}
p {
    color: gray;
}

.l-global{
p {
    color: #4169e1;
    font-weight: bold;
}
p.p-initial {
    all: initial;
}
p.inherit{
    all: inherit;
}
p.p-unset {
    all: unset;
    }
}


.boxtypemodel{
    width: 300px;
    color: #ffffff;
    background-color: #00A0E9;
    padding: 30px;
    border: 30px solid #fffbce;
    margin: 30px auto;
}


.set-em {
    padding: 5em;    
}
.set-percentage {
    padding: 5%;
}
.set-px {
    padding: 5px;
}
.set-pt {
    padding: 5pt;
}
.set-rem {
    padding: 5rem;
}
.set-viewport {
    padding: 5vh 5vw ;
}

.bg-box{
    background-color: #00A0E9;
    border: #000000 solid 1px;
}
.l-margin {
    flex: 1;
    .title {
        margin-top: 30px;
    }
    .title-2 {
        margin-top: 48px;
    }
    .title-3 {
        margin-top: 130px;
    }
    .bg-box {
        margin: 20px;
    }
    .link {
        margin: 30px;
        background-color: #fffbce;
     }
    .l-quote {
        // border: 1px solid #000000;
        .title{
            border: 1px solid #000000;
            margin-top: 25px;
            font-weight: bold;
        }
        .contents{
            font-style: italic;
        }
    }
}


</style>
