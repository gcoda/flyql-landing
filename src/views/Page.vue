<template lang="pug">
 .page
   pre Sub {{ $route.params }}
   page-block(:block="page")
     template(v-slot:heading)
       p i am header
   pre Sub {{ page }}
</template>

<script>
import gql from 'graphql-tag'
// @ is an alias to /src
export default {
  metaInfo() {
    return {
      title: this.page && this.page.title,
      meta: [
        {
          name: 'description',
          content: 'Coucou',
        },
      ],
    }
  },
  apollo: {
    page: {
      query: gql`
        query page($id: ID) {
          page: pageById(id: $id) {
            title
            children: blocks
          }
        }
      `,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
  name: 'home',
  data: () => ({
    pref: [],
  }),
  components: {},
}
</script>
