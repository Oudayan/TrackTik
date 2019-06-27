// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ionic from '@ionic/vue'

Vue.use(ionic)

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'ion-app',
  'ion-page',
  'ion-header',
  'ion-toolbar',
  'ion-title',
  'ion-content',
  'ion-scroll',
  'ion-list',
  'ion-list-header',
  'ion-item',
  'ion-label',
  'ion-button',
  'ion-input',
  'ion-select',
  'ion-select-option',
  'ion-radio',
  'ion-radio-group',
  'ion-backdrop',
  'ion-popover',
  'ion-select-popover',
  'ion-action-sheet',
  'ion-grid',
  'ion-row',
  'ion-col',
  'ion-footer'
]

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
