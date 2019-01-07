define (function () {
  var answer;

  var validateAnswer = function (answer) {
    if (typeof(parseInt(answer)) !== 'number') {
      return 'Not a number';
    }
    else if (answer.length === 0) {
      return 'Answer empty';
    }
    else {
      return 'valid';
    }
  };

  var checkCorrect = function (candidateValue, correctAnswer, scoreTracker) {

    if (parseInt(candidateValue) == correctAnswer) {
      scoreTracker.incrementCorrect();
      return 'Correct!';
    }
    else {
      scoreTracker.incrementIncorrect();
      return 'Wrong!';
    }
  }

  function printAnswer(isCorrect) {

  }

  return {
    getCorrectAnswer: function() {},
    setCorrectAnswer: function() {},
    checkAnswer: function (question, render, scoreTracker) {
      var candidateValue = document.getElementById('answer-input').value;
      var checkValid = validateAnswer(candidateValue);
      if (checkValid != 'valid') {
        render('That is not a number!', 'messages');
        return;
      }
      var isCorrect = checkCorrect(candidateValue, question.getCorrectAnswer(), scoreTracker);
      if (isCorrect) {
        render(isCorrect, 'messages')
        return isCorrect;
      }
    }
  }
});
