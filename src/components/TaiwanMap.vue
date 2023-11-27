<script setup>
import * as d3 from 'd3'
import { geoMercator, geoPath } from 'd3-geo'
import { feature, mesh } from 'topojson-client'
import taiwanMap from '@/assets/COUNTY_MOI_1090820.json'
import vote2020 from '@/assets/vote2020.json'
import { DPPColor, KMTColor, PFPColor } from '@/utils/share/variable'

const cityList = vote2020.city
const projectmethod = d3.geoMercator().center([122.7, 24]).scale(8500)
const pathGenerator = d3.geoPath().projection(projectmethod)
let svg, g, zoom, selectedCounty

// 尋找指定縣市返回縣市顏色
function findLargestParty(cityName) {
  const cityData = cityList.find(city => city.City === cityName)

  if (!cityData)
    return '#000' // 如果找不到城市，返回 null

  // 比較 PFP、KMT 和 DPP 的值
  const maxVotes = Math.max(cityData.PFP, cityData.KMT, cityData.DPP)

  // 根據最大值返回顏色代碼
  if (maxVotes === cityData.PFP)
    return PFPColor // PFP最大

  else if (maxVotes === cityData.KMT)
    return KMTColor // KMT最大

  else
    return DPPColor // DPP最大
}

// 計算放大的視圖
function calculateZoomView(d, width, height) {
  const bounds = pathGenerator.bounds(d)
  const dx = bounds[1][0] - bounds[0][0]
  const dy = bounds[1][1] - bounds[0][1]
  const x = (bounds[0][0] + bounds[1][0]) / 2
  const y = (bounds[0][1] + bounds[1][1]) / 2
  const scale = 0.9 / Math.max(dx / width, dy / height)
  const translate = [width / 2 - scale * x, height / 2 - scale * y]

  return { scale, translate }
}

// 點擊地圖事件
function clicked(event, d) {
  if (selectedCounty === d.properties.COUNTYNAME) {
    // 如果點擊的是同一個縣市，則不進行放大
    return
  }
  selectedCounty = d.properties.COUNTYNAME

  const width = +svg.attr('width')
  const height = +svg.attr('height')
  const { scale, translate } = calculateZoomView(d, width, height)

  svg.transition().duration(750).call(
    zoom.transform,
    d3.zoomIdentity.translate(...translate).scale(scale),
  )

  // 更新縣市顏色
  g.selectAll('.county')
    .style('fill', d => findLargestParty(d.properties.COUNTYNAME))

  // 高亮當前點擊的縣市
  d3.select(this)
    .style('fill', d => d3.rgb(findLargestParty(d.properties.COUNTYNAME)).brighter(0.2).toString())
}

// 繪製地圖
async function drawChart() {
  g = svg.append('g')

  d3.select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('style', 'position: absolute; opacity: 0')

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
    .on('click', clicked)

  // 繪製縣市名稱
  g.selectAll('.county-name')
    .data(geometries.features)
    .enter()
    .append('text')
    .attr('class', 'county-name')
    .attr('transform', (d) => {
      return `translate(${pathGenerator.centroid(d)})` // 將文字定位在每個縣市的地理中心點
    })
    .attr('dy', '.35em') // 輕微垂直調整以改善位置
    .style('text-anchor', 'middle') // 確保文字居中對齊

    .text((d) => { return d.properties.COUNTYNAME })

  g.append('path')
}

onMounted(() => {
  svg = d3.select('#mySVG')
  zoom = d3.zoom()
  drawChart()
})
</script>

<template>
  <section class="flex taiwanMap">
    <svg id="mySVG" class="lg:w-350px 2xl:w-500px h-700px" />
  </section>
</template>

<style>
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
  text-shadow:
        -1px -1px 0 #000,
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000; /* 每一行代表一個陰影的方向和顏色 */
}

.county-background{
  background: #fff;
}

.outlined-text {
    color: white; /* 設置文字顏色為白色 */
    text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px  2px 0 #000,
         2px  2px 0 #000; /* 每一行代表一個陰影的方向和顏色 */
    font-size:24px
}
</style>
