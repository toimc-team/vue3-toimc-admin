<template>
  <el-tag v-if="item.type === 'tag'" v-bind="item.attrs">{{ scope.row[item.prop] }}</el-tag>
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
    <!-- eslint-disable-next-line vue/no-mutating-props -->
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
    <el-badge :value="scope.row[item.prop]" v-bind="item.attrs">{{
      item.attrs?.text || item.label
    }}</el-badge>
  </template>
  <template v-if="item.type === 'image'">
    <el-image :src="scope.row[item.prop]" v-bind="item.attrs"></el-image>
  </template>
</template>

<script lang="ts">
  import { omit } from 'lodash'

  export default defineComponent({
    props: {
      scope: {
        type: Object as PropType<any>,
        required: true
      },
      item: {
        type: Object as PropType<any>,
        required: true
      }
    },
    setup() {
      return {
        omit
      }
    }
  })
</script>

<style scoped></style>
