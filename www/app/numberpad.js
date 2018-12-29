define(function () {
  function isNumeric(value) {
    return !isNaN(value - parseFloat(value));
  }
  return {
    ui: function() {
      var numberButtons = document.querySelectorAll('.number-button');
      [].forEach.call(numberButtons, function (element) {
        element.addEventListener('click', function(e) {
          var value = this.innerHTML;
          if (isNumeric(value)) {
            // Add to input.
            var input = document.querySelector('#answer-input');
            var inputValue = input.value;
            inputValue += value + "";
            input.value = inputValue;
          }
        });
      });
    }
  }
});
