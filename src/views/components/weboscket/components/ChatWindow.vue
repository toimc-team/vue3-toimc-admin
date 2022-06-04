<template>
  <div class="chat-window-style">
    <div class="window-title">websocket聊天室</div>
    <div class="chat-window-list">
      <div
        class="content-wrapper"
        :class="{ 'content-wrapper-slfe': item.userName === loginName }"
        v-for="(item, index) in msgList"
        :key="index"
      >
        <div class="name-time" v-if="item.userName !== loginName">
          <div class="time">{{ item.time }}</div>
          <div class="name">{{ item.userName }}</div>
        </div>
        <div class="name-time" v-else>
          <div class="name">{{ item.userName }}</div>
          <div class="time">{{ item.time }}</div>
        </div>
        <div class="content-styel">
          <span>{{ item.value }}</span>
        </div>
      </div>
    </div>
    <div class="chat-window-operate">
      <el-input v-model="sendText.contentText" />
      <el-button type="primary" :disabled="state != 'OPEN' || loginName == ''" @click="onSend"
        >发送</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    emits: ['onSend'],
    props: {
      // 数据源
      msgList: {
        type: Array as PropType<any[]>,
        defalut: () => {
          return []
        }
      },
      loginName: {
        type: String,
        defalut: ''
      },
      state: {
        type: String,
        defalut: ''
      }
    },
    setup(props, { emit }) {
      props
      let sendText = reactive({
        contentText: ''
      })
      const onSend = () => {
        emit('onSend', sendText)
        sendText.contentText = ''
      }
      return { sendText, onSend }
    }
  })
</script>

<style lang="scss" scoped>
  .chat-window-style {
    width: 400px;
    height: 300px;
    background: #333;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .window-title {
    height: 30px;
    background: #74777c;
    width: 100%;
    line-height: 30px;
    text-align: center;
  }
  .chat-window-operate {
    display: flex;
  }
  .chat-window-list {
    overflow: auto;
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: flex-start;
    color: aliceblue;
  }

  .name-time {
    display: flex;
    .name {
      margin: 0px 10px;
      line-height: 14px;
      font-size: 14px;
    }
    .time {
      line-height: 14px;
      font-size: 8px;
    }
  }
  .content-styel {
    margin-top: 4px;
    max-width: 200px;
    span {
      display: inline-block;
      font-size: 18px;
      text-align: center;
      background: rgb(65, 104, 171);
      border-radius: 4px;
      min-width: 120px;
    }
  }
  .content-wrapper {
    margin-top: 10px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    word-break: break-all;
  }

  .content-wrapper-slfe {
    align-self: flex-end;
    .content-styel {
      align-self: flex-start;
      span {
        background: greenyellow;
        color: #000;
      }
    }
  }
</style>
