HighstepperProgressBar = require "./bar"

$.fn.extend
	highstepperProgressBar: (options) ->
		options = options || {}
		bar = new HighstepperProgressBar options
		$(this).html bar.render()
