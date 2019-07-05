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

        // Same for Apollo client cache
        context.apolloState = ApolloSSR.getStates(apolloProvider)
      }
      resolve(app)
    }, reject)
  })
}
