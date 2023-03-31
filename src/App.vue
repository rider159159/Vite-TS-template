<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button type="button" class="bg-blue" @click="router.push({ name:'home' })">to home</button>
  <div class="" @click="router.push({ name:'projects', params: {
    id:'laserpecker'
  } })">lepulse經絡大師五寶包｜調好身體不求人，穴道自學工具包，精準找最適合自己的穴</div>
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
