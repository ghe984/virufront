import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import 'normalize.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import store from './store'
Vue.config.productionTip = false

import store from './store'


Vue.use(ElementUI)
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
