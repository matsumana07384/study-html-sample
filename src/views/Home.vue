<template>
  <div class="home">
    <Contents msg="Web基礎講座"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Contents from '@/components/Contents.vue'

export default {
  name: 'home',
  components: {
    Contents
  }
}
</script>
