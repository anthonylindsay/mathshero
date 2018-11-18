define (function () {
  var answer;
  var correctAnswer;

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

  var checkCorrect = function (answer, correctAnswer) {
    if (parseInt(answer) == correctAnswer) {
      return 'Correct!';
    }
    else {
      return 'Wrong!';
    }
  }

  function printAnswer(isCorrect) {

  }

  return {
    getCorrectAnswer: function() {},
    setCorrectAnswer: function() {},
    getListener: function (elem, correctAnswer, render) {
      // @todo correctAnswer needs to get passed to the validator
      elem.addEventListener("click", function(e) {
        e.preventDefault();
        // @todo send back something to trigger submission.
        var answer = document.getElementById('answer-input').value;
        var checkValid = validateAnswer(answer);
        if (checkValid != 'valid') {
          return check;
        }
        var isCorrect = checkCorrect(answer, correctAnswer);
        if (isCorrect) {
          render(isCorrect, 'messages')
          return isCorrect;
        }
      });
    }
  }
});
