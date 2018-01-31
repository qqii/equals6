"use strict"
var output;

var init = function() {
  output = document.getElementById("output");
}

var addOutput = function() {
  console.log("add");
  var li = document.createElement("li");
  li.innerText = "You've clicked the button, well done.";
  output.appendChild(li);
}

var clearOutput = function() {
  console.log("clear");
  output.innerHTML = "";
}
