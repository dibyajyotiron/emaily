module.exports = {
	extends: 'airbnb-base',
	rules: {
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: 'next|res|req|err',
			},
		],
		'max-len': ['warn', { code: 80 }],
		'global-require': 0,
		'linebreak-style': 0,
		'no-console': ['warn', { allow: ['warn', 'info'] }],
	},
};
