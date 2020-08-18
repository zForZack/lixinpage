import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50000 // request timeout
})

// 请求拦截  设置统一header
service.interceptors.request.use(
  config => {
    // 加载
    if (localStorage.eleToken) {
      config.headers.Authorization = localStorage.eleToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截  401 token过期处理
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const { status } = error.response
    if (status === 401) {
      // 清除token
      localStorage.removeItem('eleToken')

      // 页面跳转
      //router.push('/login')
    }

    return Promise.reject(error)
  }
)

export default service