// Given a year, return the century it is in. The first century spans from the 
// year 1 up to and including the year 100, the second - from the year 101 up to 
// and including the year 200, etc.


year = 1000; 

function solution(year) {
    const x = year + 99
    const y = x/100
    const z = Math.floor(y)
    return z
}

console.log(solution(year));
