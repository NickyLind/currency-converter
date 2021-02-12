import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './../src/conversion.js';

async function CAD()  {
  let convert = await CurrencyExchange.aquireCurrency();
  if (convert.result) {
    let USD = $("#currency").val();
    let CAD = `${convert.conversion_rates.CAD}`;
    let rate =  parseFloat(USD * CAD).toFixed(2);
    $("#output").append(`Here is your USD converted to CAD: ${rate}`);
  } else {
    $("#output").append(`there was an error: ${convert}`);
  }
}



$(document).ready(function()  {
  $("#CAD").click(function() {
    $("#output").empty();
    CAD();
  });
  $("#EUR").click(function() {
    $("#output").empty();
  });
  $("#ISK").click(function() {
    $("#output").empty();
  });
  $("#JPY").click(function() {
    $("#output").empty();
  });
  $("#DKK").click(function() {
    $("#output").empty();
  });
});