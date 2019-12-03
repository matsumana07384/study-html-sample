<template lang="pug">
div(class='hello')
  h1 {{ msg }}
  h2 HTML
  ul
    li
      span {{ html.ver1.title }} |
      a( href='https://qiita.com/matsumana07384/private/1a24f6f0c8eaca60c26b' , target='_blank', rel='noopener') {{ urlTitle }}
    li
      router-link(to='/tag001') {{ html.ver2.title }}
      span |
      a(href='https://qiita.com/matsumana07384/private/fe36697125151650d641', target='_blank', rel='noopener') {{ urlTitle }}
  ul
    li
      router-link(to='/tag002') {{ html.ver3.title }}
      span |
      a(href='', target='_blank', rel='noopener') {{ urlTitle }}
    li
      router-link(to='/input') {{ html.ver4.title }}
      span |
      a(href='https://qiita.com/matsumana07384/private/341748fd6dd1bc7a3e9c', target='_blank', rel='noopener') {{ urlTitle }}
  ul
    li
      router-link(to='/input') {{ html.ver5.title }}
      span |
      a(href='https://qiita.com/matsumana07384/private/2062372276829ac0fc0d', target='_blank', rel='noopener') {{ urlTitle }}
  
  h2 CSS
  ul
    li {{ css.ver1.title }} |
      router-link(to='/css') 
      span  |
      a(href='#', target='_blank', rel='noopener') {{ urlTitle }}

</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
        html: {
            ver1: {
              title: 'ブラウザに表示されないタグ編',
              url: ''
            },
            ver2: {
              title: 'ブロック要素とインライン要素の基礎編',
              url: ''
            }, 
            ver3: {
              title: 'コンテンツモデル編',
            } ,
            ver4:{
              title:'要素編',
              url: ''
            },
            ver5: {
              title:'タグ/Input編',
              url: '',
            }
        },
        css :{
          ver1: {
            title:'CSSの基本知識',
            url: ''
          },
          ver2: {
            title:'',
            url: ''
          },
          ver3: {
            title:'',
            url: ''
          },
        },
      urlTitle: 'Qiita'
    }
  },
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
