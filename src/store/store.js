import Vuex from 'vuex'

export default new Vuex.Store({
  modules: {
    state: {
      status: '',
      token: localStorage.getItem('token') || '',
      user: {}
    },
    mutations: {
      auth_request(state) {
        state.status = 'loading'
      },
      auth_success(state, token, user) {
        state.status = "success";
        state.token = token;
        state.user = user;
      }, 
      auth_error(state) {
        state.status = 'error'
      },
      logout(state) {
        state.status = ''
        state.token = ''
      }
    },
    actions: {
      login({ commit }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request');
          axios({
            url: '',
            data: user,
            method: 'POST'
          })
          .then(resp => {
            console.log('resp from login action:' + resp)
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
      }
    },
    getters: {
      isLoggedIn: state => state.token,
      authStatus: state => state.status,
    }
  }
})
