# [equals6](https://qqii.github.io/equals6/)
Figuring out the =6 problem through brute force and javascript

## Problem

2 2 2 = 6  
3 3 3 = 6  
4 4 4 = 6  
5 5 5 = 6  
6 6 6 = 6  
7 7 7 = 6  
8 8 8 = 6  
9 9 9 = 6  

You may only add functions, not new numbers. 
Hint: use the square root.

## Formalisation Attempt

Given:

`n (- {2..6}`  
`m = 6`

Find:

`f :: ZZ -> ZZ -> ZZ`  
`g :: ZZ -> ZZ -> ZZ`  
`a :: ZZ -> ZZ`  
`b :: ZZ -> ZZ`  
`c :: ZZ -> ZZ`  
`d :: ZZ -> ZZ`  

Such that:

`d(g(f(a(n), b(n)), c(n))) = m`

### Composition

V- g, d E:

`h :: ZZ -> ZZ -> ZZ`  
`h = d . g`

`d = id` is valid.

### Commutative

`f`, `g` is commutative =>

`d(g(f(a(n), b(n)), c(n))) = m = d(f(g(a(n), b(n)), c(n)))`

Only `|FF x GG|` combinations needs to be considered.

### Extension

What about other `n (- ZZ`?  
What about other `m (- ZZ`?  
What restrictions are there on `FF = GG = {f | f :: ZZ -> ZZ -> ZZ}` will there be?
