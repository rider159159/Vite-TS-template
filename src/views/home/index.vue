<script lang="ts" setup>
const api = inject('$api') as any

async function getRadomDog() {
  const query = {
    id: 'test12354654'
  }
  const { message, status } = await api.getRadomDog(query)
  if (status === 'success') {
    console.log(message)
  }
}

const name = ref('Ryder')

onMounted(() => {
  getRadomDog()
})
</script>

<template>
  <div>
    <p> {{ name }} </p>
    <div>home</div>
  </div>
</template>
