# Highstepper progress bar
A jquery plugin for Cal Band's [50,000 dollar donation challenge](http://calband.berkeley.edu/50k-challenge).

### Demos: [progress bar only](http://calband.github.io/highstepper-progress-bar) and [integration with a page](http://calband.berkeley.edu/50k-challenge)

### Usage
In your `<head>`:
```
	<link rel="stylesheet" type="text/css" href="build/output/highstepper-progress-bar.css">
	<script type="text/javascript" src="build/vendor/jquery.min.js"></script>
	<script type="text/javascript" src="build/output/highstepper-progress-bar.js"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			$(".container").highstepperProgressBar({
				// options
			});
	</script>
```