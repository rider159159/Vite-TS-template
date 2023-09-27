<script setup>
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
    <Ckeditor v-model="text" :count="count" @checkValue="checkValue"></Ckeditor>
    <button type="button" @click="showEditorData">測試</button>
  </div>
</template>
