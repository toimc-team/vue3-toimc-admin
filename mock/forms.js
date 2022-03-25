// 综合表单的穿梭框数据
const transferData = {
  url: '/api/public/transfer',
  method: 'get',
  response: () => {
    return {
      code: 200,
      message: 'ok',
      'data|20': [
        {
          'id|10000-11000': 0,
          username: '@cname',
          email: '@email',
          phone: /^1[385][1-9]\d{8}/,
          role: 0,
          createTime: 1479048325000,
          updateTime: 1479048365000,
          'disabled|1-6': true
        }
      ]
    }
  }
}

export default [transferData]
