<template>
  <div class="progress-ring">
    <svg :width="size" :height="size">
      <!-- 背景圓形，顯示剩餘的進度 -->
      <circle
        class="progress-ring__circle-background"
        :stroke-width="stroke"
        :fill="fillColor"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
        :stroke-dasharray="circumference + ' ' + circumference"
        :stroke-dashoffset="0"
      ></circle>
      <!-- 前景圓形，顯示已完成的進度 -->
      <circle
        class="progress-ring__circle"
        :stroke-width="stroke"
        :fill="fillColor"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
        :stroke-dasharray="circumference + ' ' + circumference"
        :stroke-dashoffset="strokeDashOffset"
      ></circle>
    </svg>
    <span class="progress-ring__text">{{ props.percentage }}%</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props =  defineProps({
  percentage: {
    type: Number,
    default: 0
  },
})
const size = 200; // SVG size
const stroke = 10; // Stroke width
const radius = size / 2; // Circle radius
const normalizedRadius = radius - stroke * 2;
const circumference = normalizedRadius * 2 * Math.PI;

const percentage = ref(66.27); // The percentage value you want to display
const fillColor = 'transparent'; // The fill color of the circle

const strokeDashOffset = computed(() => circumference - (props.percentage / 100) * circumference);
</script>

<style>
.progress-ring {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke: #D4009B; /* Change this to the color you want for the progress */
}

.progress-ring__circle-background {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke: #E2E8F0; /* 這是未完成進度的顏色 */
}

.progress-ring__text {
  position: absolute;
  font-size: 1.5em;
  text-anchor: middle;
}
</style>