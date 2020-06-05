import Vue from "vue";
import App from "./App.vue";
import VueAnalytics from "vue-analytics"

Vue.use(VueAnalytics, {
  id: 'G-MGMG80VJJ0',
  autoTracking: {
    screenview: true
  }
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
