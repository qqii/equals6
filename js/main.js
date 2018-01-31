"use strict"
var output;

var init = function() {
  output = document.getElementById("output");
}

var appendOutput = function(text) {
  var li = document.createElement("li");
  li.innerText = text;
  output.appendChild(li);
}

var addOutput = function() {
  console.log("add");
  appendOutput((new Date()).toLocaleTimeString());
}

var clearOutput = function() {
  console.log("clear");
  output.innerHTML = "";
}
