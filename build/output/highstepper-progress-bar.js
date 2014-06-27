/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var HighstepperProgressBar;

	  HighstepperProgressBar = __webpack_require__(1);

	  $.fn.extend({
	    highstepperProgressBar: function(options) {
	      var bar;
	      options = options || {};
	      bar = new HighstepperProgressBar(options);
	      $(this).html(bar.render());
	      return console.log("heyy");
	    }
	  });

	}).call(this);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	      var html, i, maybeMarker, _i, _ref;
	      console.log(this.opts.markers);
	      html = "";
	      html += "<div class='cbhpg-bar'>";
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
	      return html += "</div>";
	    };

	    return HighstepperProgressBar;

	  })();

	  module.exports = HighstepperProgressBar;

	}).call(this);


/***/ }
/******/ ])