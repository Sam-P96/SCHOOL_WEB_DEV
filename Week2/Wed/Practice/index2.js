let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter(isEven);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

// so you can think of the filter method as a loop that goes through each element in the array and applies the callback function to it.
// if the callback function returns true, the element is included in the new array, otherwise it is excluded.

