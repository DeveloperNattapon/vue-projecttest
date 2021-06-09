import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './pathify'

import state from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:
    {
        state
    },
    plugins : [pathify.plugin]
});

export default store;
window.store = store;
