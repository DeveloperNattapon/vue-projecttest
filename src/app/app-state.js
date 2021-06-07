import Vue from "vue"
import Vuex from "vuex"
import pathify from "./pathify"
import { make } from "vuex-pathify"
import Login  from "./login/shared/state"


const store = {
     
};

const mutations = make.mutations(store);
Vue.use(Vuex);
export default new Vuex.Store({
  plugins : [pathify.plugin],
  store,
  mutations,
  modules:{
    Login
  }
});
window.store = store;