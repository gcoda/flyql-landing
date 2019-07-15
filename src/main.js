import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createProvider } from './vue-apollo'

import VueMeta from 'vue-meta'
import i18n from './i18n'
Vue.use(VueMeta, { refreshOnceOnNavigation: true })
Vue.config.productionTip = false
import Block from '@/components/Block.vue'
Vue.component('block', Block)
Vue.component('page-block', Block)
// @import 'assets/styles/tailwind.postcss';
// import '@/assets/styles/tailwind.postcss';

export async function createApp({
  // context = {},
  beforeApp = () => {},
  afterApp = () => {},
} = {}) {
  const router = createRouter()
  const apolloProvider = createProvider({
    ssr: process.server,
  })

  await beforeApp({
    router,
    apolloProvider,
  })
  
  const app = new Vue({
    router,
    apolloProvider,
    i18n,
    render: h => h(App)
  })
  !Vue.prototype.$locale && Object.defineProperty(Vue.prototype, '$locale', {
    get: function () {
      return i18n.locale
    },
    set: function (locale) {
      i18n.locale = locale
    }
  })
  const result = {
    app,
    router,
    apolloProvider,
  }

  await afterApp(result)

  return result
}
