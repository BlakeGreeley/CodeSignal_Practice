// Given an array of integers, find the pair of adjacent elements 
// that has the largest product and return that product.

inputArray = [3, 6, -2, -5, 7, 3];

function solution(inputArray) {
    const x = inputArray[0] * inputArray[1];
    const y = inputArray[2] * inputArray[3];
    const z = inputArray[4] * inputArray[5];
    const a = [x, y, z]
    return Math.max(a);
}

console.log(solution(inputArray));
