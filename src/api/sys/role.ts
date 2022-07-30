import axios from 'axios'

enum Api {
  roleQueryTreeList = '/api/sys/role/queryTreeList',
  list = '/api/sys/role/list',
  save = '/api/sys/role/add',
  edit = '/api/sys/role/edit',
  delete = '/api/sys/role/delete',
  deleteBatch = '/api/sys/role/deleteBatch',
  saveRolePermission = '/api/sys/permission/saveRolePermission',
  queryRolePermission = '/api/sys/permission/queryRolePermission',
  all = '/api/sys/role/queryAll'
}
//请求头
const headers = {
  authorization: 'Bearer ' + localStorage.getItem('token')
}
/**
 *  获取权限树列表
 */
export const queryRoleTreeList = () => {
  return new Promise((resolve) => {
    axios.get(Api.roleQueryTreeList, { headers }).then((res) => {
      resolve(res.data)
    })
  })
}

/**
 * 根据角色ID查询角色权限
 **/
export const queryRolePermission = (roleId?: string) => {
  return new Promise((resolve) => {
    const params = { roleId }
    axios.get(Api.queryRolePermission, { params, headers }).then((res) => {
      resolve(res.data)
    })
  })
}
/**
 *  获取所有角色列表
 */
export const queryAllRoleList = () => {
  return new Promise((resolve) => {
    axios.get(Api.all, { headers }).then((res) => {
      resolve(res.data)
    })
  })
}
/**
 *  获取角色列表
 */
export const queryRoleList = (params) => {
  return new Promise((resolve) => {
    axios.get(Api.list, { params, headers }).then((res) => {
      resolve(res.data)
    })
  })
}
/**
 * 删除角色
 */
export const deleteRole = (data) => {
  return new Promise((resolve) => {
    axios.delete(Api.delete, { data, headers }).then((res) => {
      resolve(res.data)
    })
  })
}

/**
 * 批量删除角色
 */
export const deleteBatchRole = (data) => {
  return new Promise((resolve) => {
    axios.delete(Api.deleteBatch, { data, headers }).then((res) => {
      resolve(res.data)
    })
  })
}
/**
 * 保存或者更新角色
 */
export const saveOrUpdateRole = (params, isUpdate) => {
  if (isUpdate) {
    return new Promise((resolve) => {
      axios.put(Api.edit, params, { headers }).then((res) => {
        resolve(res.data)
      })
    })
  } else {
    return new Promise((resolve) => {
      axios.post(Api.save, params, { headers }).then((res) => {
        resolve(res.data)
      })
    })
  }
}
//保存更新角色权限
export const saveOrUpdateRolePermission = (data) => {
  return new Promise((resolve) => {
    axios.post(Api.saveRolePermission, data, { headers }).then((res) => {
      resolve(res.data)
    })
  })
}
