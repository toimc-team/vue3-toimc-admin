import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

// 接口类型和方法
interface BaseType {
  baseURL: string
  getConfigParams(): any
  interceptors(instance: AxiosInstance, url: string | number | undefined): any
  request(options: AxiosRequestConfig): any
}

interface AxiosRequestType {
  baseURL?: string
  url?: string | undefined
  data?: any
  params?: any
  method?: string
  headers?: any
  timeout?: number
  value?: any
  cancelToken?: any
}

// 取消重复请求
const CancelToken = axios.CancelToken
// 用于存储每个请求的取消函数以及对应标识
const sources: any = []

// 取消函数
const removeSource = (config: any) => {
  for (const item in sources) {
    if (sources[item].umet === config.url + '&' + config.method) {
      sources[item].cancel('已取消重复请求，请勿重复请求')
      sources.splice(item, 1)
    }
  }
}

class AxiosHttpRequest implements BaseType {
  baseURL: string
  timeout: number
  constructor() {
    this.baseURL = import.meta.env.VITE_GLOB_API_URL
    this.timeout = 1500
  }
  // 配置参数
  getConfigParams() {
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {}
    }
    return config
  }
  // 拦截设置
  interceptors(instance: AxiosInstance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestType) => {
        // 取消重复请求
        removeSource(config)
        config.cancelToken = new CancelToken((c) => {
          // 将取消函数存起来
          sources.push({ umet: config.url + '&' + config.method, cancel: c })
        })
        // 添加全局的loading..
        // 请求头携带token
        // config.headers['Authorization'] = 'Bearer ' + 'token666'
        config.headers['Content-Type'] = 'application/json;charset=utf-8'
        // get请求映射params参数
        if (config.method === 'get' && config.params) {
          let url = config.url + '?'
          for (const propName of Object.keys(config.params)) {
            const value = config.params[propName]
            const part = encodeURIComponent(propName) + '='
            if (value !== null && typeof value !== 'undefined') {
              if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                  const params = propName + '[' + key + ']'
                  const subPart = encodeURIComponent(params) + '='
                  url += subPart + encodeURIComponent(value[key]) + '&'
                }
              } else {
                url += part + encodeURIComponent(value) + '&'
              }
            }
          }
          url = url.slice(0, -1)
          config.params = {}
          config.url = url
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截
    instance.interceptors.response.use(
      (res: any) => {
        // 取消重复请求
        removeSource(res.config)

        // 未设置状态码则默认成功状态
        const code = res.data['code'] || 200
        // 获取错误信息
        let msg = res.data['msg'] || ''
        switch (code) {
          case '401':
            msg = '认证失败，无法访问系统资源'
            break
          case '403':
            msg = '当前操作没有权限'
            break
          case '404':
            msg = '访问资源不存在'
            break
          case 'default':
            msg = '系统未知错误，请反馈给管理员'
            break
          default:
            return '未知错误，请联系管理员'
        }
        if (code === 200) {
          return Promise.resolve(res.data)
        } else {
          ElMessage.error(msg)
          return Promise.reject(res.data)
        }
      },
      (error: any) => {
        console.log('err' + error)
        let { message } = error
        if (message == 'Network Error') {
          message = '后端接口连接异常'
        } else if (message.includes('timeout')) {
          message = '系统接口请求超时'
        } else if (message.includes('Request failed with status code')) {
          message = '系统接口' + message.substr(message.length - 3) + '异常'
        }
        ElMessage.error({
          message: message,
          duration: 5 * 1000
        })
        return Promise.reject(error)
      }
    )
  }

  /**
   * 外部调用方法
   * @param options axios请求参数
   * @returns 实例
   */
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getConfigParams(), options)
    this.interceptors(instance)
    return instance(options)
  }
}

// 实例化请求类
const http = new AxiosHttpRequest()

export default http
