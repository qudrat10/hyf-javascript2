/*1.We saw that we can pass functions as arguments to other functions. 
Your task is to write a function that takes another function as an argument and runs it.*/

function foo(func) {
    // What to do here? 
  func();
}

function bar() {
console.log('Hello, I am bar!');
}
foo(bar);

/* You must write a function that takes 4 arguments. - A start value - An end value - A callback to call if the number is divisible by 3 - A callback to use if the number is divisible by 5

The function should generate an array containing values from start value to end value (inclusive).

Then the function should iterate over the array and call the first callback if the array value is divisible by 3

The function should call the second callback if the array value is divisible by 5

Both functions should be called if the array value is divisible by both 3 and 5 */ 


function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    var arr =[];
    for(var i=startIndex;i<=stopIndex;i++) {
        arr.push(i);
        if(i%3 === 0) {
            threeCallback(i);
        }
        if(i%5 === 0) {
            fiveCallback(i);
        }
    }
  
    return arr;
}
console.log(threeFive(10, 15, function(num) { 
  console.log(num +" is divisible by 3");},
  function (num) {
  console.log(num +" is divisible by 5"); 
 }));  

/* 5.1:-Write a function that would allow you to do this:
let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27*/

function createBase(baseNumber) {
  return function(N) {
    return baseNumber + N;
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

/*Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique values in it (so it removes the duplicate ones).*/
function remove_duplicate(arr){
  var obj={}, item;
  for (item of arr ){
    obj[item]=1;
  }
  return Object.keys(obj)
}

console.log(remove_duplicate(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']));
