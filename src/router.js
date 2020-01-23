import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlockInline from './views/BlockInline.vue'
import BasicTag from './views/BasicTag.vue'
import Input from './views/Input.vue'
import Css from './views/Css.vue'
import CssUnit from './views/CssUnit.vue'
import CssBlankSpace from './views/CssBlankSpace.vue'
import CssBorder from './views/CssBorder.vue'
import CssPosition from './views/CssPosition.vue'
import CssBackGround from './views/CssBackGround.vue'
import CssWidthHeight from './views/CssWidthHeight.vue'
import CssText from './views/CssText.vue'
import CssPseudoElement from './views/CssPseudoElement.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blockInline',
      name: 'blockInline',
      component: BlockInline
    },
    {
      path: '/basicTag',
      name: 'basicTag',
      component: BasicTag
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/css',
      component: Css
    },
    {
      path: '/cssUnit',
      component: CssUnit 
    },
    {
      path: '/cssBlankSpace',
      component: CssBlankSpace
    },
    {
      path: '/cssBorder',
      component: CssBorder
    },
    {
      path: '/cssPosition',
      component: CssPosition
    },
    {
      path: '/cssBackGround',
      component: CssBackGround
    },
    {
      path: '/cssWidthHeight',
      component: CssWidthHeight
    },
    {
      path: '/cssText',
      component: CssText
    },
    {
      path: '/cssPseudoElement',
      component: CssPseudoElement
    }

  ]
})
