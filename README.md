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
`e :: ZZ -> ZZ` 

Such that:

```
e(g(d(f(a(n), b(n))), c(n)))  
=  
e(g(
  d(f(a(n), b(n))), 
  c(n)
)) 
= 
m
```

or

```
e(g(a(n)), d(f(b(n), c(n))))  
=  
e(g( 
  a(n),
  d(f(b(n), c(n)))
)) 
= 
m
```

### Searching

let:

`f (- FF`  
`g (- GG`  
`a (- AA`  
`b (- BB`  
`c (- CC`  
`d (- DD`  
`e (- EE`  

`FF = GG`  
`AA = BB = CC = DD`

### Composition

V- e, g E:

`h :: ZZ -> ZZ -> ZZ`  
`h = e . g`

V- d, f E:

`i :: ZZ -> ZZ -> ZZ`
`i = d . f` 

### Commutative

`f`, `g` is commutative 

=>

`g(f(a(n), b(n)), c(n)) = m = f(g(a(n), b(n)), c(n))`

This property is not the case when adding division, but can be used as an optimisation.

### Commutative Composition

`a + b = a + -b`

This can also be used as an optimisation.

### Extension

What about other `n (- ZZ`?  
What about other `m (- ZZ`?
