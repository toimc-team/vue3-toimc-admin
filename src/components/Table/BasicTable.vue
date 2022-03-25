<template>
  <el-card>
    <slot name="header"></slot>
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="data"
      :border="border"
      :stripe="stripe"
      :show-header="showHeader"
      :size="size"
      :height="height"
      :element-loading-text="loadingProps.text"
      :element-loading-spinner="loadingProps.spinner"
      :element-loading-svg="loadingProps.svg"
      :element-loading-background="loadingProps.background"
      v-bind="$attrs"
    >
      <template v-for="(item, index) in columns" :key="index">
        <el-table-column
          v-if="['index', 'selection'].includes(item.type || '')"
          :key="index"
          :type="item.type"
          :label="item.label"
          :align="item.align"
          :width="item.width"
          :fixed="item.fixed"
        ></el-table-column>
        <el-table-column
          v-else
          :label="item.label"
          :align="item.align"
          :prop="item.prop"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template v-if="item.actionItems && item.actionItems.length" #default="scope">
            <div
              v-for="(action, idx) in item.actionItems"
              :key="idx"
              :class="action.class || 'inline-flex pr-2'"
            >
              <el-button
                v-if="action.type === 'button'"
                v-bind="action.attrs"
                @click="() => action.click(scope)"
                >{{ action.text }}</el-button
              >
              <icon
                v-else-if="action.type === 'icon'"
                :icon="action.icon"
                v-bind="action.attrs"
                @click="() => action.click(scope)"
              ></icon>
            </div>
          </template>
          <template v-else-if="item.slot" #default="scope">
            <slot :name="item.slot || 'default'" v-bind="scope"></slot>
          </template>
          <template v-else-if="item.type" #default="scope">
            <el-tag v-if="item.type === 'tag'" v-bind="item.attrs">{{
              scope.row[item.prop]
            }}</el-tag>
            <el-progress
              v-if="item.type === 'progress'"
              :percentage="scope.row[item.prop]"
              :format="(val) => item?.format && item?.format(val, scope.row)"
              v-bind="item.attrs"
            ></el-progress>
            <template v-if="item.type === 'avatar'">
              <el-avatar
                v-if="!item?.attrs?.icon"
                :src="scope.row[item.prop]"
                v-bind="item.attrs"
              ></el-avatar>
              <icon v-else :icon="scope.row[item.prop]" v-bind="omit(item.attrs, ['icon'])" />
            </template>
            <template v-if="item.type === 'rate'">
              <el-rate v-model="scope.row[item.prop]" disabled></el-rate>
            </template>
            <template v-if="item.type === 'link'">
              <el-link
                :href="scope.row[item.prop]"
                :underline="false"
                :type="'primary'"
                v-bind="item.attrs"
                target="_blank"
                >{{ item.attrs?.text || '点击预览' }}</el-link
              >
            </template>
            <template v-if="item.type === 'badge'">
              <el-badge :value="scope.row[item.prop]" v-bind="item.attrs">
                {{ item.attrs?.text || item.label }}
              </el-badge>
            </template>
            <template v-if="item.type === 'image'">
              <el-image :src="scope.row[item.prop]" v-bind="item.attrs"></el-image>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="footer">
      <div class="pt-4">
        <el-pagination
          v-bind="pagination"
          :layout="pagination.layout?.join(',') || 'total, ->, sizes, prev,  pager, next'"
          :total="pagination.total"
          :small="pagination.small"
          :background="pagination.background"
          :page-size="pagination.pageSize"
          :default-page-size="pagination.defaultPageSize"
          :page-count="pagination.pageCount"
          :pager-count="pagination.pagerCount"
          :current-page="pagination.currentPage"
          :default-current-page="pagination.defaultCurrentPage"
          :page-sizes="pagination.pageSizeOptions"
          :popper-class="pagination.popperClass"
          :prev-text="pagination.prevText"
          :next-text="pagination.nextText"
          :disabled="pagination.disabled"
          :hide-on-single-page="pagination.hideOnSinglePage"
          v-on="pagination.events"
        />
      </div>
    </slot>
    <slot name="footer-with-pagination"></slot>
  </el-card>
</template>

<script lang="ts">
  import { ColumnOptions, LoadingProps, PaginationProps } from './types'
  import { omit } from 'lodash'
  import { ElTable } from 'element-plus'

  export default defineComponent({
    name: 'BasicTable',
    props: {
      // tableRef: {
      //   type: Object as PropType<InstanceType<typeof ElTable>>,
      //   default: () => ({})
      // },
      data: {
        type: Array,
        default: () => []
      },
      columns: {
        type: Array as PropType<ColumnOptions[]>,
        default: () => [],
        required: true
      },
      border: {
        type: Boolean,
        default: true
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingProps: {
        type: Object as PropType<LoadingProps>,
        default: () => ({})
      },
      stripe: {
        type: Boolean,
        default: false
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      size: {
        type: String as PropType<'large' | 'default' | 'small'>,
        default: 'default'
      },
      height: {
        type: [String, Number],
        default: null
      },
      events: {
        type: Object as PropType<{
          [key: string]: any
        }>,
        default: null
      },
      pagination: {
        type: Object as PropType<PaginationProps>,
        default: () => ({
          // todo default sets not work
          // small: false,
          // background: false,
          // pageSize: 10,
          // pageSizeOptions: [10, 20, 30, 40, 50, 100],
          // pagerCount: 7,
          // currentPage: 1,
          // layout: 'prev, pager, next, jumper, ->, total'.split(', '),
          // disabled: false,
          // total: 100,
          // events: {}
        })
      }
    },
    emits: ['register'],
    setup(_props, { emit }) {
      const tableRef = ref<InstanceType<typeof ElTable>>()

      onMounted(() => {
        // todo 提供两种方式访问tableRef, 一种通过父组件ref.value.tableRef
        // e.g. table.value.tableRef.clearSelection()
        // 另一种，使用register事件注册
        emit('register', {
          clearSelection: tableRef.value!.clearSelection,
          getSelectionRows: tableRef.value!.getSelectionRows,
          toggleRowSelection: tableRef.value!.toggleRowSelection,
          toggleAllSelection: tableRef.value!.toggleAllSelection,
          toggleRowExpansion: tableRef.value!.toggleRowExpansion,
          setCurrentRow: tableRef.value!.setCurrentRow,
          clearSort: tableRef.value!.clearSort,
          clearFilter: tableRef.value!.clearFilter,
          doLayout: tableRef.value!.doLayout,
          sort: tableRef.value!.sort,
          scrollTo: tableRef.value!.scrollTo,
          setScrollTop: tableRef.value!.setScrollTop,
          setScrollLeft: tableRef.value!.setScrollLeft
        })
      })

      return {
        omit,
        tableRef
      }
    }
  })
</script>

<style scoped></style>
