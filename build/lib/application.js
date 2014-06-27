(function() {
  var HighstepperProgressBar;

  HighstepperProgressBar = require("./bar");

  $.fn.extend({
    highstepperProgressBar: function(options) {
      var bar;
      bar = new HighstepperProgressBar(options);
      $(this).html(bar.render());
      return console.log("heyy");
    }
  });

}).call(this);
