<template>
  <div class="list-wrapper">
    <p class="list-wrapper__label">label</p>
    <ul class="list">
      <li class="list-item">
        <img src="https://placehold.jp/72x72.png" alt="img">
      </li>
      <li class="list-item">
        <img src="https://placehold.jp/72x72.png" alt="img">
      </li>
      <li class="list-item">
        <img src="https://placehold.jp/72x72.png" alt="img">
      </li>      
      <li class="list-item">
        <img src="https://placehold.jp/72x72.png" alt="img">
      </li>
      <li class="list-item">
        <img src="https://placehold.jp/72x72.png" alt="img">
      </li>
      <li class="list-item">
        <img src="https://placehold.jp/72x72.png" alt="img">
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="postcss" scoped>
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  margin: 0;
}

.list-wrapper {
  background: #fff;
  display: flex;
  justify-content: flex-start;
}
.list-wrapper__label {
  color: #000;
  font-size: 10px;
  padding-right: 5px;
}
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.list-item {
  width: 10px;
  display: inline-block;
  padding-right: 5px;
  position: relative;
}

.list-item:nth-child(5):after{
  content: "…";
  color: #000;
  font-size: 10px;
  display: block;
  position: absolute;
  top: 0;
  left: 15px;
}

.list-item:nth-child(n + 6){
  /* visibility:hidden; */
  display: none;
}

.list-item img {
  border-radius: 50%;
  width: 100%;
  heigth: auto;
}

</style>