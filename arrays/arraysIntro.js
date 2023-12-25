let myArray = [1, 2, 3, 4, 5];

console.log("Original Array:", myArray);

console.log("Element at index 2:", myArray[2]);

myArray[3] = 10;
console.log("Array after modifying element at index 3:", myArray);

myArray.push(6);
console.log("Array after adding element to the end:", myArray);

let poppedElement = myArray.pop();
console.log("Popped element:", poppedElement);
console.log("Array after removing element from the end:", myArray);

myArray.unshift(0);
console.log("Array after adding element to the beginning:", myArray);

let shiftedElement = myArray.shift();
console.log("Shifted element:", shiftedElement);
console.log("Array after removing element from the beginning:", myArray);

let indexOfThree = myArray.indexOf(3);
console.log("Index of element 3:", indexOfThree);

let removedElement = myArray.splice(2, 1);
console.log("Removed element at index 2:", removedElement);
console.log("Array after removing element at index 2:", myArray);

console.log("Array elements using forEach:");
myArray.forEach(function(element) {
  console.log(element);
});

let doubledArray = myArray.map(function(element) {
  return element * 2;
});
console.log("Array after doubling each element:", doubledArray);

let evenNumbers = myArray.filter(function(element) {
  return element % 2 === 0;
});
console.log("Even numbers in the array:", evenNumbers);
