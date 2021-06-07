
import {make} from 'vuex-pathify'

const state = () => {
 return {
  userData : {}
 };
};

const getters = {
    ...make.getters(state),
    getUserLogin(state){
        return state
    }
};
const mutations = {
    ...make.mutations(state),
};
const actions = {
    ...make.actions(state),
    setUser({commit},parameter){
       return new Promise(resolve => {
         console.log("setUser",parameter);
         commit("userData",parameter);
         resolve(true);
      
        });
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}