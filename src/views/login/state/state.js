import {
    make
} from 'vuex-pathify'
import router from '../../../router'
import {service} from '../services/services';
import {EncryptData} from "@/share/index";
const user = JSON.parse(localStorage.getItem('user'));
const state = () => {
    return {
        user: user ? { status: { loggedIn: true }, user } : { status: {}, user: null}
    }
}

const actions = {
    login({ dispatch, commit}, {username, password}) {
        let EncryptPass = EncryptData(password);
        let pass =  EncryptPass; 
        const user = {
            username: username,
            password: pass
        }    
        commit('loginRequest', {username});
        service.UserCheck(user).then(user => {
            if (user.success) {
                console.log("user.data->",user.data);
                localStorage.setItem("userLogin",JSON.stringify(user.data));
                commit('loginSuccess', user.data);
                router.push('/');
            }else
            {
               console.log("message -->",user.message)
            }
        }, error => {
            commit('loginFailure', error);
            dispatch('alert/error', error, {
                root: true
            });
        });
    },
    logout({ commit }) {
        service.logout();
        commit('logout');
    },
    register({dispatch, commit}, user) {
        commit('registerRequest', user);
        service.apiSaveUserAccount(user).then(res => {
            if (res.success) { 
                commit('registerSuccess', res.data);
                router.push('/login');
            }

        }).catch(error => {
            console.log("Error -->", error)
            dispatch('alert/error', error, {
                root: true
            });
        })
    }

}


const mutations = {
    ...make.mutations(state),

    loginRequest(state, user) {
        state.status = {
            loggingIn: true
        };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = {
            loggedIn: true
        };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state) {
        state.status = {
            registering: true
        };
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