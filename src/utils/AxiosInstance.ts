import axios, { AxiosRequestConfig, AxiosResponse} from 'axios'

const defaultConfig = {
  timeOut: 30000,
  // 判斷環境變數
  baseURL: import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : 'https://dog.ceo/api'
}

class Http {
  constructor(){
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  
  private static axiosInstance = axios.create(defaultConfig)

  private httpInterceptorsRequest() {
    // axios request 攔截器，API 統一設定可來此
    Http.axiosInstance.interceptors.request.use((config) => {
      return config
    },error => {
      return Promise.reject(error)
    })
  }

  private httpInterceptorsResponse() {
    // axios response 攔截器，API 統一設定可來此
    Http.axiosInstance.interceptors.response.use((res) => {
      return res
    },error => {
      return Promise.reject(error)
    })
  }

  // params = methods、 query 等等 axios 本身封裝，透過參數傳遞給 axios
  public httpGet<T>(url: string, params?: AxiosRequestConfig ):Promise<T> {
    return Http.axiosInstance.get(url, { params }).then(res => res.data).catch()
  }

  public httPost(url: string, params?: AxiosRequestConfig) {
    return Http.axiosInstance.post(url, { params }).then(res => res.data).catch()
  }

}
export const http = new Http()