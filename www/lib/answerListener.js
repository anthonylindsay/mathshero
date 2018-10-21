define(function () {
  return {
    getListener: function (elem) {
      elem.addEventListener("click", function(e) {
        e.preventDefault();
        console.log('click!');
          // document.getElementById("demo").innerHTML = "Hello World";
      });
    }
  }
});
