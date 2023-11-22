<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/stores'

const store = userInfoStore()
const { USER_INFO_REF } = storeToRefs(store)

const router = useRouter()

function scrollTo () {

}
</script>

<template>
  <header class="fixed z-10 top-0 left-0 w-full flex bg-#fff shadow-lg">
    <img src="/logo.svg" class="mr-6" alt="logo">
    <nav
      class="relative flex w-full items-center justify-between py-22px text-neutral-600">
      <div class="flex">
        <p>選擇年分</p>
        <select name="" id=""></select>
      </div>
    </nav>
  </header>
</template>
