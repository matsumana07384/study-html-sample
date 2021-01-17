<template lang="pug">
div(class='hello')
  h1 {{ msg }}
  h2 HTML
  ul
    li
      span {{ html.ver1.title }} |
      a( v-bind:href='html.ver1.url' , target='_blank', rel='noopener') {{ urlTitle }}
    li
      router-link(to='/blockInline') {{ html.ver2.title }}
      span |
      a( v-bind:href='html.ver2.url', target='_blank', rel='noopener') {{ urlTitle }}
    li
      span {{ html.ver3.title }} 
      span |
      a( v-bind:href='html.ver3.url', target='_blank', rel='noopener') {{ urlTitle }}
    li
      router-link(to='/basciTag') {{ html.ver4.title }}
      span |
      a( v-bind:href='html.ver4.url', target='_blank', rel='noopener') {{ urlTitle }}
    li
      router-link(to='/input') {{ html.ver5.title }}
      span |
      a( v-bind:href='html.ver5.url', target='_blank', rel='noopener') {{ urlTitle }}
  
  h2 CSS
  ul
    li 
      router-link(to='/css') {{ css.ver1.title }} 
      span  |
      a(href='#', target='_blank', rel='noopener') {{ urlTitle }}
  h2 Other
  ul
    li 
      router-link(to='/layoutsnippets') {{ other.ver1.title }} 
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
        html: {
            ver1: {
              title: 'ブラウザに表示されないタグ編',
              url: 'https://qiita.com/matsumana07384/private/1a24f6f0c8eaca60c26b'
            },
            ver2: {
              title: 'ブロック要素とインライン要素の基礎編',
              url: 'https://qiita.com/matsumana07384/private/4cc96548bd5e5ee23c08'
            }, 
            ver3: {
              title: 'コンテンツモデル編',
              url:'https://qiita.com/matsumana07384/private/341748fd6dd1bc7a3e9c'
            } ,
            ver4:{
              title:'要素編',
              url: 'https://qiita.com/matsumana07384/private/2062372276829ac0fc0d'
            },
            ver5: {
              title:'タグ/Input編',
              url: 'https://qiita.com/matsumana07384/private/5f686000d06cf5cf22c0',
            }
        },
        css :{
          ver1: {
            title:'CSSの基本知識',
            url: ''
          }
        },
        other :{
          ver1: {
            title:'スニペット',
          }
        },
      urlTitle: 'Qiita'
    }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
