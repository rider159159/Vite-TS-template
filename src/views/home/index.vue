<script lang="ts" setup>
const api = inject('$api') as any

async function getRadomDog() {
  const { message, status } = await api.getRadomDog()
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
