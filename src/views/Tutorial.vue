<template>
  <div>
    <h1 class="mt-16 text-3xl font-bold text-center">Tutotrial 1</h1>
    <div class="flex">
      <div class="w-1/2 mt-16 border-4 bg-blue-200">
        <div
          v-observer="observe"
          :data-id="i"
          style="min-height:55vh"
          class="content p-4"
          v-for="i of 10"
          :key="i"
        >
          <h1 class="mb-4 text-xl font-black text-center">{{ i }}</h1>
          <p>{{ i }} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tellus felis, at lobortis orci sollicitudin ac. Donec lobortis sapien ac posuere faucibus. Mauris lectus neque, pretium non volutpat eget, vestibulum at magna. In sollicitudin augue nunc, non bibendum augue ornare quis.</p>

          <p>Integer accumsan interdum justo eu pretium. Aliquam maximus mi sit amet dapibus efficitur.</p>

          <p>Sed condimentum lacus sit amet turpis aliquam varius nec a lacus. In facilisis convallis ante sit amet consequat. Aenean a lorem mollis, bibendum nibh nec, maximus orci. Nulla facilisi.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tellus felis, at lobortis orci sollicitudin ac. Donec lobortis sapien ac posuere faucibus. Mauris lectus neque, pretium non volutpat eget, vestibulum at magna. In sollicitudin augue nunc, non bibendum augue ornare quis.</p>

          <p>Integer accumsan interdum justo eu pretium. Aliquam maximus mi sit amet dapibus efficitur.</p>

          <p>Sed condimentum lacus sit amet turpis aliquam varius nec a lacus. In facilisis convallis ante sit amet consequat. Aenean a lorem mollis, bibendum nibh nec, maximus orci. Nulla facilisi.{{ i }}</p>
        </div>
      </div>
      <div class="w-1/2 pt-16 h-screen sticky top-0">
        <div class=" bg-green-200 border-2 h-full text-center align-center items-center flex">
          <h2 class='w-full text-center text-2xl'>sticky {{ observed }}</h2>
          </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
import 'intersection-observer'

export default {
  data: () => ({
    observer: null,
    observed: {},
  }),
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      threshold: 0.2,
    })
  },
  destroyed() {
    this.observer.disconnect()
  },
  directives: {
    observer: {
      bind: (el, binding) => binding.value(el, true),
      unbind: (el, binding) => binding.value(el),
    },
  },
  components: {},
  methods: {
    observe(el, isBind) {
      if (isBind) this.$nextTick(() => this.observer.observe(el))
      else this.$nextTick(() => this.observer.unobserve(el))
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        // console.log(
        //   entry.intersectionRatio,
        //   entry.target.dataset,
        //   entry
        // )
        if (entry.isIntersecting) {
          this.observed = { ...entry.target.dataset }
        }
      })
    },
  },
}
</script>
<style src="vue-scrollama/dist/vue-scrollama.css"></style>
<style>
/* your styles here */
</style>