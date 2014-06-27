# Highstepper progress bar
A jquery plugin for Cal Band's [50,000 dollar donation challenge](http://calband.berkeley.edu/50k-challenge).

### Demos: [progress bar only](http://calband.github.io/highstepper-progress-bar) and [integration with a page](http://calband.berkeley.edu/50k-challenge)

### Usage
In your `<head>`:
```html
	<link rel="stylesheet" type="text/css" href="build/output/highstepper-progress-bar.css">
	<script type="text/javascript" src="build/vendor/jquery.min.js"></script>
	<script type="text/javascript" src="build/output/highstepper-progress-bar.js"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			$(".container").highstepperProgressBar({
				// options
			});
		});
	</script>
```

### Supported options
Defaults are shown here as the values.
```javascript
$(".container").highstepperProgressBar({
	numYardlines: 19         // number of yardlines on the field
	percentCompleted: 50     // percent (out of 100) that the progress bar is completed
	markers: []              // array of strings to mark the yardlines with
	markerEvery: 2           // markers should appear only every <value> yardlines
	width: 960               // total bar width, in pixels
});
```