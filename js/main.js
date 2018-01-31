"use strict"
var output;
// original question
var range = [2, 3, 4, 5, 6, 7, 8, 9];
// Basic binary operatons
var add = (x, y) => x + y; add.toString = () => "+";
var sub = (x, y) => x - y; sub.toString = () => "-";
var mul = (x, y) => x * y; mul.toString = () => "*";
var div = (x, y) => x / y; div.toString = () => "/";
var binops = [add, sub, mul, div];
// // Basic unary opeartions
// var id = (x) => x;
// var neg = (x) => (-x);
// var sqrt = (x) => Math.sqrt(1);

var appendOutput = function(text, cssClass) {
  var li = document.createElement("li");
  output.appendChild(li);
  
  li.innerText = text;
  // always monospace for now, maybe this should be an option
  li.classList.add("monospace");
  if (cssClass !== undefined) {
    li.classList.add(cssClass);
  }
  
  return li;
}

var search = function() {
  range.forEach(
    function(i) {
      appendOutput(i + ":", "bold");
      binops.forEach(
        function(f) {
          binops.forEach(
            function(g) {
              var m = g(f(i, i), i); // avoids eval and cleaner
              var li = appendOutput(["("+i, f, i+")", g, i, "=", m].join(" "), m === 6 ? "highlight" : undefined);
            }
          );
        }
      );
    }
  );
}

var filter = function() {
  Array.from(output.children).forEach(
    function filterClass(li) {
      if (!(li.classList.contains("highlight") || li.classList.contains("bold"))) {
        output.removeChild(li);
      }
    }
  );
}

var clearOutput = function() {
  output.innerHTML = "";
}

var init = function() {
  output = document.getElementById("output");
}
