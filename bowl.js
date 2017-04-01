var bowling = function(x) {
  // console.log(x);
  var score = 0;

  score = x[0].ball1 + x[0].ball2;
  return score;

};
  var frames = [{ball1: 0, ball2: 0}];

//   console.log(frames);
// console.log(bowling(frames));
module.exports = bowling;