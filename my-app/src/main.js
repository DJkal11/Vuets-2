import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueCarousel from "vue-carousel";

library.add(fas, fab)
Vue.component('font-awesome', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueCarousel);

new Vue({
  render: h => h(App),
}).$mount('#app')
