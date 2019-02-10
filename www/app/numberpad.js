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
            var inputValue = input.innerHTML.trim();
            inputValue = inputValue.trim();
            inputValue = inputValue.concat(value);
            input.innerHTML = inputValue.replace(/[^\d.-]/g, '');
          }
        });
      });
      var deleteButton = document.querySelector('#delete-button');
      deleteButton.addEventListener('click', function(e) {
        document.querySelector('#answer-input').innerHTML = '';
      });
    }
  }
});
