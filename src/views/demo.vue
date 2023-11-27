<script setup>
import taiwanCityJSON from '@/assets/taiwanCity.json'

const percentage = ref(50)

const taiwanCityList = ref()
const taiwanCity = ref('')

function makeJson() {
  taiwanCityList.value = taiwanCityJSON.map((item) => {
    return item.CityName
  })
}

const townsCityList = ref(
  [],
)

watch(taiwanCity, () => {
  const targe = taiwanCityJSON.filter(i => i.CityName === taiwanCity.value)
  townsCityList.value = targe[0].AreaList
})

onMounted(() => {
  makeJson()
})
</script>

<template>
  <div>
    <MyHeader />
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
      <select id="taiwanCity" v-model="taiwanCity" name="">
        <option v-for="item in taiwanCityList" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <select v-if="taiwanCity" id="taiwanCity" name="">
        <option v-for="item in townsCityList" :key="item" :value="item">
          {{ item.AreaName }}
        </option>
      </select>
    </div>
  </div>
</template>
