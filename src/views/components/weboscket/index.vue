<template>
  <div class="p-4">
    <el-card header="websocket链接">
      <div class="webscoket-style">
        <!-- 左侧内容 -->
        <div class="left">
          <div>
            <span>websocket链接状态:{{ state.wsStatus }}</span>
          </div>
          <!-- 链接地址 -->
          <div class="link-address-wrapper">
            <span class="link-address-wrapper_title">链接地址：</span>
            <el-input
              class="link-address-wrapper_input"
              v-model="state.server"
              placeholder="请输入websocket链接地址"
            />
            <el-button type="primary" @click="onSendLink">发送链接请求</el-button>
          </div>
          <!-- 用户管理 -->
          <div class="user-info-style">
            <div class="user-info-style_username">
              <span> 用户名: </span>
              <el-input type="text" v-model="userInfo.username" />
            </div>
            <div class="user-info-style_password">
              <span> 密码: </span> <el-input type="password" v-model="userInfo.password" id="" />
            </div>
            <div class="user-info-style_operate">
              <el-button @click="onLogin" :disabled="state.wsStatus != 'OPEN'">登录</el-button>
              <el-button @click="onRegister" :disabled="state.wsStatus != 'OPEN'">注册</el-button>
            </div>
          </div>
          <!-- 聊天窗口 -->
          <ChatWindow
            @onSend="onSend"
            :msgList="userInfo.msgList"
            :loginName="userInfo.loginName"
            :state="state.wsStatus"
          />
        </div>
        <!-- 右侧选择列表 -->
        <div class="right">
          <UserList
            :userList="userInfo.userList"
            :loginName="userInfo.loginName"
            :state="state.wsStatus"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent, watchEffect } from 'vue'
  import { useWebSocket } from '@vueuse/core'
  import { WebsocketService } from './service/websocket'
  import ChatWindow from './components/ChatWindow.vue'
  import UserList from './components/UserList.vue'
  import { ElMessage } from 'element-plus'
  export default defineComponent({
    name: 'CountDownPage',
    components: {
      ChatWindow,
      UserList
    },
    setup() {
      const userInfo = reactive({
        username: '',
        password: '',
        userList: [],
        loginStatus: false,
        loginName: '',
        msgList: []
      })

      const state = reactive({
        server: '101.35.223.68:3001',
        sendValue: '',
        recordList: [] as { id: number; time: number; res: string }[],
        wsStatus: '尚未连接' as any,
        wsData: null as any,
        wss: null as any
      })

      // 监听函数
      watchEffect(() => {
        if (state.wss) {
          state.wss.onData()
        }
      })

      const vueEvent = (event, data) => {
        switch (event) {
          case 'register':
            {
              ElMessage({
                message: data.message,
                type: data.status == 200 ? 'success' : 'warning'
              })
            }
            break
          case 'login':
            {
              ElMessage({
                message: data.message,
                type: data.status == 200 ? 'success' : 'warning'
              })
              if (data.status == 200) {
                console.log('data:', data)
                // 登录成功获取用户列表
                userInfo.loginName = data.name
                state.wss.send('getUserList', '')
                state.wss.send('getMssageList', '')
              }
            }
            break
          case 'getUserList':
            {
              const dataList = data.message.map((item) => {
                return {
                  data: item
                }
              })
              userInfo.userList = dataList
            }
            break
          case 'getMessage':
            {
              userInfo.msgList.push(data.data as never)
            }
            break
          case 'getMssageList':
            {
              console.log('获取到的数据:', data.message)
              userInfo.msgList = data.message
            }
            break

          default: {
            ElMessage({
              message: '当前事件并未被处理',
              type: 'warning'
            })
          }
        }
      }

      const webSocketInit = () => {
        const { status, data, send, close, open } = useWebSocket(`ws://${state.server}`, {
          autoReconnect: false,
          heartbeat: false
        })
        state.wsData = data
        state.wsStatus = status
        state.wss = new WebsocketService(status, data, send, close, open)
        state.wss.setEvent(vueEvent)
      }

      const onSendLink = () => {
        webSocketInit()
      }

      const onSend = (data) => {
        console.log('点击发送:', data.contentText)
        state.wss.send('send', data.contentText)
      }

      const onLogin = () => {
        const query = {
          username: userInfo.username,
          password: userInfo.password
        }
        state.wss.send('login', query)
      }

      const onRegister = () => {
        const query = {
          username: userInfo.username,
          password: userInfo.password
        }
        state.wss.send('register', query)
      }

      return {
        state,
        onSendLink,
        userInfo,
        onLogin,
        onRegister,
        vueEvent,
        onSend
      }
    }
  })
</script>

<style lang="scss" scoped>
  .webscoket-style {
    display: flex;
    min-width: 740px;
    min-height: 100px;
    .left {
      flex: 1;
    }
    .right {
      width: 300px;
      margin-left: -10px;
      height: 100px;
    }
  }

  .link-address-wrapper {
    display: flex;
    height: 32px;
    .link-address-wrapper_title {
      line-height: 32px;
      margin-right: 20px;
    }
    .link-address-wrapper_input {
      width: 180px;
      margin-right: 20px;
    }
  }

  .user-info-style {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 400px;
    flex-direction: column;
    display: flex;
    .user-info-style_username {
      display: flex;
      height: 32px;
    }
    .user-info-style_password {
      margin-top: 10px;
      display: flex;
      height: 32px;
    }
    span {
      width: 100px;
    }
    .user-info-style_operate {
      margin-top: 10px;
    }
  }
</style>
