<template lang="pug">
div
    section
        h1 Input要素のtype属性
        div
            form
            div
                p color
                label カラーパレッド：
                    input(type='color', value='#')
            div
                p checkbox
                    label 
                        input(type='checkbox',value='小麦粉')
                        |小麦粉
                    label
                        input(type='checkbox',value='ベーキングパウダー')
                        |ベーキングパウダー
                    label
                        input(type='checkbox',value='砂糖')
                        |砂糖
            p date
            p datetime-local
            p email
            p file
            p hidden
            p radio
            p range
            label
                input.form-control(v-model='range', type='range', min='0', max='10')
            p reset
            p password
            input(type='password', maxlength='8', placeholder='パスワード入力')
            p serch
            p submit
            p tel
            p text
            label
                | テキスト：
                input(type='text', name='text', value='未入力', placeholder='テキスト')
            p url
    hr
    section
        h2 その他属性

</template>
<script>
export default {
    data:{
        rage:3
    }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>