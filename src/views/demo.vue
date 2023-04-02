<script setup lang="ts">
// store 運用
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/stores'
const store = userInfoStore()
const { USER_INFO_REF } = storeToRefs(store)

// 使用 API
const api = inject('$api') as any

async function getMemberInfo() {
  const { data, code } = await api.member.getMemberInfo()
  // API 丟置 store
  if (code !== 200) return
  USER_INFO_REF.value = data.userInfo
}

// 彈窗控制
const demoModal = ref(false)
function openModal() {
  demoModal.value = true
}
</script>

<template>
  <section>
    <div class="flex gap-4">
      <button @click.prevent="getMemberInfo"
        class="relative flex-none text-sm text-center font-semibold text-white py-2.5 px-4 rounded-lg bg-slate-900 dark:bg-sky-500 dark:text-white focus:outline-none hover:bg-slate-700 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:highlight-white/20 dark:hover:bg-sky-400 dark:focus:ring-2 dark:focus:ring-sky-600 dark:focus:ring-offset-slate-900">
        獲得使用者資料至 store
      </button>
      <button @click.prevent="openModal"
        class="relative flex-none text-sm text-center font-semibold text-white py-2.5 px-4 rounded-lg bg-slate-900 dark:bg-sky-500 dark:text-white focus:outline-none hover:bg-slate-700 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:highlight-white/20 dark:hover:bg-sky-400 dark:focus:ring-2 dark:focus:ring-sky-600 dark:focus:ring-offset-slate-900">
        開啟彈窗
      </button>
    </div>
    <!-- 彈窗 -->
    <Modal v-model="demoModal" title="測試彈窗">
      <table class="w-full border-separate border border-slate-400 ...">
        <thead>
          <tr>
            <th class="border border-slate-300 ...">State</th>
            <th class="border border-slate-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 ...">Indiana</td>
            <td class="border border-slate-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Ohio</td>
            <td class="border border-slate-300 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Michigan</td>
            <td class="border border-slate-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </Modal>
  </section>
</template>
