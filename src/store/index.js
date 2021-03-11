import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj: {a: 0}
  },
  mutations: {
    SET_Obj(state, value) {
      state.obj.a = value
      console.log(state.obj.a, 1111)
    }
  },
  actions: {
    SET_Obj({ commit }, value){
      setTimeout(()=>{
        commit('SET_Obj', value)
      }, 0)
    }
  },
  modules: {
  }
})
