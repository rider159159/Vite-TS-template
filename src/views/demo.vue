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
    <!-- <NewTest></NewTest> -->
    <Test></Test>
    <!-- <Ckeditor v-model="text" :count="count" @checkValue="checkValue"></Ckeditor> -->
  </div>
</template>
