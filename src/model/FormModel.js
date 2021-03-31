export class FormModel {
   constructor(config) {
     this.config = config;
     this.socket = new WebSocket('ws://localhost:7777');

      this.socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        this.config.incomingServerMessage(message);
      }
   }
}