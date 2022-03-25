<template>
  <div class="p-4">
    <el-card header="表单组件基础用法">
      <ul class="pb-10">
        <li>1.使用json配置表单所有内容</li>
        <li>2.表单验证</li>
        <li>3.动态表单</li>
        <li>4.集成第三方组件：富文本，markdown编辑器，扩展性好</li>
      </ul>
      <basic-form :schemas="formBasicSchema">
        <!-- <template #upload1-trigger>
          <el-button type="primary">点击上传</el-button>
        </template>-->
        <template #upload1-trigger>
          <el-button type="primary">点击上传</el-button>
        </template>
        <template #upload2-trigger>
          <el-button type="primary">点击上传</el-button>
        </template>
        <template #upload2-tip>
          <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </template>
        <template #custom-slot="{ name }">
          <span>{{ name }}</span>
        </template>
      </basic-form>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { FormSchema } from '@/components/Form/types/types'
  import { defineComponent } from 'vue'
  import allAreas from '@/components/ChooseCity/data/pca-code.json'
  import { TansferData } from './types'
  import axios from 'axios'
  export default defineComponent({
    setup() {
      const transferData = reactive<TansferData[]>([])

      const formBasicSchema: FormSchema[] = reactive([
        {
          component: 'input',
          value: '',
          label: '活动名称',
          prop: 'name',
          rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          attrs: {
            placeholder: '输入活动名称'
          }
        },
        {
          component: 'select',
          value: '',
          prop: 'region',
          label: '活动区域',
          rules: [
            {
              required: true,
              message: '活动区域',
              trigger: 'change'
            }
          ],
          attrs: {
            placeholder: '选择活动区域'
          },
          children: [
            {
              component: 'option',
              label: '上海',
              value: 'shanghai'
            },
            {
              component: 'option',
              label: '北京',
              value: 'beijing'
            }
          ]
        },
        {
          component: 'date-picker',
          prop: 'date',
          label: '爱好',
          rules: [],
          attrs: {
            placeholder: '选择活动时间'
          }
        },
        {
          component: 'switch',
          prop: 'delivery',
          label: '即时配送'
        },
        {
          component: 'checkbox-group',
          value: [],
          prop: 'type',
          label: '活动类型',
          children: [
            {
              component: 'checkbox',
              label: '线上活动',
              value: '1'
            },
            {
              component: 'checkbox',
              label: '促销活动',
              value: '2'
            },
            {
              component: 'checkbox',
              label: '线下活动',
              value: '3'
            },
            {
              component: 'checkbox',
              label: '单纯品牌曝光',
              value: '4'
            }
          ]
        },
        {
          component: 'radio-group',
          value: '1',
          prop: 'resource',
          label: '活动类型',
          children: [
            {
              component: 'radio',
              label: '线上品牌赞助',
              value: '1'
            },
            {
              component: 'radio',
              label: '线下免费场地',
              value: '2'
            }
          ]
        },
        {
          component: 'input',
          label: '活动形式',
          prop: 'desc',
          attrs: {
            type: 'textarea',
            placeholder: '简述活动形式'
          }
        },
        {
          component: 'rate',
          label: '星评',
          prop: 'rate',
          attrs: {
            texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
            showText: true
          }
        },
        {
          component: 'cascader',
          label: '行政区域',
          prop: 'administrative',
          attrs: {
            props: { children: 'children', label: 'name', value: 'code' },
            clearable: true,
            placeholder: '选择行政区域',
            options: allAreas
          },
          slot: 'custom-slot'
        },
        {
          component: 'transfer',
          label: '穿梭框',
          prop: 'administrative',
          attrs: {
            props: { key: 'id', label: 'username', disabled: 'disabled' },
            format: {
              noChecked: '${total}',
              hasChecked: '${checked}/${total}'
            },
            filterable: true,
            style: 'display: inline-block; text-align: left;',
            titles: ['Source', 'Target'],
            renderContent: renderContent,
            data: transferData
          },
          events: {
            change: handleChange
          }
        },
        {
          component: 'upload',
          label: '图标上传',
          prop: 'file',
          upload: {
            action: '',
            type: 'icon',
            onChange: (file, list) => {
              console.log(file, list)
            }
          }
        }
      ])

      onMounted(async () => {
        try {
          async function getTansferData() {
            const res = await axios.get('/api/public/transfer')
            const { data } = res.data
            transferData.push(...data)
          }
          await getTansferData()
        } catch (error) {
          console.error('onMounted error', error)
        }
      })

      function handleChange(
        value: number | string,
        direction: 'left' | 'right',
        movedKeys: string[] | number[]
      ) {
        console.log('🚀 ~ file: comprehensive-form.vue ~ setup ~ movedKeys', movedKeys)
        console.log('🚀 ~ file: comprehensive-form.vue ~ setup ~ direction', direction)
        console.log('🚀 ~ file: comprehensive-form.vue ~ setup ~ value', value)
      }

      function renderContent(
        h: (type: string, props: any | null, children?: string) => any,
        option: any
      ) {
        return h('span', null, option.username)
      }

      return {
        formBasicSchema
      }
    }
  })
</script>

<style scoped></style>
