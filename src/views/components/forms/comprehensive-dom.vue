<template>
  <div class="p-4 overflow-y-auto custom">
    <el-card>
      <template #header>
        <div class="flex justify-between items-center">
          <span class="flex-1">综合表单</span>
          <el-row>
            <el-row align="middle">
              <div>大小：</div>
              <el-radio-group v-model="size" class="mr-6">
                <el-radio-button label="large">大</el-radio-button>
                <el-radio-button label="default">默认</el-radio-button>
                <el-radio-button label="small">小</el-radio-button>
              </el-radio-group>
            </el-row>
            <el-row align="middle">
              <div>label位置：</div>
              <el-radio-group v-model="labelPosition">
                <el-radio-button label="left">左</el-radio-button>
                <el-radio-button label="right">右</el-radio-button>
                <el-radio-button label="top">居顶</el-radio-button>
              </el-radio-group>
            </el-row>
          </el-row>
        </div>
      </template>
      <el-row :gutter="20">
        <el-row>
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            :label-position="labelPosition"
            class="mt-6"
            :size="size"
          >
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" placeholder="输入活动名称" />
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="选择活动区域">
                <el-option label="上海" value="shanghai" />
                <el-option label="北京" value="beijing" />
              </el-select>
            </el-form-item>
            <!-- TODO：时间国际化处理 -->
            <el-form-item label="活动时间" prop="date">
              <el-date-picker v-model="ruleForm.date" type="datetime" placeholder="选择活动时间" />
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery" />
            </el-form-item>
            <el-form-item label="活动类型" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="线上活动" name="type" />
                <el-checkbox label="促销活动" name="type" />
                <el-checkbox label="线下活动" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="活动资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌赞助" />
                <el-radio label="线下免费场地" />
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input v-model="ruleForm.desc" type="textarea" placeholder="简述活动形式" />
            </el-form-item>
            <el-form-item label="星评" prop="rate">
              <el-rate
                v-model="ruleForm.rate"
                :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
                show-text
              />
            </el-form-item>

            <el-form-item label="行政区域" prop="administrative">
              <el-cascader
                ref="cascader"
                v-model="ruleForm.administrative"
                :options="[]"
                placeholder="选择行政区域"
                clearable
                :props="{ children: 'children', label: 'name', value: 'code' }"
              >
                <template #default="{ data }">
                  <span>{{ data.name }}</span>
                </template>
              </el-cascader>
            </el-form-item>
            <el-form-item label="穿梭框" prop="transfer">
              <el-transfer
                v-model="ruleForm.transfer"
                style="display: inline-block; text-align: left;"
                filterable
                :render-content="renderContent"
                :titles="['Source', 'Target']"
                :props="{ key: 'id', label: 'username', disabled: 'disabled' }"
                :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}'
                }"
                :data="transferData"
                @change="handleChange"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)">立即创建</el-button>
              <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { FormInstance, ElMessage, dayjs } from 'element-plus'
  import axios from 'axios'
  import allAreas from './data/pca-code.json'
  import { TansferData } from './types'
  import 'dayjs/locale/zh-cn'

  export default defineComponent({
    name: 'ComprehensiveForm',
    setup() {
      // const { proxy } = getCurrentInstance() as any;
      const labelPosition = ref('right')
      const size = ref('default')
      const transferData = reactive<TansferData[]>([])

      const ruleFormRef = ref<FormInstance>()
      const cascader = ref()
      const ruleForm = reactive({
        name: '',
        region: '',
        date: '', //new Date(2000, 1, 1, 12, 0, 0),
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        rate: 0,
        administrative: [],
        transfer: []
      })

      const rules = reactive({
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 2, max: 32, message: '长度为2～32个字符', trigger: 'blur' }
        ],
        region: [
          {
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }
        ],
        date: [
          {
            type: 'date',
            required: true,
            message: '请选择活动时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动类型',
            trigger: 'change'
          }
        ],
        resource: [
          {
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }
        ],
        desc: [{ required: true, message: '请简述活动形式', trigger: 'blur' }],
        rate: [{ required: true, message: '请给活动打分', trigger: 'change' }],
        administrative: [
          {
            required: true,
            validator: (_, value, callback) => {
              if (value.length === 0 || value.length === 1) {
                callback(new Error('请选择行政区域'))
              } else {
                callback()
              }
            },
            trigger: 'change'
          }
        ]
      })

      async function getTansferData() {
        const res = await axios.get('/api/public/transfer')
        const { data } = res.data
        transferData.push(...data)
      }

      onMounted(async () => {
        try {
          await getTansferData()
        } catch (error) {
          console.error('onMounted error', error)
        }
      })

      function renderContent(
        h: (type: string, props: any | null, children?: string) => any,
        option: any
      ) {
        return h('span', null, option.username)
      }

      function handleChange(
        value: number | string,
        direction: 'left' | 'right',
        movedKeys: string[] | number[]
      ) {
        console.log('🚀 ~ file: comprehensive-form.vue ~ setup ~ movedKeys', movedKeys)
        console.log('🚀 ~ file: comprehensive-form.vue ~ setup ~ direction', direction)
        console.log('🚀 ~ file: comprehensive-form.vue ~ setup ~ value', value)
      }

      async function submitForm(formEl: FormInstance | undefined) {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
          if (valid) {
            ElMessage({
              type: 'success',
              message: '控制台查看打印数据'
            })
            // 将时间处理成时间戳
            const date = dayjs(Date.parse(ruleForm.date)).unix().toString()
            const data = Object.assign({}, ruleForm, { date })
            console.log('submit!', data)
          } else {
            console.log('error submit!', fields)
          }
        })
      }

      function resetForm(formEl: FormInstance | undefined) {
        if (!formEl) return
        formEl.resetFields()
      }
      return {
        labelPosition,
        size,
        ruleFormRef,
        ruleForm,
        rules,
        submitForm,
        resetForm,
        allAreas,
        cascader,
        transferData,
        renderContent,
        handleChange
      }
    }
  })
</script>

<style lang="scss">
  .custom {
    .el-rate__item {
      display: flex !important;
    }
  }
</style>
