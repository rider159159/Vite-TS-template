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
  <header class="fixed z-10 top-0 left-0 w-full">
    <nav
      class="relative flex w-full items-center justify-between bg-white py-22px text-neutral-600 shadow-lg">
      <div class="flex w-full flex-wrap items-center justify-between px-6">
        <div
          class="font-medium grow basis-[100%] items-center flex lg:basis-auto justify-between"
          id="navbarSupportedContentX">
          <ul
            class="mr-auto flex gap-4">
            <li>
              <a
                class="block  cursor-pointer transition duration-150 ease-in-out"
                @click.prevent="scrollTo"
                >候選人主張</a
              >
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block  cursor-pointer transition duration-150 ease-in-out"
                @click.prevent="scrollTo"
                >最新活動</a
              >
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block  cursor-pointer transition duration-150 ease-in-out"
                @click.prevent="scrollTo"
                >政策議題</a
              >
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block  cursor-pointer transition duration-150 ease-in-out"
                @click.prevent="scrollTo"
                >小額捐款</a
              >
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block  cursor-pointer transition duration-150 ease-in-out"
                @click.prevent="scrollTo"
                >民眾服務信箱</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
