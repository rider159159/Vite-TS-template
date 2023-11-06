<script setup>
import * as d3 from 'd3';
import worldData from '@/assets/taiwan.json'
import { geoMercator, geoPath } from 'd3-geo'
import { feature,mesh } from 'topojson-client'

onMounted(() => {
  drawChart();
})

let mySvg 

function drawChart() {
  mySvg = d3.select("#mySVG");
  const g = mySvg.append("g");

  const projection = d3.geoMercator()
    .center([121, 24]) 
    .scale(8000)
    .translate([480, 250]);

  const path = d3.geoPath()
    .projection(projection);

  // 在svg上绘制路径  
  mySvg.selectAll("path")
    .data(worldData.features)
    .enter()
    .append("path")
    .attr("d", path);

    g.append("path")
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path(mesh(worldData, worldData.objects.states, (a, b) => a !== b)));

}

</script>

<template>
  <svg id="mySVG"></svg>
</template>

<style>
#mySVG {
  width: 680px;
  height: 600px;
}
</style>