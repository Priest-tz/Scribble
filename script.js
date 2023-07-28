"use strict";

function run() {
  let htmlCode = document.querySelector("#html-code").value;
  let cssCode = "<style>" + document.querySelector("#css-code").value + "</style>";
  let jsCode = document.querySelector("#js-code").value;
  let output = document.querySelector("#output");
  
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(jsCode);
}

document.querySelector("#html-code").addEventListener("keyup", run);
document.querySelector("#css-code").addEventListener("keyup", run);
document.querySelector("#js-code").addEventListener("keyup", run);

// Function to show the loader
function showLoader() {
  document.getElementById("loader").style.display = "block";
}

// Function to hide the loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}