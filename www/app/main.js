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
    var answerListener = require('answerListener');

    // print(messages.getHello());
    render(setup, 'app');
    answerListener.getListener(document.getElementById("answer-button"));

    render(question.getQuestion(settings), 'question');
});
