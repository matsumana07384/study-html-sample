<template lang="pug">
div
    section
        h1 Box Type model
        div
            div(class='boxtypemodel')
                p contents
    hr
    div(class='size')
        p(class='title') サイズ単位
        div
            p(class='sample-box unit-em')
            p(class='sample-box unit-percent')
            p(class='sample-box unit-px')
            p(class='sample-box unit-pt')
            p(class='sample-box unit-rem')
            p(class='sample-box unit-vh')
            p(class='sample-box unit-vw')
    section
        h2 サイズ指定
        div( v-for='(item,index) in sizeValue' v-bind:key='index')
            p(v-bind:class='item.styleClass') {{item.text}}
    section
        h2 

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
                hr

</template>
<script>
export default {
    data: function(){
        return{
            sizeValue:[
                { styleClass:'sample-box set-em',text:'5em' },
                { styleClass:'sample-box set-percentage',text:'5%' },
                { styleClass:'sample-box set-pt',text:'5pt' },
                { styleClass:'sample-box set-px',text:'5px' },
                { styleClass:'sample-box set-rem',text:'5rem' },
                { styleClass:'sample-box set-viewport',text:'25v'}
         ]
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
.size {
    .unit-em {
        width: 10em;
        height: 10em;
    }
    .unit-percent {
        width: 10%;
        height: 10%;
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
.sample-box{
    background: #f0f7ff;
    border: dashed 0.1em #5b8bd0;
    p {
        margin: 0; 
        padding: 0;
    }  
}
.l-space {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
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
