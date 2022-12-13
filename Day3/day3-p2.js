const fs = require('fs')
var data = fs.readFileSync("./input.txt").toString().split('\r\n');
const commonItems = [];
for(i=0; i< data.length; i=i+3) {
    for (let itemType of data[i]) {
        if(data[i+1].includes(itemType) && data[i+2].includes(itemType)){
            commonItems.push(itemType)
            break;
        }
    }
}
let sum = 0;
commonItems.forEach((item) => {
    n = (item == item.toLowerCase()) ? 96 : 38;
    sum += (item.charCodeAt(0) - n);
})
console.log(sum);