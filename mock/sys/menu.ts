import { resultSuccess, resultError, getRequestToken, requestParams, baseUrl } from '../_util'

import { MockMethod } from 'vite-plugin-mock'

// single
const demoMenu = [
  {
    alwaysShow: false,
    children: [
      {
        alwaysShow: false,
        children: [
          {
            alwaysShow: false,
            children: null,
            component: '',
            createBy: 'admin',
            createTime: '2020-01-07 10:40:47',
            delFlag: 0,
            description: null,
            hidden: false,
            icon: null,
            id: '1214376304951664642',
            internalOrExternal: false,
            isLeaf: true,
            keepAlive: false,
            key: '1214376304951664642',
            leaf: true,
            menuType: 2,
            name: '用户编辑',
            parentId: '3f915b2769fc80648e92d04e84ca059d',
            perms: 'user:edit',
            permsType: '1',
            redirect: null,
            route: true,
            sortNo: 1,
            status: '1',
            title: '用户编辑',
            updateBy: 'admin',
            updateTime: '2020-01-07 10:41:04',
            url: ''
          }
        ],
        component: 'dashboard/workbench/index',
        createBy: 'admin',
        createTime: '2021-09-15 19:51:23',
        delFlag: 0,
        description: null,
        hidden: false,
        icon: 'Menu',
        id: '1438108176814825473',
        internalOrExternal: false,
        isLeaf: true,
        keepAlive: false,
        key: '1438108176814825473',
        leaf: true,
        menuType: 1,
        name: '工作台',
        parentId: '1438108176273760258',
        perms: null,
        permsType: '1',
        redirect: null,
        route: true,
        sortNo: 1,
        status: '1',
        title: '工作台',
        updateBy: 'admin',
        updateTime: '2021-09-17 15:42:42',
        url: '/isystem'
      }
    ],
    component: 'layouts/RouteView',
    createBy: null,
    createTime: '2018-12-25 20:34:38',
    hidden: false,
    icon: 'Menu',
    id: 'd7d6e2e4e2934f2c9385a623fd98c6f3',
    internalOrExternal: false,
    keepAlive: false,
    key: 'd7d6e2e4e2934f2c9385a623fd98c6f3',
    menuType: 0,
    name: '系统管理',
    parentId: '',
    perms: null,
    permsType: null,
    redirect: null,
    route: true,
    sortNo: 2,
    status: null,
    title: '系统管理',
    updateBy: 'admin',
    updateTime: '2020-01-07 11:00:45',
    url: '/isystem'
  },
  {
    alwaysShow: false,
    children: [],
    component: 'layouts/RouteView',
    createBy: null,
    createTime: '2018-12-25 20:34:38',
    delFlag: 0,
    description: null,
    hidden: false,
    icon: 'Menu',
    id: 'd7d6e2e4e2934f2c9385a6ds98c6f3',
    internalOrExternal: false,
    isLeaf: false,
    keepAlive: false,
    key: 'd7d6e2e4e2934f2c9385a6ds98c6f3',
    leaf: false,
    menuType: 0,
    name: '其他菜单',
    parentId: '',
    perms: null,
    permsType: null,
    redirect: null,
    route: true,
    sortNo: 2,
    status: null,
    title: '其他菜单',
    updateBy: 'admin',
    updateTime: '2022-01-07 11:00:45',
    url: '/isystem1'
  }
]

export default [
  {
    url: `${baseUrl}/sys/permission/list`, 
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('Invalid token!')
      }
      const checkUser = {
        token: '12321',
        userId: '1'
      }
      if (!checkUser) {
        return resultError('Invalid user token!')
      }
      const id = checkUser.userId
      let menu: Object[]
      switch (id) {
        case '1':
          menu = demoMenu
          break
        case '2':
          menu = demoMenu
          break
        default:
          menu = []
      }

      return resultSuccess(menu)
    }
  },
  {
    url: `${baseUrl}/sys/permission/add`, 
    timeout: 1000,
    method: 'post', 
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('Invalid token!')
      }
      const checkUser = {
        token: '12321',
        userId: '1'
      }
      if (!checkUser) {
        return resultError('Invalid user token!')
      }  
      return resultError('没有权限，请联系管理员授权')
    }
  },
  {
    url: `${baseUrl}/sys/permission/edit`, 
    timeout: 1000,
    method: 'post', 
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('Invalid token!')
      }
      const checkUser = {
        token: '12321',
        userId: '1'
      }
      if (!checkUser) {
        return resultError('Invalid user token!')
      }  
      return resultError('没有权限，请联系管理员授权')
    }
  },
  {
    url: `${baseUrl}/sys/permission/delete`, 
    timeout: 1000,
    method: 'delete', 
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('Invalid token!')
      }
      const checkUser = {
        token: '12321',
        userId: '1'
      }
      if (!checkUser) {
        return resultError('Invalid user token!')
      }  
      return resultError('没有权限，请联系管理员授权')
    }
  },
  {
    url: `${baseUrl}/sys/permission/deleteBatch`, 
    timeout: 1000,
    method: 'delete', 
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('Invalid token!')
      }
      const checkUser = {
        token: '12321',
        userId: '1'
      }
      if (!checkUser) {
        return resultError('Invalid user token!')
      }  
      return resultError('没有权限，请联系管理员授权')
    }
  }
] as MockMethod[]
