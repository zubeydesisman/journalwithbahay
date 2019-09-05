import { Entry } from './journal.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedTitle = $("input#title").val();
    var inputtedBody = $("input#body").val();
    var newEntry = new Entry (inputtedTitle, inputtedBody);
     // newEntry.vowelCount();
    $("#result").text(newEntry.count());
  });
});
