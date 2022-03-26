export interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}

export interface AreaResult {
  province?: AreaItem
  city?: AreaItem
  area?: AreaItem
}
