"use strict"
var output;
// original question: d(g(f(a(n), b(n)), c(n))) = m (see readme)
var NN = [2, 3, 4, 5, 6, 7, 8, 9];
var m = 6;
// Basic binary operatons
var add = (x, y) => x + y; add.toString = () => "+";
var sub = (x, y) => x - y; sub.toString = () => "-";
var mul = (x, y) => x * y; mul.toString = () => "*";
var div = (x, y) => x / y; div.toString = () => "/";
var FF = [add, sub, mul, div];
var GG = FF;
// Unary operations
var neg = (x) => -x; neg.toString = () => "-"; // useless as an iunop 
// var sqrt = (x) => Math.sqrt(1);
var AA = [];
var BB = [];
var CC = [];
var DD = [];

// calculates and appends the result to output
var search = function() {
  NN.forEach(
    (i) => {
      var li = document.createElement("li");
      var di = document.createElement("div");
      var ul = document.createElement("ul");
      output.appendChild(li);
        li.appendChild(di);
        li.appendChild(ul);
      
      di.innerText = i;
      di.classList.add("numheading");
      
      FF.forEach(
        (f) => {
          GG.forEach(
            (g) => {
              var result = g(f(i, i), i); // avoids eval and cleaner
              var li = document.createElement("li");
              
              li.innerText = ["("+i, f, i+")", g, i, "=", result].join(" ");
              li.classList.add(result === m ? "found" : "notfound");
              
              ul.appendChild(li);
            }
          );
        }
      );
    }
  );
}

// recursivly filter a htmlelem removing 
var filterClass = function(className) {
  Array.from(
    document.getElementsByClassName(className)
  ).forEach(
    (e) => {
      e.parentElement.removeChild(e);
    }
  );
}

var clearOutput = function() {
  output.innerHTML = "";
}

var init = function() {
  output = document.getElementById("output");
}
