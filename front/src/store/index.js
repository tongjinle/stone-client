import Vue from 'vue'
import Vuex from 'vuex'
import { formatUrl, handleResData } from 'common/js/util.js'
Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    formatUrl,
    handleResData
  },
  mutations: {
    updateState(state, payload) {
      if (payload && typeof payload === 'object') {
        Object.keys(payload).forEach((key) => {
          state[key] = payload[key];
        });
      }
    },
  },
  actions: {
    
  },
  strict: true
});

export default store
