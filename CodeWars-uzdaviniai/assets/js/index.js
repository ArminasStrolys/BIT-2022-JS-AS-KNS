/*
Given two integers a and b, which can be positive or negative, find the sum
of all the integers between and including them and return it. If the two
numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum( a,b )
{
  if (a == b){
    return a
  } else if (a < b) {
    let c = b - a
    let d = a
    console.log('c ' + c);
    for (i = 0; i >= c; i++)
    {
      console.log('i ' + i);
      d += c
      c++
    }
    return d
  } else {
  
  }
}

getSum(6, 16)
console.log(getSum(6, 16));
console.log('c ' + c);
console.log('b ' + b);
console.log('d ' + d);