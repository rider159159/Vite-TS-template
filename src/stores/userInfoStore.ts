import { defineStore } from 'pinia'
// import { UserInfo } from '@/interface/store'

export const userInfoStore = defineStore('user-info-store', () => {
  const USER_INFO_REF: any = ref({
  })
  
  return {
    USER_INFO_REF
  }
})
