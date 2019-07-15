<template>
  <select v-model="$locale" class='bg-gray-600 hover:bg-gray-200 rounded-lg text-lg pl-2 pr-1 outline-none'>
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
      {{ $t(lang+'_lang') }}</option>
  </select>
</template>

<script>
export default {
  name: 'locale-changer',
  data() {
    return { langs: ['ru', 'en'] }
  },
}
</script>
