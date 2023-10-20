<template>
  <div ref="d3Container"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'

export default {
  name: 'D3Component',
  setup() {
    const d3Container = ref(null)

    onMounted(() => {
      if (d3Container.value) {
        const svg = d3.select(d3Container.value)
          .append('svg')
          .attr('width', 400)
          .attr('height', 400)

        svg.append('circle')
          .attr('cx', 200)
          .attr('cy', 200)
          .attr('r', 50)
          .attr('fill', 'blue')
      }
    })

    return { d3Container }
  }
}
</script>