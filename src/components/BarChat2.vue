<script setup>
import { onMounted, ref } from 'vue';
import * as d3 from 'd3';
import voteJSON from '@/assets/vote.json';

const processedData = voteJSON.map(d => ({
  City: d.City,
  PFP: convertToNumber(d.PFP),
  KMT: convertToNumber(d.KMT),
  DPP: convertToNumber(d.DPP),
  Total: convertToNumber(d.Total)
}));
const borderRadius = 5; // 這是你想要的 border-radius 大小

const subgroups = ["PFP", "KMT", "DPP"];
const color = d3.scaleOrdinal()
  .domain(subgroups)
  .range(['#ff8c00', '#1f77b4', '#2ca02c']);

onMounted(() => {
  processedData.forEach((item, index) => {
    drawBarChart(item, 'chart-' + index);
  });
});

function convertToNumber(str) {
  return +str.replace(/,/g, '');
}

function drawBarChart(data, chartId) {
  const width = 200; // Set the width for the bar chart
  const height = 20; // Set the height for each bar chart

  const svg = d3.select('#' + chartId)
    .attr('width', width)
    .attr('height', height);

  // 更新比例尺定義
  const x = d3.scaleLinear()
    .domain([0, 100]) // 使用 0 到 100% 的範圍
    .range([0, width]);

  const stackGenerator = d3.stack()
    .keys(subgroups)
    .value((d, key) => (d[key] / d.Total) * 100); // 計算每個政黨的票數佔總票數的百分比

  const layers = stackGenerator([data]);

  svg.selectAll('.layer')
    .data(layers)
    .enter()
    .append('g')
    .attr('class', 'layer')
    .attr('fill', layer => color(layer.key))
    .selectAll('rect')
    .data(layer => layer)
    .enter()
    .append('rect')
    .attr('x', sequence => x(sequence[0]))
    .attr('width', sequence => x(sequence[1]) - x(sequence[0]))
    .attr('height', height);
}
</script>

<template>
  <table>
    <tr v-for="(item, index) in processedData" :key="index">
      <td>{{ item.City }}</td>
      <td class="chart-cell">
        <svg :id="'chart-' + index" class="bar-chart"></svg>
      </td>
      <td>{{ item.Total }}</td>
    </tr>
  </table>
</template>

<style>
.bar-chart {
  width: 100%;
  height: 20px;
  /* Adjust the height if needed */
}

.chart-cell {
  width: 200px; /* Adjust the width as needed */
}
</style>