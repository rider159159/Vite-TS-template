<script setup>
import taiwanCity from '@/assets/taiwanCity.json'

const percentage = ref(50)

const taiwanCityList = ref()
const targetCity = ref('')
function makeJson() {
  taiwanCityList.value = taiwanCity.map((item) => {
    return item.CityName
  })
}

// const townsCityList = computed({
//   get: () => targetCity.value,
//   set: () => {
//     const targe = taiwanCity.filter(i => i.CityName === targetCity.value)
//     return targe
//   },
// })
const townsCityList = ref(
[])

watch(targetCity, () => {
  const targe = taiwanCity.filter(i => i.CityName === targetCity.value)
  console.log( targe[0].AreaList)
  townsCityList.value = targe[0].AreaList
})

onMounted(() => {
  makeJson()
})
</script>

<template>
  <div class="flex flex-col">
    <!-- <LineChat></LineChat> -->
    <!-- <GroupBarChat></GroupBarChat>
    <ProgressBar :percentage="percentage"></ProgressBar> -->
    <button class="p-6 bg-blue text-white mr-4" @click="percentage += 1">
      +1
    </button>
    <button class="p-6 bg-blue text-white" @click="percentage -= 1">
      -1
    </button>
    <select id="taiwanCity" v-model="targetCity" name="">
      <option v-for="item in taiwanCityList" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
    <select v-if="targetCity" id="taiwanCity" name="">
      <option v-for="item in townsCityList" :key="item" :value="item">
        {{ item.AreaName }}
      </option>
    </select>
  </div>
</template>
