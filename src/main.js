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

     $("#word-count").text("The number of words in total: " + newEntry.wordCount());
     $("#count").text("The number of vowels and consonants: " + newEntry.count());
  });
});
