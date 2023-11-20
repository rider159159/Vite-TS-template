<script setup lang="ts">
const count = ref(0)
const text = ref('')
const propsTitle = ref('')
function showEditorData () {
  count.value += 1
  setTimeout(() => {
    console.log(propsTitle.value)
  }, 10)
}

function checkValue (content) {
  propsTitle.value = content
}

</script>

<template>
  <div>
    <BarChat2></BarChat2>
    <!-- <BarChat></BarChat> -->
    <!-- <NewTest></NewTest> -->
    <!-- <Test></Test> -->
  </div>
</template>
