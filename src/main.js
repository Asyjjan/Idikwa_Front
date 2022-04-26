import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import moment from "moment";
const fs = require("fs");

Vue.config.productionTip = false;

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY");
  }
})

Vue.filter("fileSize", function (value) {
  console.log(fs.stat(value));
  //let fileSize = value.size;
  //if (fileSize < 7) return `${Math.round(+fileSize / 1024).toFixed(2)} kb`;
  //return `${(Math.round(+fileSize / 1024) / 1000).toFixed(2)} MB`;
  return "test"
})

Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
