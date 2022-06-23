export default class WallSocket {
  socket = null
  PRODUCT_DETECTED = 1
  PRODUCT_LOST = 0

  constructor(onProductDetected, onProductLost) {
    this.socket = new WebSocket('ws:localhost:8088')// ws:localhost:8088 // ws://192.168.45.65:80/tag_sensor

    this.socket.onmessage = (message) => {
      try {
        const json = JSON.parse(message.data)
        /*
        {
          "tx": {
            "mac": "22:0B:00:00:07:00"
          },
          "header": {
            "child": "tag_sensor",
            "cmd": "set",
            "type": "rfid_tag"
          },
          "payload": {
            "presence": 1,
            "uid": "67ccd4df"
          }
        }
        */
        if (json.payload.presence === this.PRODUCT_DETECTED) {
          // onProductDetected(json.payload.uid)
          onProductDetected(Math.ceil(Math.random() * 3))
        } else if (json.payload.presence === this.PRODUCT_LOST) {
          onProductLost()
        }
      } catch (e) {
        console.log('exception', e)
      }
    }
  }
}
