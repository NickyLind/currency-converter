import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './../src/conversion.js';

async function Convert()  {
  let convert = await CurrencyExchange.aquireCurrency();
  if (convert.result) {
    let USD = $("#currency").val();
    let country = $("#country").val();
    let conversionCountry = convert.conversion_rates[country];
    console.log(conversionCountry);
    let rate =  parseFloat(USD * conversionCountry).toFixed(2);
    console.log(rate);
    $("#outputExchange").append(`Here is ${country}'s current exchange rate: ${conversionCountry}`);
    $("#outputConvert").append(`Here is your USD converted to ${country}: ${rate}`);
  } else {
    $("#outputExchange").append(`there was an error: ${convert}`);
  }  
}

$(document).ready(function()  {
  $("#convert").click(function() {
    $("#outputExchange").empty();
    $("#outputconvert").empty();
    Convert();
  });
});