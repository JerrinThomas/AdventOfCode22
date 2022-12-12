const fs = require('fs')
var data = fs.readFileSync("./input.txt").toString().split('\r\n');
const commonItems = [];
data.forEach((rucksack) => {
    let compartmentOne = rucksack.slice(0, rucksack.length / 2);
    let compartmentTwo = rucksack.slice(rucksack.length / 2, rucksack.length);
    for (let itemType of compartmentOne) {
        if(compartmentTwo.includes(itemType)){
            commonItems.push(itemType)
            break;
        }
    }
})
let sum = 0;
commonItems.forEach((item) => {
    n = (item == item.toLowerCase()) ? 96 : 38;
    sum += (item.charCodeAt(0) - n);
})
console.log(sum);