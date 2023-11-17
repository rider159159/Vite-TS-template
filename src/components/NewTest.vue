<script setup>
import * as d3 from 'd3';
import worldData from '@/assets/COUNTY_MOI_1090820.json'
import { geoMercator, geoPath } from 'd3-geo'
import { feature,mesh } from 'topojson-client'

onMounted(() => {
  console.log(worldData)
  drawChart();
})


function drawChart() {
  var svg = d3.select("svg");
  const g = svg.append("g");

  var projectmethod = d3.geoMercator().center([123, 24]).scale(5500);
  var pathGenerator = d3.geoPath().projection(projectmethod);
  d3.json(worldData)
  .then(data => {
    console.log(data)
    const geometries = topojson.feature(data, data.objects["COUNTY_MOI_1090820"])

    g.append("path")
    const paths = g.selectAll("path").data(geometries.features);
    paths.enter()
      .append("path")
        .attr("d", pathGenerator)
        .attr("class","county")
      // 加上簡易版本 tooltip
      .append("title")
        .text(d => d.properties["COUNTYNAME"])
  })
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