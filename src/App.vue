<script setup lang="ts">
</script>

<template>
  <router-view  v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
