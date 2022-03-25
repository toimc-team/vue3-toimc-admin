<template>
  <basic-table :data="tableData" :columns="columns" :pagination="pagination" height="100%">
    <template #address="{ row }">{{ row }}</template>
  </basic-table>
</template>

<script lang="ts">
  import { ColumnOptions, PaginationProps } from '@/components/Table/types'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BasicTableExample',
    setup() {
      const tableData = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          progress: 50,
          avatar: 'ep:arrow-down-bold',
          rate: 3.5,
          link: 'https://www.bing.com',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          progress: 65,
          avatar: 'ep:arrow-down-bold',
          rate: 2.7,
          link: 'https://www.bing.com',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          progress: 15,
          avatar: 'ep:arrow-down-bold',
          rate: 3.4,
          link: 'https://www.bing.com',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          progress: 75,
          avatar: 'ep:arrow-down-bold',
          rate: 5,
          link: 'https://www.bing.com',
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
      ]

      const columns = [
        {
          label: '索引',
          type: 'index',
          align: 'center'
        },
        {
          type: 'selection',
          align: 'center'
        },
        {
          label: '日期',
          prop: 'date',
          align: 'center'
        },
        {
          label: '头像',
          prop: 'url',
          align: 'center',
          type: 'image'
        },
        {
          label: '评分',
          prop: 'rate',
          align: 'center',
          type: 'rate'
        },
        {
          label: '姓名',
          prop: 'name',
          align: 'center',
          type: 'tag'
        },
        {
          label: '消息',
          prop: 'badge',
          align: 'center',
          type: 'badge'
        },
        {
          label: '进度',
          prop: 'progress',
          align: 'center',
          type: 'progress',
          width: 200,
          attrs: {
            // status与format互斥
            color: 'green'
          },
          format: (value) => {
            return `${value}%`
          }
        },
        {
          label: '地址',
          prop: 'address',
          align: 'center',
          slot: 'address',
          width: 300
        },
        {
          label: '链接',
          prop: 'link',
          align: 'center',
          type: 'link',
          width: 120
        },
        {
          label: '操作',
          align: 'center',
          action: true,
          fixed: 'right',
          width: 200,
          actionItems: [
            {
              type: 'button',
              attrs: {
                type: 'primary'
              },
              text: '编辑',
              click: (scope) => {
                console.log(scope)
              }
            },
            {
              type: 'button',
              text: '详情',
              click: (scope) => {
                console.log(scope)
              }
            }
          ]
        }
      ] as ColumnOptions[]

      const pagination: PaginationProps = {
        total: 100
      }

      // const testHanlder = (myprops) => {
      //   console.log('🚀 ~ file: basic.vue ~ line 157 ~ testHanlder ~ myprops', myprops)
      //   setInterval(() => {
      //     myprops.clearSelection()
      //   }, 5000)
      // }

      const handleCurrentChange = (val) => {
        console.log('🚀 ~ file: basic.vue ~ line 151 ~ handleCurrentChange ~ val', val)
      }

      // const table = ref()
      // onMounted(() => {
      //   setInterval(() => {
      //     table.value.tableRef.clearSelection()
      //   }, 3000)
      // })

      return {
        tableData,
        columns,
        pagination,
        handleCurrentChange
        // table
        // testHanlder
      }
    }
  })
</script>

<style scoped></style>
