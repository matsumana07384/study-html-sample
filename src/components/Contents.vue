<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>HTML</h3>
    <ul>
      <li>
        <span>ブラウザに表示されないタグ編</span>
         | 
         <a href="https://qiita.com/matsumana07384/private/1a24f6f0c8eaca60c26b" target="_blank" rel="noopener">Qiita</a>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/tag001">ブロック要素とインライン要素の基礎編</router-link>
         | 
        <a href="https://qiita.com/matsumana07384/private/fe36697125151650d641" target="_blank" rel="noopener">Qiita</a>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/tag002">タグ基本編</router-link>/<router-link to="/input">Input要素</router-link>/
         | 
        <a href="#" target="_blank" rel="noopener">Qiita</a>
      </li>
    </ul>

    <h3>CSS</h3>
    <ul>
    </ul>
  </div>
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
</style>
