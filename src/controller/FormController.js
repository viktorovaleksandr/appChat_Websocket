import $ from 'jquery';

import {FormView} from '../view/FormView.js';
import {FormModel} from '../model/FormModel.js';

export class FormController {
   constructor() {
      this.formView = new FormView({
         sendServerMessage: (newMessage) => this.sendServerMessage(newMessage)
      });
      this.formModel = new FormModel({
         showServerMessage: (messageData) => this.showServerMessage(messageData)
      });
   }
   
   sendServerMessage(newMessage) {
      this.formModel.outgoingServerMessage(newMessage);
      // console.log('SEND_MESSAGE', newMessage);
   }

   showServerMessage(messageData) {
      this.formView.renderMessage(messageData);
   }
}