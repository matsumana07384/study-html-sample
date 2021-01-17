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
        ScrollImage
    div(class="item-text") flexboxのサンプル
        Flexbox
</div>
</template>

</template>

<script>
import ImageOnText from '@/components/organisms/ImageOnText.vue'
import LpSection from '@/components/organisms/LpSection.vue'
import ScrollImage from '@/components/organisms/ScrollImage.vue'
import Flexbox from '@/components/organisms/Flexbox.vue'

export default {
  components: {
    ImageOnText,
    LpSection,
    ScrollImage,
    Flexbox
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