<script setup>
import { onMounted, ref } from 'vue';
import * as d3 from 'd3';
import voteJSON2020 from '@/assets/vote2020.json';

const processedData = voteJSON2020.map(d => ({
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
  return +str.replace(/,/g, '')
}

function rightRoundedRect(x, y, width, height, radius) {
  return "M" + x + "," + y
       + "h" + (width - radius)
       + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
       + "v" + (height - 2 * radius)
       + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
       + "h" + (radius - width)
       + "z";
}

function leftRoundedRect(x, y, width, height, radius) {
  return "m" + (x + radius) + "," + y
       + "h" + (width - radius)
       + "v" + height
       + "h" + (radius - width)
       + "a" + radius + "," + radius + " 0 0 1 " + (-radius) + "," + (-radius)
       + "v" + (2 * radius - height)
       + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + (-radius)
       + "z";
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
    .attr('fill', (d) => color(d.key)) // d represents the layer here
    .selectAll('path')
    .data(d => d) // d is the layer
    .enter()
    .append('path')
    .attr('d', (d, i, nodes) => {
      const layer = nodes[i].parentNode.__data__; // Access the parent node's data
      const x0 = x(d[0]);
      const x1 = x(d[1]);
      const w = x1 - x0;
      const y1 = height;

      // 根據圖表的顏色來選擇相應的繪圖函數
      if (layer.key === 'DPP') { // 綠色圖表，右邊圓角
        return rightRoundedRect(x0, 0, w, y1, borderRadius);
      } else if(layer.key === 'PFP') {
        return leftRoundedRect(x0, 0, w, y1, borderRadius);
      }
      else {
        // 對於其他圖表，這裡可以添加條件來選擇不同的繪製函數或返回普通矩形
        return `M${x0},0 L${x1},0 L${x1},${y1} L${x0},${y1} Z`;
      }
    });
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
  width: 205px; /* Adjust the width as needed */
}
</style>