define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var question = require('./question');
    var settings = require('./settings');
    var setup = require('./setup');


    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    var render = require('render');

    // print(messages.getHello());
    render(setup, 'app');

    render(question.getQuestion(settings), 'question');
    var correctAnswer = question.getCorrectAnswer();
    var answer = require('answer');
    answer.getListener(document.getElementById("answer-button"), correctAnswer, render);


});
