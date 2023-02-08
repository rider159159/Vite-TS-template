import { http } from '../utils/AxiosInstance'

const api = {
  // typeScript 設定必帶參數，1 網址、2 Axios 相關 header
  getRadomDog: () => http.httpGet('/breeds/image/random')
}

export default api