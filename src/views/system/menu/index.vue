<template>
  <div class="p-4 menuBox">
    <div class="flex">
      <el-button type="primary" icon="Plus" @click="addMenu"> 新增菜单</el-button>
      <el-dropdown
v-if="multipleSelection.length > 0" style="margin-left: 5px;" trigger="click"
        @command="handleCommand">
        <span class="el-dropdown-link">
          <el-button plain icon="">批量操作
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </el-button>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="del">删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="info flex items-center content-center">
      <el-icon class="mr-1 block" color="#409EFF">
        <info-filled />
      </el-icon>
      <p class="border-gray-500">
        <span v-if="multipleSelection.length > 0">已选中 {{ multipleSelection.length }} 条记录 |
          <span class="cursor-pointer" @click="cleanSelection()">清空</span></span>
        <span v-else>未选中任何数据</span>
      </p>
    </div>
    <!-- :row-class-name="rowClassNameFun" -->
    <el-table
ref="multipleTableRef" :select-on-indeterminate="true" :header-row-class-name="rowClassNameFun"
      :data="tableData" border stripe style="width: 100%;" lazy row-key="id" @select-all="handleSelectAll"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" min-width="55" />
      <el-table-column property="name" label="菜单名称" min-width="200"> </el-table-column>
      <el-table-column property="菜单类型" label="菜单类型" min-width="150" align="center">
        <template #default="scope">
          <span v-if="scope.row.menuType == 0">一级菜单</span>
          <span v-else-if="scope.row.menuType == 1">子菜单</span>
          <span v-else-if="scope.row.menuType == 2">按钮/权限</span>
        </template>
      </el-table-column>
      <el-table-column property="icon" label="图标" show-overflow-tooltip min-width="50" align="center">
        <template #default="scope">
          <el-icon v-if="scope.row.icon" :name="scope.row.icon">
            <box />
          </el-icon>
          <span v-else class="iconify m-auto" data-icon="null"></span>
        </template>
      </el-table-column>
      <el-table-column property="component" label="组件" min-width="150" />
      <el-table-column property="url" label="路径" min-width="150" />
      <el-table-column property="sortNo" label="排序" min-width="50" align="center" />
      <el-table-column label="操作" min-width="150" align="center">
        <template #default="scope">
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-dropdown @command="handleMoreCommand">
            <span class="el-dropdown-link ml-2">
              <el-button type="text">更多<el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </el-button>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="{ index: 0, row: scope.row }">添加下级</el-dropdown-item>
                <el-dropdown-item :command="{ index: 1, row: scope.row }">删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <menu-drawer
:show-drawer="data.showDrawer" :obj="data.obj" :menus="data.menuALL" :is-update="data.isUpdate"
      @on-confirm="onConfirm" @close="data.showDrawer = false"></menu-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from 'vue'
import { ElMessage, ElMessageBox, ElTable } from 'element-plus'
import MenuDrawer from './MenuDrawer.vue'
import { getMenuList, saveOrUpdateMenu, deleteMenu, deleteMenus } from '@/api/sys/menu'
import { MenuItem } from '@/api/sys/model/menuModel'
export default defineComponent({
  name: 'MenusPage',
  components: {
    MenuDrawer
  },
  setup() {

    let data = reactive({
      isUpdate: false,
      showDrawer: false,
      obj: {},
      menuALL: [] as MenuItem[]
    })
    const multipleTableRef = ref<InstanceType<typeof ElTable>>()
    const multipleSelection = ref<Array<MenuItem>>([])
    const tableData = ref<Array<MenuItem>>([])
    const allCheckId = ref<Array<number>>([]) 
 

    const handleCommand = (command: string | number | object) => {
      // ElMessage(`click on item ${command}`)

      if (typeof command === 'string') {
        if (command === 'del') {
          // 删除 
          ElMessageBox.confirm('确定删除吗？', '温馨提示').then(() => {
            let ids = multipleSelection.value.map(item => item.id)

            console.log('ids', ids)
            deleteMenus({ ids: ids }).then((res) => {
              ElMessage({
                message: `${res.message}`,
                type: 'error'
              })
            })
          }).catch(() => {
            // 取消
          })
        }
      }
    }



    interface MenuCommand {
      index: 0,
      row: MenuItem
    }
    const handleMoreCommand = (command: MenuCommand) => {
      if (command.index == 0) {
        console.log('click add item ', command)
        //添加下级
        data.isUpdate = false,
          data.showDrawer = true  // 显示抽屉
        data.obj = {
          parentId: command.row.id,
          parentName: command.row.name,
          menuType: 1,
          route: true,
          permsType: '1',
          status: '1'
        };
      } else {
        //删除
        console.log('click on del item ', command)

        deleteMenu({ id: command.row.id }).then((res) => {
          ElMessage({
            message: `${res.message}`,
            type: 'error'
          })
        })

      }
    }
    enum CheckStatus {
      unChecked = 0,
      halfChecked = 1,
      allChecked = 2
    }
    let checkFlag = false;
    let checkStatus = CheckStatus.unChecked
    // 全选\取消全选
    const handleSelectAll = () => {
      checkFlag = !checkFlag
      checkChildren(tableData.value, checkFlag)

    }
    //选中监听
    const handleSelectionChange = (val: Array<MenuItem>) => {
      multipleSelection.value = val
      checkStatus = checkOutUserAll()
    }


    //判断是否全选所有的菜单
    const checkOutUserAll = () => {
      let userCheckIds = multipleSelection.value.map(item => item.id) 
      let status = CheckStatus.unChecked
      if (userCheckIds.length == 0) {
        status = CheckStatus.unChecked
      } else {
        if (allCheckId.value.length == userCheckIds.length) {
          status = CheckStatus.allChecked
        } else {

          status = CheckStatus.halfChecked
        }
      }
      return status
    }

    const checkChildren = (data, flag) => {
      data.forEach((row) => {
        // el-table里绑定的ref
        multipleTableRef.value!.toggleRowSelection(row, flag);
        //子节点的数据
        let children = row.children
        if (children != null) {
          checkChildren(children, flag);
        }
      });
    }
    //获取所有的菜单的id
    const getAllMenuId = (data) => {
      data.forEach((row) => {
        allCheckId.value.push(row.id) 
        let children = row.children
        if (children != null) {
          getAllMenuId(children);
        }
      });
    } 
    // 选中状态
    const rowClassNameFun = () => { 
      if (checkStatus == CheckStatus.halfChecked) {
        return 'indeterminate';
      }
      return ''
    }





    const addMenu = () => {
      data.isUpdate = false,
        data.showDrawer = true  // 显示抽屉
      data.obj = { menuType: 0, route: true, permsType: '1', status: '1' }
    }
    const onConfirm = (obj: any) => {
      console.log('onConfirm obj is:', obj)
      data.showDrawer = false
      saveOrUpdateMenu(obj, data.isUpdate).then(res => {
        ElMessage({
          message: `${res.message}`,
          type: 'error'
        })

      })
    }
    const handleEdit = (row: MenuItem) => {
      // ElMessage(`编辑 ${row.name}`) 
      data.isUpdate = true
      data.showDrawer = true
      data.obj = row
    }
    //清除选中的数据
    const cleanSelection = () => {
      multipleTableRef.value!.clearSelection()
      multipleSelection.value = []
    }
    onMounted(() => {
      console.log('onMounted')
      // console.log("onMounted",http)
      getMenuList()
        .then((res: any) => {
          tableData.value = res.data || []
          allCheckId.value = [];
          getAllMenuId(tableData.value)
          data.menuALL = res.data || []
        })
        .catch((err) => {
          console.log('err', err)
          ElMessage.error(err)
        })
    })
    onUnmounted(() => {
      console.log('unmount')
    })
    return {
      multipleSelection,
      tableData,
      data, multipleTableRef, checkStatus,
      addMenu,
      onConfirm,
      handleSelectAll,
      handleSelectionChange,
      checkOutUserAll, rowClassNameFun,
      handleCommand,
      handleMoreCommand,
      handleEdit,
      cleanSelection
    }
  }
})
</script>
<style lang="scss" scoped>
$color-primary: #409eff; 
.menuBox {
  :deep .indeterminate {
    background: #f00; 
     .el-checkbox__input {
      .el-checkbox__inner {
        background-color: $color-primary !important;
        border-color: $color-primary !important;
        color: #fff !important;

        &::after {
          border-color: #C0C4CC !important; 
          background-color: #C0C4CC;
          content: "";
          position: absolute;
          display: block;
          background-color: #fff;
          height: 2px;
          transform: scale(0.5);
          left: 0;
          right: 0;
          top: 5px;
          width: auto !important;

          // content: "";
          // position: absolute;
          // display: block;
          // background-color: #fff;
          // height: 2px;
          // transform: scale(.5);
          // left: 0;
          // right: 0;
          // top: 5px;
        }
      }
    }
  }


  .info {
    padding: 5px;
    margin: 10px auto;
    color: #333;
    background: #f1f1f1;
  }

  span.iconify {
    display: block;
    width: 1em;
    height: 1em;
    background-color: #5551;
    border-radius: 100%;
  }


}
</style>
