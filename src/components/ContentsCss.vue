<template lang="pug">
div(id="app")
    ul(v-for="link in links")
        li 
            router-link(:to="link.url") {{link.title}}
</template>
<script>
export default {
    data(){
        return {
            links: [
                { title: '序章', url:'/cssUnit'},
                { title: '余白', url:'/cssBlankSpace'},
                { title: '境界線', url:'/cssBorder'},
                { title: '表示・配置', url:'/cssPosition'},
                { title: '背景', url:'/cssBackGround'},
                { title: '幅・高さ', url:'/cssWidthHeight'},
                { title: 'テキスト・フォント', url:'/cssText'},
                { title: '疑似要素', url:'/cssPseudoElement'},
            ]
        }
    }
}
</script>
<style scoped>
</style>
