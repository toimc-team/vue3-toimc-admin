import axios from 'axios'
enum Api {
  list = '/api/sys/permission/list', 
  save='/api/sys/permission/add',
  edit='/api/sys/permission/edit',
  delete = '/api/sys/permission/delete',
  deleteBatch ='/api/sys/permission/deleteBatch' 
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => { 

  return new Promise((resolve) => {
    const headers = {
      authorization: 'Bearer ' + localStorage.getItem('token')
    }
    axios.get(Api.list, { headers }).then((res) => {
      console.log('================', res.data)
      resolve(res.data)
    })

    //为了兼容mock和接口数据
    // defHttp.request({
    //   method: 'get',
    //   baseURL:'/api',
    //   url: Api.GetMenuList
    // }).then((res) => {
    //   if(Array.isArray(res)){
    //     resolve(res)
    //   }else{
    //     resolve(res['menu'])
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // });
  })
}

/**
 * 保存或者更新菜单
 * @param params
 */
export const saveOrUpdateMenu = (data, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save; 
  const headers = {
      authorization: 'Bearer ' + localStorage.getItem('token')
    }
  return new Promise((resolve) => {
     axios.post(url,data, { headers}).then((res) => { 
      resolve(res.data)
    })
   }) 
}
/**
 * 删除菜单
 */
export const deleteMenu = (params) => {
  const headers = {
      authorization: 'Bearer ' + localStorage.getItem('token')
    }
  return new Promise((resolve) => {
     axios.delete(Api.delete, { params,headers}).then((res) => { 
      resolve(res.data)
    })
   })  
}
/**
 * 删除多项菜单
 */
export const deleteMenus = (data) => {
  const headers = {
      authorization: 'Bearer ' + localStorage.getItem('token')
    }
  return new Promise((resolve) => {
     axios.delete(Api.deleteBatch, { data,headers}).then((res) => { 
      resolve(res.data)
    })
   })  
}


