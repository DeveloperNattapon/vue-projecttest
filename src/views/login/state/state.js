import {make} from 'vuex-pathify'
import router from '../../../router'
import {service} from '../services/services';

const user = JSON.parse(localStorage.getItem('user'));
const state = () => {
    return {
        user : user ? { status : { loggedIn : true }, user } 
             : { status : { }, user : null }
    }
}

const actions = {
    login({commit}, { username, password }) {
        //commit('loginRequest', { username });
        
        if(username && password){
            commit('loginSuccess', {username,password});
            router.push('/');
        }else
        {
            //let error = "Error";
            //commit('loginFailure', error);
            //dispatch('alert/error', error, { root: true });
        }

        // userService.login(username, password)
        //     .then(
        //         user => {
        //             console.log("userService",user);
        //             commit('loginSuccess', user);
        //             router.push('/');
        //         },
        //         error => {
        //             commit('loginFailure', error);
        //             dispatch('alert/error', error, { root: true });
        //         }
        //     );
    },
    logout({ commit }) {
        //userService.logout();
        localStorage.removeItem('user');
        commit('logout');
    },
    register({dispatch,commit},user){
        commit('registerRequest',user);
        service.apiSaveUserAccount(user).then(res => {         
            if(res.success){
                commit('registerSuccess',res.data.stock.data);
                router.push('/login');
                setTimeout(() => {
                    dispatch('alert/success', 'Registration successful', { root: true });
                })
            }
          
        }).catch(error => {
            console.log("Error -->", error)
            dispatch('alert/error', error, { root: true });
        })
    }
    
}


const mutations = {
    ...make.mutations(state),
    
    // loginRequest(state, user) {
    //     state.status = { loggingIn: true };
    //     state.user = user;
    // },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    // loginFailure(state) {
    //     state.status = {};
    //     state.user = null;
    // },
    logout(state) {
        state.status = {};
        state.user = null;
    }, 
    registerRequest(state) {
        state.status = { registering: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
}



export default {
    namespaced: true,
    state,
    actions,
    mutations,
}