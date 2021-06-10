import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'

import state from './state'
import Login from '@/views/login/state/state'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:
    {
        state,
        Login
    },
    plugins : [pathify.plugin]
});

export default store;
window.store = store;
