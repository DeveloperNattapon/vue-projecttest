import Vue from 'vue';
import App from './app/App.vue';
import vuetify from './plugins/vuetify';

Vue.config.devtools = true;
Vue.config.productionTip = false

import store from './app/app-state';
import router from './app/app-routes';

router.beforeEach((to,from ,next) => {
  console.log({to});
  next();
})
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('contextmenu', function (e) {
  // do something here...
  e.preventDefault();
 }, false);