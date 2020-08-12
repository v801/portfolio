import '@/styl/main.styl'
import Vue from 'vue'
import App from '@/App.vue'
import VueResource from 'vue-resource'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueResource)
Vue.use(VueLazyLoad)

new Vue({
  el: '#app',
  render: h => h(App)
})
