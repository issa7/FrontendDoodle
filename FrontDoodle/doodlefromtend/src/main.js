// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import Modal from './components/Modal'
import DataTable from './components/DataTable'

Vue.component('modal', Modal)
Vue.component('dataTable', DataTable)
Vue.config.productionTip = false
/* eslint-disable */

Vue.use(VueResource)
Vue.use(Vuex)


Vue.http.headers.common['Content-Type'] = 'application/json ; charset=utf-8'
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
