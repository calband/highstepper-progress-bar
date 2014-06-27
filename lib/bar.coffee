class HighstepperProgressBar
	constructor: (opts) ->
		@init opts

	init: (opts) ->
		defaultOpts = {
			numYardlines: 19
			percentCompleted: 50
			markers: []
			markerEvery: 2
			width: 960
		}
		@opts = {}
		for key, value of defaultOpts
			@opts[key] = opts[key] or value

	render: ->
		html = ""
		html += "<div class='cbhpg-bar'>"
		html += "<div class='cbhpg-shade'></div>"
		html += "<div class='cbhpg-endzone'></div>"
		for i in [0..@opts.numYardlines]
			html += "<div class='cbhpg-yardline-space"
			if i is (@opts.numYardlines)
				html += " cbhpg-yardline-space-last"
			html += "'>"
			if ((i+1) % @opts.markerEvery is 0) and i isnt @opts.numYardlines
				html += "<div class='cbhpg-marker'>"
				maybeMarker = @opts.markers[(i+1) / @opts.markerEvery - 1]
				if maybeMarker
					html += maybeMarker
				html += "</div>"
			html += "</div>"
		html += "<div class='cbhpg-endzone'></div>"
		html += "<div class='cbhpg-highstepper'><img src='build/output/calband-highstepper.png'></div></div>"
		html += "</div>"

		content = $ html
		oneEndzoneWidth = 20 + 6 # pixels

		highstepperOffset = 7 # px
		percentCompleted = @opts.percentCompleted / 100
		highstepperLeft = percentCompleted * (@opts.width - 2 * oneEndzoneWidth) + oneEndzoneWidth - highstepperOffset
		content.find(".cbhpg-highstepper").css("left", highstepperLeft);

		progressBarWidthMinusEndzones = @opts.width - 2 * oneEndzoneWidth
		shadeWidth = oneEndzoneWidth + progressBarWidthMinusEndzones * (1 - (@opts.percentCompleted / 100))
		content.find(".cbhpg-shade").css("width", shadeWidth)

		# width: (@field-width - 2 * (@endzone-width + 2 * @endzone-border-width) - @num-yardline-spaces * @yardline-width) / @num-yardline-spaces;
		fieldWidth = @opts.width - 2 # pixels, for border
		numYardlineSpaces = @opts.numYardlines + 1;
		yardlineSpaceWidth = (fieldWidth - 2 * oneEndzoneWidth - @opts.numYardlines * 1) / numYardlineSpaces
		content.find(".cbhpg-yardline-space").css("width", yardlineSpaceWidth)

		content.css("width", fieldWidth)

		return $('<div>').append(content.clone()).html();

module.exports = HighstepperProgressBar