import $ from 'jquery';

import {FormView} from '../view/FormView.js';
import {FormModel} from '../model/FormModel.js';

export class FormController {
   constructor() {
      this.formView = new FormView({
         sendServerMessage: (formData) => this.sendServerMessage(formData)
      });
      this.formModel = new FormModel({
         incomingServerMessage: (message) => this.incomingServerMessage(message)
      });
   }
   
   sendServerMessage(formData) {

         const sendMessageEvent = {
            type: 'SEND_MESSAGE',
            payload: {
                message: formData.message,
                author: formData.author
         }
      }

      const json = JSON.stringify(sendMessageEvent);
      this.formModel.socket.send(json);
   }

   incomingServerMessage(message) {
      this.formView.renderMessage(message);
   }
}