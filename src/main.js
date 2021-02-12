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

async function EUR()  {
  let convert = await CurrencyExchange.aquireCurrency();
  if (convert.result) {
    let USD = $("#currency").val();
    let EUR = `${convert.conversion_rates.EUR}`;
    let rate =  parseFloat(USD * EUR).toFixed(2);
    $("#output").append(`Here is your USD converted to EUR: ${rate}`);
  } else {
    $("#output").append(`there was an error: ${convert}`);
  }
}

async function ISK()  {
  let convert = await CurrencyExchange.aquireCurrency();
  if (convert.result) {
    let USD = $("#currency").val();
    let ISK = `${convert.conversion_rates.ISK}`;
    let rate =  parseFloat(USD * ISK).toFixed(2);
    $("#output").append(`Here is your USD converted to ISK: ${rate}`);
  } else {
    $("#output").append(`there was an error: ${convert}`);
  }
}

async function JPY()  {
  let convert = await CurrencyExchange.aquireCurrency();
  if (convert.result) {
    let USD = $("#currency").val();
    let JPY = `${convert.conversion_rates.JPY}`;
    let rate =  parseFloat(USD * JPY).toFixed(2);
    $("#output").append(`Here is your USD converted to JPY: ${rate}`);
  } else {
    $("#output").append(`there was an error: ${convert}`);
  }
}

async function DKK()  {
  let convert = await CurrencyExchange.aquireCurrency();
  if (convert.result) {
    let USD = $("#currency").val();
    let DKK = `${convert.conversion_rates.DKK}`;
    let rate =  parseFloat(USD * DKK).toFixed(2);
    $("#output").append(`Here is your USD converted to DKK: ${rate}`);
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
    EUR();
  });
  $("#ISK").click(function() {
    $("#output").empty();
    ISK();
  });
  $("#JPY").click(function() {
    $("#output").empty();
  });
  $("#DKK").click(function() {
    $("#output").empty();
  });
});