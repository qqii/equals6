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

var appendOutput = function(text) {
  var li = document.createElement("li");
  li.innerText = text;
  output.appendChild(li);
}

var search = function() {
  range.forEach(
    function(i) {
      binops.forEach(
        function(f) {
          binops.forEach(
            function(g) {
              var m = g(f(i, i), i); // avoids eval and cleaner
              if (m == 6) {
                appendOutput(["("+i, f, i+")", g, i, "=", m].join(" "));  
              } else {
                appendOutput(["("+i, f, i+")", g, i, "=", m].join(" ")); 
              }
            }
          );
        }
      );
      
    }
  );
}

var clearOutput = function() {
  output.innerHTML = "";
}

var init = function() {
  output = document.getElementById("output");
}
