const cssnano = require('cssnano');
// const postcss = require('gulp-postcss');
// const postcss = require('postcss-preset-env');

module.exports = {
	plugins: [
		cssnano({
			preset: 'default',
		})
	]
}
