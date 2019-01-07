define(function () {
  var scores = {
    'right': 0,
    'wrong': 0,
  };
  return {
    getScores: function() {
      return scores;
    },
    incrementCorrect: function() {
      scores.right++;
    },
    incrementIncorrect: function() {
      scores.wrong++;
    },
    printScore: function(render) {
      var scoreString = '<h3>Scores</h3><p>Correct: <span class="score">' + scores.right + '</span> | ';
      scoreString += 'Wrong: <span class="score">' + scores.wrong + '</span></p>';
      render(scoreString, 'scores');
    }
  };
});

// TODO: persistent stats;
