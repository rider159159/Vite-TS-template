<script setup lang="ts">
// const count = ref(0)
// const text = ref('')
// const propsTitle = ref('')
const percentage = ref(50)
</script>

<template>
  <div>
    <BarChat2></BarChat2>
    <!-- <LineChat></LineChat> -->
    <!-- <GroupBarChat></GroupBarChat>
    <ProgressBar :percentage="percentage"></ProgressBar> -->
    <button @click="percentage += 1" class="p-6 bg-blue text-white mr-4">+1</button>
    <button @click="percentage -= 1" class="p-6 bg-blue text-white">-1</button>

  </div>
</template>
