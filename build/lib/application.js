(function() {
  var HighstepperProgressBar;

  HighstepperProgressBar = require("./bar");

  $.fn.extend({
    highstepperProgressBar: function(options) {
      var bar;
      options = options || {};
      bar = new HighstepperProgressBar(options);
      return $(this).html(bar.render());
    }
  });

}).call(this);
