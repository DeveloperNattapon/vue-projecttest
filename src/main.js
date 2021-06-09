import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import './plugins/vuetify';
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import i18n from './i18n'


Vue.config.devtools = true
Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
    if(from === VueRouter.START_LOCATION){
      console.log(to);
    }
    next()
})

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('contextmenu', function (e) {
  // do something here...
  e.preventDefault();
 }, false);