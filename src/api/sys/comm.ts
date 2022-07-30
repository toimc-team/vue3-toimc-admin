import axios from 'axios'

enum Api {
  upload = '/api/sys/common/upload'
}
//请求头
const headers = {
  authorization: 'Bearer ' + localStorage.getItem('token')
}

/**
 *  上传文件
 */
export const uploadFile = (params) => {
  return new Promise((resolve) => {
    axios.post(Api.upload, { params, headers }).then((res) => {
      resolve(res.data)
    })
  })
}
