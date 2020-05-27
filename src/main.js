import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/base.less'
import router from './router'
import store from './store'
import commonJS from './common/js'
import _ from "lodash"
//路由问题
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.commonJS = commonJS;
Vue.prototype.ElementUI = ElementUI;

Vue.prototype._ = _;

window.vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')