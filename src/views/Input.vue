<template lang='pug'>
div
    section
        h1 Input要素のtype属性
        div
            form
                div
                    p checkbox
                    label 
                        input(type='checkbox' id='flower' name='material' value='小麦粉')
                        |小麦粉
                    label
                        input(type='checkbox' id='bakingpowder' name='material' value='ベーキングパウダー')
                        |ベーキングパウダー
                    label
                        input(type='checkbox' id='sugar' name='material' value='砂糖')
                        |砂糖
                input(type='submit' value='Send Request')

            div
                p color
                form
                    label カラーパレッド：
                        input(type='color' value='#fffff' name='color' autocomplete="on" list="color-list")
                        datalist(id='color-list')
                            option(value='#000000')
                            option(value='#ffffff')
                    div
                        input(type='submit' value='Send Request')
            div
                p date
                form
                    input(type='date' value='2019-09-26' name='set-time' min='2019-09-01' max='2019-12-31')
                    div
                        input(type='submit' value='Send Request')

            div
                p datetime-local
                form
                    input(type='datetime-local' id='birthdaytime' name='birthdaytime')
                    div
                        input(type='submit' value='Send Request')
            div
                p email
                form
                    input(type='email' id='email' size='50' required)
                    div
                        input(type='submit' value='Send Request')
            div
                p file
                form
                    input(type='file' name='profile' accept='image/png image/jpegimage/gif')
                    div
                        input(type='submit' value='Send Request')
            div
                p hidden
                form
                    input(type='hidden' value='zt123456' id='resistNumber')
                    input(type='hidden' value='zt000000' id='resistNumber2' autocomplete="on")
                    div
                        input(type='submit' value='Send Request')

            div
                p number
                form
                    label 予約する人数を選択：
                    input(type='number' id='people' name='reservation' min='1' max='10' value='1')
                    | 人
                    div
                        input(type='submit' value='Send Request')
            div
                p radio
                form
                    label
                        input(type='radio' id='pancake' name='lunchMenu' value='pancake' checked)
                        | パンケーキ
                    label
                        input(type='radio' id='omeletterice' name='lunchMenu' value='omeletterice')
                        | オムライス
                    label
                        input(type='radio' id='hamburger' name='lunchMenu' value='hamburger')
                        | ハンバーグ
            div
                p range
                div 満足度を選択
                form
                    label
                        |1
                        input(v-model='range' type='range' min='1' max='10')
                        |10
            div
                p reset
                form
                    div
                        label(for='login')
                            |name：
                            input(type='text' name='mail')
                    div 
                        label(for='login')
                            |password：
                            input(type='password' name='password')  
                    div
                        input(type='reset' value='reset')
                        input(type='submit' value='Send Request')

            div
                p password
                form
                    input(type='password' maxlength='8' placeholder='パスワードを入力')
            div
                p serch
                form
                    input(type='search')
                form
                    input(type='search' autocomplete='on' list='list')
                    datalist(id='list')
                        option(value='jQuery')
                        option(value='Vue.js')
                        option(value='React.js')
                        option(value='Angular.js')
                    input(type='submit' value='Search')     
            div
                p submit
                form
                    div
                        label(for='login')
                            |first name:
                            input(type='text' name='firstname' required)
                        label(for='login')
                            |last name:
                            input(type='text' name='lastname' required)
                    div
                        input(type='submit' value='Send Request')
            div
                p tel
                form
                    div
                        label 電話番号：
                            input(type='tel' pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}' placeholder='090-1234-5678' required)
                    input(type='submit' value='Send Request')
            div
                p text
                form
                    div
                        label テキスト：
                            input(type='text' name='text' value='' placeholder='テキスト' spellcheck='true')
            div
                p url
                form
                    div
                        label ブログURL：
                            input(type='url' name='url' id='url' placeholder='https://hogehoge.com' pattern='https://.*' size='50' required)
                    input(type='submit' value='Send Request')
    hr
    section
        h2 value属性
        form
            div
                label 氏名：
                    input(type='text' name='text' value='ハコネコマックス')
            div
                label 好きな食べ物：
                    label
                        input(type='radio' id='like-pancake' name='lunchMenu' value='pancake')
                        | パンケーキ
                    label
                        input(type='radio' id='like-omelette-rice' name='lunchMenu' value='omeletterice')
                        | オムライス
                    label
                        input(type='radio' id='like-hamburg' name='lunchMenu' value='hamburger')
                        | ハンバーグ
            div
                input(type='submit' value='送信！')
    hr
    section
        h2 その他属性
        div
            p
                b autocomplete：入力候補を提示して入力内容を自動補完する
            form
                input(type='text' list='sweets')
                datalist(id='sweets')
                    option(value='どら焼き')
                    option(value='大福')
                    option(value='干菓子')
                    option(value='ケーキ')
                    option(value='プリン')
        div
            p 
                b autofocus：自動的にフォーカスを当てる
            form
                input(type='search' name='serach_info' autofocus)
        div
            p
                b checked：チェックボックスを選択されている状態に指定 
            form
                label 
                    input(type='checkbox' value='小麦粉' checked)
                    |小麦粉
                label
                    input(type='checkbox' value='ベーキングパウダー' checked)
                    |ベーキングパウダー
                label
                    input(type='checkbox' value='砂糖')
                    |砂糖
        div
            p 
                b disabled：inputの操作を完全に無効化 
            form
                input(type='text' name='range' value="変更できません" disabled)
                input(type="submit" disabled)
        div
            p 
                b maxlength：入力フィールドの大きさを指定
            form
                p 8文字に指定
                input(type='text' maxlength=8 value='12345678')
        div 
            p
                b max/min 入力できる最大値/最小値を指定
            p 人数（1人以上、10人以下）
            form
                input(type='number' name='peple' min='1' max='10') 
                | 人
        div 
            p
                b readonly：入力欄が編集できないように指定
            form
                input(type='text' name='lastname' value='こんにちは！' readonly='true')
        div 
            p
                b required：入力欄に入力がないと送信ができないように指定
            form
                input(type='text' name='lastname' value='' required)
                input(type='submit')
        div 
            p
                b size:入力欄の幅の大きさを指定
            form
                input(type='text' name='text' size='10' required)
                input(type='submit' vale="送信")
        div 
            p
                b step:数の幅を指定
            form
                p 3個まとめ売
                input(type='number' name='apple' min='0' max='100' step='3') 
                | 個  
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