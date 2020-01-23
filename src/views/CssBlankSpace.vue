<template lang="pug">
section
    h2 マージン・パディング
    div(class='l-space')
        div(class='l-margin')
            p
                b margin
            hr
            div(class='sample-box set-px')
                p box
            hr
            p(class='title') 背景
                div(class='bg-box') 背景
            hr
            p(class='title-2') margin並べる（相殺される）
                div(v-for='n of 2' class='bg-box')
                    p margin 25px を指定したクラス
            hr
            p(class='title-3') インライン要素での指定
            div
                a(href="/" class="link")
                    span 戻る
            hr
            p 親要素をはみ出すことがある
            div(class='l-quote')
                p(class='title') セロ弾きのゴーシュ
                div(class='contents') 
                | 月も一つの返事窓会を交響をし頭なる。
                | ところがまた上手たございという顔たまし。
                | いいかげんたでしのましはますまた壁の上手屋のままではぱたっと丈夫ただて、そればかり評判をひらいがっんました。
        div(class='l-padding')
            p
                b padding
            hr
            div(class='sample-box set-px')
                p box
            hr
            p 背景
                div(class='bg-box') 背景
            hr
            p paddingを並べる（相殺されない）
            div(v-for='n of 2' class='bg-box')
                p padding 25px を指定したクラス
            hr
            p インライン要素での指定       
            div
                a(href="/" class="link")
                    span 戻る
</template>

<style lang="scss" scoped>
.l-space {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
}

.l-padding {
    flex: 1;  
    .set-px {
        padding: 8px 16px 32px 64px;
    }
    .bg-box {
        padding: 20px;
    }
    .link{
        padding: 30px;
        background-color: #fffbce;
    }
}
</style>