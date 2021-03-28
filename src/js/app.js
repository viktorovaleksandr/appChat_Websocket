import $ from 'jquery';

import {FormController} from '../controller/FormController.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

$(() => {
	const controller = new FormController();
})


//1) обезательно ли делать send при socket.onopen?