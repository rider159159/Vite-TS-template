import axios, { AxiosRequestConfig } from 'axios'

const defaultConfig = {
  timeOut: 30000,
  // 判斷環境變數
  baseURL: import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : 'http://localhost:3034'
}

class Http {
  constructor(){
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  
  private static axiosInstance = axios.create(defaultConfig)

  private httpInterceptorsRequest() {
    // TODO: axios request 攔截器，API 統一設定可來此
    Http.axiosInstance.interceptors.request.use((config) => {
      return config
    },error => {
      return Promise.reject(error)
    })
  }

  private httpInterceptorsResponse() {
    // TODO: axios response 攔截器，API 統一設定可來此
    Http.axiosInstance.interceptors.response.use((res) => {
      return res
    },error => {
      return Promise.reject(error)
    })
  }

  // params = methods、 query 等等 axios 本身封裝，透過參數傳遞給 axios
  public httpGet<T>(url: string, params?: AxiosRequestConfig ):Promise<T> {
    console.log(params)
    return Http.axiosInstance.get(url, params).then(res => res.data).catch()
  }

  public httPost(url: string, data?: AxiosRequestConfig) {
    return Http.axiosInstance.post(url, data).then(res => res.data).catch()
  }

  public httPut(url: string, data?: AxiosRequestConfig) {
    return Http.axiosInstance.put(url, data).then(res => res.data).catch()
  }

  public httPatch(url: string, data?: AxiosRequestConfig) {
    return Http.axiosInstance.patch(url, data).then(res => res.data).catch()
  }
}
export const http = new Http()