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

// calculates and appends the result to output
var search = function() {
  range.forEach(
    (i) => {
      var li = document.createElement("li");
      var di = document.createElement("div");
      var ul = document.createElement("ul");
      output.appendChild(li);
        li.appendChild(di);
        li.appendChild(ul);
      
      di.innerText = i;
      di.classList.add("numheading");
      
      binops.forEach(
        (f) => {
          binops.forEach(
            (g) => {
              var m = g(f(i, i), i); // avoids eval and cleaner
              var li = document.createElement("li");
              var di = document.createElement("div");
              li.appendChild(di);
              
              di.innerText = ["("+i, f, i+")", g, i, "=", m].join(" ");
              di.classList.add(m === 6 ? "found" : "notfound");
              
              ul.appendChild(li);              
            }
          );
        }
      );
    }
  );
}

// recursivly filter a htmlelem removing 
var filterClassList = function(htmlelem, classList) {
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
