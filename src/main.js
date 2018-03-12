import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import Web3 from 'web3'
import router from './router'
import store from './store/store'
import VModal from 'vue-js-modal'
import mixins from './js/mixins'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true })
Vue.use(BootstrapVue);

window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    console.log('Web3 injected browser: OK.')
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    console.log('Web3 injected browser: Fail. You should consider trying MetaMask.')
    // Fallback to local node
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }

  // Import Mixins Methods and Inject in All Components
  Vue.mixin(mixins)

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
})
