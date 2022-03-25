<template>
  <div class="p-4">
    <el-card header="表单组件基础用法">
      <ul>
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
      </basic-form>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { FormSchema } from '@/components/Form/types/types'
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const formBasicSchema: FormSchema[] = [
        {
          component: 'input',
          value: '',
          label: '用户名',
          prop: 'name',
          rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          attrs: {
            placeholder: '请输入用户名'
          }
        },
        {
          component: 'input',
          value: '',
          label: '密码',
          prop: 'password',
          rules: [
            {
              required: true,
              message: '密码不能为空',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 16,
              message: '密码在6-16位',
              trigger: 'blur'
            }
          ],
          attrs: {
            placeholder: '请输入密码'
          }
        },
        {
          component: 'select',
          value: '',
          prop: 'role',
          label: '角色',
          rules: [
            {
              required: true,
              message: '请选择角色',
              trigger: 'change'
            }
          ],
          attrs: {
            placeholder: '请选择角色'
          },
          children: [
            {
              component: 'option',
              label: '管理员',
              value: 'admin'
            },
            {
              component: 'option',
              label: '用户',
              value: 'user'
            },
            {
              component: 'option',
              label: '测试',
              value: 'test'
            }
          ]
        },
        {
          component: 'checkbox-group',
          value: ['1'],
          prop: 'like',
          label: '爱好',
          rules: [],
          attrs: {},
          children: [
            {
              component: 'checkbox',
              label: '足球',
              value: '1',
              attrs: {
                disabled: true
              }
            },
            {
              component: 'checkbox',
              label: '篮球',
              value: '2'
            },
            {
              component: 'checkbox',
              label: '游泳',
              value: '3'
            }
          ]
        },
        {
          component: 'radio-group',
          value: '2',
          prop: 'gender',
          label: '性别',
          children: [
            {
              component: 'radio',
              label: '男',
              value: '1'
            },
            {
              component: 'radio',
              label: '女',
              value: '2'
            },
            {
              component: 'radio',
              label: '未知',
              value: '3'
            }
          ]
        },
        {
          component: 'upload',
          label: '图片',
          prop: 'file',
          // slotId
          slot: 'upload1-',
          upload: {
            action: ''
          }
        },
        {
          component: 'upload',
          label: '文档',
          prop: 'file',
          slot: 'upload2-',
          upload: {
            action: ''
          }
        },
        {
          component: 'upload',
          label: '文档',
          prop: 'file',
          upload: {
            type: 'button',
            btnType: 'success',
            text: '点击上传',
            action: ''
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
      ]

      return {
        formBasicSchema,
        radio: ref('6')
      }
    }
  })
</script>

<style scoped></style>
