<template>
  <div id="app" class>
    <div id="nav" class=" z-40 sticky top-0 font-bold justify-between flex p-4 text-xl bg-gray-800">
      <div class="flex justify-between">
        <router-link class="router-link mr-2" to="/">Home</router-link>
        <router-link class="router-link mr-2" to="/about">About</router-link>
        <router-link class="router-link mr-2" to="/tutorial/1">Quick Start</router-link>
      </div>
      <LocaleChanger></LocaleChanger>
    </div>
    <div class="mt-2 px-2 mx-auto">
      <router-view />
    </div>
  </div>
</template>
<style lang="postcss">
@import 'assets/styles/tailwind.postcss';
@import 'assets/styles/app.postcss';
#nav .router-link {
  transition: opacity 0.1s ease-in-out;
  @apply text-blue-100 opacity-75;
}
#nav .router-link:hover {
  @apply opacity-100;
}
#nav .router-link-exact-active {
  @apply text-blue-400;
}
</style>
<script>
// @ is an alias to /src
import argsTest from './argsTest.graphql'
import LocaleChanger from '@/components/LocaleChanger.vue'
export default {
  components: { LocaleChanger },
  metaInfo: {
    title: "FlyQl - deployless graphql servers",
    link: [{ rel: 'favicon', href: 'favicon.ico' }],
  },
  name: 'home',
  data: () => ({
    pref: [],
  }),
  apollo: {
    argsTest: {
      query: argsTest,
      variables() {
        return {
          input: {
            lang: this.$locale,
            route: this.$route.path,
          },
        }
      },
      prefetch: (ctx /**/) => {
        console.log({ ctx })
        return true
      },
    },
  },
}
</script>
