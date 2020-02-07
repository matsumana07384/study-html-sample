<template lang="pug">
div(class="item-wrapper")
    p(class="item-text") 画像の上にテキストを付与
    div
        ImageOnText
    p(class="item-text") 機能説明系
    div
        LpSection
    p(class="item-text") イメージをスクロールできるようにする
    div
        ScroonImage      
</div>
</template>

</template>

<script>
import ImageOnText from '@/components/organisms/ImageOnText.vue'
import LpSection from '@/components/organisms/LpSection.vue'
import ScroonImage from '@/components/organisms/ScroonImage.vue'

export default {
  components: {
    ImageOnText,
    LpSection,
    ScroonImage
  }    
}
</script>
<style scoped>
.item-wrapper {
    margin: initial;
    background-color: #000000;
}
.item-text {
    color: #ffffff;
}
</style>