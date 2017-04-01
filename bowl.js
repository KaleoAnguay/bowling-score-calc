var bowling = function(frames) {

  var score = 0;
  function lastFrame() {
    score += frames[9].ball1 + frames[9].ball2 + frames[9].ball3;

  }

  for(var i = 0;i < frames.length; i++) {
    //for last frame
    if(frames[9].ball1 === 10 && i === 9) {
      lastFrame();
      break;
    }

    // for strikes
    if(frames[i].ball1 === 10) {
      score += frames[i].ball1 + frames[i + 1].ball1 + frames[i + 1].ball2;
    }
    // for spares
    if(frames[i].ball1 !== 10 && frames[i].ball1 + frames[i].ball2 === 10) {
      score += frames[i].ball1 + frames[i].ball2 + frames[i + 1].ball1;
    }
    //for anything other than spares and strikes
    if (frames[i].ball1 + frames[i].ball2 < 10) {
      score += frames[i].ball1 + frames[i].ball2;
    }
  }
  return score;
};

module.exports = bowling;