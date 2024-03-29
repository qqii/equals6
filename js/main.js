"use strict"
var output;
// original question (see readme)
var NN = [2, 3, 4, 5, 6, 7, 8, 9];
var m = 6;
// Vinary operatons
var add = (x, y) => x + y; add.s = (x, y) => "("+x+"+"+y+")";
var sub = (x, y) => x - y; sub.s = (x, y) => "("+x+"-"+y+")";
var mul = (x, y) => x * y; mul.s = (x, y) => "("+x+"*"+y+")";
var div = (x, y) => x / y; div.s = (x, y) => "("+x+"/"+y+")";
var bop = [add, sub, mul, div];
var FF = bop;
var GG = bop;;
// Unary operations
var id  = (x) => x; id.s = (x) => x;
var neg = (x) => -x; neg.s = (x) => "-"+x;
var sqrt = (x) => Math.sqrt(x); sqrt.s = (x) => "&#8730;"+x; // sqrt
var uop = [id, neg, sqrt];
var AA = uop;
var BB = uop;
var CC = uop;
var DD = uop;
var EE = uop;

// calculates and appends the result to output
var search = function(filter) {
  if (filter === undefined) filter = (a) => false;
  
  NN.forEach((n) => {
    var li = document.createElement("li");
    var di = document.createElement("div");
    var ul = document.createElement("ul");
    output.appendChild(li);
      li.appendChild(di);
      li.appendChild(ul);
    
    di.innerText = n;
    di.classList.add("numheading");
    
    try {
      AA.forEach((a) => {
        BB.forEach((b) => {
          CC.forEach((c) => {
            DD.forEach((d) => {
              EE.forEach((e) => {
                FF.forEach((f) => {
                  GG.forEach((g) => {
                    {
                      var mp = e(g(d(f(a(n), b(n))), c(n)));
                      if (!filter(n, mp)) {
                        var li = document.createElement("li");
                        li.innerHTML = e.s(g.s(d.s(f.s(a.s(n), b.s(n))), c.s(n)))+"="+mp;
                        li.classList.add(mp === m ? "found" : "notfound");
                        ul.appendChild(li); 
                      }     
                    };
                    {
                      var mp = e(g(a(n), d(f(b(n), c(n)))));
                      if (!filter(n, mp)) {
                        var li = document.createElement("li");
                        li.innerHTML = e.s(g.s(a.s(n), d.s(f.s(b.s(n), c.s(n)))))+"="+mp;
                        li.classList.add(mp === m ? "found" : "notfound");
                        ul.appendChild(li);
                      }
                    }
                  });
                });
              });
            });
          });    
        });
      });
    } catch (e) {
      // lol early exit staregy
    }
  });
}

var earlyExit = function() {
  var found = {};
  NN.forEach((n) => {
    found[n] = false;
  });
  var foo = function(n, mp) {
    if (found[n]) {
      throw undefined;
    } else {
      if (mp === m) {
        found[n] = true;
      }
      return false;
    }
  }
  return foo;
}

var onlyM = function() {
  var foo = function(n, mp) {
    return mp !== m;
  }
  return foo;
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
