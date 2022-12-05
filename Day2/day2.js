const fs = require('fs')
var data = fs.readFileSync("./input.txt").toString().split('\r\n');
// console.log(data)
var player1, player2;
const abcPointMap = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3]
  ]);
  const xyzPointMap = new Map([
    ["X", 1],
    ["Y", 2],
    ["Z", 3]
  ]);
const drawSocre = 3;
const winScore = 6;

var score = 0;
data.forEach((game,i) => {
  [player1, player2] = game.split(' ');
  const opponent = abcPointMap.get(player1)
  const player = xyzPointMap.get(player2)
  if(player === opponent){
    // draw
    score += (player + drawSocre);
  } else if ((player - opponent) === 1 || (player - opponent === -2)) {
    // win
    score += (player + winScore);
  } else {
    // lose
    score += player;
  }
})
console.log(score);
