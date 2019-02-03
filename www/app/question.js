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
    // Generates the actual question string and answer.
    getQuestion: function (settings) {
      var op = this.getOp(settings);
      var tables = this.getTables(settings);
      // pass results to getNumber.
      var a = this.getNumber(op);
      var b = this.getNumber(op, tables);
      var mapping = settings.getMapping();
      var questionString = '';
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
      questionString = questionString.replace(op, mapping[op]);
      return '<span class="question">' + questionString + ' = ?</span>';
    },
    // Returns a random number from the chosen range.
    getNumber: function (op, tables = null) {
      if (tables) {
        return tables[Math.floor(Math.random() * tables.length)];
      }
      else {
        var min = 0;
        if (op == '/') {
          min = 1;
        }
        var max = 12;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    },
    // Ops have a non-numeric array key.
    getOp: function (settings) {
      var ops = settings.getSettings();
      var chosenOps = [];
      Object.keys(ops).forEach(function(key) {
        if (ops[key] == 1 && isNaN(parseFloat(key))) {
          chosenOps.push(key);
        }
      });
      return chosenOps[Math.floor(Math.random() * chosenOps.length)];
    },
    // Tables have a numeric array key.
    getTables: function (settings) {
      var tables = settings.getSettings();
      var chosenTables = [];
      Object.keys(tables).forEach(function(key) {
        if (tables[key] == 1 && !isNaN(parseFloat(key))) {
          chosenTables.push(key);
        }
      });
      return chosenTables;
    },
    clearInput: function () {
      var input = document.getElementById('answer-input');
      input.value = '';
      input.focus();
    }
  };
});
