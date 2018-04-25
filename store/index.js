import Vue from 'vue';
import Vuex from 'vuex';
import headerStore from './modules/header';
Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules: {
    headerStore
  }
})

export default store;