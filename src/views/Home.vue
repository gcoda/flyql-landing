<template lang="pug">
 .home
   h2 {{ title }}
   pre Nothing Home
   p {{ $t('message') }}
   p loc {{ $locale }}
</template>

<script>
import titleQuery from './title.graphql'
export default {
  metaInfo() {
    return {
      title: this.title || 'Home Title',
      meta: [
        {
          'http-equiv': 'Set-Cookie',
          content: 'HomeCookie=9983373;',
        },
        {
          'http-equiv': 'pragma',
          content: 'no-cache',
        },
      ],
    }
  },
  apollo: {
    title: {
      query: titleQuery,
      variables() {
        return { text: 'Apollo Variable ' + this.$locale }
      },
    },
  },
}
</script>
