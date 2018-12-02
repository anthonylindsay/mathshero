define(function (require) {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  var messages = require('./messages');
  var settings = require('./settings');
  var setup = require('./setup');


  // Load library/vendor modules using
  // full IDs, like:
  var render = require('render');
  var answer = require('answer');


  // setup does initial html.
  render(setup, 'app');
  // Instantiates a question.
  refreshQuestion();
  // and registers a listener.
  var answerButton = document.getElementById("answer-button");
  answerButton.addEventListener("click", function(e) {
    e.preventDefault();
    // Instantiate new answer.
    answer = new require('answer', e);
    var correctAnswer = question.getCorrectAnswer();
    console.log('fire');
    // Check answer.
    answer.checkAnswer(question, render);
    // Refresh question.
    refreshQuestion();
  });

  /**
   * Instantiates a new question and gets it rendered.
   */
  function refreshQuestion() {
    question = new require('./question');
    render(question.getQuestion(settings), 'question');
  }
});
