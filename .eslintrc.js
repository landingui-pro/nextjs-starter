module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		// suppress errors for missing 'import React' in files
		'react/react-in-jsx-scope': 'off',
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
