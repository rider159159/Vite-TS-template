<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div class="test">
    <button>test</button>
  </div>
  <button type="button" @click="()=>{router.push({ name:'list' })}">to List</button>
  <button type="button" @click="router.push({ name:'home' })">to home</button>

  <router-view  v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.test{
  button{
    color: red
  }
}
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
