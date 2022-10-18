// Given the string, check if it is a palindrome.

inputString = 'aabaa'; 

function solution(inputString) {
    const x = inputString.split('')
    const y = x.reverse()
    return y == x
}

console.log(solution(inputString));
