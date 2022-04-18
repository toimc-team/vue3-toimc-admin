<template>
  
  <el-drawer v-model="show" :direction="direction" @close="onClose">
    <template #title>
      <h4 class="divide-y divide-gray-500/50">{{ isUpdate ? '编辑菜单' : '新增菜单' }}</h4>
    </template>
    <template #default>
      <div class="border-bg-gray-200 p-4 border overflow-auto">
        <el-form
          ref="vForm"
          :model="formData"
          :rules="rules"
          label-position="right"
          label-width="120px"
          size="default"
          @submit.prevent
        >
          <el-form-item label="菜单类型：" prop="menuType">
            <el-radio-group v-model="formData.menuType">
              <el-radio
                v-for="(item, index) in menuTypeOptions"
                :key="index"
                :label="item.value"
                :style="{
                  display: 'inline'
                }"
                >{{ item.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>

          <!-- 按钮权限 -->
          <template v-if="formData.menuType == 2">
            <el-form-item label="按钮/权限：" prop="name" class="required">
              <el-input v-model="formData.name" type="text" clearable></el-input>
            </el-form-item>
            <el-form-item label="上级菜单：" prop="parentId" class="required">
              <el-input v-model="formData.parentId" type="text" clearable></el-input>
            </el-form-item>
            <el-form-item label="授权标识：" prop="perms" class="required">
              <el-input
                v-model="formData.perms"
                type="text"
                placeholder="请输入授权标识"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item label="授权策略：" prop="permsType">
              <el-radio-group v-model="formData.permsType">
                <el-radio
                  v-for="(item, index) in permsTypeOptions"
                  :key="index"
                  :label="item.value"
                  :style="{
                    display: 'inline'
                  }"
                  >{{ item.label }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
            <el-form-item label="状态：" prop="status">
              <el-radio-group v-model="formData.status">
                <el-radio
                  v-for="(item, index) in statusOptions"
                  :key="index"
                  :label="item.value"
                  :style="{
                    display: 'inline'
                  }"
                  >{{ item.label }}</el-radio
                >
              </el-radio-group>
            </el-form-item>
          </template>
          <!-- 菜单 -->
          <template v-else>
            <el-form-item label="菜单名称：" prop="name" class="required">
              <el-input
                v-model="formData.name"
                type="text"
                placeholder="请输入菜单名称"
                clearable
              ></el-input>
            </el-form-item>
            <template v-if="formData.menuType == 0">
              <el-form-item label="访问路径：" prop="url" class="required">
                <el-input
                  v-model="formData.url"
                  type="text"
                  placeholder="请输入菜单路径"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="前端组件：" prop="component" class="required">
                <el-input
                  v-model="formData.component"
                  type="text"
                  placeholder="请输入前端组件"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="默认跳转地址：" prop="redirect">
                <el-input
                  v-model="formData.redirect"
                  type="text"
                  placeholder="请输入路由参数 redirect"
                  clearable
                ></el-input>
              </el-form-item>
            </template>
            <!-- 子菜单 -->
            <template v-else-if="formData.menuType == 1">  
              <el-form-item label="上级菜单：" prop="parentId" class="required">
                <!-- <el-input v-model="formData.parentId" type="text" clearable></el-input> -->
                <!-- 树控件有问题 2022.4.7 -->
                <el-tree-select
                  v-model="formData.parentId" :render-after-expand="false" 
                  :current-node-key="formData.parentId" node-key="id" :props="treeProps" :data="menus" check-strictly />
              </el-form-item>

              <el-form-item label="访问路径：" prop="url" class="required">
                <el-input
                  v-model="formData.url"
                  type="text"
                  placeholder="请输入菜单路径"
                  clearable
                ></el-input>
              </el-form-item>
              <el-form-item label="前端组件：" prop="component" class="required">
                <el-input
                  v-model="formData.component"
                  type="text"
                  placeholder="请输入前端组件"
                  clearable
                ></el-input>
              </el-form-item>
            </template>

            <el-form-item label="菜单图标：" prop="icon">
              <el-input v-model="formData.icon" type="text" placeholder="点击选择图标" clearable>
                <template #append> 
                    <el-popover
                        placement="bottom" 
                        :width="400"
                        trigger="click" 
                      >
                        <template #reference>
                          <el-button :icon="formData.icon?formData.icon:'Search'"></el-button>
                        </template>

                        <el-input v-model="searchIconKey" class="my-2" type="text" placeholder="点击搜索图标" clearable></el-input>

                        <div class="icon-container overflow-auto"> 
                          <icon-list
                          classes="p-2 w-1/8"
                          :items="menuIconList"
                          :show-text="false"
                          :choose="formData.icon"
                          @click="onPickIcon"
                        ></icon-list>

                        </div>


                      </el-popover>

                </template>
              </el-input>
            </el-form-item>

            <el-form-item label="排序：" prop="sortNo">
              <el-input-number
                v-model="formData.sortNo"
                :min="0"
                placeholder="请输入菜单排序"
                controls-position="right"
              />
            </el-form-item>
            <el-form-item label="是否路由菜单：" prop="route">
              <el-switch
                v-model="formData.route"
                inline-prompt
                active-text="是"
                inactive-text="否"
              ></el-switch>
            </el-form-item>
            <el-form-item label="隐藏路由：" prop="hidden">
              <el-switch
                v-model="formData.hidden"
                inline-prompt
                active-text="是"
                inactive-text="否"
              ></el-switch>
            </el-form-item>
            <el-form-item label="隐藏Tab：" prop="hideTab">
              <el-switch
                v-model="formData.hideTab"
                inline-prompt
                active-text="是"
                inactive-text="否"
              ></el-switch>
            </el-form-item>
            <el-form-item label="是否缓存路由：" prop="keepAlive">
              <el-switch
                v-model="formData.keepAlive"
                inline-prompt
                active-text="是"
                inactive-text="否"
              ></el-switch>
            </el-form-item>
            <el-form-item label="聚合路由：" prop="alwaysShow">
              <el-switch
                v-model="formData.alwaysShow"
                inline-prompt
                active-text="是"
                inactive-text="否"
              ></el-switch>
            </el-form-item>
            <el-form-item label="打开方式" prop="internalOrExternal">
              <el-switch
                v-model="formData.internalOrExternal"
                :width="50"
                inline-prompt
                active-text="外部"
                inactive-text="内部"
              ></el-switch>
            </el-form-item>
          </template>
        </el-form>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto;">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确认</el-button>
      </div>
    </template>


       
  </el-drawer>


   
</template>

<script lang="ts">
  import { ref,  defineComponent, toRefs, reactive } from 'vue'
  import { IconData } from '@/components/Icon/data'
  import { Search } from '@element-plus/icons-vue' // 引入图标

  
// import { ClickOutside as vClickOutside } from 'element-plus'
  export default defineComponent({ 
    props: {
      showDrawer: {
        type: Boolean,
        default: false
      },
      isUpdate: {
        type: Boolean,
        default: false
      },
      obj: {
        type: Object,
        default: () => ({})
      },
      menus: {
        type: Array,
        default: () => []
      }
    },
    emits: ['onConfirm', 'close'],
    setup(props, ctx) {
      const vForm = ref(null)
      const visibleRef = ref(false)
      const isEdit = ref(false)
      const direction = ref('rtl');

      const searchIconKey = ref('');
 
      
      const menuIconList= computed(() => (
         IconData.filter(item =>  item.toLowerCase().includes(searchIconKey.value.toLowerCase()) )
      ))
     

      const treeProps = {
        label: 'name',value:'id',
        children:'children' 
      }
 
     

      function cancelClick() {
        ctx.emit('close')
      }
      function onClose() {
        if (props.showDrawer) {
          ctx.emit('close')
        }
      }

      const state = reactive({
        formData: {
          menuType: 0,
          name: '',
          parentId: '',
          perms: '',
          permsType: '1',
          status: '1',
          url: '',
          component: '',
          redirect: '',
          icon: '',
          sortNo: 0,
          route: true,
          hidden: false,
          hideTab: false,
          keepAlive: false,
          alwaysShow: false,
          internalOrExternal: false
        },
        rules: {
          name: [
            {
              required: true,
              message: '字段值不可为空'
            }
          ],
          parentId: [
            {
              required: true,
              message: '字段值不可为空'
            }
          ],
          perms: [
            {
              required: true,
              message: '字段值不可为空'
            }
          ],
          url: [
            {
              required: true,
              message: '字段值不可为空'
            }
          ],
          component: [
            {
              required: true,
              message: '字段值不可为空'
            }
          ]
        },
        menuTypeOptions: [
          {
            label: '一级菜单',
            value: 0
          },
          {
            label: '子菜单',
            value: 1
          },
          {
            label: '按钮权限',
            value: 2
          }
        ],
        permsTypeOptions: [
          {
            label: '可见/可访问',
            value: '1'
          },
          {
            label: '可编辑',
            value: '2'
          }
        ],
        statusOptions: [
          {
            label: '有效',
            value: '1'
          },
          {
            label: '无效',
            value: '0'
          }
        ]
      })
      const menuData = ref({})

     const onPickIcon=(item)=>{
        console.log('pick',item)
        state.formData.icon = item
      }

      function handleSubmit() {
        const {
          menuType,
          name,
          parentId,
          perms,
          permsType,
          status,
          url,
          component,
          redirect,
          icon,
          sortNo,
          route,
          hidden,
          hideTab,
          keepAlive,
          alwaysShow,
          internalOrExternal
        } = state.formData

        const myForm = vForm.value as any
        myForm.validate((valid) => {
          if (!valid) return
          switch (menuType) {
            case 0:
              // 一级菜单
              ctx.emit('onConfirm', {
                alwaysShow,
                component,
                hidden,
                hideTab,
                icon,
                internalOrExternal,
                keepAlive,
                menuType,
                name,
                redirect,
                route,
                sortNo,
                url
              })
              break
            case 1:
              // 子菜单
              ctx.emit('onConfirm', {
                menuType,
                name,
                parentId,
                url,
                component,
                icon,
                sortNo,
                route,
                hidden,
                hideTab,
                keepAlive,
                alwaysShow,
                internalOrExternal
              })
              break
            case 2:
              // 按钮权限
              ctx.emit('onConfirm', {
                menuType,
                name,
                parentId,
                perms,
                permsType,
                status
              })
              break
            default:
              break
          }
        })
      }


      
      const show= computed(() => (props.showDrawer)); 
      // const isUpdate = computed(() => (props.isUpdate));  
      // watch(
      //   () => props.showDrawer,
      //   (newVal, oldVal) => {
      //     if (newVal !== oldVal) visibleRef.value = newVal
      //   },
      //   { deep: true }
      // )
      // watch(
      //   () => props.isUpdate,
      //   (newVal, oldVal) => {
      //     if (newVal !== oldVal) isEdit.value = newVal
      //   },
      //   { deep: true }
      // )
      watch(
        () => props.obj,
        (newVal, oldVal) => {
          if (newVal !== oldVal) {
            state.formData = {
              menuType: newVal.menuType,
              name: newVal.name,
              parentId: newVal.parentId,
              perms: newVal.perms,
              permsType: newVal.permsType,
              status: newVal.status,
              url: newVal.url,
              component: newVal.component,
              redirect: newVal.redirect,
              icon: newVal.icon,
              sortNo: newVal.sortNo,
              route: newVal.route,
              hidden: newVal.hidden,
              hideTab: newVal.hideTab,
              keepAlive: newVal.keepAlive,
              alwaysShow: newVal.alwaysShow,
              internalOrExternal: newVal.internalOrExternal
            }
          }
        },
        { deep: true }
      ) 
      return {show,treeProps,onPickIcon,menuIconList,searchIconKey,
      // showDrawer,isUpdate,
        // buttonRef,popoverRef,
        // vClickOutside,onClickOutside,
        vForm,
        Search,
        visibleRef,
        isEdit,
        menuData,
        direction,
        cancelClick,
        onClose,
        handleSubmit,
        ...toRefs(state)
      }
    }
  })
</script>
<style scoped>
.icon-container{
  height: 300px;
}
</style>
