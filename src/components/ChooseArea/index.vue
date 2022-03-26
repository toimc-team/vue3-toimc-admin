<template>
  <div class="p-1">
    <el-select v-model="province" placeholder="请选择省份" class="mr-1" :clearable="clearable">
      <el-option
        v-for="item in lists"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      v-model="city"
      :disabled="!province"
      placeholder="请选择城市"
      class="mr-1"
      :clearable="clearable"
    >
      <el-option
        v-for="item in cityList"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select v-model="area" :disabled="!city" placeholder="请选择区域" :clearable="clearable">
      <el-option
        v-for="item in areaList"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
  import type { PropType } from 'vue'
  import type { AreaResult } from './types'
  import allAreas from './data/pca-code.json'

  export default defineComponent({
    name: 'ChooseArea',
    props: {
      lists: {
        type: Array as PropType<typeof allAreas>,
        default: () => allAreas
      },
      value: {
        type: Object as PropType<AreaResult>,
        default: () => ({})
      },
      url: {
        type: String,
        default:
          'https://github.91chi.fun/https://raw.githubusercontent.com/modood/Administrative-divisions-of-China/master/dist/pca.json'
      },
      online: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      }
    },
    emits: ['change'],
    setup(props, { emit }) {
      const { lists, url, online, plain, value } = toRefs(props)

      onBeforeMount(() => {
        online.value &&
          fetch(url.value)
            .then((res) => res.json())
            .then((out) => (lists.value = out))

        if (value.value) {
          const { province: p, city: c, area: a } = value.value
          province.value = (p && p.code) || ''
          city.value = (c && c.code) || ''
          area.value = (a && a.code) || ''
        }
      })

      const province = ref('')
      const city = ref('')
      const area = ref('')
      const cityList = computed(() => {
        return lists.value.find((item) => item.code === province.value)?.children || []
      })

      const areaList = computed(() => {
        return cityList.value.find((item) => item.code === city.value)?.children || []
      })

      watch(province, () => {
        city.value = ''
        area.value = ''
      })

      watch(city, () => {
        area.value = ''
      })

      watch(area, () => {
        if (area.value) {
          const provinceName = lists.value.find((item) => item.code === province.value)!.name
          const cityName = cityList.value.find((item) => item.code === city.value)!.name
          const areaName = areaList.value.find((item) => item.code === area.value)!.name
          emit(
            'change',
            plain.value
              ? `${provinceName} ${cityName} ${areaName}`
              : {
                  province: {
                    code: province.value,
                    name: provinceName
                  },
                  city: {
                    code: city.value,
                    name: cityName
                  },
                  area: {
                    code: area.value,
                    name: areaName
                  }
                }
          )
        }
      })

      return {
        province,
        city,
        area,
        cityList,
        areaList
      }
    }
  })
</script>

<style scoped></style>
