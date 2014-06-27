class HighstepperProgressBar
	constructor: (opts) ->
		@init opts

	init: (opts) ->
		defaultOpts = {
			numYardlines: 19
			percentCompleted: 50
			markers: []
			markerEvery: 2
		}
		@opts = {}
		for key, value of defaultOpts
			@opts[key] = opts[key] or value

	render: ->
		console.log @opts.markers
		html = ""
		html += "<div class='cbhpg-bar'>"
		html += "<div class='cbhpg-endzone'></div>"
		for i in [0..@opts.numYardlines]
			html += "<div class='cbhpg-yardline-space"
			if i is (@opts.numYardlines)
				html += " cbhpg-yardline-space-last"
			html += "'>"
			if ((i+1) % @opts.markerEvery is 0) and i isnt @opts.numYardlines
				html += "<div class='cbhpg-marker'>"
				maybeMarker = @opts.markers[(i+1) / @opts.markerEvery - 1]
				console.log ((i+1) / @opts.markerEvery - 1)
				console.log maybeMarker
				if maybeMarker
					html += maybeMarker
				html += "</div>"
			html += "</div>"
		html += "<div class='cbhpg-endzone'></div>"
		html += "<div class='cbhpg-highstepper'><img src='build/output/calband-highstepper.png'></div></div>"
		html += "</div>"

module.exports = HighstepperProgressBar