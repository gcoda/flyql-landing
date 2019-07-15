import 'isomorphic-fetch'
import ApolloSSR from 'vue-apollo/ssr'
import { createApp } from './main'

export default context => {
  return new Promise(async (resolve, reject) => {
    const {
      app,
      router,
      apolloProvider
    } = await createApp()
    router.push(context.url)
    router.onReady(() => {
      context.rendered = () => {
        const meta = app.$meta().inject()
        Object.assign(context, meta)
        context.htmlattrs = meta.htmlAttrs
        context.bodyattrs = meta.bodyAttrs
        context.apolloState = ApolloSSR.getStates(apolloProvider)
      }
      resolve(app)
    }, reject)
  })
}
