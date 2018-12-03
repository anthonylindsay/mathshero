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
    getQuestion: function ($settings) {
      a = this.getNumber();
      b = this.getNumber();
      op = this.getOp($settings);
      questionString = a + ' ' + op + ' ' + b;
      setCorrectAnswer(eval(questionString));
      return '<span class="question">' + questionString + ' = ?</span>';
    },
    getNumber: function () {
      var min = 0;
      var max = 12;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getOp: function ($settings) {
      // @todo use settings;
      return '+';
    },
    clearInput: function () {
      var input = document.getElementById('answer-input');
      input.value = '';
      input.focus();
    }
  };
});
