<script setup>
import taiwanCity from '@/assets/taiwanCity.json'

onMounted(() => {

})
</script>

<template>
  <div>
    <input v-model="city" list="city" class="" placeholder="請選擇縣市">

    <datalist id="city">
      <option value="Internet Explorer" />
      <option value="Firefox" />
      <option value="Google Chrome" />
      <option value="Opera" />
      <option value="Safari" />
    </datalist>
  </div>
</template>
