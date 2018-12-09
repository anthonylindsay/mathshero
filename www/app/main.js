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
  var json = require('json2');

  // setup does initial html.
  render(setup, 'app');
  render(settings.getHTML(), 'settings');
  settings.setUIValues();

  var settingsFormElements = document.querySelectorAll('.form-item input');
  settingsFormElements.forEach(function (element) {
    element.addEventListener('change', function(e) {
      settings.save();
    });
  });
  // Instantiates a question.
  refreshQuestion();
  // and registers a listener.
  var answerButton = document.getElementById("answer-button");
  answerButton.addEventListener("click", function(e) {
    e.preventDefault();
    // Instantiate new answer.
    answer = new require('answer', e);
    var correctAnswer = question.getCorrectAnswer();
    // Check answer.
    answer.checkAnswer(question, render);
    // Refresh question.
    refreshQuestion();
  });

  // Register listener for saving settings.
  // @todo

  /**
   * Instantiates a new question and gets it rendered.
   */
  function refreshQuestion() {
    question = new require('./question');
    render(question.getQuestion(settings), 'question');
    question.clearInput();
  }
});
