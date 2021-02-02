import {Entry} from './entry.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


let entry = new Entry("Title","This is a short paragraph");

$("body").on("click", function() {
  entry.whatever();
});