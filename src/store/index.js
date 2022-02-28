import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV === "development";

export default new Vuex.Store({
  state: {
    version: "V1.00",
    api: debug ? "http://localhost/" : "",
  },
  mutations: {
  },
  actions: {},
  modules: {},
});
