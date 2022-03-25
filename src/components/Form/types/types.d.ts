export type ComponentType =
  | 'cascader'
  | 'checkbox'
  | 'checkbox-group'
  | 'checkbox-button'
  | 'color-picker'
  | 'date-picker'
  | 'input'
  | 'input-number'
  | 'radio'
  | 'radio-group'
  | 'radio-button'
  | 'rate'
  | 'select'
  | 'option'
  | 'slider'
  | 'switch'
  | 'time-picker'
  | 'time-select'
  | 'transfer'
  | 'upload'
  | 'editor'

export type FormSchema = {
  component: ComponentType
  value?: any
  label?: string
  prop: string
  slot?: string | string[]
  itemSlot?: string
  rules?: RuleItem[]
  attrs?: any
  children?: Partial<FormSchema>[]
  events?: any
  class?: string
  upload?: {
    action?: string
    headers?: object
    method?: 'post' | 'put' | 'patch'
    multiple?: boolean
    data?: any
    name?: string
    withCredentials?: boolean
    showFileList?: boolean
    drag?: boolean
    accept?: string
    fileList?: any[]
    listType?: 'text' | 'picture' | 'picture-card'
    autoUpload?: boolean
    disabled?: boolean
    limit?: number
    type?: 'button' | 'icon'
    btnType?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
    text?: string
    class?: string
    icon?: string
    onChange?: (file: UploadFile, fileList: UploadFile[]) => void
    onRemove?: (file: UploadFile, fileList: UploadFile[]) => void
    onSuccess?: (response: any, file: UploadFile, fileList: UploadFile[]) => void
    onError?: (error: any, file: UploadFile, fileList: UploadFile[]) => void
    onProgress?: (
      evt: UploadProgressEvent,
      error: any,
      file: UploadFile,
      fileList: UploadFile[]
    ) => void
    onPreview?: (file: UploadFile) => void
    beforeUpload?: (
      file: UploadRawFile
    ) => Awaitable<void | undefined | null | boolean | File | Blob>
    beforeRemove?: (uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>
    httpRequest?: UploadRequestHandler
    onExceed?: (files: File[], uploadFiles: UploadFiles) => void
  }
}
