HighstepperProgressBar = require "./bar"

$.fn.extend
	highstepperProgressBar: (options) ->
		bar = new HighstepperProgressBar options
		$(this).html bar.render()
		console.log "heyy"