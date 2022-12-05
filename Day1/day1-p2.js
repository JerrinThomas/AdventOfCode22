const fs = require('fs')
var input = fs.readFileSync("./input.txt").toString().split(/\n\s*\n/);
let sumArray = []
var sum=0
input.forEach((subArray, i) => {
    var splitted = subArray.split('\r\n')
    sum = 0;
    splitted.forEach((value, j) => {
        sum += Number(value);
    })
    sumArray.push(sum)
})
sumArray.sort((a,b) => a - b)
sumArray.reverse()
console.log(sumArray[0] + sumArray[1] + sumArray[2]);