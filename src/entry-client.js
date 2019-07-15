import { loadAsyncComponents } from '@akryum/vue-cli-plugin-ssr/client'

import { createApp } from './main'

createApp({
  async beforeApp({ router }) {
    await loadAsyncComponents({ router })
  },

  afterApp({ app, router }) {
    window.router = router
    ;(options => {
      const ssrRoutes = (routes, parent = '') => {
        return routes.reduce((all, route) => {
          return [
            ...all,
            { path: parent + route.path },
            ...(route.children
              ? ssrRoutes(route.children, parent + route.path + '/')
              : []),
          ]
        }, [])
      }
      const routesMap = ssrRoutes(options.routes)
      console.log('dist/routes.json:', JSON.stringify(routesMap))
      return routesMap
    })(router.options)

    app.$mount('#app')
  },
})
