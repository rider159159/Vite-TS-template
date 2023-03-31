import { http } from '../utils/AxiosInstance'

const api = {
  // typeScript 設定必帶參數，1 網址、2 Axios 相關 header
  getRadomDog: (data:any) =>{
    console.log(data);
    return http.httpGet('/breeds/image/random',{ params: { ...data} })
  }
}

export default api