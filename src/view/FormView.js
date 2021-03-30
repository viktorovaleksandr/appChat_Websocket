import $ from 'jquery';

export class FormView {
   constructor(config) {
      this.config = config;
      this.generateForm();
      this.onClickButtonSend();
	}

	generateForm() {	
      return $(`
      <div class="js-input-group input-group container col-md-4">
         <input type="text"  id="js-input-message" class="form-control" placeholder="Type new message...">
         <input type="text" id="js-input-author" class="form-control" placeholder="Author">
         <div class="input-group-prepend">
            <button type="button" id="js-button-send" class="btn btn-dark input-group-text">SEND</span>
         </div>
      </div>`).appendTo($('#app'));
   }

   renderMessage(messageData) {
      return $(`
      <h3>${messageData.payload.author}: <span class="badge badge-pill badge-light">${messageData.payload.message}</span></h3>
		`).insertAfter('.js-input-group');
	}

   onClickButtonSend() {
      $('#js-button-send').click(() => {
         const formData = this.getFormData();
         $('#js-input-message').val('');
         this.config.sendServerMessage(formData);
      });
   }

	getFormData() {
      return {
         message: $('#js-input-message').val(),
         author: $('#js-input-author').val()
      }
   }
}