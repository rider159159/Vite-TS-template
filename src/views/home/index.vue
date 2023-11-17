<script lang="ts" setup>
const router = useRouter()

function toProject(item:any) {
  router.push({
    name: 'projects',
    params: {
      id: item.id
    }
  })
}
</script>

<template>
  <div class="">
    <Banner></Banner>
  </div>
</template>
