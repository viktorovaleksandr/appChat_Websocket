export class FormModel {
   constructor(config) {
     this.config = config;
     this.socket = new WebSocket('ws://localhost:7777');
     this.outgoingServerMessage();
     this.incomingServerMessage();
   }

   // отправляем сообщение на сервер
   outgoingServerMessage(newMessage) {
      console.log('SEND_SERVER_MESSAGE', newMessage);
      
      this.socket.onopen = () => {
         
         const sendMessageEvent = {
            type: 'SEND_MESSAGE',
            payload: {
                author: 'Alex',
                message: 'Hello World'
            }
         };

         const json = JSON.stringify(sendMessageEvent);
         this.socket.send(json);
      }
   }

   // получаем сообщение с сервера
   incomingServerMessage() {
      this.socket.onmessage = (event) => {
         const messageData = JSON.parse(event.data);
         this.config.showServerMessage(messageData)
      }
   }
}