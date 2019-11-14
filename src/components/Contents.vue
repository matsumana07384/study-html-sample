<template lang="pug">
div(class='hello')
  h1 {{ msg }}
  h2 HTML
  ul
    li
      span ブラウザに表示されないタグ編 |
      a(href='https://qiita.com/matsumana07384/private/1a24f6f0c8eaca60c26b', target='_blank', rel='noopener') Qiita
  ul
    li
      router-link(to='/tag001') ブロック要素とインライン要素の基礎編
      span |
      a(href='https://qiita.com/matsumana07384/private/fe36697125151650d641', target='_blank', rel='noopener') Qiita
  ul
    li
      router-link(to='/tag002') タグ基本編 
      span / 
      router-link(to='/input') Input要素
      span |
      a(href='https://qiita.com/matsumana07384/private/2062372276829ac0fc0d', target='_blank', rel='noopener') Qiita
  h2 CSS
  ul
    li 
      router-link(to='/css') CSSの基本編
      span  |
      a(href='#', target='_blank', rel='noopener') Qiita

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
span {
  margin-right:2px;
  margin-left:2px;
}
</style>
