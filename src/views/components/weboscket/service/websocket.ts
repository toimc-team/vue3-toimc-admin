import { WsInterface } from '../data/interface'
export class WebsocketService implements WsInterface {
  public wsStatus: any = null
  public wsSend: any = null
  public wsClose: any = null
  public wsOpen: any = null
  public wsData: any
  public vueEvent: any = null
  constructor(status, data, send, close, open) {
    this.wsStatus = status
    this.wsData = data
    this.wsSend = send
    this.wsClose = close
    this.wsOpen = open
  }

  onData() {
    if (this.wsData) {
      const webSocketObj = JSON.parse(this.wsData)
      const event = {
        heartbeat: this.heartbeat.bind(this),
        register: this.retunVueEvent.bind(this),
        login: this.retunVueEvent.bind(this),
        getUserList: this.retunVueEvent.bind(this),
        getMessage: this.retunVueEvent.bind(this),
        getMssageList: this.retunVueEvent.bind(this)
      }
      if (event[webSocketObj.event] != undefined) {
        event[webSocketObj.event]()
      }
    }
  }

  retunVueEvent() {
    const webSocketObj = JSON.parse(this.wsData)
    this.vueEvent(webSocketObj.event, webSocketObj)
  }

  send(event: string, obj: object | string) {
    const query = {
      event: event,
      data: obj
    }
    this.wsSend(JSON.stringify(query))
  }

  // 心跳检测
  heartbeat() {
    this.send('heartbeat', 'pong')
  }

  setEvent(event) {
    this.vueEvent = event
  }
}
