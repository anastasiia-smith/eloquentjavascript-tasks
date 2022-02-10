//FizzBuzz

for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
  	console.log("FizzBuzz");
  } else if (n % 3 === 0) {
    console.log("Fizz");
  } else if (n % 5 === 0) {
    console.log("Buzz");
  } else {
  	console.log(n);
  }
}

//Chess Board

let chessBoardString = "";
let size = 16;
for (let i = 0; i < size*size; i += size) {
  for (let n = 0; n < size; n++) {
    if (chessBoardString.length % 2) chessBoardString += "#";
    else chessBoardString += " ";
  }
  chessBoardString += "\n";
}
console.log(chessBoardString);

// The sum of a range

function range(start, end, step = 1) {
  let array = [];
  if (step > 0) {
  	for (let i = start; i <= end; i += step) array.push(i);
  }	else {
  	for (let i = start; i >= end; i -= (step * -1)) array.push(i);	
  }	
  return array;
}

function sum(arrayOfNumbers) {
  let sum = 0;
  for (let value of arrayOfNumbers) {
    sum += value;
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Reversing an array

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let halfArray = Math.floor(array.length / 2);
  for(let i = 0; i < halfArray; i++) {
    let left = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = left;
  }
  
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// A list

function arrayToList(array) {
  let list = {};
  for (let i = 0; i < array.length; i++) {
    list = {value: array[i], rest: arrayToList(array.slice(i + 1)) || null}
    return list;
  }
}

function listToArray(list) {
  let array = [];
  for (let i = list; i; i = i.rest) {
  	array.push(i.value);
  }
  return array;
}

function prepend(element, list) {
  return {
  	value: element,
    rest: list
  }
}

function nth(list, n) {
  let counter = 0;
  for (let i = list; i; i = i.rest) {
    counter += 1;
    if (counter === n) return i.value;
    else return "doesn't exist";
  }
}

//console.log(arrayToList([10, 20));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20

// Deep comparison

function isObject(object) {
  return object != null && typeof object === 'object';
}

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
} 


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true