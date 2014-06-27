module.exports = (grunt) ->
	grunt.loadNpmTasks "grunt-contrib-less"
	grunt.loadNpmTasks "grunt-contrib-coffee"
	grunt.loadNpmTasks "grunt-webpack"
	grunt.loadNpmTasks "grunt-contrib-watch"

	grunt.initConfig {
		less:
			src:
				expand: true,
				cwd: "less",
				src: ["**/*.less"],
				dest: "build/css",
				ext: ".css"
		coffee:
			src:
				expand: true,
				cwd: "lib"
				src: ["**/*.coffee"]
				dest: "build/lib"
				ext: ".js"
		webpack:
			build:
				entry: "./build/lib/application.js"
				output: {
					path: "build/output"
					filename: "highstepper-progress-bar.js"
				}
		watch:
			less:
				files: ["less/**/*.less"],
				tasks: ["less"]
			coffee:
				files: ["lib/**/*.coffee"],
				tasks: ["coffee", "webpack:build"]
	}
