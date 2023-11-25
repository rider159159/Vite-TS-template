<script setup>
import * as d3 from 'd3'
import { geoMercator, geoPath } from 'd3-geo'
import { feature, mesh } from 'topojson-client'
import taiwanMap from '@/assets/COUNTY_MOI_1090820.json'
import vote2020 from '@/assets/vote2020.json'
import { DPPColor, KMTColor, PFPColor } from '@/utils/color'

onMounted(() => {
  drawChart()
})

const cityList = vote2020.city
const currentCity = ref('')

function findLargestParty(cityName) {
  const cityData = cityList.find(city => city.City === cityName)

  if (!cityData) {
    return '#000'; // 如果找不到城市，返回 null
  }

  // 比較 PFP、KMT 和 DPP 的值
  const maxVotes = Math.max(cityData.PFP, cityData.KMT, cityData.DPP);

  // 根據最大值返回顏色代碼
  if (maxVotes === cityData.PFP) {
    return PFPColor; // PFP最大
  } else if (maxVotes === cityData.KMT) {
    return KMTColor; // KMT最大
  } else {
    return DPPColor // DPP最大
  }
}

async function drawChart() {
  const svg = d3.select('svg')
  const g = svg.append('g')

  svg.call(d3.zoom().on('zoom', (event) => {
    g.attr('transform', event.transform)
  }))
  const projectmethod = d3.geoMercator().center([122.7, 24]).scale(8500)
  const pathGenerator = d3.geoPath().projection(projectmethod)

  d3.select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('style', 'position: absolute; opacity: 0;')

  // 引入 JSON
  const geometries = feature(taiwanMap, taiwanMap.objects.COUNTY_MOI_1090820)
  const paths = g.selectAll('path').data(geometries.features)
    paths.enter()
    .append('path')
    .attr('d', pathGenerator)
    .attr('class', 'county')

    .attr('fill', (d) => {
      return findLargestParty(d.properties.COUNTYNAME)
    })
    .on('click', (event, d) => {
      // d 即為被點擊的縣市的數據
      currentCity.value = d.properties.COUNTYNAME
      // 更新畫面上的信息，例如更新一個 div 來顯示被點擊縣市的名稱和其他資料
      // d3.select('#tooltip')
      //   .style('opacity', 1)
      //   .html(`縣市名稱: ${d.properties.NAME}<br>其他資料: ${d.properties.OTHER_INFO}`);
    })

  
  
    // 繪製縣市名稱
  g.selectAll('.county-name')
    .data(geometries.features)
    .enter()
    .append('text')
    .attr('class', 'county-name')
    .attr('transform', function(d) {
      return 'translate(' + pathGenerator.centroid(d) + ')'; // 將文字定位在每個縣市的地理中心點
    })
    .attr('dy', '.35em') // 輕微垂直調整以改善位置
    .style('text-anchor', 'middle') // 確保文字居中對齊

    .text(function(d) { return d.properties.COUNTYNAME })
    // .attr('class', 'county-background')
    // .attr('fill', (d) => {
    //   if (['澎湖縣', '金門縣', '連江縣'].includes(d.properties.COUNTYNAME)) {
    //     return '#fff'; // 對這三個縣市使用白色背景
    //   } else {
    //     return 'none'; // 對其他縣市不使用背景
    //   }
    // })
    // .attr('stroke', '#fff')
  g.append('path')
}
</script>

<template>
  <section class="flex taiwanMap">
    <svg id="mySVG" />
    <!-- <div class="flex flex-col">
      <p>縣市名稱:</p>
      <p>{{ currentCity }}</p>
    </div> -->
  </section>
</template>

<style>
#mySVG {
  width: 500px;
  height: 600px;
}

.taiwanMap {
  background: #E4FAFF;
}

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
.county-name {
  font-size: 6px;
  fill: #fff; /* 文字顏色 */
  pointer-events: none; /* 確保文字不會影響點擊事件 */
}

.county-background{
  background: #fff;
}
</style>
