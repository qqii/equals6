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

// return a monospaced list element
var monoli = function(text) {
  var li = document.createElement("li");
  li.classList.add("monospace");
  li.innerText = text;
  return li;
}

var monoliul = function(text) {
  var li = monoli(text);
  var ul = document.createElement("ul");
  li.appendChild(ul);
  return [li, ul];
}

var bold = function(htmlelem) {
  htmlelem.classList.add("bold");
  return htmlelem;
}

var normal = function(htmlelem) {
  htmlelem.classList.add("normal");
  return htmlelem;
}

var highlight = function(htmlelem) {
  htmlelem.classList.add("highlight");
  return htmlelem;
}

var search = function() {
  range.forEach(
    function(i) {
      // add new ul for i
      var liul = monoliul(i);
      bold(liul[0]);
      // add it to the ouput
      output.appendChild(liul[0]);
      // change head to child
      var head = liul[1];
      
      binops.forEach(
        function(f) {
          binops.forEach(
            function(g) {
              var m = g(f(i, i), i); // avoids eval and cleaner
              var li = monoli(["("+i, f, i+")", g, i, "=", m].join(" "));
              if (m === 6) {
                bold(highlight(li));
              } else {
                normal(li);
              }
              head.appendChild(li);              
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
