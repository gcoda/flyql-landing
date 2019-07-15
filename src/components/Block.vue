<template lang="pug">
  component(:is='types[block.type]||"div"' v-if='block')
    template(v-if="block.type === 'text'") 
      span {{ block.value }}
    template(v-else-if="block.type === 'heading'")
      h1.text-2xl
        template(v-if='block.children')
          page-block(v-for='child, i of block.children' :block='child' :key='i')
    template(v-else-if="block.type === 'table' && block.children")
      page-block(v-for='child, i of block.children' :block='child' :key='i')
    template(v-else-if="block.type === 'tableRow' && block.children")
      page-block(v-for='child, i of block.children' :block='child' :key='i')
    template(v-else-if="block.type === 'tableCell' && block.children")
      page-block(v-for='child, i of block.children' :block='child' :key='i')
    template(v-else-if='block.children')
      page-block(v-for='child, i of block.children' :block='child' :key='i')
</template>
<style>
table {
  width: 100%;
}
td {
  border: 1px solid black;
}
</style>
<script>
export default {
  data: () => ({
    types: {
      tableRow: 'tr',
      tableCell: 'td',
      table: 'table',
      paragraph: "p"
    },
  }),
  props: {
    block: {
      type: Object,
    },
  },
  name: 'block',
}
</script>