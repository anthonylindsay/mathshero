define(function () {
  var correctAnswer;
  var questionString;
  var a;
  var b;
  var op;

  function setCorrectAnswer(x) {
    correctAnswer = x;
  }
  return {
    correctAnswer: correctAnswer,
    questionString: questionString,
    getCorrectAnswer: function() {
      return correctAnswer;
    },
    getQuestion: function (settings) {
      op = this.getOp(settings);
      a = this.getNumber(op);
      b = this.getNumber(op);
      if (op == '+' || op == '*') {
        questionString = a + ' ' + op + ' ' + b;
        setCorrectAnswer(eval(questionString));
      }
      else if (op == '-') {
        if (a > b) {
          questionString = a + ' ' + op + ' ' + b;
        }
        else {
          questionString = b + ' ' + op + ' ' + a;
        }
        setCorrectAnswer(eval(questionString));
      }
      // Division.
      else {
        var product = a * b;
        questionString = product + ' &#247; ' + a;
        setCorrectAnswer(b);
      }
      return '<span class="question">' + questionString + ' = ?</span>';
    },
    getNumber: function (op) {
      var min = 0;
      if (op == '/') {
        min = 1;
      }
      var max = 12;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getOp: function (settings) {
      var ops = settings.getSettings();
      var chosenOps = [];
      Object.keys(ops).forEach(function(key) {
        if (ops[key] == 1) {
          chosenOps.push(key);
        }
      });
      return chosenOps[Math.floor(Math.random() * chosenOps.length)];;
    },
    clearInput: function () {
      var input = document.getElementById('answer-input');
      input.value = '';
      input.focus();
    }
  };
});
