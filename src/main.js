import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Fontawesome icons

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faSearch);
Vue.component("font-awesome-icon", FontAwesomeIcon);


// Develop mode
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
