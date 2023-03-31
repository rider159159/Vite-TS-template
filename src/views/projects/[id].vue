<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/stores'

const api = inject('$api') as any
const store = userInfoStore()
const { USER_INFO_REF } = storeToRefs(store)

async function getRadomDog() {
  const query = {
    id: '1',
    content: 'Ryder'
  }
  const { message, status } = await api.getRadomDog(query)
  if (status === 'success') {
    USER_INFO_REF.value = message
  }
}

onMounted(() => {
  getRadomDog()
})
</script>

<template>
  <div>
    募資活動
    <h1>User {{ $route.params.id }}</h1>
    <img :src="USER_INFO_REF" alt="">
  </div>
</template>
