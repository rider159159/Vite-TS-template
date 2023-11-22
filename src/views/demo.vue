<script setup lang="ts">
// const count = ref(0)
// const text = ref('')
// const propsTitle = ref('')
const percentage = ref(50)
</script>

<template>
  <div>
    <BarChat2 />
    <!-- <LineChat></LineChat> -->
    <!-- <GroupBarChat></GroupBarChat>
    <ProgressBar :percentage="percentage"></ProgressBar> -->
    <button class="p-6 bg-blue text-white mr-4" @click="percentage += 1">
      +1
    </button>
    <button class="p-6 bg-blue text-white" @click="percentage -= 1">
      -1
    </button>
  </div>
</template>
