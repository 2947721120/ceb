import 'document-register-element/build/document-register-element.js';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';

import $ from 'jquery';
import template from './loader-umd.html';

$(() => $(template).appendTo($('#content')));
