export class FormModel {
   constructor(config) {
     this.config = config;
     this.socket = new WebSocket('wss://my-chat-websocked-lesson22.herokuapp.com/');

      this.socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        this.config.incomingServerMessage(message);
      }
   }
}