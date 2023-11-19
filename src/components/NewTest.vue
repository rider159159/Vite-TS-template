<script setup>
import * as d3 from 'd3';
import voteJSON from '@/assets/vote.json'
import taiwanMap from '@/assets/COUNTY_MOI_1090820.json'
import { geoMercator, geoPath } from 'd3-geo'
import { feature,mesh } from 'topojson-client'

onMounted(() => {
  drawChart();
})

const city = ref('')
async function drawChart() {
  const svg = d3.select("svg");
  const g = svg.append("g");

  // svg.call(d3.zoom().on("zoom",() => {
  //   g.attr("transform", d3.event.transform);
  // }));
  svg.call(d3.zoom().on("zoom", (event) => {
    g.attr("transform", event.transform);
  }));
  const projectmethod = d3.geoMercator().center([123, 24]).scale(5500);
  const pathGenerator = d3.geoPath().projection(projectmethod);

  d3.select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('style', 'position: absolute; opacity: 0;');
    const projection = d3.geoMercator().center([123, 24]).scale(5500);

    // 引入 JSON
    const geometries = feature(taiwanMap, taiwanMap.objects["COUNTY_MOI_1090820"])
    g.append("path")
    const paths = g.selectAll("path").data(geometries.features);
    paths.enter()
    .append("path")
    .attr("d", pathGenerator)
    .attr("class","county")
    .attr("fill", function(d) {
      return d.properties.COUNTYNAME === "屏東縣" ? "#48a832" : "#3255a8";
    })

    .on("click", function(event, d) {
      // d 即為被點擊的縣市的數據
      console.log(d.properties.COUNTYNAME)
      city.value = d.properties.COUNTYNAME
      // 更新畫面上的信息，例如更新一個 div 來顯示被點擊縣市的名稱和其他資料
      // d3.select('#tooltip')
      //   .style('opacity', 1)
      //   .html(`縣市名稱: ${d.properties.NAME}<br>其他資料: ${d.properties.OTHER_INFO}`);
    });
}

</script>

<template>
  <section class="flex">
    <svg id="mySVG"></svg>
    <div class="flex flex-col">
      <p>縣市名稱:</p>
      <p>{{ city }}</p>
    </div>
  </section>
</template>

<style>
#mySVG {
  width: 680px;
  height: 600px;
}

body {
      background: lightblue;
    }

    /* .county {
      fill: #ebf0e4;
      stroke: gray;
      stroke-width: 0.1px;
    } */

    .custom_tooltip {
      position: absolute;
      text-align: left;
      width: max-content;
      padding: 10px;
      font: 10px;
      background: #f0eeeb;
      color: dimgray;
      border: 1px solid dimgray;
      border-radius: 3px;
      pointer-events: none;
    }
</style>