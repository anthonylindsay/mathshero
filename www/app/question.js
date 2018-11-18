define(function () {
  var correctAnswer;
  var questionString;

  function setCorrectAnswer(x) {
    correctAnswer = x;
  }
  return {
    correctAnswer: correctAnswer,
    questionString: questionString,
    getCorrectAnswer: function() {
      return correctAnswer;
    },
    setCorrectAnswer: setCorrectAnswer,
    getQuestion: function ($settings) {
      var a = this.getNumber();
      var b = this.getNumber();
      var op = this.getOp($settings);
      questionString = a + ' ' + op + ' ' + b;
      this.setCorrectAnswer(eval(questionString));
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
    }
  };
});
