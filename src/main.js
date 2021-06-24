import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/index'
import i18n from './i18n'
import VueAxios from "vue-axios"
import axios from "axios"

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
router.beforeEach((to,from,next) => {
  const publicPages = ["/login","/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  console.log("Pages",to);
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// window.addEventListener('contextmenu', function (e) {
//   // do something here...
//   e.preventDefault();
//  }, false);