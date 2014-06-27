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
				console.log ((i+1) / @opts.markerEvery - 1)
				console.log maybeMarker
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
		highstepperLeft = percentCompleted * (960 - 2 * oneEndzoneWidth) + oneEndzoneWidth - highstepperOffset
		content.find(".cbhpg-highstepper").css("left", highstepperLeft);

		# $shade_width = $endzone_width + $progress_bar_width_minus_endzones * $shade_percent_int;
		# $progress_bar_width_minus_endzones = ($main_width - 2 * $endzone_width)
		progressBarWidthMinusEndzones = 960 - 2 * oneEndzoneWidth
		shadeWidth = oneEndzoneWidth + progressBarWidthMinusEndzones * (1 - (@opts.percentCompleted / 100))
		content.find(".cbhpg-shade").css("width", shadeWidth);

		console.log html
		console.log content.html()
		return $('<div>').append(content.clone()).html();
		# return html

module.exports = HighstepperProgressBar