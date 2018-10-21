define(function () {
  return {
    getQuestion: function ($settings) {
      var a = this.getNumber();
      var b = this.getNumber();
      var op = this.getOp($settings);
      return '<span class="question">' + a + ' ' + op + ' ' + b + ' = ?</span>';
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
