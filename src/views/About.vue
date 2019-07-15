<template>
  <div class="about bg-blue-200">
    <p>{{ $t('msg') }}</p>
    <div v-if="pages && pages.nodes">
      <div v-for="page of pages.nodes" :key="page.id">
        <router-link :to="{name: 'page', params: {id: page.id}}">{{page.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "msg": "en msg"
  },
  "ru": {
    "msg": "ru msg"
  }
}
</i18n>
<script>
import gql from 'graphql-tag'
// @ is an alias to /src
export default {
  apollo: {
    pages: {
      query: gql`
        query pages($lang: String) {
          # pages: some(lang: $lang)
          pages(lang: $lang) {
            nodes {
              id
              title
              # data
              # blocks
            }
          }
        }
      `,
      variables() {
        return {
          lang: this.$locale,
        }
      },
    },
  },
  metaInfo: {
    title: 'About bout',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'bout bout',
      },
    ],
  },

  name: 'about',
}
</script>
