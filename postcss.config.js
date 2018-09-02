module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			browsers: 'last 2 versions',
			autoprefixer: {
				grid: true
			}
		},
		'cssnano': process.env.NODE_ENV !== 'production' ? {} : {
			preset: 'default'
		}
	}
}
