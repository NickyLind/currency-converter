import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './../src/conversion.js';

async function Convert() {
  let convert = await CurrencyExchange.aquireCurrency();
  if (convert.result === "success") {
    let USD = $("#currency").val();
    let country = $("#country").val().toUpperCase();
    let conversionCountry = convert.conversion_rates[country];
    if (conversionCountry === undefined) {
      $("#outputExchange").append("please enter a valid country code");
    } else {
      let rate = parseFloat(USD * conversionCountry).toFixed(2);
      $("#outputExchange").append(`Here is ${country}'s current exchange rate: ${conversionCountry}`);
      $("#outputConvert").append(`Here is your USD converted to ${country}: ${rate}`);
    }
  } else {
    $("#outputExchange").append(`there was an error: ${convert["error-type"]}`);
  }
}

async function ListRates()  {
  let list = await CurrencyExchange.aquireCurrency();
  let allCountries = list.conversion_rates;
  if  (list.result === "success") {
    for (const [country, value] of Object.entries(allCountries)) {
      $("#list").append(`${country}: ${value}<br>`);
    }
  } else {
    $("#list").append(`We are having trouble retrieving this information at this time. Error: "${list["error-type"]}"`);
  }
}

async function UpdateTime() {
  let time = await CurrencyExchange.aquireCurrency();
  if (time.result === "success")  {
    $(".time").append(`${time.time_last_update_utc}`);
  } else {
    $(".time").append(`There was an error processing this information. Error:  "${time["error-type"]}"`);
  }
}

window.onload = function()  {
  ListRates();
  UpdateTime();
};

$(document).ready(function () {
  $("#convert").click(function () {
    $("#outputExchange").empty();
    $("#outputConvert").empty();
    Convert();
  });
});