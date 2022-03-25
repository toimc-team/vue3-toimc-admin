export interface TansferData {
  id: number
  username: string
  email: string
  phone: number
  role: number
  createTime: Date
  updateTime: Date
  disabled: boolean
}
export interface ResponseData<T> {
  code: number
  message: string
  data: T
}
