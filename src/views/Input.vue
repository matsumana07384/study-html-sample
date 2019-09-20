<template lang="pug">
div
    section
        h1 Input要素のtype属性
        div
            form
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
            div
                p color
                label カラーパレッド：
                    input(type='color', value='#fffff')
            p date
            p datetime-local
            p email
            p file
            p hidden
            p number
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
                input(type='text', name='text', value='', placeholder='テキスト')
            p url
    hr
    section
        h2 その他属性
        div
            p
                b autocomplete：入力候補を提示して入力内容を自動補完する
            form
                input(type="text" list="sweets")
                datalist(id="sweets")
                    option(value="どら焼き")
                    option(value="大福")
                    option(value="干菓子")
                    option(value="ケーキ")
                    option(value="プリン")
        div
            p 
                b autofocus：自動的にフォーカスを当てる
            form
                input(type="search" name="serach_info" autofocus)
        div
            p
                b checked：チェックボックスを選択されている状態に指定 
            form
                label 
                    input(type='checkbox',value='小麦粉' checked)
                    |小麦粉
                label
                    input(type='checkbox',value='ベーキングパウダー' checked)
                    |ベーキングパウダー
                label
                    input(type='checkbox',value='砂糖')
                    |砂糖
        div
            p 
                b disabled：inputの操作を完全に無効化 
            form
                input(type="range" disabled)
        div
            p 
                b maxlength：入力フィールドの大きさを指定
            form
                p 8文字に指定
                input(type="password" maxlength=8)
        div 
            p
                b max/min 入力できる最大値/最小値を指定
            p 人数（1人以上、10人以下）
            form
                input(type="number" name="peple" min="1" max="10")


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