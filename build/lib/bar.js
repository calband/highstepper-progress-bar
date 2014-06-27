(function() {
  var HighstepperProgressBar;

  HighstepperProgressBar = (function() {
    function HighstepperProgressBar(opts) {
      this.init(opts);
    }

    HighstepperProgressBar.prototype.init = function(opts) {
      var defaultOpts, key, value, _results;
      defaultOpts = {
        numYardlines: 19,
        percentCompleted: 50,
        markers: [],
        markerEvery: 2
      };
      this.opts = {};
      _results = [];
      for (key in defaultOpts) {
        value = defaultOpts[key];
        _results.push(this.opts[key] = opts[key] || value);
      }
      return _results;
    };

    HighstepperProgressBar.prototype.render = function() {
      var content, highstepperLeft, highstepperOffset, html, i, maybeMarker, oneEndzoneWidth, percentCompleted, progressBarWidthMinusEndzones, shadeWidth, _i, _ref;
      console.log(this.opts.markers);
      html = "";
      html += "<div class='cbhpg-bar'>";
      html += "<div class='cbhpg-shade'></div>";
      html += "<div class='cbhpg-endzone'></div>";
      for (i = _i = 0, _ref = this.opts.numYardlines; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        html += "<div class='cbhpg-yardline-space";
        if (i === this.opts.numYardlines) {
          html += " cbhpg-yardline-space-last";
        }
        html += "'>";
        if (((i + 1) % this.opts.markerEvery === 0) && i !== this.opts.numYardlines) {
          html += "<div class='cbhpg-marker'>";
          maybeMarker = this.opts.markers[(i + 1) / this.opts.markerEvery - 1];
          console.log((i + 1) / this.opts.markerEvery - 1);
          console.log(maybeMarker);
          if (maybeMarker) {
            html += maybeMarker;
          }
          html += "</div>";
        }
        html += "</div>";
      }
      html += "<div class='cbhpg-endzone'></div>";
      html += "<div class='cbhpg-highstepper'><img src='build/output/calband-highstepper.png'></div></div>";
      html += "</div>";
      content = $(html);
      oneEndzoneWidth = 20 + 6;
      highstepperOffset = 7;
      percentCompleted = this.opts.percentCompleted / 100;
      highstepperLeft = percentCompleted * (960 - 2 * oneEndzoneWidth) + oneEndzoneWidth - highstepperOffset;
      content.find(".cbhpg-highstepper").css("left", highstepperLeft);
      progressBarWidthMinusEndzones = 960 - 2 * oneEndzoneWidth;
      shadeWidth = oneEndzoneWidth + progressBarWidthMinusEndzones * (1 - (this.opts.percentCompleted / 100));
      content.find(".cbhpg-shade").css("width", shadeWidth);
      console.log(html);
      console.log(content.html());
      return $('<div>').append(content.clone()).html();
    };

    return HighstepperProgressBar;

  })();

  module.exports = HighstepperProgressBar;

}).call(this);
