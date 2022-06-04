<template>
  <div class="chat-window-style">
    <el-table :data="userList" style="width: 100%" border max-height="480px">
      <el-table-column prop="data" label="用户名" width="180" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" v-if="scope.row.data == loginName" type="danger"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      // 数据源
      userList: {
        type: Array as PropType<object[]>,
        defalut: () => {
          return []
        }
      },
      loginName: {
        type: String,
        defalut: ''
      },
      state: {
        type: String,
        defalut: ''
      }
    },
    setup() {
      const sendText = ref('')
      return { sendText }
    }
  })
</script>

<style lang="scss" scoped></style>
