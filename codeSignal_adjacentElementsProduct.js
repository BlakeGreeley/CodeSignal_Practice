// Given an array of integers, find the pair of adjacent elements 
// that has the largest product and return that product.

inputArray = [3, 6, -18, -5, 7, 3];

function solution(inputArray) {
    const newArray = []
    for(let i = 0; i < inputArray.length - 1; i++) {
        const x = inputArray[i] * inputArray[i+1]
        newArray.push(x)
    }
    console.log(newArray)

    return newArray.reduce((currentValue, newValue) => {
        return Math.max(currentValue, newValue)
    })
}
console.log(solution(inputArray));

// another faster solution

function solution(inputArray) {
    const newArray = []
    for(let i = 0; i < inputArray.length - 1; i++) {
        const x = inputArray[i] * inputArray[i+1]
        newArray.push(x)
    }
    return Math.max(...newArray)
}

console.log(solution(inputArray));

// another solution


function solution(inputArray) {
    const x = inputArray
    const y = x.map((value, index) => value * x[index+1])
    const z = y.slice(0, -1)
    return Math.max(...z)
}

console.log(solution(inputArray));

// if you wanted to find the smallest output
inputSmallArray = [3, 6, -18, -5, 7, 3];

function small(inputSmallArray) {
    const x = inputSmallArray
    const y = x.map((value, index) => value * x[index+1])
    const z = y.slice(0, -1)
    return Math.min(...z)
}

console.log(small(inputSmallArray));
