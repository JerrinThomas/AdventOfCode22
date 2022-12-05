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
var player;
var score = 0;
data.forEach((game,i) => {
  [player1, player2] = game.split(' ');
  const opponent = abcPointMap.get(player1)
  if(player2 === 'Y'){
    // draw
    score += (opponent + drawSocre);
  } else if (player2 === 'Z') {
    // win
    player = opponent === 3 ? 1: opponent + 1;
    score += (player + winScore);
  } else if (player2 === 'X'){
    // lose
    player = opponent === 1 ? 3: opponent - 1;
    score += player;
  }
})
console.log(score);